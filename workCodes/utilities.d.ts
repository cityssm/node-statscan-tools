import { workCodes } from "./lookups.js";
export declare function isWorkCode(code: string): code is keyof typeof workCodes;
