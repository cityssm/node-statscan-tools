import { provincesTerritories } from './lookups.js'
import type { ProvinceTerritoryWithAlphaCode } from './types.js'

/**
 * Check if a string is a valid province or territory abbreviation.
 * @param abbreviation - The abbreviation to check.
 * @returns `true` if the abbreviation is valid, `false` otherwise.
 */
export function isProvinceTerritoryAbbreviation(
  abbreviation: string
): abbreviation is keyof typeof provincesTerritories {
  return abbreviation in provincesTerritories
}

/**
 * Find a province or territory by its abbreviation, name, or alias.
 * @param abbreviationOrName - The abbreviation, name, or alias to search for.
 * @returns The matching province or territory with its alpha code, or `undefined` if not found.
 */
export function findProvinceTerritory(
  abbreviationOrName: string
): ProvinceTerritoryWithAlphaCode | undefined {
  const searchString = abbreviationOrName.toLowerCase()

  for (const [alphaCode, data] of Object.entries(provincesTerritories)) {
    if (
      alphaCode.toLowerCase() === searchString ||
      data.name.toLowerCase() === searchString ||
      data.frenchName.toLowerCase() === searchString ||
      data.englishAbbreviation.toLowerCase() === searchString ||
      data.frenchAbbreviation.toLowerCase() === searchString ||
      data.aliases.some((alias) => alias.toLowerCase() === searchString)
    ) {
      return { ...data, alphaCode }
    }
  }

  return undefined
}
