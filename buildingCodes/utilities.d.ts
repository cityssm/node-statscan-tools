import { buildingCodes } from './lookups.js';
import type { BuildingCode } from './types.js';
export declare function findBuildingCode(codeNameOrExample: string): Array<BuildingCode & {
    code: string;
}>;
export declare function isBuildingCode(code: string): code is keyof typeof buildingCodes;
