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
