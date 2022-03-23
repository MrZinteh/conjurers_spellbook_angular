import { StatCollection } from "./stat-collection";

export const FIND_FAMILIARS: StatCollection[] = [
  { name: "Bat", stats: {
      name: "Bat",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "12",
      HP: "1",
      Speed: "5ft., fly 30ft",
      Stats: {
          STR: "2 (-4)",
          DEX: "15 (+2)",
          CON: "8 (-1)",
          INT: "2 (-4)",
          WIS: "12 (+1)",
          CHA: "4 (-3)"
      },
      Skills: null,
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Blindsight 60ft., Pas. Perception 11",
      Languages: "--",
      Description: [
          {label: "Echolocation", value: "No blindsight while deafened.", spells: null},
          {label: "Keen Hearing", value: "Adv. on hearing Perception", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Cat", stats: {
      name: "Cat",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "12",
      HP: "2",
      Speed: "40ft., climb 30ft",
      Stats: {
          STR: "3 (-4)",
          DEX: "15 (+2)",
          CON: "10 (+0)",
          INT: "3 (-4)",
          WIS: "12 (+1)",
          CHA: "7 (-2)"
      },
      Skills: "Perception +3, Stealth +4",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Pas. Perception 13",
      Languages: "--",
      Description: [
          {label: "Keen Smell", value: "Adv. on smelling Perception", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Crab", stats: {
      name: "Crab",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "11",
      HP: "2",
      Speed: "20ft., swim 20ft",
      Stats: {
          STR: "2 (-4)",
          DEX: "11 (+0)",
          CON: "10 (+0)",
          INT: "1 (-5)",
          WIS: "8 (-1)",
          CHA: "2 (-4)"
      },
      Skills: "Stealth +2",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Blindsight 30ft., Pas. Perception 9",
      Languages: "--",
      Description: [
          {label: "Amphibious", value: "Can breathe air and water.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
   } },
  { name: "Frog", stats: {
      name: "Frog",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "11",
      HP: "1",
      Speed: "20ft., swim 20ft",
      Stats: {
          STR: "1 (-5)",
          DEX: "13 (+1)",
          CON: "8 (-1)",
          INT: "1 (-5)",
          WIS: "8 (-1)",
          CHA: "3 (-4)"
      },
      Skills: "Perception +1, Stealth +3",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 30ft., Pas. Perception 11",
      Languages: "--",
      Description: [
          {label: "Amphibious", value: "Can breathe air and water.", spells: null},
          {label: "Standing Leap", value: "Long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Hawk", stats: {
      name: "Hawk",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "11",
      HP: "1",
      Speed: "20ft., swim 20ft",
      Stats: {
          STR: "1 (-5)",
          DEX: "13 (+1)",
          CON: "8 (-1)",
          INT: "1 (-5)",
          WIS: "8 (-1)",
          CHA: "3 (-4)"
      },
      Skills: "Perception +1, Stealth +3",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 30ft., Pas. Perception 11",
      Languages: "--",
      Description: [
          {label: "Amphibious", value: "Can breathe air and water.", spells: null},
          {label: "Standing Leap", value: "Long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Lizard", stats: {
      name: "Lizard",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "10",
      HP: "2",
      Speed: "20ft., climb 20ft",
      Stats: {
          STR: "2 (-4)",
          DEX: "11 (+0)",
          CON: "10 (+0)",
          INT: "1 (-5)",
          WIS: "8 (-1)",
          CHA: "3 (-4)"
      },
      Skills: null,
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 30ft., Pas. Perception 9",
      Languages: "--",
      Description: [],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Octopus", stats: {
    name: "Octopus",
    subName: null,
    type: "Fey",
    size: "Small",
    AC: "12",
    HP: "3",
    Speed: "5ft., swim 30ft",
    Stats: {
        STR: "4 (-3)",
        DEX: "15 (+2)",
        CON: "11 (+0)",
        INT: "3 (-4)",
        WIS: "10 (+0)",
        CHA: "4 (-3)"
    },
    Skills: "Perception +2, Stealth +4",
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: null,
    ConditionImmunities: null,
    Senses: "Darkvision 30ft., Pas. Perception 12",
    Languages: "--",
    Description: [
        {label: "Hold Breath", value: "While out of water, can hold its breath for 30 minutes.", spells: null},
        {label: "Underwater Camouflage", value: "Adv. on Stealth checks made while underwater.", spells: null},
        {label: "Water Breathing", value: "Can breathe only underwater.", spells: null}
    ],
    Actions: null,
    BonusActions: null,
    Reactions: null
  } },
  { name: "Owl", stats: {
      name: "Owl",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "11",
      HP: "1",
      Speed: "5ft., fly 60ft",
      Stats: {
          STR: "3 (-4)",
          DEX: "13 (+1)",
          CON: "8 (-1)",
          INT: "2 (-4)",
          WIS: "12 (+1)",
          CHA: "7 (-2)"
      },
      Skills: "Perception +3, Stealth +3",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 120ft., Pas. Perception 13",
      Languages: "--",
      Description: [
          {label: "Flyby", value: "Does not provoke opportunity attacks when it flies out of an enemy's reach.", spells: null},
          {label: "Keen Hearing and Sight", value: "Adv. on hearing and sight Perception", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Poisonous Snake", stats: {
      name: "Poisonous Snake",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "13",
      HP: "2",
      Speed: "30ft., swim 30ft",
      Stats: {
          STR: "2 (-4)",
          DEX: "16 (+3)",
          CON: "11 (+0)",
          INT: "1 (-5)",
          WIS: "10 (+0)",
          CHA: "3 (-4)"
      },
      Skills: null,
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Blindsight 30ft., Pas. Perception 10",
      Languages: "--",
      Description: [],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Fish", stats: {
      name: "Fish",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "13",
      HP: "1",
      Speed: "0ft., swim 40ft",
      Stats: {
          STR: "2 (-4)",
          DEX: "16 (+3)",
          CON: "9 (-1)",
          INT: "1 (-5)",
          WIS: "7 (-2)",
          CHA: "2 (-4)"
      },
      Skills: null,
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 60ft., Pas. Perception 8",
      Languages: "--",
      Description: [
          {label: "Water Breathing", value: "Can breathe only underwater.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Rat", stats: {
      name: "Rat",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "10",
      HP: "1",
      Speed: "20ft.",
      Stats: {
          STR: "2 (-4)",
          DEX: "11 (+0)",
          CON: "9 (-1)",
          INT: "2 (-4)",
          WIS: "10 (+0)",
          CHA: "4 (-3)"
      },
      Skills: null,
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 30ft., Pas. Perception 10",
      Languages: "--",
      Description: [
          {label: "Keen Smell", value: "Adv. on smelling Perception", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Raven", stats: {
      name: "Raven",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "12",
      HP: "1",
      Speed: "10ft., fly 50ft",
      Stats: {
          STR: "2 (-4)",
          DEX: "14 (+2)",
          CON: "8 (-1)",
          INT: "2 (-4)",
          WIS: "12 (+1)",
          CHA: "6 (-2)"
      },
      Skills: "Perception +3",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Pas. Perception 13",
      Languages: "--",
      Description: [
          {label: "Mimicry", value: "Can mimic simple sounds it has heard. A creature that hears the sounds can tell they are imitations with a succesful DC 10 Insight check.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Sea Horse", stats: {
      name: "Sea Horse",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "11",
      HP: "1",
      Speed: "0ft., swim 20ft",
      Stats: {
          STR: "1 (-5)",
          DEX: "12 (+1)",
          CON: "8 (-1)",
          INT: "1 (-5)",
          WIS: "10 (+0)",
          CHA: "2 (-4)"
      },
      Skills: null,
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Pas. Perception 10",
      Languages: "--",
      Description: [
          {label: "Water Breathing", value: "Can breathe only underwater.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Spider", stats: {
      name: "Spider",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "12",
      HP: "1",
      Speed: "20ft., climb 20 ft.",
      Stats: {
          STR: "2 (-4)",
          DEX: "14 (+2)",
          CON: "8 (-1)",
          INT: "1 (-5)",
          WIS: "10 (+0)",
          CHA: "2 (-4)"
      },
      Skills: "Stealth +4",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Darkvision 30ft., Pas. Perception 10",
      Languages: "--",
      Description: [
          {label: "Spider Climb", value: "Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.", spells: null},
          {label: "Web Sense", value: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.", spells: null},
          {label: "Web Walker", value: "Ignores movement restrictions caused by webbing.", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
  { name: "Weasel", stats: {
      name: "Weasel",
      subName: null,
      type: "Fey",
      size: "Tiny",
      AC: "13",
      HP: "1",
      Speed: "30ft.",
      Stats: {
          STR: "3 (-4)",
          DEX: "16 (+3)",
          CON: "8 (-1)",
          INT: "2 (-4)",
          WIS: "12 (+1)",
          CHA: "3 (-4)"
      },
      Skills: "Perception +3, Stealth +5",
      SavingThrows: null,
      DamageVulnerabilities: null,
      DamageResistances: null,
      DamageImmunities: null,
      ConditionImmunities: null,
      Senses: "Pas. Perception 13",
      Languages: "--",
      Description: [
          {label: "Keen Hearing and Smell", value: "Adv. on hearing and smelling Perception", spells: null}
      ],
      Actions: null,
      BonusActions: null,
      Reactions: null
  } },
]

export const SUMMON_FEY_BASE: StatCollection[] = [
  { name: "Fuming", stats: {
    name: "",
    subName: "Fuming Spirit",
    type: "Fey Spirit",
    size: "Small",
    AC: "12 + the level of the spell (natural armor)",
    HP: "30 + 10 for each spell level above 3rd",
    Speed: "40ft",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "14 (+2)",
        INT: "14 (+2)",
        WIS: "11 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: null,
    ConditionImmunities: null,
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Sylvan, understands the languages you speak",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Shortsword.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + the spell’s level piercing damage + 1d6 force damage."}
    ],
    BonusActions: [
        {label: "Fey Step.", sublabel: "", description: "The fey magically teleports up to 30 feet to an unoccupied space it can see. Then one of the following effects occurs, based on the fey’s chosen mood:"},
        {label: "Fuming.", sublabel: "", description: "The fey has advantage on the next attack roll it makes before the end of this turn."}
    ],
    Reactions: null
  } },
  { name: "Mirthful", stats: {
    name: "",
    subName: "Mirthful Spirit",
    type: "Fey Spirit",
    size: "Small",
    AC: "12 + the level of the spell (natural armor)",
    HP: "30 + 10 for each spell level above 3rd",
    Speed: "40ft",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "14 (+2)",
        INT: "14 (+2)",
        WIS: "11 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: null,
    ConditionImmunities: null,
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Sylvan, understands the languages you speak",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Shortsword.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + the spell’s level piercing damage + 1d6 force damage."}
    ],
    BonusActions: [
        {label: "Fey Step.", sublabel: "", description: "The fey magically teleports up to 30 feet to an unoccupied space it can see. Then one of the following effects occurs, based on the fey’s chosen mood:"},
        {label: "Mirthful", sublabel: "", description: "The fey can force one creature it can see within 10 feet of it to make a Wisdom saving throw against your spell save DC. Unless the save succeeds, the target is charmed by you and the fey for 1 minute or until the target takes any damage."}
    ],
    Reactions: null
  } },
  { name: "Tricksy", stats: {
    name: "",
    subName: "Tricksy Spirit",
    type: "Fey Spirit",
    size: "Small",
    AC: "12 + the level of the spell (natural armor)",
    HP: "30 + 10 for each spell level above 3rd",
    Speed: "40ft",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "14 (+2)",
        INT: "14 (+2)",
        WIS: "11 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: null,
    ConditionImmunities: null,
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Sylvan, understands the languages you speak",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Shortsword.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + the spell’s level piercing damage + 1d6 force damage."}
    ],
    BonusActions: [
        {label: "Fey Step.", sublabel: "", description: "The fey magically teleports up to 30 feet to an unoccupied space it can see. Then one of the following effects occurs, based on the fey’s chosen mood:"},
        {label: "Tricksy", sublabel: "", description: "The fey can fill a 5-foot cube within 5 feet of it with magical darkness, which lasts until the end of its next turn."}
    ],
    Reactions: null
  } }
]

export const SUMMON_SHADOWSPAWN_BASE: StatCollection[] = [
  { name: "Fury", stats: {
    name: "",
    subName: "Fury",
    type: "Shadowspawn",
    size: "medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "35 + 15 for each spell level above 3rd",
    Speed: "40ft",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "15 (+2)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Necrotic",
    DamageImmunities: "Frightened",
    ConditionImmunities: null,
    Senses: "Darkvision 120ft., Pas. Perception 10",
    Languages: "Understands the languages you speak",
    Description: [
        {label: "Terror Frenzy.", value: "The spirit has advantage on attack rolls against frightened creatures.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
        {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Despair", stats: {
    name: "",
    subName: "Despair",
    type: "Shadowspawn",
    size: "medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "35 + 15 for each spell level above 3rd",
    Speed: "40ft",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "15 (+2)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Necrotic",
    DamageImmunities: "Frightened",
    ConditionImmunities: null,
    Senses: "Darkvision 120ft., Pas. Perception 10",
    Languages: "Understands the languages you speak",
    Description: [
        {label: "Weight of Sorrow.", value: "Any creature, other than you, that starts its turn within 5 feet of the spirit has its speed reduced by 20 feet until the start of that creature’s next turn.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
        {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Fear", stats: {
    name: "",
    subName: "Fear",
    type: "Shadowspawn",
    size: "medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "35 + 15 for each spell level above 3rd",
    Speed: "40ft",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "15 (+2)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Necrotic",
    DamageImmunities: "Frightened",
    ConditionImmunities: null,
    Senses: "Darkvision 120ft., Pas. Perception 10",
    Languages: "Understands the languages you speak",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
        {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
    ],
    BonusActions: [
        {label: "Shadow Stealth.", sublabel: "", description: "While in dim light or darkness, the spirit takes the Hide action."}
    ],
    Reactions: null
  } },
]

export const SUMMON_ABERRATION_BASE: StatCollection[] = [
  { name: "Beholderkin", stats: {
    name: "",
    subName: "Beholderkin",
    type: "Aberration",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "40 + 10 for each spell level above 4th",
    Speed: "30ft., fly 30ft. (hover)",
    Stats: {
        STR: "16 (+3)",
        DEX: "10 (+0)",
        CON: "15 (+2)",
        INT: "16 (+3)",
        WIS: "10 (+0)",
        CHA: "6 (-2)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: "Psychic",
    ConditionImmunities: null,
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Deep Speech, understands the languages you speak",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The aberration makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Eye Ray.", sublabel: "Ranged Spell Attack:", description: "Your spell attack modifier to hit, range 150 ft., one creature. Hit: 1d8 + 3 + the spell’s level psychic damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Slaad", stats: {
    name: "",
    subName: "Slaad",
    type: "Aberration",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "40 + 10 for each spell level above 4th",
    Speed: "30ft.",
    Stats: {
        STR: "16 (+3)",
        DEX: "10 (+0)",
        CON: "15 (+2)",
        INT: "16 (+3)",
        WIS: "10 (+0)",
        CHA: "6 (-2)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: "Psychic",
    ConditionImmunities: null,
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Deep Speech, understands the languages you speak",
    Description: [
        {label: "Regeneration.", value: "The aberration regains 5 hit points at the start of its turn if it has at least 1 hit point.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The aberration makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 3 + the spell’s level slashing damage. If the target is a creature, it can’t regain hit points until the start of the aberration’s next turn."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Star Spawn", stats: {
    name: "",
    subName: "Star Spawn",
    type: "Aberration",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "40 + 10 for each spell level above 4th",
    Speed: "30ft.",
    Stats: {
        STR: "16 (+3)",
        DEX: "10 (+0)",
        CON: "15 (+2)",
        INT: "16 (+3)",
        WIS: "10 (+0)",
        CHA: "6 (-2)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: "Psychic",
    ConditionImmunities: null,
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Deep Speech, understands the languages you speak",
    Description: [
        {label: "Whispering Aura.", value: "At the start of each of the aberration’s turns, each creature within 5 feet of the aberration must succeed on a Wisdom saving throw against your spell save DC or take 2d6 psychic damage, provided that the aberration isn’t incapacitated.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The aberration makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Psychic Slam.", sublabel: "Melee Spell Attack:", description: "our spell attack modifier to hit, reach 5 ft., one creature. Hit: 1d8 + 3 + the spell’s level psychic damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
]

export const SUMMON_CONSTRUCT_BASE: StatCollection[] = [
  { name: "Clay", stats: {
    name: "",
    subName: "Clay",
    type: "Construct",
    size: "Medium",
    AC: "13 + the level of the spell (natural armor)",
    HP: "40 + 15 for each spell level above 4th",
    Speed: "30ft.",
    Stats: {
        STR: "18 (+4)",
        DEX: "10 (+0)",
        CON: "18 (+4)",
        INT: "14 (+2)",
        WIS: "11 (+0)",
        CHA: "5 (-3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Poison",
    DamageImmunities: null,
    ConditionImmunities: "Charmed, Exhaustion, Frightened, Incapacitated, Paralyzed, Petrified, Poisoned",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Understands the languages you speak.",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The construct makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 4 + the spell’s level bludgeoning damage"},
    ],
    BonusActions: null,
    Reactions: [
        {label: "Berserk Lashing", sublabel: "", description: "When the construct takes damage, it makes a slam attack against a random creature within 5 feet of it. If no creature is within reach, the construct moves up to half its speed toward an enemy it can see, without provoking opportunity attacks."}
    ]
  } },
  { name: "Stone", stats: {
    name: "",
    subName: "Stone",
    type: "Construct",
    size: "Medium",
    AC: "13 + the level of the spell (natural armor)",
    HP: "40 + 15 for each spell level above 4th",
    Speed: "30ft.",
    Stats: {
        STR: "18 (+4)",
        DEX: "10 (+0)",
        CON: "18 (+4)",
        INT: "14 (+2)",
        WIS: "11 (+0)",
        CHA: "5 (-3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Poison",
    DamageImmunities: null,
    ConditionImmunities: "Charmed, Exhaustion, Frightened, Incapacitated, Paralyzed, Petrified, Poisoned",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Understands the languages you speak.",
    Description: [
        {label: "Stone Lethargy.", value: "When a creature the construct can see starts its turn within 10 feet of the construct, the construct can force it to make a Wisdom saving throw against your spell save DC. On a failed save, the target can’t use reactions and its speed is halved until the start of its next turn.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The construct makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 4 + the spell’s level bludgeoning damage"},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Metal", stats: {
    name: "",
    subName: "Metal",
    type: "Construct",
    size: "Medium",
    AC: "13 + the level of the spell (natural armor)",
    HP: "40 + 15 for each spell level above 4th",
    Speed: "30ft.",
    Stats: {
        STR: "18 (+4)",
        DEX: "10 (+0)",
        CON: "18 (+4)",
        INT: "14 (+2)",
        WIS: "11 (+0)",
        CHA: "5 (-3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Poison",
    DamageImmunities: null,
    ConditionImmunities: "Charmed, Exhaustion, Frightened, Incapacitated, Paralyzed, Petrified, Poisoned",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Understands the languages you speak.",
    Description: [
        {label: "Heated Body.", value: "A creature that touches the construct or hits it with a melee attack while within 5 feet of it takes 1d10 fire damage.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The construct makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 4 + the spell’s level bludgeoning damage"},
    ],
    BonusActions: null,
    Reactions: null
  } },
]

export const SUMMON_ELEMENTAL_BASE: StatCollection[] = [
  { name: "Air", stats: {
    name: "",
    subName: "Air",
    type: "Elemental",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 4th",
    Speed: "40ft., fly 40ft. (hover)",
    Stats: {
        STR: "18 (+4)",
        DEX: "15 (+2)",
        CON: "17 (+3)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Lightning, Thunder",
    DamageImmunities: "Poison",
    ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Primordial, Understands the languages you speak.",
    Description: [
        {label: "Amorphous Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level bludgeoning damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Earth", stats: {
    name: "",
    subName: "Earth",
    type: "Elemental",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 4th",
    Speed: "40ft., burrow 40ft.",
    Stats: {
        STR: "18 (+4)",
        DEX: "15 (+2)",
        CON: "17 (+3)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Piercing, Slashing",
    DamageImmunities: "Poison",
    ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Primordial, Understands the languages you speak.",
    Description: [],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level bludgeoning damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Fire", stats: {
    name: "",
    subName: "Fire",
    type: "Elemental",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 4th",
    Speed: "40ft.",
    Stats: {
        STR: "18 (+4)",
        DEX: "15 (+2)",
        CON: "17 (+3)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: null,
    DamageImmunities: "Poison, Fire",
    ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Primordial, Understands the languages you speak.",
    Description: [
        {label: "Amorphous Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level fire damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Water", stats: {
    name: "",
    subName: "Water",
    type: "Elemental",
    size: "Medium",
    AC: "11 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 4th",
    Speed: "40ft., swim 40ft.",
    Stats: {
        STR: "18 (+4)",
        DEX: "15 (+2)",
        CON: "17 (+3)",
        INT: "4 (-3)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Acid",
    DamageImmunities: "Poison",
    ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Primordial, Understands the languages you speak.",
    Description: [
        {label: "Amorphous Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing.", spells: null}
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level bludgeoning damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
]

export const SUMMON_DRACONIC_SPIRITS_BASE: StatCollection[] = [
  { name: "Chromatic", stats: {
    name: "",
    subName: "Chromatic",
    type: "Dragon",
    size: "Large",
    AC: "14 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 5th",
    Speed: "30 ft., fly 60 ft., swim 30 ft.",
    Stats: {
        STR: "19 (+4)",
        DEX: "14 (+2)",
        CON: "17 (+3)",
        INT: "10 (+0)",
        WIS: "14 (+2)",
        CHA: "14 (+2)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Acid, Cold, Fire, Lightning, Poison",
    DamageImmunities: null,
    ConditionImmunities: "Charmed, Frightened, Poisoned",
    Senses: "Blindsight 30ft. Darkvision 60ft., Pas. Perception 12",
    Languages: "Draconic, understands the languages you speak",
    Description: [
        {label: "Shared Resistances.", value: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell’s level piercing damage."},
        {label: "Breath Weapon.", sublabel: "", description: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."}
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Metallic", stats: {
    name: "",
    subName: "Metallic",
    type: "Dragon",
    size: "Large",
    AC: "14 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 5th",
    Speed: "30 ft., fly 60 ft., swim 30 ft.",
    Stats: {
        STR: "19 (+4)",
        DEX: "14 (+2)",
        CON: "17 (+3)",
        INT: "10 (+0)",
        WIS: "14 (+2)",
        CHA: "14 (+2)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Acid, Cold, Fire, Lightning, Poison",
    DamageImmunities: null,
    ConditionImmunities: "Charmed, Frightened, Poisoned",
    Senses: "Blindsight 30ft. Darkvision 60ft., Pas. Perception 12",
    Languages: "Draconic, understands the languages you speak",
    Description: [
        {label: "Shared Resistances.", value: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell’s level piercing damage."},
        {label: "Breath Weapon.", sublabel: "", description: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."}
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Gem", stats: {
    name: "",
    subName: "Gem",
    type: "Dragon",
    size: "Large",
    AC: "14 + the level of the spell (natural armor)",
    HP: "50 + 10 for each spell level above 5th",
    Speed: "30 ft., fly 60 ft., swim 30 ft.",
    Stats: {
        STR: "19 (+4)",
        DEX: "14 (+2)",
        CON: "17 (+3)",
        INT: "10 (+0)",
        WIS: "14 (+2)",
        CHA: "14 (+2)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Force, Necrotic, Psychic, Radiant, Thunder",
    DamageImmunities: null,
    ConditionImmunities: "Charmed, Frightened, Poisoned",
    Senses: "Blindsight 30ft. Darkvision 60ft., Pas. Perception 12",
    Languages: "Draconic, understands the languages you speak",
    Description: [
        {label: "Shared Resistances.", value: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon."},
        {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell’s level piercing damage."},
        {label: "Breath Weapon.", sublabel: "", description: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."}
    ],
    BonusActions: null,
    Reactions: null
  } },
]

export const SUMMON_FIEND_BASE: StatCollection[] = [
  { name: "Demon", stats: {
    name: "",
    subName: "Demon",
    type: "Fiend",
    size: "Large",
    AC: "12 + the level of the spell (natural armor)",
    HP: "50 + 15 for each spell level above 6th",
    Speed: "40ft., climb 40ft.",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "15 (+2)",
        INT: "10 (+0)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Fire",
    DamageImmunities: "Poison",
    ConditionImmunities: "Poisoned",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Abyssal, Infernal, telepathy 60 ft.",
    Description: [
        {label: "Death Throes.", value: "When the fiend drops to 0 hit points or the spell ends, the fiend explodes, and each creature within 10 feet of it must make a Dexterity saving throw against your spell save DC. A creature takes 2d10 + this spell’s level fire damage on a failed save, or half as much damage on a successful one.", spells: null},
        {label: "Magic Resistance.", value: "The fiend has advantage on saving throws against spells and other magical effects.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fiend makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level necrotic damage."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Devil", stats: {
    name: "",
    subName: "Devil",
    type: "Fiend",
    size: "Large",
    AC: "12 + the level of the spell (natural armor)",
    HP: "40 + 15 for each spell level above 6th",
    Speed: "40ft., fly 60ft.",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "15 (+2)",
        INT: "10 (+0)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Fire",
    DamageImmunities: "Poison",
    ConditionImmunities: "Poisoned",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Abyssal, Infernal, telepathy 60 ft.",
    Description: [
        {label: "Devil’s Sight.", value: "Magical darkness doesn’t impede the fiend’s darkvision.", spells: null},
        {label: "Magic Resistance.", value: "The fiend has advantage on saving throws against spells and other magical effects.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fiend makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Hurl Flame.", sublabel: "Ranged Spell Attack:", description: "Your spell attack modifier to hit, range 150 ft., one target. Hit: 2d6 + 3 + the spell’s level fire damage. If the target is a flammable object that isn’t being worn or carried, it also catches fire."},
    ],
    BonusActions: null,
    Reactions: null
  } },
  { name: "Yugoloth", stats: {
    name: "",
    subName: "Yugoloth",
    type: "Fiend",
    size: "Large",
    AC: "12 + the level of the spell (natural armor)",
    HP: "60 + 10 for each spell level above 6th",
    Speed: "40ft.",
    Stats: {
        STR: "13 (+1)",
        DEX: "16 (+3)",
        CON: "15 (+2)",
        INT: "10 (+0)",
        WIS: "10 (+0)",
        CHA: "16 (+3)"
    },
    Skills: null,
    SavingThrows: null,
    DamageVulnerabilities: null,
    DamageResistances: "Fire",
    DamageImmunities: "Poison",
    ConditionImmunities: "Poisoned",
    Senses: "Darkvision 60ft., Pas. Perception 10",
    Languages: "Abyssal, Infernal, telepathy 60 ft.",
    Description: [
        {label: "Magic Resistance.", value: "The fiend has advantage on saving throws against spells and other magical effects.", spells: null},
    ],
    Actions: [
        {label: "Multiattack.", sublabel: "", description: "The fiend makes a number of attacks equal to half this spell’s level (rounded down)."},
        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 3 + the spell’s level slashing damage. Immediately after the attack hits or misses, the fiend can magically teleport up to 30 feet to an unoccupied space it can see."},
    ],
    BonusActions: null,
    Reactions: null
  } },
]
