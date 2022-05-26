import { curry } from 'ramda'

export const urlTemplate = curry((templateString: string, templateVariables: Record<string, any>) =>
  templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g])
)