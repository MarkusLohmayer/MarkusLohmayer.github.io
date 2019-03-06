---
layout: post
title: "Installing and managing scientific software packages with spack and lmod on macOS"
tags: [spack, HPC, package manager, macOS]
---

Scientific software libraries often have many dependencies and hence installation can be a real burden. The use of a tool named [spack package manager](https://github.com/spack/spack) can mitigate certain pains that users often face before getting any 'real work' done and it also helps to keep things organized.

<!--more-->

Often it is is not necessary to manually compile scientific software. From my viewpoint the [conda package manager](https://conda.io) (e.g. [miniconda](https://conda.io/miniconda.html) in combination with [conda-forge](https://conda-forge.org)) is an excellent choice in this case.

Nevertheless, installing binaries is not always the best option. Often it is not even feasible. I really struggled with this, thinking that setting up the the necessary software dependencies for certain projects takes way to much time. I eventually started to use the spack package manager which is mainly intended for applications in the HPC world. There are many things that I like about spack:

- installing it is almost as easy as cloning a git repo
- it comes with many installation recipies
- it deals with dependencies and build options
- it has a nice syntax to specify builds
- it automatically generates module files

In this post I want to share how I setup spack and the [lmod module system](https://lmod.readthedocs.io) to manage scientific software libraries on a computer running macOS.
I use LLVM (clang and clang++) together with gfortran from gcc (mixed toolchain).

## Setup

- Install command line developer tools:
```bash
xcode-select --install
```

- Install some more basics with [brew package manager](https://brew.sh):
```bash
brew install autoconf automake cmake git openssl
```

- Let spack know about the system packages by editing `~/.spack/packages.yaml`.  
  Copy this into the file:
```yaml
packages:
    #all:
    #    compiler: [clang@7.0.0]
    autoconf:
        paths:
            autoconf@2.69: /usr/local/opt/autoconf
            buildable: False
    automake:
        paths:
            automake@1.16.1: /usr/local/opt/automake
            buildable: False
    cmake:
        paths:
            cmake@3.11.1: /usr/local/opt/cmake
            buildable: False
    curl:
        paths:
            curl@7.54: /usr
            buildable: False
    git:
        paths:
            git@2.16.2: /usr/local/opt/git
            buildable: False
    openssl:
        paths:
            openssl@1.0.2o: /usr/local/opt/openssl
            buildable: False
    perl:
        paths:
            perl@5.18.2: /usr
            buildable: False
```
Make sure to adapt the version numbers accordingly.
Usually you can find out what versions you have by calling the individual commands with the `--version` flag.

- Fork spack on github.com and clone it:
```bash
git clone https://github.com/<your_github_user_name>/spack.git
cd spack
```
Of course it is not necessary to fork spack on GitHub, but I hope you consider contributing to the project (e.g. improve build recipies) at some point.

- Add the official spack repository as remote (in case you did fork it):
```bash
git remote add upstream https://github.com/spack/spack.git
```

- Find the system compiler:
```bash
bin/spack compiler find
```
Add compiler flags in `compilers.yaml`
```yaml
flags:
  cflags: -march=native
  cxxflags: -march=native
```
You can add gfortran (instaled via `brew install gcc`) as a Fortran compiler to the system's clang compiler if you want but I guess it is
not necessary. The idea is to use the system compilers (including compilers installed via brew) only to compile other comilers such as LLVM
and gcc via spack. Note also that the system's clang compiler does for instance not support OpenMP. The compilers compiled with spack will
then be used to install all further scientific libraries with spack.
You should also use them to eventually compile your own applications leveraging these libararies.
Usually it is a good idea to compile all parts of an application with the same compiler.

- Install module system lmod:
```bash
bin/spack install lmod
```

- Configure spacks generation of lmod module files by editing `~/.spack/modules.yaml`:
```yaml
modules:
  enable::
    - lmod
  lmod:
    core_compilers:
      - 'clang@10.0.0-apple'  # your system compiler here
    hierarchy:
      - mpi
    hash_length: 7
    whitelist:
      - gcc
      - llvm
    blacklist:
      - '%clang@10.0.0-apple' # adapt if necessary
    all:
      suffixes:
        '^openblas': openblas
        '^python@2:': py2
        '^python@3:': py3
      environment:
        set:
          '${PACKAGE}_ROOT': '${PREFIX}'
```

- Make spack command, shell integration and lmod available by editing `~/.bash_profile`:
```bash
export SPACK_ROOT=/Users/<your_user>/spack
function spack {
  # overwrites spack command
  # if not yet initialized, initialize spack's shell integration
  if [ -z ${SPACK_SHELL+x} ] ; then
      source $($SPACK_ROOT/bin/spack location -i lmod)/lmod/lmod/init/bash
      source $SPACK_ROOT/share/spack/setup-env.sh
      module unuse $SPACK_ROOT
      module use $SPACK_ROOT/share/spack/lmod/darwin-mojave-x86_64/Core/ # adapt this path if you are not on mojave
  fi
  # run the real actual command with all passed parameters
  $SPACK_ROOT/bin/spack "$@"
}
```
Since sourcing `setup-env.sh` for every terminal launched is not ideal,
this function defers sourcing `setup-env.sh` until you need it.
The **first** time you call `spack` in a terminal session will load
`setup-env.sh`.  Each subsequent call to `spack` **within the same terminal session**
will skip sourcing `setup-env.sh` (since it has already been loaded).

- Comile the recent compilers. For instance run:
```bash
spack install llvm
module load llvm
spack compiler find
module unload llvm
```

Repeat the same procedure for gcc if you want.

Uncomment the first two lines in `~/.spack/packages.yaml` to set the default compiler.

Edit `~/.spack/darwin/compilers.yaml`:

- add `-march=native` flags (as done with the core compiler).
- add gfortran (from gcc) as a Fortran compiler for llvm (if it did not happen automatically).
- remove any compilers which you don't want to use with spack


## Use

Now you have spack, the lmod module system and two recent compilers ready for use.
Note that you have to call `spack` at least once before you can use the `module` command.

Example:

```bash
spack # only to load lmod (and spack shell integration)
module load llvm
module load openmpi
module load eigen
```

Now CMake will be able to find the clang compiler and the openmpi and eigen libraries that I installed with spack.
Much better than hard-coded path hints.


If you have any feedback on this don't hesitate to reach out.

One last hint: If a build fails mysteriously,
you can try something like `spack install -j2 <package name>`.
This tells make to only use two cores and thus prevents the situation of running out of memory.

