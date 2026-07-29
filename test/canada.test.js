import assert from 'node:assert';
import { describe, it } from 'node:test';
import * as canada from '../canada/index.js';
await describe('statscan-tools/canada/lookups', async () => {
    await it('should have a two-letter alpha code for Canada', () => {
        const alphaCode = canada.twoLetterCountryCode;
        assert.match(alphaCode, /^[A-Z]{2}$/v, `Canada alpha code ${alphaCode} is not two capital letters`);
    });
    await it('should have a three-letter alpha code for Canada', () => {
        const alphaCode = canada.threeLetterCountryCode;
        assert.match(alphaCode, /^[A-Z]{3}$/v, `Canada alpha code ${alphaCode} is not three capital letters`);
    });
});
await describe('statscan-tools/canada/utilities', async () => {
    await it('should recognize Canada by two-letter alpha code', () => {
        const result = canada.isCanada('CA');
        assert.ok(result, 'Expected CA to be recognized as Canada, but it was not');
    });
    await it('should recognize Canada by three-letter alpha code', () => {
        const result = canada.isCanada('CAN');
        assert.ok(result, 'Expected CAN to be recognized as Canada, but it was not');
    });
    await it('should recognize Canada by name', () => {
        const result = canada.isCanada('Canada');
        assert.ok(result, 'Expected Canada to be recognized as Canada, but it was not');
    });
    await it('should return false for non-Canada inputs', () => {
        const result1 = canada.isCanada('US');
        assert.ok(!result1, 'Expected US to not be recognized as Canada, but it was');
        const result2 = canada.isCanada('United States');
        assert.ok(!result2, 'Expected United States to not be recognized as Canada, but it was');
    });
});
