export function typeIcons(type: string) {
   const iconsMap = {
      normal: '../../assets/icons/normal.svg',
      fire: '../../assets/icons/fire.svg',
      water: '../../assets/icons/water.svg',
      electric: '../../assets/icons/electric.svg',
      grass: '../../assets/icons/grass.svg',
      ice: '../../assets/icons/ice.svg',
      fighting: '../../assets/icons/fighting.svg',
      poison: '../../assets/icons/poison.svg',
      ground: '../../assets/icons/ground.svg',
      flying: '../../assets/icons/flying.svg',
      psychic: '../../assets/icons/psychic.svg',
      bug: '../../assets/icons/bug.svg',
      rock: '../../assets/icons/rock.svg',
      ghost: '../../assets/icons/ghost.svg',
      dragon: '../../assets/icons/dragon.svg',
      dark: '../../assets/icons/dark.svg',
      steel: '../../assets/icons/steel.svg',
      fairy: '../../assets/icons/fairy.svg'
   }

   return iconsMap[type as keyof typeof iconsMap]
}
