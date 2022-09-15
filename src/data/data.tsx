import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alexander Alexandrov',
  description: ``,
  ogImageUrl: ``,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alexander Alexandrov.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Sofia based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">DXC Technology</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "assets/resume.pdf",
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: <p>
  I'm a permanent student, reader, and learner.
  <br/>
  Software engineering is my passion and I find it most satisfying to help
  interpret creative ideas into useful software tools.
    <br/>
  I value being in an environment where there is good opportunity to learn and
  where there are interesting technology challenges to encounter.
    <br/>
  I'm a fullstack engineer by trade. Keeping up with programming languages,
  frameworks, and design patterns is the permanent education we sign up for, yet
  it's also the means by which we work our creative magic. I believe it is
  important not to become compartmentalized or to let a skill set stagnate.
    <br/>
  My tech love remains Rust programming language. In this context as a theologian
  I would exclaim along with the timeless Bible verse "but the greatest of these
  is love" also "but the greatest of these is Rust".
    <br/>
  And yet, most skills can be learned and improved, but the ability to solve problems
  and learn plus a mindset of interpersonal communication help me to contribute to nurturing
  a collaborative and roundtable environment where people feel empowered, valued and effective members of a team.
  </p>,
  aboutItems: [
    {label: 'Location', text: 'Sofia, BG', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Bulgarian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Photography, Theology', Icon: SparklesIcon},
    {label: 'Study', text: 'Sofia University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'DXC Technology', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'WebAssembly (Wasm) with Rust',
        level: 4,
      },
      {
        name: 'Cytoscape.js',
        level: 4,
      },
      {
        name: 'GraphQL',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'Spring MVC',
        level: 4,
      },
      {
        name: 'Maven',
        level: 7,
      },
      {
        name: 'iBATIS / MyBatis',
        level: 7,
      },
    ],
  },
  {
    name: 'Other Techs',
    skills: [
      {
        name: 'Terraform',
        level: 4,
      },
      {
        name: 'Git',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Bulgarian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Italian',
        level: 7,
      },
      {
        name: 'Russian',
        level: 5,
      },
      {
        name: 'Greek',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2020',
    location: 'Camplight',
    title: 'React.js Fundamentals',
    content: <p></p>,
  },
  {
    date: 'October 2019',
    location: 'Sofia University "St. Kliment Ohridski',
    title: 'PhD of Theology',
    content: <p></p>,
  },
  {
    date: 'March 2018',
    location: 'MaxPlus',
    title: 'Java 8 Fundamentals',
    content: <p></p>,
  },
  {
    date: 'June 1997',
    location: 'University of Forestry',
    title: 'Masters in Engineering',
    content: <p></p>,
  },
  {
    date: 'June 1990',
    location: 'High School of Mathematics',
    title: 'Mathematics',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2020 - Present',
    location: 'DXC Technology',
    title: 'Fullstack Developer',
    content: (
      <p>
        Working on various projects, using Java, JavaScript / TypeScript,
        React.js, Rust, Terraform, Cytoscape.js, Spring MVC + JSP, PostgreSQL,
        iBATIS, HTML, Amazon Web Services.
      </p>
    ),
  },
  {
    date: 'September 2019 - April 2020',
    location: 'Camplight',
    title: 'Web Developer Intern',
    content: (
      <p>
        Developing a web application by using React.js, JavaScript /
        TypeScript, Next.js, HTML and GraphQL.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  description: "",
  headerText: 'Get in touch.',
  // description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@alexandrov.cc',
      href: 'mailto:contact@alexandrov.cc',
    },
    {
      type: ContactType.Location,
      text: 'Sofia, Bulgaria',
      href: 'https://www.google.com/maps/place/Lyulin,+Sofia,+Sofia/@42.7210415,23.2634153,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: '@alexandrovalexander',
      href: 'https://www.linkedin.com/in/alexandrovalexander/',
    },
    {
      type: ContactType.Github,
      text: 'alexylon',
      href: 'https://github.com/alexylon',
    },
  ]
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/alexylon'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alexandrovalexander/'},
];
