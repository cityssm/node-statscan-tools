import type { BuildingCode } from './types.js'

/**
 * Residential Building Codes
 * @see https://www.statcan.gc.ca/en/statistical-programs/document/2802_D2_V2
 */
export const residentialBuildingCodes: Record<string, BuildingCode> = {
  '110': {
    codeName: 'Single House',
    examples: [
      'single detached home',
      'bungalow',
      'linked home (linked at the foundation)',
      'single family dwelling'
    ]
  },
  '115': { codeName: 'Single House - Condominium', examples: [] },
  '130': { codeName: 'Mobile home', examples: [] },
  '150': {
    codeName: 'Seasonal Dwelling (unsuitable for year-round occupancy)',
    examples: ['cottage', 'summer home', 'house boat']
  },
  '210': {
    codeName: 'Semi-Detached or Double (side by side), single-attached home',
    examples: []
  },
  '215': {
    codeName: 'Semi-Detached or Double (side by side) - Condominium',
    examples: []
  },
  '310': {
    codeName: 'Apartment',
    examples: ['apartment building', 'duplex', 'triplex', 'quadruple']
  },
  '315': { codeName: 'Apartment - Condominium', examples: [] },
  '330': {
    codeName: 'Row House',
    examples: ['garden home', 'town house', 'carriage home', 'quadrex']
  },
  '335': { codeName: 'Row House - Condominium', examples: [] }
}

/**
 * Non-residential Building Codes
 * @see https://www.statcan.gc.ca/en/statistical-programs/document/2802_D2_V2
 */
export const nonResidentialBuildingCodes: Record<string, BuildingCode> = {
  '410': {
    codeName: 'Primary industry building',
    examples: [
      'farm building',
      'hunting and fishing camp',
      'forestry service',
      'experimental farm',
      'community farm',
      'animal hospital',
      'greenhouse',
      'fish hatchery'
    ]
  },
  '420': { codeName: 'Mining building', examples: [] },
  '430': {
    codeName: 'Plant for manufacturing, processing and assembling goods',
    examples: [
      'factory',
      'plant',
      'mill',
      'bakery',
      'cannery',
      'printing plant'
    ]
  },
  '440': {
    codeName: 'Transportation terminal',
    examples: ['bus and truck terminal', 'airport', 'railway station']
  },
  '450': {
    codeName: 'Maintenance building',
    examples: [
      'hangar',
      'repair shop',
      'accessory building',
      'railway shed',
      'aircraft hangars'
    ]
  },
  '460': {
    codeName: 'Storage building',
    examples: [
      'warehouse (for storage purposes only)',
      'industrial mall',
      'grain elevator',
      'locker rental',
      'silo',
      'quonset',
      'refrigerated storage terminal'
    ]
  },
  '470': {
    codeName: 'Communication building',
    examples: [
      'post office',
      'mail sorting plant',
      'radio station',
      'broadcasting studio',
      'telephone exchange building',
      'motion picture studio'
    ]
  },
  '480': {
    codeName: 'Utility building',
    examples: [
      'hydro control building',
      'oil refinery building',
      'water filtration building',
      'sewage treatment building',
      'natural gas processing plants',
      'pollution abatement and control building',
      'waste disposal facilities',
      'incinerator',
      'sorting factory'
    ]
  },
  '490': {
    codeName: 'Engineering',
    examples: ['parking garage', 'tunnel', 'dock']
  },
  '510': {
    codeName: 'Retail and wholesale outlets',
    examples: [
      'retail outlet',
      'department store',
      'photographic studio',
      'rental service',
      'beauty salon',
      'hairdressing salon',
      'lumber yard',
      'dry cleaner',
      'laundromat'
    ]
  },
  '512': {
    codeName: 'Retail complex',
    examples: ['plaza', 'mall', 'shopping center', 'store/office building']
  },
  '520': {
    codeName: 'Office building',
    examples: [
      'consultant’s office',
      'doctor’s office',
      'insurance company',
      'bank',
      'taxi stand',
      'office/cafeteria',
      'office/smoke shop'
    ]
  },
  '522': {
    codeName: 'Office complex',
    examples: ['office/store', 'office/apartment']
  },
  '530': { codeName: 'Hotel', examples: ['hotel/motel', 'motor hotel'] },
  '532': { codeName: 'Motel', examples: ['cabin'] },
  '534': {
    codeName: 'Other accommodation',
    examples: [
      'student’s residence',
      'boarding house',
      'religious residence',
      'hostel',
      'dormitory'
    ]
  },
  '536': { codeName: 'Convention center', examples: ['exhibition building'] },
  '540': {
    codeName: 'Restaurant',
    examples: ['bar', 'tavern', 'night club', 'diner', 'donut shop']
  },
  '550': {
    codeName: 'Theatre and performing art center',
    examples: [
      'movie theatre',
      'concert hall',
      'opera house',
      'cultural center'
    ]
  },
  '560': {
    codeName: 'Indoor recreational building',
    examples: [
      'sports complex',
      'tennis court and squash',
      'community center',
      'arena',
      'curling club',
      'swimming pool'
    ]
  },
  '562': {
    codeName: 'Outdoor recreational building',
    examples: [
      'country club',
      'golf club',
      'campground facilities',
      'outdoor skating rink',
      'outdoor swimming pool'
    ]
  },
  '570': {
    codeName: 'Motor vehicle show room',
    examples: ['car dealership', 'used car', 'motorcycle and tractor sale']
  },
  '572': {
    codeName: 'Service station, repair garage and specialty shop',
    examples: [
      'gasoline station',
      'service station/car wash',
      'muffler shop',
      'transmission shop',
      'service station/garage'
    ]
  },
  '580': {
    codeName: 'Laboratory and research center',
    examples: [
      'medical research center',
      'industrial laboratory',
      'observatory'
    ]
  },
  '590': {
    codeName: 'Special building use',
    examples: ['funeral director', 'crematorium', 'mausoleum']
  },
  '610': {
    codeName:
      'Government legislative and administration building other than office building',
    examples: [
      'city hall',
      'court of justice',
      'embassy',
      'parliament and senate building'
    ]
  },
  '612': {
    codeName: 'Other government building',
    examples: ['police station', 'prison', 'fire station', 'military building']
  },
  '620': { codeName: 'Elementary school', examples: ['kindergarten'] },
  '622': {
    codeName: 'Secondary school',
    examples: ['high school', 'junior high school']
  },
  '624': {
    codeName: 'Post-secondary institution',
    examples: ['technical institute', 'trade school']
  },
  '626': { codeName: 'University', examples: [] },
  '630': {
    codeName:
      'Library, museum, art gallery, aquarium, botanical garden, archive building, scientific center',
    examples: []
  },
  '640': {
    codeName: 'Hospital',
    examples: ['general', 'military', 'specialized']
  },
  '642': {
    codeName: 'Clinic, health unit',
    examples: ['out-patient clinic', 'first aid station']
  },
  '650': {
    codeName:
      'Day care, nursing home, rest home, home for the blind, charitable home, detoxification center',
    examples: []
  },
  '660': {
    codeName: 'Religious building',
    examples: ['church', 'cathedral', 'temple', 'citadel', 'synagogue']
  }
}

/**
 * Residential and Non-residential Building Codes
 * @see https://www.statcan.gc.ca/en/statistical-programs/document/2802_D2_V2
 */
export const buildingCodes = {
  ...residentialBuildingCodes,
  ...nonResidentialBuildingCodes
}
