export interface Pokemon {
   name: string;
   url: string;
}

export interface PokemonList {
   count: number;
   next: string;
   previous: string;
   results: Pokemon[];
}