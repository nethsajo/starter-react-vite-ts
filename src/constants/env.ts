export const STAGES = {
  Local: 'local',
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

export type StageKey = keyof typeof STAGES;
export type Stage = (typeof STAGES)[StageKey];
