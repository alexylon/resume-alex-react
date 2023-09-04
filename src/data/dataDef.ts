import {StaticImageData} from 'next/image';
import React, {FC, SVGProps, RefAttributes, PropsWithoutRef, ReactElement} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
    title: string;
    description: string;
    ogImageUrl: string;
    twitterCardType?: 'summary' | 'summary_large';
    twitterTitle?: string;
    twitterSite?: string;
    twitterCreator?: string;
    twitterDomain?: string;
    twitterUrl?: string;
    twitterDescription?: string;
    twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface Home {
    imageSrc: string;
    name: string;
    description: ReactElement;
    actions: HomeActionItem[];
}

interface HomeActionItem {
    href: string;
    text: string;
    primary?: boolean;
    Icon?: React.ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & RefAttributes<SVGSVGElement>>;
}

/**
 * About section
 */
export interface About {
    profileImageSrc?: string;
    description: string;
    aboutItems: AboutItem[];
}

export interface AboutItem {
    label: string;
    text: string;
    Icon?: React.ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & RefAttributes<SVGSVGElement>>;
}

/**
 * Stat section
 */
export interface Stat {
    title: string;
    value: number;
    Icon?: React.ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & RefAttributes<SVGSVGElement>>;
}

/**
 * Skills section
 */

export interface Skill {
    name: string;
    level: number;
    max?: number;
}

export interface SkillGroup {
    name: string;
    skills: Skill[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
    title: string;
    description: string;
    url: string;
    image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface TimelineItem {
    date: string;
    location: string;
    title: string;
    content: ReactElement;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
    imageSrc?: string | StaticImageData;
    testimonials: Testimonial[];
}

export interface Testimonial {
    image?: string;
    name: string;
    text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
    headerText?: string;
    description: string;
    items: ContactItem[];
}

export const ContactType = {
    Email: 'Email',
    Phone: 'Phone',
    Location: 'Location',
    Github: 'Github',
    LinkedIn: 'LinkedIn',
    Facebook: 'Facebook',
    Twitter: 'Twitter',
    Instagram: 'Instagram',
    Mastodon1: 'Mastodon1',
    Mastodon2: 'Mastodon2',
    Website: 'Website',
} as const;

export type ContactType = typeof ContactType[keyof typeof ContactType];

export interface ContactItem {
    type: ContactType;
    text: string;
    href?: string;
}

export interface ContactValue {
    Icon: FC<IconProps> | React.ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & RefAttributes<SVGSVGElement>>;
    srLabel: string;
}

/**
 * Social items
 */
export interface Social {
    label: string;
    Icon: FC<IconProps>;
    href: string;
    rel?: string;
}
