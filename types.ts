
export type Language = 'en' | 'am';

export interface Translations {
  common: {
    learnMore: string;
    whatWeOffer: string;
    ourTeam: string;
    ourMission: string;
    trustedPartner: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    leadership: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    stats: {
      products: string;
      partners: string;
      years: string;
    };
    cards: {
      fastDelivery: string;
      qualityProducts: string;
      inStock: string;
      certified: string;
      reliable: string;
      uptime: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      pharma: { title: string; desc: string; tags: string[] };
      equipment: { title: string; desc: string; tags: string[] };
      lab: { title: string; desc: string; tags: string[] };
      compliance: { title: string; desc: string; tags: string[] };
    };
  };
  productsSupplies: {
    title: string;
    subtitle: string;
    badge: string;
    items: Array<{
      name: string;
      icon: string;
    }>;
  };
  targetCustomers: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      icon: string;
    }>;
  };
  leadership: {
    title: string;
    subtitle: string;
    team: Array<{
      name: string;
      role: string;
      desc: string;
    }>;
  };
  about: {
    title: string;
    desc: string;
    mission: {
      title: string;
      subtitle: string;
    };
    vision: {
      title: string;
      subtitle: string;
    };
    overview: {
      title: string;
      content: string[];
    };
    activities: {
      title: string;
      items: string[];
      note: string;
    };
    values: {
      title: string;
      items: string[];
    };
    receivingProcess: {
      title: string;
      items: string[];
    };
    process: {
      manufacturers: { title: string; sub: string };
      distribution: { title: string; sub: string };
      healthcare: { title: string; sub: string };
      patients: { title: string; sub: string };
    };
    features: {
      quality: { title: string; desc: string };
      delivery: { title: string; desc: string };
      support: { title: string; desc: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    labels: {
      address: string;
      phone: string;
      email: string;
    };
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    rights: string;
    credibility: string;
  };
}
