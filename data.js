export const alertTypes = [
  {code: 'BZW', name: 'Blizzard Warning'},
  {code: 'CFA', name: 'Coastal Flood Watch'},
  {code: 'CFW', name: 'Coastal Flood Warning'},
  {code: 'DSW', name: 'Dust Storm Warning'}
];

export const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
];

export const activeAlerts = [
  {
    pk: 1,
    type: 'tornado/severe thunderstorm',
    timeBegin: 'now',
    timeEnd: 'never'
  },
  {
    pk: 2,
    type: 'tornado/severe thunderstorm',
    timeBegin: 'tomorrow',
    timeEnd: 'never'
  }
]
