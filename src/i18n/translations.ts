import type { PageId } from '../navigation';

export type Language = 'fr' | 'ar' | 'en';

export const LANGUAGE_OPTIONS: { code: Language; short: string; label: string }[] = [
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'ar', short: 'AR', label: 'العربية' },
  { code: 'en', short: 'EN', label: 'English' },
];

export const PAGE_TITLES: Record<Language, Record<PageId, string>> = {
  fr: {
    home: 'WAIL DICO — Conception et fabrication de présentoirs PLV',
    works: 'Réalisations — Galerie de présentoirs | WAIL DICO',
    process: 'Processus & Devis sur mesure | WAIL DICO',
    faq: 'Questions fréquentes (FAQ) | WAIL DICO',
    contact: 'Contact | WAIL DICO',
  },
  ar: {
    home: 'WAIL DICO — تصميم وتصنيع حوامل العرض الإعلانية',
    works: 'أعمالنا — معرض حوامل العرض الإعلانية | WAIL DICO',
    process: 'مراحل العمل وطلب عرض سعر | WAIL DICO',
    faq: 'الأسئلة الشائعة | WAIL DICO',
    contact: 'تواصل معنا | WAIL DICO',
  },
  en: {
    home: 'WAIL DICO — Custom POS Display Stands Design & Manufacturing',
    works: 'Our Work — Custom Display Gallery | WAIL DICO',
    process: 'Workflow & Custom Quote | WAIL DICO',
    faq: 'Frequently Asked Questions | WAIL DICO',
    contact: 'Contact Us | WAIL DICO',
  },
};

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS_BY_LANG: Record<Language, ProcessStepItem[]> = {
  fr: [
    {
      number: '01',
      title: 'Prise de contact',
      description:
        'Envoyez-nous le type de produit, ses dimensions ou votre idée initiale par WhatsApp ou téléphone afin de définir le format idéal pour vos points de vente.',
    },
    {
      number: '02',
      title: 'Design & Aperçu 3D',
      description:
        'Nous préparons une modélisation 3D complète présentant votre présentoir avec votre logo, vos couleurs et ses cotes exactes avant toute fabrication.',
    },
    {
      number: '03',
      title: 'Fabrication & Livraison',
      description:
        'Nous lançons la production avec des matériaux de premier choix et une finition soignée, puis livrons vos présentoirs prêts à installer dans les délais convenus.',
    },
  ],
  ar: [
    {
      number: '01',
      title: 'تواصل معنا',
      description:
        'أرسل لنا نوع منتجك وأبعاده أو فكرتك الأولية عبر الواتساب أو الهاتف لتحديد الحجم والشكل الأنسب لنقاط البيع.',
    },
    {
      number: '02',
      title: 'التصميم والمعاينة (3D)',
      description:
        'نجهز لك تصميماً ثلاثي الأبعاد يوضح شكل الحامل بشعارك وألوان علامتك التجارية ومقاساته الدقيقة قبل بدء التنفيذ.',
    },
    {
      number: '03',
      title: 'التصنيع والتسليم',
      description:
        'نبدأ الإنتاج بمواد أولية ممتازة وفينيسيون احترافي، ونسلمك الحوامل في الموعد المحدد جاهزة للعرض الفوري في المحلات.',
    },
  ],
  en: [
    {
      number: '01',
      title: 'Get in Touch',
      description:
        'Send us your product type, dimensions, or initial concept via WhatsApp or phone so we can determine the optimal stand size and structure.',
    },
    {
      number: '02',
      title: '3D Design & Preview',
      description:
        'We prepare a full 3D model showcasing the display stand with your brand logo, colors, and exact millimeter dimensions before production.',
    },
    {
      number: '03',
      title: 'Manufacturing & Delivery',
      description:
        'We manufacture using durable primary materials and clean finishing, delivering your displays on schedule and ready for immediate retail placement.',
    },
  ],
};

export type FaqTopic = 'all' | 'durability' | 'timelines' | 'shipping';

export interface FaqEntry {
  id: string;
  number: string;
  topic: Exclude<FaqTopic, 'all'>;
  topicLabel: string;
  question: string;
  answer: string;
}

export const FAQ_TOPICS_BY_LANG: Record<Language, { key: FaqTopic; label: string }[]> = {
  fr: [
    { key: 'all', label: 'Tout' },
    { key: 'durability', label: 'Résistance & Matériaux' },
    { key: 'timelines', label: 'Personnalisation & Délais' },
    { key: 'shipping', label: 'Livraison & Quantités' },
  ],
  ar: [
    { key: 'all', label: 'الكل' },
    { key: 'durability', label: 'متانة الخامات' },
    { key: 'timelines', label: 'التخصيص والمدة' },
    { key: 'shipping', label: 'الشحن والكميات' },
  ],
  en: [
    { key: 'all', label: 'All' },
    { key: 'durability', label: 'Material Durability' },
    { key: 'timelines', label: 'Customization & Lead Time' },
    { key: 'shipping', label: 'Shipping & Quantities' },
  ],
};

export const FAQ_ITEMS_BY_LANG: Record<Language, FaqEntry[]> = {
  fr: [
    {
      id: 'material-load',
      number: '01',
      topic: 'durability',
      topicLabel: 'Résistance & Matériaux',
      question:
        'Quels matériaux utilisez-vous et les présentoirs supportent-ils les charges lourdes ?',
      answer:
        'Nous travaillons principalement avec des panneaux Forex (PVC expansé haute densité), complétés selon le poids de vos produits par des renforts métalliques ou des finitions en acrylique. Chaque étagère est dimensionnée pour supporter de 10 à 15 kg (jusqu’à 45–80 kg au total), idéal pour les flacons en verre, bidons de détergents, huiles et conserves sans fléchissement.',
    },
    {
      id: 'print-moisture',
      number: '02',
      topic: 'durability',
      topicLabel: 'Résistance & Matériaux',
      question:
        'L’impression et les couleurs résistent-elles au nettoyage quotidien et à l’humidité ?',
      answer:
        'Oui. Nous appliquons une impression UV haute définition protégée contre les rayures et l’humidité, associée à un socle inférieur surélevé qui protège la structure lors du lavage des sols en supermarché.',
    },
    {
      id: 'customization-3d',
      number: '03',
      topic: 'timelines',
      topicLabel: 'Personnalisation & Délais',
      question:
        'Quel est le délai pour recevoir l’aperçu 3D et les cotes sur mesure ?',
      answer:
        'Dès réception des dimensions de vos emballages et de votre logo, nous préparons la modélisation 3D CAD sous 24 à 72 heures ouvrées. Vous pouvez valider ou ajuster la découpe personnalisée (forme de flacon, boîte, arche) avant le lancement en production.',
    },
    {
      id: 'production-timeline',
      number: '04',
      topic: 'timelines',
      topicLabel: 'Personnalisation & Délais',
      question:
        'Quel est le délai global de fabrication et de livraison de la commande ?',
      answer:
        'La fabrication prend généralement entre 5 et 12 jours ouvrés après validation du prototype, selon les quantités et la complexité de découpe laser/CNC. Nous respectons strictement les délais convenus.',
    },
    {
      id: 'shipping-wilayas',
      number: '05',
      topic: 'shipping',
      topicLabel: 'Livraison & Quantités',
      question:
        'Comment s’effectuent l’emballage et l’expédition hors d’Alger ?',
      answer:
        'Notre atelier est situé à Khraicia (Alger) et nous livrons dans toutes les wilayas d’Algérie. Chaque présentoir est protégé dans un emballage renforcé, avec une option de livraison à plat (Flat-pack) facile à monter pour réduire les coûts de transport sur les grandes séries.',
    },
    {
      id: 'minimum-order',
      number: '06',
      topic: 'shipping',
      topicLabel: 'Livraison & Quantités',
      question:
        'Quelle est la quantité minimale et proposez-vous des tarifs dégressifs ?',
      answer:
        'Nous accompagnons aussi bien les jeunes marques avec des séries flexibles que les grands distributeurs avec des tarifs usine dégressifs dès 30, 50 ou +100 unités.',
    },
  ],
  ar: [
    {
      id: 'material-load',
      number: '01',
      topic: 'durability',
      topicLabel: 'متانة الخامات',
      question: 'ما هي المواد المستخدمة وهل تتحمل حوامل العرض الأوزان الثقيلة؟',
      answer:
        'نشتغل أساساً بألواح الفوركس (Forex PVC عالي الكثافة)، مع خيارات التدعيم المعدني أو الأكريليك حسب وزن منتجك. كل رف يُصمّم هندسياً ليتحمل من 10 إلى 15 كغ للرف الواحد (بإجمالي يصل إلى 45–80 كغ للحامل الأرضي)، مما يجعله مثالياً لقوارير العطور الزجاجية، المنظفات، وعلب المواد الغذائية دون انحناء.',
    },
    {
      id: 'print-moisture',
      number: '02',
      topic: 'durability',
      topicLabel: 'متانة الخامات',
      question: 'هل تتأثر الطباعة والألوان بالتنظيف اليومي أو رطوبة المحلات؟',
      answer:
        'نستخدم طباعة UV عالية الدقة مع طبقة حماية مقاومة للخدش والرطوبة، إضافة إلى تصميم قاعدة سفلية مرتفعة ومعزولة تحمي الحامل أثناء غسل أرضيات السوبرماركت، فتبقى ألوان شعارك حية وواضحة لسنوات.',
    },
    {
      id: 'customization-3d',
      number: '03',
      topic: 'timelines',
      topicLabel: 'التخصيص والمدة',
      question: 'كم يستغرق تجهيز التصميم ثلاثي الأبعاد (3D) والمقاسات المخصصة؟',
      answer:
        'بمجرد استلام أبعاد منتجك وشعار علامتك التجارية، نجهز لك التصور ثلاثي الأبعاد (3D CAD) خلال 24 إلى 72 ساعة عمل. يمكنك مراجعة الشكل المخصص (قصة قارورة، علبة، أو واجهة مقوسة) وتعديله قبل إعطاء إشارة بدء القص والتصنيع.',
    },
    {
      id: 'production-timeline',
      number: '04',
      topic: 'timelines',
      topicLabel: 'التخصيص والمدة',
      question: 'ما هي مدة التصنيع الإجمالية لتنفيذ الطلبية وتسليمها؟',
      answer:
        'تتراوح مدة التصنيع عادة بين 5 إلى 12 يوم عمل بعد اعتماد النموذج النهائي، وذلك حسب الكمية المطلوبة وتفاصيل القص الليزري والطباعة. نلتزم تعاقدياً بموعد التسليم المحدد لتتمكن من إطلاق حملتك في نقاط البيع في وقتها.',
    },
    {
      id: 'shipping-wilayas',
      number: '05',
      topic: 'shipping',
      topicLabel: 'الشحن والكميات',
      question: 'كيف يتم التغليف والشحن خارج الجزائر العاصمة؟',
      answer:
        'تقع ورشتنا في خرايسية بالجزائر العاصمة، ونوفر الشحن نحو مختلف ولايات الوطن. تُغلّف الحوامل بعناية في عبوات واقية لتفادي أي خدوش أثناء النقل، مع توفير خيار الشحن المفكك سهل التركيب (Flat-pack) لتقليل تكلفة الشحن للكميات الكبيرة.',
    },
    {
      id: 'minimum-order',
      number: '06',
      topic: 'shipping',
      topicLabel: 'الشحن والكميات',
      question: 'ما هو الحد الأدنى للطلب وهل تتغير الأسعار حسب الكمية؟',
      answer:
        'نوفر مرونة في الكميات لمساعدة المشاريع الناشئة على دخول السوق، كما نمنح أسعار مصنع تنافسية وتخفيضات تصاعدية للطلبيات المتوسطة والكبيرة (30، 50، أو +100 حامل). تواصل معنا بالكمية التقديرية لنرسل لك عرض سعر مفصلاً.',
    },
  ],
  en: [
    {
      id: 'material-load',
      number: '01',
      topic: 'durability',
      topicLabel: 'Material Durability',
      question: 'What materials do you use, and can the stands hold heavy products?',
      answer:
        'We work primarily with high-density Forex (expanded PVC sheets), paired with metal reinforcement or acrylic accents tailored to your product weight. Each shelf is engineered to carry 10–15 kg (45–80 kg total capacity), ideal for glass bottles, detergents, oils, and heavy food jars without sagging.',
    },
    {
      id: 'print-moisture',
      number: '02',
      topic: 'durability',
      topicLabel: 'Material Durability',
      question: 'Do the prints and colors withstand daily store cleaning and humidity?',
      answer:
        'Yes. We use high-definition UV printing with a protective anti-scratch, moisture-resistant finish, paired with a raised waterproof base plinth that protects the stand during supermarket floor washing.',
    },
    {
      id: 'customization-3d',
      number: '03',
      topic: 'timelines',
      topicLabel: 'Customization & Lead Time',
      question: 'How long does it take to prepare the 3D design and custom dimensions?',
      answer:
        'Once we receive your packaging dimensions and brand logo, we deliver your 3D CAD visual within 24 to 72 business hours. You can review and refine the custom cut-out silhouette before production starts.',
    },
    {
      id: 'production-timeline',
      number: '04',
      topic: 'timelines',
      topicLabel: 'Customization & Lead Time',
      question: 'What is the total manufacturing and delivery lead time?',
      answer:
        'Production typically takes 5 to 12 business days after final design sign-off, depending on order volume and CNC/laser cut complexity. We strictly honor agreed delivery schedules.',
    },
    {
      id: 'shipping-wilayas',
      number: '05',
      topic: 'shipping',
      topicLabel: 'Shipping & Quantities',
      question: 'How are orders packaged and shipped outside Algiers?',
      answer:
        'Our workshop is based in Khraicia, Algiers, and we ship nationwide across all Algerian wilayas. Stands are securely packed to prevent transit damage, with an easy-assembly flat-pack option to lower freight costs on bulk orders.',
    },
    {
      id: 'minimum-order',
      number: '06',
      topic: 'shipping',
      topicLabel: 'Shipping & Quantities',
      question: 'What is your minimum order quantity, and do prices scale with volume?',
      answer:
        'We offer flexible batch sizes for emerging brands as well as competitive factory-direct tiered pricing for medium and large rollouts (30, 50, or 100+ units).',
    },
  ],
};

export const UI_COPY = {
  fr: {
    nav: {
      home: 'Accueil',
      works: 'Réalisations',
      process: 'Processus',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Demander un devis',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      langAria: 'Changer la langue',
    },
    hero: {
      kicker: 'Présentoirs PLV, Façades de Magasins & Décoration d’Écoles / Formations',
      title: 'WAIL DICO — La plateforme qui impose la prestance de votre produit sur le marché',
      subtitle:
        'Nous concevons et fabriquons des présentoirs sur mesure (Présentoirs), habillons vos façades et vitrines de magasins, et réalisons la décoration murale 3D et panoramique pour écoles et centres de formation afin de valoriser votre image dès le premier regard.',
      primaryCta: 'Demander un devis sur WhatsApp',
      secondaryCta: 'Voir nos réalisations',
      directCall: 'Appel direct :',
      strip1: 'Présentoirs 100% sur mesure, vitrines de magasins & fresques 3D',
      strip2: 'Conception, pose & livraison ponctuelle',
    },
    benefits: {
      kicker: 'Pourquoi choisir WAIL DICO ?',
      title: 'La concurrence est rude en rayon — faites de votre marque la première remarquée',
      intro:
        'Que ce soit pour vos produits en magasin, la façade de votre commerce ou les espaces de votre école et centre de formation, nous transformons chaque surface en vitrine professionnelle qui attire le regard et affirme votre identité.',
      c1Title: 'Conception millimétrée (100% sur mesure)',
      c1Body:
        'Nous étudions les dimensions de votre produit et votre identité visuelle pour réaliser la forme exacte — silhouette de flacon, boîte ou fronton arqué — qui arrête le regard du consommateur.',
      c1Stat1: 'Découpe ajustée à votre packaging',
      c1Stat2: 'Aperçu 3D avant fabrication',
      c1Stat3: 'Capacité pour charges lourdes',
      c2Title: 'Qualité Forex haute densité & impression UV',
      c2Body:
        'Couleurs éclatantes, impression UV nette visible de loin et finition soignée sur panneaux Forex (PVC haute densité) résistants à l’humidité et à l’usage quotidien en magasin.',
      c2Tags: ['Forex haute densité', 'Résistant à l’humidité', 'Couleurs durables'],
      c3Title: 'Respect des délais et volumes',
      c3Body:
        'Nous honorons les commandes en grande série dans les délais impartis, à des tarifs compétitifs pensés pour les jeunes entreprises comme pour les grandes marques.',
      c3Tags: ['Livraison toutes wilayas', 'Délais respectés', 'Tarifs compétitifs'],
      c4Title: 'Réalisations réelles — une qualité visible avant de commander',
      c4Body:
        'Chaque projet reflète notre savoir-faire terrain : présentoirs pour marques alimentaires, parfums, pharmacies et auto, ainsi que façades commerciales, stands d’exposition et écoles partout en Algérie.',
      c4LinkWorks: 'Explorer la galerie (73 projets)',
      c4LinkOrder: 'Configurer votre projet',
    },
    homeWorks: {
      kicker: 'Sélection terrain',
      title: 'Aperçu de nos présentoirs installés chez nos clients',
      allCta: 'Voir toute la galerie (73 projets)',
      spotlightLabel: 'Vitrine Showroom LED',
      spotlightCta: 'Commander un modèle similaire',
    },
    homeDirectory: {
      kicker: 'Navigation du site',
      title: 'Accédez directement aux rubriques dédiées',
      cards: [
        {
          page: 'works',
          num: '01.',
          title: 'Réalisations & Vidéos',
          desc: '73 projets réels (PLV, façades, stands & écoles) et vidéos terrain.',
          cta: 'Ouvrir la galerie',
        },
        {
          page: 'process',
          num: '02.',
          title: 'Processus & Devis 3D',
          desc: 'Configurez votre présentoir et recevez votre tarif.',
          cta: 'Configurer',
        },
        {
          page: 'faq',
          num: '03.',
          title: 'Questions fréquentes',
          desc: 'Matériaux, charges lourdes, délais et livraison.',
          cta: 'Consulter la FAQ',
        },
        {
          page: 'contact',
          num: '04.',
          title: 'Contact, Facebook & TikTok',
          desc: 'WhatsApp, téléphone direct, Facebook, TikTok et atelier à Khraicia.',
          cta: 'Nous contacter',
        },
      ],
    },
    testimonials: {
      kicker: 'Retours clients terrain',
      title: 'Ce que disent les marques et distributeurs accompagnés par WAIL DICO',
      subtitle:
        'Des retours mesurés après installation réelle en superettes, parfumeries, pharmacies et centres auto partout en Algérie.',
      summaryStats: ['+120 marques équipées', '58 wilayas livrées', 'Aperçu 3D avant production'],
      ctaWorks: 'Voir les réalisations',
      ctaQuote: 'Configurer votre projet',
      items: [
        {
          id: 't-elamel',
          name: 'Karim Benali',
          role: 'Directeur Commercial',
          company: 'Distribution El-Amel',
          location: 'Alger & Blida',
          sector: 'Agroalimentaire & Boissons',
          metric: '+38% de rotation en 6 semaines',
          standSpecs: '45 présentoirs silhouettés · LED intégrée',
          quote:
            'Nos boissons passaient inaperçues dans les rayons classiques des superettes. Avec les présentoirs WAIL DICO découpés à la forme de nos bouteilles, nos équipes commerciales obtiennent désormais les meilleurs emplacements près des caisses et les ventes ont suivi immédiatement.',
        },
        {
          id: 't-oran-cosmetique',
          name: 'Samira Khelifi',
          role: 'Responsable Merchandising',
          company: 'Groupe Soin & Beauté Oran',
          location: 'Oran',
          sector: 'Parfumerie & Cosmétique',
          metric: '25 boutiques équipées sans défaut',
          standSpecs: '5 niveaux renforcés · Impression UV',
          quote:
            'Nous avions besoin de colonnes capables de supporter des flacons en verre sans plier tout en respectant nos teintes exactes. L’aperçu 3D envoyé avant production correspondait au millimètre près aux unités livrées.',
        },
        {
          id: 't-essalam-pharma',
          name: 'Dr. Yacine Boudiaf',
          role: 'Pharmacien Titulaire',
          company: 'Parapharmacie Essalam',
          location: 'Sétif',
          sector: 'Pharmacie & Parapharmacie',
          metric: '+27% sur le rayon dermocosmétique',
          standSpecs: 'Structure inclinée anti-encombrement',
          quote:
            'Dans une officine, chaque centimètre compte. Le format incliné conçu par WAIL DICO met en valeur nos gammes solaires et capillaires dès l’entrée sans gêner la circulation des patients.',
        },
        {
          id: 't-autolub',
          name: 'Mehdi Mansouri',
          role: 'Chef des Ventes',
          company: 'Auto-Lub Distribution',
          location: 'Constantine',
          sector: 'Auto & Lubrifiants',
          metric: 'Livraison série en 10 jours',
          standSpecs: 'Charge lourde jusqu’à 110 kg',
          quote:
            'Nos bidons d’huile de 5 litres et bombes aérosols exigent des étagères très rigides. Aucun affaissement après des mois d’utilisation en atelier et en centre auto, avec un respect strict des délais.',
        },
      ],
    },
    portfolio: {
      kicker: 'Nos réalisations réelles',
      title: 'Présentoirs, façades de magasins & décoration murale WAIL DICO',
      subtitle:
        'Photos réelles de nos réalisations : présentoirs PLV en magasin, habillage de façades commerciales, écoles et centres de formation.',
      gridBtn: 'Vue Grille',
      carouselBtn: 'Carrousel',
      videosBtn: 'Vidéos',
      videosKicker: 'Galerie Vidéo',
      videosTitle: 'Nos présentoirs en vidéo',
      videosSubtitle:
        'Découvrez nos réalisations en vidéo pour apprécier les finitions, la solidité et le rendu réel.',
      videosOrderBtn: 'Commander un projet similaire sur WhatsApp',
      videosTiktokBtn: 'Plus de vidéos sur TikTok',
      allTab: 'Tout',
      catFood: 'Alimentation & Confiserie',
      catPerfumes: 'Parfums, Détergents & Soin',
      catPharma: 'Pharmacie & Parapharmacie',
      catAuto: 'Auto, Sprays & Lubrifiants',
      catFacades: 'Magasins, Façades & Mural 3D',
      catExhibitions: 'Stands, Foires & Événements',
      shelvesUnit: 'niveaux',
      inspectBtn: 'Voir les détails',
      similarBtn: 'Demander un modèle similaire',
      prevSlide: 'Modèle précédent',
      nextSlide: 'Modèle suivant',
      pauseAuto: 'Pause',
      playAuto: 'Auto',
      orderDesignBtn: 'Commander ce design',
      dimensionsLabel: 'Dimensions',
      shelvesLabel: 'Étagères',
      maxLoadLabel: 'Charge max',
      materialLabel: 'Finition & Matériau',
      kgUnit: 'kg',
      specsTitle: 'Spécifications techniques :',
      closeBtn: 'Fermer',
      modalOrderBtn: 'Demander un devis pour ce modèle sur WhatsApp',
      waTemplate: (title: string, dims: string) =>
        `Bonjour WAIL DICO, je suis intéressé par le modèle "${title}" (${dims}) et souhaite connaître le tarif et le délai de fabrication.`,
      waVideoTemplate: (title: string) =>
        `Bonjour WAIL DICO, j’ai vu la vidéo "${title}" et je souhaite commander un présentoir similaire.`,
    },
    process: {
      kicker: 'Comment ça marche ?',
      title: 'Comment commander votre présentoir sur mesure ?',
      subtitle:
        'Trois étapes claires pour transformer votre produit en espace de vente percutant en magasin.',
      previewKicker: 'Aperçu schématique en direct',
      previewTitle: 'Configurez votre présentoir avant de demander un devis',
      previewDesc:
        'Choisissez la découpe et le nombre d’étagères ci-contre pour mettre à jour le plan technique instantanément.',
      productTypeLabel: 'Type de produit',
      qtyLabel: 'Quantité estimée',
      successTitle: 'Fiche technique prête à envoyer',
      successDesc:
        'Cliquez sur le bouton WhatsApp ci-dessous pour transmettre ces spécifications à l’équipe WAIL DICO et recevoir votre aperçu 3D et devis.',
      sendWaBtn: 'Envoyer la demande sur WhatsApp',
      editBtn: 'Modifier les options',
      brandLabel: 'Nom de la marque / entreprise',
      brandPlaceholder: 'Ex : House Clean / Shokra',
      phoneLabel: 'Numéro de téléphone (WhatsApp)',
      categoryLabel: 'Secteur du produit exposé',
      shapeLabel: 'Forme du fronton et découpe',
      shelvesLabel: 'Nombre d’étagères',
      shelvesUnit: 'niveaux',
      qtyTitle: 'Quantité souhaitée',
      helperNote: 'Un aperçu 3D et un devis précis seront préparés selon votre quantité.',
      submitBtn: 'Valider et préparer le devis',
      errBrand: 'Veuillez saisir le nom de votre marque ou entreprise.',
      errPhone: 'Veuillez saisir un numéro de téléphone valide (ex : 0560295048).',
      productTypes: [
        'Alimentation & Confiserie',
        'Parfums & Détergents',
        'Sprays & Flacons',
        'Cosmétiques & Soin',
        'Autres produits',
      ],
      shapes: {
        arch: 'Fronton supérieur arqué',
        'custom-bottle': 'Découpe forme produit (flacon/boîte)',
        stepped: 'Découpe étagée dynamique',
        classic: 'Rectangle classique',
      },
      qtyTiers: ['10 – 30 unités', '30 – 100 unités', '+100 unités (tarif usine)'],
      waSummaryHeader:
        'Bonjour WAIL DICO, je souhaite demander un devis pour un présentoir sur mesure :',
      waSummaryBrand: 'Marque',
      waSummaryPhone: 'Téléphone',
      waSummaryProduct: 'Produit',
      waSummaryShape: 'Forme choisie',
      waSummaryShelves: 'Étagères',
      waSummaryQty: 'Quantité estimée',
    },
    faq: {
      kicker: 'Questions fréquentes',
      title: 'Réponses claires sur les matériaux, la personnalisation et la livraison',
      subtitle:
        'Retrouvez les questions les plus fréquentes des marques et distributeurs avant de lancer votre commande.',
      customQuestion: 'Une question technique sur les dimensions de votre produit ?',
      askWa: 'Consulter notre équipe sur WhatsApp',
    },
    contact: {
      kicker: 'Valorisez votre produit dès maintenant',
      title: 'Contactez l’équipe WAIL DICO directement',
      subtitle:
        'Notre équipe à Khraicia (Alger) est prête à transformer votre idée en présentoir professionnel pour booster vos ventes partout en Algérie.',
      waBtn: 'Contacter sur WhatsApp',
      callBtn: 'Appeler par téléphone',
      fbBtn: 'Page Facebook',
      tiktokBtn: 'Compte TikTok',
      waLabel: 'WhatsApp',
      telLabel: 'Appel direct',
      fbLabel: 'Facebook',
      fbAction: 'Visiter la page',
      tiktokLabel: 'TikTok',
      tiktokAction: 'Voir le profil',
      locLabel: 'Atelier & Siège',
      copyBtn: 'Copier',
      copiedBtn: 'Copié',
      hoursTitle: 'Horaires d’ouverture',
      hoursBody:
        'Nous répondons à vos appels et demandes du samedi au jeudi de 08h30 à 17h30, avec possibilité de visiter notre atelier à Khraicia sur rendez-vous.',
      builderTitle: 'Préparer votre cahier des charges en ligne',
      builderBody:
        'Sélectionnez la forme, le nombre de niveaux et la quantité souhaitée pour recevoir un chiffrage rapide par WhatsApp.',
      builderLink: 'Accéder au configurateur de devis',
    },
    footer: {
      ctaTitle: 'Prêt à multiplier l’attractivité de votre produit en magasin ?',
      ctaBody:
        'Contactez WAIL DICO à Khraicia, Alger pour démarrer votre maquette 3D et recevoir votre devis personnalisé.',
      waDirect: 'WhatsApp direct',
      fbDirect: 'Facebook',
      tiktokDirect: 'TikTok',
      copyright:
        'Tous droits réservés WAIL DICO — Algérie | Conception et fabrication de présentoirs PLV',
    },
    blueprint: {
      aria: (brand: string, shelves: number) =>
        `Plan technique du présentoir ${brand} à ${shelves} niveaux`,
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      works: 'أعمالنا',
      process: 'مراحل العمل',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      cta: 'اطلب عرض سعر',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      langAria: 'تغيير اللغة',
    },
    hero: {
      kicker: 'حوامل العرض الإعلانية، واجهات المحلات وديكورات المدارس والتدريب',
      title: 'WAIL DICO — المنصة التي تفرض هيبة منتوجك في السوق',
      subtitle:
        'نصمم ونصنع حوامل عرض (Présentoirs) مخصصة على مقاس علامتك التجارية لمضاعفة مبيعاتك، وننجز كذلك تغليف واجهات المحلات والوكالات والديكورات الجدارية ثلاثية الأبعاد (3D) للمدارس ومراكز التدريب لتجذب الزبائن من النظرة الأولى.',
      primaryCta: 'اطلب عرض سعر عبر واتساب',
      secondaryCta: 'تصفح صفحة الأعمال',
      directCall: 'اتصال مباشر:',
      strip1: 'حوامل عرض مخصصة 100%، واجهات محلات وديكورات 3D للمدارس والتدريب',
      strip2: 'تصميم، طباعة وتركيب في الموعد',
    },
    benefits: {
      kicker: 'لماذا تختار WAIL DICO؟',
      title: 'المنافسة قوية على الرفوف — اجعل علامتك التجارية هي الأولى التي يلاحظها الزبون',
      intro:
        'سواء داخل المحلات والـ Superettes أو على واجهة متجرك أو داخل قاعات التدريب والمدارس، نحوّل كل مساحة إلى واجهة عرض احترافية تفرض حضورك وتضاعف الطلب.',
      c1Title: 'تصميم مفصّل بالملليمتر (مخصص 100%)',
      c1Body:
        'ندرس أبعاد منتجك وهويتك البصرية لنخرج الشكل الذي تحبه — سواء بقصة على شكل قارورة، علبة، أو واجهة إعلانية بارزة — بحيث يثبت نظر الزبون في منتجك وسط عشرات المنافسين.',
      c1Stat1: 'قص وتفصيل حسب مقاس العبوة',
      c1Stat2: 'معاينة مجسمة قبل التصنيع',
      c1Stat3: 'قدرة تحمل للسلعة الثقيلة',
      c2Title: 'جودة الفوركس (Forex) وطباعة UV فائقة',
      c2Body:
        'ألوان حية وطباعة مباشرة عالية الدقة تجعل شعار شركتك يظهر من بعيد، مع تصنيع بألواح الفوركس (Forex) المتينة المقاومة للرطوبة والماء لضمان أطول عمر داخل المحلات.',
      c2Tags: ['ألواح فوركس متينة', 'مقاوم للرطوبة والماء', 'ثبات الألوان'],
      c3Title: 'التزام تام بالمواعيد والكميات',
      c3Body:
        'نلبي الطلبات بكميات معتبرة ونحترم آجال التسليم بدقة، مع أسعار تنافسية مدروسة تساعد المشاريع الناشئة والعلامات التجارية الكبرى على التوسع السريع في السوق.',
      c3Tags: ['تغطية ولايات الجزائر', 'تسليم في الموعد', 'أسعار تنافسية'],
      c4Title: 'نماذج من أعمالنا الحقيقية — جودة تراها قبل أن تطلب',
      c4Body:
        'جميع المشاريع المعروضة تعكس خبرتنا الميدانية في تجهيز حوامل العرض للعلامات التجارية، تغليف واجهات المحلات، أجنحة المعارض والفعاليات، وديكورات المدارس ومراكز التدريب عبر الجزائر.',
      c4LinkWorks: 'استكشف معرض الأعمال (73 مشروع)',
      c4LinkOrder: 'جهّز مواصفات مشروعك الآن',
    },
    homeWorks: {
      kicker: 'مختارات من الميدان',
      title: 'لقطات من حوامل العرض المنفذة لعملائنا',
      allCta: 'عرض المعرض الكامل (73 مشروع)',
      spotlightLabel: 'الواجهة المميزة — Showroom LED',
      spotlightCta: 'اطلب تصميماً مماثلاً عبر واتساب',
    },
    homeDirectory: {
      kicker: 'أقسام الموقع',
      title: 'انتقل مباشرة إلى الصفحة التي تهمك',
      cards: [
        {
          page: 'works',
          num: '01.',
          title: 'معرض الأعمال والفيديوهات',
          desc: '73 مشروعاً حقيقياً (حوامل عرض، محلات، معارض وفعاليات) مع الفيديوهات.',
          cta: 'تصفح الأعمال',
        },
        {
          page: 'process',
          num: '02.',
          title: 'مراحل العمل وطلب تسعيرة 3D',
          desc: 'صمّم مواصفات حامل العرض وأرسل طلبك عبر واتساب.',
          cta: 'اطلب عرض سعر',
        },
        {
          page: 'faq',
          num: '03.',
          title: 'الأسئلة الشائعة',
          desc: 'إجابات حول متانة الخامات، مدة التصنيع والشحن.',
          cta: 'اقرأ الإجابات',
        },
        {
          page: 'contact',
          num: '04.',
          title: 'تواصل معنا، فيسبوك وتيك توك',
          desc: 'واتساب، اتصال مباشر، صفحاتنا على فيسبوك وتيك توك وموقع الورشة.',
          cta: 'طرق التواصل',
        },
      ],
    },
    testimonials: {
      kicker: 'آراء عملائنا في الميدان',
      title: 'تجارب حقيقية لعلامات تجارية وموزعين اعتمدوا على WAIL DICO',
      subtitle:
        'شهادات موثقة بعد التركيب الفعلي داخل السوبيرات، محلات العطور، الصيدليات ومراكز السيارات عبر ولايات الجزائر.',
      summaryStats: ['+120 علامة تجارية مجهزة', 'توصيل لـ 58 ولاية', 'معاينة 3D قبل الإنتاج'],
      ctaWorks: 'استكشف الأعمال',
      ctaQuote: 'اطلب تصميمك الآن',
      items: [
        {
          id: 't-elamel',
          name: 'كريم بن علي',
          role: 'المدير التجاري',
          company: 'شركة الأمل للتوزيع',
          location: 'الجزائر العاصمة والبليدة',
          sector: 'المواد الغذائية والمشروبات',
          metric: '+38% زيادة في سرعة البيع خلال 6 أسابيع',
          standSpecs: '45 حامل عرض مقصوص · إضاءة LED',
          quote:
            'كانت منتجاتنا تضيع وسط الرفوف التقليدية في المحلات. بعد اعتماد حوامل WAIL DICO المقصوصة على شكل العبوة، أصبح أصحاب السوبيرات يضعونها في واجهة المحل بجانب الكاشير مما ضاعف المبيعات بوضوح.',
        },
        {
          id: 't-oran-cosmetique',
          name: 'سميرة خليفي',
          role: 'مسؤولة العرض التجاري',
          company: 'مجموعة التجميل والعناية وهران',
          location: 'وهران',
          sector: 'العطور ومستحضرات التجميل',
          metric: 'تجهيز 25 نقطة بيع بدقة متناهية',
          standSpecs: '5 رفوف معززة · طباعة UV ثابتة',
          quote:
            'احتجنا إلى حوامل تتحمل قوارير الزجاج الثقيلة دون أي انحناء مع مطابقة تامة لألوان علامتنا. التصميم ثلاثي الأبعاد الذي وصلنا قبل التصنيع طابق الحوامل المستلمة بالملليمتر.',
        },
        {
          id: 't-essalam-pharma',
          name: 'د. ياسين بوضياف',
          role: 'صيدلي مسيّر',
          company: 'شبه صيدلية السلام',
          location: 'سطيف',
          sector: 'الصيدليات وشبه الصيدلية',
          metric: '+27% نمو في مبيعات العناية بالبشرة',
          standSpecs: 'تصميم مائل مدمج للممرات',
          quote:
            'المساحة داخل الصيدلية محدودة جداً، لكن التصميم المائل من WAIL DICO سمح بعرض منتجات العناية والواقي الشمسي بوضوح تام من المدخل دون تضييق ممر الزبائن.',
        },
        {
          id: 't-autolub',
          name: 'مهدي منصوري',
          role: 'رئيس المبيعات',
          company: 'أوتو-لوب للتوزيع',
          location: 'قسنطينة',
          sector: 'السيارات، البخاخات والزيوت',
          metric: 'تسليم الدفعة كاملة خلال 10 أيام',
          standSpecs: 'قدرة تحمل حتى 110 كغ',
          quote:
            'عبوات زيوت المحركات 5 لتر وبخاخات الطلاء تتطلب هيكلاً صلباً لا يتأثر بالوزن. بعد أشهر من الخدمة في المحلات والورش لم نسجل أي ميلان في الرفوف مع التزام تام بموعد التسليم.',
        },
      ],
    },
    portfolio: {
      kicker: 'معرض أعمالنا الحقيقية',
      title: 'حوامل العرض، واجهات المحلات والديكور الجداري من WAIL DICO',
      subtitle:
        'صور حقيقية لأعمالنا الميدانية: حوامل عرض (Présentoirs) في المحلات، تغليف واجهات الوكالات والمتاجر، وديكورات المدارس ومراكز التدريب.',
      gridBtn: 'شبكة الأعمال',
      carouselBtn: 'العرض المتحرك',
      videosBtn: 'الفيديوهات',
      videosKicker: 'خانة الفيديوهات',
      videosTitle: 'فيديوهات حية من أعمالنا',
      videosSubtitle:
        'شاهد حوامل العرض المنفذة بالفيديو لمعاينة جودة الفينيسيون والثبات على أرض الواقع.',
      videosOrderBtn: 'اطلب مشروعاً مماثلاً عبر واتساب',
      videosTiktokBtn: 'المزيد من الفيديوهات على تيك توك',
      allTab: 'الكل',
      catFood: 'مواد غذائية وحلويات',
      catPerfumes: 'عطور ومنظفات وعناية',
      catPharma: 'صيدليات وشبه صيدلية',
      catAuto: 'السيارات، البخاخات والزيوت',
      catFacades: 'واجهات المحلات، المدارس والجداريات 3D',
      catExhibitions: 'المعارض والفعاليات',
      shelvesUnit: 'رفوف',
      inspectBtn: 'معاينة التفاصيل',
      similarBtn: 'طلب نموذج مماثل',
      prevSlide: 'النموذج السابق',
      nextSlide: 'النموذج التالي',
      pauseAuto: 'إيقاف',
      playAuto: 'تلقائي',
      orderDesignBtn: 'اطلب هذا التصميم',
      dimensionsLabel: 'الأبعاد',
      shelvesLabel: 'عدد الرفوف',
      maxLoadLabel: 'قدرة التحمل',
      materialLabel: 'الخامة والتنفيذ',
      kgUnit: 'كغ',
      specsTitle: 'المواصفات التنفيذية:',
      closeBtn: 'إغلاق',
      modalOrderBtn: 'اطلب عرض سعر لهذا النموذج عبر واتساب',
      waTemplate: (title: string, dims: string) =>
        `السلام عليكم WAIL DICO، أعجبني نموذج "${title}" (${dims}) وأريد الاستفسار عن السعر ومدة التصنيع.`,
      waVideoTemplate: (title: string) =>
        `السلام عليكم WAIL DICO، شاهدت فيديو "${title}" وأريد طلب تصميم وتصنيع حامل عرض مماثل.`,
    },
    process: {
      kicker: 'كيف نعمل؟',
      title: 'كيف تطلب حامل العرض الخاص بعلامتك؟',
      subtitle:
        'ثلاث خطوات واضحة تحول فكرة منتجك إلى حامل عرض جاهز داخل المتاجر دون تعقيد.',
      previewKicker: 'معاينة التخطيط الأولي',
      previewTitle: 'صمّم مواصفات الحامل قبل طلب التسعيرة',
      previewDesc: 'اختر الشكل وعدد الرفوف في النموذج المقابل ليتحدث الرسم الهندسي فوراً.',
      productTypeLabel: 'نوع المنتج',
      qtyLabel: 'الكمية المختارة',
      successTitle: 'تم تجهيز بطاقة المواصفات بنجاح',
      successDesc:
        'اضغط على زر واتساب أدناه لإرسال هذه المواصفات مباشرة إلى فريق WAIL DICO واستلام التسعيرة والمعاينة ثلاثية الأبعاد.',
      sendWaBtn: 'إرسال الطلب الآن عبر واتساب',
      editBtn: 'تعديل المواصفات',
      brandLabel: 'اسم العلامة التجارية / الشركة',
      brandPlaceholder: 'مثال: House Clean / Shokra',
      phoneLabel: 'رقم الهاتف (واتساب)',
      categoryLabel: 'طبيعة المنتج المعروض',
      shapeLabel: 'تصميم الواجهة العلوية والشكل',
      shelvesLabel: 'عدد الرفوف',
      shelvesUnit: 'رفوف',
      qtyTitle: 'الكمية المطلوبة',
      helperNote: 'سيتم تجهيز معاينة 3D وتسعيرة دقيقة حسب الكمية المطلوبة.',
      submitBtn: 'تأكيد المواصفات وطلب التسعيرة',
      errBrand: 'يرجى إدخال اسم العلامة التجارية أو الشركة.',
      errPhone: 'يرجى إدخال رقم هاتف جزائري صحيح للتواصل معكم (مثال: 0560295048).',
      productTypes: [
        'مواد غذائية وحلويات',
        'عطور ومنظفات',
        'بخاخات وقوارير',
        'مستحضرات تجميل',
        'منتجات أخرى',
      ],
      shapes: {
        arch: 'واجهة علوية مقوسة',
        'custom-bottle': 'قصة على شكل المنتج (قارورة/علبة)',
        stepped: 'قصة متدرجة بارزة',
        classic: 'مستطيل كلاسيكي',
      },
      qtyTiers: ['10 – 30 حامل', '30 – 100 حامل', '+100 حامل (سعر المصنع)'],
      waSummaryHeader:
        'السلام عليكم WAIL DICO، أريد طلب عرض سعر لتصميم وتصنيع حوامل عرض (Présentoirs):',
      waSummaryBrand: 'اسم العلامة',
      waSummaryPhone: 'رقم الهاتف',
      waSummaryProduct: 'نوع المنتج',
      waSummaryShape: 'الشكل المطلوب',
      waSummaryShelves: 'عدد الرفوف',
      waSummaryQty: 'الكمية المقدرة',
    },
    faq: {
      kicker: 'الأسئلة الشائعة',
      title: 'إجابات واضحة حول الخامات، التخصيص، ومواعيد الشحن',
      subtitle:
        'جمّعنا أهم استفسارات التجار وأصحاب العلامات التجارية لمساعدتك على اتخاذ القرار بثقة قبل طلب عرض السعر.',
      customQuestion: 'لديك سؤال تقني خاص بمقاسات منتجك؟',
      askWa: 'استشر فريقنا عبر واتساب',
    },
    contact: {
      kicker: 'طور شكل منتجك واطلب حصتك الآن',
      title: 'تواصل مع فريق WAIL DICO مباشرة',
      subtitle:
        'فريقنا في خرايسية (الجزائر العاصمة) جاهز لتحويل فكرتك إلى واجهة بيع احترافية ترفع مبيعاتك في المحلات والـ Superettes عبر كامل التراب الوطني.',
      waBtn: 'تواصل معنا عبر واتساب',
      callBtn: 'اتصل بنا هاتفياً',
      fbBtn: 'صفحتنا على فيسبوك',
      tiktokBtn: 'حسابنا على تيك توك',
      waLabel: 'واتساب',
      telLabel: 'اتصال مباشر',
      fbLabel: 'فيسبوك',
      fbAction: 'زيارة الصفحة',
      tiktokLabel: 'تيك توك',
      tiktokAction: 'فتح الحساب',
      locLabel: 'المقر والورشة',
      copyBtn: 'نسخ',
      copiedBtn: 'تم النسخ',
      hoursTitle: 'أوقات العمل والاستقبال',
      hoursBody:
        'نستقبل مكالماتكم واستفساراتكم من السبت إلى الخميس من الساعة 08:30 صباحاً حتى 17:30 مساءً، مع إمكانية معاينة العينات في ورشتنا بخرايسية بعد تحديد موعد مسبق.',
      builderTitle: 'تجهيز مواصفات طلبك أونلاين',
      builderBody:
        'يمكنك اختيار شكل الحامل وعدد الرفوف والكمية المطلوبة وإرسالها مباشرة إلى واتساب للحصول على تسعيرة دقيقة بسرعة.',
      builderLink: 'الانتقال إلى مُجهّز طلب عرض السعر',
    },
    footer: {
      ctaTitle: 'هل أنت مستعد لمضاعفة جاذبية منتجك في نقاط البيع؟',
      ctaBody:
        'تواصل مع فريق WAIL DICO في خرايسية، الجزائر العاصمة لبدء التصميم ثلاثي الأبعاد والحصول على تسعيرة مخصصة.',
      waDirect: 'واتساب مباشر',
      fbDirect: 'فيسبوك',
      tiktokDirect: 'تيك توك',
      copyright:
        'جميع الحقوق محفوظة لشركة WAIL DICO — الجزائر | تصميم وتصنيع حوامل العرض الإعلانية',
    },
    blueprint: {
      aria: (brand: string, shelves: number) =>
        `مخطط تصميم حامل عرض ${brand} بعدد ${shelves} رفوف`,
    },
  },
  en: {
    nav: {
      home: 'Home',
      works: 'Our Work',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Request Quote',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langAria: 'Switch language',
    },
    hero: {
      kicker: 'POS Display Stands, Storefront Facades & Academy 3D Murals',
      title: 'WAIL DICO — Put your brand front and center in every retail store',
      subtitle:
        'We design and manufacture bespoke retail display stands (Présentoirs), wrap commercial shopfronts and travel agencies, and craft 3D relief walls and panoramic murals for schools and training centers to capture attention at first glance.',
      primaryCta: 'Request Quote on WhatsApp',
      secondaryCta: 'Browse Our Work',
      directCall: 'Direct line:',
      strip1: '100% custom POS stands, shopfronts & 3D academy wall murals',
      strip2: 'Design, installation & on-time delivery',
    },
    benefits: {
      kicker: 'Why choose WAIL DICO?',
      title: 'Shelf competition is fierce — make your brand the first one shoppers spot',
      intro:
        'Whether showcasing products inside supermarkets, branding your shopfront facade, or transforming schools and training halls, we turn every space into a high-impact visual showcase.',
      c1Title: 'Millimeter-precise custom engineering',
      c1Body:
        'We analyze your exact product dimensions and visual identity to cut custom silhouettes—bottle profiles, arched headers, or stepped frames—that lock shopper focus.',
      c1Stat1: 'Cut to your exact packaging size',
      c1Stat2: '3D model before production',
      c1Stat3: 'Heavy-duty load capacity',
      c2Title: 'High-density Forex & vivid UV printing',
      c2Body:
        'Crisp, high-contrast UV printing visible across the aisle, precision-cut on high-density Forex PVC boards engineered to resist moisture and daily retail traffic.',
      c2Tags: ['High-density Forex', 'Moisture resistant', 'Long-lasting color'],
      c3Title: 'Reliable lead times & bulk capacity',
      c3Body:
        'We fulfill volume runs on strict deadlines with competitive factory-direct pricing suited for both growing brands and nationwide distributors.',
      c3Tags: ['All-wilaya delivery', 'On-schedule', 'Competitive pricing'],
      c4Title: 'Real field installations — proven quality before you order',
      c4Body:
        'Every project in our portfolio reflects real field execution: custom POS displays, commercial storefront wraps, trade show exhibition booths, and 3D murals for academies across Algeria.',
      c4LinkWorks: 'Explore full gallery (73 projects)',
      c4LinkOrder: 'Configure your stand now',
    },
    homeWorks: {
      kicker: 'Field Highlights',
      title: 'Real display stands installed in retail stores',
      allCta: 'View full gallery (73 projects)',
      spotlightLabel: 'Featured Showroom LED Stand',
      spotlightCta: 'Order Similar on WhatsApp',
    },
    homeDirectory: {
      kicker: 'Site Sections',
      title: 'Jump directly to any dedicated page',
      cards: [
        {
          page: 'works',
          num: '01.',
          title: 'Our Work & Videos',
          desc: '73 real installations (POS stands, shops, trade shows & academies) plus videos.',
          cta: 'Open Gallery',
        },
        {
          page: 'process',
          num: '02.',
          title: 'Process & 3D Quote',
          desc: 'Configure your stand specs and request a fast quote.',
          cta: 'Configure Stand',
        },
        {
          page: 'faq',
          num: '03.',
          title: 'FAQ',
          desc: 'Details on materials, heavy loads, lead times, and shipping.',
          cta: 'View FAQ',
        },
        {
          page: 'contact',
          num: '04.',
          title: 'Contact, Facebook & TikTok',
          desc: 'WhatsApp, direct phone, Facebook, TikTok, and Khraicia HQ.',
          cta: 'Contact Us',
        },
      ],
    },
    testimonials: {
      kicker: 'Client Feedback',
      title: 'What brands and distributors say after deploying WAIL DICO stands',
      subtitle:
        'Measured retail outcomes reported across supermarkets, beauty boutiques, pharmacies, and automotive centers in Algeria.',
      summaryStats: ['120+ brands equipped', '58 wilayas delivered', '3D preview before build'],
      ctaWorks: 'Browse our work',
      ctaQuote: 'Configure your stand',
      items: [
        {
          id: 't-elamel',
          name: 'Karim Benali',
          role: 'Commercial Director',
          company: 'El-Amel Distribution',
          location: 'Algiers & Blida',
          sector: 'Food & Beverages',
          metric: '+38% sell-through in 6 weeks',
          standSpecs: '45 custom bottle-cut stands · LED shelving',
          quote:
            'Our drinks used to blend into crowded store gondolas. With WAIL DICO custom-cut bottle silhouettes, store owners happily place our stands right near checkout lanes and turnover rose immediately.',
        },
        {
          id: 't-oran-cosmetique',
          name: 'Samira Khelifi',
          role: 'Merchandising Lead',
          company: 'Oran Beauty & Care Group',
          location: 'Oran',
          sector: 'Perfumes & Cosmetics',
          metric: '25 retail boutiques equipped',
          standSpecs: '5 reinforced shelves · Color-matched UV print',
          quote:
            'We needed vertical displays rigid enough for heavy glass serums while matching our exact brand palette. The 3D proof approved before production matched the delivered units down to the millimeter.',
        },
        {
          id: 't-essalam-pharma',
          name: 'Dr. Yacine Boudiaf',
          role: 'Managing Pharmacist',
          company: 'Essalam Parapharmacie',
          location: 'Sétif',
          sector: 'Pharmacy & Parapharmacy',
          metric: '+27% dermocosmetic rotation',
          standSpecs: 'Slim slanted aisle-friendly profile',
          quote:
            'Floor space inside a pharmacy is tight. WAIL DICO’s slanted profile highlights our skincare and sun-care ranges right from the entrance without obstructing customer walkways.',
        },
        {
          id: 't-autolub',
          name: 'Mehdi Mansouri',
          role: 'Head of Sales',
          company: 'Auto-Lub Distribution',
          location: 'Constantine',
          sector: 'Auto, Sprays & Lubricants',
          metric: 'Full batch delivered in 10 days',
          standSpecs: 'Heavy-duty load up to 110 kg',
          quote:
            'Five-liter motor oil jugs and spray paint cans demand serious structural rigidity. After months in workshops and auto shops, the shelves remain rock-solid and delivery arrived right on schedule.',
        },
      ],
    },
    portfolio: {
      kicker: 'Our Real Portfolio',
      title: 'Display Stands, Storefront Facades & Wall Murals by WAIL DICO',
      subtitle:
        'Real field photos of our POS display stands, commercial shopfront wraps, and custom 3D murals for schools and training centers.',
      gridBtn: 'Grid View',
      carouselBtn: 'Carousel',
      videosBtn: 'Videos',
      videosKicker: 'Video Showcase',
      videosTitle: 'Our Display Stands in Video',
      videosSubtitle:
        'Watch real video footage of our custom display stands to inspect finishing, stability, and retail impact.',
      videosOrderBtn: 'Order Similar Project on WhatsApp',
      videosTiktokBtn: 'More Videos on TikTok',
      allTab: 'All',
      catFood: 'Food & Confectionery',
      catPerfumes: 'Perfumes, Care & Detergents',
      catPharma: 'Pharmacy & Parapharmacy',
      catAuto: 'Auto, Sprays & Lubricants',
      catFacades: 'Storefronts, Academies & 3D Murals',
      catExhibitions: 'Trade Shows & Event Booths',
      shelvesUnit: 'shelves',
      inspectBtn: 'View Specs',
      similarBtn: 'Request Similar',
      prevSlide: 'Previous stand',
      nextSlide: 'Next stand',
      pauseAuto: 'Pause',
      playAuto: 'Auto',
      orderDesignBtn: 'Order This Design',
      dimensionsLabel: 'Dimensions',
      shelvesLabel: 'Shelves',
      maxLoadLabel: 'Max Load',
      materialLabel: 'Finish & Material',
      kgUnit: 'kg',
      specsTitle: 'Technical Highlights:',
      closeBtn: 'Close',
      modalOrderBtn: 'Request Quote for This Model on WhatsApp',
      waTemplate: (title: string, dims: string) =>
        `Hello WAIL DICO, I am interested in the "${title}" model (${dims}) and would like pricing and production lead time.`,
      waVideoTemplate: (title: string) =>
        `Hello WAIL DICO, I watched the "${title}" video and would like to order a similar display stand.`,
    },
    process: {
      kicker: 'How It Works',
      title: 'How to order your custom display stand',
      subtitle:
        'Three clear steps to turn your product packaging into a high-converting retail display.',
      previewKicker: 'Live Schematic Preview',
      previewTitle: 'Configure your stand specs before requesting a quote',
      previewDesc:
        'Select the header cut-out and shelf count on the form to update the blueprint live.',
      productTypeLabel: 'Product Category',
      qtyLabel: 'Estimated Quantity',
      successTitle: 'Specification Sheet Ready',
      successDesc:
        'Click the WhatsApp button below to send your configuration directly to WAIL DICO for a 3D preview and tailored quote.',
      sendWaBtn: 'Send Request on WhatsApp',
      editBtn: 'Edit Specs',
      brandLabel: 'Brand / Company Name',
      brandPlaceholder: 'e.g. House Clean / Shokra',
      phoneLabel: 'Phone Number (WhatsApp)',
      categoryLabel: 'Product Type',
      shapeLabel: 'Header & Cut-out Silhouette',
      shelvesLabel: 'Number of Shelves',
      shelvesUnit: 'shelves',
      qtyTitle: 'Order Quantity',
      helperNote: 'We will prepare a 3D mockup and exact pricing for your batch size.',
      submitBtn: 'Confirm Specs & Prepare Quote',
      errBrand: 'Please enter your brand or company name.',
      errPhone: 'Please enter a valid phone number (e.g. 0560295048).',
      productTypes: [
        'Food & Confectionery',
        'Perfumes & Detergents',
        'Sprays & Bottles',
        'Cosmetics & Care',
        'Other Products',
      ],
      shapes: {
        arch: 'Arched Top Header',
        'custom-bottle': 'Custom Product Cut-out (Bottle/Box)',
        stepped: 'Stepped Dynamic Profile',
        classic: 'Classic Rectangular',
      },
      qtyTiers: ['10 – 30 units', '30 – 100 units', '100+ units (Factory rate)'],
      waSummaryHeader:
        'Hello WAIL DICO, I would like a quote for custom POS display stands:',
      waSummaryBrand: 'Brand',
      waSummaryPhone: 'Phone',
      waSummaryProduct: 'Product',
      waSummaryShape: 'Shape',
      waSummaryShelves: 'Shelves',
      waSummaryQty: 'Quantity',
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Clear answers on materials, customization, and delivery',
      subtitle:
        'Key answers for brand owners and distributors before placing a custom display stand order.',
      customQuestion: 'Have a technical question about your product dimensions?',
      askWa: 'Consult our team on WhatsApp',
    },
    contact: {
      kicker: 'Elevate your retail presence now',
      title: 'Contact the WAIL DICO team directly',
      subtitle:
        'Our workshop in Khraicia (Algiers) is ready to turn your concept into a professional retail display that drives sales nationwide.',
      waBtn: 'Message Us on WhatsApp',
      callBtn: 'Call Us Directly',
      fbBtn: 'Facebook Page',
      tiktokBtn: 'TikTok Account',
      waLabel: 'WhatsApp',
      telLabel: 'Direct Phone',
      fbLabel: 'Facebook',
      fbAction: 'Open Page',
      tiktokLabel: 'TikTok',
      tiktokAction: 'Open Profile',
      locLabel: 'Workshop & HQ',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      hoursTitle: 'Working Hours',
      hoursBody:
        'We handle calls and inquiries Saturday through Thursday from 08:30 to 17:30, with workshop sample visits available in Khraicia by appointment.',
      builderTitle: 'Configure your order specs online',
      builderBody:
        'Choose your stand profile, shelf count, and batch size to send a complete spec card straight to WhatsApp.',
      builderLink: 'Go to Quote Configurator',
    },
    footer: {
      ctaTitle: 'Ready to double your product’s shelf appeal in retail stores?',
      ctaBody:
        'Reach out to WAIL DICO in Khraicia, Algiers to start your 3D design and get a tailored quote.',
      waDirect: 'Direct WhatsApp',
      fbDirect: 'Facebook',
      tiktokDirect: 'TikTok',
      copyright:
        'All rights reserved WAIL DICO — Algeria | Custom POS Display Stands Design & Manufacturing',
    },
    blueprint: {
      aria: (brand: string, shelves: number) =>
        `${brand} custom display stand schematic with ${shelves} shelves`,
    },
  },
} as const;
