import assert from 'node:assert';
import { describe, it } from 'node:test';
import * as workCodes from '../workCodes/index.js';
await describe('statscan-tools/workCodes/lookups', async () => {
    await it('should have two-digit work codes', () => {
        for (const code of Object.keys(workCodes.workCodes)) {
            assert.match(code, /^\d{2}$/v, `Work code ${code} is not two digits`);
        }
    });
});
await describe('statscan-tools/workCodes/utilities', async () => {
    await it('should validate correct work codes', () => {
        if (!workCodes.isWorkCode('01')) {
            assert.ok(false, 'Expected 01 to be a valid work code');
        }
    });
    await it('should invalidate incorrect work codes', () => {
        if (workCodes.isWorkCode('99')) {
            assert.ok(false, 'Expected 99 to be an invalid work code');
        }
    });
});
