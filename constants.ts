
import { Translations } from './types';

export const TRANSLATIONS: Record<'en' | 'am', Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      leadership: "Leadership",
      contact: "Contact",
    },
    hero: {
      title: "Trustworthy Pharmaceuticals and Medical Supplies Source",
      subtitle: "ABM Wholesale delivers quality medicines, lab equipment, and medical gear to pharmacies, hospitals, and clinics across Ethiopia with excellence and reliability.",
      cta: "Contact Us",
    },
    services: {
      title: "Comprehensive Medical Supply Solutions",
      subtitle: "From pharmaceuticals to advanced medical equipment, we provide everything your healthcare facility needs.",
      items: {
        pharma: {
          title: "Pharmaceutical Distribution",
          desc: "Comprehensive wholesale distribution of certified medications from trusted manufacturers to healthcare facilities.",
        },
        equipment: {
          title: "Medical Gear",
          desc: "Essential medical equipment and supplies for hospitals, clinics, and healthcare professionals.",
        },
        lab: {
          title: "Lab Equipment",
          desc: "State-of-the-art laboratory instruments and diagnostic equipment for clinical and research applications.",
        },
        compliance: {
          title: "Medicines",
          desc: "Wide range of prescription and over-the-counter medicines covering all therapeutic categories.",
        },
      },
    },
    productsSupplies: {
      title: "Products & Supplies",
      subtitle: "We offer a wide range of certified medical products:",
      items: [
        { name: "All types of medicines", icon: "Pill" },
        { name: "Pharmaceutical products", icon: "FlaskConical" },
        { name: "Laboratory equipment", icon: "Microscope" },
        { name: "Laboratory reagents", icon: "TestTube" },
        { name: "General medical equipment and supplies", icon: "BriefcaseMedical" }
      ]
    },
    targetCustomers: {
      title: "Our Target Customers",
      subtitle: "ABM serves the following institutions:",
      items: [
        { name: "Pharmacies", icon: "Store" },
        { name: "Hospitals", icon: "Building2" },
        { name: "Health Centers", icon: "HeartPulse" },
        { name: "Drug Stores", icon: "ShoppingBag" },
        { name: "Clinics & Healthcare Facilities", icon: "Stethoscope" }
      ]
    },
    leadership: {
      title: "Meet Our Leadership",
      subtitle: "Experienced professionals dedicated to excellence in pharmaceutical distribution.",
      team: [
        {
          name: "Muhammed Hassen Muhammed",
          role: "Chief Executive Officer",
          desc: "10+ years of experience in the pharmaceutical field. Provides overall company leadership, technical supervision, and operational oversight.",
        },
        {
          name: "Fikir Addis Tsahay",
          role: "Store Manager",
          desc: "3+ years of experience in pharmaceutical handling and store management. Responsible for medicine storage, inventory management, and proper handling of pharmaceutical products.",
        },
      ],
    },
    about: {
      title: "The Trusted Link in the Healthcare Supply",
      mission: {
        title: "Manufacturers",
        desc: "Quality sources",
      },
      vision: {
        title: "ABM Distribution",
        desc: "Our warehouses",
      },
      values: {
        title: "Healthcare",
        desc: "Your facilities",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are suppliers to professional healthcare organizations only.",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        message: "Message",
        submit: "Send Message",
      },
      info: {
        address: "Chagini Town, behind Dr. Mulugeta Specialist Clinic",
        phone: "+251 918 292 575 / +251 919 796 363",
        email: "mamesmart@gmail.com",
      },
    },
    footer: {
      rights: "All rights reserved.",
      credibility: "Licensed Pharmaceutical Wholesaler & Medical Equipment Supplier.",
    },
  },
  am: {
    nav: {
      home: "ዋና ገጽ",
      about: "ስለ እኛ",
      services: "አገልግሎቶች",
      leadership: "አመራር",
      contact: "ያግኙን",
    },
    hero: {
      title: "አስተማማኝ የመድሃኒት እና የህክምና መሳሪያዎች አጋር",
      subtitle: "ኤቢኤም ጥራት ያላቸው መድሃኒቶች፣ የላቦራቶሪ እቃዎች እና የህክምና መሳሪያዎችን ለሆስፒታሎች እና ክሊኒኮች በብቃት ያቀርባል።",
      cta: "ያግኙን",
    },
    services: {
      title: "የተሟላ የህክምና አቅርቦት መፍትሄዎች",
      subtitle: "ከመድሃኒት እስከ ዘመናዊ የህክምና መሳሪያዎች፣ ለጤና ተቋምዎ የሚያስፈልገውን ሁሉ እናቀርባለን።",
      items: {
        pharma: {
          title: "የመድሃኒት ስርጭት",
          desc: "ከተረጋገጡ አምራቾች ወደ ጤና ተቋማት የሚደረግ አስተማማኝ የጅምላ ስርጭት።",
        },
        equipment: {
          title: "የህክምና ቁሳቁሶች",
          desc: "ለሆስፒታሎች እና ለጤና ባለሙያዎች አስፈላጊ የሆኑ የህክምና መሳሪያዎች እና ቁሳቁሶች።",
        },
        lab: {
          title: "የላቦራቶሪ መሳሪያዎች",
          desc: "ለክሊኒካል እና ለምርምር አገልግሎት የሚውሉ ዘመናዊ የላቦራቶሪ እና የምርመራ መሳሪያዎች።",
        },
        compliance: {
          title: "መድሃኒቶች",
          desc: "ሁሉንም የህክምና ዘርፎች የሚሸፍኑ በሐኪም የሚታዘዙ እና ያለ ሐኪም ትእዛዝ የሚሸጡ መድሃኒቶች።",
        },
      },
    },
    productsSupplies: {
      title: "ምርቶች እና አቅርቦቶች",
      subtitle: "የተለያዩ የተረጋገጡ የህክምና ምርቶችን እናቀርባለን፡",
      items: [
        { name: "ሁሉም ዓይነት መድሃኒቶች", icon: "Pill" },
        { name: "የፋርማሲዩቲካል ምርቶች", icon: "FlaskConical" },
        { name: "የላቦራቶሪ ዕቃዎች", icon: "Microscope" },
        { name: "የላቦራቶሪ ሪኤጀንቶች", icon: "TestTube" },
        { name: "አጠቃላይ የህክምና መሳሪያዎች እና አቅርቦቶች", icon: "BriefcaseMedical" }
      ]
    },
    targetCustomers: {
      title: "የእኛ ደንበኞች",
      subtitle: "ኤቢኤም ለሚከተሉት ተቋማት አገልግሎት ይሰጣል፡",
      items: [
        { name: "ፋርማሲዎች", icon: "Store" },
        { name: "ሆስፒታሎች", icon: "Building2" },
        { name: "ጤና ጣቢያዎች", icon: "HeartPulse" },
        { name: "መድሃኒት መደብሮች", icon: "ShoppingBag" },
        { name: "ክሊኒኮች እና ሌሎች የጤና ተቋማት", icon: "Stethoscope" }
      ]
    },
    leadership: {
      title: "የሥራ አመራር",
      subtitle: "በዘርፉ ልምድ ባላቸው እና ለላቀ አገልግሎት በቆሙ ባለሙያዎች የሚመራ።",
      team: [
        {
          name: "ሙሀመድ ሀሰን ሙሀመድ",
          role: "ዋና ሥራ አስኪያጅ",
          desc: "በፋርማሲዩቲካል ስርጭት እና በጤና ሎጂስቲክስ ሰፊ ልምድ ያለው መሪ።",
        },
        {
          name: "ፍቅር አዲስ ፀሀይ",
          role: "ስቶር ማናጀር",
          desc: "በክምችት አስተዳደር እና አቅርቦት ሰንሰለት ላይ ባለሙያ።",
        },
      ],
    },
    about: {
      title: "በጤና አቅርቦት አስተማማኝ ድልድይ",
      mission: {
        title: "አምራቾች",
        desc: "ጥራት ያላቸው ምንጮች",
      },
      vision: {
        title: "ኤቢኤም ስርጭት",
        desc: "የእኛ መጋዘኖች",
      },
      values: {
        title: "ጤና ተቋማት",
        desc: "የእርስዎ ተቋማት",
      },
    },
    contact: {
      title: "ያግኙን",
      subtitle: "ምርቶቻችንን የምናቀርበው ለባለሙያዎች እና ፈቃድ ለላቸው የጤና ተቋማት ብቻ ነው።",
      form: {
        name: "ሙሉ ስም",
        phone: "ስልክ ቁጥር",
        email: "ኢሜይል",
        message: "መልዕክትዎ",
        submit: "መልዕክት ይላኩ",
      },
      info: {
        address: "ቻግኒ ከተማ፣ ከዶ/ር ሙሉጌታ ስፔሻሊስት ክሊኒክ ጀርባ",
        phone: "+251 918 292 575 / +251 919 796 363",
        email: "mamesmart@gmail.com",
      },
    },
    footer: {
      rights: "መብቱ በህግ የተጠበቀ ነው።",
      credibility: "ፈቃድ ያለው የመድሃኒት ጅምላ አከፋፋይ እና የህክምና መሳሪያ አቅራቢ።",
    },
  },
};
