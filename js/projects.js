/**
 * ====================================================================
 * STUDIO LIEF - PROJECT DATABASE
 * Centralized, CMS-free project data repository
 * ====================================================================
 * 
 * --- EDIT PROJECTS HERE ---
 * Each project contains:
 * - id: unique URL slug (e.g. project-01, amora)
 * - number: display number (e.g. "01")
 * - title: project title
 * - client: client name
 * - category: primary service / category
 * - year: creation year
 * - heroImage: primary high-res case study cover image
 * - gallery: collection of editorial showcase images with captions
 * - portfolioTitle: clean title for the portfolio overview
 * - portfolioImages: four front/back image pairs for the portfolio hover panels
 * - description: project-specific Over accordion text
 * - service: project-specific Service accordion text
 * - detailGallery: masonry gallery image paths for project.html
 * - intro: opening summary of the project
 * - about: detailed case study text describing the concept and execution
 * - services: list of delivered services
 */

const PROJECTS = [
  {
    id: "project-01",
    slug: "amora",
    number: "01",
    title: "Project 01 — Die van Beleid",
    client: "Amora Concept",
    category: "Branding Design Services",
    year: "2024",
    heroImage: "images/projects/die-van-beleid/project01.jpg",
    gallery: [
      { src: "images/projects/die-van-beleid/project01.jpg", caption: "Projectbeeld 01" },
      { src: "images/projects/die-van-beleid/project02.jpg", caption: "Projectbeeld 02" },
      { src: "images/projects/die-van-beleid/project03.jpg", caption: "Projectbeeld 03" },
      { src: "images/projects/die-van-beleid/project04.jpg", caption: "Projectbeeld 04" },
      { src: "images/projects/die-van-beleid/project05.jpg", caption: "Projectbeeld 05" },
      { src: "images/projects/die-van-beleid/project06.jpg", caption: "Projectbeeld 06" },
      { src: "images/projects/die-van-beleid/project07.jpg", caption: "Projectbeeld 07" },
      { src: "images/projects/die-van-beleid/project08.jpg", caption: "Projectbeeld 08" },
      { src: "images/projects/die-van-beleid/project09.jpg", caption: "Projectbeeld 09" }
    ],
    portfolioTitle: "Die van Beleid",
    portfolioImages: [
      { front: "images/projects/die-van-beleid/project01.jpg", frontPosition: "48% 44%", back: "images/projects/die-van-beleid/project02.jpg", backPosition: "45% 42%" },
      { front: "images/projects/die-van-beleid/project03.jpg", frontPosition: "50% 42%", back: "images/projects/die-van-beleid/project04.jpg", backPosition: "52% 32%" },
      { front: "images/projects/die-van-beleid/project05.jpg", frontPosition: "50% 42%", back: "images/projects/die-van-beleid/project06.jpg", backPosition: "52% 44%" },
      { front: "images/projects/die-van-beleid/project07.jpg", frontPosition: "50% 42%", back: "images/projects/die-van-beleid/project08.jpg", backPosition: "50% 18%" }
    ],
    description: "Voor Die van Beleid mocht ik een branding ontwikkelen die past bij de persoonlijke aanpak van haar als beleidsadviseur. De opdrachtgever wilde een professionele uitstraling die laat zien wie ze is en hoe zij haar werk aanpakt. Het doel was om een visuele identiteit te creëren die niet alleen herkenbaar is, maar ook iets vertelt over de persoon achter het bedrijf.\n\nHet uitgangspunt van het ontwerp is de combinatie van een vingerafdruk en een tekstballon. De vingerafdruk staat voor de persoonlijke touch die zij meebrengt, terwijl de tekstballon verwijst naar communicatie, beleid en het delen van ideeën. Door deze elementen samen te brengen, ontstond een beeldmerk dat haar manier van werken op een herkenbare manier vertaalt naar een visueel concept.\n\nDe donkerblauwe kleur en de combinatie van een elegant lettertype met een krachtige, moderne typografie zorgen voor een professionele uitstraling met karakter. Vanuit dit concept heb ik een primary logo, secondary logo en brandmark ontwikkeld. Ook het bijpassende drukwerk heb ik ontworpen, zodat de branding op verschillende manieren toegepast kan worden.",
    service: "Branding design & Drukwerk design",
    detailGallery: [
      "images/projects/die-van-beleid/project01.jpg",
      "images/projects/die-van-beleid/project02.jpg",
      "images/projects/die-van-beleid/project03.jpg",
      "images/projects/die-van-beleid/project04.jpg",
      "images/projects/die-van-beleid/project05.jpg",
      "images/projects/die-van-beleid/project06.jpg",
      "images/projects/die-van-beleid/project07.jpg",
      "images/projects/die-van-beleid/project08.jpg",
      "images/projects/die-van-beleid/project09.jpg"
    ],
    intro: "Een complete, hedendaagse merkidentiteit en verpakkingslijn voor lifestyle concept Amora.",
    about: "Voor Amora creëerden we een uitgesproken merkwereld waarin hedendaagse elegantie en een speels randje elkaar ontmoeten. Van billboard campagnes in de stad tot tactiele verpakkingen en winkelpresentaties: elk contactmoment ademt dezelfde stijlvolle en zelfverzekerde energie.",
    services: ["Brand Strategy", "Logo Design & Monogram", "Packaging Design", "Campaign Assets", "Brand Guidelines"]
  },
  {
    id: "project-02",
    slug: "studio-home-s",
    number: "02",
    title: "Project 02 — Onafhankelijk Dames Dispuut Amora",
    client: "Studio Home S",
    category: "Drukwerk & Editorial Services",
    year: "2024",
    heroImage: "images/projects/onafhankelijk-dames-dispuut-amora/project01.jpg",
    gallery: [
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project01.jpg", caption: "Projectbeeld 01" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project02.jpeg", caption: "Projectbeeld 02" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project03.jpeg", caption: "Projectbeeld 03" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project04.jpeg", caption: "Projectbeeld 04" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project05.jpg", caption: "Projectbeeld 05" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project06.jpg", caption: "Projectbeeld 06" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project07.jpg", caption: "Projectbeeld 07" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project08.jpg", caption: "Projectbeeld 08" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project09.jpg", caption: "Projectbeeld 09" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project10.jpg", caption: "Projectbeeld 10" },
      { src: "images/projects/onafhankelijk-dames-dispuut-amora/project11.jpg", caption: "Projectbeeld 11" }
    ],
    portfolioTitle: "Onafhankelijk Dames Dispuut Amora",
    portfolioImages: [
      { front: "images/projects/onafhankelijk-dames-dispuut-amora/project01.jpg", frontPosition: "50% 48%", back: "images/projects/onafhankelijk-dames-dispuut-amora/project02.jpeg", backPosition: "50% 42%" },
      { front: "images/projects/onafhankelijk-dames-dispuut-amora/project08.jpg", frontPosition: "50% 44%", back: "images/projects/onafhankelijk-dames-dispuut-amora/project04.jpeg", backPosition: "58% 50%" },
      { front: "images/projects/onafhankelijk-dames-dispuut-amora/project05.jpg", frontPosition: "50% 46%", back: "images/projects/onafhankelijk-dames-dispuut-amora/project06.jpg", backPosition: "50% 44%" },
      { front: "images/projects/onafhankelijk-dames-dispuut-amora/project07.jpg", frontPosition: "48% 48%", back: "images/projects/onafhankelijk-dames-dispuut-amora/project03.jpeg", backPosition: "50% 45%" }
    ],
    description: "Toen Onafhankelijk Dames Dispuut Amora werd opgericht, was er behoefte aan een eigen visuele identiteit. Een uitstraling waarin het traditionele karakter van een dispuut samenkomt met een groep meiden met een eigenzinnig randje. Het mocht elegant en vrouwelijk zijn, maar tegelijkertijd ook stoer en een tikkeltje uitgesproken.\n\nVanuit deze combinatie ben ik aan de slag gegaan met het concept en de visuele stijl. De inspiratie bestond uit een mix van feestelijkheid, glamour en klasse, met invloeden zoals panterprints, opvallende neonverlichting en uitgesproken fotografie. De diepe bordeauxrode kleur vormt de basis van de branding en geeft het merk een krachtige uitstraling. De elegante typografie zorgt daarbij voor een klassiek contrast. Ook Breda kreeg een plek in het ontwerp: Het stadswapen. De drie kruisjes in het logo verwijzen naar de stad en maken de identiteit extra herkenbaar.\n\nDeze combinatie van elementen zorgt ervoor dat Amora niet in één hokje te plaatsen is. De branding brengt verschillende kanten samen en geeft het dispuut een eigen gezicht. Het resultaat is een visuele stijl die zowel de traditionele basis als het eigen karakter van de meiden weerspiegelt.\n\nNaast de online uitingen heb ik ook verschillende drukwerkontwerpen gemaakt, waaronder posters. Zo komt de identiteit niet alleen online terug, maar is deze ook zichtbaar tijdens activiteiten en binnen het dispuut. Juist de combinatie van elegantie, een stoer randje en herkenbare details maakt dit een project waar ik met veel plezier aan heb gewerkt.",
    service: "Branding design, Drukwerk design & Social Media design",
    detailGallery: [
      "images/projects/onafhankelijk-dames-dispuut-amora/project01.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project02.jpeg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project03.jpeg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project04.jpeg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project05.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project06.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project07.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project08.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project09.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project10.jpg",
      "images/projects/onafhankelijk-dames-dispuut-amora/project11.jpg"
    ],
    intro: "Verfijnde typografie en tactiel drukwerk voor interieurarchitectuurstudio Studio Home S.",
    about: "Studio Home S realiseert ingetogen, harmonieuze interieurs. De visuele identiteit en redactionele presentatiemappen weerspiegelen deze rust met royale witruimtes, serene serifs en zorgvuldig geselecteerde papiersoorten met reliëfdruk.",
    services: ["Visual Identity", "Editorial Lookbook", "Stationery & Drukwerk", "Signage", "Art Direction"]
  },
  {
    id: "project-03",
    slug: "die-van-beleid",
    number: "03",
    title: "Project 03 — B-Welcome",
    client: "Die van Beleid Consultancy",
    category: "Brand Identity Services",
    year: "2023",
    heroImage: "images/projects/b-welcome/project01.jpg",
    gallery: [
      { src: "images/projects/b-welcome/project01.jpg", caption: "Projectbeeld 01" },
      { src: "images/projects/b-welcome/project02.jpg", caption: "Projectbeeld 02" },
      { src: "images/projects/b-welcome/project03.jpg", caption: "Projectbeeld 03" },
      { src: "images/projects/b-welcome/project04.jpg", caption: "Projectbeeld 04" },
      { src: "images/projects/b-welcome/project05.jpg", caption: "Projectbeeld 05" },
      { src: "images/projects/b-welcome/project06.jpg", caption: "Projectbeeld 06" },
      { src: "images/projects/b-welcome/project07.jpg", caption: "Projectbeeld 07" },
      { src: "images/projects/b-welcome/project08.jpg", caption: "Projectbeeld 08" }
    ],
    portfolioTitle: "B-Welcome",
    portfolioImages: [
      { front: "images/projects/b-welcome/project01.jpg", frontPosition: "50% 48%", back: "images/projects/b-welcome/project02.jpg", backPosition: "50% 42%" },
      { front: "images/projects/b-welcome/project03.jpg", frontPosition: "50% 44%", back: "images/projects/b-welcome/project04.jpg", backPosition: "50% 44%" },
      { front: "images/projects/b-welcome/project05.jpg", frontPosition: "50% 45%", back: "images/projects/b-welcome/project06.jpg", backPosition: "50% 45%" },
      { front: "images/projects/b-welcome/project07.jpg", frontPosition: "50% 44%", back: "images/projects/b-welcome/project08.jpg", backPosition: "50% 50%" }
    ],
    description: "Voor B-Welcome mocht ik een visuele identiteit ontwikkelen voor een bed & breakfast aan de kust in 's-Gravenzande. De wens was een uitstraling die rust, warmte en gastvrijheid uitstraalt. Een plek waar je even kunt ontsnappen aan de dagelijkse drukte en helemaal tot rust kunt komen. Het was voor mij belangrijk om dat gevoel niet alleen in de accommodatie zelf, maar ook in de branding terug te laten komen.\n\nDe basis van het ontwerp bestaat uit natuurlijke kleuren, warme aardetinten en zachte groentinten. In combinatie met de rustige typografie ontstaat een stijlvolle uitstraling die aansluit bij de sfeer van de B&B. De kleuren en materialen vormen samen een rustig geheel, zonder dat het merk zijn eigen karakter verliest.\n\nVanuit dit concept heb ik de visuele identiteit uitgewerkt en vastgelegd in een brandbook. Hierin komen onder andere het logo, de kleuren en de typografie samen. Zo heeft B-Welcome een duidelijke basis om de branding op een consistente manier toe te passen. Ook het bijpassende drukwerk en de verschillende merktoepassingen heb ik ontworpen.\n\nWat ik mooi vind aan dit project, is hoe de visuele identiteit het gevoel van de locatie ondersteunt. Van de eerste kennismaking met het merk tot de kleine details tijdens een verblijf. Alles draagt bij aan een warme en herkenbare uitstraling.",
    service: "Branding design & Drukwerk design",
    detailGallery: [
      "images/projects/b-welcome/project01.jpg",
      "images/projects/b-welcome/project02.jpg",
      "images/projects/b-welcome/project03.jpg",
      "images/projects/b-welcome/project04.jpg",
      "images/projects/b-welcome/project05.jpg",
      "images/projects/b-welcome/project06.jpg",
      "images/projects/b-welcome/project07.jpg",
      "images/projects/b-welcome/project08.jpg"
    ],
    intro: "Een toegankelijke en energieke merkidentiteit voor een innovatief adviesbureau.",
    about: "Complexe beleidsthema's helder en visueel aantrekkelijk communiceren: dat was het doel voor Die van Beleid. Studio Lief ontwikkelde een modulaire huisstijl met krachtige kleurvlakken en redactionele templates.",
    services: ["Merkidentiteit", "Corporate Guidelines", "Ruimtelijke Belettering", "Rapportage Templates"]
  },
  {
    id: "project-04",
    slug: "we-create",
    number: "04",
    title: "Project 04 — Studio Stylis",
    client: "We Create Agency",
    category: "Social Media & Campaign Services",
    year: "2024",
    heroImage: "images/projects/studio-stylis/project01.jpg",
    gallery: [
      { src: "images/projects/studio-stylis/project01.jpg", caption: "Projectbeeld 01" },
      { src: "images/projects/studio-stylis/project02.jpg", caption: "Projectbeeld 02" },
      { src: "images/projects/studio-stylis/project03.jpg", caption: "Projectbeeld 03" },
      { src: "images/projects/studio-stylis/project04.jpg", caption: "Projectbeeld 04" },
      { src: "images/projects/studio-stylis/project05.jpg", caption: "Projectbeeld 05" },
      { src: "images/projects/studio-stylis/project06.jpg", caption: "Projectbeeld 06" },
      { src: "images/projects/studio-stylis/project07.jpg", caption: "Projectbeeld 07" },
      { src: "images/projects/studio-stylis/project08.jpg", caption: "Projectbeeld 08" },
      { src: "images/projects/studio-stylis/project09.jpg", caption: "Projectbeeld 09" },
      { src: "images/projects/studio-stylis/project10.jpg", caption: "Projectbeeld 10" },
      { src: "images/projects/studio-stylis/project11.jpg", caption: "Projectbeeld 11" }
    ],
    portfolioTitle: "Studio Stylis",
    portfolioImages: [
      { front: "images/projects/studio-stylis/project04.jpg", frontPosition: "50% 45%", back: "images/projects/studio-stylis/project02.jpg", backPosition: "50% 44%" },
      { front: "images/projects/studio-stylis/project03.jpg", frontPosition: "50% 44%", back: "images/projects/studio-stylis/project01.jpg", backPosition: "50% 58%" },
      { front: "images/projects/studio-stylis/project05.jpg", frontPosition: "52% 50%", back: "images/projects/studio-stylis/project06.jpg", backPosition: "50% 45%" },
      { front: "images/projects/studio-stylis/project07.jpg", frontPosition: "50% 46%", back: "images/projects/studio-stylis/project08.jpg", backPosition: "50% 48%" }
    ],
    description: "Studio Stylis is er voor jonge vrouwen die er stralend en stijlvol uit willen zien. De opdrachtgever kwam bij mij met de wens om haar bestaande logo te redesignen. Ze had haar oude logo zelf in Canva gemaakt, maar was toe aan een professionelere uitstraling die beter aansloot bij haar merk. Het mocht hip en modern zijn, opvallen en tegelijkertijd rustig blijven ogen.\n\nBij het ontwikkelen van de nieuwe branding heb ik gezocht naar een balans tussen elegantie en een uitgesproken karakter. De zachte roze tinten vormen de basis en geven het merk een warme, vrouwelijke uitstraling. De opvallende oranje kleur zorgt juist voor contrast en geeft de identiteit een eigenzinnige twist. Ook de elegante, sierlijke typografie draagt bij aan het stijlvolle karakter van Studio Stylis.\n\nNaast het vernieuwde logo heb ik de volledige branding uitgewerkt en de keuzes vastgelegd in een brandbook. Hierin komen de verschillende onderdelen van de visuele identiteit samen, zodat het merk een duidelijke basis heeft voor alle toekomstige uitingen. Ook het bijpassende drukwerk heb ik ontworpen, zodat de stijl op verschillende manieren tot leven komt.\n\nHet resultaat is een visuele identiteit die vrouwelijk en stijlvol is, maar tegelijkertijd durft op te vallen. Juist die combinatie maakt de branding herkenbaar en passend bij de doelgroep van Studio Stylis. Een mooi voorbeeld van hoe een bestaande uitstraling kan doorgroeien naar een merkidentiteit met een eigen gezicht.",
    service: "Branding design & Drukwerk design",
    detailGallery: [
      "images/projects/studio-stylis/project01.jpg",
      "images/projects/studio-stylis/project02.jpg",
      "images/projects/studio-stylis/project03.jpg",
      "images/projects/studio-stylis/project04.jpg",
      "images/projects/studio-stylis/project05.jpg",
      "images/projects/studio-stylis/project06.jpg",
      "images/projects/studio-stylis/project07.jpg",
      "images/projects/studio-stylis/project08.jpg",
      "images/projects/studio-stylis/project09.jpg",
      "images/projects/studio-stylis/project10.jpg",
      "images/projects/studio-stylis/project11.jpg"
    ],
    intro: "Scroll-stoppende campagne visuals en dynamische billboards voor creatief collectief We Create.",
    about: "Voor de seizoenscampagne van We Create zochten we naar maximale visuele impact in de openbare ruimte en op social media. Gedurfde typografie op kobaltblauw en kinetische layouts maken deze campagne onmogelijk te negeren.",
    services: ["Campagne Concept", "Out-of-Home Billboards", "Social Media Templates", "Motion Assets"]
  },
  {
    id: "project-06",
    slug: "studio-lief",
    number: "06",
    title: "Project 06 — Smash & Dip",
    client: "Studio Lief (Self-Branding)",
    category: "Brand & Packaging Services",
    year: "2024",
    heroImage: "images/projects/smash-dip/project01.jpg",
    gallery: [
      { src: "images/projects/smash-dip/project01.jpg", caption: "Projectbeeld 01" },
      { src: "images/projects/smash-dip/project02.jpg", caption: "Projectbeeld 02" },
      { src: "images/projects/smash-dip/project03.jpg", caption: "Projectbeeld 03" },
      { src: "images/projects/smash-dip/project04.jpg", caption: "Projectbeeld 04" },
      { src: "images/projects/smash-dip/project05.jpg", caption: "Projectbeeld 05" },
      { src: "images/projects/smash-dip/project06.jpg", caption: "Projectbeeld 06" },
      { src: "images/projects/smash-dip/project07.jpg", caption: "Projectbeeld 07" },
      { src: "images/projects/smash-dip/project08.png", caption: "Projectbeeld 08" },
      { src: "images/projects/smash-dip/project09.jpg", caption: "Projectbeeld 09" }
    ],
    portfolioTitle: "Smash & Dip",
    portfolioImages: [
      { front: "images/projects/smash-dip/project01.jpg", frontPosition: "50% 42%", back: "images/projects/smash-dip/project02.jpg", backPosition: "50% 46%" },
      { front: "images/projects/smash-dip/project03.jpg", frontPosition: "50% 42%", back: "images/projects/smash-dip/project04.jpg", backPosition: "50% 45%" },
      { front: "images/projects/smash-dip/project06.jpg", frontPosition: "50% 45%", back: "images/projects/smash-dip/project05.jpg", backPosition: "50% 44%" },
      { front: "images/projects/smash-dip/project07.jpg", frontPosition: "50% 45%", back: "images/projects/smash-dip/project08.png", backPosition: "50% 48%" }
    ],
    description: "Voor Smash & Dip, een smashburgerzaak in Apeldoorn, mocht ik aan de slag met een complete branding. De opdrachtgever wilde een unieke visuele identiteit die aansluit bij het concept van de zaak en het menu. Met burgers geïnspireerd op verschillende plekken in de wereld vormt dat internationale karakter een belangrijk onderdeel van het merk.\n\nBij het ontwikkelen van de branding heb ik gekozen voor een uitgesproken combinatie van zwart en meloen groen. De groene kleur springt direct in het oog tegen de donkere basis en zorgt voor een sterk contrast. Het geblokte patroon geeft de identiteit daarnaast een speels en herkenbaar element. Samen met de moderne typografie ontstaat een unieke uitstraling die goed past bij het karakter van Smash & Dip.\n\nNaast de visuele identiteit heb ik ook verschillende toepassingen ontworpen, waaronder het menu en het verpakkingsmateriaal. Denk aan takeaway-tasjes en doosjes voor de smashburgers. Daarbij was het belangrijk dat de branding niet alleen opvalt op papier of op een scherm, maar ook goed werkt op de verpakkingen waarmee klanten hun bestelling meenemen.",
    service: "Branding design & Drukwerk design",
    detailGallery: [
      "images/projects/smash-dip/project01.jpg",
      "images/projects/smash-dip/project02.jpg",
      "images/projects/smash-dip/project03.jpg",
      "images/projects/smash-dip/project04.jpg",
      "images/projects/smash-dip/project05.jpg",
      "images/projects/smash-dip/project06.jpg",
      "images/projects/smash-dip/project07.jpg",
      "images/projects/smash-dip/project08.png",
      "images/projects/smash-dip/project09.jpg"
    ],
    intro: "Vrolijk, gedurfd en met liefde voor het ambacht: de complete visuele wereld van Studio Lief.",
    about: "Het vormgeven van je eigen studio is de ultieme ontwerpvrijheid. Studio Lief combineert strakke, bold display letters met sierlijke cursieve serifs, verrijkt met zacht lila, diep navy en een knallend neon geel accent.",
    services: ["Merkstrategie", "Logo & Monogram", "Brandbook", "Website Design", "Stationery"]
  },
  {
    id: "project-05",
    slug: "b-mobile",
    number: "05",
    title: "Project 05 — Just Another Media Company",
    client: "B Mobile Solutions",
    category: "Digital & UI Design",
    year: "2023",
    heroImage: "images/projects/just-another-media-company/project01.jpg",
    gallery: [
      { src: "images/projects/just-another-media-company/project01.jpg", caption: "Projectbeeld 01" },
      { src: "images/projects/just-another-media-company/project02.jpg", caption: "Projectbeeld 02" },
      { src: "images/projects/just-another-media-company/project03.jpg", caption: "Projectbeeld 03" },
      { src: "images/projects/just-another-media-company/project04.jpg", caption: "Projectbeeld 04" },
      { src: "images/projects/just-another-media-company/project05.jpg", caption: "Projectbeeld 05" },
      { src: "images/projects/just-another-media-company/project06.jpg", caption: "Projectbeeld 06" },
      { src: "images/projects/just-another-media-company/project07.jpg", caption: "Projectbeeld 07" },
      { src: "images/projects/just-another-media-company/project08.jpg", caption: "Projectbeeld 08" },
      { src: "images/projects/just-another-media-company/project09.jpg", caption: "Projectbeeld 09" }
    ],
    portfolioTitle: "Just Another Media Company",
    portfolioImages: [
      { front: "images/projects/just-another-media-company/project01.jpg", frontPosition: "50% 42%", back: "images/projects/just-another-media-company/project02.jpg", backPosition: "50% 48%" },
      { front: "images/projects/just-another-media-company/project03.jpg", frontPosition: "50% 48%", back: "images/projects/just-another-media-company/project04.jpg", backPosition: "50% 45%" },
      { front: "images/projects/just-another-media-company/project05.jpg", frontPosition: "50% 45%", back: "images/projects/just-another-media-company/project06.jpg", backPosition: "50% 44%" },
      { front: "images/projects/just-another-media-company/project07.jpg", frontPosition: "50% 42%", back: "images/projects/just-another-media-company/project08.jpg", backPosition: "50% 48%" }
    ],
    description: "Van september 2022 tot en met februari 2023 en januari 2024 tot en met juni 2024 liep ik stage bij Just Another Media Company. Hier kreeg ik de kans om mee te werken aan projecten voor verschillende bekende platformen en merken, waaronder RUMAG, SoWhat!, #Darum! en ComplexNL. Een periode waarin ik niet alleen veel ervaring heb opgedaan, maar ook ontdekte hoe veelzijdig en dynamisch de mediawereld is.\n\nBinnen het bedrijf werkte ik mee aan uiteenlopende campagnes en creatieve producties. Geen project was hetzelfde. De ene keer ontwierp ik socialmediaposts voor een campagne, de andere keer werkte ik aan logo's of visuele uitingen voor een nieuw programma. Ook merchandise, zoals sweaters en T-shirts voor een Koningsdagcollectie, hoorde bij de werkzaamheden. Die afwisseling vroeg telkens om een andere aanpak en gaf me de ruimte om met verschillende stijlen en concepten te werken.\n\nWat ik interessant vond aan deze stage, was het proces achter een campagne. Verschillende onderdelen, van de eerste visuele ideeën tot social content en merchandise, moesten samen één herkenbaar verhaal vertellen. Ik leerde daardoor niet alleen meer over grafisch vormgeven, maar kreeg ook een beter beeld van hoe creatieve concepten binnen de mediawereld worden ontwikkeld en toegepast.\n\nIk kijk met veel plezier terug op deze periode. Het was een waardevolle kennismaking met een wereld waarin creativiteit, actualiteit en snel schakelen samenkomen. De projecten waaraan ik heb mogen bijdragen, hebben me geholpen om mezelf verder te ontwikkelen als designer en hebben mijn enthousiasme voor de creatieve mediawereld alleen maar groter gemaakt.",
    service: "Social Media design, Drukwerk design & Campagne design",
    detailGallery: [
      "images/projects/just-another-media-company/project01.jpg",
      "images/projects/just-another-media-company/project02.jpg",
      "images/projects/just-another-media-company/project03.jpg",
      "images/projects/just-another-media-company/project04.jpg",
      "images/projects/just-another-media-company/project05.jpg",
      "images/projects/just-another-media-company/project06.jpg",
      "images/projects/just-another-media-company/project07.jpg",
      "images/projects/just-another-media-company/project08.jpg",
      "images/projects/just-another-media-company/project09.jpg"
    ],
    intro: "Innovatief digitaal design en frisse interface-elementen voor stedelijke mobiliteit.",
    about: "B Mobile maakt stedelijk reizen intuïtief en snel. We ontwikkelden een visueel systeem waarin zachte vormen, contrasterende badges en een herkenbaar monogram centraal staan.",
    services: ["Digital Brand Guidelines", "UI/UX Concept", "Design System", "App Iconen"]
  },
{
    "id": "project-07",
    "slug": "mora",
    "showInFavorites": false,
    "number": "07",
    "title": "Mora",
    "portfolioTitle": "Mora",
    "client": "Mora",
    "category": "Campagne design",
    "heroImage": "images/projects/mora/project01.png",
    "gallery": [
        {
            "src": "images/projects/mora/project01.png",
            "caption": "Mora campagneconcept — projectbeeld 01"
        },
        {
            "src": "images/projects/mora/project02.png",
            "caption": "Mora campagneconcept — projectbeeld 02"
        },
        {
            "src": "images/projects/mora/project03.png",
            "caption": "Mora campagneconcept — projectbeeld 03"
        },
        {
            "src": "images/projects/mora/project04.png",
            "caption": "Mora campagneconcept — projectbeeld 04"
        },
        {
            "src": "images/projects/mora/project05.png",
            "caption": "Mora campagneconcept — projectbeeld 05"
        },
        {
            "src": "images/projects/mora/project06.png",
            "caption": "Mora campagneconcept — projectbeeld 06"
        },
        {
            "src": "images/projects/mora/project07.png",
            "caption": "Mora campagneconcept — projectbeeld 07"
        },
        {
            "src": "images/projects/mora/project08.png",
            "caption": "Mora campagneconcept — projectbeeld 08"
        }
    ],
    "portfolioImages": [
        {
            "front": "images/projects/mora/project01.png",
            "frontMobile": "images/projects/mora/project01-mobile.jpg",
            "back": "images/projects/mora/project02.png",
            "backMobile": "images/projects/mora/project02-mobile.jpg"
        },
        {
            "front": "images/projects/mora/project03.png",
            "frontMobile": "images/projects/mora/project03-mobile.jpg",
            "back": "images/projects/mora/project04.png",
            "backMobile": "images/projects/mora/project04-mobile.jpg"
        },
        {
            "front": "images/projects/mora/project05.png",
            "frontMobile": "images/projects/mora/project05-mobile.jpg",
            "back": "images/projects/mora/project06.png",
            "backMobile": "images/projects/mora/project06-mobile.jpg"
        },
        {
            "front": "images/projects/mora/project07.png",
            "frontMobile": "images/projects/mora/project07-mobile.jpg",
            "back": "images/projects/mora/project08.png",
            "backMobile": "images/projects/mora/project08-mobile.jpg"
        }
    ],
    "description": "Voor Mora mocht ik een creatief campagneconcept bedenken voor 1 april. Vanuit de wens om een jongere doelgroep aan te spreken, ben ik gaan kijken naar de manier waarop jongeren tegenwoordig nieuws, roddels en updates volgen. Social media speelt hierin een grote rol. Vooral juicekanalen zijn populair en weten met opvallende verhalen en 'gelekte' beelden snel de aandacht te trekken.\n\nWat is dan de grap? Cora, het al ruim 40 jaar bekende gezicht van Mora, wordt betrapt bij de concurrent. In een zogenaamd gelekte video is te zien hoe ze stiekem Kwekkeboom-kroketten zit te eten, gewoon in haar vertrouwde Mora-werkkleding. Een juicekanaal deelt de beelden met een opvallend bericht waarin wordt gesuggereerd dat Cora na al die jaren haar snackliefde ergens anders heeft gevonden. Is dit het einde van haar jarenlange loyaliteit aan Mora?\n\nDe keuze voor een juicekanaal als afzender is bewust gemaakt. In plaats van de grap rechtstreeks via de eigen social media kanalen van Mora te verspreiden, wordt het verhaal gebracht alsof het door een onafhankelijk juicekanaal is ontdekt. Hierdoor krijgt het de uitstraling van een echte roddel en ontstaat er nieuwsgierigheid bij de doelgroep.\n\nDoor een herkenbaar merkpersonage in een onverwachte situatie te plaatsen en gebruik te maken van een populaire vorm van social media content, ontstaat een 1-april grap die perfect aansluit bij de huidige online cultuur. Een beetje humor en een flinke dosis lef zorgt ervoor dat Mora op een verrassende manier onder de aandacht komt.",
    "service": "Campagne design",
    "detailGallery": [
        "images/projects/mora/project01.png",
        "images/projects/mora/project02.png",
        "images/projects/mora/project03.png",
        "images/projects/mora/project04.png",
        "images/projects/mora/project05.png",
        "images/projects/mora/project06.png",
        "images/projects/mora/project07.png",
        "images/projects/mora/project08.png"
    ],
    "seoTitle": "Mora | Campagne Design | Studio Lief",
    "seoDescription": "Creatief 1-april campagneconcept voor Mora, geïnspireerd op juicekanalen, social media en een verrassende roddel rondom Cora."
}

];

/* ADD NEW PROJECT HERE */
/*
PROJECTS.push({
  id: "project-07",
  slug: "nieuw-project",
  number: "07",
  title: "Project 07 — Nieuw Project",
  client: "Klantnaam",
  category: "Branding Design Services",
  year: "2025",
  heroImage: "images/afbeelding.jpg",
  gallery: [
    { src: "images/afbeelding.jpg", caption: "Bijschrift" }
  ],
  intro: "Korte introductie...",
  about: "Uitgebreide case study omschrijving...",
  services: ["Logo", "Huisstijl", "Website"]
});
*/

/**
 * Helper Functions
 */
function getAllProjects() {
  return PROJECTS;
}

function getProjectById(identifier) {
  if (!identifier) return PROJECTS[0];
  const query = identifier.toLowerCase().trim();
  const found = PROJECTS.find(p => p.id.toLowerCase() === query || (p.slug && p.slug.toLowerCase() === query));
  return found || PROJECTS[0];
}

function getNextProject(identifier) {
  const current = getProjectById(identifier);
  const currentIndex = PROJECTS.findIndex(p => p.id === current.id);
  if (currentIndex === -1 || currentIndex === PROJECTS.length - 1) {
    return PROJECTS[0];
  }
  return PROJECTS[currentIndex + 1];
}

function getPreviousProject(identifier) {
  const current = getProjectById(identifier);
  const currentIndex = PROJECTS.findIndex(p => p.id === current.id);
  if (currentIndex <= 0) {
    return PROJECTS[PROJECTS.length - 1];
  }
  return PROJECTS[currentIndex - 1];
}

const STUDIO_LIEF_API = {
  data: PROJECTS,
  getAll: getAllProjects,
  getById: getProjectById,
  getNext: getNextProject,
  getPrevious: getPreviousProject
};

if (typeof window !== "undefined") {
  window.STUDIO_LIEF_PROJECTS = STUDIO_LIEF_API;
}
if (typeof globalThis !== "undefined") {
  globalThis.STUDIO_LIEF_PROJECTS = STUDIO_LIEF_API;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = STUDIO_LIEF_API;
}
