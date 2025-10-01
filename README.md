# Statistics Canada (StatsCan) Tools for Node

_Lookups and utilities for working with Statistics Canada (StatsCan) data._

Current lookups:

- Building permit building codes.
- Building permit work codes.

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
