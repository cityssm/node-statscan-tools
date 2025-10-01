import { workCodes } from "./lookups.js";
export function isWorkCode(code) {
    return code in workCodes;
}
