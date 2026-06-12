export type LandingDictionary = {
  common: {
    brand: string;
    siteTitle: string;
    siteDescription: string;
    welcome: string;
    seeHowItWorks: string;
    talkToSpecialist: string;
    videoUnsupported: string;
    benefits: string[];
  };
  hero: {
    headline: string;
    description: string;
  };
  language: {
    options: {
      ptBR: string;
      enUS: string;
    };
  };
  navigation: {
    home: string;
    operations: string;
    problem: string;
    howItLearns: string;
    decisionLayer: string;
    institutional: string;
    contact: string;
    menu: string;
    closeMenu: string;
  };
  features: {
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  section02: unknown;
  section03: unknown;
  section04: unknown;
  section05: unknown;
  section06: unknown;
  footer: unknown;
};
