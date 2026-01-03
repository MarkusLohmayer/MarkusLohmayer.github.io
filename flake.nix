{
  description = "Web development";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";

    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    systems.url = "github:nix-systems/default";
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;

      perSystem =
        {
          pkgs,
          ...
        }:
        {
          devShells.default = pkgs.mkShell {
            packages = [
              pkgs.nodejs
            ];
          };
        };
    };
}
