const initialTalentData = [
  {
    id: "t1",
    fullName: "Elena Rostova",
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    description: "Elena is a highly experienced professional model with over 5 years in the fashion industry, known for her versatile looks and quick adaptability on set. She speaks both English and Russian fluently.",
    gallery: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    ],
    age: 26,
    gender: "Female",
    physical: {
      height: 175,
      weight: 55,
      skinTone: "Fair",
      hairColor: "Blonde",
      eyeColor: "Blue"
    },
    professional: {
      experienceLevel: "Professional",
      pastWork: ["Vogue Cover 2024", "Nike Commercial"],
      portfolioUrl: "#"
    },
    education: "BFA in Drama, Juilliard School",
    skills: {
      languages: ["English", "Russian"],
      driving: { canDrive: true, type: "Manual" },
      acting: true,
      dancing: false,
      singing: true,
      painting: false,
      dubbing: true,
      swimming: true,
      sports: ["Tennis"],
      special: []
    },
    availability: {
      dates: ["2026-04-10", "2026-04-15"],
      location: "Los Angeles, CA",
      willingToTravel: true
    },
    contact: {
      manager: "jane@agency.com",
      direct: "elena@example.com",
      phone: "+1 555-0198",
      socialMedia: "https://instagram.com/elenarostova"
    }
  },
  {
    id: "t2",
    fullName: "Marcus Chen",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    description: "Marcus specializes in stunt work and physical acting. Having martial arts background, he shines in action sequences and athletic roles.",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    ],
    age: 30,
    gender: "Male",
    physical: {
      height: 185,
      weight: 80,
      skinTone: "Medium",
      hairColor: "Black",
      eyeColor: "Brown"
    },
    professional: {
      experienceLevel: "Intermediate",
      pastWork: ["Indie Short Film: The Echo", "Tech Startup Ad"],
      portfolioUrl: "#"
    },
    education: "Self-taught / Acting Workshops",
    skills: {
      languages: ["English", "Mandarin"],
      driving: { canDrive: true, type: "Automatic" },
      acting: true,
      dancing: true,
      singing: false,
      painting: false,
      dubbing: false,
      swimming: false,
      sports: ["Martial Arts"],
      special: ["Stunt Combat"]
    },
    availability: {
      dates: ["2026-05-01", "2026-06-01"],
      location: "New York, NY",
      willingToTravel: true
    },
    contact: {
      manager: "mike@stuntagency.com",
      direct: "marcus@example.com",
      phone: "+1 555-0245",
      socialMedia: "https://twitter.com/marcuschen"
    }
  },
  {
    id: "t-roshan",
    fullName: "Roshan Ranawana",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    description: "Roshan Ranawana is a prominent Sri Lankan film actor, model, and singer. Crowned 'Mr. Sri Lanka' in 2002, he made his cinematic debut in the blockbuster teen romance Hiripoda Wessa. He is a household name in the Sri Lankan film industry.",
    gallery: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"],
    age: 43,
    gender: "Male",
    physical: { height: 180, weight: 75, skinTone: "Medium", hairColor: "Black", eyeColor: "Brown" },
    professional: { experienceLevel: "Professional", pastWork: ["Hiripoda Wessa", "Asai Mang Piyabanna", "Sri Siddhartha Gautama"], portfolioUrl: "https://www.imdb.com/name/nm3170757/" },
    education: "St. Joseph's College, Colombo",
    skills: {
      languages: ["Sinhala", "English"],
      driving: { canDrive: true, type: "Manual" },
      acting: true, dancing: true, singing: true, painting: false, dubbing: true, swimming: true, sports: ["Rugby"], special: ["Modeling"]
    },
    availability: { dates: ["2026-05-01", "2026-06-01"], location: "Colombo, Sri Lanka", willingToTravel: true },
    contact: { manager: "manager@roshanranawana.com", direct: "contact@roshanranawana.com", phone: "+94 77 123 4567", socialMedia: "https://www.instagram.com/roshanranawana" }
  },
  {
    id: "t-hemal",
    fullName: "Hemal Ranasinghe",
    profilePicture: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?auto=format&fit=crop&q=80&w=400",
    description: "Hemal Sachindra Ranasinghe is an award-winning Sri Lankan film actor and model. Well-versed in martial arts, he won the Male Model of the World title in Spain (2009) and later debuted in the hit film Super Six.",
    gallery: [],
    age: 41,
    gender: "Male",
    physical: { height: 183, weight: 78, skinTone: "Medium", hairColor: "Black", eyeColor: "Brown" },
    professional: { experienceLevel: "Professional", pastWork: ["Super Six", "Pravegaya", "Adaraneeya Kathawak"], portfolioUrl: "https://www.imdb.com/name/nm5132204/" },
    education: "St. Thomas' College, Matale",
    skills: {
      languages: ["Sinhala", "English"],
      driving: { canDrive: true, type: "Manual" },
      acting: true, dancing: true, singing: false, painting: false, dubbing: true, swimming: true, sports: ["Martial Arts"], special: ["Action Sequences"]
    },
    availability: { dates: [], location: "Colombo, Sri Lanka", willingToTravel: true },
    contact: { manager: "booking@hemalranasinghe.lk", direct: "hemal@example.com", phone: "+94 71 234 5678", socialMedia: "https://www.instagram.com/hemalranasinghe" }
  },
  {
    id: "t-dinakshie",
    fullName: "Dinakshie Priyasad",
    profilePicture: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    description: "Baminnahennadige Dinakshie Priyasad is a prominent Sri Lankan actress and television presenter. She made her screen debut at age two and gained widespread recognition in the teledrama Wassana Sihinaya.",
    gallery: [],
    age: 36,
    gender: "Female",
    physical: { height: 165, weight: 55, skinTone: "Fair", hairColor: "Black", eyeColor: "Brown" },
    professional: { experienceLevel: "Professional", pastWork: ["Wassana Sihinaya", "Me Wage Adarayak", "Zoom"], portfolioUrl: "https://www.imdb.com/name/nm6961483/" },
    education: "University of Sri Jayewardenepura",
    skills: {
      languages: ["Sinhala", "English"],
      driving: { canDrive: true, type: "Automatic" },
      acting: true, dancing: true, singing: true, painting: false, dubbing: true, swimming: false, sports: [], special: ["TV Presenting"]
    },
    availability: { dates: [], location: "Colombo, Sri Lanka", willingToTravel: true },
    contact: { manager: "agency@priyasad.com", direct: "dinakshie@example.com", phone: "+94 77 987 6543", socialMedia: "https://www.instagram.com/dinakshie" }
  }
];

// Initialize LocalStorage if empty
if (!localStorage.getItem('talentData')) {
  localStorage.setItem('talentData', JSON.stringify(initialTalentData));
} else {
  // Sync new initial data into existing LocalStorage (to automatically surface new updates)
  let existing = JSON.parse(localStorage.getItem('talentData'));
  let syncNeeded = false;
  initialTalentData.forEach(t => {
    if (!existing.find(e => e.id === t.id)) {
      existing.push(t);
      syncNeeded = true;
    }
  });
  if (syncNeeded) {
    localStorage.setItem('talentData', JSON.stringify(existing));
  }
}

function getTalents() {
  return JSON.parse(localStorage.getItem('talentData')) || [];
}

function saveTalents(talents) {
  localStorage.setItem('talentData', JSON.stringify(talents));
}

const initialAdsData = [
  {
    id: "a1",
    title: "NIKE Commercial - Lead Athletes Needed",
    projectType: "TV Commercial",
    description: "Looking for highly fit and athletic actors/models for an upcoming national Nike commercial shoot. Gymnastics or martial arts experience is a massive plus.",
    roles: "Male and Female, 18-35",
    directorContact: "casting@nike-tvc.com",
    status: "Open",
    deadline: "2026-05-15"
  },
  {
    id: "a2",
    title: "Indie Web Series \"Neon Streets\"",
    projectType: "Web Series",
    description: "Casting for a cyberpunk-themed web series shooting in Colombo. We need expressive faces and people comfortable with intense makeup and night shoots.",
    roles: "Any Gender, 20-40",
    directorContact: "hello@neonstreets-series.com",
    status: "Open",
    deadline: "2024-01-01" // Intentionally expired for testing
  }
];

if (!localStorage.getItem('adsData')) {
  localStorage.setItem('adsData', JSON.stringify(initialAdsData));
} else {
  let existingAds = JSON.parse(localStorage.getItem('adsData'));
  let syncNeeded = false;
  initialAdsData.forEach(a => {
    if (!existingAds.find(e => e.id === a.id)) {
      existingAds.push(a);
      syncNeeded = true;
    }
  });
  if (syncNeeded) {
    localStorage.setItem('adsData', JSON.stringify(existingAds));
  }
}

function getAds() {
  return JSON.parse(localStorage.getItem('adsData')) || [];
}

function saveAds(ads) {
  localStorage.setItem('adsData', JSON.stringify(ads));
}
