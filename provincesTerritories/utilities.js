import { provincesTerritories } from './lookups.js';
export function isProvinceTerritoryAbbreviation(abbreviation) {
    return abbreviation in provincesTerritories;
}
export function findProvinceTerritory(abbreviationOrName) {
    const searchString = abbreviationOrName.toLowerCase();
    for (const [alphaCode, data] of Object.entries(provincesTerritories)) {
        if (alphaCode.toLowerCase() === searchString ||
            data.name.toLowerCase() === searchString ||
            data.frenchName.toLowerCase() === searchString ||
            data.englishAbbreviation.toLowerCase() === searchString ||
            data.frenchAbbreviation.toLowerCase() === searchString ||
            data.aliases.some((alias) => alias.toLowerCase() === searchString)) {
            return { ...data, alphaCode };
        }
    }
    return undefined;
}
