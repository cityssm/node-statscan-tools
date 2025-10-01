import { buildingCodes } from './lookups.js'
import type { BuildingCode } from './types.js'

/**
 * Find building codes by code name or example.
 * @param codeNameOrExample The code name or example to search for.
 * @returns An array of matching building codes.
 */
export function findBuildingCode(
  codeNameOrExample: string
): Array<BuildingCode & { code: string }> {
  const searchString = codeNameOrExample.toLowerCase()

  const results: Array<BuildingCode & { code: string }> = []

  for (const [code, data] of Object.entries(buildingCodes)) {
    if (
      data.codeName.toLowerCase() === searchString ||
      data.examples
        .map((example) => example.toLowerCase())
        .includes(searchString)
    ) {
      results.push({ ...data, code })
    }
  }

  return results
}
