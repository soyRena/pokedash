export interface Pokemon {
   name: string
   url: string
}

export interface PokemonList {
   count: number
   next: null | string
   previous: null | string
   results: Pokemon[]
}