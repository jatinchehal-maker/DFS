// All site text lives here, in English and French.
// Edit this file to change wording; every page reads from it.

export const business = {
  name: 'Delta Facilities Solutions',
  short: 'DFS',
  email: 'deltafacilitiessolutions@gmail.com',
  phone: '',
  phoneHref: '',
  founded: 2022,
  area: 'Laval and Montréal',
};

// Contact forms are delivered free by FormSubmit (formsubmit.co) to the email above.
export const formEndpoint = `https://formsubmit.co/${business.email}`;

export type Lang = 'en' | 'fr';

// BASE is '' on the real domain, or '/dfs-website' on the temporary github.io address.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (p: string) => BASE + p;

export const routes = {
  en: { home: url('/'), contact: url('/contact/'), careers: url('/careers/'), thanks: url('/thanks/') },
  fr: { home: url('/fr/'), contact: url('/fr/contact/'), careers: url('/fr/carrieres/'), thanks: url('/fr/merci/') },
};

export const t = {
  en: {
    meta: {
      title: 'Delta Facilities Solutions | Warehouse, packaging & distribution crews in Laval and Montreal',
      description:
        'DFS runs warehousing, packaging and distribution work for businesses in Laval and Montreal, plus local delivery. Our crews are hired, trained and supervised by us.',
    },
    nav: { services: 'Services', how: 'How it works', careers: 'Careers', about: 'About', contact: 'Contact', cta: 'Book a consultation', switch: 'FR', switchLabel: 'Français' },
    audience: { business: 'For businesses', seekers: 'For job seekers' },
    tagline: 'Warehousing, packaging, distribution and delivery',
    hero: {
      hint: 'Move your cursor across the logo',
      hintTouch: 'Touch the logo',
      eyebrow: 'Laval & Montreal operations partner',
      title: 'Busy season? Hand the work to a DFS crew.',
      lead:
        'We run warehousing, packaging and distribution work for businesses around Laval and Montreal. We hire, train and supervise our own crews, so your team stays focused on its permanent roles.',
      primary: 'Book a consultation',
      secondary: 'Find work with DFS',
      seekersTitle: 'Steady warehouse work, with training from day one.',
      seekersLead:
        'DFS hires people for warehouse, packaging, distribution and delivery jobs in Laval and Montreal. We train you, supervise you on site and pay you on time.',
      seekersPrimary: 'Apply now',
      seekersSecondary: 'Questions? Contact us',
    },
    proof: [
      { k: 'We hire', v: 'Recruiting, screening and onboarding handled by DFS' },
      { k: 'We train', v: 'Crews trained for your site, process and safety rules' },
      { k: 'We supervise', v: 'A DFS lead on site, so you manage results, not schedules' },
    ],
    services: {
      eyebrow: 'What we do',
      title: 'Operational crews for the work that peaks',
      lead: 'Hand us a scope of work instead of a pile of job postings. We staff it, run it and answer for it.',
      items: [
        { icon: 'warehouse', title: 'Warehousing & material handling', body: 'Receiving, put-away, picking, inventory counts and loading docks, staffed for normal days and peak weeks.' },
        { icon: 'package', title: 'Packaging & co-packing', body: 'Kitting, labelling, repacking and finishing lines, with quality checks built into the shift.' },
        { icon: 'truck', title: 'Distribution & fulfillment', body: 'Order preparation, shipping and returns handling for retail, e-commerce and wholesale.' },
        { icon: 'delivery', title: 'Delivery', body: 'Local deliveries across Laval and Montreal, from your dock to your customer’s door.' },
        { icon: 'calendar', title: 'Seasonal peak coverage', body: 'Holiday rushes, launches and inventory season covered without a recruiting campaign on your side.' },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'From first call to a crew on site',
      steps: [
        { title: 'Tell us the work', body: 'A 15-minute call about volumes, shifts, location and the tasks your team needs covered.' },
        { title: 'We build the crew', body: 'DFS hires, screens and trains the people for your process, and assigns a lead.' },
        { title: 'We run it with you', body: 'The crew works under DFS supervision. You get one contact and one invoice, and scale up or down as volume changes.' },
      ],
    },
    seekers: {
      eyebrow: 'For job seekers',
      title: 'Looking for work in Laval or Montreal?',
      body: 'We hire for warehouse, packaging, distribution and delivery roles. No experience? We train you. Tell us about yourself and when you can work.',
      points: ['Training before you start', 'Day, evening and weekend shifts', 'A DFS supervisor on site with you'],
      cta: 'Apply now',
    },
    about: {
      eyebrow: 'About DFS',
      title: 'A local partner, not a job board',
      body1:
        'Delta Facilities Solutions was founded by Jatin Chehal to give businesses in the Montreal area a simpler way to handle busy seasons. Instead of recruiting for every peak, HR and operations teams hand the work to us.',
      body2:
        'We are based in the Montreal area and work across Laval, Montreal and the South Shore.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How is DFS different from a staffing agency?', a: 'A staffing agency sends you people to manage. DFS takes on a scope of work: we hire, train and supervise the crew ourselves, and you deal with one DFS contact instead of every worker.' },
        { q: 'Which areas do you cover?', a: 'Laval, Montreal and the surrounding area, including the South Shore.' },
        { q: 'How quickly can a crew start?', a: 'It depends on the size of the crew and the training your site needs. Tell us your dates on a call and we will give you a realistic start date.' },
        { q: 'Do you work in French and English?', a: 'Yes. Our supervisors and crews work in French and English.' },
      ],
    },
    ctaBand: { title: 'Planning for your next peak?', body: 'Book a 15-minute consultation and we’ll tell you how a DFS crew could cover it.', cta: 'Book a consultation' },
    contact: {
      title: 'Book a consultation',
      lead: 'Tell us about the work you need covered. We reply within one business day.',
      name: 'Your name', company: 'Company', email: 'Work email', phone: 'Phone', message: 'What work do you need covered?',
      messagePh: 'Volumes, shifts, location, start date…', send: 'Send request',
      direct: 'Prefer email?', areaLabel: 'Where we work',
    },
    careers: {
      title: 'Work with DFS',
      lead: 'Warehouse, packaging, distribution and delivery jobs in Laval and Montreal. Apply in two minutes.',
      name: 'Full name', email: 'Email', phone: 'Phone', city: 'City you live in',
      role: 'Type of work', roles: ['Warehouse / material handling', 'Packaging', 'Distribution / shipping', 'Delivery', 'Any'],
      availability: 'When can you work?', avail: ['Days', 'Evenings', 'Nights', 'Weekends'],
      experience: 'Tell us about your experience (optional)', send: 'Send application',
    },
    thanks: { title: 'Thank you!', body: 'We received your message and will get back to you within one business day.', back: 'Back to home' },
    footer: { rights: 'All rights reserved.', tagline: 'Warehousing, packaging, distribution and delivery for Laval and Montreal. Established 2022.' },
  },

  fr: {
    meta: {
      title: 'Delta Facilities Solutions | Équipes d’entreposage, d’emballage et de distribution à Laval et Montréal',
      description:
        'DFS prend en charge l’entreposage, l’emballage et la distribution pour les entreprises de Laval et Montréal, ainsi que la livraison locale. Nos équipes sont recrutées, formées et supervisées par nous.',
    },
    nav: { services: 'Services', how: 'Fonctionnement', careers: 'Carrières', about: 'À propos', contact: 'Contact', cta: 'Planifier un appel', switch: 'EN', switchLabel: 'English' },
    audience: { business: 'Pour les entreprises', seekers: 'Pour les chercheurs d’emploi' },
    tagline: 'Entreposage, emballage, distribution et livraison',
    hero: {
      hint: 'Passez votre curseur sur le logo',
      hintTouch: 'Touchez le logo',
      eyebrow: 'Partenaire des opérations à Laval et Montréal',
      title: 'Période de pointe? Confiez le travail à une équipe DFS.',
      lead:
        'Nous prenons en charge l’entreposage, l’emballage et la distribution pour les entreprises de Laval et Montréal. Nous recrutons, formons et supervisons nos propres équipes, pour que vos employés restent concentrés sur leurs postes permanents.',
      primary: 'Planifier un appel',
      secondary: 'Travailler chez DFS',
      seekersTitle: 'Du travail stable en entrepôt, avec formation dès le premier jour.',
      seekersLead:
        'DFS embauche pour des postes en entrepôt, emballage, distribution et livraison à Laval et Montréal. Nous vous formons, vous encadrons sur place et vous payons à temps.',
      seekersPrimary: 'Postuler',
      seekersSecondary: 'Des questions? Écrivez-nous',
    },
    proof: [
      { k: 'Nous recrutons', v: 'Recrutement, sélection et intégration pris en charge par DFS' },
      { k: 'Nous formons', v: 'Des équipes formées à votre site, vos procédés et vos règles de sécurité' },
      { k: 'Nous supervisons', v: 'Un chef d’équipe DFS sur place : vous gérez les résultats, pas les horaires' },
    ],
    services: {
      eyebrow: 'Nos services',
      title: 'Des équipes opérationnelles pour les périodes de pointe',
      lead: 'Confiez-nous un mandat plutôt qu’une pile d’offres d’emploi. Nous le dotons, le gérons et en répondons.',
      items: [
        { icon: 'warehouse', title: 'Entreposage et manutention', body: 'Réception, rangement, préparation, inventaires et quais de chargement, pour les journées normales comme les semaines de pointe.' },
        { icon: 'package', title: 'Emballage et co-emballage', body: 'Assemblage de trousses, étiquetage, remballage et lignes de finition, avec contrôle de la qualité intégré au quart.' },
        { icon: 'truck', title: 'Distribution et exécution des commandes', body: 'Préparation des commandes, expédition et gestion des retours pour le commerce de détail, en ligne et de gros.' },
        { icon: 'delivery', title: 'Livraison', body: 'Livraisons locales à Laval et Montréal, de votre quai jusqu’à la porte de votre client.' },
        { icon: 'calendar', title: 'Couverture des pointes saisonnières', body: 'Fêtes, lancements et inventaires couverts sans campagne de recrutement de votre côté.' },
      ],
    },
    how: {
      eyebrow: 'Fonctionnement',
      title: 'Du premier appel à une équipe sur place',
      steps: [
        { title: 'Décrivez le travail', body: 'Un appel de 15 minutes sur les volumes, les quarts, le lieu et les tâches à couvrir.' },
        { title: 'Nous formons l’équipe', body: 'DFS recrute, sélectionne et forme les personnes selon vos procédés, et nomme un chef d’équipe.' },
        { title: 'Nous la gérons avec vous', body: 'L’équipe travaille sous la supervision de DFS. Un seul contact, une seule facture, et vous ajustez selon le volume.' },
      ],
    },
    seekers: {
      eyebrow: 'Pour les chercheurs d’emploi',
      title: 'Vous cherchez du travail à Laval ou Montréal?',
      body: 'Nous embauchons pour des postes en entrepôt, emballage, distribution et livraison. Pas d’expérience? Nous vous formons. Parlez-nous de vous et de vos disponibilités.',
      points: ['Formation avant de commencer', 'Quarts de jour, de soir et de fin de semaine', 'Un superviseur DFS sur place avec vous'],
      cta: 'Postuler',
    },
    about: {
      eyebrow: 'À propos de DFS',
      title: 'Un partenaire local, pas un site d’emplois',
      body1:
        'Delta Facilities Solutions a été fondée par Jatin Chehal pour offrir aux entreprises de la région de Montréal une façon plus simple de gérer les périodes de pointe. Au lieu de recruter à chaque pointe, les équipes RH et des opérations nous confient le travail.',
      body2:
        'Nous sommes établis dans la région de Montréal et travaillons à Laval, à Montréal et sur la Rive-Sud.',
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'En quoi DFS diffère-t-elle d’une agence de placement?', a: 'Une agence vous envoie des personnes à gérer. DFS prend en charge un mandat : nous recrutons, formons et supervisons l’équipe nous-mêmes, et vous traitez avec un seul contact DFS.' },
        { q: 'Quels secteurs desservez-vous?', a: 'Laval, Montréal et les environs, y compris la Rive-Sud.' },
        { q: 'En combien de temps une équipe peut-elle commencer?', a: 'Cela dépend de la taille de l’équipe et de la formation requise. Donnez-nous vos dates lors d’un appel et nous vous proposerons une date réaliste.' },
        { q: 'Travaillez-vous en français et en anglais?', a: 'Oui. Nos superviseurs et nos équipes travaillent en français et en anglais.' },
      ],
    },
    ctaBand: { title: 'Vous planifiez votre prochaine pointe?', body: 'Planifiez un appel de 15 minutes et nous vous dirons comment une équipe DFS peut la couvrir.', cta: 'Planifier un appel' },
    contact: {
      title: 'Planifier un appel',
      lead: 'Parlez-nous du travail à couvrir. Nous répondons en un jour ouvrable.',
      name: 'Votre nom', company: 'Entreprise', email: 'Courriel professionnel', phone: 'Téléphone', message: 'Quel travail faut-il couvrir?',
      messagePh: 'Volumes, quarts, lieu, date de début…', send: 'Envoyer la demande',
      direct: 'Vous préférez le courriel?', areaLabel: 'Où nous travaillons',
    },
    careers: {
      title: 'Travailler chez DFS',
      lead: 'Des emplois en entrepôt, emballage, distribution et livraison à Laval et Montréal. Postulez en deux minutes.',
      name: 'Nom complet', email: 'Courriel', phone: 'Téléphone', city: 'Ville de résidence',
      role: 'Type de travail', roles: ['Entrepôt / manutention', 'Emballage', 'Distribution / expédition', 'Livraison', 'Peu importe'],
      availability: 'Quand pouvez-vous travailler?', avail: ['Jour', 'Soir', 'Nuit', 'Fin de semaine'],
      experience: 'Parlez-nous de votre expérience (facultatif)', send: 'Envoyer ma candidature',
    },
    thanks: { title: 'Merci!', body: 'Nous avons bien reçu votre message et vous répondrons en un jour ouvrable.', back: 'Retour à l’accueil' },
    footer: { rights: 'Tous droits réservés.', tagline: 'Entreposage, emballage, distribution et livraison pour Laval et Montréal. Fondée en 2022.' },
  },
};
