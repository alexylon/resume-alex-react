import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BuildingOfficeIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
    TrophyIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MastodonIcon from '../components/Icon/MastodonIcon';
import homeImage from '../images/home-background.jpg';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilePic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
    About,
    ContactSection,
    ContactType,
    Home,
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
    Home: 'home',
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
 * Home section
 */
export const homeData: Home = {
    imageSrc: homeImage,
    name: `I'm Alexander Alexandrov.`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                I'm a Sofia based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently
                working
                at <strong className="text-stone-100">DXC Technology</strong>.
                <br/>
                I am in love with <strong className="text-stone-100">Rust</strong> programming language.
            </p>
        </>
    ),
    actions: [
        {
            href: "assets/resume.pdf",
            text: 'Resume',
            primary: true,
            Icon: ArrowDownTrayIcon,
        },
        // {
        //     href: `#${SectionId.Contact}`,
        //     text: 'Contact',
        //     primary: false,
        // },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilePic,
    description: 'I\'m a permanent student, reader, and learner. Software engineering is my passion and I find it most satisfying to help interpret creative ideas into useful software tools.\n' +
        '\n' +
        'I value being in an environment where there is good opportunity to learn and where there are interesting technology challenges to encounter.\n' +
        '\n' +
        'I\'m a fullstack engineer by trade. Keeping up with programming languages, frameworks, and design patterns is the permanent education we sign up for, yet it\'s also the means by which we work our creative magic. I believe it is important not to become compartmentalized or to let a skill set stagnate.\n' +
        '\n' +
        'My tech love remains Rust programming language. In this particular context, as a theologian, I would exclaim along with the timeless Bible verse "but the greatest of these is love" also "but the greatest of these is Rust".\n' +
        '\n' +
        'And yet, most skills can be learned and improved, but the ability to solve problems and learn plus a mindset of interpersonal communication help me to contribute to nurturing a collaborative and roundtable environment where people feel empowered, valued and effective members of a team.',
    aboutItems: [
        {label: 'Location', text: 'Sofia, BG', Icon: MapIcon},
        {label: 'Certification', text: 'Oracle CA, Java SE 8', Icon: TrophyIcon},
        {label: 'Nationality', text: 'Bulgarian', Icon: FlagIcon},
        {label: 'Interests', text: 'Technology, Byzantine Philosophy', Icon: SparklesIcon},
        {label: 'Study', text: 'Sofia University', Icon: AcademicCapIcon},
        {label: 'Employment', text: 'DXC Technology', Icon: BuildingOfficeIcon},
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
                level: 7,
            },
            {
                name: 'TypeScript',
                level: 7,
            },
            {
                name: 'WebAssembly (Wasm) with Rust',
                level: 3,
            },
            {
                name: 'Cytoscape.js',
                level: 3,
            },
            {
                name: 'GraphQL',
                level: 3,
            },
        ],
    },
    {
        name: 'Backend development',
        skills: [
            {
                name: 'Rust',
                level: 5,
            },
            {
                name: 'Java',
                level: 6,
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
                level: 3,
            },
            {
                name: 'AWS (Lambda, CodeBuild, EventBridge, CloudWatch)',
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
        image: portfolioImage1,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'Apr. 2020',
        location: 'Camplight',
        title: 'React.js Fundamentals',
        content: <p></p>,
    },
    {
        date: 'Oct. 2019',
        location: 'Sofia University',
        title: 'PhD of Theology',
        content: <p></p>,
    },
    {
        date: 'Mar. 2018',
        location: 'MaxPlus',
        title: 'Java 8 Fundamentals',
        content: <p></p>,
    },
    {
        date: 'Jun. 1997',
        location: 'University of Forestry',
        title: 'Masters in Engineering',
        content: <p></p>,
    },
    {
        date: 'Jun. 1990',
        location: 'High School of Mathematics',
        title: 'Mathematics',
        content: <p></p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: 'Apr. 2020 - Present',
        location: 'DXC Technology',
        title: 'Fullstack Developer',
        content: (
            <p>
                Working on various projects, using Rust, TypeScript,
                React.js, Java, Terraform, Cytoscape.js, Spring MVC + JSP, PostgreSQL,
                iBATIS, Amazon Web Services.
            </p>
        ),
    },
    {
        date: 'Sep. 2019 - Apr. 2020',
        location: 'Camplight',
        title: 'Web Developer Intern',
        content: (
            <p>
                Developing a web application by using React.js, JavaScript /
                TypeScript, Next.js, HTML and GraphQL.
            </p>
        ),
    },
    {
        date: 'Mar. 2000 - Apr. 2020',
        location: 'KAME',
        title: 'Technical Product Manager',
        content: (
            <p>

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
    headerText: 'Get in touch',
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
            type: ContactType.Mastodon,
            text: '@aal@ohai.social',
            href: 'https://ohai.social/@aal',
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
    {label: 'Mastodon', Icon: MastodonIcon, href: 'https://ohai.social/@aal', rel: "me"},
];
