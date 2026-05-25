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
      title: 'Lumen Studio Website',
      period: '2025',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'Tailwind CSS', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
    {
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
        },
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
export type FeaturedProject = (typeof site.featuredProjects)[number];
