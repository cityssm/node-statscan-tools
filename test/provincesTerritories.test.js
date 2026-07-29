import assert from 'node:assert';
import { describe, it } from 'node:test';
import * as provincesTerritories from '../provincesTerritories/index.js';
await describe('statscan-tools/provincesTerritories/lookups', async () => {
    await it('should have a clean set of alpha codes and aliases', () => {
        for (const [alphaCode, provinceTerritory] of Object.entries(provincesTerritories.provincesTerritories)) {
            assert.match(alphaCode, /^[A-Z]{2}$/v, `Province/Territory alpha code ${alphaCode} is not two capital letters`);
            assert.strictEqual(provinceTerritory.aliases.some((alias) => alias.toLowerCase() === provinceTerritory.name.toLowerCase() ||
                alias.toLowerCase() === provinceTerritory.frenchName.toLowerCase()), false, `Province/Territory ${provinceTerritory.name} has an unnecessary alias that matches its name`);
        }
    });
    await it('should have sorted alpha codes', () => {
        const alphaCodes = Object.keys(provincesTerritories.provincesTerritories);
        const sortedAlphaCodes = alphaCodes.toSorted((a, b) => a.localeCompare(b));
        for (const [index, alphaCode] of alphaCodes.entries()) {
            if (alphaCode !== sortedAlphaCodes[index]) {
                assert.fail(`Province/Territory alpha codes are not sorted. Expected ${sortedAlphaCodes[index]} at index ${index}, but found ${alphaCode}`);
            }
        }
    });
});
await describe('statscan-tools/provincesTerritories/utilities', async () => {
    await it('should find provinces/territories by abbreviation', () => {
        const results = provincesTerritories.findProvinceTerritory('ON');
        assert.ok(results !== undefined, 'Expected to find a result for ON, but found none');
    });
    await it('should find provinces/territories by name', () => {
        const results = provincesTerritories.findProvinceTerritory('Ontario');
        assert.ok(results !== undefined, 'Expected to find a result for Ontario, but found none');
    });
    await it('should find provinces/territories by alias', () => {
        const results = provincesTerritories.findProvinceTerritory('Québec');
        assert.ok(results !== undefined, 'Expected to find a result for Québec, but found none');
    });
    await it('should return undefined if no matches are found', () => {
        const results = provincesTerritories.findProvinceTerritory('non-existent province');
        assert.strictEqual(results, undefined, 'Expected no results, but got some');
    });
    await it('should validate correct province/territory abbreviations', () => {
        assert.ok(provincesTerritories.isProvinceTerritoryAbbreviation('ON'), 'Expected ON to be a valid province/territory abbreviation');
    });
    await it('should invalidate incorrect province/territory abbreviations', () => {
        assert.ok(!provincesTerritories.isProvinceTerritoryAbbreviation('XX'), 'Expected XX to be an invalid province/territory abbreviation');
    });
});
