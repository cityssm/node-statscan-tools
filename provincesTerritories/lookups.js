export const provincesTerritories = {
    AB: {
        name: 'Alberta',
        region: 'Prairies',
        englishAbbreviation: 'Alta.',
        frenchAbbreviation: 'Alb.',
        aliases: []
    },
    BC: {
        name: 'British Columbia',
        region: 'British Columbia',
        englishAbbreviation: 'B.C.',
        frenchAbbreviation: 'C.-B.',
        aliases: ['Colombie-Britannique']
    },
    MB: {
        name: 'Manitoba',
        region: 'Prairies',
        englishAbbreviation: 'Man.',
        frenchAbbreviation: 'Man.',
        aliases: []
    },
    NB: {
        name: 'New Brunswick',
        region: 'Atlantic',
        englishAbbreviation: 'N.B.',
        frenchAbbreviation: 'N.-B.',
        aliases: ['Nouveau-Brunswick']
    },
    NL: {
        name: 'Newfoundland and Labrador',
        region: 'Atlantic',
        englishAbbreviation: 'N.L.',
        frenchAbbreviation: 'T.-N.-L.',
        aliases: ['Newfoundland', 'Labrador', 'Terre-Neuve-et-Labrador', 'Terre-Neuve']
    },
    NS: {
        name: 'Nova Scotia',
        region: 'Atlantic',
        englishAbbreviation: 'N.S.',
        frenchAbbreviation: 'N.-É.',
        aliases: ['Nouvelle-Écosse']
    },
    NT: {
        name: 'Northwest Territories',
        region: 'Territories',
        englishAbbreviation: 'N.W.T.',
        frenchAbbreviation: 'T.N.-O.',
        aliases: ['Territoires du Nord-Ouest']
    },
    NU: {
        name: 'Nunavut',
        region: 'Territories',
        englishAbbreviation: 'Nun.',
        frenchAbbreviation: 'Nun.',
        aliases: []
    },
    ON: {
        name: 'Ontario',
        region: 'Ontario',
        englishAbbreviation: 'Ont.',
        frenchAbbreviation: 'Ont.',
        aliases: []
    },
    PE: {
        name: 'Prince Edward Island',
        region: 'Atlantic',
        englishAbbreviation: 'P.E.I.',
        frenchAbbreviation: 'Î.-P.-É.',
        aliases: ['Île-du-Prince-Édouard']
    },
    QC: {
        name: 'Quebec',
        region: 'Quebec',
        englishAbbreviation: 'Que.',
        frenchAbbreviation: 'Qc',
        aliases: ['Québec']
    },
    SK: {
        name: 'Saskatchewan',
        region: 'Prairies',
        englishAbbreviation: 'Sask.',
        frenchAbbreviation: 'Sask.',
        aliases: []
    },
    YT: {
        name: 'Yukon',
        region: 'Territories',
        englishAbbreviation: 'Y.T.',
        frenchAbbreviation: 'Y.T.',
        aliases: []
    }
};
export const provincesTerritoriesAlphaCodes = Object.keys(provincesTerritories).toSorted((a, b) => a.localeCompare(b));
export const provincesTerritoriesNames = Object.values(provincesTerritories)
    .map((provinceTerritory) => provinceTerritory.name)
    .toSorted((a, b) => a.localeCompare(b));
