# Statistics Canada (StatsCan) Tools for Node

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/statscan-tools)](https://www.npmjs.com/package/@cityssm/statscan-tools)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-statscan-tools.svg/?label=active+issues&show_trend=true&token=SrY1TfBOeltzk6HrjB1-3LBz)](https://app.deepsource.com/gh/cityssm/node-statscan-tools/)
[![codecov](https://codecov.io/gh/cityssm/node-statscan-tools/graph/badge.svg?token=E9HKQWO2Q1)](https://codecov.io/gh/cityssm/node-statscan-tools)

_Lookups and utilities for working with Statistics Canada (StatsCan),
and other Canada-related data._

Current lookups:

- Building permit building codes.
- Building permit work codes.
- Provinces and territories.
- Spellings of "Canada".

## Installation

```bash
npm install @cityssm/statscan-tools
```

## Usage

```javascript
import * as statscanTools from '@cityssm/statscan-tools'

console.log(statscanTools.buildingCodes['110'].codeName)
// => "Single House"
```

## Related Projects

[**MPAC Tools from Node**](https://github.com/cityssm/node-mpac-tools)<br />
Lookups and utilities for working with MPAC data.
