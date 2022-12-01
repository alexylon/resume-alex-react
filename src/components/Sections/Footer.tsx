import {ChevronDoubleUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Link} from 'react-scroll'

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
        <Link smooth={true} spy={true} to={SectionId.Home}>
        <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
            <div
                className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                style={{cursor: "pointer"}}
            >
                <ChevronDoubleUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8"/>
            </div>
        </div>
        </Link>
        <div className="flex flex-col items-center gap-y-6">
            <div className="flex gap-x-4 text-neutral-400">
                <Socials/>
            </div>
            <span className="text-sm text-neutral-500">© Copyright 2022 Alexander Alexandrov</span>
            <div className="text-sm text-neutral-500"><a href="https://github.com/alexylon/alexander-alexandrov-website">source code</a></div>
        </div>
    </div>
));

Footer.displayName = 'Footer';
export default Footer;
