import { workCodes } from "./lookups.js";

/**
 * Check if a string is a valid work code.
 * @param code The work code to check.
 * @returns True if the code is valid, false otherwise.
 */
export function isWorkCode(code: string): code is keyof typeof workCodes {
  return code in workCodes
}