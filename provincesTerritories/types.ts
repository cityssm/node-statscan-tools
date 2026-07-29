export type Region =
  | 'Atlantic'
  | 'British Columbia'
  | 'Ontario'
  | 'Prairies'
  | 'Quebec'
  | 'Territories'

export interface ProvinceTerritory {
  name: string
  frenchName: string

  region: Region

  englishAbbreviation: string
  frenchAbbreviation: string

  aliases: string[]
}

export interface ProvinceTerritoryWithAlphaCode extends ProvinceTerritory {
  alphaCode: string
}
