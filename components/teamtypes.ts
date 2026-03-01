
export interface Mentor {
  name: string;
  education: {
    master?: string;
    bachelor?: string;
    doctor?: string;
  };
}

export interface RegionGroup {
  regionName: string;
  mentors: Mentor[];
}

export interface SubCategory {
  name: string;
  regions: RegionGroup[];
}

export interface MainCategory {
  name: string;
  subCategories: SubCategory[];
}
