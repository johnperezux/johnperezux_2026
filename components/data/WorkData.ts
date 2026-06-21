export interface WorkData {
  id: number;
  workTitle: string;
  workIcon: string;
  workType: string;
  workURL: string;
}

export const workData: WorkData[] = [
  {
    id: 1,
    workTitle: 'Spicelopedia',
    workIcon: 'spicelopedia',
    workType: 'Design, Development, E-Commerce',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 2,
    workTitle: '602 Enterprises',
    workIcon: 'enterprise',
    workType: 'Design, Development, Icongraphy',
    workURL: 'https://www.602enterprises.com/',
  },
  {
    id: 3,
    workTitle: 'Keylime Life',
    workIcon: 'keylime',
    workType: 'Design, Development',
    workURL: 'https://www.spicelopedia.com/',
  },
];
