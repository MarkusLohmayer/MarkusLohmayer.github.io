export interface Software {
    icon: string;
    name: string;
    href: string;
    summary: string;
  }


  export const software: Software[] = [
    {
      icon: 'fa-solid fa-file-code',
      name: 'EPHS.jl',
      href: 'https://markuslohmayer.github.io/EPHS.jl',
      summary: `
        The prototype implementation
        of the EPHS modeling language
        is built using Julia as a host language.
        As its foundation,
        the software package implements
        directories as an immutable, monadic data structure
        for organizing hierarchical systems.
        It also includes 
        a custom-built computer algebra system (CAS)
        that supports symbolic differentiation and code generation.
        The compositional syntax
        for interconnecting subsystems into composite systems
        is likewise implemented as
        an immutable data structure
        based on directories,
        with support for both
        textual representation
        and SVG-based graphical display.
        Nested composite systems can be automatically translated into
        systems of differential or differential-algebraic equations (DAEs).
        To eliminate overhead from
        the modular and hierarchical model specification,
        numerical simulation relies on
        system-specific code generation.
      `,
    },
  ];