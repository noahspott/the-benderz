export interface Link {
  href: string;
  text?: string;
  title?: string;
  description?: string;
  iconSrc?: string;
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
  slug: {
    current: string;
  };
  coverImage: {
    asset: {
      url: string;
    };
  };
  logo: {
    asset: {
      url: string;
    };
  };
};

export type Event = {
  date: string;
  showType: string;
  venue: Venue;
  slug: {
    current: string;
  };
};
