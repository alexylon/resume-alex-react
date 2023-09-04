import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {Link} from 'react-scroll'

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
    const {profileImageSrc, description, aboutItems} = aboutData;
    return (
        <Section className="bg-neutral-800 relative" sectionId={SectionId.About}>
            <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
                {!!profileImageSrc && (
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                            <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc}/>
                        </div>
                    </div>
                )}
                <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold text-white">About me</h2>
                        {description.split(/\r?\n/).map((v, index) =>
                            <p className="prose prose-sm text-gray-300 sm:prose-base" key={index}>
                                {v}
                            </p>
                        )}
                    </div>
                    <br/>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {aboutItems.map(({label, text, Icon}, idx) => (
                            <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                                {Icon && <Icon className="h-5 w-5 text-white"/>}
                                <span className="text-sm font-bold text-white">{label}:</span>
                                <span className=" text-sm text-gray-300">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link smooth={true} spy={true} to={SectionId.Resume}>
                <div className="absolute inset-x-0 bottom-6 flex justify-center">
                    <div
                        className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                        style={{cursor: "pointer"}}
                    >
                        <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
                    </div>
                </div>
                </Link>
            </div>
        </Section>
    );
});

About.displayName = 'About';
export default About;
