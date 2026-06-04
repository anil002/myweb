import { 
  Experience, 
  Consultancy, 
  Publication, 
  Certification, 
  Skill, 
  Education, 
  Reference 
} from './types';

export const personalInfo = {
  name: "Dr. Anil Kumar Singh",
  title: "Lead Climate & Agritech Scientist",
  subTitle: "Doctor of Earth & Planetary Science",
  email: "singhanil854@gmail.com",
  phone: "+91-7011502494",
  location: "Gorakhpur, India / Global",
  linkedin: "https://linkedin.com/in/anil-kumar-singh-phd-b192554a",
  researchgate: "https://www.researchgate.net/profile/Anil-Kumar-Singh-6",
  github: "https://github.com/anil002",
  bio: "Dr. Anil Kumar Singh is an accomplished Climate Risk and Agritech consultant with over 15 years of expertise leveraging cutting-edge remote sensing and GIS systems to engineer agricultural solutions and combat climate challenges. Holding a PhD in Earth & Planetary Science, he specializes in modeling satellite telemetry and meteorological data to render high-fidelity, actionable intelligence. His career spans building predictive models for soil chemistry across Europe/US, architecting wildfire risks trackers, conceptualizing parametric insurance frameworks to safeguard extreme-weather exposed farming zones, and consulting for institutions like the Asian Development Bank (ADB).",
  stats: [
    { label: "Years of Research & Consulting", value: "15+" },
    { label: "Peer-Reviewed Publications", value: "25+" },
    { label: "Total Research Impact Factor Sum", value: "65.4" },
    { label: "Global Consulting Partners", value: "10+" },
  ]
};

export const skills: Skill[] = [
  // Technical
  { category: "technical", name: "Remote Sensing (Telemetry & Spectral)" },
  { category: "technical", name: "Geographic Information Systems (GIS)" },
  { category: "technical", name: "Spatial Modeling & Databases" },
  { category: "technical", name: "Digital Image Processing" },
  { category: "technical", name: "ESRI, ArcGIS, QGIS, ENVI" },
  { category: "technical", name: "Python (Xarray, Pandas, NumPy, Scikit-Learn)" },
  { category: "technical", name: "Hydrological & Atmospheric Modeling" },
  { category: "technical", name: "Machine Learning / Deep Learning" },
  
  // Agritech
  { category: "agritech", name: "Precision Irrigation Engineering" },
  { category: "agritech", name: "Predictive Crop Yield Modeling" },
  { category: "agritech", name: "AI Crop Disease Classification" },
  { category: "agritech", name: "Drought & Flood Risk Vulnerability" },
  { category: "agritech", name: "Carbon Sequestration & Biomass Estimation" },
  { category: "agritech", name: "Wildfire Forecasting Systems" },
  { category: "agritech", name: "Parametric Farm Insurance Architecting" },
  { category: "agritech", name: "Regional Air Quality Monitoring" },
  
  // Competency
  { category: "competency", name: "Multivariate Data Visualization" },
  { category: "competency", name: "Academic Research & Peer Reviewing" },
  { category: "competency", name: "Stakeholder Technical Advisory" },
  { category: "competency", name: "Geospatial Spatial Analysis" },
  { category: "competency", name: "Grant / Technical Writing" }
];

export const experiences: Experience[] = [
  {
    id: "exp_shriram",
    title: "Senior Analyst (AI & Analytics)",
    company: "Shriram General Insurance Co. Ltd.",
    duration: "Jan 2024 - Present",
    location: "Jaipur, India / Hybrid",
    logoType: "shriram",
    points: [
      "Serving as Senior Analyst heading key Artificial Intelligence solutions, leading the research, architecting, and deployment of enterprise-grade AI models.",
      "Designing and deploying advanced conversational AI agents to automate customer pathways and operational workflows.",
      "Developing cutting-edge machine learning fraud detection models to identify high-risk claims, anomalies, and fraudulent insurer risks with high precision.",
      "Engineering end-to-end AI analytics pipelines to process large-scale insurance telematics and extract actionable business intelligence."
    ]
  },
  {
    id: "exp1",
    title: "Agriculture & Climate Tech Consultant (Freelance)",
    company: "Global Agritech & Weather Risk Advisory",
    duration: "Jul 2023 - Present",
    location: "Global Remote",
    logoType: "consultant",
    points: [
      "Providing high-precision crop field maps and agroclimatic actionable insights to institutional clients using satellite remote sensing and spatial GIS analysis.",
      "Modeling agricultural productivity and labor operations under climate-induced extreme thermal stress using CHC-CMIP6 Phase 6 weather projections.",
      "Leveraging high-resolution satellite arrays (Sentinel-1/2, Landsat-8/9) for active carbon tracking, forest health, and above-ground biomass assessment integrations.",
      "Engineered Scikit-Learn pipelines for forecasting wind turbine energy production based on environmental metrics, turbine angle, and atmospheric conditions.",
      "Developing machine-learning-driven predictive systems for flood risk modeling, locust swarming pathways, animal biodiversity migration paths, and real-time plant disease classification from field mobile images."
    ]
  },
  {
    id: "exp2",
    title: "Remote Sensing Scientist",
    company: "AiDash (USA)",
    duration: "Dec 2021 - Jul 2023",
    location: "Gurugram (Hybrid)",
    logoType: "aidash",
    points: [
      "Designed and deployed deep learning and spatial models for Soil Organic Carbon (SOC) assessment across agricultural zones in Europe and the United States.",
      "Led key R&D tracks for AI/ML wildfire hazard modeling, synthesizing meteorological streams and vegetative moisture indicators (NDVI, NDWI) into real-time hazard grids.",
      "Engineered automated pipelines monitoring tree encroachments and deforestation near bulk power transmission corridors using multi-spectral satellite assets, significantly improving utility grid resilience."
    ]
  },
  {
    id: "exp3",
    title: "Head of Research and Development",
    company: "Neurafarms.ai",
    duration: "Aug 2021 - Nov 2021",
    location: "Remote",
    logoType: "neurafarms",
    points: [
      "Conceptualized AI-based smart agritech products centering precision agricultural solutions, daily irrigation advice, and real-time yield curves.",
      "Architected a mobile application core designed for rapid micro-farm crop loss detection to verify insurance payouts instantly based on post-catastrophe imagery streams."
    ]
  },
  {
    id: "exp4",
    title: "GIS Research Lead",
    company: "DeHaat (Seeds to Market)",
    duration: "Apr 2020 - Aug 2021",
    location: "Gurugram, India",
    logoType: "dehaat",
    points: [
      "Directed spatial data science divisions, combining satellite inputs and weather data records to formulate real-time localized decision-support guides for smallholder networks.",
      "Optimized localized operational logistics and field mapping through complex spatial routing and watershed analytics.",
      "Coordinated with data science and engineering hubs to translate academic spatial research paradigms into robust user-facing SaaS tools."
    ]
  },
  {
    id: "exp5",
    title: "Research Head: Remote Sensing & GIS",
    company: "Farm Guide",
    duration: "Apr 2019 - Mar 2020",
    location: "New Delhi, India",
    logoType: "farmguide",
    points: [
      "Managed spatial research assets focused on structural crop classification and land-use dynamics in rural zones.",
      "Crafted geospatial analytical modules assessing localized resource scarcity to promote sustainable irrigation practices.",
      "Forged strong operational pipelines translating complex weather observations into plain-expression advisories for rural communities."
    ]
  },
  {
    id: "exp6",
    title: "Senior Researcher",
    company: "India Meteorological Department (IMD HQ)",
    duration: "Nov 2014 - Apr 2019",
    location: "New Delhi, India",
    logoType: "imd",
    points: [
      "Formulated and verified mathematical algorithms to process raw satellite channels into crop health metrics, soil moisture profiles, and dynamic hydrological indices.",
      "Engineered operational weather-analytics models for agrometeorological projections to steer agricultural strategy on a sub-district scale.",
      "Represented meteorology sectors in national forums, driving integration of satellite-derived precipitation indices into agricultural guidance models."
    ]
  },
  {
    id: "exp7",
    title: "Project Scientist",
    company: "UP State Remote Sensing Application Centre (UPRSAC)",
    duration: "Sep 2013 - Aug 2014",
    location: "Lucknow, India",
    logoType: "uprsac",
    points: [
      "Conducted physical watersheds scoping and terrain classification profiles using spatial Digital Elevation Models (DEMs).",
      "Processed precipitation estimates to map flood zones and deliver real-time early warning advisories in downstream catchment areas.",
      "Analyzed structural changes in interior wetlands and rivers over decades-long timelines to assess overall watershed health."
    ]
  }
];

export const consultancies: Consultancy[] = [
  {
    id: "c1",
    client: "Asian Development Bank (ADB)",
    role: "Agroclimatic Data Specialist",
    logoType: "adb",
    points: [
      "Conducted detailed quantitative modeling assessing climate change vulnerabilities and crop-season shifts for key rice cultivation basins in Asia-Pacific.",
      "Derived agricultural stress impacts under diverse Shared Socio-economic Pathways (SSPs/SSEs) climate scenarios.",
      "Delivered strategic regional advisories detailing compound thermal and hydrologic shocks that smallholder segments could face under future scenarios."
    ]
  },
  {
    id: "c2",
    client: "Absolute Ag (ECSO Global Pvt Limited)",
    role: "Agritech Methodology Consultant",
    logoType: "absolute",
    points: [
      "Constructed custom methodologies for sustainable ag-planning, marrying remote sensing pipelines with field IoT sensor arrays.",
      "Developed metrics tracking real-time plant growth and regional water indices to validate sustainability frameworks."
    ]
  },
  {
    id: "c3",
    client: "Fit Astronaut Labs LLP",
    role: "AI & Carbon Specialist",
    logoType: "fitastronaut",
    points: [
      "Formulated and optimized Python pipelines for active, multivariate carbon capture evaluation and forest canopy indices detection.",
      "Engineered customized geospatial reporting tool kits (MVR) tracking regional greenhouse gas profiles from satellite telemetry."
    ]
  },
  {
    id: "c4",
    client: "Borlaug Institute for South Asia (BISA)",
    role: "Climate Risk Mapping Expert",
    logoType: "bisa",
    points: [
      "Generated detailed maps documenting climatic extreme heat discomfort thresholds impacting farmworkers during critical agricultural periods.",
      "Utilized the state-of-the-art CHC-CMIP6 climate model projections database to map agricultural vulnerabilities for multiple South Asian zones."
    ]
  },
  {
    id: "c5",
    client: "Plutas.AI",
    role: "Parametric Advisory Consultant",
    logoType: "plutas",
    points: [
      "Computed high-precision gridded climate stress index maps (4 km resolution) tracking rainfall and extreme thermal values across Maharashtra, Andhra Pradesh, and Uttarakhand.",
      "Formulated comprehensive physical risk analysis profiles for multi-gigawatt energy developments (Adani Mahan Power & Khavda Solar Complexes) to hedge weather-driven production and structural vulnerabilities."
    ]
  }
];

export const publications: Publication[] = [
  {
    id: "pub_b1",
    type: "book",
    year: 2024,
    title: "Smart Technologies in Sustainable Agriculture: Current and Future Prospects",
    publisherOrJournal: "Apple Academic Press / CRC Press (Taylor & Francis Group)",
    isbn: "9781774916889",
    link: "https://www.appleacademicpress.com/smart-technologies-in-sustainable-agriculture-current-and-future-prospects/9781774916889"
  },
  {
    id: "pub_b2",
    type: "book",
    year: 2024,
    title: "Geoinformatics: An Emerging Approach for Sustainable Crop Production and Food Security",
    publisherOrJournal: "Apple Academic Press / CRC Press (Taylor & Francis Group)",
    isbn: "9781774916285",
    link: "https://appleacademicpress.com/geoinformatics-an-emerging-approach-for-sustainable-crop-production-and-food-security/9781774916285"
  },
  {
    id: "pub_j1",
    type: "journal_special",
    year: 2023,
    title: "Special Issue on Remote Sensing and GIS Applications in Global Warming and Climate Change",
    publisherOrJournal: "Environmental Challenges (Elsevier Journal)"
  },
  {
    id: "pub_a1",
    type: "article",
    authors: "Singh, A., Singh, A. K., Rawat, S., Rajput, V. D., Ghazaryan, K., Anand, V., Minkina, T., Alexiou, A., Elshikh, M. S., Sousa, J. R., Trindade, H., Singh, R. K., & Pradhan, A.",
    year: 2025,
    title: "Temporal patterns and influences of monthly, seasonal, and annual temperatures on methane emissions in Greece, Armenia, and Russia over two decades",
    publisherOrJournal: "Science of the Total Environment",
    link: "https://www.sciencedirect.com/science/article/pii/S0048969725010654",
    impactFactor: 8.2
  },
  {
    id: "pub_a2",
    type: "article",
    authors: "Kumar, A., Singh, A.K. & Taloor, A.K.",
    year: 2024,
    title: "Geographically distributed trend and variability analysis of rainfall over the state of Haryana, India, using Climate Hazards Group InfraRed Precipitation with Station (CHIRPS) data dataset",
    publisherOrJournal: "Arabian Journal of Geosciences",
    link: "https://doi.org/10.1007/s12517-024-12110-3",
    impactFactor: 1.95
  },
  {
    id: "pub_a3",
    type: "article",
    authors: "Singh, A., Rawat, S., Singh, A. K., Ghazaryan, K., Singh, O., Sharma, R., Chakrawarti, N., Singh, S., & Singh, O.",
    year: 2022,
    title: "Comparative case study of atmospheric parameters over India and China during COVID-19 lockdown",
    publisherOrJournal: "Biogeosystem Technique",
    link: "https://bgt.cherkasgu.press/journals_n/1678197417.pdf"
  },
  {
    id: "pub_a4",
    type: "article",
    authors: "Sonker, I., Tripathi, J. N., Swarnim, & Singh, A. K.",
    year: 2023,
    title: "Morphometric and neotectonic study of Upper Teesta River basin, Sikkim Himalaya using geospatial techniques",
    publisherOrJournal: "Journal of Applied Geophysics",
    link: "https://doi.org/10.1016/j.jappgeo.2023.104978",
    impactFactor: 2.2
  },
  {
    id: "pub_a5",
    type: "article",
    authors: "Tripathi, J. N., Sonker, I., Swarnim, Tripathi, S., & Singh, A. K.",
    year: 2022,
    title: "Climate change traces on Lhonak Glacier using geospatial tools",
    publisherOrJournal: "Quaternary Science Advances",
    link: "https://doi.org/10.1016/j.qsa.2022.100065",
    impactFactor: 2.9
  },
  {
    id: "pub_a6",
    type: "article",
    authors: "Taloor, A.K., Singh, A.K., Kumar, P., Kumar, A., Tripathi, J.N., Kumari, M., Kotlia, B.S., Kothyari, G.C., Tiwari, S.P., Johnson, B.A.",
    year: 2022,
    title: "Geospatial Technology-Based Analysis of Air Quality in India during the COVID-19 Pandemic",
    publisherOrJournal: "Remote Sensing",
    link: "https://doi.org/10.3390/rs14184650",
    impactFactor: 4.2
  },
  {
    id: "pub_a7",
    type: "article",
    authors: "Singh, A., Singh, A.K., Rawat, S., Pal, N., Rajput, V.D., Minkina, T., Sharma, R., Singh, N.P., Tripathi, J.N.",
    year: 2022,
    title: "Satellite-Based Quantification of Methane Emissions from Wetlands and Rice Paddies Ecosystems in North and Northeast India",
    publisherOrJournal: "Hydrobiology",
    link: "https://doi.org/10.3390/hydrobiology1030023"
  },
  {
    id: "pub_a8",
    type: "article",
    authors: "Singh, A., Sengar, R. S., Sharma, R., Rajput, P., & Singh, A. K.",
    year: 2021,
    title: "Nano-priming technology for sustainable agriculture",
    publisherOrJournal: "Biogeosystem Technique",
    link: "https://bgt.cherkasgu.press/journals_n/1649672613.pdf"
  },
  {
    id: "pub_a9",
    type: "article",
    authors: "Dmitriev, P. A., Kozlovsky, B. L., Kupriushkin, D. P., Lysenko, V. S., Rajput, V. D., Ignatova, M. A., Tarik, E. P., Kapralova, O. A., Tokhtar, V. K., Singh, A. K., Minkina, T., Varduni, T. V., Sharma, M., Taloor, A. K., & Thapliyal, A.",
    year: 2022,
    title: "Identification of species of the genus Acer L. using vegetation indices calculated from the hyperspectral images of leaves",
    publisherOrJournal: "Remote Sensing Applications: Society and Environment",
    link: "https://doi.org/10.1016/j.rsase.2021.100679",
    impactFactor: 3.8
  },
  {
    id: "pub_a10",
    type: "article",
    authors: "Das, S., Taloor, A. K., Singh, A. K., & Kothyari, G. C.",
    year: 2022,
    title: "Monitoring the dynamics of Bara Shigri glacier using Synthetic Aperture Radar data of Sentinel-1 satellite and effect of climate on mass balances",
    publisherOrJournal: "Advances in Space Research",
    link: "https://doi.org/10.1016/j.asr.2021.11.006",
    impactFactor: 2.8
  },
  {
    id: "pub_a11",
    type: "article",
    authors: "Kumar, A., Singh, A. K., Giri, R. K., & Tripathi, J. N.",
    year: 2021,
    title: "Inundation mapping using SENTINEL-1 data in the aftermath of Super Cyclone Amphan: A case study",
    publisherOrJournal: "MAUSAM",
    link: "https://doi.org/10.54302/mausam.v72i1.140",
    impactFactor: 1.0
  },
  {
    id: "pub_a12",
    type: "article",
    authors: "Sonker, I., Tripathi, J. N., & Singh, A. K.",
    year: 2021,
    title: "Landslide susceptibility zonation using geospatial technique and analytical hierarchy process in Sikkim Himalaya",
    publisherOrJournal: "Quaternary Science Advances",
    link: "https://doi.org/10.1016/j.qsa.2021.100039",
    impactFactor: 2.9
  },
  {
    id: "pub_a13",
    type: "article",
    authors: "Kumar, A., Giri, R. K., Taloor, A. K., & Singh, A. K.",
    year: 2021,
    title: "Rainfall trend, variability, and changes over the state of Punjab, India (1981–2020): A geospatial approach",
    publisherOrJournal: "Remote Sensing Applications: Society and Environment",
    link: "https://doi.org/10.1016/j.rsase.2021.100595",
    impactFactor: 3.8
  },
  {
    id: "pub_a14",
    type: "article",
    authors: "Taloor, A. K., Kothyari, G. C., Manhas, D. S., Bisht, H., Mehta, P., Sharma, M., Mahajan, S., Roy, S., Singh, A. K., & Ali, S.",
    year: 2021,
    title: "Spatio-temporal changes in the Machoi glacier Zanskar Himalaya India using geospatial technology",
    publisherOrJournal: "Quaternary Science Advances",
    link: "https://doi.org/10.1016/j.qsa.2021.100031",
    impactFactor: 2.9
  },
  {
    id: "pub_a15",
    type: "article",
    authors: "Kumar, D., Singh, A. K., Kumar, V., Poyoja, R., Ghosh, A., & Singh, B.",
    year: 2021,
    title: "COVID-19 driven changes in the air quality: A study of major cities in the Indian state of Uttar Pradesh",
    publisherOrJournal: "Environmental Pollution",
    link: "https://doi.org/10.1016/j.envpol.2021.116512",
    impactFactor: 7.6
  },
  {
    id: "pub_a16",
    type: "article",
    authors: "Kumar, A., Singh, A.K., Tripathi, J.N. et al.",
    year: 2021,
    title: "Evaluation of INSAT-3D-derived Hydro-Estimator and INSAT Multi-Spectral Rain Algorithm over Tropical Cyclones",
    publisherOrJournal: "Journal of the Indian Society of Remote Sensing",
    link: "https://doi.org/10.1007/s12524-021-01332-7",
    impactFactor: 2.2
  },
  {
    id: "pub_a17",
    type: "article",
    authors: "Singh, A. K., Tripathi, J. N., Kotlia, B. S., Singh, K. K., & Kumar, A.",
    year: 2019,
    title: "Monitoring groundwater fluctuations over India during Indian Summer Monsoon (ISM) and Northeast monsoon using GRACE satellite: Impact on agriculture",
    publisherOrJournal: "Quaternary International",
    link: "https://doi.org/10.1016/j.quaint.2018.10.036",
    impactFactor: 2.0
  },
  {
    id: "pub_a18",
    type: "article",
    authors: "Singh, A. K., Tripathi, J. N., Singh, K. K., Singh, V., & Sateesh, M.",
    year: 2019,
    title: "Comparison of different satellite-derived rainfall products with IMD gridded data over Indian meteorological subdivisions during Indian Summer Monsoon (ISM) 2016 at weekly temporal resolution",
    publisherOrJournal: "Journal of Hydrology",
    link: "https://doi.org/10.1016/j.jhydrol.2019.02.016",
    impactFactor: 5.9
  },
  
  // Book chapters
  {
    id: "ch1",
    type: "chapter",
    authors: "Kumar, Y., Sharma, S., Rungta, S., Singh, A. K., Gohain, G. B., & Alam, M.",
    year: 2024,
    title: "Sensitivity analysis of DSSAT CERES-Wheat model for Uttar Pradesh for variations",
    publisherOrJournal: "Geoinformatics, Apple Academic Press",
    isbn: "9781003498452",
    link: "http://dx.doi.org/10.1201/9781003498452-18"
  },
  {
    id: "ch2",
    type: "chapter",
    authors: "Singh, A. K., Tripathi, J. N., Rawat, S., Kumar, A., Patil, A., & Aggarwal, R. K.",
    year: 2024,
    title: "District-Level Meteorological and Agriculture Drought Monitoring Through Satellite Technology",
    publisherOrJournal: "Geoinformatics, Apple Academic Press",
    isbn: "9781003498452",
    link: "http://dx.doi.org/10.1201/9781003498452-17"
  },
  {
    id: "ch3",
    type: "chapter",
    authors: "Singh, A., Tomar, B., Margaryan, G., Rajput, P., Minkina, T., Mandzhieva, S., Elshikh, M. S., Chena, S., Singh, R. K., Ragab El-Ramady, H., Singh, A. K., Singh, O., & Ghazaryan, K. (2024)",
    year: 2024,
    title: "Emerging Technologies for Sustainable Soil Management and Precision Farming",
    publisherOrJournal: "Nanotechnology Applications and Innovations for Improved Soil Health, IGI Global",
    link: "https://doi.org/10.4018/979-8-3693-1471-5.ch010"
  },
  {
    id: "ch4",
    type: "chapter",
    authors: "Gohain, G. B., Singh, R. S., Singh, A. K., Singh, A., Sharma, R., Rajput, V. D., & Ghazaryan, K.",
    year: 2024,
    title: "Crop nitrogen stress identification at different phenological stages for sorghum using a Regional Crop Yield Estimation System (RCYES)",
    publisherOrJournal: "Geoinformatics, Apple Academic Press",
    isbn: "9781003498452",
    link: "http://dx.doi.org/10.1201/9781003498452-19"
  },
  {
    id: "ch5",
    type: "chapter",
    authors: "Kumar, P., Singh, A., Rajput, V. D., Yadav, A. K. S., Kumar, P., Singh, A. K., & Minkina, T.",
    year: 2022,
    title: "Role of artificial intelligence, sensor technology, big data in agriculture: next generation farming",
    publisherOrJournal: "Bioinformatics in Agriculture, Academic Press",
    isbn: "9780323897785",
    link: "https://doi.org/10.1016/B978-0-323-89778-5.00035-0"
  },
  {
    id: "ch6",
    type: "chapter",
    authors: "Singh, A., Mehrotra, R., Rajput, V. D., Dmitriev, P., Singh, A. K., Kumar, P., Tomar, R. S., Singh, O., & Singh, A. K.",
    year: 2022,
    title: "Geoinformatics, artificial intelligence, sensor technology, big data",
    publisherOrJournal: "Sustainable Agriculture Systems and Technologies, Wiley",
    link: "https://doi.org/10.1002/9781119808565.ch14"
  }
];

export const certifications: Certification[] = [
  { id: "cert1", name: "Weather-based Agromet Advisory Services through ICT" },
  { id: "cert2", name: "Hydro informatics for Integrated Water Resources Management" },
  { id: "cert3", name: "Application of Remote Sensing in Hydro Meteorological and Geological Disasters" },
  { id: "cert4", name: "AI & Disaster Management" },
  { id: "cert5", name: "Machine Learning with PySpark: Customer Churn Analysis" },
  { id: "cert6", name: "Climate Geospatial Analysis on Python with Xarray" },
  { id: "cert7", name: "Getting Started with Power BI Desktop" },
  { id: "cert8", name: "Sustainable Development Goals (SDG): Tech Solutions" },
  { id: "cert9", name: "Machine Learning with Scikit-Learn" },
  { id: "cert10", name: "Introduction to ESG (Environmental, Social, and Governance)" }
];

export const educations: Education[] = [
  {
    id: "edu1",
    degree: "PhD",
    field: "Earth & Planetary Science",
    institution: "University of Allahabad",
    duration: "2016 - 2020"
  },
  {
    id: "edu2",
    degree: "PG Diploma",
    field: "Remote Sensing and GIS",
    institution: "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organisation (ISRO)",
    duration: "2011 - 2013"
  },
  {
    id: "edu3",
    degree: "M.Tech",
    field: "Remote Sensing & GIS",
    institution: "Sam Higginbottom University of Agriculture, Technology And Sciences (SHUATS)",
    duration: "2010 - 2012"
  },
  {
    id: "edu4",
    degree: "BE",
    field: "Information Technology",
    institution: "University of Rajasthan",
    duration: "2005 - 2009"
  }
];

export const references: Reference[] = [
  {
    id: "ref1",
    name: "Dr. KK Singh",
    roleId: "Scientist-G, Ex-Head of Agromet Department",
    organization: "India Meteorological Department (IMD), New Delhi",
    contact: "+91-9868110771",
    email: "kksingh2022@gmail.com"
  },
  {
    id: "ref2",
    name: "Dr. JN Tripathi",
    roleId: "Professor and Head of Earth & Planetary Science",
    organization: "University of Allahabad, Prayagraj",
    contact: "+91-9335659256",
    email: "jntripathi@gmail.com"
  },
  {
    id: "ref3",
    name: "Dr. AK Mitra",
    roleId: "Scientist-F and SatMet Head",
    organization: "India Meteorological Department (IMD), New Delhi",
    contact: "+91-9868471588",
    email: "ashimmitra@gmail.com"
  },
  {
    id: "ref4",
    name: "Ajay Kumar Agarwal",
    roleId: "Scientist-F and Former Director",
    organization: "UP State Remote Sensing Application Centre (UPRSAC), Lucknow",
    contact: "+91-9335281198",
    email: "agarwalak15@rediffmail.com"
  }
];
