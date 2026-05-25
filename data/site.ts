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
    title: 'Sourav Bhadra, Ph.D. | Data Scientist',
    description:
      'Sourav Bhadra, Ph.D. — Data Scientist specializing in foundation models, generative AI, computer vision, and geospatial machine learning, building production ML systems that drive measurable business impact.',
  },
  hero: {
    name: 'Sourav Bhadra',
    role: 'Data Scientist, Ph.D.',
    tagline:
      'I build end-to-end AI systems — from geospatial foundation models and generative AI to production MLOps — that turn complex, multimodal data into measurable business impact.',
    contact: 'Open to senior data science and ML roles.',
    avatarSrc: '/avatar.jpg',
    avatarAlt: 'Sourav Bhadra',
  },
  about: {
    paragraphs: [
      "I'm a data scientist with a Ph.D. in geospatial analytics and 6+ years turning messy, multimodal data — satellite and drone imagery, sensors, weather, and genetics — into decisions that move the business. I own problems end to end: framing them with stakeholders, building the models, and shipping them to production.",
      "My edge is connecting deep technical work to outcomes. I've built geospatial foundation models, fine-tuned diffusion models for image super-resolution, and stood up cloud-native ML pipelines that run across continents — always anchored to a measurable result, whether that's wider prediction coverage, higher out-of-distribution accuracy, or faster R&D cycles.",
      {
        heading: 'What I focus on',
        bullets: [
          'Foundation models & generative AI — masked autoencoders, diffusion, transfer learning',
          'Computer vision & multimodal sensor fusion — hyperspectral, thermal, LiDAR, RGB',
          'Remote-sensing ML at planet scale — satellite and UAV imagery',
          'Production MLOps — cloud pipelines, orchestration, CI/CD, monitoring',
        ],
      },
      {
        heading: 'Languages',
        techItems: ['Python', 'SQL', 'R', 'Bash'],
      },
      {
        heading: 'ML / Deep Learning',
        techItems: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'CNNs', 'Vision Transformers', 'LSTMs', 'Diffusion Models'],
      },
      {
        heading: 'Geospatial & Remote Sensing',
        techItems: ['GDAL', 'Rasterio', 'GeoPandas', 'Xarray', 'Google Earth Engine', 'QGIS', 'ArcGIS', 'STAC / COG'],
      },
      {
        heading: 'Cloud & MLOps',
        techItems: ['AWS SageMaker', 'AWS S3 / Lambda', 'GCP BigQuery', 'Apache Airflow', 'Kafka', 'Docker', 'GitHub Actions'],
      },
    ],
  },
  experiences: [
    {
      period: '2023 — Present',
      title: 'Data Scientist',
      company: 'Bayer Crop Science',
      companyUrl: 'https://www.bayer.com/en/',
      summary:
        'Develop and deploy machine learning models that predict crop phenotypes for breeding R&D, working across remote-sensing imagery, climate grids, and sensor-based tabular data.',
      highlights: [
        'Build end-to-end ML pipelines — from model development and validation to deployment and maintenance — using automated, cloud-native workflows.',
        'Prototype proof-of-concept solutions with cutting-edge sensors, the newest satellites, and modern model architectures to accelerate breeding cycles.',
        'Partner with cross-functional stakeholders to translate research and business objectives into deployable data science solutions.',
      ],
      tech: ['PyTorch', 'TensorFlow', 'Rasterio', 'GDAL', 'GeoPandas', 'BigQuery', 'AWS', 'Airflow', 'Docker'],
    },
    {
      period: '2019 — 2023',
      title: 'Graduate Research Scientist',
      company: 'Remote Sensing Lab, Saint Louis University',
      companyUrl: 'http://www.remotesensinglab.org/',
      summary:
        'Led deep-learning research for digital agriculture, fusing multi-sensor UAV and satellite data to estimate crop traits and yield.',
      highlights: [
        'Built a physics-informed transfer-learning framework (PROSAIL radiative-transfer model + deep neural networks), improving cross-environment generalization of crop-trait estimation by ~25%.',
        'Developed end-to-end 3D CNNs (ResNet/DenseNet) for plot-scale soybean yield prediction from multi-temporal UAV imagery, scaling training from a local GPU cluster to AWS SageMaker.',
        'Architected multimodal fusion CNNs integrating hyperspectral, thermal, and LiDAR data, outperforming single-sensor baselines for seed-composition estimation.',
        'Engineered a photogrammetric calibration pipeline (bundle block adjustment) achieving sub-centimeter multi-sensor co-registration.',
        'Published 4 first-author papers in top remote-sensing journals; presented at NAPPN, AGU, and AAG.',
      ],
      tech: ['Python', 'PyTorch', 'TensorFlow', 'Rasterio', 'GeoPandas', 'AWS SageMaker', 'Pix4D'],
    },
    {
      period: '2017 — 2019',
      title: 'Research Assistant',
      company: 'GeoFEW Lab, Southern Illinois University',
      companyUrl: 'https://www.geofew.org/',
      summary:
        'Applied high-performance computing and deep learning to hydrologic connectivity and terrain analysis.',
      highlights: [
        'Implemented hydrologic-connectivity models with TauDEM on an HPC cluster to quantify the impact of anthropogenic drainage structures.',
        'Trained a CNN to detect bridges and culverts from LiDAR-derived high-resolution DEMs.',
        'Automated stream-delineation pipelines from DEMs using ArcPy.',
      ],
      tech: ['Python', 'ArcPy', 'TensorFlow', 'HPC', 'ArcGIS'],
    },
    {
      period: '2016 — 2017',
      title: 'GIS Analyst',
      company: 'Institute of Water Modeling',
      companyUrl: 'https://www.iwmbd.org/',
      summary:
        'Built geospatial data-processing pipelines supporting large-scale flood-management and hydrological engineering projects in Bangladesh.',
      highlights: [
        'Automated map-making and geospatial workflows with ArcPy, replacing manual processes for embankment and floodplain projects.',
        'Analyzed multi-temporal satellite imagery to detect riverbank change using eCognition, ERDAS Imagine, and Google Earth Engine.',
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
    {
      name: '3-Minute Thesis — Runner-Up',
      year: '2022',
      awarder: 'Saint Louis University',
      note: 'Second place university-wide for the talk "Fighting Food Insecurity by Seeing the Unseen."',
    },
  ],
  featuredProjects: [
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
      image: 'img/raster4ml.png',
      imageAlt: 'Raster4ML vegetation-index map output',
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
      links: [{ label: 'Live demo', href: 'https://www.peakfallcolor.com/', icon: 'ph:arrow-square-out' }],
      techCategories: [
        { category: 'ML / AI', items: ['Transformers', 'MODIS NDVI', 'Gemini Function Calling', 'RAG'] },
        { category: 'Full Stack', items: ['React', 'FastAPI', 'Leaflet'] },
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
      title: 'MapLapse',
      period: 'Open Source · 2022',
      badge: 'PyPI package',
      summary:
        "Static maps can't show how a region changes over time — building animated geospatial timelapses from scratch takes substantial matplotlib and GeoPandas plumbing.",
      solution:
        'A Python library that turns a shapefile and a time-indexed dataset into animated choropleth or proportional-circle maps (GIF/MP4) with a single animate() call.',
      impact:
        'Packaged on PyPI with ReadTheDocs docs, giving data scientists a reusable one-liner for temporal map storytelling.',
      image: 'img/maplapse.gif',
      imageAlt: 'Animated choropleth of US corn yield over time',
      links: [{ label: 'GitHub', href: 'https://github.com/souravbhadra/maplapse', icon: 'ph:github-logo' }],
      techCategories: [
        { category: 'Core', items: ['Python', 'Matplotlib'] },
        { category: 'Geospatial', items: ['GeoPandas', 'Shapely', 'Fiona'] },
      ],
    },
    {
      title: 'AgLapse',
      period: 'Open Source · 2022',
      badge: 'Interactive app',
      icon: 'ph:chart-line-up',
      summary:
        'Understanding how US crop production shifts across counties and decades is hard to see in spreadsheets and static USDA reports.',
      solution:
        'A Streamlit web app that maps spatiotemporal trends for four major crops across US counties (1910–2021), combining USDA NASS statistics with Census TIGER boundaries and on-the-fly trend (slope) analysis.',
      impact:
        'A deployed, interactive tool that makes a century of agricultural data explorable for researchers and policymakers.',
      links: [
        { label: 'Live app', href: 'https://souravbhadra-ag-lapse-ag-lapse-app-1l9sgf.streamlit.app/', icon: 'ph:arrow-square-out' },
        { label: 'GitHub', href: 'https://github.com/souravbhadra/ag-lapse', icon: 'ph:github-logo' },
      ],
      techCategories: [
        { category: 'Data', items: ['USDA NASS', 'Census TIGER', 'Pandas', 'SciPy'] },
        { category: 'App / Geospatial', items: ['Streamlit', 'GeoPandas', 'Folium'] },
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
    {
      title: 'Plot-Scale Yield with 3D CNNs',
      period: 'Research · Precision Agriculture, 2023',
      badge: 'Peer-reviewed',
      icon: 'ph:cube',
      summary:
        'Predicting soybean yield early and at plot scale requires capturing how the crop develops over the season, not just a single snapshot — a spatiotemporal problem classical features handle poorly.',
      solution:
        'An end-to-end 3D CNN (ResNet/DenseNet) trained on multi-temporal UAV RGB imagery, with the full training-and-inference pipeline scaled from a local GPU cluster onto AWS SageMaker.',
      impact:
        'Delivered accurate plot-scale yield prediction and demonstrated the value of temporal data over single-date imagery; published as first author in Precision Agriculture.',
      links: [{ label: 'Read paper', href: 'https://doi.org/10.1007/s11119-023-10096-8', icon: 'ph:file-text' }],
      techCategories: [
        { category: 'Methods', items: ['3D CNN', 'ResNet / DenseNet', 'Spatiotemporal DL'] },
        { category: 'Stack', items: ['PyTorch', 'AWS SageMaker', 'UAV RGB'] },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'sbhadra019@gmail.com',
    github: 'https://github.com/souravbhadra',
    linkedin: 'https://www.linkedin.com/in/bhadrasourav/',
    scholar: 'https://scholar.google.com/citations?user=twDNDo0AAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0002-5832-4695',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];

export type ProjectLink = { label: string; href: string; icon?: string };

export type FeaturedProject = {
  title: string;
  period?: string;
  badge?: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
  summary: string;
  solution?: string;
  impact?: string;
  links?: readonly ProjectLink[];
  techCategories: readonly { category: string; items: readonly string[] }[];
};
