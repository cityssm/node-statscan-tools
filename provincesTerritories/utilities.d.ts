import { provincesTerritories } from './lookups.js';
import type { ProvinceTerritoryWithAlphaCode } from './types.js';
export declare function isProvinceTerritoryAbbreviation(abbreviation: string): abbreviation is keyof typeof provincesTerritories;
export declare function findProvinceTerritory(abbreviationOrName: string): ProvinceTerritoryWithAlphaCode | undefined;
