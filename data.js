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
    identifier: 'AK1256019731B4.SpecialWeatherStatement.125601A3CF00AK.AJKSPSAJK.7a1e1aeff40544aea786b32b4da447c9',
    type: 'tornado/severe thunderstorm',
    headline: 'Special Weather Statement issued June 03 at 9:33AM AKDT  by NWS Juneau',
    urgency: 'expected',
    effective: 'now',
    expires: '2016-06-03T09:33:00-08:00'
  },
  {
    identifier: 'AR125601977994.FlashFloodWarning.12560197AB94AR.MEGFFSMEG.3444439fa5a9ff39fd17aeb8649b42ae',
    event: 'Flash Flood Warning',
    headline: 'Flash Flood Warning issued June 03 at 2:17PM CDT until June 03 at 3:45PM CDT by NWS Memphis',
    urgency: 'Immediate',
    effective: '2016-06-03T14:17:00-05:00',
    expires: '2016-06-03T15:45:00-05:00'
  }
]
