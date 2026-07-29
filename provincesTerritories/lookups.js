export const provincesTerritories = {
    AB: {
        frenchName: 'Alberta',
        name: 'Alberta',
        region: 'Prairies',
        englishAbbreviation: 'Alta.',
        frenchAbbreviation: 'Alb.',
        aliases: []
    },
    BC: {
        frenchName: 'Colombie-Britannique',
        name: 'British Columbia',
        region: 'British Columbia',
        englishAbbreviation: 'B.C.',
        frenchAbbreviation: 'C.-B.',
        aliases: []
    },
    MB: {
        frenchName: 'Manitoba',
        name: 'Manitoba',
        region: 'Prairies',
        englishAbbreviation: 'Man.',
        frenchAbbreviation: 'Man.',
        aliases: []
    },
    NB: {
        frenchName: 'Nouveau-Brunswick',
        name: 'New Brunswick',
        region: 'Atlantic',
        englishAbbreviation: 'N.B.',
        frenchAbbreviation: 'N.-B.',
        aliases: []
    },
    NL: {
        frenchName: 'Terre-Neuve-et-Labrador',
        name: 'Newfoundland and Labrador',
        region: 'Atlantic',
        englishAbbreviation: 'N.L.',
        frenchAbbreviation: 'T.-N.-L.',
        aliases: ['Newfoundland', 'Labrador', 'Terre-Neuve']
    },
    NS: {
        frenchName: 'Nouvelle-Écosse',
        name: 'Nova Scotia',
        region: 'Atlantic',
        englishAbbreviation: 'N.S.',
        frenchAbbreviation: 'N.-É.',
        aliases: []
    },
    NT: {
        frenchName: 'Territoires du Nord-Ouest',
        name: 'Northwest Territories',
        region: 'Territories',
        englishAbbreviation: 'N.W.T.',
        frenchAbbreviation: 'T.N.-O.',
        aliases: []
    },
    NU: {
        frenchName: 'Nunavut',
        name: 'Nunavut',
        region: 'Territories',
        englishAbbreviation: 'Nun.',
        frenchAbbreviation: 'Nun.',
        aliases: []
    },
    ON: {
        frenchName: 'Ontario',
        name: 'Ontario',
        region: 'Ontario',
        englishAbbreviation: 'Ont.',
        frenchAbbreviation: 'Ont.',
        aliases: []
    },
    PE: {
        frenchName: 'Île-du-Prince-Édouard',
        name: 'Prince Edward Island',
        region: 'Atlantic',
        englishAbbreviation: 'P.E.I.',
        frenchAbbreviation: 'Î.-P.-É.',
        aliases: []
    },
    QC: {
        frenchName: 'Québec',
        name: 'Quebec',
        region: 'Quebec',
        englishAbbreviation: 'Que.',
        frenchAbbreviation: 'Qc',
        aliases: []
    },
    SK: {
        frenchName: 'Saskatchewan',
        name: 'Saskatchewan',
        region: 'Prairies',
        englishAbbreviation: 'Sask.',
        frenchAbbreviation: 'Sask.',
        aliases: []
    },
    YT: {
        frenchName: 'Yukon',
        name: 'Yukon',
        region: 'Territories',
        englishAbbreviation: 'Y.T.',
        frenchAbbreviation: 'Y.T.',
        aliases: []
    }
};
export const provincesTerritoriesAlphaCodes = Object.keys(provincesTerritories);
export const provincesTerritoriesNames = Object.values(provincesTerritories)
    .map((provinceTerritory) => provinceTerritory.name)
    .toSorted((a, b) => a.localeCompare(b));
