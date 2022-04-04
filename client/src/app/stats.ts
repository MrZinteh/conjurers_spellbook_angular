export interface Stats {
  name: string,
  subName: string | null,
  type: string,
  size: string,
  AC: string,
  HP: string,
  Speed: string,
  Stats: Modifiers,
  Skills: string | null,
  SavingThrows: string | null,
  DamageVulnerabilities: string | null,
  DamageResistances: string | null,
  DamageImmunities: string | null,
  ConditionImmunities: string | null,
  Senses: string,
  Languages: string,
  Description: Description[],
  Actions: Action[] | null,
  BonusActions: Action[] | null,
  Reactions: Action[] | null
}

interface Modifiers {
  STR: string,
  DEX: string,
  CON: string,
  INT: string,
  WIS: string,
  CHA: string
}

interface Description {
  label: string,
  value: string,
  spells: {[key: string]: string} | null
}

interface Action {
  label: string,
  sublabel: string,
  description: string
}
