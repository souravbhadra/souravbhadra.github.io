/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://souravbhadra.com',
  meta: {
    title: 'Sourav Bhadra',
    description:
      'Sourav Bhadra, Ph.D. — Geospatial Data Scientist building deep-learning systems that fuse drone, satellite, and sensor data into stakeholder outcomes.',
  },
  hero: {
    name: 'Sourav Bhadra',
    tags: ['Deep Learning', 'Computer Vision', 'Geospatial AI', 'Remote Sensing', 'MLOps'],
    avatarSrc: '/avatar.jpg',
    avatarAlt: 'Sourav Bhadra',
  },
  about: {
    intro: {
      heading: '👋 Hello 👋 I am:',
      bullets: [
        'An ML researcher and geospatial data scientist',
        'A husband and a proud father',
        'A hobbyist who enjoys traveling, cooking, and playing guitar',
      ],
    },
    details: [
      "I'm an ML researcher and geospatial data scientist with 6+ years of experience turning multimodal data into outcomes that move both the business and the science. My home turf is deep-learning-based data fusion — from handheld cameras, ground robots, and drones to satellites — with explainability built in from the start.",
      "Across every domain I've worked in, I keep stakeholders at the center. The win isn't the shiniest architecture; it's the outcome the people on the other side actually need. That's what decides which models I build, which I walk away from, and how I measure success.",
      {
        heading: 'Currently exploring',
        bullets: [
          'Agentic AI for coding workflows, personal knowledge management, and small automations that compound.',
          "Geospatial foundation models; their uses, how to fine-tune them for specific cases, and how to bridge them with LLMs (which they don't slot into naturally). Most of my experiments live in agriculture, but the questions generalize to other domains.",
        ],
      },
    ],
  },
  experiences: [
    {
      period: '2023 — Present',
      title: 'Data Scientist',
      company: 'Bayer Crop Science',
      companyUrl: 'https://www.bayer.com/en/',
      logoUrl: '/img/logos/bayer.svg',
      location: 'St. Louis, MO',
      summary:
        'Develop and deploy machine learning models that predict crop phenotypes for breeding R&D, working across remote-sensing imagery, climate grids, and sensor-based tabular data.',
      highlights: [
        'Replaced manual phenotyping at production scale by building end-to-end ML pipelines — from model development and validation through deployment and maintenance — on automated, cloud-native workflows.',
        'Shaped sensor and satellite adoption decisions by prototyping proof-of-concept solutions with cutting-edge sensors, the newest satellites, and modern model architectures.',
        'Partner with cross-functional stakeholders to translate research and business objectives into deployable data science solutions.',
      ],
      tech: ['PyTorch', 'TensorFlow', 'Rasterio', 'GDAL', 'GeoPandas', 'BigQuery', 'AWS', 'Airflow', 'Docker'],
    },
    {
      period: '2024 — 2024',
      title: 'Adjunct Professor',
      company: 'Saint Louis University',
      companyUrl: 'https://www.slu.edu/science-and-engineering/academics/earth-environmental-geospatial-science/index.php',
      logoUrl: '/img/logos/slu.png',
      location: 'St. Louis, MO',
      summary:
        'Designed and taught a graduate-level Geospatial Analytics course (GIS 5120) at Saint Louis University.',
      highlights: [
        'Designed and taught Geospatial Analytics, a graduate-level course covering spatial statistics, image analysis, and large-scale geospatial visualization, to 20+ graduate students within the broader context of geospatial data science.',
        'Full course materials and lecture notes are publicly available on the [course website](https://souravbhadra.com/GIS5120/intro.html).',
      ],
      tech: ['Python', 'GeoPandas', 'Rasterio', 'ArcGIS', 'Google Earth Engine'],
    },
    {
      period: '2019 — 2023',
      title: 'Graduate Research Scientist',
      company: 'Remote Sensing Lab, Saint Louis University',
      companyUrl: 'http://www.remotesensinglab.org/',
      logoUrl: '/img/logos/slu.png',
      location: 'St. Louis, MO',
      summary:
        'Led deep-learning research for digital agriculture, fusing multi-sensor UAV and satellite data to estimate crop traits and yield.',
      highlights: [
        'Improved cross-environment generalization of crop-trait estimation by ~25% by building a physics-informed transfer-learning framework that couples the PROSAIL radiative-transfer model with deep neural networks.',
        'Outperformed 2D CNN baselines for plot-scale soybean yield prediction by developing end-to-end 3D CNNs (ResNet/DenseNet) that consume multi-temporal UAV imagery directly — eliminating hand-crafted feature pipelines — and scaling training from a local GPU cluster to AWS SageMaker.',
        'Outperformed single-sensor baselines for seed-composition estimation by architecting multimodal fusion CNNs that integrate hyperspectral, thermal, and LiDAR data.',
        'Achieved sub-centimeter multi-sensor co-registration by engineering a photogrammetric calibration pipeline based on bundle block adjustment.',
        'Published 4 first-author papers in top remote-sensing journals; presented at NAPPN, AGU, and AAG.',
      ],
      tech: ['Python', 'PyTorch', 'TensorFlow', 'Rasterio', 'GeoPandas', 'AWS SageMaker', 'Pix4D'],
    },
    {
      period: '2017 — 2019',
      title: 'Research Assistant',
      company: 'GeoFEW Lab, Southern Illinois University',
      companyUrl: 'https://www.geofew.org/',
      logoUrl: '/img/logos/siu.png',
      location: 'Carbondale, IL',
      summary:
        'Applied high-performance computing and deep learning to hydrologic connectivity and terrain analysis.',
      highlights: [
        'Enabled watershed-scale connectivity analysis previously infeasible on single workstations by implementing TauDEM-based hydrologic-connectivity models on an HPC cluster to quantify the impact of anthropogenic drainage structures.',
        'Replaced manual digitization across large LiDAR datasets by training a CNN to detect bridges and culverts from high-resolution DEMs.',
        'Enabled batch stream-delineation at watershed scale by automating DEM-to-stream pipelines with ArcPy.',
      ],
      tech: ['Python', 'ArcPy', 'TensorFlow', 'HPC', 'ArcGIS'],
    },
    {
      period: '2016 — 2017',
      title: 'GIS Analyst',
      company: 'Institute of Water Modeling',
      companyUrl: 'https://www.iwmbd.org/',
      logoUrl: '/img/logos/iwm.png',
      location: 'Dhaka, Bangladesh',
      summary:
        'Built geospatial data-processing pipelines supporting large-scale flood-management and hydrological engineering projects in Bangladesh.',
      highlights: [
        'Standardized map outputs for engineering teams by automating map-making and geospatial workflows with ArcPy, replacing manual processes for embankment and floodplain projects.',
        'Informed flood-management and engineering decisions by analyzing multi-temporal satellite imagery to detect riverbank change with eCognition, ERDAS Imagine, and Google Earth Engine.',
      ],
      tech: ['Python', 'ArcPy', 'Google Earth Engine', 'eCognition', 'ERDAS Imagine'],
    },
  ],
  education: [
    {
      period: '2019 — 2023',
      degree: 'Ph.D. in Geoinformatics & Geospatial Analytics',
      institution: 'Saint Louis University',
      institutionUrl: 'https://www.slu.edu/',
      location: 'St. Louis, MO',
      thesis: {
        label: 'Dissertation',
        title:
          'Informed AI for Food Insecurity: Applications of Remote Sensing, Neural Networks and Transfer Learning for Digital Agricultural Monitoring',
        link: 'https://www.proquest.com/openview/adcfadc50701acea422e18dba05c33ed/1?pq-origsite=gscholar&cbl=18750&diss=y',
      },
      highlights: [
        'Dissertation produced 3 first-author journal articles and 1 peer-reviewed conference proceeding.',
        'Invited talks at NAPPN, AGU, and AAG.',
      ],
    },
    {
      period: '2017 — 2019',
      degree: "M.Sc. in Geography & Environmental Resources",
      institution: 'Southern Illinois University Carbondale',
      institutionUrl: 'https://siu.edu/',
      location: 'Carbondale, IL',
      thesis: {
        label: 'Thesis',
        title:
          'Assessing the Impacts of Anthropogenic Drainage Structures on Hydrologic Connectivity Using High-Resolution Digital Elevation Models',
        link: 'https://opensiuc.lib.siu.edu/theses/2573/',
      },
      highlights: ["Recognized with the David G. Arey Memorial Award for the best Master's thesis."],
    },
    {
      period: '2011 — 2015',
      degree: 'Bachelor of Urban & Regional Planning',
      institution: 'Khulna University of Engineering & Technology',
      institutionUrl: 'https://www.kuet.ac.bd/',
      location: 'Khulna, Bangladesh',
    },
  ],
  awards: [
    {
      name: '3-Minute Thesis — Runner-Up',
      year: '2022',
      awarder: 'Saint Louis University',
      note: 'Second place university-wide for the talk "Fighting Food Insecurity by Seeing the Unseen."',
    },
    {
      name: 'David G. Arey Memorial Award',
      year: '2020',
      awarder: 'Southern Illinois University Carbondale',
      note: "Awarded for a Master's thesis demonstrating creative thinking in natural-resource and environmental problem solving.",
    },
    {
      name: 'Ben Dziegielewski Scholarship',
      year: '2018',
      awarder: 'Dept. of Geography & Environmental Resources, SIUC',
      note: "Awarded for the highest GPA in the first year of the master's program.",
    },
  ],
  featuredProjects: [
    {
      title: 'Peak Fall Color',
      period: 'Generative AI · 2025',
      badge: 'Live demo',
      icon: 'ph:leaf',
      summary:
        'Travelers and leaf-peepers lack timely, location-specific forecasts of when fall foliage will peak — static seasonal calendars miss the spatial and year-to-year variation.',
      solution:
        'An interactive platform that predicts peak-foliage timing across the continental US from MODIS satellite time series using deep-learning transformers, served through a React/Leaflet map with a Gemini function-calling RAG chatbot for natural-language queries.',
      impact:
        'Turns satellite phenology science into a consumer-facing product — a full-stack showcase of generative AI, retrieval-augmented reasoning, and geospatial ML in one shipped application.',
      image: 'img/peakfallcolor.png',
      imageAlt: 'Peak Fall Color map interface',
      links: [{ label: 'Live demo', href: 'https://www.peakfallcolor.com/', icon: 'ph:arrow-square-out' }],
      techCategories: [
        { category: 'ML / AI', items: ['Transformers', 'MODIS NDVI', 'Gemini Function Calling', 'RAG'] },
        { category: 'Full Stack', items: ['React', 'FastAPI', 'Leaflet'] },
      ],
    },
    {
      title: 'Raster4ML',
      period: 'Open Source · 2022',
      badge: '120+ ★ on GitHub',
      summary:
        'Bringing satellite and drone imagery into a machine-learning workflow means hand-coding vegetation indices, stacking bands, and extracting zonal statistics — slow, error-prone boilerplate that demands deep geospatial expertise.',
      solution:
        'A Python library that automates the entire feature-extraction pipeline: stack rasters, compute 350+ vegetation indices, and extract statistics over shapefile geometries in a few lines of code, built on GDAL, Rasterio, and GeoPandas.',
      impact:
        'Adopted across the geospatial-ML community with 120+ GitHub stars and full ReadTheDocs documentation, lowering the barrier to remote-sensing ML for researchers and practitioners.',
      image: 'img/raster4ml_logo.png',
      imageAlt: 'Raster4ML logo',
      imageStyle: 'contain',
      links: [
        { label: 'GitHub', href: 'https://github.com/souravbhadra/raster4ml', icon: 'ph:github-logo' },
        { label: 'Docs', href: 'https://raster4ml.readthedocs.io/', icon: 'ph:book-open' },
      ],
      techCategories: [
        { category: 'Core', items: ['Python', 'NumPy', 'Pandas'] },
        { category: 'Geospatial', items: ['GDAL', 'Rasterio', 'GeoPandas', 'Shapely'] },
      ],
    },
    {
      title: 'MapLapse',
      period: 'Open Source · 2022',
      badge: 'PyPI package',
      summary:
        "Static maps can't show how a region changes over time — building animated geospatial timelapses from scratch takes substantial matplotlib and GeoPandas plumbing.",
      solution:
        'A Python library that turns a shapefile and a time-indexed dataset into animated choropleth or proportional-circle maps (GIF/MP4) with a single animate() call.',
      impact:
        'Packaged on PyPI with ReadTheDocs docs, giving data scientists a reusable one-liner for temporal map storytelling.',
      image: 'img/maplapse_logo.gif',
      imageAlt: 'MapLapse logo',
      imageStyle: 'contain',
      links: [{ label: 'GitHub', href: 'https://github.com/souravbhadra/maplapse', icon: 'ph:github-logo' }],
      techCategories: [
        { category: 'Core', items: ['Python', 'Matplotlib'] },
        { category: 'Geospatial', items: ['GeoPandas', 'Shapely', 'Fiona'] },
      ],
    },
    {
      title: 'SustaiN',
      period: 'Applied Research · 2022',
      badge: '$15K USDA SARE grant',
      icon: 'ph:plant',
      summary:
        'Over- and under-applying nitrogen costs farmers money and pollutes waterways; growers lack field-specific, in-season guidance on how much nitrogen to apply.',
      solution:
        'A decision-support web app that fuses PlanetScope satellite imagery with gridMET weather data to generate in-season nitrogen prescription maps for corn and sorghum at field scale.',
      impact:
        'Funded by a $15,000 USDA SARE grant and built with Illinois Corn Growers (ILCORN) and the Donald Danforth Plant Science Center to raise farmer profitability while cutting nitrogen loss.',
      image: 'img/sustain_logo.png',
      imageAlt: 'SustaiN logo',
      imageStyle: 'contain',
      links: [
        { label: 'Live site', href: 'https://sustaincrops.net/', icon: 'ph:arrow-square-out' },
        { label: 'GitHub', href: 'https://github.com/souravbhadra/sustain', icon: 'ph:github-logo' },
      ],
      techCategories: [
        { category: 'Data & ML', items: ['PlanetScope', 'gridMET', 'scikit-learn'] },
        { category: 'Geospatial / App', items: ['GDAL', 'Rasterio', 'GeoPandas', 'Streamlit'] },
      ],
    },
    {
      title: 'PROSAIL-Net',
      period: 'Research · ISPRS J. P&RS, 2024',
      badge: 'Peer-reviewed',
      icon: 'ph:flask',
      summary:
        'Estimating crop biophysical traits (leaf chlorophyll, leaf angle) from hyperspectral imagery with pure deep learning generalizes poorly across fields and seasons because labeled data is scarce.',
      solution:
        'A physics-informed, dual-stream neural network that embeds the PROSAIL radiative-transfer model into transfer learning, jointly estimating leaf chlorophyll and leaf angle from UAV hyperspectral images.',
      impact:
        'Improved cross-environment generalization of trait estimation by ~25%, published as first author in the ISPRS Journal of Photogrammetry & Remote Sensing.',
      links: [{ label: 'Read paper', href: 'https://www.sciencedirect.com/science/article/pii/S0924271624000650', icon: 'ph:file-text' }],
      techCategories: [
        { category: 'Methods', items: ['Transfer Learning', 'PROSAIL RTM', 'Dual-Stream NN'] },
        { category: 'Stack', items: ['PyTorch', 'Hyperspectral', 'UAV'] },
      ],
    },
  ],
  publications: [
    {
      title:
        'PROSAIL-Net: A transfer learning-based dual stream neural network to estimate leaf chlorophyll and leaf angle of crops from UAV hyperspectral images',
      authors: 'S. Bhadra, V. Sagan, S. Sarkar, M. Braud, T. C. Mockler, A. L. Eveland',
      venue: 'ISPRS Journal of Photogrammetry and Remote Sensing',
      year: '2024',
      type: 'Journal',
      firstAuthor: true,
      featured: true,
      link: 'https://www.sciencedirect.com/science/article/pii/S0924271624000650',
    },
    {
      title:
        'End-to-end 3D CNN for plot-scale soybean yield prediction using multitemporal UAV-based RGB images',
      authors: 'S. Bhadra, V. Sagan, J. Skobalski, F. Grignola, S. Sarkar, J. Vilbig',
      venue: 'Precision Agriculture',
      year: '2023',
      type: 'Journal',
      firstAuthor: true,
      featured: true,
      link: 'https://doi.org/10.1007/s11119-023-10096-8',
    },
    {
      title:
        'Automatic Extraction of Solar and Sensor Imaging Geometry from UAV-borne Push-broom Hyperspectral Camera',
      authors: 'S. Bhadra, V. Sagan, C. Nguyen, M. Braud, A. L. Eveland, T. C. Mockler',
      venue: 'ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences',
      year: '2022',
      type: 'Conference',
      firstAuthor: true,
      featured: true,
      link: 'https://doi.org/10.5194/isprs-annals-V-3-2022-131-2022',
    },
    {
      title:
        'Assessing the impacts of anthropogenic drainage structures on hydrologic connectivity using high-resolution digital elevation models',
      authors: 'S. Bhadra, R. Li, D. Wu, G. Wang, B. Rekabdar',
      venue: 'Remote Sensing Applications: Society and Environment',
      year: '2021',
      type: 'Journal',
      firstAuthor: true,
      featured: false,
      link: 'https://doi.org/10.1111/tgis.12832',
    },
    {
      title:
        'Quantifying Leaf Chlorophyll Concentration of Sorghum from Hyperspectral Data Using Derivative Calculus and Machine Learning',
      authors: 'S. Bhadra, V. Sagan, M. Maimaitijiang, M. Maimaitiyiming, M. Newcomb, N. Shakoor, T. C. Mockler',
      venue: 'Remote Sensing',
      year: '2020',
      type: 'Journal',
      firstAuthor: true,
      featured: false,
      link: 'https://doi.org/10.3390/rs12132082',
    },
    {
      title:
        'Spectral enhancement of PlanetScope using Sentinel-2 images to estimate soybean yield and seed composition',
      authors: 'S. Sarkar, V. Sagan, S. Bhadra, F. B. Fritschi',
      venue: 'Scientific Reports',
      year: '2024',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.1038/s41598-024-63650-3',
    },
    {
      title:
        'Drone-based imaging sensors, techniques, and applications in plant phenotyping for crop breeding: A comprehensive review',
      authors: 'B. Gano, S. Bhadra, J. M. Vilbig, N. Ahmed, V. Sagan, N. Shakoor',
      venue: 'The Plant Phenome Journal',
      year: '2024',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.1002/ppj2.20100',
    },
    {
      title: 'Hyperfidelis: A Software Toolkit to Empower Precision Agriculture with GeoAI',
      authors: 'V. Sagan, R. Coral, S. Bhadra, A. Haireti, O. Al Akkad, A. Giri, F. Esposito',
      venue: 'Remote Sensing',
      year: '2024',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.3390/rs16091584',
    },
    {
      title:
        'Soybean seed composition prediction from standing crops using PlanetScope satellite imagery and machine learning',
      authors: 'S. Sarkar, V. Sagan, S. Bhadra, K. Rhodes, M. Pokharel, F. B. Fritschi',
      venue: 'ISPRS Journal of Photogrammetry and Remote Sensing',
      year: '2023',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.1016/j.isprsjprs.2023.09.010',
    },
    {
      title: 'UAV Multisensory Data Fusion and Multi-Task Deep Learning for High-Throughput Maize Phenotyping',
      authors: 'C. Nguyen, V. Sagan, S. Bhadra, S. Moose',
      venue: 'Sensors',
      year: '2023',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.3390/s23041827',
    },
    {
      title:
        'An integrated machine learning and remote sensing approach for monitoring forest degradation due to Rohingya refugee influx in Bangladesh',
      authors: 'M. Rahaman, M. M. Morshed, S. Bhadra',
      venue: 'Remote Sensing Applications: Society and Environment',
      year: '2022',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.1016/j.rsase.2022.100696',
    },
    {
      title: 'Data-Driven Artificial Intelligence for Calibration of Hyperspectral Big Data',
      authors: 'V. Sagan, M. Maimaitijiang, S. Paheding, S. Bhadra, et al.',
      venue: 'IEEE Transactions on Geoscience and Remote Sensing',
      year: '2021',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.1109/TGRS.2021.3091409',
    },
    {
      title:
        'A Fully Automated and Fast Approach for Canopy Cover Estimation Using Super High-Resolution Remote Sensing Imagery',
      authors: 'M. Maimaitijiang, V. Sagan, S. Bhadra, C. Nguyen, T. C. Mockler, N. Shakoor',
      venue: 'ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences',
      year: '2021',
      type: 'Conference',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.5194/isprs-annals-V-3-2021-219-2021',
    },
    {
      title:
        'Field-scale crop yield prediction using multi-temporal WorldView-3 and PlanetScope satellite data and deep learning',
      authors: 'V. Sagan, M. Maimaitijiang, S. Bhadra, M. Maimaitiyiming, D. R. Brown, P. Sidike, F. B. Fritschi',
      venue: 'ISPRS Journal of Photogrammetry and Remote Sensing',
      year: '2021',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.1016/j.isprsjprs.2021.02.008',
    },
    {
      title: 'Early Detection of Plant Viral Disease Using Hyperspectral Imaging and Deep Learning',
      authors: 'C. Nguyen, V. Sagan, M. Maimaitiyiming, M. Maimaitijiang, S. Bhadra, M. T. Kwasniewski',
      venue: 'Sensors',
      year: '2021',
      type: 'Journal',
      firstAuthor: false,
      featured: false,
      link: 'https://doi.org/10.3390/s21030742',
    },
  ],
  contact: {
    email: 'sbhadra019@gmail.com',
    github: 'https://github.com/souravbhadra',
    linkedin: 'https://www.linkedin.com/in/bhadrasourav/',
    scholar: 'https://scholar.google.com/citations?user=twDNDo0AAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0002-5832-4695',
  },
} as const;

export type ProjectLink = { label: string; href: string; icon?: string };

export type FeaturedProject = {
  title: string;
  period?: string;
  badge?: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
  imageStyle?: 'cover' | 'contain';
  summary: string;
  solution?: string;
  impact?: string;
  links?: readonly ProjectLink[];
  techCategories: readonly { category: string; items: readonly string[] }[];
};
