// import {Dialog, Transition} from '@headlessui/react';
// import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React, {FC, memo, useCallback, useMemo, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Link} from 'react-scroll'

import {SectionId} from '../../data/data';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
    const navSections = useMemo(
        () => [SectionId.Home, SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Contact],
        [],
    );

    return (
        <>
            <MobileNav navSections={navSections}/>
            <DesktopNav navSections={navSections}/>
        </>
    );
});

const DesktopNav: FC<{ navSections: SectionId[] }> = memo(
    ({navSections}) => {
        const baseClass =
            '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
        const activeClass = classNames(baseClass, 'text-orange-500');
        const inactiveClass = classNames(baseClass, 'text-neutral-100');
        return (
            <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
                    id={headerID}>
                <nav className="flex justify-center gap-x-8">
                    {navSections.map(section => (
                        <NavItem
                            activeClass={activeClass}
                            inactiveClass={inactiveClass}
                            key={section}
                            section={section}
                        />
                    ))}
                </nav>
            </header>
        );
    },
);

const MobileNav: FC<{ navSections: SectionId[] }> = memo(
    ({navSections}) => {
        const baseClass =
            '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
        const activeClass = classNames(baseClass, 'text-orange-500');
        const inactiveClass = classNames(baseClass, 'text-neutral-100');
        return (
            <header className="fixed top-0 z-50 w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
                    id={headerID}>
                <nav className="flex justify-center gap-x-8">
                    {navSections.map(section => (
                        <NavItem
                            activeClass={activeClass}
                            inactiveClass={inactiveClass}
                            key={section}
                            section={section}
                        />
                    ))}
                </nav>
            </header>
        );
    },
);

// const MobileNav: FC<{ navSections: SectionId[] }> = memo(
//     ({navSections}) => {
//         const [isOpen, setIsOpen] = useState<boolean>(false);
//
//         const toggleOpen = useCallback(() => {
//             setIsOpen(!isOpen);
//         }, [isOpen]);
//
//         const baseClass =
//             'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
//         const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
//         const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
//         return (
//             <>
//                 <button
//                     aria-label="Menu Button"
//                     className="fixed top-2 right-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
//                     onClick={toggleOpen}>
//                     <Bars3BottomRightIcon className="h-8 w-8 text-white"/>
//                     <span className="sr-only">Open sidebar</span>
//                 </button>
//                 <Transition.Root as={Fragment} show={isOpen}>
//                     <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
//                         <Transition.Child
//                             as={Fragment}
//                             enter="transition-opacity ease-linear duration-300"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition-opacity ease-linear duration-300"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0">
//                             <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75"/>
//                         </Transition.Child>
//                         <Transition.Child
//                             as={Fragment}
//                             enter="transition ease-in-out duration-300 transform"
//                             enterFrom="-translate-x-full"
//                             enterTo="translate-x-0"
//                             leave="transition ease-in-out duration-300 transform"
//                             leaveFrom="translate-x-0"
//                             leaveTo="-translate-x-full">
//                             <div className="relative w-4/5 bg-stone-800">
//                                 <nav className="mt-5 flex flex-col gap-y-2 px-2">
//                                     {navSections.map(section => (
//                                         <NavItem
//                                             activeClass={activeClass}
//                                             inactiveClass={inactiveClass}
//                                             key={section}
//                                             onClick={toggleOpen}
//                                             section={section}
//                                         />
//                                     ))}
//                                 </nav>
//                             </div>
//                         </Transition.Child>
//                     </Dialog>
//                 </Transition.Root>
//             </>
//         );
//     },
// );

const NavItem: FC<{
        section: string;
        activeClass: string;
        inactiveClass: string;
        onClick?: () => void;
    }> = memo(({section, inactiveClass, activeClass, onClick}) => {
        const [stateStyle, setStateStyle] = useState(inactiveClass);

        const handleSetActive = useCallback(() => {
            setStateStyle(activeClass);
        }, [activeClass]);

        const handleSetInactive = useCallback(() => {
            setStateStyle(inactiveClass);
        }, [inactiveClass]);

        return (
            <Link activeClass="active" className={section} onSetActive={handleSetActive} onSetInactive={handleSetInactive}
                  smooth={true}
                  spy={true}
                  to={section}>
                <div className={classNames(stateStyle)} key={section} onClick={onClick}
                     style={{cursor: "pointer"}}>
                    {section}
                </div>
            </Link>
        );
    })
;

Header.displayName = 'Header';
export default Header;
