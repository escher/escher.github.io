export function niceMapName (name) {
  if (name === 'None') return name
  const [ model, map ] = name.split('.')
  return `${map} (${model})`
}
