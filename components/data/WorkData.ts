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
    workType: 'culinary',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 2,
    workTitle: '602 Enterprises',
    workIcon: 'enterprise',
    workType: 'print',
    workURL: 'https://www.602enterprises.com/',
  },
  {
    id: 3,
    workTitle: 'Keylime Life',
    workIcon: 'keylime',
    workType: 'culinary',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 4,
    workTitle: 'Complete Communications',
    workIcon: 'keylime',
    workType: 'technology',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 5,
    workTitle: 'FTRI',
    workIcon: 'ftri',
    workType: 'technology',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 6,
    workTitle: 'PFCU',
    workIcon: 'pfcu',
    workType: 'finance',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 7,
    workTitle: 'FLCU',
    workIcon: 'keylime',
    workType: 'finance',
    workURL: 'https://www.spicelopedia.com/',
  },
];
