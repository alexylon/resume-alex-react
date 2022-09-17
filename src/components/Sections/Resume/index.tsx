import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
    return (
        <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
            <div style={{marginBottom: -40}}>
                <div className="flex flex-col divide-y-2 divide-neutral-300" style={{marginBottom: 32}}>
                    <ResumeSection title="Skills">
                        {/*<h3 className="pb-8">Technical Skills</h3>*/}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {skills.map((skillgroup, index) => (
                                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup}/>
                            ))}
                        </div>
                    </ResumeSection>
                    <ResumeSection title="Work">
                        {experience.map((item, index) => (
                            <TimelineItem item={item} key={`${item.title}-${index}`}/>
                        ))}
                    </ResumeSection>
                    <ResumeSection title="Education">
                        {education.map((item, index) => (
                            <TimelineItem item={item} key={`${item.title}-${index}`}/>
                        ))}
                    </ResumeSection>
                </div>
                <div className="flex justify-center">
                    <a className="rounded-full bg-[#262626] p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                       href={`/#${SectionId.Contact}`}>
                        <ChevronDownIcon className="h-5 w-5 bg-transparent text-white sm:h-6 sm:w-6"/>
                    </a>
                </div>
            </div>
        </Section>
    );
});

Resume.displayName = 'Resume';
export default Resume;
