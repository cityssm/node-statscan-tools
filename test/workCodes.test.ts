import { describe, it } from 'node:test'

import * as workCodes from '../workCodes/index.js'

await describe('statscan-tools/workCodes/lookups', async () => {
  await it('should have two-digit work codes', () => {
    for (const code in workCodes.workCodes) {
      if (!/^\d{2}$/.test(code)) {
        throw new Error(`Work code ${code} is not two digits`)
      }
    }
  })
})

await describe('statscan-tools/workCodes/utilities', async () => {
  await it('should validate correct work codes', () => {
    if (!workCodes.isWorkCode('01')) {
      throw new Error('Expected 01 to be a valid work code')
    }
  })

  await it('should invalidate incorrect work codes', () => {
    if (workCodes.isWorkCode('99')) {
      throw new Error('Expected 99 to be an invalid work code')
    }
  })
})