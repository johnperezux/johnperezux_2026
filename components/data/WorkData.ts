export interface WorkData {
  id: number;
  workTitle: string;
  workIcon: string;
  workType: string;
  workURL: string;
}

export const workData: WorkData[] = [
  {
    id: 5,
    workTitle: 'FTRI',
    workIcon: 'ftri',
    workType: 'development',
    workURL: 'https://ftri.org/',
  },
  {
    id: 2,
    workTitle: '602 Enterprises',
    workIcon: 'enterprise',
    workType: 'design, development',
    workURL:
      'https://www.behance.net/gallery/217005833/602-Enterprises-Case-Study',
  },
  {
    id: 55,
    workTitle: 'Supervisor of Elections',
    workIcon: 'seminole',
    workType: 'development',
    workURL: 'https://voteseminole.gov/',
  },
  {
    id: 1,
    workTitle: 'Spicelopedia',
    workIcon: 'spicelopedia',
    workType: 'design, development',
    workURL: 'https://www.spicelopedia.com/',
  },
  {
    id: 4,
    workTitle: 'Complete Communications',
    workIcon: 'cc',
    workType: 'development',
    workURL: 'https://completecommonline.com/',
  },
  {
    id: 6,
    workTitle: 'PFCU',
    workIcon: 'pfcu',
    workType: 'development, landing page',
    workURL: 'https://join.pfcu.com/heloc/',
  },
  {
    id: 7,
    workTitle: 'FLCU',
    workIcon: 'keylime',
    workType: 'design, development, landing page',
    workURL: 'https://joinus.flcu.org/credit-cards/',
  },
];
