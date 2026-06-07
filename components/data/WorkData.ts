export interface WorkData {
  id: number;
  workTitle: string;
  workIcon: string;
  workType: string;
}

export const workData: WorkData[] = [
  {
    id: 1,
    workTitle: 'Spicelopedia',
    workIcon: 'spicelopedia',
    workType: 'Design, Development',
  },
  {
    id: 2,
    workTitle: '602 Enterprises',
    workIcon: 'enterprise',
    workType: 'Design, Development',
  },
  {
    id: 3,
    workTitle: 'Keylime Life',
    workIcon: 'keylime',
    workType: 'Design, Development',
  },
];
