import {
  countryName,
  threeLetterCountryCode,
  twoLetterCountryCode
} from './lookups.js'

/**
 * Checks if a string is equal to "Canada" or the two-letter or three-letter ISO country code for Canada (case-insensitive)
 * @param possibleCanadaString - The string to check
 * @returns `true` if the string is equal to "Canada" or the two-letter or three-letter ISO country code for Canada (case-insensitive), otherwise `false`
 */
export function isCanada(possibleCanadaString: string): boolean {
  const trimmedPossibleCanadaString = possibleCanadaString.trim().toUpperCase()

  return (
    trimmedPossibleCanadaString === countryName.toUpperCase() ||
    trimmedPossibleCanadaString === twoLetterCountryCode.toUpperCase() ||
    trimmedPossibleCanadaString === threeLetterCountryCode.toUpperCase()
  )
}
