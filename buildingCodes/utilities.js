import { buildingCodes } from './lookups.js';
export function findBuildingCode(codeNameOrExample) {
    const searchString = codeNameOrExample.toLowerCase();
    const results = [];
    for (const [code, data] of Object.entries(buildingCodes)) {
        if (data.codeName.toLowerCase() === searchString ||
            data.examples
                .map((example) => example.toLowerCase())
                .includes(searchString)) {
            results.push({ ...data, code });
        }
    }
    return results;
}
