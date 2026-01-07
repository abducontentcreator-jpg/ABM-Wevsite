export type Language = 'en' | 'am';

export interface Translations {
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
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      pharma: { title: string; desc: string };
      equipment: { title: string; desc: string };
      lab: { title: string; desc: string };
      compliance: { title: string; desc: string };
    };
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
    mission: { title: string; desc: string };
    vision: { title: string; desc: string };
    values: { title: string; desc: string };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
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