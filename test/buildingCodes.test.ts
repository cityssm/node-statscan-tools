import { describe, it } from 'node:test'

import * as buildingCodes from '../buildingCodes/index.js'

await describe('statscan-tools/buildingCodes/lookups', async () => {
  await it('should have three-digit building codes', () => {
    for (const code in buildingCodes.buildingCodes) {
      if (!/^\d{3}$/.test(code)) {
        throw new Error(`Building code ${code} is not three digits`)
      }
    }
  })
})

await describe('statscan-tools/buildingCodes/utilities', async () => {
  await it('should find building codes by code name', () => {
    const results = buildingCodes.findBuildingCode('Single House')
    if (results.length === 0) {
      throw new Error('Expected to find at least one result, but found none')
    }
  })

  await it('should find building codes by example', () => {
    const results = buildingCodes.findBuildingCode('duplex')
    if (results.length === 0) {
      throw new Error('Expected to find at least one result, but found none')
    }
  })

  await it('should return an empty array if no matches are found', () => {
    const results = buildingCodes.findBuildingCode('non-existent code')
    if (results.length > 0) {
      throw new Error('Expected no results, but got some')
    }
  })

  await it('should validate correct building codes', () => {
    if (!buildingCodes.isBuildingCode('110')) {
      throw new Error('Expected 110 to be a valid building code')
    }
  })

  await it('should invalidate incorrect building codes', () => {
    if (buildingCodes.isBuildingCode('999')) {
      throw new Error('Expected 999 to be an invalid building code')
    }
  })
})
