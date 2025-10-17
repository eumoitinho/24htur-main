export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface CompletePage {
  _id: string;
  _type: 'completePage';
  title: string;
  slug: {
    current: string;
  };
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;
  trackingScript?: string;
  
  // Hero Section
  hero: {
    backgroundImage?: SanityImage;
    logo?: SanityImage;
    badgeText: string;
    title: any[];
    subtitle: string;
    ctaText: string;
    infoCards: {
      _key: string;
      icon: string;
      title: string;
      content: any[];
    }[];
  };
  
  // About Event Section
  aboutEvent: {
    isActive: boolean;
    badgeText: string;
    title: any[];
    subtitle: string;
    mainTitle: string;
    description: any[];
    image?: SanityImage;
    stats: {
      _key: string;
      value: string;
      label: string;
    }[];
    schedule: {
      _key: string;
      icon: string;
      title: string;
      date: string;
      description: string;
      isHighlight?: boolean;
    }[];
  };

  // Accommodation Section
  accommodation: {
    isActive: boolean;
    badgeText: string;
    title: any[];
    subtitle: string;
    hotels: {
      _key: string;
      name: string;
      distance: string;
      basePrice: string;
      badge?: string;
      image?: SanityImage;
      details: string[];
    }[];
  };

  // Flights Section
  flights: {
    isActive: boolean;
    badgeText: string;
    title: string;
    description: string;
    benefits: {
      _key: string;
      title: string;
      description: string;
    }[];
    image?: SanityImage;
  };

  // Tours Section
  tours: {
    isActive: boolean;
    badgeText: string;
    title: string;
    description: string;
    tourList: {
      _key: string;
      name: string;
      description: string;
      duration: string;
      price: string;
      image?: SanityImage;
    }[];
  };

  // Payment Section
  payment: {
    isActive: boolean;
    title: string;
    description: string;
    paymentOptions: {
      _key: string;
      icon: string;
      title: string;
      description: string;
      highlight?: boolean;
    }[];
  };

  // Why Choose Section
  whyChoose: {
    isActive: boolean;
    title: string;
    description: string;
    reasons: {
      _key: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };

  // About 24H Section
  about24h: {
    isActive: boolean;
    title: string;
    description: string;
    image?: SanityImage;
    stats: {
      _key: string;
      value: string;
      label: string;
    }[];
  };

  // Contact Form Section
  contactForm: {
    isActive: boolean;
    title: string;
    description: string;
    submitButtonText: string;
    successMessage: string;
  };
}

export interface Homepage {
  _id: string;
  _type: 'homepage';
  title: string;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;

  // Hero Section
  hero: {
    backgroundImage?: SanityImage;
    logo?: SanityImage;
    title: any[];
    subtitle: string;
    ctaText: string;
  };

  // Metrics Section
  metrics: {
    items: {
      _key: string;
      value: string;
      label: string;
      icon: string;
    }[];
  };

  // Problems Section
  problems: {
    title: string;
    subtitle: string;
    items: {
      _key: string;
      title: string;
      description: string;
    }[];
  };

  // Experience Section
  experience: {
    title: string;
    description: any[];
    ctaText: string;
  };

  // Clients Section
  clients: {
    title: string;
    logos: SanityImage[];
  };

  // Services Section
  services: {
    title: string;
    items: {
      _key: string;
      title: string;
      description: string;
      link: string;
      ctaText: string;
    }[];
  };

  // Why Choose Section
  whyChoose: {
    title: string;
    items: {
      _key: string;
      title: string;
      description: string;
    }[];
  };

  // About Company Section
  aboutCompany: {
    title: string;
    subtitle: string;
    description: any[];
    ctaText: string;
  };

  // Team Section
  team: {
    title: string;
    members: {
      _key: string;
      name: string;
      role: string;
      education: string;
      experience: string;
      photo?: SanityImage;
    }[];
    ctaText: string;
  };

  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      _key: string;
      name: string;
      text: string;
      rating: number;
    }[];
  };

  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
  };
}

export interface EventosPage {
  _id: string;
  _type: 'eventosPage';
  title: string;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;

  // Hero Section
  hero: {
    backgroundImage?: SanityImage;
    logo?: SanityImage;
    title: any[];
    subtitle: string;
  };

  // Services Section
  services: {
    title: string;
    items: {
      _key: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };

  // Next Event Section
  nextEvent: {
    title: string;
    eventTitle: string;
    dates: {
      preEvent?: string;
      mainEvent: string;
    };
    location: {
      name: string;
      address: string;
    };
    ctaText: string;
    ctaLink: string;
  };

  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export interface LazerPage {
  _id: string;
  _type: 'lazerPage';
  title: string;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;

  // Hero Section
  hero: {
    backgroundImage?: SanityImage;
    logo?: SanityImage;
    title: any[];
    subtitle: string;
    ctaText: string;
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: {
      _key: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };

  // Destinations Section
  destinations: {
    title: string;
    subtitle: string;
    items: {
      _key: string;
      name: string;
      description: string;
      image?: SanityImage;
    }[];
  };

  // Benefits Section
  benefits: {
    title: string;
    items: {
      _key: string;
      title: string;
      description: string;
    }[];
  };

  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export interface ThankYouPage {
  _id: string;
  _type: 'thankYouPage';
  title: string;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;

  // Content
  content: {
    title: string;
    message: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface SimplePage {
  _id: string;
  _type: 'simplePage';
  title: string;
  slug: {
    current: string;
  };
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;
  
  // Hero Section
  hero: {
    backgroundImage?: SanityImage;
    logo?: SanityImage;
    badgeText: string;
    title: any[];
    subtitle: string;
    ctaText: string;
    ctaAction: string;
    ctaLink?: string;
    whatsappNumber?: string;
    infoCards: {
      _key: string;
      icon: string;
      title: string;
      content: any[];
    }[];
    color: string;
  };
  
  // About Section
  about: {
    isActive: boolean;
    badgeText: string;
    title: any[];
    subtitle: string;
    mainTitle: string;
    description: any[];
    image?: SanityImage;
    stats: {
      _key: string;
      value: string;
      label: string;
    }[];
    schedule: {
      _key: string;
      icon: string;
      title: string;
      date: string;
      description: string;
      isHighlight?: boolean;
    }[];
    color: string;
  };

  // Services Section
  services: {
    isActive: boolean;
    title: string;
    subtitle: string;
    color: string;
    cards: {
      _key: string;
      name: string;
      price: string;
      description: string;
      highlight?: boolean;
      image?: SanityImage;
    }[];
  };

  // Extras Section
  extras: {
    isActive: boolean;
    title: string;
    subtitle: string;
    color: string;
    cards: {
      _key: string;
      name: string;
      price: string;
      description: string;
      image?: SanityImage;
    }[];
  };

  // Payment Section
  payment: {
    isActive: boolean;
    title: string;
    description: string;
    color: string;
    options: {
      _key: string;
      title: string;
      description: string;
      highlight?: boolean;
    }[];
  };

  // Why Choose Section
  whyChoose: {
    isActive: boolean;
    title: string;
    color: string;
    reasons: {
      _key: string;
      title: string;
      description: string;
    }[];
  };

  // Company Section
  company: {
    isActive: boolean;
    title: string;
    description: any[];
    image?: SanityImage;
    color: string;
  };

  // Contact Section
  contact: {
    isActive: boolean;
    title: string;
    subtitle: string;
    buttonText: string;
    color: string;
  };

  // Contact Form Section
  contactForm: {
    isActive: boolean;
    title: string;
    description: string;
    submitButtonText: string;
    successMessage: string;
  };
}