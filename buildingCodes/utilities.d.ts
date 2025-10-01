import type { BuildingCode } from './types.js';
export declare function findBuildingCode(codeNameOrExample: string): Array<BuildingCode & {
    code: string;
}>;
