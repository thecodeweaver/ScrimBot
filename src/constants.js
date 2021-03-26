module.exports = exports = {
  RANKS: {
    'ANY MIN': 0,

    'IRON 1': 11,
    'IRON 2': 12,
    'IRON 3': 13,

    'BRONZE 1': 21,
    'BRONZE 2': 22,
    'BRONZE 3': 23,

    'SILVER 1': 31,
    'SILVER 2': 32,
    'SILVER 3': 33,

    'GOLD 1': 41,
    'GOLD 2': 42,
    'GOLD 3': 43,

    'PLATINUM 1': 51,
    'PLATINUM 2': 52,
    'PLATINUM 3': 53,

    'DIAMOND 1': 61,
    'DIAMOND 2': 62,
    'DIAMOND 3': 63,

    'IMMORTAL': 71, // eslint-disable-line quote-props

    'RADIANT': 81, // eslint-disable-line quote-props

    'ANY MAX': 99
  },
  RANKS_REVERSED: {
    0: 'ANY MIN',
    11: 'IRON 1',
    12: 'IRON 2',
    13: 'IRON 3',
    21: 'BRONZE 1',
    22: 'BRONZE 2',
    23: 'BRONZE 3',
    31: 'SILVER 1',
    32: 'SILVER 2',
    33: 'SILVER 3',
    41: 'GOLD 1',
    42: 'GOLD 2',
    43: 'GOLD 3',
    51: 'PLATINUM 1',
    52: 'PLATINUM 2',
    53: 'PLATINUM 3',
    61: 'DIAMOND 1',
    62: 'DIAMOND 2',
    63: 'DIAMOND 3',
    71: 'IMMORTAL',
    81: 'RADIANT',
    99: 'ANY MAX'
  },

  MAPS: ['split', 'bind', 'haven', 'ascent', 'icebox'],
  MAPS_THUMBNAILS: {
    split: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2caea7a88362d6aa/5ecd64b0817e574fa1dcc162/split-minimap-2.png',
    bind: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad4274632c983531/5ecd64d04d187c101f3f2486/bind-minimap-2.png',
    haven: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltedb5d57941e4f3f5/5ecd64c14d187c101f3f2484/haven-minimap-2.png',
    ascent: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47bef6aa9e43d8ec/5ecd64df96a8996de38bbf8f/ascent-minimap-2.jpg',
    icebox: 'https://preview.redd.it/sc2cvp60ukr51.jpg?width=3000&format=pjpg&auto=webp&s=efddb43399d680842e1ec85a7a87a174abf048f6'
  },

  GAME_MODES: ['standard', 'spike rush', 'deathmatch', 'escalation', 'elo'],

  AFFIRMATIVE_WORDS: ['yes', 'yeah', 'yea', 'ye', 'yah', 'sure', 'true', '1', 'one', 'on', 'si', 'ok', 'okay', 'k', 'mhm', 'why not', 'alright', 'aight', 'affirmative', 'yeet'],

  MAX_TEAM_COUNT: 5, // maximum amount of players allowed on one team

  ELO_MATCH_WIN: 100, // how many points players gain upon winning

  ELO_MATCH_LOSS: -80, // how many points players lose upon losing

  userRegistrationSteps: [
    ['1. Valorant Username', 'What is your FULL Valorant username? (including tag, e.g. `Username#NA1`)'],
    ['2. Valorant Rank', 'What rank are you in Valorant? If you don\'t have a rank, go with "Iron 1".'],
    ['3. Notifications', 'Do you want to be notified when matches are created? Respond "yes" if you would like to opt-in.']
  ],

  get matchCreationSteps () {
    return [
      ['1. Date & Time', 'When will the match be? If no date is specified the current day is assumed. You can also specify a time zone such as `CST` or `EDT`, defaults to Pacific time. Ex: "Today at 10 AM", "12:30 PM on Saturday", "03/14/2021 at 6:28 PM EST"'],
      ['2. Rank Minimum', 'What is the **MINIMUM** rank you are allowing into your tournament? If any, type "any".'],
      ['3. Rank Maximum', 'What is the **MAXIMUM** rank you are allowing into your tournament? If any, type "any".'],
      ['4. Player Count', `How many players should be on each team? Max ${this.MAX_TEAM_COUNT}.`],
      ['5. Spectators', 'Are spectators allowed?'],
      ['6. Map', `Which map would you like to play on? Options are "${this.MAPS.map(m => this.capitalizeFirstLetter(m)).join('", "')}". If any, type "any".`],
      ['7. Game Mode', `What game mode would you like? Options are "${this.GAME_MODES.map(m => this.capitalizeFirstLetter(m)).join('", "')}".`],
      ['8. Team Captains', 'Would you like to use team captains to select the players for each team instead of players deciding their own team?']
    ]
  },

  capitalizeFirstLetter: string => {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
