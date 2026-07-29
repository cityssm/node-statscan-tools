import assert from 'node:assert'
import { describe, it } from 'node:test'

import * as buildingCodes from '../buildingCodes/index.js'

await describe('statscan-tools/buildingCodes/lookups', async () => {
  await it('should have three-digit building codes', () => {
    for (const code of Object.keys(buildingCodes.buildingCodes)) {
      assert.match(
        code,
        /^\d{3}$/v,
        `Building code ${code} is not three digits`
      )
    }
  })
})

await describe('statscan-tools/buildingCodes/utilities', async () => {
  await it('should find building codes by code name', () => {
    const results = buildingCodes.findBuildingCode('Single House')

    assert.ok(
      results.length > 0,
      'Expected to find at least one result for Single House, but found none'
    )
  })

  await it('should find building codes by example', () => {
    const results = buildingCodes.findBuildingCode('duplex')

    assert.ok(
      results.length > 0,
      'Expected to find at least one result for duplex, but found none'
    )
  })

  await it('should return an empty array if no matches are found', () => {
    const results = buildingCodes.findBuildingCode('non-existent code')

    assert.ok(
      results.length === 0,
      'Expected to find no results for non-existent code, but found some'
    )
  })

  await it('should validate correct building codes', () => {
    assert.ok(
      buildingCodes.isBuildingCode('110'),
      'Expected 110 to be a valid building code'
    )
  })

  await it('should invalidate incorrect building codes', () => {
    assert.ok(
      !buildingCodes.isBuildingCode('999'),
      'Expected 999 to be an invalid building code'
    )
  })
})
