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
      period: '2025',
      title: 'Lead Product Designer',
      company: 'Lumen Studio',
      summary:
        'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      highlights: [
        'Designed and shipped the complete website using Astro, Tailwind CSS, and content-driven components',
        'Crafted consistent responsive layouts and accessible typography across desktop and mobile',
        'Optimized asset delivery and performance for sub-1s page load metrics',
      ],
      tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'Node', 'Vite'],
    },
    {
      period: '2024',
      title: 'Frontend Architect',
      company: 'Nova Launch',
      summary:
        'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      highlights: [
        'Implemented a component-based design system with reusable cards, buttons, and hero sections',
        'Built content-driven project pages, archive views, and client-side navigation enhancements',
        'Added cross-browser polish and performance tuning with image optimization and lazy loading',
      ],
      tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Node', 'Vite'],
    },
    {
      period: '2023',
      title: 'UI Engineer',
      company: 'Orbital Creative',
      summary:
        'Created an interactive product showcase with a clean visual system and accessible component library.',
      highlights: [
        'Built a flexible project card system for content updates without code changes',
        'Improved brand consistency with typography, color, and motion guidelines',
        'Added testing and quality checks for cross-device UI fidelity',
      ],
      tech: ['Astro', 'Tailwind CSS', 'JavaScript', 'Node', 'Vitest'],
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
