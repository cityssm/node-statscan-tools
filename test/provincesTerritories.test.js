import { describe, it } from 'node:test';
import * as provincesTerritories from '../provincesTerritories/index.js';
await describe('statscan-tools/provincesTerritories/lookups', async () => {
    await it('should have a clean set of alpha codes and aliases', () => {
        for (const [alphaCode, provinceTerritory] of Object.entries(provincesTerritories.provincesTerritories)) {
            if (!/^[A-Z]{2}$/v.test(alphaCode)) {
                throw new Error(`Province/Territory alpha code ${alphaCode} is not two capital letters`);
            }
            if (provinceTerritory.aliases.some((alias) => alias.toLowerCase() === provinceTerritory.name.toLowerCase())) {
                throw new Error(`Province/Territory ${provinceTerritory.name} has an unnecessary alias that matches its name`);
            }
        }
    });
});
await describe('statscan-tools/provincesTerritories/utilities', async () => {
    await it('should find provinces/territories by abbreviation', () => {
        const results = provincesTerritories.findProvinceTerritory('ON');
        if (results === undefined) {
            throw new Error('Expected to find a result for ON, but found none');
        }
    });
    await it('should find provinces/territories by name', () => {
        const results = provincesTerritories.findProvinceTerritory('Ontario');
        if (results === undefined) {
            throw new Error('Expected to find a result for Ontario, but found none');
        }
    });
    await it('should find provinces/territories by alias', () => {
        const results = provincesTerritories.findProvinceTerritory('Québec');
        if (results === undefined) {
            throw new Error('Expected to find a result for Québec, but found none');
        }
    });
    await it('should return undefined if no matches are found', () => {
        const results = provincesTerritories.findProvinceTerritory('non-existent province');
        if (results !== undefined) {
            throw new Error('Expected no results, but got some');
        }
    });
    await it('should validate correct province/territory abbreviations', () => {
        if (!provincesTerritories.isProvinceTerritoryAbbreviation('ON')) {
            throw new Error('Expected ON to be a valid province/territory abbreviation');
        }
    });
    await it('should invalidate incorrect province/territory abbreviations', () => {
        if (provincesTerritories.isProvinceTerritoryAbbreviation('XX')) {
            throw new Error('Expected XX to be an invalid province/territory abbreviation');
        }
    });
});
