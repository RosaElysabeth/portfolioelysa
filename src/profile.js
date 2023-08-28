// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on the landing display
const header = {
  name: "Elysa RAZAFINDRAFARA",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "Elysa";
const about = {
  paragraph:
    "Graduated as a Master of Pedagogical Aptitude from Mathematics, and as Master 2 in Applied Mathematics focussed on Numerical Calculation specialty. Being a National Consultant in Education, I have been working for the TAFITA/JICA project (support project for the participation and decentralized management of schools to improve the quality of Education in Madagascar) since 2018. I am a designer for My passion Madagascar brand mark. And I am also a student in Computer Modeling Doctoral School (EDMI) Fianarantsoa Madagascar."};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Latex",
    // svg: '',
    faClass: "fa fa-file-text",
  },
  {
    name: "R",
    // svg: '',
    faClass: "fa fa-registered",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
];
// Edit your formations, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a formation, copy any one below and paste it after the last comma and increment the id's formation number
const section3Title = "FORMATIONS GENERALES ET DIPLOMES";
const formations = [
  {
    // Add image in './styles/images.css' in #formation0
    id: "formation0",
    name: "ECOLE DOCTORALE MODÉLISATION INFORMATIQUE",
    skills: ["Doctorante, UNIVERSITE DE FIANARANTSOA, 2023"],
    url: "https://www.univ-fianarantsoa.mg/EcoleDoctorale/details/7", 
  },
  {
    // Add image in './styles/images.css' in #formation1
    id: "formation1",
    name: "Master en Mathématiques Appliquées",
    skills: ["Mention : Mathématiques et Informatique, Spécialité : Calcul Numérique, UNIVERSITE D'ANTANANARIVO, 2023"],
    url: "https://univ-antananarivo.mg/Faculte-des-Sciences", 
  },
  {
    // Add image in './styles/images.css' in #formation2
    id: "formation2",
    name: "Master d’Aptitude de l’Ecole Normale Supérieure",
    skills: ["Mention : Mathématiques, UNIVERSITE DE FIANARANTSOA, 2017"],
    url: "http://www.ens-fianar.mg/", 
  },
  {
    // Add image in './styles/images.css' in #formation3
    id: "formation3",
    name: "Formation en Mathématiques à l’Ecole Normale Supérieure",
    skills: ["Mention : Mathématiques, UNIVERSITE DE FIANARANTSOA, 2012 - 2016"],
    url: "http://www.ens-fianar.mg/",
  },
  {
    // Add image in './styles/images.css' in #formation3
    id: "formation4",
    name: "Baccalauréat - Série C ",
    skills: ["LYCEE SACRE COEUR DE JESUS DE FIANARANTSOA, 2011"],
    url: "https://web.facebook.com/p/Lyc%C3%A9e-Catholique-Fo-Masini-Jesoa-FianarantsoaMadagascar-100063797115506/?_rdc=1&_rdr",
  },
];
// Edit your Experiences, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Experience number
const section4Title = "EXPERIENCES PROFESSIONNELLES";
const experiences = [
  {
    // Add image in './styles/images.css' in #exp1
    id: "exp1",
    name: "Consultante Nationale en Education - PROJET TAFITA/JICA (2018 jusqu'à ce jour)",
    skills : ["Projet d’Appui à la Gestion Participative et Décentralisée des écoles, Agence de Coopération Internationale Japonaise"],
    url: "https://web.facebook.com/projettafitajicamadagascar?mibextid=D4KYlr&_rdc=1&_rdr",
  },
  {
    // Add image in './styles/images.css' in #exp2
    id: "exp2",
    name: "Styliste et Gérante de My Passion Madagascar (2018 jusqu'à ce jour)",
    skills : ["Gérer l’entreprise de création des habits et accessoires, vita malagasy."],
    url: "https://mypassionmadagascar.com/",
  },
  {
    // Add image in './styles/images.css' in #exp3
    id: "exp3",
    name: "Stagiaire à DCI MEN (2018)",
    skills : ["Les activités menées sont des appuis de la Direction des Curricula et des Intrants du MEN."],
    url: "https://www.education.gov.mg/lequipe-ministerielle/mission-et-organisation-du-ministere-2/",
  },
  {
    // Add image in './styles/images.css' in #exp4
    id: "exp4",
    name: "Stagiaire à DERP MEN (2017)",
    skills : ["Les activités menées sont des appuis de la Direction de l’Etude et de la Recherche Pédagogique du MEN."],
    url: "https://www.education.gov.mg/lequipe-ministerielle/mission-et-organisation-du-ministere-2/",
  },
  {
    // Add image in './styles/images.css' in #exp5
    id: "exp5",
    name: "Assistante à l'Ecole Normale Supérieure (2016 - 2017)",
    skills : ["Assistante du Professeur RAKOTOSON Jean Emile pour assurer le cours \"l’Enseignement de Mathématiques et le Numérique\", Assistante du Professeur RAHERINIRINA Angelo pour assurer les cours de Probabilités - Statistiques à l’Institut Supérieur de Technologie Régional Vatovavy Fitovinany."],
    url: "http://www.ens-fianar.mg/",
  },
];

const section5Title = "EXPERIENCES ARTISTIQUES ET PARTAGES";
const partages = [
 {
    // Add image in './styles/images.css' in #partage1
    id: "partage1",
    name: "Défilé de mode MIVOATSA II",
    skills : ["Au Zomatel Fianarantsoa - Novembre 2022"],
    url: "https://www.facebook.com/watch/?ref=search&v=899949091175870&external_log_id=33e4ef1b-ba8a-41ab-879f-c29f27610244&q=d%C3%A9fil%C3%A9%20mivoatsa%202%20zomatel",
  },
  {
    // Add image in './styles/images.css' in #partage2
    id: "partage2",
    name: "Partage : MATEMATIKO",
    skills : ["ACRODMaths Antananarivo - Août 2022"],
    url: "https://www.facebook.com/search/top?q=matematiko%20acrodmaths",
  },
  {
    // Add image in './styles/images.css' in #partage3
    id: "partage3",
    name: "Ouverture et Clôture Mihamy Mada Fashion",
    skills : ["3ème édition - Juin 2022"],
    url: "https://www.facebook.com/search/top/?q=mihamy%20mada%20fashion%20my%20passion%202023",
  }, 
  {
    // Add image in './styles/images.css' in #partage4
    id: "partage4",
    name: "Défilé de mode au Carlton Anosy",
    skills : ["Journée Mondiale de l'Artisanat avec le Ministère de l'Artisanat et des Métiers - Juin 2022"],
    url: "https://www.facebook.com/search/top?q=journ%C3%A9e%20mondiale%20de%20l%27artisanat",
  }, 
  {
    // Add image in './styles/images.css' in #partage5
    id: "partage5",
    name: "CONFERENCE à MCC Antananarivo",
    skills : ["« Ny lalam-barotry ny lamaody mitazona ny maha-izy antsika sy ny fomba enti-mivarotra azy na eto Madagasikara na any ivelany. » - Juin 2022"],
    url: "",
  },
  {
    // Add image in './styles/images.css' in #partage6
    id: "partage6",
    name: "Partage : SUCCESS STORY",
    skills : ["AUF - Avril 2022"],
    url: "",
  }, 
  {
    // Add image in './styles/images.css' in #partage7
    id: "partage7",
    name: "Défilé de mode MIVOATSA I",
    skills : ["Au Pietra Fianarantsoa - Septembre 2021"],
    url: "https://web.facebook.com/events/2695898944040777",
  },
  {
    // Add image in './styles/images.css' in #partage8
    id: "partage8",
    name: "Partage : F'AME ET BEAUTE",
    skills : ["Soa Guest House Antsirabe - Septembre 2021"],
    url: "https://www.facebook.com/search/top/?q=f%27ame%20et%20beaut%C3%A9",
  },
  {
    // Add image in './styles/images.css' in #partage9
    id: "partage9",
    name: "Défilé de mode F'AME ET BEAUTE",
    skills : ["Soa Guest House Antsirabe - Septembre 2021"],
    url: "https://www.facebook.com/search/top/?q=f%27ame%20et%20beaut%C3%A9",
  },
  {
    // Add image in './styles/images.css' in #partage10
    id: "partage10",
    name: "Obtention de Chevalier de l'Ordre des Arts, des Lettres et de la Culture en Stylisme ",
    skills : ["Ouverture et Clôture Mihamy Mada Fashion 2ème édition - Février 2021"],
    url: "https://www.facebook.com/search/top/?q=chevalier%20elysa%20aventure",
  },
  {
    // Add image in './styles/images.css' in #partage11
    id: "partage11",
    name: "Partage : VIVRE DE SA PASSION",
    skills : ["JCI Bénin - Mai 2020"],
    url: "https://www.facebook.com/search/top?q=vivre%20de%20sa%20passion%20elysa",
  },
  {
    // Add image in './styles/images.css' in #partage12
    id: "partage12",
   name: "Ouverture et Clôture Mihamy Mada Fashion",
    skills : ["1ère édition - Février 2020"],
    url: "https://www.facebook.com/search/top/?q=my%20passion%20mihamy%20mada%20fashion%20elysa",
  }, 
  {
    // Add image in './styles/images.css' in #partage13
    id: "partage13",
    name: "Partage : L'ENTREPREUNARIAT",
    skills : ["Ndao Hifanosika Fianara - Février 2020"],
    url: "https://www.facebook.com/search/posts/?q=ndao%20hifanosika%20fianara%20forum%202020",
  },
  {
    // Add image in './styles/images.css' in #partage14
    id: "partage14",
    name: "Défilé de mode Final Miss and Mister Westyle Agency",
    skills : ["Antananarivo - Décembre 2019"],
    url: "https://www.facebook.com/search/top/?q=Ambassadeur%20et%20Ambassadrice%20Westyle%20agency%202020%20%20my%20passion",
  },
  {
    // Add image in './styles/images.css' in #partage15
    id: "partage15",
    name: "Défilé de mode Final Miss and Mister Jeune MAASC Madagascar",
    skills : ["Antananarivo - Décembre 2019"],
    url: "",
  }, 
  {
    // Add image in './styles/images.css' in #partage16
    id: "partage16",
    name: "Partage : LES METIERS D'UNE MATHEUSE ",
    skills : ["ACRODMaths Fianarantsoa - Novembre 2019"],
    url: "https://www.facebook.com/events/2331386870525455",
  }, 
  {
    // Add image in './styles/images.css' in #partage17
    id: "partage17",
    name: "Partage : CHOISIR LE SUCCES",
    skills : ["JCI Fianarantsoa - Octobre 2016"],
    url: "https://www.facebook.com/search/top/?q=CHOISIR%20LE%20SUCCES%20jci",
  }, 

];

const section6Title = "DIVERS";
const divers = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "CENTRES D'INTERET",
    skills : ["Voyager : 16/23 Régions de Madagascar ; Sport : danse ; Présidente fondatrice de l’Association des Concepteurs et de Réalisateurs des Outils Didactiques de Mathématiques (ACRODMaths) depuis 2016 ; Entrepreneuse dans les domaines du stylisme, des produits cosmétiques depuis 2018 "],
    url: "https://web.facebook.com/elysarakala",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "COMPETENCES",
    skills :  ["Education, Entrepreneuriat, Communication, Stylisme"],
    url: "https://web.facebook.com/elysarakala",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "LANGUES",
    skills :  ["Malagasy : Maternelle , Français : Courant , Anglais : Professionnel"],
    url: "https://web.facebook.com/elysarakala",
  },
];

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section7Title = "Entrer en Contact";
const contact = {
  pitch:
    "N'hésitez pas à me contacter pour discuter de projets passionnants ou pour plus d'informations sur mon travail. Je suis toujours ouverte aux nouvelles opportunités.",
  copyright: "R4",
  contactUrl: "",
};

// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  facebook: "https://web.facebook.com/elysarakala",
  whatsapp: "https://wa.me/+261340486123",
  envelope: "elysadine@gmail.com",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  formations,
  experiences,
  partages,
  divers,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  section6Title,
  section7Title,
};
