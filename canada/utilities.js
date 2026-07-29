import { countryName, threeLetterCountryCode, twoLetterCountryCode } from './lookups.js';
export function isCanada(possibleCanadaString) {
    const trimmedPossibleCanadaString = possibleCanadaString.trim().toUpperCase();
    return (trimmedPossibleCanadaString === countryName.toUpperCase() ||
        trimmedPossibleCanadaString === twoLetterCountryCode.toUpperCase() ||
        trimmedPossibleCanadaString === threeLetterCountryCode.toUpperCase());
}
