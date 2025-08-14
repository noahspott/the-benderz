export interface Link {
  href: string;
  text?: string;
  title?: string;
  description?: string;
  iconSrc?: string;
  ariaLabel?: string;
}

export type Address = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export type Venue = {
  name: string;
  address: Address;
  description: string;
  website: string;
  galleryPhotos: {
    asset: {
      url: string;
    };
  }[];
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
};

export type Event = {
  date: string;
  description: string;
  showType: string;
  venue?: Venue;
  slug: {
    current: string;
  };
  city?: string;
  state?: string;
};

export type Faq = {
  question: string;
  answer: string;
};
