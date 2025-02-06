export type Cours = {
  id: number;
  titre: string;
  progression: number;
  prochainCours: string;
  totalHeures: number;
  heuresComplétées: number;
};
export type ProgressBarProps = {
  progression: number;
};
export type StatsCardProps = {
  label: string;
  value: string | number;
};

export type CoursCardProps = {
  cours: Cours;
};
