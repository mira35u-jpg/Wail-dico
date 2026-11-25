import type { Language } from '../i18n/translations';

export type PortfolioCategory = 'food' | 'perfumes' | 'pharma' | 'automotive' | 'facades' | 'exhibitions';

export interface PortfolioItem {
  id: string;
  title: string;
  brandLabel: string;
  category: PortfolioCategory;
  categoryLabel: string;
  summary: string;
  dimensions: string;
  shelvesCount: number;
  maxLoadKg: number;
  material: string;
  shapeStyle: 'arch' | 'custom-bottle' | 'classic' | 'stepped';
  accentColor: string;
  imageSrc: string;
  highlights: string[];
}

export const CONTACT_INFO = {
  brandName: 'WAIL DICO',
  whatsappDisplay: '0560 29 50 48',
  whatsappRaw: '213560295048',
  phoneDisplay: '0554 09 44 97',
  phoneHref: 'tel:+213554094497',
  facebookUrl: 'https://www.facebook.com/share/1EGC5KneL7/',
  tiktokUrl: 'https://www.tiktok.com/@wail_presentoire_16?_r=1&_t=ZS-9BgC0RCnvkr',
  tiktokHandle: '@wail_presentoire_16',
  logoSrc: '/assets/aistudio/1000062027_2__872c09fc.jpeg',
  heroSrc: '/src/assets/images/hero_cnc_display_workshop_1795515488881.jpg',
};

export function getLocationLabel(lang: Language): string {
  switch (lang) {
    case 'ar':
      return 'خرايسية، الجزائر العاصمة';
    case 'en':
      return 'Khraicia, Algiers';
    default:
      return 'Khraicia, Alger';
  }
}

export function getWhatsappUrl(lang: Language, customMessage?: string): string {
  const messages: Record<Language, string> = {
    fr: 'Bonjour WAIL DICO, je souhaite demander un devis pour un présentoir sur mesure.',
    ar: 'السلام عليكم WAIL DICO، أريد طلب عرض سعر لحامل عرض مخصص.',
    en: 'Hello WAIL DICO, I would like to request a quote for a custom display stand.',
  };
  const text = customMessage ?? messages[lang];
  return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

interface LocalizedFields {
  title: string;
  categoryLabel: string;
  summary: string;
  dimensions: string;
  material: string;
  highlights: string[];
}

interface RawPortfolioRecord {
  id: string;
  brandLabel: string;
  category: PortfolioCategory;
  shelvesCount: number;
  maxLoadKg: number;
  shapeStyle: 'arch' | 'custom-bottle' | 'classic' | 'stepped';
  accentColor: string;
  imageSrc: string;
  locales: Record<Language, LocalizedFields>;
}

const PORTFOLIO_RECORDS: RawPortfolioRecord[] = [
  {
    id: 'boldx-mancare-showroom',
    brandLabel: 'BOLDX SHOWROOM LED',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 58,
    shapeStyle: 'stepped',
    accentColor: '#0F766E',
    imageSrc: '/assets/aistudio/Editing_shelf_image_for_showroom_3e876748_2K_ed65bcef.jpg',
    locales: {
      fr: {
        title: 'Présentoir showroom lumineux LED BOLDX Mancare 1974 (5 niveaux)',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir haut de gamme installé en parfumerie et showroom, doté d’un rétroéclairage LED périphérique sur le fronton triangulaire et le flanc latéral sculpté.',
        dimensions: '62 × 44 × 192 cm',
        material: 'Structure biseautée bleu pétrole + Éclairage LED périmétrique + Impression UV',
        highlights: [
          'Fronton triangulaire et aile latérale illuminés par rubans LED intégrés',
          '5 étagères renforcées exposant coffrets cadeaux, flacons de parfum et soins',
          'Socle noir satiné biseauté avec marquage BOLDX 1974 haute visibilité',
        ],
      },
      ar: {
        title: 'حامل عرض Showroom مضيء LED لعلامة BOLDX Mancare 1974 (5 رفوف)',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض فاخر مخصص لصالات العرض ومحلات العطور الكبرى، مزود بإضاءة LED محيطية مدمجة في التاج المثلث واللوح الجانبي المنحوت.',
        dimensions: '62 × 44 × 192 سم',
        material: 'هيكل مشطوف بلون أزرق بترولي + إضاءة LED محيطية + طباعة UV فاخرة',
        highlights: [
          'تاج مثلث وجناح جانبي مضاء بشريط LED محيطي يجذب الأنظار داخل الشوروم',
          '5 مستويات عرض مخصصة لعلب الهدايا الفاخرة وقوارير العطور ومنتجات العناية',
          'قاعدة سفلية سوداء مشطوفة الزوايا مع شعار BOLDX 1974 بارز من كل الزوايا',
        ],
      },
      en: {
        title: 'BOLDX Mancare 1974 LED-Illuminated Showroom Display (5 Tiers)',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Flagship showroom display stand featuring integrated perimeter LED lighting across its inverted-triangle header and full-height sculpted side wing.',
        dimensions: '62 × 44 × 192 cm',
        material: 'Chamfered deep-teal body + Perimeter LED halo + Matte-black plinth',
        highlights: [
          'Halo LED lighting frames both the triangular crown and sculpted side wing',
          '5 reinforced shelves showcase gift coffrets, glass fragrance bottles, and tubes',
          'Beveled matte-black base wrap anchors premium showroom presence',
        ],
      },
    },
  },
  {
    id: 'fresh-wind-bottle',
    brandLabel: 'FRESH WIND',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 50,
    shapeStyle: 'custom-bottle',
    accentColor: '#1E1B4B',
    imageSrc: '/assets/aistudio/1795089848235_580ce9d4.jpg',
    locales: {
      fr: {
        title: 'Présentoir Fresh Wind découpé en forme de flacon spray 100% sur mesure',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Conception exceptionnelle reproduisant la silhouette d’un flacon vaporisateur avec 5 étagères latérales intégrées pour parfumeries.',
        dimensions: '55 × 45 × 195 cm',
        material: 'Découpe CNC sur mesure + Impression UV haute définition',
        highlights: [
          'Silhouette extérieure découpée avec précision à l’image du vaporisateur réel',
          '5 étagères latérales optimisées pour exposer des dizaines de flacons en sécurité',
          'Finitions bleu royal et or attirant le regard dès l’entrée de la boutique',
        ],
      },
      ar: {
        title: 'حامل عرض Fresh Wind بقصة قارورة بخاخ مخصصة 100%',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'تصميم استثنائي يحاكي شكل قارورة العطر البخاخ مع 5 رفوف جانبية مدمجة لعرض معطرات الأقمشة والمنزل داخل محلات العطور.',
        dimensions: '55 × 45 × 195 سم',
        material: 'قص CNC مخصص + طباعة UV عالية الدقة',
        highlights: [
          'هيكل خارجي مقصوص بدقة على شكل رأس ومضخة البخاخ الحقيقي',
          'رفوف جانبية منظمة تستوعب عشرات القوارير بأمان تام',
          'حضور بصري فاخر باللون الأزرق الملكي والذهبي يجذب المتسوق من مدخل المحل',
        ],
      },
      en: {
        title: 'Fresh Wind 100% Custom Spray Bottle Display Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Standout custom structure shaped like a full-scale perfume spray bottle with 5 integrated side shelves for perfumery boutiques.',
        dimensions: '55 × 45 × 195 cm',
        material: 'Custom CNC cut-out + High-definition UV print',
        highlights: [
          'Precision outer profile sculpted after the actual trigger-spray bottle',
          'Organized 5-tier side shelving holding dozens of bottles securely',
          'Royal blue and gold luxury graphics that draw shoppers from the entrance',
        ],
      },
    },
  },
  {
    id: 'nissou-chocolaterie',
    brandLabel: 'NISSOU',
    category: 'food',
    shelvesCount: 5,
    maxLoadKg: 55,
    shapeStyle: 'arch',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/1795085702095_70ea07e7.jpg',
    locales: {
      fr: {
        title: 'Présentoirs NISSOU Chocolaterie pour crêpes et cookies',
        categoryLabel: 'Alimentation & Confiserie',
        summary:
          'Présentoir de sol robuste à 5 niveaux avec identité visuelle noire et rouge très contrastée pour supermarchés et superettes.',
        dimensions: '60 × 40 × 170 cm',
        material: 'Forex haute densité + Habillage complet façades et côtés',
        highlights: [
          'Bandeaux frontaux sur chaque niveau mettant en avant le logo et les messages clés',
          'Côtés entièrement imprimés incluant contacts et réseaux sociaux de la marque',
          'Maintien optimal des étuis pour éviter tout glissement lors de la prise en main',
        ],
      },
      ar: {
        title: 'حوامل عرض نيسو (NISSOU) للكراب والكوكيز',
        categoryLabel: 'مواد غذائية وحلويات',
        summary:
          'حامل أرضي متين من الفوركس بـ 5 رفوف وهوية بصرية سوداء وحمراء بارزة لعرض منتجات الكراب والكوكيز في الفضاءات التجارية والـ Superettes.',
        dimensions: '60 × 40 × 170 سم',
        material: 'ألواح فوركس (Forex) عالية الكثافة + طباعة كاملة للواجهات والأجناب',
        highlights: [
          'أشرطة أمامية على كل رف تحمل شعار العلامة وعبارات ترويجية واضحة',
          'واجهات جانبية مطبوعة بالكامل مع أرقام التواصل وروابط الشبكات الاجتماعية',
          'ترتيب مثالي للعلب المغلفة يمنع سقوطها عند سحب الزبون للمنتج',
        ],
      },
      en: {
        title: 'NISSOU Chocolaterie Floor Display Stands',
        categoryLabel: 'Food & Confectionery',
        summary:
          'Heavy-duty 5-tier Forex floor display with bold black-and-red branding built for supermarkets and convenience stores.',
        dimensions: '60 × 40 × 170 cm',
        material: 'High-density Forex panels + Full front & side graphics',
        highlights: [
          'Custom front shelf strips highlighting brand identity and product line',
          'Fully printed side panels featuring brand contact and social handles',
          'Sized to keep packaged boxes aligned and easy for shoppers to grab',
        ],
      },
    },
  },
  {
    id: 'house-clean-tropical',
    brandLabel: 'HOUSE CLEAN',
    category: 'perfumes',
    shelvesCount: 3,
    maxLoadKg: 55,
    shapeStyle: 'arch',
    accentColor: '#0284C7',
    imageSrc: '/assets/aistudio/1795085532321_bbf34e90.jpg',
    locales: {
      fr: {
        title: 'Présentoir House Clean Parfum pour désodorisants d’intérieur',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir à 3 étagères profondes avec fronton découpé en goutte d’eau, conçu pour les sprays et parfums de maison.',
        dimensions: '62 × 42 × 165 cm',
        material: 'Structure renforcée pour flacons liquides + Impression anti-humidité',
        highlights: [
          'Étagères renforcées supportant des rangées complètes de vaporisateurs pleins',
          'Fronton supérieur découpé à la forme du logo visible de loin en rayon',
          'Impression tropicale éclatante résistante à l’humidité des surfaces de vente',
        ],
      },
      ar: {
        title: 'حامل عرض House Clean Parfum لمعطرات المنزل',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض بـ 3 رفوف عميقة وقصة علوية بشكل قطرة، مصمم خصيصاً لقوارير معطرات الجو والبخاخات المنزلية.',
        dimensions: '62 × 42 × 165 سم',
        material: 'هيكل مقوى للقوارير السائلة + طباعة مقاومة للرطوبة',
        highlights: [
          'رفوف معززة تتحمل صفوفاً متراصة من قوارير البخاخ الممتلئة',
          'واجهة علوية مقصوصة على شكل شعار العلامة تبرز من مسافات بعيدة',
          'طباعة ألوان استوائية حية تحافظ على بريقها في الممرات المزدحمة',
        ],
      },
      en: {
        title: 'House Clean Parfum Tropical Spray Display Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          '3-tier deep-shelf floor stand with a custom droplet-cut header, engineered for home fragrance and spray bottles.',
        dimensions: '62 × 42 × 165 cm',
        material: 'Reinforced liquid-bottle frame + Moisture-resistant print',
        highlights: [
          'Strengthened shelves supporting dense rows of full spray bottles',
          'Die-cut logo crest header visible from across busy supermarket aisles',
          'Vivid tropical graphics built to resist daily retail moisture',
        ],
      },
    },
  },
  {
    id: 'gosa-d7-clean',
    brandLabel: 'GOSA D7',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 75,
    shapeStyle: 'stepped',
    accentColor: '#1E3A8A',
    imageSrc: '/assets/aistudio/1795089677551_0e355986.jpg',
    locales: {
      fr: {
        title: 'Série de présentoirs Gosa D7 Clean pour détergents et bidons',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir grande capacité à 5 niveaux conçu pour les lessives liquides, sprays et bidons lourds en grande distribution.',
        dimensions: '68 × 45 × 175 cm',
        material: 'Forex épais haute charge + Impression UV',
        highlights: [
          'Haute capacité portante sur le niveau inférieur dédié aux gros bidons',
          'Flancs imprimés présentant l’ensemble de la gamme nettoyage',
          'Production en série homogène pour déploiement multi-magasins',
        ],
      },
      ar: {
        title: 'سلسلة حوامل Gosa D7 Clean لمواد التنظيف',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل أرضي ثقيل بـ 5 رفوف مخصص لعبوات التنظيف السائلة والجالونات الكبيرة، مصنوع من ألواح فوركس مقواة تتحمل الأوزان العالية.',
        dimensions: '68 × 45 × 175 سم',
        material: 'ألواح فوركس (Forex) سميكة مقواة للأوزان الثقيلة + طباعة UV',
        highlights: [
          'قدرة تحمل عالية في الرف السفلي المخصص للعبوات والجالونات الكبيرة',
          'حوامل جانبية إضافية تعرض تفاصيل التشكيلة الكاملة للمنظفات',
          'إنتاج كميات معتبرة متطابقة لنشرها في أكبر سلاسل السوبرماركت',
        ],
      },
      en: {
        title: 'Gosa D7 Clean Heavy-Duty Detergent Display Series',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Heavy-load 5-shelf supermarket display stand engineered in thick Forex for liquid detergents, sprays, and large household jugs.',
        dimensions: '68 × 45 × 175 cm',
        material: 'Heavy-duty Forex structure + UV print',
        highlights: [
          'High weight capacity bottom deck tailored for heavy liquid jugs',
          'Side showcase graphics highlighting the complete product lineup',
          'Consistent batch manufacturing for nationwide supermarket rollouts',
        ],
      },
    },
  },
  {
    id: 'sweetie-floor',
    brandLabel: 'SWEETIE',
    category: 'food',
    shelvesCount: 4,
    maxLoadKg: 42,
    shapeStyle: 'stepped',
    accentColor: '#1D4ED8',
    imageSrc: '/assets/aistudio/1795085643828_5bec0700.jpg',
    locales: {
      fr: {
        title: 'Présentoir de sol Sweetie à découpe latérale dynamique',
        categoryLabel: 'Alimentation & Confiserie',
        summary:
          'Design original avec découpe supérieure en éclaboussure de chocolat et étagères inclinées pour tablettes et confiseries.',
        dimensions: '52 × 40 × 150 cm',
        material: 'Découpe laser contour sur mesure + Impression haute résolution',
        highlights: [
          'Étagères inclinées vers l’avant facilitant la visibilité et la prise produit',
          'Découpe latérale dynamique attirant immédiatement l’œil en rayon',
          'Base surélevée stable protégeant la structure du lavage des sols',
        ],
      },
      ar: {
        title: 'حامل Sweetie بقصة جانبية متدرجة للحلويات والشوكولاطة',
        categoryLabel: 'مواد غذائية وحلويات',
        summary:
          'تصميم ديناميكي بواجهة علوية مقصوصة على شكل تناثر الشوكولاطة والمكسرات مع رفوف مائلة تبرز ألواح الشوكولاطة للمتسوق.',
        dimensions: '52 × 40 × 150 سم',
        material: 'قص ليزري مخصص للحواف + طباعة عالية التباين',
        highlights: [
          'رفوف مائلة للأمام تسهّل رؤية النكهات والتقاط الألواح بسرعة',
          'قصّة خارجية غير تقليدية تلفت انتباه الأطفال والعائلات فوراً',
          'قاعدة ثابتة ومرتفعة عن الأرضية لتحمل التنظيف اليومي',
        ],
      },
      en: {
        title: 'Sweetie Custom Die-Cut Floor Stand for Chocolates',
        categoryLabel: 'Food & Confectionery',
        summary:
          'Dynamic floor stand featuring a chocolate-splash die-cut header and angled shelves for instant bar visibility.',
        dimensions: '52 × 40 × 150 cm',
        material: 'Custom laser-cut contours + High-contrast print',
        highlights: [
          'Forward-tilted trays make flavors easy to read and pick up',
          'Playful non-rectangular silhouette stands out in crowded aisles',
          'Raised floor feet protect against daily retail mopping',
        ],
      },
    },
  },
  {
    id: 'sweetie-counter',
    brandLabel: 'SWEETIE POS',
    category: 'food',
    shelvesCount: 2,
    maxLoadKg: 18,
    shapeStyle: 'stepped',
    accentColor: '#1D4ED8',
    imageSrc: '/assets/aistudio/1795085657168_e3ce2cbc.jpg',
    locales: {
      fr: {
        title: 'Présentoir de comptoir Sweetie pour zones de caisse',
        categoryLabel: 'Alimentation & Confiserie',
        summary:
          'Format compact conçu pour les comptoirs d’encaissement afin de déclencher l’achat d’impulsion lors du passage en caisse.',
        dimensions: '38 × 32 × 65 cm',
        material: 'Forex léger haute rigidité + Découpe profilée',
        highlights: [
          'Encombrement réduit adapté aux comptoirs de caisse étroits',
          'Double niveau incliné avec bandeau logo frontal dédié',
          'Booste efficacement les ventes additionnelles en sortie de magasin',
        ],
      },
      ar: {
        title: 'حامل Sweetie المصغّر لطاولات الدفع (Counter Display)',
        categoryLabel: 'مواد غذائية وحلويات',
        summary:
          'حامل طاولة من الفوركس مخصص لوضعه بجانب صناديق المحاسبة لتحفيز الشراء الفوري أثناء انتظار الزبائن.',
        dimensions: '38 × 32 × 65 سم',
        material: 'ألواح فوركس صلبة خفيفة + قص مخصص للحواف',
        highlights: [
          'مقاس مدمج يتناسب مع مساحات طاولات الكاشير الضيقة',
          'طبقان مائلان مع واجهة سفلية مخصصة لشعار العلامة',
          'يرفع مبيعات الشراء العفوي عند نقاط الخروج',
        ],
      },
      en: {
        title: 'Sweetie Countertop Checkout Display Stand',
        categoryLabel: 'Food & Confectionery',
        summary:
          'Compact Forex POS display crafted for supermarket cash-register counters to drive impulse chocolate purchases.',
        dimensions: '38 × 32 × 65 cm',
        material: 'Lightweight rigid Forex panels + Custom profile cut',
        highlights: [
          'Compact footprint fits cleanly beside checkout scanners',
          'Two angled display trays with dedicated front logo fascia',
          'Designed to lift last-minute checkout conversion',
        ],
      },
    },
  },
  {
    id: 'promotor-g12',
    brandLabel: 'PROMOTOR',
    category: 'automotive',
    shelvesCount: 4,
    maxLoadKg: 80,
    shapeStyle: 'classic',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/1795089363329_2dd509de.jpg',
    locales: {
      fr: {
        title: 'Présentoir ProMotor G12+ pour liquides de refroidissement et huiles',
        categoryLabel: 'Auto & Lubrifiants',
        summary:
          'Présentoir industriel ultra-robuste à 4 niveaux pour bidons de 5L et 1L en magasins de pièces automobiles et stations.',
        dimensions: '60 × 45 × 175 cm',
        material: 'Structure renforcée charges lourdes + Impression résistante aux huiles',
        highlights: [
          'Conçu pour supporter des bidons pleins de 5L et 1L sans aucune déformation',
          'Signalétique rouge et grise claire affichant plages de température et normes',
          'Surface lessivable résistante aux taches d’huile et d’atelier',
        ],
      },
      ar: {
        title: 'حامل ProMotor G12+ لزيوت وسوائل تبريد السيارات',
        categoryLabel: 'زيوت ومستلزمات السيارات',
        summary:
          'حامل صناعي فائق المتانة من 4 رفوف مخصص لعبوات سائل التبريد والزيوت الثقيلة في محلات قطع الغيار ومراكز الصيانة.',
        dimensions: '60 × 45 × 175 سم',
        material: 'هيكل معزز فائق التحمل + طباعة حرارية مقاومة للزيوت',
        highlights: [
          'مصمم لتحمل عبوات 5 لتر و1 لتر من سوائل التبريد والزيوت دون أي ارتخاء',
          'واجهة معلوماتية واضحة باللونين الأحمر والرمادي تبرز درجات الحرارة والأداء',
          'مقاوم للبقع والزيوت وسهل المسح داخل ورشات ومحلات الغيار',
        ],
      },
      en: {
        title: 'ProMotor G12+ Heavy-Duty Automotive Coolant & Oil Stand',
        categoryLabel: 'Automotive & Fluids',
        summary:
          'Industrial-strength 4-tier rack built to hold heavy 5L and 1L coolant and oil jugs in auto parts stores.',
        dimensions: '60 × 45 × 175 cm',
        material: 'Extra-reinforced frame + Oil-resistant laminated print',
        highlights: [
          'Engineered to hold heavy 5L and 1L automotive fluid containers safely',
          'High-visibility red and slate technical graphics showing specs (+140°C / -35°C)',
          'Wipe-clean surface resistant to workshop grease and spills',
        ],
      },
    },
  },
  {
    id: 'sina-pharm-classic',
    brandLabel: 'SINA PHARM',
    category: 'pharma',
    shelvesCount: 5,
    maxLoadKg: 50,
    shapeStyle: 'arch',
    accentColor: '#7C3AED',
    imageSrc: '/assets/aistudio/1795089495223_5c0516af.jpg',
    locales: {
      fr: {
        title: 'Présentoir Sina Pharm standard pour pharmacies et parapharmacies',
        categoryLabel: 'Pharmacie & Parapharmacie',
        summary:
          'Présentoir médical épuré à 5 étagères aux couleurs blanc, violet et vert intégrant les coordonnées directes du distributeur.',
        dimensions: '60 × 38 × 172 cm',
        material: 'Forex blanc satiné + Impression pharmaceutique haute netteté',
        highlights: [
          'Hauteurs d’étagères calibrées pour compléments alimentaires et dermocosmétique',
          'Esthétique propre et structurée adaptée aux officines modernes',
          'Espace dédié sur le fronton et le côté pour vos coordonnées commerciales',
        ],
      },
      ar: {
        title: 'حامل Sina Pharm القياسي للصيدليات وشبه الصيدلية',
        categoryLabel: 'صيدليات وشبه صيدلية',
        summary:
          'حامل عرض طبي أنيق بـ 5 رفوف وهوية بصرية بيضاء وبنفسجية وخضراء مدمج بها معلومات الاتصال المباشر للموزع.',
        dimensions: '60 × 38 × 172 سم',
        material: 'ألواح فوركس بيضاء ناعمة + طباعة طبية دقيقة',
        highlights: [
          'ارتفاعات رفوف مدروسة لتناسب علب المكملات الغذائية وكريمات العناية',
          'تصميم نظيف ومتناسق مع معايير العرض داخل الصيدليات الحديثة',
          'مساحة جانبية وعلوية واضحة لبيانات الشركة وأرقام الطلبيات',
        ],
      },
      en: {
        title: 'Sina Pharm Standard 5-Shelf Pharmacy Display Stand',
        categoryLabel: 'Pharmacy & Parapharmacy',
        summary:
          'Clean clinical-grade 5-shelf Forex display in white, purple, and green featuring integrated distributor contact details.',
        dimensions: '60 × 38 × 172 cm',
        material: 'Smooth white Forex panels + Precision UV print',
        highlights: [
          'Shelf heights tailored for supplements, dermo-cosmetics, and care bottles',
          'Clean aesthetic aligned with modern pharmacy interiors',
          'Dedicated header and side panel zones for direct distributor ordering info',
        ],
      },
    },
  },
  {
    id: 'sina-pharm-slanted',
    brandLabel: 'SINA PARAPHARM',
    category: 'pharma',
    shelvesCount: 4,
    maxLoadKg: 48,
    shapeStyle: 'classic',
    accentColor: '#65A30D',
    imageSrc: '/assets/aistudio/1795089554998_192fb53d.jpg',
    locales: {
      fr: {
        title: 'Présentoir incliné Sina Pharm pour soins parapharmaceutiques',
        categoryLabel: 'Pharmacie & Parapharmacie',
        summary:
          'Modèle à profondeur progressive sur 4 niveaux avec chants verts offrant une visibilité dégagée de haut en bas.',
        dimensions: '62 × 45 × 165 cm',
        material: 'Panneaux Forex + Chants de finition arrondis',
        highlights: [
          'Profondeur en escalier évitant que les produits supérieurs masquent les autres',
          'Niveau inférieur large conçu pour les flacons familiaux et lingettes',
          'Lignes latérales fluides reflétant l’univers soin et bien-être',
        ],
      },
      ar: {
        title: 'حامل Sina Pharm المائل لعرض مستحضرات العناية',
        categoryLabel: 'صيدليات وشبه صيدلية',
        summary:
          'نموذج متدرج العمق بـ 4 رفوف واسعة وحواف خضراء زاهية يمنح رؤية واضحة لجميع الصفوف من الأعلى إلى الأسفل.',
        dimensions: '62 × 45 × 165 سم',
        material: 'ألواح فوركس (Forex) + حواف تشطيب ملساء',
        highlights: [
          'تدرج هرمي للعمق يمنع حجب المنتجات الخلفية عن نظر الزبون',
          'رف سفلي واسع مخصص للعبوات العائلية والمناديل المرطبة',
          'انسيابية في الخطوط الجانبية تعكس الطابع الصحي والعناية اليومية',
        ],
      },
      en: {
        title: 'Sina Pharm Sloped Parapharmacy Care Display',
        categoryLabel: 'Pharmacy & Parapharmacy',
        summary:
          'Stepped-depth 4-shelf Forex stand with crisp lime-green edging giving shoppers unobstructed visibility across all tiers.',
        dimensions: '62 × 45 × 165 cm',
        material: 'Forex PVC panels + Smooth protective edge trims',
        highlights: [
          'Graduated shelf depth ensures lower-tier products stay clearly visible',
          'Wide bottom tier built for family-size lotions and care packs',
          'Fluid side curves matching modern skincare and wellness branding',
        ],
      },
    },
  },
  {
    id: 'rympharm-twin',
    brandLabel: 'RYMPHARM',
    category: 'pharma',
    shelvesCount: 5,
    maxLoadKg: 60,
    shapeStyle: 'classic',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/1795263201585_edf90a80.jpg',
    locales: {
      fr: {
        title: 'Présentoirs modulaires doubles pour pharmacies (Rympharm)',
        categoryLabel: 'Pharmacie & Parapharmacie',
        summary:
          'Unités jumelables personnalisables au nom de chaque officine pour organiser laits infantiles et produits de santé.',
        dimensions: '60 × 40 × 170 cm (par unité)',
        material: 'Structure renforcée pour boîtes métalliques + Fronton personnalisable',
        highlights: [
          'Fronton personnalisable par pharmacie avec signature du distributeur en pied',
          'Étagères profondes supportant les boîtes de lait infantile en métal',
          'Format modulaire juxtaposable pour créer un linéaire complet',
        ],
      },
      ar: {
        title: 'حوامل الصيدليات المزدوجة (Rympharm / M.B Rym)',
        categoryLabel: 'صيدليات وشبه صيدلية',
        summary:
          'وحدات عرض معيارية قابلة للتجميع الثنائي أو الفردي لتنظيم منتجات حليب الأطفال والمكملات داخل الصيدليات الكبرى.',
        dimensions: '60 × 40 × 170 سم (للوحدة)',
        material: 'هيكل معزز لعلب الحليب المعدنية + طباعة شعار الصيدلية',
        highlights: [
          'إمكانية تخصيص اسم كل صيدلية في الواجهة العلوية مع توحيد شعار الموزع بالأسفل',
          'رفوف عميقة تتحمل علب حليب الأطفال المعدنية الثقيلة',
          'تصميم معياري يتيح وضع حاملين متلاصقين لإنشاء جدار عرض متكامل',
        ],
      },
      en: {
        title: 'Rympharm Modular Twin Pharmacy Display Units',
        categoryLabel: 'Pharmacy & Parapharmacy',
        summary:
          'Modular side-by-side display units customizable with individual pharmacy names for infant formula and wellness lines.',
        dimensions: '60 × 40 × 170 cm (per unit)',
        material: 'Reinforced metal-tin shelving + Custom pharmacy header',
        highlights: [
          'Top header customizable per pharmacy while keeping distributor branding at base',
          'Deep reinforced shelves built for heavy infant formula tins',
          'Modular width lets pharmacies place twin units seamlessly side by side',
        ],
      },
    },
  },
  {
    id: 'ayyur-olives',
    brandLabel: 'AYYUR',
    category: 'food',
    shelvesCount: 5,
    maxLoadKg: 75,
    shapeStyle: 'arch',
    accentColor: '#16A34A',
    imageSrc: '/assets/aistudio/1795263787525_cd03f5ae.jpg',
    locales: {
      fr: {
        title: 'Présentoir Ayyur sur mesure pour olives et huile d’olive',
        categoryLabel: 'Alimentation & Confiserie',
        summary:
          'Présentoir robuste à 5 étagères conçu pour supporter bocaux en verre et bouteilles d’huile d’olive en grande surface.',
        dimensions: '65 × 42 × 172 cm',
        material: 'Structure renforcée bocaux verre + Impression anti-humidité',
        highlights: [
          'Étagères renforcées supportant des dizaines de bocaux en verre pleins',
          'Fronton découpé avec le logo Ayyur et numéros de commande directe',
          'Socle vert surélevé protégeant le meuble lors du nettoyage des allées',
        ],
      },
      ar: {
        title: 'حامل Ayyur المخصص للزيتون وزيت الزيتون',
        categoryLabel: 'مواد غذائية وحلويات',
        summary:
          'حامل عرض متين من 5 رفوف مخصص للبرطمانات الزجاجية وقوارير زيت الزيتون، مصمم لتحمل الأوزان الثقيلة في الأسواق الغذائية.',
        dimensions: '65 × 42 × 172 سم',
        material: 'هيكل مقوى للبرطمانات الزجاجية + طباعة مقاومة للرطوبة',
        highlights: [
          'رفوف مدعمة تتحمل عشرات البرطمانات الزجاجية الممتلئة دون أي تقوس',
          'قصة علوية تحمل شعار Ayyur مع أرقام التوزيع والطلب المباشر',
          'قاعدة مرتفعة باللون الأخضر تحمي الحامل من مياه تنظيف الممرات',
        ],
      },
      en: {
        title: 'Ayyur Heavy-Duty Olive & Olive Oil Display Stand',
        categoryLabel: 'Food & Confectionery',
        summary:
          'Sturdy 5-tier supermarket stand engineered to hold heavy glass olive jars and olive oil bottles safely.',
        dimensions: '65 × 42 × 172 cm',
        material: 'Reinforced glass-jar frame + Moisture-resistant print',
        highlights: [
          'Reinforced shelves holding dozens of full glass jars without bowing',
          'Custom crest header showcasing Ayyur branding and direct order numbers',
          'Elevated green plinth shields the display from aisle floor washing',
        ],
      },
    },
  },
  {
    id: 'fresh-classico',
    brandLabel: 'FRESH CLASSICO',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 45,
    shapeStyle: 'classic',
    accentColor: '#7E22CE',
    imageSrc: '/assets/aistudio/1795085745825_c613793a.jpg',
    locales: {
      fr: {
        title: 'Présentoir Fresh Classico pour essuie-tout et papiers ménagers',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir grand format à 5 larges étagères violettes et roses pour paquets familiaux en hypermarché.',
        dimensions: '75 × 48 × 185 cm',
        material: 'Forex grand format léger + Impression intégrale anti-rayures',
        highlights: [
          'Ouverture large adaptée aux formats Maxi et lots promotionnels 2+1',
          'Bandeaux de prix et d’offres très visibles sur chaque étagère',
          'Contraste violet/rose fort qui détache le produit dans les allées',
        ],
      },
      ar: {
        title: 'حامل Fresh Classico للمناشف الورقية والمناديل',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض كبير الحجم بـ 5 رفوف واسعة وألوان بنفسجية ووردية لافتة لعرض لفات الورق والمناديل في السوبرماركت.',
        dimensions: '75 × 48 × 185 سم',
        material: 'ألواح فوركس خفيفة وعريضة + طباعة كاملة مقاومة للخدش',
        highlights: [
          'عرض مفتوح الحواف يستوعب العبوات العائلية الكبيرة (Maxi & 2+1 Free)',
          'واجهات تسعير وعروض ترويجية بارزة على حافة كل رف',
          'ألوان زاهية وتباين عالٍ يبرز المنتج وسط ممرات المنظفات',
        ],
      },
      en: {
        title: 'Fresh Classico Wide-Format Paper Towels Display Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Wide 5-shelf hypermarket Forex display with bold purple and magenta graphics built for maxi paper roll packs.',
        dimensions: '75 × 48 × 185 cm',
        material: 'Wide lightweight Forex panels + Scratch-resistant full print',
        highlights: [
          'Open-edge shelf span sized for bulky Maxi and 2+1 Free multi-packs',
          'High-visibility promotional price strips along every shelf lip',
          'Vibrant purple color blocking stands out in cleaning aisles',
        ],
      },
    },
  },
  {
    id: 'chichaua-snacks',
    brandLabel: 'CHICHAUA!',
    category: 'food',
    shelvesCount: 6,
    maxLoadKg: 50,
    shapeStyle: 'custom-bottle',
    accentColor: '#EA580C',
    imageSrc: '/assets/aistudio/1795085081535_424489f4.jpg',
    locales: {
      fr: {
        title: 'Présentoirs Chichaua! pour snacks et chips (Forex & Métal)',
        categoryLabel: 'Alimentation & Confiserie',
        summary:
          'Double réalisation alliant version Forex compartimentée et version grille métallique avec fronton mascotte découpé.',
        dimensions: '65 × 42 × 180 cm',
        material: 'Version Forex sur mesure + Version grille métallique thermolaquée',
        highlights: [
          'Choix flexible entre Forex haute densité et structure grille métallique selon budget',
          'Séparateurs et paniers multi-niveaux organisant tous les formats de sachets',
          'Fronton mascotte découpé au CNC captant immédiatement l’attention',
        ],
      },
      ar: {
        title: 'حوامل Chichaua! للمقرمشات والشيبس (فوركس ومعدن)',
        categoryLabel: 'مواد غذائية وحلويات',
        summary:
          'تنفيذ مزدوج يجمع بين الحامل المصنوع من الفوركس والمقسّم للأكياس والحامل الشبكي المعدني مع واجهة علوية مقصوصة لشخصية العلامة.',
        dimensions: '65 × 42 × 180 سم',
        material: 'نسخة ألواح فوركس مخصصة + نسخة شبك معدني مطلي حرارياً',
        highlights: [
          'مرونة في التنفيذ بين الفوركس (Forex) والهياكل المعدنية الشبكية حسب الميزانية',
          'قواطع طولية ورفوف متعددة تنظم أكياس الشيبس بمختلف أحجامها',
          'رأس علوي مقصوص بدقة CNC يبرز شخصية العلامة الترفيهية',
        ],
      },
      en: {
        title: 'Chichaua! Dual Forex & Wire Snack Display Stands',
        categoryLabel: 'Food & Confectionery',
        summary:
          'Twin-format execution combining a compartmentalized Forex stand and powder-coated wire rack with a die-cut mascot topper.',
        dimensions: '65 × 42 × 180 cm',
        material: 'Custom Forex panel edition + Powder-coated wire rack edition',
        highlights: [
          'Flexible fabrication in high-density Forex or metal wire to fit retail budgets',
          'Multi-level dividers and side clip strips organize all snack pouch sizes',
          'CNC-cut character header draws immediate shopper attention',
        ],
      },
    },
  },
  {
    id: 'dove-beauty',
    brandLabel: 'DOVE CARE',
    category: 'perfumes',
    shelvesCount: 4,
    maxLoadKg: 48,
    shapeStyle: 'custom-bottle',
    accentColor: '#CA8A04',
    imageSrc: '/assets/aistudio/1795029211737_8136b02c.jpg',
    locales: {
      fr: {
        title: 'Présentoir beauté Dove avec couronne feuille dorée découpée',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir cosmétique élégant à 4 niveaux codés par couleur avec visuels latéraux haute définition et couronne découpée.',
        dimensions: '58 × 40 × 175 cm',
        material: 'Forex blanc premium + Découpe CNC fine + Impression photo UV',
        highlights: [
          'Bandeaux de niveaux colorés pour identifier chaque gamme de soin en un coup d’œil',
          'Flancs latéraux habillés de visuels publicitaires haute définition',
          'Couronne supérieure découpée valorisant l’espace beauté et parfumerie',
        ],
      },
      ar: {
        title: 'حامل Dove للعناية الشخصية بقصة أوراق ذهبية',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض تجميلي فاخر بـ 4 رفوف ملونة حسب كل مجموعة منتجات مع قصة علوية لشعار الأوراق الذهبية وصور دعائية جانبية.',
        dimensions: '58 × 40 × 175 سم',
        material: 'ألواح فوركس بيضاء فاخرة + قص CNC دقيق + طباعة فوتوغرافية',
        highlights: [
          'أشرطة رفوف مرمزة بالألوان لتمييز كل فئة من منتجات العناية بسهولة',
          'جوانب الحامل تستعرض صوراً دعائية متدرجة عالية الدقة',
          'تاج علوي مقصوص بعناية يضفي فخامة واضحة داخل محلات التجميل',
        ],
      },
      en: {
        title: 'Dove Personal Care Stand with Die-Cut Golden Leaf Topper',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Refined cosmetic Forex stand featuring 4 color-coded tiers, photographic side panels, and a sculpted leaf crest.',
        dimensions: '58 × 40 × 175 cm',
        material: 'Premium white Forex + Precision CNC cut + Photo-grade print',
        highlights: [
          'Color-coded shelf strips separate product ranges for effortless browsing',
          'Side panels feature high-resolution editorial campaign imagery',
          'Sculpted crest topper elevates brand prestige inside beauty shops',
        ],
      },
    },
  },
  {
    id: 'maghnia-spices',
    brandLabel: 'QALAAT MAGHNIA',
    category: 'food',
    shelvesCount: 5,
    maxLoadKg: 70,
    shapeStyle: 'arch',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/73249a96-ff1b-4c96-84fd-3467927241ef_cb312725.png',
    locales: {
      fr: {
        title: 'Présentoir double colonne épices Qalaat Maghnia (El Hadj El Bachir)',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Grand présentoir double colonne à 5 niveaux conçu pour bocaux en verre et sachets d’épices, avec fronton voûté découpé sur mesure et colonne latérale imprimée intégralement.',
        dimensions: '105 × 45 × 205 cm',
        material: 'Structure double travée haute résistance + Découpe CNC voûtée + Impression HD',
        highlights: [
          'Double compartiment de 5 étagères supportant bocaux lourds et sachets souples',
          'Pilier latéral pleine hauteur intégrant logo, slogan et coordonnées client',
          'Fronton panoramique découpé avec visuel artisanal à fort attrait en rayon',
        ],
      },
      ar: {
        title: 'حامل عرض مزدوج لتوابل قلعة مغنية (الحاج البشير)',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'حامل عرض عريض بعمودين و5 رفوف مخصص لبرطمانات التوابل الزجاجية وأكياس البهارات، مع تاج علوي مقصوص بدقة وعمود جانبي مطبوع بالكامل.',
        dimensions: '105 × 45 × 205 سم',
        material: 'هيكل مزدوج متين + قص CNC قوسي + طباعة عالية الدقة',
        highlights: [
          'قسمان بـ 5 مستويات لاستيعاب العبوات الزجاجية الثقيلة والأكياس في آنٍ واحد',
          'عمود جانبي مطبوع بالكامل يعرض الشعار والهوية البصرية وأرقام التواصل بوضوح',
          'تاج علوي عريض بقصة احترافية يجذب المتسوقين داخل السوبرماركت',
        ],
      },
      en: {
        title: 'Qalaat Maghnia Spices Double-Column Display Stand',
        categoryLabel: 'Food & Beverages',
        summary:
          'Wide double-bay 5-tier supermarket spice stand built for heavy glass jars and pouches, topped with a custom arched die-cut header and full-height printed side pillar.',
        dimensions: '105 × 45 × 205 cm',
        material: 'Heavy-duty double-bay frame + Arched CNC header + HD graphic wrap',
        highlights: [
          'Dual 5-shelf bays engineered for glass spice jars and upright pouches',
          'Full-height printed side column highlighting brand crest and contact info',
          'Custom contoured arch header creating strong heritage presence in aisles',
        ],
      },
    },
  },
  {
    id: 'agro-kouza-honey',
    brandLabel: 'AGRO KOUZA',
    category: 'food',
    shelvesCount: 4,
    maxLoadKg: 60,
    shapeStyle: 'custom-bottle',
    accentColor: '#EAB308',
    imageSrc: '/assets/aistudio/1795263696480_0bda2542.jpg',
    locales: {
      fr: {
        title: 'Présentoir Agro KOUZA (Kouza Plus) avec fronton hexagonal alvéolé',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Présentoir vertical jaune et blanc à 4 étagères conçu pour pots de miel, flacons doseurs et sachets, coiffé d’un fronton hexagonal sur mesure.',
        dimensions: '62 × 44 × 195 cm',
        material: 'Panneaux Forex épais + Découpe fronton hexagonal + Bandeaux jaunes',
        highlights: [
          'Fronton polygonal inspiré des alvéoles de miel immédiatement identifiable en allée',
          '4 étagères profondes adaptées aux bocaux en verre et emballages Kouza Plus',
          'Flancs inclinés imprimés en continu pour valoriser la gamme et les formats',
        ],
      },
      ar: {
        title: 'حامل عرض Agro KOUZA (Kouza Plus) بتاج سداسي مستوحى من خلية النحل',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'حامل عرض رأسي باللونين الأصفر والأبيض مع 4 رفوف مخصصة لبرطمانات العسل والعبوات والأكياس، مزود بقصة علوية سداسية الشكل.',
        dimensions: '62 × 44 × 195 سم',
        material: 'ألواح فوركس (Forex) سميكة + قص علوي سداسي مخصص + أشرطة واجهة مطبوعة',
        highlights: [
          'قصة تاج سداسية مستوحاة من قرص العسل تبرز العلامة التجارية وسط الممرات',
          '4 رفوف عميقة ومتينة تتحمل وزن البرطمانات الزجاجية لمنتجات Kouza Plus',
          'جوانب مائلة مطبوعة تستعرض مختلف أحجام وأنواع المنتجات بوضوح',
        ],
      },
      en: {
        title: 'Agro KOUZA (Kouza Plus) Honeycomb-Crest Display Stand',
        categoryLabel: 'Food & Beverages',
        summary:
          'Bright yellow and white 4-shelf vertical supermarket display stand for honey jars, squeeze bottles, and pouches, crowned with a custom hexagonal crest.',
        dimensions: '62 × 44 × 195 cm',
        material: 'Heavy Forex board + Custom hexagonal CNC crest + Branded shelf strips',
        highlights: [
          'Hexagonal honeycomb-inspired top silhouette creates instant shelf recognition',
          '4 deep reinforced tiers hold heavy glass honey jars and pouches securely',
          'Angled side panels showcase product SKUs along supermarket traffic lines',
        ],
      },
    },
  },
  {
    id: 'dazzel-gel-douche',
    brandLabel: 'DAZZEL',
    category: 'perfumes',
    shelvesCount: 3,
    maxLoadKg: 55,
    shapeStyle: 'arch',
    accentColor: '#2563EB',
    imageSrc: '/assets/aistudio/1795089744601_385b40ff.jpg',
    locales: {
      fr: {
        title: 'Série de présentoirs hypermarché DAZZEL Gel Douche',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Déploiement en série de présentoirs à fronton cintré pour le rayon cosmétique et hygiène, avec 3 étagères lumineuses et bandeau inférieur imprimé.',
        dimensions: '65 × 42 × 168 cm',
        material: 'Structure Forex blanche haute rigidité + Fronton voûté + Impression UV',
        highlights: [
          'Fabrication en grande série avec alignement uniforme en allée d’hypermarché',
          'Fronton arrondi mettant en avant les visuels des différentes fragrances',
          'Bandeaux de façade et socle inférieur parfaitement assortis à la charte DAZZEL',
        ],
      },
      ar: {
        title: 'سلسلة حوامل عرض DAZZEL Gel Douche للهايبرماركت',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'تصنيع وتجهيز سلسلة حوامل عرض بقسم التجميل والتنظيف تضم 3 رفوف واسعة وتاجاً علوياً مقوساً مع واجهة سفلية مطبوعة.',
        dimensions: '65 × 42 × 168 سم',
        material: 'هيكل فوركس أبيض صلب + تاج قوسي + طباعة UV مقاومة للرطوبة',
        highlights: [
          'إنتاج كمي متناسق لصف الحوامل بشكل احترافي في ممرات الهايبرماركت',
          'رأس مقوس يعرض تشكيلة عبوات جل الاستحمام بألوان واضحة وجذابة',
          'حواف رفوف وقاعدة سفلية مطبوعة بهوية علامة DAZZEL لسهولة التمييز',
        ],
      },
      en: {
        title: 'DAZZEL Gel Douche Hypermarket Fleet Display Stands',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Multi-unit retail rollout of arched-header display stands built for hypermarket cosmetics aisles, featuring 3 wide tiers and a branded lower fascia.',
        dimensions: '65 × 42 × 168 cm',
        material: 'Rigid white Forex board + Arched CNC topper + UV-printed brand fascia',
        highlights: [
          'Consistent batch production engineered for multi-stand hypermarket rows',
          'Rounded header showcases full shower gel bottle lineup at eye level',
          'Color-matched shelf trims and base kickplate reinforce DAZZEL branding',
        ],
      },
    },
  },
  {
    id: 'plvevent-barber-care',
    brandLabel: 'PLVEVENT CARE',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 48,
    shapeStyle: 'classic',
    accentColor: '#BE185D',
    imageSrc: '/assets/aistudio/1795263523908_54b4c5ba.jpg',
    locales: {
      fr: {
        title: 'Présentoir ouvert 5 niveaux PLVevent pour salons et soins capillaires',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir modulaire ouvert à 5 tablettes bicolores (magenta et anthracite) avec montant vertical pleine hauteur et enseigne supérieure pour salons de coiffure et boutiques.',
        dimensions: '55 × 40 × 185 cm',
        material: 'Forex découpé à encoches + Tablettes bicolores + Enseigne haute',
        highlights: [
          'Architecture ouverte à accès 360° idéale pour salons, barbershops et comptoirs',
          'Alternance dynamique de rebords magenta et gris anthracite sans vis apparentes',
          'Montant latéral pleine hauteur et caisson supérieur dédiés au logo de marque',
        ],
      },
      ar: {
        title: 'حامل عرض مفتوح بـ 5 مستويات PLVevent لصالونات الحلاقة والعناية',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض عصري مفتوح بـ 5 رفوف بألوان متناوبة (الوردي الغامق والرمادي الداكن) مع عمود جانبي كامل ولافتة علوية مخصصة للصالونات ونقاط البيع.',
        dimensions: '55 × 40 × 185 سم',
        material: 'ألواح فوركس بنظام تعشيق + رفوف ثنائية اللون + واجهة شعار علوية',
        highlights: [
          'تصميم مفتوح يتيح الوصول السهل للمنتجات داخل صالونات الحلاقة والتجميل',
          'تباين بصري أنيق بين حواف الرفوف باللون الوردي والرمادي الداكن',
          'عمود جانبي مطبوع ولافتة علوية بارزة تعزز حضور العلامة التجارية',
        ],
      },
      en: {
        title: 'PLVevent 5-Tier Open Modular Barber & Hair Care Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Modern open-access 5-shelf display stand featuring alternating magenta and charcoal tray lips, a full-height logo pillar, and elevated header signage for salons.',
        dimensions: '55 × 40 × 185 cm',
        material: 'Slotted Forex assembly + Two-tone tray rims + Elevated logo header',
        highlights: [
          'Open-sided architecture fits seamlessly inside salons, barbershops, and boutiques',
          'Alternating magenta and charcoal shelf fronts frame grooming bottles cleanly',
          'Full vertical side pillar and top signboard maximize brand visibility',
        ],
      },
    },
  },
  {
    id: 'sweetie-green-counter',
    brandLabel: 'SWEETIE GREEN POS',
    category: 'food',
    shelvesCount: 2,
    maxLoadKg: 18,
    shapeStyle: 'custom-bottle',
    accentColor: '#16A34A',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0188_3a562897.jpg',
    locales: {
      fr: {
        title: 'Présentoir comptoir Sweetie Vert à découpe profilée noisette',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Déclinaison vert émeraude du présentoir comptoir à 2 niveaux avec joues profilées sur mesure et visuels chocolat & noisettes.',
        dimensions: '35 × 30 × 62 cm',
        material: 'Forex haute densité + Découpe profilée sur mesure + Impression HD',
        highlights: [
          'Coloris vert vif contrastant avec les tablettes chocolat pour attirer l’œil en caisse',
          'Flancs latéraux ondulés avec découpe en silhouette épousant le décor',
          'Deux plateaux inclinés à façade imprimée pour un réassort rapide',
        ],
      },
      ar: {
        title: 'حامل كاونتر Sweetie الأخضر بقصة جانبية بارزة للشوكولاتة',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'نسخة خضراء أنيقة من حامل الطاولة ذي الرفين مع قصات جانبية مخصصة وصور شوكولاتة وبندق عالية الدقة لنقاط الدفع.',
        dimensions: '35 × 30 × 62 سم',
        material: 'فوركس (Forex) عالي الكثافة + قص جانبي منحوت + طباعة فوتوغرافية HD',
        highlights: [
          'لون أخضر حيوي يبرز ألواح الشوكولاتة ويجذب الانتباه عند الكاشير',
          'حواف جانبية مقصوصة بتفصيل مخصص مع شعار وعبارة العلامة التجارية',
          'رفان مائلان بواجهة أمامية مطبوعة لتنظيم العبوات بسهولة',
        ],
      },
      en: {
        title: 'Sweetie Green 2-Tier Countertop Chocolate Display',
        categoryLabel: 'Food & Beverages',
        summary:
          'Emerald-green edition of the 2-tier checkout counter display with custom-contoured side walls and rich hazelnut chocolate visuals.',
        dimensions: '35 × 30 × 62 cm',
        material: 'High-density Forex + Contoured CNC profile + HD print',
        highlights: [
          'Vibrant green branding contrasts sharply with chocolate bars at checkout',
          'Wave-contoured side panels feature custom splash and logo cut-outs',
          'Dual angled trays hold retail boxes neatly within reach',
        ],
      },
    },
  },
  {
    id: 'tuc-lays-snacks',
    brandLabel: 'TUC & LAY’S',
    category: 'food',
    shelvesCount: 4,
    maxLoadKg: 45,
    shapeStyle: 'arch',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0085_06780df9.jpg',
    locales: {
      fr: {
        title: 'Duo de présentoirs snacks TUC & Lay’s à 4 étagères inclinées',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Paire de présentoirs de sol à 4 niveaux inclinés spécialement dimensionnés pour sachets de chips et paquets de biscuits salés, avec fronton circulaire Lay’s.',
        dimensions: '55 × 40 × 165 cm (par unité)',
        material: 'Panneaux Forex rigides + Étagères inclinées + Fronton circulaire découpé',
        highlights: [
          'Tablettes inclinées empêchant les sachets souples de basculer',
          'Socle inférieur grand format habillé de graphismes dynamiques Lay’s & TUC',
          'Modularité permettant d’installer deux unités côte à côte en tête de gondole',
        ],
      },
      ar: {
        title: 'ثنائي حوامل سناك TUC و Lay’s بـ 4 رفوف مائلة للعرض الكثيف',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'تصميم زوجي لحوامل أرضية بـ 4 رفوف مصممة لأكياس الشيبس وعلب البسكويت، مع واجهة سفلية عريضة وتاج دائري مقصوص لشعار Lay’s.',
        dimensions: '55 × 40 × 165 سم (لكل وحدة)',
        material: 'ألواح فوركس صلبة متينة + رفوف مائلة + قص دائري للشعار العلوي',
        highlights: [
          'رفوف مائلة بتدرج واضح تعرض الأكياس بأقصى وضوح وتمنع انزلاقها',
          'قاعدة سفلية واسعة مطبوعة بهوية TUC و Lay’s تفرض حضورها في المحل',
          'تصميم متناسق يسمح بوضع الحاملين جنباً إلى جنب دون إهدار للمساحة',
        ],
      },
      en: {
        title: 'TUC & Lay’s Twin 4-Tier Snack Floor Display Stands',
        categoryLabel: 'Food & Beverages',
        summary:
          'Coordinated pair of 4-tier angled snack stands built for potato chip pouches and savory biscuits, topped with a die-cut circular Lay’s emblem.',
        dimensions: '55 × 40 × 165 cm (per unit)',
        material: 'Rigid Forex panels + Angled snack trays + Die-cut circular header',
        highlights: [
          'Graduated shelf trays keep soft chip bags upright and visible',
          'Full-wrap lower kickplates amplify brand presence from across the store',
          'Side-by-side footprint maximizes snack category density in compact aisles',
        ],
      },
    },
  },
  {
    id: 'chokrane-wafer-aisle',
    brandLabel: 'CHOKRANE',
    category: 'food',
    shelvesCount: 3,
    maxLoadKg: 40,
    shapeStyle: 'custom-bottle',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0164_ef3da125.jpg',
    locales: {
      fr: {
        title: 'Présentoir gaufrettes Chokrane à découpe logo et flanc QR',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Présentoir vertical rouge et or gaufrette à 3 grands compartiments pour cartons distributeurs, avec découpe supérieure calligraphiée « شكرا » et QR code latéral.',
        dimensions: '54 × 42 × 175 cm',
        material: 'Forex imprimé motif gaufrette + Découpe logo calligraphique + Flanc QR',
        highlights: [
          'Fond texturé gaufrette dorée assorti à l’univers produit Chokrane',
          'Flanc latéral galbé rouge portant logo et QR code scannable en rayon',
          'Capacité optimisée pour empiler jusqu’à 6 cartons de gaufrettes par niveau',
        ],
      },
      ar: {
        title: 'حامل عرض قوفريط شكرا (Chokrane) بقصة الشعار ورمز QR جانبي',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'حامل عرض عمودي باللون الأحمر وتصميم الوافل الذهبي مع 3 مستويات عميقة لعلب القوفريط، وتاج علوي مقصوص بخط شعار «شكرا».',
        dimensions: '54 × 42 × 175 سم',
        material: 'ألواح فوركس مطبوعة بنقشة القوفريط + قص ليزري للشعار + جانب مزود بـ QR',
        highlights: [
          'تاج علوي مقصوص على حدود الشعار العربي «شكرا» يجذب العين من بعيد',
          'خلفية داخلية بنقشة البسكويت الذهبية وجوانب حمراء بتصميم انسيابي',
          'مساحة رفوف عميقة تستوعب تكديس عدة كراتين عرض في كل طابق',
        ],
      },
      en: {
        title: 'Chokrane Wafer 3-Tier Aisle Stand with Sculpted Logo Crest',
        categoryLabel: 'Food & Beverages',
        summary:
          'Red and golden-wafer 3-tier vertical display built for stacked wafer cartons, crowned with a die-cut calligraphic Chokrane crest and side QR badge.',
        dimensions: '54 × 42 × 175 cm',
        material: 'Wafer-textured Forex print + Die-cut logo topper + Branded side wrap',
        highlights: [
          'Custom contour-cut Arabic & Latin Chokrane emblem rises above aisle shelves',
          'Curved crimson side panel carries product logo and scannable QR code',
          'Deep reinforced bays hold multiple stacked display boxes cleanly',
        ],
      },
    },
  },
  {
    id: 'chokrane-wafer-checkout',
    brandLabel: 'CHOKRANE CAISSE',
    category: 'food',
    shelvesCount: 3,
    maxLoadKg: 40,
    shapeStyle: 'arch',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0168_ab254019.jpg',
    locales: {
      fr: {
        title: 'Présentoir Chokrane installé en zone caisse de supermarché',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Implantation stratégique en bout de caisse du présentoir Chokrane à 3 niveaux, captant les achats d’impulsion grâce à sa hauteur compacte et sa façade dégagée.',
        dimensions: '54 × 42 × 172 cm',
        material: 'Forex mince anti-encombrement + Décor chocolat fondu + Renfort bas',
        highlights: [
          'Encombrement frontal réduit parfaitement adapté aux passages étroits près des caisses',
          'Mise en avant simultanée des gammes chocolat noir et vanille en façade ouverte',
          'Base renforcée protégeant les cartons inférieurs lors du nettoyage du sol',
        ],
      },
      ar: {
        title: 'حامل عرض شكرا (Chokrane) بواجهة أمامية عند صندوق الدفع',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'تثبيت عملي لحامل قوفريط «شكرا» بـ 3 رفوف بجانب الكاشير، مصمم بواجهة أمامية مفتوحة وعرض مثالي يحفز الشراء السريع عند الخروج.',
        dimensions: '54 × 42 × 172 سم',
        material: 'هيكل فوركس مدمج للممرات + خلفية شوكولاتة + قاعدة سفلية مقواة',
        highlights: [
          'مقاس أمامي مدروس يتناسب مع المساحة الضيقة بجانب صندوق الدفع والثلاجات',
          'عرض مباشر ومزدوج لنكهات الشوكولاتة والفانيليا على 3 مستويات واضحة',
          'خامة قوية تتحمل الاحتكاك اليومي في أكثر المناطق حركة داخل السوبرماركت',
        ],
      },
      en: {
        title: 'Chokrane Wafer Checkout-Lane Impulse Display Stand',
        categoryLabel: 'Food & Beverages',
        summary:
          'Front-facing retail placement of the 3-tier Chokrane wafer rack beside the checkout counter, engineered to capture impulse purchases.',
        dimensions: '54 × 42 × 172 cm',
        material: 'Slim-footprint Forex frame + Melted chocolate header + Reinforced base',
        highlights: [
          'Narrow front footprint fits seamlessly beside store checkout counters',
          'Open 3-level front showcases both chocolate and vanilla wafer boxes clearly',
          'Durable lower trim shields bottom cartons from daily floor traffic',
        ],
      },
    },
  },
  {
    id: 'raovia-water-led',
    brandLabel: 'RAOVIA',
    category: 'food',
    shelvesCount: 3,
    maxLoadKg: 65,
    shapeStyle: 'custom-bottle',
    accentColor: '#1D4ED8',
    imageSrc: '/assets/aistudio/IMG-20261117-WA0018_592e309c.jpg',
    locales: {
      fr: {
        title: 'Présentoir lumineux LED Raovia découpé en bouteille d’eau minérale',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Présentoir premium à 3 niveaux façonné en silhouette de bouteille d’eau minérale avec bouchon bleu en relief et rétroéclairage LED froid intégré.',
        dimensions: '58 × 40 × 188 cm',
        material: 'Forex découpé CNC forme bouteille + Éclairage LED intégré + Impression alpine HD',
        highlights: [
          'Découpe supérieure complète épousant le goulot et le bouchon bleu Raovia',
          'Rétroéclairage LED bleu mettant en valeur la transparence des bouteilles d’eau',
          'Flancs latéraux décorés d’éclaboussures et sommets enneigés en haute définition',
        ],
      },
      ar: {
        title: 'حامل عرض مضيء LED لمياه Raovia على شكل قارورة كاملة',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'حامل عرض فاخر بـ 3 رفوف مقصوص بالكامل على هيئة قارورة مياه معدنية مع غطاء أزرق بارز وإضاءة LED داخلية تبرز نقاء العبوات.',
        dimensions: '58 × 40 × 188 سم',
        material: 'ألواح فوركس مقصوصة CNC بشكل القارورة + إضاءة LED مدمجة + طباعة HD',
        highlights: [
          'تاج علوي منحوت بدقة على شكل عنق وغطاء القارورة الأزرق لعلامة Raovia',
          'إضاءة LED باردة تمنح القوارير بريقاً استثنائياً داخل المتاجر الكبرى',
          'رفوف متينة تتحمل وزن قوارير المياه مع حواف أمامية تحمل شعار العلامة',
        ],
      },
      en: {
        title: 'Raovia LED-Backlit Water Bottle Silhouette Display Stand',
        categoryLabel: 'Food & Beverages',
        summary:
          'Premium 3-tier mineral water display shaped like a full bottle with a raised blue bottle-cap header and integrated cool-blue LED shelf lighting.',
        dimensions: '58 × 40 × 188 cm',
        material: 'CNC-cut Forex bottle silhouette + Integrated LED strips + Alpine HD wrap',
        highlights: [
          'Sculpted upper neck and bottle-cap topper delivers unmistakable visual impact',
          'Integrated LED shelf lighting illuminates transparent water bottles brilliantly',
          'Reinforced tiers support full beverage loads alongside splash-graphic sides',
        ],
      },
    },
  },
  {
    id: 'tsaf-spices',
    brandLabel: 'T-SAF SPICES',
    category: 'food',
    shelvesCount: 5,
    maxLoadKg: 60,
    shapeStyle: 'arch',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261117-WA0051_c26e425c.jpg',
    locales: {
      fr: {
        title: 'Présentoir épices algériennes T-SAF à 5 étagères et fronton cintré',
        categoryLabel: 'Agroalimentaire & Boissons',
        summary:
          'Présentoir vertical blanc et rouge à 5 niveaux conçu pour flacons et sachets d’épices T-SAF, avec fronton voûté affichant visuels d’épices et numéro de commande.',
        dimensions: '60 × 40 × 185 cm',
        material: 'Panneaux Forex blancs + Bandeaux rouges imprimés + Fronton voûté CNC',
        highlights: [
          '5 étagères étagées combinant pots cylindriques en haut et sachets d’épices en bas',
          'Fronton supérieur et flanc latéral mettant en scène épices et cuillères en bois',
          'Bandeaux rouges répétés assurant une signature de marque homogène sur chaque niveau',
        ],
      },
      ar: {
        title: 'حامل عرض توابل T-SAF الجزائرية بـ 5 رفوف وتاج قوسي مطبوع',
        categoryLabel: 'مواد غذائية ومشروبات',
        summary:
          'حامل عرض عمودي باللونين الأبيض والأحمر بـ 5 رفوف مخصص لعلب وأكياس توابل T-SAF، مع تاج علوي قوسي وجانب مطبوع بصور البهارات.',
        dimensions: '60 × 40 × 185 سم',
        material: 'ألواح فوركس (Forex) بيضاء + أشرطة رفوف حمراء + قص قوسي CNC',
        highlights: [
          '5 رفوف مخصصة لعرض القوارير العلوية وأكياس التوابل المتنوعة بوضوح تام',
          'واجهة علوية وجانب مطبوعان بصور التوابل الأصيلة وشعار العلامة ورقم الهاتف',
          'أشرطة حمراء بارزة تفصل بين المستويات وتبرز اسم T-SAF في السوبرماركت',
        ],
      },
      en: {
        title: 'T-SAF Algerian Spices 5-Tier Arched Supermarket Stand',
        categoryLabel: 'Food & Beverages',
        summary:
          'Clean white and crimson 5-tier retail spice stand designed for jars and pouches, topped with an arched T-SAF header and culinary spice visuals.',
        dimensions: '60 × 40 × 185 cm',
        material: 'White Forex frame + Printed red shelf strips + Arched CNC header',
        highlights: [
          '5 organized levels separate top-row spice jars from lower spice pouch rows',
          'Arched header and full-height side panel highlight brand graphics and contact info',
          'Repeated crimson shelf trims anchor brand identity across every tier',
        ],
      },
    },
  },
  {
    id: 'isis-henkel-island',
    brandLabel: 'HENKEL / ISIS',
    category: 'perfumes',
    shelvesCount: 3,
    maxLoadKg: 140,
    shapeStyle: 'stepped',
    accentColor: '#1D4ED8',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0015_42b326ba.jpg',
    locales: {
      fr: {
        title: 'Îlot central hypermarché multi-marques ISIS, Bref, Le Chat & OMO',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Grand îlot promotionnel double face sur palette conçu pour les bidons lourds de lessive liquide en allée centrale d’hypermarché.',
        dimensions: '160 × 120 × 185 cm',
        material: 'Structure palette haute charge + Habillage grand format + Fronton central',
        highlights: [
          'Capacité industrielle supportant des dizaines de bidons de 3L et 5L simultanément',
          'Exposition 360° sur gradins regroupant ISIS, OMO 3X, Bref et Le Chat',
          'Jupes de base et bandeaux promotionnels grand format visibles depuis toute l’allée',
        ],
      },
      ar: {
        title: 'جزيرة عرض مركزية كبرى في الهايبرماركت لعلامات ISIS و OMO و Bref و Le Chat',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'جزيرة ترويجية ضخمة مزدوجة الجهات على قاعدة عالية التحمل لعرض جالونات مساحيق الغسيل والمنظفات الثقيلة في الممرات الرئيسية.',
        dimensions: '160 × 120 × 185 سم',
        material: 'هيكل جزيرة مقوى للأوزان الثقيلة + تغليف إعلاني شامل + تاج مركزي',
        highlights: [
          'قدرة تحمل فائقة تستوعب عشرات العبوات الكبيرة من المنظفات الثقيلة بأمان',
          'تصميم مدرّج بزاوية 360 درجة يجمع عدة علامات تجارية في نقطة بيع واحدة',
          'تغليف سفلي وتاج علوي عريض يجذب المتسوقين من مسافة بعيدة داخل الهايبرماركت',
        ],
      },
      en: {
        title: 'ISIS, Bref, Le Chat & OMO Hypermarket Island Display',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Full-scale double-sided hypermarket pallet island engineered for heavy liquid detergent jugs across Henkel’s flagship cleaning brands.',
        dimensions: '160 × 120 × 185 cm',
        material: 'Heavy-load pallet frame + Full-wrap promotional skirts + Tower header',
        highlights: [
          'Industrial load structure safely holds dozens of heavy multi-liter detergent bottles',
          '360-degree stepped merchandising showcases ISIS, OMO, Bref, and Le Chat together',
          'High-impact base wrap and central brand header dominate central store aisles',
        ],
      },
    },
  },
  {
    id: 'aryana-beaute',
    brandLabel: 'ARYANA BEAUTÉ',
    category: 'perfumes',
    shelvesCount: 3,
    maxLoadKg: 42,
    shapeStyle: 'custom-bottle',
    accentColor: '#BE185D',
    imageSrc: '/assets/aistudio/IMG-20261117-WA0026_de9467a7.jpg',
    locales: {
      fr: {
        title: 'Présentoir cosmétique Aryana Beauté à fronton portrait découpé',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir blanc et rose poudré à 3 tablettes profondes pour soins de la peau, doté d’un fronton illustré découpé au laser et flanc éditorial bilingue.',
        dimensions: '62 × 42 × 178 cm',
        material: 'Panneaux Forex blancs satinés + Découpe portrait CNC + Impression éditoriale',
        highlights: [
          'Fronton supérieur sculpté reproduisant fidèlement l’icône féminine Aryana Beauté',
          'Flanc latéral haute définition intégrant visuels de soin et messages en arabe',
          'Tablettes roses à lèvre imprimée valorisant flacons, crèmes et coffrets',
        ],
      },
      ar: {
        title: 'حامل عرض تجميل Aryana Beauté بتاج علوي مقصوص لوجه الشعار',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض أنيق باللونين الأبيض والوردي الفاتح يضم 3 رفوف واسعة لمنتجات العناية بالبشرة، مع تاج علوي مقصوص بدقة على شكل شعار العلامة.',
        dimensions: '62 × 42 × 178 سم',
        material: 'ألواح فوركس بيضاء ساتان + قص CNC دقيق للتاج + طباعة فوتوغرافية جانبية',
        highlights: [
          'قصة علوية فنية تجسد رمز العلامة الأنثوي بتناغم تام مع ديكور محلات التجميل',
          'لوحة جانبية مطبوعة بصور دعائية ونصوص تعريفية لروتين العناية بالبشرة',
          'رفوف متينة مغلفة بأشرطة وردية تحمل شعار ARYANA بوضوح',
        ],
      },
      en: {
        title: 'Aryana Beauté Skincare Display with Die-Cut Portrait Header',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Refined white and blush-pink 3-shelf skincare stand featuring a laser-cut portrait emblem topper and editorial side panel visuals.',
        dimensions: '62 × 42 × 178 cm',
        material: 'Satin white Forex panels + CNC portrait topper + Editorial side print',
        highlights: [
          'Custom contour-cut crest brings the Aryana Beauté emblem to life',
          'Full-bleed side graphic pairs skincare lifestyle imagery with Arabic copy',
          'Pastel pink branded shelf strips frame serums, creams, and beauty kits',
        ],
      },
    },
  },
  {
    id: 'issima-nail-care',
    brandLabel: 'ISSIMA SALON',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 38,
    shapeStyle: 'classic',
    accentColor: '#DB2777',
    imageSrc: '/assets/aistudio/IMG-20261117-WA0024_5acaef08.jpg',
    locales: {
      fr: {
        title: 'Présentoir vernis à ongles professionnel ISSIMA (5 niveaux)',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Colonne cosmétique rose pastel à 5 niveaux destinée aux instituts et parfumeries pour exposer une large palette de vernis à ongles professionnels.',
        dimensions: '52 × 36 × 182 cm',
        material: 'Panneaux Forex rose/blanc + Décor floral cerisier + Caisson enseigne',
        highlights: [
          '5 tablettes dédiées au classement chromatique des flacons de vernis à ongles',
          'Flanc latéral imprimé verticalement avec motifs fleurs de cerisier',
          'Caisson supérieur large assurant une visibilité élégante en parfumerie',
        ],
      },
      ar: {
        title: 'حامل عرض طلاء أظافر احترافي ISSIMA بـ 5 رفوف لمحلات التجميل',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل تجميلي راقٍ باللون الوردي الهادئ مع 5 مستويات عرض مخصصة لترتيب وتنسيق مجموعات طلاء الأظافر داخل الصالونات ومحلات العطور.',
        dimensions: '52 × 36 × 182 سم',
        material: 'ألواح فوركس بيضاء ووردية + طباعة أزهار الكرز + صندوق لافتة علوي',
        highlights: [
          '5 رفوف مريحة لاستعراض عشرات الدرجات اللونية لطلاء الأظافر بشكل منظم',
          'جوانب مطبوعة بأزهار الكرز ونص طولي أنيق يبرز التخصص الاحترافي',
          'واجهة علوية عريضة تحمل شعار ISSIMA Salon Expert بلمسة فاخرة',
        ],
      },
      en: {
        title: 'ISSIMA 5-Tier Professional Nail Polish Boutique Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Soft pastel-pink 5-tier cosmetic tower crafted for beauty boutiques and salons to organize full nail lacquer collections.',
        dimensions: '52 × 36 × 182 cm',
        material: 'Rose-pink & white Forex panels + Cherry-blossom print + Boxed header',
        highlights: [
          '5 cleanly spaced shelves display dozens of nail polish shades at eye level',
          'Blossom-accented side panel features vertical category typography',
          'Wide upper signboard reinforces the ISSIMA Salon Expert brand identity',
        ],
      },
    },
  },
  {
    id: 'boldx-mancare',
    brandLabel: 'BOLDX MANCARE',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 55,
    shapeStyle: 'stepped',
    accentColor: '#0F766E',
    imageSrc: '/assets/aistudio/IMG-20261117-WA0019_1f45b9ab.jpg',
    locales: {
      fr: {
        title: 'Présentoir masculin biseauté BOLDX Mancare 1974 à barres de retenue',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir architectural anthracite et bleu pétrole à 5 étagères équipées de tringles métalliques anti-chute pour sprays et déodorants masculins.',
        dimensions: '56 × 42 × 186 cm',
        material: 'Forex biseauté anthracite + Barres métal chromées + Fronton géométrique',
        highlights: [
          'Tringles métalliques frontales maintenant solidement chaque rangée d’aérosols',
          'Flancs géométriques biseautés avec visuel grand format du flacon BOLDX',
          'Fronton polygonal noir et socle triangulaire affirmant un positionnement masculin fort',
        ],
      },
      ar: {
        title: 'حامل عرض رجالي BOLDX Mancare 1974 بتصميم مشطوف وحواجز أمان',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض هندسي عصري باللونين الأسود والأزرق البترولي يضم 5 رفوف مزودة بقضبان حماية معدنية مخصصة لعبوات السبري ومزيلات العرق الرجالية.',
        dimensions: '56 × 42 × 186 سم',
        material: 'هيكل فوركس هندسي مشطوف الحواف + قضبان أمان معدنية + تاج مضلع',
        highlights: [
          'حواجز معدنية أمامية على كل رف تحمي عبوات الرذاذ والزجاج من السقوط',
          'تصميم جانبي مشطوف الزوايا يعرض صورة ضخمة للعبوة مع شعار 1974',
          'تاج علوي وقاعدة هندسية داكنة تمنح العلامة طابعاً رجالياً فخماً وقوياً',
        ],
      },
      en: {
        title: 'BOLDX Mancare 1974 Chamfered 5-Tier Grooming Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          'Architectural charcoal and deep-teal 5-shelf men’s grooming display outfitted with protective chrome front rails for deodorant sprays.',
        dimensions: '56 × 42 × 186 cm',
        material: 'Chamfered Forex panels + Metal guard rails + Geometric crown',
        highlights: [
          'Front wire safety rails keep tall aerosol cans neatly aligned on all 5 tiers',
          'Angled side wing displays oversized product artwork and brand crest',
          'Matte-black polygonal header and base deliver strong masculine shelf presence',
        ],
      },
    },
  },
  {
    id: 'clean-iskafy',
    brandLabel: 'CLEAN ISKAFY',
    category: 'perfumes',
    shelvesCount: 5,
    maxLoadKg: 50,
    shapeStyle: 'arch',
    accentColor: '#0284C7',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0180_0971933f.jpg',
    locales: {
      fr: {
        title: 'Présentoir 60 cm Clean Iskafy à 5 niveaux thématiques par parfum',
        categoryLabel: 'Parfums, Détergents & Soin',
        summary:
          'Présentoir vertical de 60 cm de largeur à 5 étagères codées par couleur pour sprays désodorisants chaussures, textiles et intérieur, avec icônes latérales.',
        dimensions: '60 × 38 × 185 cm',
        material: 'Panneaux Forex blancs 60 cm + Bandeaux couleur thématiques + Fronton cintré',
        highlights: [
          'Format compact de 60 cm optimisé pour les allées de superettes et drogueries',
          '5 bandeaux couleur distincts (vert, rose, bleu, violet) guidant selon l’usage',
          'Colonne latérale explicative avec pictogrammes chaussures, vêtements et air',
        ],
      },
      ar: {
        title: 'حامل عرض Clean Iskafy بعرض 60 سم و5 رفوف ملونة حسب الاستخدام',
        categoryLabel: 'عطور ومنظفات وعناية',
        summary:
          'حامل عرض عمودي بعرض 60 سم و5 رفوف مرمزة بالألوان لمعطرات الأحذية والأقمشة والجو، مع عمود جانبي يشرح الاستخدامات بالأيقونات.',
        dimensions: '60 × 38 × 185 سم',
        material: 'ألواح فوركس بيضاء 60 سم + أشرطة رفوف ملونة + تاج قوسي مقصوص',
        highlights: [
          'مقاس قياسي بعرض 60 سم يتلاءم بسهولة مع واجهات السوبيرات ومحلات التنظيف',
          '5 ألوان مميزة لأشرطة الرفوف تفرّق بين معطر الأحذية، الأقمشة والجو',
          'جدار جانبي مزود بأيقونات توضيحية وواجهة سفلية تؤكد نقاء وانتعاش المنتج',
        ],
      },
      en: {
        title: 'Clean Iskafy 60 cm 5-Tier Fragrance & Footwear Care Stand',
        categoryLabel: 'Perfumes, Care & Detergents',
        summary:
          '60 cm-wide white retail stand with 5 color-coded shelves for shoe, textile, and room freshener sprays plus side usage icons.',
        dimensions: '60 × 38 × 185 cm',
        material: '60 cm white Forex body + Color-coded shelf strips + Arched header',
        highlights: [
          'Standard 60 cm footprint slots cleanly alongside mini-market gondolas',
          'Five distinct colored shelf strips categorize shoe, fabric, and air sprays',
          'Side pillar icons communicate product applications instantly to shoppers',
        ],
      },
    },
  },
  {
    id: 'swab-spray-counter',
    brandLabel: 'SWAB SPRAY',
    category: 'automotive',
    shelvesCount: 2,
    maxLoadKg: 22,
    shapeStyle: 'custom-bottle',
    accentColor: '#EA580C',
    imageSrc: '/assets/aistudio/IMG-20261117-WA0010_1258099f.jpg',
    locales: {
      fr: {
        title: 'Présentoir sculptural comptoir SWAB peinture aérosol acrylique',
        categoryLabel: 'Auto, Sprays & Lubrifiants',
        summary:
          'Présentoir de comptoir asymétrique intégrant une découpe géante inclinée de bombe aérosol SWAB et deux tablettes en éventail pour quincailleries et magasins auto.',
        dimensions: '48 × 32 × 65 cm',
        material: 'Forex découpé CNC en silhouette aérosol + Tablettes étagées + Impression UV',
        highlights: [
          'Silhouette 3D d’aérosol géant incliné à gauche capturant immédiatement l’attention',
          'Deux tablettes géométriques en éventail dynamisant la présentation des bombes',
          'Socle biseauté avant avec logo SWAB grand format et éclats de couleurs vives',
        ],
      },
      ar: {
        title: 'حامل كاونتر إبداعي لبخاخ الطلاء SWAB بمجسم علبة مائلة بارزة',
        categoryLabel: 'السيارات، البخاخات والزيوت',
        summary:
          'حامل طاولة هندسي غير متماثل يضم مجسماً عملاقاً مائلاً لعبوة بخاخ الطلاء SWAB مع رفين متدرجين بتصميم مروحي لمحلات الخردوات وقطع الغيار.',
        dimensions: '48 × 32 × 65 سم',
        material: 'فوركس مقصوص CNC بشكل مجسم للعبوة + رفوف هندسية مائلة + طباعة زاهية',
        highlights: [
          'تصميم فني بارز لعبوة سبري عملاقة مائلة يمنح المنتج حضوراً لا يُنسى على الطاولة',
          'رفان هندسيان مائلان يستعرضان عبوات البخاخ مع خلفية بقع ألوان متفجرة',
          'قاعدة أمامية مشطوفة تحمل شعار SWAB بشكل بارز ومقروء من كل الزوايا',
        ],
      },
      en: {
        title: 'SWAB Acrylic Spray Paint Sculptural Countertop Display',
        categoryLabel: 'Auto, Sprays & Lubricants',
        summary:
          'Asymmetric countertop display combining an oversized tilted SWAB spray-can cutout with two fanned geometric shelves for hardware and auto shops.',
        dimensions: '48 × 32 × 65 cm',
        material: 'Giant CNC-cut Forex can + Geometric fanned shelves + Vivid UV print',
        highlights: [
          'Oversized angled spray-can silhouette acts as an instant counter focal point',
          'Fanned dual-tier geometry showcases cans against vibrant paint-splash graphics',
          'Beveled front plinth highlights the SWAB logo cleanly at hardware counters',
        ],
      },
    },
  },
  {
    id: 'spray-paint-heavy-rack',
    brandLabel: 'SPRAY RACK PRO',
    category: 'automotive',
    shelvesCount: 5,
    maxLoadKg: 110,
    shapeStyle: 'classic',
    accentColor: '#1F2937',
    imageSrc: '/assets/aistudio/IMG-20261118-WA0202_b0cc3bbd.jpg',
    locales: {
      fr: {
        title: 'Présentoir industriel noir 5 niveaux pour bombes de peinture auto & bricolage',
        categoryLabel: 'Auto, Sprays & Lubrifiants',
        summary:
          'Rack lourd noir mat à 5 étagères inclinées avec grilles de maintien et porte-étiquettes de prix, conçu pour quincailleries et centres auto.',
        dimensions: '95 × 48 × 195 cm',
        material: 'Structure renforcée noir mat + Panneaux filaires anti-chute + Fronton bilingue',
        highlights: [
          'Capacité massive jusqu’à 110 kg pour exposer plus de 150 aérosols classés par teinte',
          'Grilles frontales de sécurité et glissières de prix intégrées sur chaque niveau',
          'Fronton bilingue arabe/anglais résistant à l’environnement d’atelier et de quincaillerie',
        ],
      },
      ar: {
        title: 'حامل بخاخ طلاء معدني أسود بـ 5 رفوف مائلة للورش ومحلات الطلاء والسيارات',
        categoryLabel: 'السيارات، البخاخات والزيوت',
        summary:
          'رف عرض صناعي متين باللون الأسود المطفي مع 5 مستويات مائلة مزودة بشبك حماية وحوامل أسعار، مخصص لعرض تشكيلة واسعة من بخاخات الطلاء.',
        dimensions: '95 × 48 × 195 سم',
        material: 'هيكل مقوى أسود مطفي + حواجز شبكية واقية + تاج علوي ثنائي اللغة',
        highlights: [
          'قدرة تحمل عالية تصل إلى 110 كغ لاستيعاب أكثر من 150 عبوة سبري مرتبة حسب اللون',
          'رفوف مائلة مع شبك أمامي أمان وبطاقات أسعار وتصنيف لكل صف',
          'لافتة علوية ثنائية اللغة (عربي / إنجليزي) مصممة لبيئة محلات الخردوات والسيارات',
        ],
      },
      en: {
        title: 'Heavy-Duty 5-Tier Spray Paint Holder Rack for Auto & Hardware',
        categoryLabel: 'Auto, Sprays & Lubricants',
        summary:
          'Matte-black industrial 5-shelf angled rack equipped with protective wire fronts and price-tag rails, built for hardware and auto paint stores.',
        dimensions: '95 × 48 × 195 cm',
        material: 'Heavy-load matte black frame + Wire front guards + Bilingual header',
        highlights: [
          'Supports up to 110 kg to organize 150+ spray cans cleanly by color shade',
          'Angled shelves include protective wire retainers and dedicated price strips',
          'High-contrast bilingual header built for high-traffic hardware & auto stores',
        ],
      },
    },
  },
  {
    id: 'academy-3d-rocket-wall',
    brandLabel: '3D KIDS ACADEMY',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'custom-bottle',
    accentColor: '#0284C7',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0064_a3e3d64b.jpg',
    locales: {
      fr: {
        title: 'Décoration murale 3D en relief pour salle de formation et école',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage mural immersif avec éléments volumétriques découpés en 3D (fusée spatiale, nuages, soleil, livres géants et tableau encadré) pour écoles et centres de formation.',
        dimensions: 'Mur complet 420 × 260 cm',
        material: 'Forex 3D découpé CNC + Finition satinée + Éclairage plafond',
        highlights: [
          'Sculptures murales en relief 3D (fusée, nuages, chiffres et crayons géants)',
          'Intégration harmonieuse autour du tableau pédagogique et des spots LED',
          'Matériaux durables et lavables adaptés aux crèches, écoles et centres de formation',
        ],
      },
      ar: {
        title: 'ديكور جداري بارز ثلاثي الأبعاد (3D) لقاعات التدريب والمدارس',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تجهيز جداري متكامل بمجسمات 3D بارزة (صاروخ فضائي، غيوم، شمس، كتب وأقلام عملاقة) حول السبورة المدرسية لإلهام الأطفال والمتدربين.',
        dimensions: 'جدار كامل 420 × 260 سم',
        material: 'نحت وتفصيل CNC ثلاثي الأبعاد على الفوركس + تشطيب فاخر + تركيب ميداني',
        highlights: [
          'مجسمات بارزة ثلاثية الأبعاد تمنح القسم حيوية تعليمية وجاذبية بصرية عالية',
          'تنسيق احترافي مع إطار السبورة الخضراء وإضاءة السقف الكاشفة',
          'خامات آمنة وقابلة للتنظيف تدوم طويلاً داخل المدارس ومراكز التكوين',
        ],
      },
      en: {
        title: '3D Relief Classroom & Training Academy Feature Wall',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Immersive classroom mural combining sculpted 3D relief elements (space rocket, clouds, sun, stacked books, and pencils) around a framed chalkboard.',
        dimensions: 'Full wall 420 × 260 cm',
        material: 'CNC-sculpted 3D Forex reliefs + Satin finish + Precision wall mounting',
        highlights: [
          'Tactile 3D dimensional rocket, clouds, and giant stationery elements',
          'Clean framing around the classroom chalkboard and ceiling spotlights',
          'Washable, child-safe finishes engineered for schools and training hubs',
        ],
      },
    },
  },
  {
    id: 'aquarium-panoramic-mural',
    brandLabel: 'AQUARIUM MURAL',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#0369A1',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0068_6c54853c.jpg',
    locales: {
      fr: {
        title: 'Fresque murale panoramique sous-marine pour grand hall et espace d’accueil',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Impression et pose grand format sans raccord visible d’une fresque océanique recouvrant tout un mur principal d’établissement.',
        dimensions: 'Mur panoramique 680 × 300 cm',
        material: 'Vinyle mural haute définition + Lamination mate anti-reflet + Pose pro',
        highlights: [
          'Raccord millimétré des lés pour un rendu continu sur près de 7 mètres de large',
          'Couleurs profondes et nettes résistantes aux passages intensifs et au nettoyage',
          'Pose complète sur site par l’équipe technique WAIL DICO',
        ],
      },
      ar: {
        title: 'جدارية بانورامية ضخمة لعالم البحار في قاعات الاستقبال والفضاءات الكبرى',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'طباعة وتركيب لوحة جدارية متواصلة بمقاس ضخم تغطي كامل الواجهة الداخلية للقاعة بألوان زاهية وتفاصيل بحرية دقيقة.',
        dimensions: 'جدار بانورامي 680 × 300 سم',
        material: 'فينيل جداري عالي الدقة + تغليف واقٍ مقاوم للخدش + تركيب احترافي',
        highlights: [
          'محاذاة دقيقة بين الأشرطة الجدارية بدون فواصل ظاهرة على امتداد قرابة 7 أمتار',
          'طباعة بألوان حية مقاومة للبهتان وسهلة التنظيف في الأماكن كثيفة الحركة',
          'تنفيذ وتركيب ميداني متكامل من فريق WAIL DICO',
        ],
      },
      en: {
        title: 'Panoramic Underwater Hall Wall Mural Installation',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Seamless wide-format printed ocean wall wrap installed across an entire commercial or educational hall wall.',
        dimensions: 'Panoramic wall 680 × 300 cm',
        material: 'HD wall vinyl + Matte anti-glare lamination + On-site installation',
        highlights: [
          'Millimeter-aligned panel seams across nearly 7 meters of continuous wall space',
          'Rich waterproof colors built to withstand high-traffic public halls',
          'Full on-site measurement, printing, and installation by WAIL DICO',
        ],
      },
    },
  },
  {
    id: 'welcome-world-map-mural',
    brandLabel: 'WELCOME ACADEMY',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#2563EB',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0072_899ed64d.jpg',
    locales: {
      fr: {
        title: 'Habillage mural « Welcome » carte du monde pour école de langues et bureaux',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Fresque murale pédagogique affichant la carte du monde et les salutations multilingues au-dessus de boiseries murales d’accueil.',
        dimensions: 'Mur d’accueil 400 × 210 cm',
        material: 'Vinyle architectural mat + Impression vectorielle HD + Finition boiserie',
        highlights: [
          'Impression nette des continents et bulles multilingues sans reflet sous néons',
          'Découpe ajustée avec précision juste au-dessus des moulures murales existantes',
          'Valorise immédiatement la réception des instituts, écoles de langues et agences',
        ],
      },
      ar: {
        title: 'جدارية «Welcome» خريطة العالم متعددة اللغات لمعاهد التدريب واللغات',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تصميم وتلصيق لوحة جدارية احترافية لخريطة العالم مع عبارات الترحيب بمختلف اللغات لقاعات الاستقبال ومراكز التدريب.',
        dimensions: 'جدار استقبال 400 × 210 سم',
        material: 'فينيل مطفي مضاد للانعكاس + طباعة فيكتور عالية الدقة + تركيب فوق الجبس',
        highlights: [
          'وضوح فائق للخريطة والنصوص متعددة اللغات دون لمعان مزعج تحت الإضاءة',
          'قص ومحاذاة دقيقة فوق الإطارات الجدارية البيضاء بشكل نظيف ومتكامل',
          'يمنح معاهد اللغات ومراكز التكوين والوكالات واجهة استقبال عالمية راقية',
        ],
      },
      en: {
        title: 'Multilingual “Welcome” World Map Training Center Mural',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Crisp architectural wall wrap showcasing a color-coded world map and multilingual greetings fitted cleanly above wainscoting in a training center.',
        dimensions: 'Reception wall 400 × 210 cm',
        material: 'Anti-glare matte wall vinyl + Vector HD print + Trim-aligned fit',
        highlights: [
          'Razor-sharp typography and world map graphics free from ceiling-light glare',
          'Precision edge alignment directly above existing decorative wall paneling',
          'Ideal reception branding for language academies, training institutes, and offices',
        ],
      },
    },
  },
  {
    id: 'empire-voyage-storefront',
    brandLabel: 'EMPIRE VOYAGE',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#0284C7',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0069_3de831f5.jpg',
    locales: {
      fr: {
        title: 'Habillage intégral de façade et vitrine d’agence — Empire Voyage',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage complet de façade commerciale couvrant piliers, bandeau supérieur, portes vitrées et coordonnées téléphoniques pour une agence de voyages.',
        dimensions: 'Façade complète 430 × 320 cm',
        material: 'Vinyle extérieur anti-UV + Micro-perforé sur vitrine + Pose sur piliers',
        highlights: [
          'Continuité graphique totale entre les deux piliers latéraux, le linteau et la vitrine',
          'Intégration nette des logos compagnies aériennes, monuments mondiaux et numéros',
          'Film traité anti-UV résistant aux intempéries et au nettoyage quotidien',
        ],
      },
      ar: {
        title: 'تغليف وتصميم واجهة وكالة سياحية كاملة (الأعمدة والزجاج) — Empire Voyage',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تجهيز وتغليف شامل لواجهة وكالة أسفار يشمل الأعمدة الجانبية، اللوحة العلوية، والأبواب الزجاجية مع أرقام الهاتف والشعارات الدولية.',
        dimensions: 'واجهة كاملة 430 × 320 سم',
        material: 'فينيل خارجي مقاوم للشمس UV + ملصق زجاجي متكامل + تغليف أعمدة',
        highlights: [
          'تناسق بصري كامل يربط الأعمدة الجانبية والجزء العلوي وباب الزجاج في لوحة واحدة',
          'طباعة دقيقة لشعارات شركات الطيران والمعالم السياحية وأرقام الحجز بوضوح',
          'خامات خارجية مقاومة لأشعة الشمس والغسيل تحفظ ثبات الألوان لسنوات',
        ],
      },
      en: {
        title: 'Empire Voyage Full Travel Agency Storefront & Pillar Wrap',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Complete commercial storefront branding covering side pillars, overhead fascia, and double glass entrance doors for a travel agency.',
        dimensions: 'Full facade 430 × 320 cm',
        material: 'UV-resistant outdoor vinyl + Glass door graphics + Pillar wrap',
        highlights: [
          'Continuous panoramic artwork spanning pillars, header transom, and glass doors',
          'Crisp placement of partner airline badges, landmarks, and booking numbers',
          'Weatherproof outdoor lamination resists fading and daily shopfront cleaning',
        ],
      },
    },
  },
  {
    id: 'visitor-economy-mural',
    brandLabel: 'VISITOR ECONOMY',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#0F766E',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0062_63a7b832.jpg',
    locales: {
      fr: {
        title: 'Fresque murale monuments du monde pour centre de formation & tourisme',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage mural intégral mêlant Tour Eiffel, Big Ben, Pyramides et Chutes du Niagara autour d’un médaillon central pour espace d’accueil professionnel.',
        dimensions: 'Mur intégral 380 × 255 cm',
        material: 'Vinyle mural pleine hauteur + Impression HD + Pose sans bulles',
        highlights: [
          'Couverture totale du sol au plafond transformant un couloir neutre en vitrine de marque',
          'Composition circulaire claire valorisant le message central de bienvenue',
          'Résistant aux frottements près des équipements de bureau',
        ],
      },
      ar: {
        title: 'لوحة جدارية لمعالم العالم لمراكز التدريب السياحي والوكالات',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تغطية كاملة للجدار برسومات معالم العالم الشهيرة وعبارة ترحيبية مركزية تمنح المكتب أو قاعة التدريب طابعاً سياحياً ومهنياً متميزاً.',
        dimensions: 'جدار كامل 380 × 255 سم',
        material: 'فينيل جداري كامل الارتفاع + طباعة HD + تركيب احترافي بدون فقاعات',
        highlights: [
          'تغليف من الأرضية حتى السقف يحوّل المكاتب والممرات العادية إلى واجهة جذابة',
          'تصميم بصري متوازن يبرز رسالة الاستقبال بوضوح وسط المعالم العالمية',
          'طبقة حماية متينة تتحمل الاستخدام اليومي بالقرب من أجهزة المكتب',
        ],
      },
      en: {
        title: 'Global Landmarks “Visitor Economy” Institute Wall Wrap',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Floor-to-ceiling architectural mural showcasing global landmarks around a centered welcome emblem for tourism offices and training institutes.',
        dimensions: 'Full wall 380 × 255 cm',
        material: 'Floor-to-ceiling wall vinyl + HD print + Bubble-free installation',
        highlights: [
          'Seamless floor-to-ceiling wall transformation elevates office interiors instantly',
          'Balanced circular layout frames the central welcome badge cleanly',
          'Scuff-resistant matte finish holds up in busy office corridors',
        ],
      },
    },
  },
  {
    id: 'stairwell-landmarks-mural',
    brandLabel: 'STAIRWELL MURAL',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'stepped',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0070_907d99b4.jpg',
    locales: {
      fr: {
        title: 'Habillage mural complet de cage d’escalier pour institut & école',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Fresque architecturale sur mesure suivant la pente d’un escalier multi-niveaux avec monuments emblématiques et ciel peint.',
        dimensions: 'Cage d’escalier sur mesure (multi-pans)',
        material: 'Relevé laser sur site + Vinyle conformable + Découpe sur main courante',
        highlights: [
          'Découpe complexe épousant exactement les marches, poutres et rampes d’escalier',
          'Effet de perspective ascendante accompagnant les étudiants vers les salles de cours',
          'Raccord parfait entre les différents pans de murs en angle',
        ],
      },
      ar: {
        title: 'تغليف جداري متكامل لسلالم المعاهد والمدارس برسومات معمارية',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تنفيذ جدارية مخصصة تمتد على طول جدران السلالم بين الطوابق بتصاميم معمارية عالمية تمنح المركز التعليمي هوية بصرية مدهشة.',
        dimensions: 'تصميم حسب مقاس الدرج (متعدد الجدران)',
        material: 'رفع مقاسات دقيق في الموقع + فينيل مرن + قص متطابق مع الدرابزين',
        highlights: [
          'قص وتنفيذ دقيق يساير انحدار الدرج والزوايا والجسور السقفية بانسيابية تامة',
          'منظور بصري صاعد يرافق الطلبة والزوار بين طوابق مركز التدريب أو المدرسة',
          'توصيل محترف بين الزوايا القائمة بدون تشويه للصورة',
        ],
      },
      en: {
        title: 'Custom Multi-Wall Stairwell Mural for Training Institutes',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Architectural wall wrap tailored to follow multi-level stairwell geometry, beams, and handrails inside a training academy.',
        dimensions: 'Custom stairwell multi-wall span',
        material: 'On-site laser measurement + Conformable vinyl + Stair-angled cut',
        highlights: [
          'Precision installation trimmed cleanly around stair treads, rails, and ceiling beams',
          'Upward architectural skyline guides students and visitors between floors',
          'Seamless corner wrapping across angled stairwell walls',
        ],
      },
    },
  },
  {
    id: 'nursery-pencil-rocket-mural',
    brandLabel: 'KIDS ACADEMY',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#EAB308',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0058_b6b9201a.jpg',
    locales: {
      fr: {
        title: 'Fresque murale éducative colorée pour crèche, école et espace enfants',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage mural ludique pleine largeur illustrant un crayon géant, des livres et des personnages joyeux pour stimuler l’éveil en classe.',
        dimensions: 'Mur complet 450 × 250 cm',
        material: 'Vinyle écologique sans odeur + Lamination lessivable + Pose sur site',
        highlights: [
          'Encres certifiées sans odeur adaptées aux salles de classe et crèches',
          'Surface lessivable résistante aux traces de mains et feutres légers',
          'Pose soignée derrière les rambardes et caméras existantes',
        ],
      },
      ar: {
        title: 'جدارية تعليمية ملونة لروضات الأطفال والمدارس التحضيرية',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'لوحة جدارية واسعة برسومات طفولية مبهجة (قلم عملاق، كتب وأطفال) مصممة لخلق بيئة تعليمية محفزة داخل الأقسام والروضات.',
        dimensions: 'جدار كامل 450 × 250 سم',
        material: 'فينيل آمن بدون رائحة + طبقة قابلة للغسل + تركيب ميداني متقن',
        highlights: [
          'طباعة بأحبار آمنة تماماً وملائمة لبيئة الأطفال والمدارس',
          'سطح محمي قابل للمسح والتنظيف الدوري دون تأثر الألوان',
          'تفريغ وتركيب نظيف حول الدرابزين وتجهيزات القسم',
        ],
      },
      en: {
        title: 'Playful Preschool & Kids Academy Full-Wall Educational Mural',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Full-width illustrated classroom mural featuring a giant pencil tower, books, and cheerful characters designed for nurseries and schools.',
        dimensions: 'Full wall 450 × 250 cm',
        material: 'Odor-free eco vinyl + Wipe-clean lamination + Precision trim',
        highlights: [
          'Printed with child-safe odorless inks ideal for classrooms and nurseries',
          'Washable protective film handles everyday classroom activity easily',
          'Cleanly trimmed around handrails and wall-mounted hardware',
        ],
      },
    },
  },
  {
    id: 'kids-eating-room-mural',
    brandLabel: 'KIDS DINING',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#2563EB',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0060_6e61d75e.jpg',
    locales: {
      fr: {
        title: 'Habillage mural « Kids Eating Room » pour réfectoire de crèche et école',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Décoration murale sur mesure dédiée aux salles de restauration scolaires, alliant mascottes alimentaires ludiques et signalétique centrale claire.',
        dimensions: 'Mur réfectoire 410 × 245 cm',
        material: 'Vinyle hygiénique lavable + Impression HD brillante + Pose rapide',
        highlights: [
          'Revêtement lavable supportant le nettoyage fréquent des salles de repas',
          'Graphisme joyeux bleu ciel mettant les enfants en appétit',
          'Signalétique « Kids Eating Room » intégrée directement dans le décor mural',
        ],
      },
      ar: {
        title: 'تزيين جدار مطعم الأطفال (Kids Eating Room) للمدارس والروضات',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تغليف جداري مخصص لقاعات الإطعام في الروضات والمدارس برسومات طعام كرتونية محببة للأطفال ولافتة تسمية واضحة في المنتصف.',
        dimensions: 'جدار قاعة الإطعام 410 × 245 سم',
        material: 'فينيل صحي قابل للغسل + طباعة عالية الوضوح + تركيب سريع',
        highlights: [
          'سطح عازل وسهل التطهير والغسل يناسب قاعات الأكل المدرسية',
          'ألوان زاهية ورسومات مرحة تجعل وقت الوجبات تجربة محببة للأطفال',
          'دمج لافتة الغرفة مباشرة في التصميم الجداري دون لوحات إضافية',
        ],
      },
      en: {
        title: '“Kids Eating Room” School Cafeteria & Nursery Wall Wrap',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Bespoke cafeteria wall mural tailored for preschools and kids academies, pairing cheerful food mascots with clean central room signage.',
        dimensions: 'Dining wall 410 × 245 cm',
        material: 'Hygienic wipe-clean vinyl + Vivid HD print + Rapid installation',
        highlights: [
          'Sanitizable protective surface engineered for daily dining room cleanup',
          'Bright sky-blue illustrations create an inviting mealtime space for kids',
          'Integrates room signage cleanly right into the custom wall artwork',
        ],
      },
    },
  },
  {
    id: 'london-studio-mural',
    brandLabel: 'I LOVE LONDON',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0059_5314c71a.jpg',
    locales: {
      fr: {
        title: 'Fresque murale minimaliste « I Love London » pour institut et showroom',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage mural graphique blanc et rouge mettant en scène Big Ben, London Eye et cabine téléphonique derrière rayonnage bois et spots orientables.',
        dimensions: 'Mur d’accent 300 × 270 cm',
        material: 'Vinyle mat architectural + Couleurs contrastées + Pose sur mesure',
        highlights: [
          'Esthétique moderne épurée idéale pour écoles de langues, agences et boutiques',
          'Contraste net rouge/or/noir sous éclairage directionnel sur rail',
          'Découpe ajustée du sol à la corniche pour un rendu papier peint architectural',
        ],
      },
      ar: {
        title: 'جدارية حديثة «I Love London» لمعاهد اللغات والمحلات العصرية',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تصميم جداري أنيق باللون الأبيض والأحمر يبرز معالم لندن بأسلوب عصري متناسق مع الأرفف الخشبية والإضاءة الموجهة.',
        dimensions: 'جدار ديكور 300 × 270 سم',
        material: 'فينيل مطفي معماري + ألوان عالية التباين + تفصيل حسب المقاس',
        highlights: [
          'تصميم عصري نظيف يناسب مدارس تعليم اللغات، الوكالات وصالات العرض',
          'تباين لوني أنيق يظهر بوضوح تحت أضواء السقف الموجهة (Track Lights)',
          'تركيب متقن من الأرض إلى السقف يمنح الغرفة لمسة ديكور أوروبية راقية',
        ],
      },
      en: {
        title: '“I Love London” Minimalist Feature Wall for Academies & Studios',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Clean architectural accent wall mural depicting Big Ben, the London Eye, and a red phone box styled for language centers and modern studios.',
        dimensions: 'Accent wall 300 × 270 cm',
        material: 'Matte architectural vinyl + High-contrast print + Custom fit',
        highlights: [
          'Minimalist graphic style tailored for language schools, agencies, and showrooms',
          'Matte finish eliminates glare directly beneath track spotlights',
          'Custom-trimmed edge-to-edge coverage creates a seamless built-in look',
        ],
      },
    },
  },
  {
    id: 'salon-miss-kh-fascia',
    brandLabel: 'SALON MISS K&H',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#DB2777',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0067_955ec281.jpg',
    locales: {
      fr: {
        title: 'Façade et enseigne Alucobond rose fuchsia — Salon Miss K&H',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage complet de façade pour salon de coiffure et esthétique avec panneau Alucobond fuchsia, spots LED encastrés et pictogrammes de services.',
        dimensions: 'Façade 420 × 95 cm',
        material: 'Alucobond extérieur + Lettrage découpé + Spots LED encastrés',
        highlights: [
          'Panneau Alucobond rose fuchsia haute brillance résistant aux UV extérieurs',
          'Soins, maquillage, onglerie et coordonnées WhatsApp/TikTok intégrés en façade',
          'Sous-face équipée de 4 spots LED encastrés éclairant la vitrine de nuit',
        ],
      },
      ar: {
        title: 'واجهة ولافتة محل تجميل Salon Miss K&H بألومنيوم ألوكوبوند وإضاءة سبوت',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تصميم وتغليف واجهة صالون تجميل بألواح ألوكوبوند باللون الوردي الجذاب مع أيقونات الخدمات، أرقام التواصل وإضاءة سبوت مدمجة.',
        dimensions: 'واجهة 420 × 95 سم',
        material: 'ألوكوبوند خارجي مقاوم للشمس + طباعة وقص حروف + إضاءة LED سفلية',
        highlights: [
          'لوح ألوكوبوند بلون وردي زاهي مقاوم لأشعة الشمس والأمطار',
          'توزيع أنيق لأيقونات التجميل ورقم الهاتف وحسابات التواصل الاجتماعي',
          'سقف سفلي مزود بأضواء سبوت لإبراز المدخل الزجاجي ليلاً ونهاراً',
        ],
      },
      en: {
        title: 'Salon Miss K&H Magenta Alucobond Shopfront Fascia',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Custom exterior beauty salon fascia crafted in vibrant magenta Alucobond with service icons, social handles, and recessed soffit spotlights.',
        dimensions: 'Fascia 420 × 95 cm',
        material: 'Exterior Alucobond cladding + Die-cut graphics + Recessed LED spots',
        highlights: [
          'UV-resistant high-gloss magenta Alucobond panel built for outdoor durability',
          'Integrates beauty service icons, phone line, and social handles cleanly',
          'Recessed downlights illuminate the glass storefront entrance after dark',
        ],
      },
    },
  },
  {
    id: 'salon-miss-kh-frosted-glass',
    brandLabel: 'VITRINE MISS K&H',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'custom-bottle',
    accentColor: '#BE185D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0071_69d693c2.jpg',
    locales: {
      fr: {
        title: 'Habillage vitrine en film dépoli sablé et découpe silhouette — Salon Miss K&H',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Pose de film adhésif dépoli assurant l’intimité intérieure du salon avec découpe centrale bicolore élégante sur les doubles portes vitrées.',
        dimensions: 'Vitrine vitrée 380 × 240 cm',
        material: 'Vinyle dépoli sablé + Découpe plotter précision + Pose sur verre trempé',
        highlights: [
          'Film sablé laissant passer la lumière naturelle tout en préservant l’intimité',
          'Découpe centrale bicolore centrée exactement sur les poignées des deux portes',
          'Finition propre et sans bulles sur verre trempé et encadrements aluminium',
        ],
      },
      ar: {
        title: 'تغليف زجاج محل تجميل بفينيل مثلج (Givré) وقصة فنية — Salon Miss K&H',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تجهيز الواجهة الزجاجية بفينيل رملي مثلج يضمن الخصوصية داخل الصالون مع قصة فنية مركزية أنيقة على الباب المزدوج.',
        dimensions: 'واجهة زجاجية 380 × 240 سم',
        material: 'فينيل مثلج عازل للرؤية + قص كاتر بلوتر دقيق + تركيب على الزجاج',
        highlights: [
          'يسمح بدخول الإضاءة الطبيعية مع توفير خصوصية كاملة داخل الصالون',
          'قصة مركزية متناظرة بدقة حول مقابض الأبواب الزجاجية المزدوجة',
          'تثبيت نظيف خالٍ من الفقاعات ومقاوم للرطوبة والغسيل',
        ],
      },
      en: {
        title: 'Salon Miss K&H Frosted Sandblast Glass Door & Window Wrap',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Privacy frosted window film paired with a precision die-cut beauty silhouette centered across double frameless tempered glass doors.',
        dimensions: 'Glass frontage 380 × 240 cm',
        material: 'Sandblast frosted film + Precision plotter cut + Tempered glass fit',
        highlights: [
          'Diffuses natural daylight while maintaining full interior salon privacy',
          'Centered two-tone vinyl cutout aligned cleanly around twin door handles',
          'Bubble-free application durable against glass cleaners and daily traffic',
        ],
      },
    },
  },
  {
    id: 'cafe-adamin-3d-led',
    brandLabel: 'CAFE ADAMIN',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#EA580C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0055_70dfeb7d.jpg',
    locales: {
      fr: {
        title: 'Enseigne lumineuse 3D LED lettres boîtiers — Café Adamin',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Enseigne nocturne en caissons 3D LED avec lettres boîtiers dégradées orange/or et médaillon central circulaire bleu rétroéclairé sur fond noir mat.',
        dimensions: 'Enseigne 450 × 100 cm',
        material: 'Fond Alucobond noir mat + Lettres boîtiers 3D Plexi + Modules LED',
        highlights: [
          'Lettres 3D en relief à forte luminosité nocturne avec dégradé chaud ambre-rouge',
          'Médaillon rond lumineux bleu intégrant le logo tasse et arche orientale',
          'Alimentation étanche IP67 et éclairage LED longue durée à faible consommation',
        ],
      },
      ar: {
        title: 'لافتة مضيئة بارزة 3D LED بحروف مجسمة — CAFE ADAMIN',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'واجهة ليلية احترافية بخلفية ألوكوبوند سوداء مطفية وحروف 3D مضيئة بتدرج برتقالي ذهبي مع شعار دائري مضيء باللون الأزرق.',
        dimensions: 'لافتة 450 × 100 سم',
        material: 'ألوكوبوند أسود مطفي + حروف بارزة 3D بليكسي + إضاءة LED داخلية',
        highlights: [
          'حروف مجسمة بارزة تمنح إضاءة ليلية قوية وجذابة من مسافة بعيدة',
          'دائرة مضيئة متباينة في الوسط تبرز رمز القهوة والزخرفة بوضوح تام',
          'تجهيز كهربائي محمي للخارج IP67 موفر للطاقة وعالي التحمل',
        ],
      },
      en: {
        title: 'Café Adamin 3D LED-Illuminated Channel Letter Storefront Sign',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'High-impact nighttime storefront sign featuring warm amber-red 3D backlit channel letters and a glowing cyan emblem over matte-black Alucobond.',
        dimensions: 'Signage 450 × 100 cm',
        material: 'Matte-black Alucobond + 3D acrylic channel letters + Waterproof LEDs',
        highlights: [
          'Deep 3D extruded channel letters deliver vivid nighttime street visibility',
          'Illuminated cyan circular logo creates striking chromatic contrast',
          'IP67 weather-sealed LED modules ensure long-lasting low-power brilliance',
        ],
      },
    },
  },
  {
    id: 'general-optical-3d-sign',
    brandLabel: 'GÉNÉRAL OPTICAL',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'custom-bottle',
    accentColor: '#CA8A04',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0050_40e79cad.jpg',
    locales: {
      fr: {
        title: 'Enseigne 3D dorée lumineuse et logo lunettes — Général Optical',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Façade grise satinée habillée de lettres 3D dorées avec logo « GO » façon monture de lunettes rétroéclairée et sous-titre métier découpé.',
        dimensions: 'Façade 350 × 125 cm',
        material: 'Alucobond gris anthracite + Lettres 3D miroir or + Modules LED',
        highlights: [
          'Logo « GO » sculpté en forme de lunettes attirant immédiatement le regard',
          'Lettres boîtiers finition or chaleureuse sur panneau gris architectural',
          'Inscription « Opticien · Optométriste · Contactologue » haute lisibilité',
        ],
      },
      ar: {
        title: 'واجهة محل نظارات بحروف ذهبية 3D وشعار بارز — Général Optical',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تجهيز واجهة عيادة ومحلات نظارات بلوح ألوكوبوند رمادي أنيق مع حروف 3D ذهبية مضيئة وشعار علوي مبتكر على شكل نظارة GO.',
        dimensions: 'واجهة 350 × 125 سم',
        material: 'ألوكوبوند رمادي + حروف بارزة 3D بواجهة ذهبية + إضاءة LED',
        highlights: [
          'شعار GO مقصوص ومجسم على هيئة نظارة يحدد نشاط المحل من النظرة الأولى',
          'حروف 3D بتشطيب ذهبي فخم يتباين بوضوح مع الخلفية الرمادية المطفية',
          'إدراج التخصصات المهنية بدقة ووضوح أسفل الشعار الرئيسي',
        ],
      },
      en: {
        title: 'Général Optical 3D Gold-Lit Eyewear Storefront Sign',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Sleek satin-grey optical storefront topped with gold-finished 3D illuminated letters and a sculpted “GO” eyeglasses emblem.',
        dimensions: 'Facade 350 × 125 cm',
        material: 'Satin grey Alucobond + Gold 3D channel letters + LED backlighting',
        highlights: [
          'Custom-sculpted “GO” eyeglasses emblem signals the optical shop instantly',
          'Warm gold 3D lettering stands out sharply against architectural grey cladding',
          'Crisp sub-header typography lists optician and optometry specialties',
        ],
      },
    },
  },
  {
    id: 'king-butcher-alucobond',
    brandLabel: 'KING BUTCHER',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0057_9c5f8d86.jpg',
    locales: {
      fr: {
        title: 'Habillage complet Alucobond rouge et lettres 3D — King Butcher',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Revêtement intégral en panneaux Alucobond rouge brillant couvrant bandeau, plafond d’auvent et piliers latéraux, avec lettres 3D blanches et médaillon central.',
        dimensions: 'Façade complète 520 × 340 cm',
        material: 'Alucobond rouge & joints blancs + Lettres 3D LED + Caisson circulaire',
        highlights: [
          'Habillage complet façade + retours latéraux + sous-face de marquise sans défaut',
          'Lignes architecturales blanches contrastant sur les colonnes Alucobond rouges',
          'Lettrage 3D blanc haute visibilité encadrant le blason circulaire King Butcher',
        ],
      },
      ar: {
        title: 'تغليف واجهة ألوكوبوند حمراء بالكامل مع حروف 3D — King Butcher',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'إنجاز واجهة تجارية متكاملة بألواح الألوكوبوند الأحمر اللامع تغطي الواجهة العلوية والسقف والأعمدة مع حروف 3D بيضاء مضيئة.',
        dimensions: 'واجهة شاملة 520 × 340 سم',
        material: 'ألوكوبوند أحمر مع فواصل بيضاء + حروف 3D LED + شعار دائري مضيء',
        highlights: [
          'تغليف هندسي كامل للواجهة والأعمدة والسقف الخارجي بمقاسات مضبوطة',
          'خطوط ديكورية بيضاء على الجوانب تضفي طابعاً عصرياً لافتاً في الشارع',
          'حروف 3D بيضاء ناصعة وشعار دائري مركزي بارز يرسخ هوية العلامة',
        ],
      },
      en: {
        title: 'King Butcher Full Red Alucobond Cladding & 3D Signage',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Complete exterior storefront transformation wrapped in glossy crimson Alucobond across fascia, soffit, and side columns with white 3D illuminated letters.',
        dimensions: 'Full facade 520 × 340 cm',
        material: 'Crimson Alucobond cladding + White trim lines + 3D LED letters',
        highlights: [
          'Full structural wrap covering overhead canopy, soffit, and flanking pillars',
          'Crisp white architectural reveal stripes accentuate the red cladding',
          'High-contrast 3D white letters frame the central circular emblem',
        ],
      },
    },
  },
  {
    id: 'chouay-el-baraka-sign',
    brandLabel: 'شواي البركة',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0056_0c6502b8.jpg',
    locales: {
      fr: {
        title: 'Enseigne lumineuse arabe rétroéclairée grand format — Chouay El Baraka',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Grande enseigne de rôtisserie sur fond noir mat et bandeau supérieur rouge, avec calligraphie arabe lumineuse, médaillon central éclairé et visuels grillades.',
        dimensions: 'Enseigne 600 × 115 cm',
        material: 'Alucobond noir & rouge + Découpe rétroéclairée + Impression UV latérale',
        highlights: [
          'Calligraphie arabe lumineuse grand format lisible de loin en plein jour et de nuit',
          'Médaillon circulaire rétroéclairé mettant en scène le poulet rôti et grillades',
          'Bandeaux latéraux imprimés HD protégeant l’ensemble sous toiture rouge',
        ],
      },
      ar: {
        title: 'واجهة مطعم ومشويات مضيئة بالخط العربي البارز — شواي البركة',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'لافتة عريضة بطول 6 أمتار لمطعم ومشويات بخلفية سوداء مطفية وإطار علوي أحمر، تضم خطاً عربياً مضيئاً وشعاراً دائرياً متوهجاً في الوسط.',
        dimensions: 'لافتة 600 × 115 سم',
        material: 'ألوكوبوند أسود وأحمر + تفريغ وإضاءة LED خلفية + صور UV جانبية',
        highlights: [
          'حروف عربية مضيئة بحجم كبير تضمن وضوح اسم المحل نهاراً وليلاً',
          'شعار دائري مضيء في المنتصف مع صور شهية للمشويات والمشروبات على الجانبين',
          'تشطيب خارجي متين مقاوم للحرارة والرطوبة والغبار',
        ],
      },
      en: {
        title: 'Chouay El Baraka 6-Meter Backlit Arabic Grill Storefront Sign',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Wide 6-meter rotisserie & grill storefront sign featuring glowing Arabic cutout lettering, an illuminated central medallion, and UV-printed side food panels.',
        dimensions: 'Signage 600 × 115 cm',
        material: 'Black & red Alucobond + LED backlit cutouts + UV food graphics',
        highlights: [
          'Bold backlit Arabic calligraphy readable from down the street day and night',
          'Glowing circular centerpiece showcases signature grill dishes',
          'Side-panel food photography and crimson canopy trim frame the double entrance',
        ],
      },
    },
  },
  {
    id: 'fastfix-phone-facade',
    brandLabel: 'FASTFIX PHONE',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0053_0aa3d84f.jpg',
    locales: {
      fr: {
        title: 'Façade complète Alucobond gris anthracite et lettres 3D — FastFix Phone',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Rénovation complète d’une boutique de téléphonie en Alucobond anthracite avec logo carré 3D, lettrage rouge en relief, pictogrammes marques et vitrine habillée.',
        dimensions: 'Façade 620 × 330 cm',
        material: 'Alucobond anthracite brossé + Lettres 3D rouges + Habillage vitrine',
        highlights: [
          'Couverture totale des murs extérieurs et poteaux en Alucobond gris moderne',
          'Lettrage 3D rouge « FASTFIX PHONE » et icônes de marques découpées en relief',
          'Intégration du store banne rayé, gazon d’accueil et stickers vitrine coordonnés',
        ],
      },
      ar: {
        title: 'واجهة متجر هواتف ألوكوبوند رمادي وحروف 3D بارزة — FASTFIX PHONE',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تغليف شامل لواجهة محل بيع وتصليح الهواتف بألواح ألوكوبوند رمادية عصرية مع شعار مربع مجسم وحروف حمراء 3D وملصقات العلامات التجارية.',
        dimensions: 'واجهة 620 × 330 سم',
        material: 'ألوكوبوند رمادي أنثراسيت + حروف 3D حمراء + تغليف أعمدة وزجاج',
        highlights: [
          'تغليف كامل للأعمدة والواجهة العلوية يعطي المحل مظهراً حديثاً واحترافياً',
          'حروف بارزة 3D باللون الأحمر مع قص شعارات Apple و Samsung و Xiaomi بدقة',
          'تناسق متكامل مع الواجهة الزجاجية ومظلة المحل واللافتات الجانبية',
        ],
      },
      en: {
        title: 'FastFix Phone Charcoal Alucobond & 3D Red Letter Shopfront',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Complete mobile repair & retail shopfront clad in brushed anthracite Alucobond with raised red 3D lettering, brand emblems, and coordinated window decals.',
        dimensions: 'Facade 620 × 330 cm',
        material: 'Charcoal Alucobond + Red 3D raised letters + Window vinyl graphics',
        highlights: [
          'Full column-to-fascia modern architectural cladding in satin anthracite',
          'Extruded 3D FastFix logo block and raised smartphone brand badges',
          'Coordinated glass window branding and vertical red contact pillar',
        ],
      },
    },
  },
  {
    id: 'amy-parapharmacie-night',
    brandLabel: 'AMY PARAPHARMACIE',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#1D4ED8',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0052_ea2ae404.jpg',
    locales: {
      fr: {
        title: 'Enseigne lumineuse nocturne et piliers bleus — Amy Parapharmacie',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Façade sobre et élégante pour parapharmacie associant Alucobond gris foncé, retours bleu cobalt et lettres 3D blanches rétroéclairées par LED.',
        dimensions: 'Façade 390 × 290 cm',
        material: 'Alucobond anthracite & bleu + Lettres 3D blanches LED + Spots extérieurs',
        highlights: [
          'Rendu nocturne net et professionnel avec rétroéclairage blanc homogène',
          'Logo feuille verte et lettrage « AMY PARAPHARMACIE » découpés avec précision',
          'Piliers latéraux bleu médical coordonnés et 3 spots LED sous bandeau',
        ],
      },
      ar: {
        title: 'واجهة شبه صيدلية بإضاءة ليلية بيضاء وأعمدة زرقاء — AMY PARAPHARMACIE',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'واجهة ليلية أنيقة لشبه صيدلية تجمع بين الألوكوبوند الداكن والأعمدة الجانبية باللون الأزرق الطبي مع حروف 3D بيضاء مضيئة.',
        dimensions: 'واجهة 390 × 290 سم',
        material: 'ألوكوبوند داكن وأزرق + حروف 3D بيضاء LED + أضواء سبوت خارجية',
        highlights: [
          'إضاءة ليلية متجانسة تبرز اسم شبه الصيدلية وشعار الورقة بوضوح راقٍ',
          'أعمدة جانبية مغلفة باللون الأزرق الطبي تعزز الهوية الصحية للمحل',
          'تزويد الواجهة بـ 3 أضواء سبوت سفلية لإنارة المدخل بعد الغروب',
        ],
      },
      en: {
        title: 'Amy Parapharmacie Night-Lit 3D White Sign & Medical Blue Pillars',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Clean nighttime parapharmacy shopfront pairing dark charcoal fascia and medical-blue Alucobond pillars with glowing white 3D letters.',
        dimensions: 'Facade 390 × 290 cm',
        material: 'Dark grey & blue Alucobond + Backlit white 3D letters + LED spots',
        highlights: [
          'Crisp halo-free white LED illumination projects clinical trust at night',
          'Precision-cut leaf emblem paired with clean modern parapharmacy typography',
          'Blue-clad side pillars and triple downlights frame the security shutter',
        ],
      },
    },
  },
  {
    id: 'empire-restaurant-glass',
    brandLabel: 'SALLE FAMILIALE',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0065_78091982.jpg',
    locales: {
      fr: {
        title: 'Habillage vitrine restaurant « Salle Familiale / قاعة عائلية »',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage grand format sur doubles portes vitrées pour restaurant familial avec photos culinaires haute définition et calligraphie bilingue arabe/français.',
        dimensions: 'Vitrine double porte 240 × 230 cm',
        material: 'Vinyle micro-perforé / plein HD + Lamination anti-UV + Pose sur verre',
        highlights: [
          'Mise en appétit immédiate grâce aux visuels haute définition de plats et grillades',
          'Calligraphie arabe claire « قاعة عائلية مرحبا بكم » parfaitement alignée sur les deux battants',
          'Protection UV conservant l’éclat du rouge et des photos sous exposition solaire',
        ],
      },
      ar: {
        title: 'تغليف واجهة زجاج مطعم وقاعة عائلية بملصق غذائي متكامل',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تجهيز أبواب الزجاج المزدوجة لمطعم وقاعة عائلية بطباعة صور أطباق شهية عالية الدقة وعبارة «قاعة عائلية مرحباً بكم» مع الترجمة الفرنسية.',
        dimensions: 'واجهة زجاجية 240 × 230 سم',
        material: 'فينيل مطبوع HD + تغليف واقٍ من الشمس UV + محاذاة دقيقة على الأبواب',
        highlights: [
          'صور أطباق ومشويات عالية الوضوح تجذب الزبائن والعائلات عند المرور أمام المطعم',
          'تقسيم متناظر للخط العربي والفرنسي على ضلفتي الباب الزجاجي بدقة عالية',
          'طباعة محمية لا يتغير لونها مع أشعة الشمس والتنظيف المستمر',
        ],
      },
      en: {
        title: 'Family Restaurant Dining Hall Full Glass Door Wrap',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Full-coverage printed glass entrance wrap for a family restaurant hall featuring appetizing dish photography and bilingual Arabic/French signage.',
        dimensions: 'Double glass doors 240 × 230 cm',
        material: 'HD full-window vinyl + UV protective laminate + Split-door trim',
        highlights: [
          'High-resolution food photography attracts diners right from the sidewalk',
          'Split-door alignment keeps Arabic and French calligraphy perfectly centered',
          'UV-laminated film resists sun fade and frequent storefront wiping',
        ],
      },
    },
  },
  {
    id: 'tacos-shawarma-vitrine',
    brandLabel: 'TACOS SHAWARMA',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#EAB308',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0063_cddd02ff.jpg',
    locales: {
      fr: {
        title: 'Vitrine complète restauration rapide — Tacos Shawarma',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage intégral rouge et jaune d’une façade vitrée de fast-food couvrant les portes coulissantes et impostes latérales avec visuels tacos et menus.',
        dimensions: 'Vitrine complète 260 × 250 cm',
        material: 'Vinyle extérieur rouge/jaune HD + Découpe sur charnières et poignées',
        highlights: [
          'Fort impact visuel rue grâce au contraste rouge vif et lettrage jaune script',
          'Raccord propre sur les vitres latérales, impostes hautes et portes centrales',
          'Visuels produits appétissants incitant à la commande à emporter',
        ],
      },
      ar: {
        title: 'تغليف كامل لواجهة محل فاست فود — Tacos Shawarma',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تزيين كامل للواجهة الزجاجية لمحل وجبات سريعة باللونين الأحمر والأصفر مع صور طاكوس وشاورما عالية الجودة وتفريغ دقيق حول المفاصل.',
        dimensions: 'واجهة زجاجية 260 × 250 سم',
        material: 'فينيل خارجي HD مقاوم للشمس + قص دقيق حول مفاصل الأبواب الزجاجية',
        highlights: [
          'تباين لوني قوي بين الأحمر والأصفر يلفت أنظار المارة في الشوارع التجارية',
          'تغطية شاملة للأبواب الزجاجية والجوانب والجزء العلوي بتناسق تام',
          'صور أطعمة واضحة وجودة طباعة تحفظ جاذبيتها لوقت طويل',
        ],
      },
      en: {
        title: 'Tacos Shawarma Fast-Food Full Window & Door Vinyl Wrap',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Bold red and yellow full-glass wrap transforming a fast-food storefront across side transoms and central tempered glass doors.',
        dimensions: 'Full glass facade 260 × 250 cm',
        material: 'Outdoor UV vinyl wrap + Precision trim around hinges & handles',
        highlights: [
          'High-visibility red and yellow color scheme stands out on busy retail streets',
          'Seamless wrap spans side panels, top transom, and twin glass doors',
          'Crisp menu photography encourages walk-in takeaway orders',
        ],
      },
    },
  },
  {
    id: 'london-skyline-desk-mural',
    brandLabel: 'LONDON SKYLINE',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0066_1e4b8400.jpg',
    locales: {
      fr: {
        title: 'Fresque murale architecturale « LONDON » pour bureau et salle de réunion',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Décoration murale panoramique dans les tons beige et rouge illustrant Big Ben, London Eye, cabine rouge et typographie LONDON géante pour bureaux ou écoles.',
        dimensions: 'Mur de bureau 420 × 270 cm',
        material: 'Papier peint vinyle intissé mat + Impression HD + Finition architecturale',
        highlights: [
          'Palette beige chaleureuse harmonisée avec mobilier contemporain et parquet',
          'Typographie LONDON monumentale en arrière-plan pour un relief visuel raffiné',
          'Rendu mat haut de gamme sans reflet gênant en visioconférence ou réunion',
        ],
      },
      ar: {
        title: 'جدارية معمارية أنيقة «LONDON» لقاعات الاجتماعات والمكاتب والمعاهد',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تغليف جداري عصري بألوان البيج الدافئة مع رسومات ساعة بيغ بن، عجلة لندن، كشك الهاتف الأحمر وكلمة LONDON بحجم عملاق.',
        dimensions: 'جدار مكتب 420 × 270 سم',
        material: 'ورق جدران فينيل مطفي فاخر + طباعة عالية الدقة + تركيب غير مرئي الفواصل',
        highlights: [
          'ألوان هادئة وأنيقة تتناغم مع الأثاث المكتبي والأرضيات الخشبية',
          'تدرج طباعي عملاق لعبارة LONDON يمنح الجدار عمقاً هندسياً راقياً',
          'ملمس مطفي يمنع الانعكاس أثناء العمل والاجتماعات',
        ],
      },
      en: {
        title: 'Architectural “LONDON” Skyline Office & Studio Wall Mural',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Warm-beige architectural feature mural illustrating Big Ben, the London Eye, and a red phone booth behind a giant subtle LONDON backdrop.',
        dimensions: 'Office wall 420 × 270 cm',
        material: 'Matte non-woven vinyl wallcovering + HD print + Seamless install',
        highlights: [
          'Warm neutral tones complement minimalist conference furniture and wood floors',
          'Monumental background typography creates subtle architectural depth',
          'Matte anti-glare finish stays crisp in sunlit offices and meeting rooms',
        ],
      },
    },
  },
  {
    id: 'london-brick-cafe-mural',
    brandLabel: 'LONDON BRICK',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0061_c325bf02.jpg',
    locales: {
      fr: {
        title: 'Fresque murale effet brique blanche « London Historical City » pour café',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage mural panoramique imitation brique blanche avec voiture rétro rouge, bus impérial, Big Ben et drapeau britannique pour café ou espace jeune.',
        dimensions: 'Mur complet 500 × 280 cm',
        material: 'Vinyle mural grand format effet brique + Pose sous poutres bois',
        highlights: [
          'Texture brique blanche hyper réaliste valorisant les visuels vintage rouge vif',
          'Découpe soignée s’ajustant parfaitement autour des poutres apparentes du plafond',
          'Ambiance thématique instantanée pour cafés, fast-foods et espaces détente',
        ],
      },
      ar: {
        title: 'جدارية بتأثير الطوب الأبيض «London Historical City» للمقاهي والفضاءات العصرية',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تغليف جداري واسع بنقشة الطوب الأبيض مع سيارة كلاسيكية حمراء، حافلة لندن وساعة بيغ بن لتصميم ديكور مقهى أو فضاء استراحة مميز.',
        dimensions: 'جدار كامل 500 × 280 سم',
        material: 'فينيل جداري واسع بنقشة الطوب + قص محاذي للعوارض الخشبية',
        highlights: [
          'مظهر طوب أبيض واقعي يبرز الألوان الحمراء الكلاسيكية بوضوح مدهش',
          'تفصيل وقص دقيق يتكيف مع عوارض السقف الخشبية والزوايا المعمارية',
          'يضفي هوية بصرية جذابة وفورية على المقاهي ومطاعم الشباب ومراكز اللغات',
        ],
      },
      en: {
        title: '“London Historical City” White-Brick Café & Lounge Wall Mural',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Wide white-brick textured wall wrap showcasing a vintage red car, double-decker bus, Big Ben, and phone booths tailored for cafés and lounges.',
        dimensions: 'Feature wall 500 × 280 cm',
        material: 'Brick-effect wide vinyl + Ceiling-beam precision trim + HD print',
        highlights: [
          'Realistic faux-brick texture makes vintage red illustrations pop off the wall',
          'Precision-trimmed installation fits snugly beneath exposed wooden ceiling beams',
          'Instant themed ambiance for modern cafés, lounges, and language clubs',
        ],
      },
    },
  },
  {
    id: 'glitch-juice-food-sign',
    brandLabel: 'GLITCH FOOD',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0049_3abc6e08.jpg',
    locales: {
      fr: {
        title: 'Enseigne lumineuse 3D LED « JUICE GLITCH FOOD » sur marbre noir',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Enseigne extérieure à lettres boîtier LED rouge vif montée sur fond Alucobond noir effet marbre, avec caisson logo circulaire rétroéclairé au centre.',
        dimensions: 'Enseigne 450 × 120 cm',
        material: 'Lettres relief 3D LED rouge + Alucobond noir marbré + Caisson central lumineux',
        highlights: [
          'Lettres 3D haute luminosité visibles de loin de jour comme de nuit',
          'Médaillon logo circulaire central rétroéclairé par LED haute intensité',
          'Pose suspendue renforcée sur fascia Alucobond noir satiné anti-intempéries',
        ],
      },
      ar: {
        title: 'لافتة مضيئة 3D LED لمحل «JUICE GLITCH FOOD» على ألوكوبوند أسود رخامي',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'واجهة مضيئة بحروف بارزة 3D باللون الأحمر المشع على لوح ألوكوبوند أسود، تتوسطها لوحة دائرية مضيئة لشعار المحل مع إضاءة خلفية جذابة.',
        dimensions: 'لافتة 450 × 120 سم',
        material: 'حروف بارزة 3D LED حمراء + ألوكوبوند أسود رخامي + شعار دائري مضيء',
        highlights: [
          'إضاءة LED حمراء قوية تمنح اسم المحل وضوحاً فائقاً ليلاً ونهاراً',
          'شعار دائري مركزي بإضاءة خلفية ناعمة ومتناسقة مع واجهة المطعم',
          'تثبيت معدني متين وواجهات ألوكوبوند مقاومة للظروف المناخية',
        ],
      },
      en: {
        title: '“JUICE GLITCH FOOD” 3D Red LED Sign on Black Marble Alucobond',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'High-contrast exterior storefront fascia combining vivid red 3D channel letters on dark marble Alucobond with a glowing central round logo lightbox.',
        dimensions: 'Signage 450 × 120 cm',
        material: 'Red 3D LED channel letters + Black marble Alucobond + Backlit round emblem',
        highlights: [
          'Bright red 3D illuminated typography delivers sharp night and day visibility',
          'Central halo-lit circular emblem frames the brand identity cleanly',
          'Weather-sealed dark Alucobond cladding with reinforced structural brackets',
        ],
      },
    },
  },
  {
    id: 'shawarma-max-facade',
    brandLabel: 'SHAWARMA MAX',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#EAB308',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0047_8389d6f7.jpg',
    locales: {
      fr: {
        title: 'Façade complète Alucobond jaune & noir « شاورما ماكس »',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage intégral d’une façade de restaurant rapide en Alucobond jaune vif et lames noires en sous-face, avec lettrage relief 3D arabe et pictogramme broche découpé CNC.',
        dimensions: 'Façade restaurant 480 × 380 cm',
        material: 'Habillage Alucobond jaune + Lettrage relief 3D + Sous-face lamellée',
        highlights: [
          'Identité jaune/noir percutante visible à l’entrée de la rue commerçante',
          'Découpe CNC grand format de la broche de shawarma intégrée au bandeau',
          'Plafond d’auvent en lames noires avec spots LED encastrés',
        ],
      },
      ar: {
        title: 'تغليف واجهة كاملة لمطعم «شاورما ماكس» بالألوكوبوند الأصفر والأسود',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تجهيز واجهة مطعم فاست فود بالكامل بألواح الألوكوبوند الصفراء مع حروف بارزة 3D وقصة CNC لسيخ الشاورما وسقف شرائح أسود مزود بسبوتات إنارة.',
        dimensions: 'واجهة مطعم 480 × 380 سم',
        material: 'ألوكوبوند أصفر فاخر + حروف بارزة 3D + سقف شرائح مع إنارة مدمجة',
        highlights: [
          'تناسق لوني قوي بين الأصفر والأسود يجذب الزبائن عن بعد',
          'قص CNC مبتكر لرمز الشاورما والخط العربي البارز بإطار واضح',
          'سقف مدخل مشطّب بشرائح معدنية سوداء وإضاءة LED مدمجة',
        ],
      },
      en: {
        title: '“Shawarma Max” Full Yellow & Black Alucobond Restaurant Facade',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Complete quick-service restaurant storefront clad in vibrant yellow Alucobond, featuring raised 3D Arabic typography, CNC-routed kebab icon, and slatted soffit lighting.',
        dimensions: 'Storefront 480 × 380 cm',
        material: 'Yellow Alucobond cladding + Raised 3D letters + Slatted black soffit',
        highlights: [
          'Bold yellow and matte black branding commands instant street visibility',
          'Custom CNC-cut kebab silhouette integrated alongside 3D Arabic lettering',
          'Slatted black canopy soffit fitted with recessed LED downlights',
        ],
      },
    },
  },
  {
    id: 'badiri-car-agency',
    brandLabel: 'BADIRI CAR',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#EA580C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0051_040be743.jpg',
    locales: {
      fr: {
        title: 'Façade & vitrine agence automobile « Badiri CAR »',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Habillage complet de façade d’agence de location de voitures : bandeau noir mat avec lettres 3D orange et blanches, spots LED et vitrine vinyle haute définition.',
        dimensions: 'Façade 380 × 400 cm',
        material: 'Alucobond noir mat + Lettrage 3D Forex/Plexi + Habillage vitrine complet',
        highlights: [
          'Contraste premium noir mat et orange signature pour le bandeau supérieur',
          'Vitrine en vinyle noir imprimé présentant modèles de véhicules et contacts',
          'Éclairage architectural par 4 spots encastrés + projecteurs latéraux',
        ],
      },
      ar: {
        title: 'واجهة وتغليف وكالة كراء السيارات «Badiri CAR»',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تغليف متكامل لواجهة وكالة تأجير سيارات يضم بانو ألوكوبوند أسود مطفي مع حروف بارزة 3D بالبرتقالي والأبيض وتزيين كامل للواجهة الزجاجية.',
        dimensions: 'واجهة وكالة 380 × 400 سم',
        material: 'ألوكوبوند أسود مطفي + حروف بارزة 3D + تغليف زجاجي HD كامل',
        highlights: [
          'تباين احترافي بين الأسود المطفي والبرتقالي اللامع يعكس فخامة الوكالة',
          'تغليف متكامل للباب والزجاج يعرض أصناف السيارات وأرقام التواصل بوضوح',
          'إضاءة سفلية بأربعة سبوتات مدمجة تبرز المدخل واللافتة ليلاً',
        ],
      },
      en: {
        title: '“Badiri CAR” Rental Agency Storefront & Full Window Branding',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Sleek automotive agency exterior combining a matte-black Alucobond fascia with orange-and-white 3D lettering, soffit spotlights, and full printed glass graphics.',
        dimensions: 'Agency facade 380 × 400 cm',
        material: 'Matte black Alucobond + 3D acrylic letters + Full-glass HD vinyl wrap',
        highlights: [
          'Executive matte-black and vibrant orange 3D signage above entrance',
          'Bilingual Arabic/French window wrap showcasing fleet models and hotline',
          'Quad recessed soffit downlights plus wide-angle floodlights for night clarity',
        ],
      },
    },
  },
  {
    id: 'labona-naoumi-medical',
    brandLabel: 'LABONA MEDICAL',
    category: 'facades',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#B91C1C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0048_6e17c668.jpg',
    locales: {
      fr: {
        title: 'Double façade médicale « مختبر نعومي » & Cabinet de gynécologie',
        categoryLabel: 'Façades, Écoles & Habillage Mural',
        summary:
          'Réalisation complète de deux façades médicales superposées : laboratoire d’analyses Labona avec lettres relief 3D rouges sur Alucobond blanc/rouge et enseigne cabinet vert émeraude à l’étage.',
        dimensions: 'Façade double niveau 950 × 420 cm',
        material: 'Alucobond médical rouge/blanc/vert + Lettres 3D relief + Panneau d’affichage LED',
        highlights: [
          'Lettrage arabe 3D grand format et logo microscope découpé avec haute précision',
          'Habillage complet des piliers d’entrée en Alucobond rouge satiné',
          'Pose coordonnée du bandeau bilingue du cabinet médical au niveau supérieur',
        ],
      },
      ar: {
        title: 'واجهة مزدوجة لمختبر التحليلات الطبية «نعومي Labona» وعيادة طب النساء',
        categoryLabel: 'واجهات المحلات، المدارس والديكور الجداري',
        summary:
          'تنفيذ متكامل لواجهتين طبيتين: واجهة مخبر التحاليل في الطابق الأرضي بألوكوبوند أبيض وأحمر وحروف بارزة 3D، مع لافتة العيادة في الطابق العلوي.',
        dimensions: 'واجهة طابقين 950 × 420 سم',
        material: 'ألوكوبوند طبي أحمر وأبيض وأخضر + حروف عربية بارزة 3D + شاشة نصية',
        highlights: [
          'حروف عربية 3D عالية الوضوح مع شعار المجهر الطبي مقصوص بدقة عالية',
          'تغليف كامل للأعمدة والمدخل بألواح الألوكوبوند الحمراء والكتابة البينية',
          'تركيب متناسق للافتة عيادة طب النساء والتوليد ثنائية اللغة في الطابق العلوي',
        ],
      },
      en: {
        title: 'Dual Medical Storefront — Labona Analysis Lab & Gynecology Clinic',
        categoryLabel: 'Storefronts, Academies & Wall Murals',
        summary:
          'Two-story medical facade project combining a red-and-white Alucobond entrance with raised 3D Arabic channel letters for Labona Lab and a matching upper clinic signboard.',
        dimensions: 'Two-story facade 950 × 420 cm',
        material: 'Medical-grade Alucobond cladding + Raised 3D Arabic letters + LED ticker bay',
        highlights: [
          'High-precision 3D Arabic lettering and bespoke microscope emblem on white fascia',
          'Full pillar cladding in satin medical crimson with clean typography',
          'Coordinated upper-level bilingual gynecology clinic signboard installation',
        ],
      },
    },
  },
  {
    id: 'chokrane-pavilion-front',
    brandLabel: 'CHOKRANE STAND',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0002_c217ef59.jpg',
    locales: {
      fr: {
        title: 'Pavillon d’exposition événementiel complet « شكراً Chokrane »',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Conception et aménagement d’un stand foire grand format rouge et blanc pour la marque Chokrane : arche double travée, logo 3D lumineux en toiture, parquet bois et mur produit grand format.',
        dimensions: 'Stand foire 600 × 300 × 320 cm',
        material: 'Structure Forex CNC laquée + Logo toiture 3D LED + Parquet stratifié + Spots',
        highlights: [
          'Enseigne « شكراً Chokrane » en relief 3D rétroéclairée dépassant la toiture',
          'Double espace : zone exposition produits à gauche et accueil/dégustation à droite',
          'Éclairage périmétrique par spots LED encastrés tout le long des arches',
        ],
      },
      ar: {
        title: 'جناح معرض متكامل لعلامة «شكراً Chokrane» للويفر والشوكولاطة',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'تصميم وبناء جناح عرض تجاري فاخر باللونين الأحمر والأبيض للمشاركة في المعارض الدولية والوطنية، مع شعار 3D مضيء في السقف وأرضية خشبية متكاملة.',
        dimensions: 'جناح معرض 600 × 300 × 320 سم',
        material: 'هيكل فوركس (Forex) مقصوص بالـ CNC ومطلي + شعار سقف 3D LED + باركيه',
        highlights: [
          'تاج علوي بارز يحمل شعار «شكراً Chokrane» بإضاءة LED محيطية جاذبة',
          'تقسيم ذكي بين فضاء عرض المنتجات وفضاء الاستقبال وكاونتر الضيافة',
          'توزيع احترافي لإضاءة السبوتات المدمجة داخل الأقواس الجدارية',
        ],
      },
      en: {
        title: '“Chokrane” Full Trade Show & Event Exhibition Pavilion',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Turnkey red-and-white exhibition booth built for Chokrane wafer snacks, featuring a backlit 3D rooftop brand crest, arched perimeter soffit lights, and wood flooring.',
        dimensions: 'Booth 600 × 300 × 320 cm',
        material: 'Lacquered CNC Forex structure + 3D illuminated rooftop logo + Laminate floor',
        highlights: [
          'Oversized backlit 3D Chokrane crest elevated above the arched roofline',
          'Dual-bay flow balancing product showcase zone and hospitality reception',
          'Continuous recessed ceiling spotlight array illuminating interior wall wraps',
        ],
      },
    },
  },
  {
    id: 'chokrane-pavilion-displays',
    brandLabel: 'CHOKRANE BOOTHS',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'stepped',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0005_6efd6649.jpg',
    locales: {
      fr: {
        title: 'Zone présentation produits & présentoirs intégrés — Stand Chokrane',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Vue d’angle du pavillon Chokrane mettant en valeur la batterie de 4 présentoirs blancs sur mesure intégrés au mur gauche, l’écran TV et le comptoir courbé.',
        dimensions: 'Module expo 600 × 300 cm',
        material: 'Présentoirs PLV blancs intégrés + Écran média + Impressions murales HD',
        highlights: [
          '4 colonnes de présentation blanches découpées en arc dédiées aux produits',
          'Écran encastré et QR code mural connectant directement les visiteurs',
          'Circulation fluide entre la zone produits et l’espace rencontre partenaires',
        ],
      },
      ar: {
        title: 'ركن عرض المنتجات والحوامل المدمجة — جناح شكراً (Chokrane)',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'زاوية عرض متكاملة داخل جناح شكراً تُبرز 4 حوامل عرض بيضاء مدمجة، شاشة تفاعلية جدارية، وبار استقبال منحنٍ في واجهة الجناح.',
        dimensions: 'فضاء معرض 600 × 300 سم',
        material: 'حوامل عرض بيضاء مدمجة + شاشة عرض + جداريات مطبوعة HD',
        highlights: [
          'أربع وحدات عرض بيضاء مدمجة لتوزيع تشكيلة الويفر والشوكولاطة بوضوح',
          'شاشة فيديو مدمجة ورمز QR لتعريف زوار المعرض بمنتجات العلامة',
          'انسيابية تامة في الحركة بين منطقة التذوق وفضاء اجتماعات الموزعين',
        ],
      },
      en: {
        title: 'Integrated POS Racks & Exhibition Product Wall — Chokrane Stand',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Side perspective of the Chokrane pavilion showcasing four built-in arched white display stands, an inset media screen, and the sweeping hospitality counter.',
        dimensions: 'Pavilion bay 600 × 300 cm',
        material: 'Built-in custom white display columns + Inset screen + HD wall wraps',
        highlights: [
          'Four matching arched white display towers framing snack lines cleanly',
          'Flush-mounted promo monitor paired with direct scan QR code graphic',
          'Open corner entry linking retail shelves to the B2B consultation desk',
        ],
      },
    },
  },
  {
    id: 'chokrane-waffle-pillar',
    brandLabel: 'CHOKRANE LOUNGE',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#CA8A04',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0006_25edd7ba.jpg',
    locales: {
      fr: {
        title: 'Pilier central texturé « Gaufrette » & salon VIP — Stand Chokrane',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Détail architectural de l’intérieur du stand Chokrane : cloison centrale sculptée façon biscuit gaufrette doré séparant la galerie produits du coin rendez-vous B2B.',
        dimensions: 'Espace VIP 320 × 280 cm',
        material: 'Panneau 3D usiné CNC motif gaufrette + Mobilier salon bois + Mur imprimé',
        highlights: [
          'Cloison maîtresse reproduisant la texture authentique du biscuit gaufrette',
          'Espace table ronde chaleureux pensé pour les échanges commerciaux en salon',
          'Visuels dynamiques de paquets en lévitation sur fond blanc épuré',
        ],
      },
      ar: {
        title: 'العمود المنحوت بنقشة الويفر وركن كبار الشخصيات — جناح شكراً',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'تفصيل هندسي مميز داخل جناح شكراً يظهر الجدار الفاصل المنحوت بنقشة بسكويت الويفر الذهبي الذي يفصل فضاء العرض عن طاولة الاجتماعات التجارية.',
        dimensions: 'ركن اجتماعات 320 × 280 سم',
        material: 'لوح 3D محفور CNC بنقشة الويفر + طاولة اجتماعات + تغليف جداري',
        highlights: [
          'عمود معماري محفور بدقة يحاكي الملمس الحقيقي لبسكويت الويفر',
          'مساحة هادئة بطاولة دائرية ومقاعد مريحة لاستقبال الشركاء والموزعين',
          'جداريات حديثة تبرز منتجات العلامة بخط عربي أنيق وعنوان الموقع',
        ],
      },
      en: {
        title: '3D Wafer-Textured Feature Wall & B2B Lounge — Chokrane Booth',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Architectural detail of the Chokrane booth showcasing a custom CNC-carved golden wafer-grid partition separating the display aisle from the B2B lounge.',
        dimensions: 'VIP lounge 320 × 280 cm',
        material: 'CNC-milled 3D wafer-grid panel + Round meeting set + Branded backdrop',
        highlights: [
          'Bespoke textured feature wall replicating the brand’s signature wafer pattern',
          'Intimate round consultation table set for wholesale distributor meetings',
          'Dynamic splash product visuals framed by clean red wave graphics',
        ],
      },
    },
  },
  {
    id: 'chokrane-led-counter',
    brandLabel: 'CHOKRANE COUNTER',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0004_20a8ad3f.jpg',
    locales: {
      fr: {
        title: 'Comptoir d’accueil cintré avec ruban LED rouge intégré — Chokrane',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Comptoir d’accueil courbé blanc satiné fabriqué sur mesure avec rainure lumineuse LED rouge continue suivant parfaitement la courbe du plateau jusqu’au sol.',
        dimensions: 'Comptoir 220 × 65 × 108 cm',
        material: 'Forex cintré laqué blanc satiné + Diffuseur LED rouge continu + Tabouret haut',
        highlights: [
          'Cintrage Forex haute précision offrant une silhouette architecturale sans arête vive',
          'Gorge lumineuse LED rouge continue soulignant la courbe du comptoir',
          'Plateau supérieur équipé d’un rehausseur en verre pour accueil et dégustation',
        ],
      },
      ar: {
        title: 'كاونتر استقبال منحنٍ مزود بشريط إضاءة LED مدمج — جناح شكراً',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'طاولة استقبال منحنية باللون الأبيض الساتيني مصنعة حسب الطلب مع مجرى إضاءة LED أحمر متصل يتبع انحناء الهيكل حتى الأرضية.',
        dimensions: 'كاونتر 220 × 65 × 108 سم',
        material: 'فوركس (Forex) مقوس ومطلي أبيض ساتيني + شريط إضاءة LED أحمر مدمج',
        highlights: [
          'تقويس دقيق لألواح الفوركس يعطي خطوطاً هندسية انسيابية بدون زوايا حادة',
          'إضاءة LED حمراء مخفية تبرز التصميم وتمنح الكاونتر حضوراً عصرياً',
          'سطح علوي مزود برف زجاجي أنيق لاستقبال الزوار وتقديم العينات',
        ],
      },
      en: {
        title: 'Curved Reception Counter with Seamless Embedded Red LED Strip',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Bespoke curved satin-white trade show counter engineered with a continuous recessed red LED light channel sweeping seamlessly down to the floor.',
        dimensions: 'Counter 220 × 65 × 108 cm',
        material: 'Curved satin-white lacquered Forex + Recessed red LED profile + Swivel stool',
        highlights: [
          'Smooth radius Forex bending delivers an architectural waterfall silhouette',
          'Flush-inlaid red LED channel accentuates the curved counter geometry',
          'Raised tempered glass service ledge built for visitor check-in and tastings',
        ],
      },
    },
  },
  {
    id: 'chokrane-counter-detail',
    brandLabel: 'CHOKRANE ARCH',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#DC2626',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0003_8b7a256d.jpg',
    locales: {
      fr: {
        title: 'Perspective comptoir vitré & présentoirs sur mesure — Stand Chokrane',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Vue rapprochée montrant l’alignement du plateau en verre sur entretoises inox du comptoir cintré face à la batterie de présentoirs produits et au pilier gaufrette.',
        dimensions: 'Zone accueil 350 × 260 cm',
        material: 'Verre trempé sur entretoises alu + Forex laqué blanc + Pilier texturé 3D',
        highlights: [
          'Plateau supérieur en verre fixé sur entretoises métalliques brossées',
          'Intégration harmonieuse entre comptoir d’accueil, présentoirs et salon',
          'Finitions soignées adaptées aux grands salons agroalimentaires',
        ],
      },
      ar: {
        title: 'تفاصيل الكاونتر الزجاجي وحوامل العرض — جناح شكراً',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'لقطة مقربة تبرز دقة تركيب السطح الزجاجي فوق دعامات الألمنيوم على الكاونتر المنحني مع تكامل بصري رائع أمام حوامل العرض والعمود المنحوت.',
        dimensions: 'فضاء الاستقبال 350 × 260 سم',
        material: 'زجاج مقوى على دعامات معدنية + فوركس أبيض مطلي + عمود ويفر 3D',
        highlights: [
          'لوح زجاجي علوي مثبت بدعامات معدنية متينة للاستخدام المكثف في المعارض',
          'تناغم لوني وهندسي بين الكاونتر المنحني ورفوف المنتجات والصالون الداخلي',
          'جودة تشطيب عالية تلبي معايير الأجنحة الكبرى في التظاهرات الاقتصادية',
        ],
      },
      en: {
        title: 'Glass-Topped Reception Desk & Display Columns Detail — Chokrane',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Close-up architectural view highlighting the brushed aluminum glass riser on the curved reception desk aligned with stepped display towers and textured walls.',
        dimensions: 'Reception zone 350 × 260 cm',
        material: 'Tempered glass on steel standoffs + Lacquered white Forex + 3D wall panel',
        highlights: [
          'Tempered glass service shelf elevated on brushed metal standoffs',
          'Cohesive alignment across reception desk, shelf bays, and consultation area',
          'Exhibition-grade joinery built for major food & FMCG trade fairs',
        ],
      },
    },
  },
  {
    id: 'irchad-pavilion-complete',
    brandLabel: 'AL-IRCHAD PAVILION',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0034_a1929ec9.jpg',
    locales: {
      fr: {
        title: 'Stand d’exposition réalisé — جمعية الإرشاد والإصلاح الجزائرية',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Réalisation clé en main d’un pavillon d’exposition institutionnel : fascia cintré vert avec calligraphie arabe en relief blanc, bibliothèque voûtée, totem écran smartphone et gazon synthétique.',
        dimensions: 'Pavillon 600 × 400 × 310 cm',
        material: 'Forex CNC cintré + Calligraphie 3D + Bibliothèque sur mesure + Borne TV/QR',
        highlights: [
          'Bandeau supérieur cintré avec calligraphie arabe découpée et spots d’accentuation',
          'Bibliothèque d’exposition arrondie à gauche et totem smartphone interactif à droite',
          'Finition fidèle à 100% à la maquette 3D validée en amont par le client',
        ],
      },
      ar: {
        title: 'الجناح المنفّذ على أرض الواقع — جمعية الإرشاد والإصلاح الجزائرية',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'تنفيذ متكامل لجناح معرض مؤسساتي يضم واجهة علوية مقوسة خضراء بخط عربي بارز، مكتبة عرض قوسية، هيكل هاتف ذكي تفاعلي، وشعار ثلاثي الأبعاد مع عشب اصطناعي.',
        dimensions: 'جناح معرض 600 × 400 × 310 سم',
        material: 'فوركس (Forex) مقوس CNC + خط عربي بارز 3D + مكتبة مضاءة + منصة شاشة',
        highlights: [
          'تاج علوي منحنٍ يحمل اسم الجمعية بخط عربي بارز وإضاءة سبوتات موجهة',
          'تكامل مثالي بين رفوف الكتب المضاءة على اليسار ومنصة التبرع الذكية على اليمين',
          'مطابقة تامة بنسبة 100% للتصور ثلاثي الأبعاد المعتمد قبل بدء التصنيع',
        ],
      },
      en: {
        title: 'Completed Event Pavilion — Algerian Al-Irchad & Islah Association',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Turnkey institutional exhibition stand featuring a curved emerald header with raised Arabic calligraphy, rounded display bookcase, interactive smartphone totem, and turf floor.',
        dimensions: 'Pavilion 600 × 400 × 310 cm',
        material: 'Curved CNC Forex + 3D Arabic calligraphy + Custom bookcase + TV/QR totem',
        highlights: [
          'Sweeping curved header crowned with 3D white Arabic calligraphy and spotlights',
          'Balances an arched book showcase on the left with an interactive digital kiosk',
          'Built to match the approved pre-production 3D architectural render cleanly',
        ],
      },
    },
  },
  {
    id: 'irchad-3d-concept',
    brandLabel: '3D PAVILION RENDER',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0013_469fc74a.jpg',
    locales: {
      fr: {
        title: 'Modélisation 3D avant fabrication — Pavillon Al-Irchad & Islah',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Aperçu 3D réaliste présenté avant lancement en atelier : validation des volumes, teintes vert olive et terre cuite, pergola bois, éclairage d’ambiance et borne digitale.',
        dimensions: 'Modèle 3D CAD 600 × 400 cm',
        material: 'Étude architecturale 3D + Calibrage matériaux, éclairages et textures',
        highlights: [
          'Visualisation photo-réaliste permettant au client de valider chaque détail',
          'Intégration de l’éclairage indirect sous la courbe du bandeau et de la borne',
          'Répartition précise des zones exposition, lecture et accueil VIP',
        ],
      },
      ar: {
        title: 'التصميم ثلاثي الأبعاد (3D) قبل التصنيع — جناح الإرشاد والإصلاح',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'نموذج ثلاثي الأبعاد عالي الواقعية جرى تجهيزه للمعاينة والمصادقة قبل الانطلاق في الورشات، يوضح الألوان الزيتية والطينية، الإضاءة المخفية، وتوزيع الأركان.',
        dimensions: 'مخطط 3D لمساحة 600 × 400 سم',
        material: 'دراسة هندسية ثلاثية الأبعاد + محاكاة الخامات والإضاءة قبل القص',
        highlights: [
          'معاينة دقيقة للزوايا والألوان والمواد تضمن رضا العميل قبل بدء الإنتاج',
          'تخطيط مدروس للإضاءة الدافئة والسبوتات المخفية داخل المكتبة والمنصة',
          'فصل واضح بين ركن الكتب، المنصة الرقمية، ومساحة الاجتماعات الخاصة',
        ],
      },
      en: {
        title: 'Pre-Production 3D Architectural Visualization — Al-Irchad Stand',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Photorealistic pre-build 3D render presented for client sign-off, previewing the olive-green and terracotta palette, timber ceiling slats, and hidden LED lighting.',
        dimensions: '3D CAD spec 600 × 400 cm',
        material: '3D spatial design + Material finish, lighting & fixture calibration',
        highlights: [
          'Photorealistic mockup lets clients approve dimensions and finishes pre-build',
          'Maps out warm recessed LED strips and directional gallery spotlights accurately',
          'Clearly organizes exhibition shelves, QR media totem, and lounge seating',
        ],
      },
    },
  },
  {
    id: 'irchad-3d-topview',
    brandLabel: 'BOOTH FLOORPLAN 3D',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0038_cb5a9c0d.jpg',
    locales: {
      fr: {
        title: 'Plan 3D en plongée — Architecture globale du stand d’exposition',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Vue aérienne 3D démontrant l’optimisation spatiale du stand : poutres bois ajourées sur l’espace réunion, arche courbe centrale et fluidité de circulation.',
        dimensions: 'Plan global 600 × 400 cm',
        material: 'Rendu aérien 3D + Implantation pergola bois & cloisons acoustiques',
        highlights: [
          'Optimisation de chaque mètre carré pour accueillir visiteurs et partenaires',
          'Zone réunion semi-privée sous pergola de poutres en chêne clair',
          'Alignement parfait entre l’écusson mural 3D et les tasseaux verticaux',
        ],
      },
      ar: {
        title: 'مخطط 3D علوي — التوزيع الهندسي الكامل لجناح المعرض',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'منظور جوي ثلاثي الأبعاد يبرز استغلال المساحة الذكي بين القوس الأمامي المائل، عوارض السقف الخشبية لركن الاجتماعات، وممرات حركة الزوار.',
        dimensions: 'توزيع مساحة 600 × 400 سم',
        material: 'تصميم معماري علوي 3D + تخطيط العوارض الخشبية والحوائط الديكورية',
        highlights: [
          'استغلال هندسي أمثل لمساحة الجناح يوازن بين العرض والخصوصية',
          'منطقة لقاءات مظللة بعوارض خشبية تضفي طابعاً معمارياً راقياً',
          'تناظر بصري دقيق بين الشعار المضيء بالخلف والأعمدة الخشبية الجانبية',
        ],
      },
      en: {
        title: 'Top-Down 3D Architectural Layout — Exhibition Booth Zoning',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Aerial 3D perspective illustrating smart booth zoning: sweeping front arch, oak pergola beams over the semi-private lounge, and clear visitor circulation.',
        dimensions: 'Floorplan 600 × 400 cm',
        material: '3D aerial render + Timber beam ceiling & acoustic slat zoning',
        highlights: [
          'Maximizes every square meter for visitor flow and brand storytelling',
          'Semi-private consultation zone tucked beneath warm timber pergola slats',
          'Clean visual axis linking the front arch directly to the 3D backlit crest',
        ],
      },
    },
  },
  {
    id: 'irchad-3d-calligraphy-lounge',
    brandLabel: 'CALLIGRAPHY LOUNGE',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#991B1B',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0016_673b0496.jpg',
    locales: {
      fr: {
        title: 'Espace VIP & calligraphie murale « وافعلوا الخير لعلكم تفلحون »',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Rendu 3D détaillé du salon de réception du pavillon, sublimé par une calligraphie arabe monumentale rouge grenat sur enduit minéral texturé et lumière rasante.',
        dimensions: 'Coin VIP 260 × 240 cm',
        material: 'Calligraphie découpée en relief + Enduit texturé pierre + Tasseaux bois',
        highlights: [
          'Calligraphie Diwani découpée avec une extrême finesse sur mur texturé',
          'Éclairage architectural traversant les lames de plafond en bois naturel',
          'Atmosphère apaisante et prestigieuse dédiée aux entretiens officiels',
        ],
      },
      ar: {
        title: 'ركن الاستقبال والخط العربي «وافعلوا الخير لعلكم تفلحون» — تصور 3D',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'تفصيل ثلاثي الأبعاد لفضاء الاجتماعات داخل الجناح، مزين بلوحة خط عربي بارزة بلون عنابي فاخر على خلفية حجرية مع إضاءة منسدلة عبر العوارض الخشبية.',
        dimensions: 'ركن VIP 260 × 240 سم',
        material: 'حروف خط عربي مقصوصة بدقة + خلفية ملمس حجري + عوارض خشبية',
        highlights: [
          'تشكيل فني بالخط العربي الديواني يمنح الفضاء هيبة وروحاً ثقافية أصيلة',
          'ظلال وإضاءة طبيعية منسابة بين العوارض الخشبية في السقف',
          'أثاث مدمج وألوان ترابية هادئة مثالية لاستقبال الضيوف والشركاء',
        ],
      },
      en: {
        title: 'VIP Meeting Alcove & Monumental Arabic Calligraphy Wall (3D)',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Detailed 3D interior view of the pavilion’s consultation lounge featuring crimson Diwani Arabic calligraphy mounted on warm textured stone panels.',
        dimensions: 'VIP lounge 260 × 240 cm',
        material: 'Precision-cut relief calligraphy + Textured mineral finish + Timber slats',
        highlights: [
          'Intricate Diwani calligraphy creates a prestigious focal point for guests',
          'Architectural light filters between overhead oak beams onto the feature wall',
          'Warm earthy palette crafted for executive discussions at events',
        ],
      },
    },
  },
  {
    id: 'irchad-cnc-build-stage',
    brandLabel: 'ON-SITE FABRICATION',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#B45309',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0044_e45b9512.jpg',
    locales: {
      fr: {
        title: 'Montage sur site & structure Forex CNC — Coulisses de réalisation',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Photo de chantier montrant l’assemblage de la structure Forex découpée en atelier CNC : cloisons porteuses, bandeau cintré supérieur et cadre arrondi du totem.',
        dimensions: 'Chantier 600 × 400 cm',
        material: 'Panneaux Forex haute densité découpés CNC + Ossature renforcée + Montage sur site',
        highlights: [
          'Pré-découpe numérique garantissant un emboîtement millimétré sur le lieu du salon',
          'Montage rapide par l’équipe WAIL DICO directement dans le hall d’exposition',
          'Contrôle structurel complet avant masticage, peinture et pose des revêtements',
        ],
      },
      ar: {
        title: 'مرحلة البناء والتركيب الميداني لهيكل الجناح (Forex & CNC)',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'صورة حقيقية من قلب قاعة المعرض توثق مرحلة تجميع ألواح الفوركس (Forex) المقصوصة بآلات CNC، تركيب القوس العلوي المنحني، وتثبيت الإطار الدائري للمنصة الذكية.',
        dimensions: 'مساحة التركيب 600 × 400 سم',
        material: 'ألواح فوركس (Forex) مقصوصة بالـ CNC + تثبيت هيكلي متين + تجهيز ميداني',
        highlights: [
          'قص رقمي مسبق في الورشة يضمن تطابق القطع وسرعة التركيب داخل المعرض',
          'إشراف مباشر من فريقنا الميداني على المتانة قبل مرحلة الطلاء والتغليف',
          'تنفيذ متقن للإطارات المقوسة والأقواس الكبيرة دون أخطاء قياس',
        ],
      },
      en: {
        title: 'On-Site Forex & CNC Structural Assembly — Exhibition Build',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Behind-the-scenes hall photo capturing structural assembly of CNC-routed Forex partitions, the sweeping overhead fascia arch, and the curved kiosk frame.',
        dimensions: 'Build footprint 600 × 400 cm',
        material: 'CNC-routed Forex panels + Reinforced framing + On-site hall erection',
        highlights: [
          'Workshop CNC pre-cutting ensures rapid, millimeter-accurate hall assembly',
          'Installed directly inside the exhibition venue by WAIL DICO technicians',
          'Rigorous structural alignment checked before finishing coats and wraps',
        ],
      },
    },
  },
  {
    id: 'irchad-onsite-assembly',
    brandLabel: 'PAVILION FINISHING',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0037_9d27f8e4.jpg',
    locales: {
      fr: {
        title: 'Finitions peinture, calligraphie & pose de l’écusson sur place',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Phase de finition finale sur site : installation des tasseaux bois, pose de l’écusson mural rétroéclairé, application de la calligraphie et calibrage des spots.',
        dimensions: 'Pavillon 600 × 400 cm',
        material: 'Peinture texturée minérale + Lettres relief + Éclairage orientable LED',
        highlights: [
          'Pose des tasseaux bois verticaux et de l’écusson central sous spot chaud',
          'Application précise du texte calligraphié et du QR code dans le totem terre cuite',
          'Vérification de chaque point lumineux avant l’ouverture officielle au public',
        ],
      },
      ar: {
        title: 'مرحلة التشطيب النهائي وتركيب الشعار والخط العربي في المعرض',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'لقطة توثق لمسات التشطيب الأخيرة داخل المعرض: طلاء الجدران بالملمس الحجري، تثبيت الشعار 3D، لصق الخط العربي، وضبط إنارة السبوتات قبل الافتتاح.',
        dimensions: 'جناح 600 × 400 سم',
        material: 'طلاء ديكوري حجري + تركيب الشعار والخط العربي + معايرة الإضاءة',
        highlights: [
          'تثبيت الشرائح الخشبية العمودية والشعار المركزي مع توجيه السبوت العلوي',
          'تجهيز لوحة رمز QR والعبارة الترحيبية داخل الإطار الطيني المقوس بدقة',
          'فحص جميع توصيلات الإضاءة والتشطيبات لضمان جاهزية تامة قبل الافتتاح',
        ],
      },
      en: {
        title: 'Final On-Site Finishing — Crest Mounting & Lighting Calibration',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Final installation stage inside the exhibition hall: mounting wood wall slats, installing the 3D association crest, applying calligraphy, and aiming spotlights.',
        dimensions: 'Pavilion 600 × 400 cm',
        material: 'Mineral-textured paint + Relief crest & calligraphy + LED spot aiming',
        highlights: [
          'Vertical timber slat framing and central 3D crest mounted under warm spotlight',
          'Crisp placement of QR plaque and calligraphy inside the terracotta frame',
          'Full electrical and surface quality inspection ahead of opening day',
        ],
      },
    },
  },
  {
    id: 'irchad-qr-digital-totem',
    brandLabel: 'INTERACTIVE KIOSK',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#C2410C',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0027_9c499887.jpg',
    locales: {
      fr: {
        title: 'Borne interactive smartphone géant avec TV 43" & QR Code',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Structure autoportante en forme de smartphone arrondi terre cuite intégrant une Smart TV 43 pouces encastrée, une plaque QR Code et la calligraphie « وسيلتكم لفعل الخير ».',
        dimensions: 'Borne 145 × 45 × 245 cm',
        material: 'Caisson Forex cintré terre cuite + Support TV VESA + Plaque QR acrylique',
        highlights: [
          'Format totem smartphone moderne attirant l’interaction des visiteurs et jeunes',
          'Câblage dissimulé et support mural intégré pour écran 43 pouces Google TV',
          'Plaque QR Code en acrylique haute netteté facilitant le don et l’accès digital',
        ],
      },
      ar: {
        title: 'منصة رقمية بهيكل هاتف عملاق مع شاشة ذكية ورمز QR تفاعلي',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'هيكل عرض قائم بذاته على شكل هاتف ذكي بزوايا دائرية ولون طيني أنيق، يضم شاشة تلفاز ذكية 43 بوصة، لوحة رمز QR للمسح السريع، وعبارة «وسيلتكم لفعل الخير».',
        dimensions: 'منصة 145 × 45 × 245 سم',
        material: 'هيكل فوركس مقوس مطلي + حامل شاشة مدمج + لوحة QR أكريليك',
        highlights: [
          'تصميم مستوحى من الهاتف الذكي يحفّز الزوار على التفاعل والمسح المباشر',
          'تجهيز مخفي للأسلاك وتثبيت متين لشاشة Google TV بقياس 43 بوصة',
          'قاعدة مكسوة بالعشب الاصطناعي تمنح توازناً بصرياً وجمالياً أمام المدخل',
        ],
      },
      en: {
        title: 'Oversized Terracotta Smartphone Kiosk with 43" TV & QR Station',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Freestanding exhibition totem shaped like a rounded terracotta smartphone housing an inset 43-inch Smart TV, raised acrylic QR code plate, and Arabic calligraphy.',
        dimensions: 'Totem 145 × 45 × 245 cm',
        material: 'Curved terracotta lacquered Forex + Flush VESA TV mount + Acrylic QR plate',
        highlights: [
          'Eye-catching rounded smartphone silhouette invites direct visitor engagement',
          'Concealed power routing and flush bracket for a 43-inch Google TV display',
          'High-contrast acrylic QR plaque drives instant digital sign-ups and donations',
        ],
      },
    },
  },
  {
    id: 'irchad-arched-bookcase',
    brandLabel: 'EXHIBITION SHELVING',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0036_35f0b8f3.jpg',
    locales: {
      fr: {
        title: 'Meuble bibliothèque d’exposition en arche verte à étagères décalées',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Présentoir mural intégré façon alcôve arrondie vert sauge avec 4 tablettes asymétriques terre cuite, 3 spots LED en plafond et caissons de rangement bas à portes coulissantes.',
        dimensions: 'Meuble 280 × 50 × 235 cm',
        material: 'Structure Forex arrondie laquée + Tablettes asymétriques + 3 spots LED + Portes',
        highlights: [
          'Étagères asymétriques arrondies créant un rythme visuel contemporain',
          '3 spots LED encastrés en voûte éclairant uniformément brochures et ouvrages',
          '4 portes coulissantes inférieures offrant un vaste stockage discret de stock',
        ],
      },
      ar: {
        title: 'مكتبة عرض قوسية باللون الأخضر مع رفوف متدرجة وخزائن تخزين سفلية',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'وحدة عرض مدمجة بتصميم قوسي دائري بلون أخضر هادئ، مزودة بـ 4 رفوف غير متماثلة بلون طيني، 3 سبوتات إنارة علوية، وخزائن سفلية بأبواب منزلقة لتخزين المطبوعات.',
        dimensions: 'وحدة عرض 280 × 50 × 235 سم',
        material: 'هيكل فوركس قوسي مطلي + رفوف متدرجة + إنارة سبوت LED + خزائن تخزين',
        highlights: [
          'تصميم رفوف متدرج ومنحني الأطراف يكسر الرتابة ويبرز الكتب والمنشورات',
          'إضاءة علوية ثلاثية مدمجة تسلط الضوء مباشرة على المعروضات',
          'مساحة تخزين سفلية مغلقة بأبواب سحابة لحفظ مخزون الكتيبات داخل الجناح',
        ],
      },
      en: {
        title: 'Curved Green Exhibition Display Alcove with Staggered Shelves',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Built-in rounded-arch exhibition cabinet finished in matte olive green with asymmetrical terracotta shelves, triple overhead LED downlights, and sliding lower storage.',
        dimensions: 'Cabinet 280 × 50 × 235 cm',
        material: 'Rounded lacquered Forex arch + Staggered shelves + 3 LED spots + Sliding doors',
        highlights: [
          'Asymmetrical curved shelf layout adds modern architectural rhythm',
          'Three recessed ceiling spotlights illuminate books and brochures evenly',
          'Four flush sliding-door cabinets conceal extra stock right on the booth',
        ],
      },
    },
  },
  {
    id: 'irchad-stocked-books-display',
    brandLabel: 'BOOK FAIR DISPLAY',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'arch',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0012_d16d2c11.jpg',
    locales: {
      fr: {
        title: 'Bibliothèque d’exposition garnie — Livres éducatifs & brochures en salon',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Mise en situation réelle du meuble bibliothèque garni d’ouvrages scolaires et cahiers pédagogiques sous éclairage chaud, prêt à accueillir le public du salon.',
        dimensions: 'Meuble garni 280 × 50 × 235 cm',
        material: 'Étagères renforcées pour piles de livres + Éclairage chaud + Gazon exposition',
        highlights: [
          'Étagères calibrées supportant de lourdes piles de livres et cahiers sans fléchir',
          'Visibilité frontale directe des couvertures grâce à la profondeur optimale des tablettes',
          'Éclairage chaud valorisant les couleurs des ouvrages éducatifs',
        ],
      },
      ar: {
        title: 'مكتبة العرض ممتلئة بالإصدارات التربوية — تجربة حية في المعرض',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'صورة ميدانية لوحدة العرض وهي ممتلئة بالكتب المدرسية ودفاتر التلوين والمطبوعات تحت الإضاءة الدافئة، تبرز قدرة الرفوف على حمل الأوزان وتنظيم المعروضات.',
        dimensions: 'وحدة عرض 280 × 50 × 235 سم',
        material: 'رفوف معززة لأكوام الكتب الثقيلة + إنارة سبوت دافئة + أرضية خضراء',
        highlights: [
          'صلابة عالية للرفوف تتحمل رزم الكتب الكثيفة طوال أيام المعرض دون أي ميلان',
          'تنظيم مزدوج يتيح عرض الأغلفة بشكل مواجه للزائر مع تخزين كميات إضافية',
          'إضاءة متوازنة تعكس جودة المطبوعات وتجذب أولياء الأمور والزوار',
        ],
      },
      en: {
        title: 'Stocked Book Fair Showcase — Educational Titles Under Warm Lighting',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Live fair-floor view of the custom green arched cabinet stocked with textbooks, activity books, and stacked brochures illuminated by warm overhead spots.',
        dimensions: 'Loaded cabinet 280 × 50 × 235 cm',
        material: 'Load-rated book shelves + Warm recessed LEDs + Turf exhibition base',
        highlights: [
          'Reinforced shelves carry heavy book stacks throughout multi-day exhibitions',
          'Optimal depth allows front-facing cover display alongside neat publication piles',
          'Warm lighting highlights colorful book covers for visiting families and educators',
        ],
      },
    },
  },
  {
    id: 'irchad-3d-emblem-wall',
    brandLabel: '3D BACKLIT CREST',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0045_77eb519a.jpg',
    locales: {
      fr: {
        title: 'Écusson mural découpé CNC en relief 3D — Finition événementielle',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Fabrication grand format du blason officiel de l’association découpé CNC multi-couches avec impression haute fidélité, encadré de tasseaux bois et éclairé par projecteur mural.',
        dimensions: 'Écusson Ø 135 cm · Mur 300 cm',
        material: 'Découpe CNC contour précis + Impression UV HD + Tasseaux chêne + Spot',
        highlights: [
          'Découpe extérieure complexe respectant chaque courbe des épis et rouages',
          'Cadre architectural en tasseaux bois verticaux centrant le regard sur le logo',
          'Projecteur mural rasant créant un halo lumineux théâtral sur la cloison',
        ],
      },
      ar: {
        title: 'شعار جداري مقصوص بالـ CNC — تنفيذ بارز للمعارض والمقرات',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'تصنيع وتثبيت شعار الجمعية بحجم كبير مقصوص بدقة رقمية CNC مع طباعة UV فائقة الوضوح، محاط بشرائح الخشب العمودية ومضاء بكشاف جداري موجه.',
        dimensions: 'قطر الشعار 135 سم · واجهة 300 سم',
        material: 'قص CNC محيطي دقيق + طباعة UV عالية الدقة + شرائح خشبية + سبوت',
        highlights: [
          'تفريغ وقص محيطي متقن يتابع أدق تفاصيل السنابل والترس والشعار الرسمي',
          'تأطير معماري بشرائح الخشب العمودية يركز بصر الزائر نحو منتصف الجناح',
          'إنارة جدارية علوية دافئة تضفي هيبة رسمية وأناقة على واجهة الاستقبال',
        ],
      },
      en: {
        title: 'Oversized CNC-Cut Institutional Emblem & Timber Slat Feature Wall',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Large-scale custom CNC-routed emblem printed in vivid UV ink, mounted as the focal centerpiece between vertical oak wall slats beneath a warm wash spotlight.',
        dimensions: 'Crest Ø 135 cm · Feature bay 300 cm',
        material: 'Precision CNC contour routing + HD UV print + Oak slats + Wall washer',
        highlights: [
          'Intricate perimeter routing follows every curve of the gear, wreath, and crest',
          'Vertical timber slat framing anchors the centerpiece visually',
          'Overhead wall-wash fixture casts a refined dramatic glow across the emblem',
        ],
      },
    },
  },
  {
    id: 'irchad-calligraphy-corner',
    brandLabel: 'EVENT WALL ART',
    category: 'exhibitions',
    shelvesCount: 0,
    maxLoadKg: 0,
    shapeStyle: 'classic',
    accentColor: '#15803D',
    imageSrc: '/assets/aistudio/IMG-20261124-WA0025_b0276f51.jpg',
    locales: {
      fr: {
        title: 'Angle d’exposition avec calligraphie arabe & lames bois — Détail architectural',
        categoryLabel: 'Stands, Foires & Événements',
        summary:
          'Vue d’ensemble montrant la jonction soignée entre le mur principal, les tasseaux bois, le revêtement texturé ton pierre à calligraphie ton-sur-ton et le bandeau vert éclairé.',
        dimensions: 'Angle 340 × 300 cm',
        material: 'Vinyle texturé effet pierre + Calligraphie découpe relief + Projecteurs orientation',
        highlights: [
          'Superposition raffinée d’une calligraphie ton-sur-ton en fond et d’un texte relief',
          'Double rail de projecteurs LED orientables monté sur la poutre supérieure',
          'Raccord propre entre gazon d’exposition, plinthes et panneaux muraux',
        ],
      },
      ar: {
        title: 'تفصيل الزاوية المعمارية — جدارية خط عربي، شرائح خشبية وإضاءة مسرحية',
        categoryLabel: 'أجنحة المعارض والفعاليات',
        summary:
          'نظرة مقربة على التقاء الجدران الديكورية داخل الجناح، تجمع بين خلفية الخط العربي المتدرجة، الأحرف البارزة، الشرائح الخشبية الدافئة، وتوجيه الكشافات العلوية.',
        dimensions: 'زاوية عرض 340 × 300 سم',
        material: 'تغليف جداري بملمس حجري + خط عربي مقصوص 3D + كشافات إضاءة مزدوجة',
        highlights: [
          'تدرج فني يجمع بين الخط العربي المطبوع بالخلفية والخط المقصوص البارز أمامه',
          'تثبيت مزدوج لكشافات إضاءة موجهة على العارضة العلوية لإنارة التفاصيل',
          'تطابق تشطيب متقن عند التقاء الجدران بالزوايا والأرضية الخضراء',
        ],
      },
      en: {
        title: 'Architectural Booth Corner — Layered Calligraphy & Track Lighting',
        categoryLabel: 'Trade Shows & Event Booths',
        summary:
          'Detail view of the clean architectural junction combining wood wall slats, tone-on-tone printed calligraphy, raised lettering, and dual track spotlights.',
        dimensions: 'Corner bay 340 × 300 cm',
        material: 'Stone-effect textured wrap + Relief calligraphy + Twin track spotlights',
        highlights: [
          'Layered depth pairing subtle oversized backdrop calligraphy with crisp relief art',
          'Twin directional LED track fixtures mounted neatly along the upper header beam',
          'Clean edge joinery where textured feature walls meet the green turf floor',
        ],
      },
    },
  },
];

export function getPortfolioItems(lang: Language): PortfolioItem[] {
  return PORTFOLIO_RECORDS.map((record) => ({
    id: record.id,
    brandLabel: record.brandLabel,
    category: record.category,
    shelvesCount: record.shelvesCount,
    maxLoadKg: record.maxLoadKg,
    shapeStyle: record.shapeStyle,
    accentColor: record.accentColor,
    imageSrc: record.imageSrc,
    ...record.locales[lang],
  }));
}

export interface PortfolioVideo {
  id: string;
  videoSrc: string;
  posterSrc?: string;
  title: string;
  categoryLabel: string;
  summary: string;
  highlights: string[];
}

export function getPortfolioVideos(lang: Language): PortfolioVideo[] {
  const records: {
    id: string;
    videoSrc: string;
    posterSrc?: string;
    locales: Record<Language, Omit<PortfolioVideo, 'id' | 'videoSrc' | 'posterSrc'>>;
  }[] = [
    {
      id: 'vioryle-rotating-display-video',
      videoSrc: '/assets/aistudio/tiktok_1795528453329_0b726760.mp4',
      locales: {
        fr: {
          title: 'Présentoir rotatif 360° sur mesure — Vioryle Vernis à Ongles',
          categoryLabel: 'Cosmétique & Parfumerie (Rotatif)',
          summary:
            'Démonstration en boutique d’un présentoir colonne rotatif à 360° fabriqué pour Vioryle : faces vitrées à casiers compartimentés pour vernis à ongles, socle assorti et rotation fluide.',
          highlights: [
            'Mécanisme rotatif 360° silencieux permettant d’exposer des dizaines de teintes sur 2+ faces',
            'Étagères transparentes compartimentées maintenant chaque flacon en verre parfaitement aligné',
            'Habillage rose pastel et logo Vioryle sur le fronton, les côtés et le socle inférieur',
          ],
        },
        ar: {
          title: 'حامل عرض دوّار 360 درجة — طلاء الأظافر Vioryle',
          categoryLabel: 'مستحضرات التجميل والعطور (دوّار)',
          summary:
            'فيديو ميداني لحامل عرض عمودي دوّار 360° مصمم خصيصاً لمنتجات Vioryle لطلاء الأظافر: رفوف شفافة مقسمة بدقة تحفظ ثبات القوارير الزجاجية مع حركة دوران سلسة.',
          highlights: [
            'قاعدة دوّارة 360 درجة سلسة تتيح عرض عشرات الألوان على واجهات متعددة في مساحة صغيرة',
            'أدراج ورفوف شفافة مقسمة تحافظ على ترتيب القوارير الزجاجية دون سقوط',
            'تصميم وردي أنيق مع طباعة شعار Vioryle وصور الألوان على الرأس والجوانب والقاعدة',
          ],
        },
        en: {
          title: '360° Rotating Cosmetic Tower Display — Vioryle Nail Polish',
          categoryLabel: 'Cosmetics & Beauty (Rotating)',
          summary:
            'Live in-store showcase of a custom 360-degree rotating column stand for Vioryle nail polish featuring clear compartmentalized trays, pastel branding, and smooth swivel rotation.',
          highlights: [
            'Smooth 360° turntable base displays dozens of shades across multiple compact faces',
            'Clear divided shelving cradles glass nail polish bottles securely in neat rows',
            'Full pastel-pink UV graphics across header, side wings, and matching pedestal box',
          ],
        },
      },
    },
    {
      id: 'workshop-showcase-video-1',
      videoSrc: '/assets/aistudio/lv_0_20261122162915_c74d070e.mp4',
      posterSrc: '/assets/aistudio/1795089848235_580ce9d4.jpg',
      locales: {
        fr: {
          title: 'Démonstration réelle — Présentoirs sur mesure WAIL DICO',
          categoryLabel: 'Vidéo terrain & Atelier',
          summary:
            'Découvrez en vidéo la finition, la stabilité et le rendu réel de nos présentoirs fabriqués sur mesure pour vos points de vente.',
          highlights: [
            'Qualité d’assemblage et rigidité des étagères en conditions réelles',
            'Rendu net des couleurs et découpe précise de la façade de marque',
            'Prêt à l’installation immédiate en magasin, parfumerie ou supermarché',
          ],
        },
        ar: {
          title: 'عرض ميداني حي — حوامل عرض مخصصة من WAIL DICO',
          categoryLabel: 'فيديو من أعمالنا وورشتنا',
          summary:
            'شاهد بالفيديو جودة الفينيسيون، متانة التركيب، والحضور الواقعي لحوامل العرض الإعلانية المصنعة حسب الطلب لنقاط البيع.',
          highlights: [
            'صلابة الهيكل وثبات الرفوف عند عرض المنتجات في الميدان',
            'دقة القص والتشطيب مع ألوان طباعة واضحة وجذابة',
            'تصميم جاهز للتركيب المباشر داخل المحلات والفضاءات التجارية',
          ],
        },
        en: {
          title: 'Real Showcase — WAIL DICO Custom Display Stands in Action',
          categoryLabel: 'Field & Workshop Video',
          summary:
            'Watch a close-up video showcasing the finishing quality, structural stability, and real retail presence of our custom display stands.',
          highlights: [
            'Solid assembly and shelf stability under real store conditions',
            'Crisp print colors and precision custom-cut brand silhouettes',
            'Ready for immediate placement in retail stores and supermarkets',
          ],
        },
      },
    },
  ];

  return records.map((record) => ({
    id: record.id,
    videoSrc: record.videoSrc,
    posterSrc: record.posterSrc,
    ...record.locales[lang],
  }));
}

