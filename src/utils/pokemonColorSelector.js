import colors from '../data/pokemonTypesColors.json'

export function getPokemonBackgroundColor (type) {
  return colors[type]
}

export const getPokemonTypesColors = (pokemonTypes) => {
  const types = pokemonTypes.map((typeGroup) => {
    const color = getPokemonBackgroundColor(typeGroup.type.name)
    const newTypeGroup = { ...typeGroup }
    newTypeGroup.type.color = color
    return newTypeGroup
  })
  return {
    types,
    color: types[0].type.color
  }
}
