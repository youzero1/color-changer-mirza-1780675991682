export type Status = 'idle' | 'loading' | 'success' | 'error';

export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type Stat = {
  label: string;
  value: string;
};
