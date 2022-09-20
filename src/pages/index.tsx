import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Home from '../components/Sections/Home';
// import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
// import Testimonials from '../components/Sections/Testimonials';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const WebPage: FC = memo(() => {
    const title = "Alexander's Resume";
    const description = "";

    return (
        <Page description={description} title={title}>
            <Header/>
            <Home/>
            <About/>
            <Resume/>
            {/*<Portfolio />*/}
            {/*<Testimonials />*/}
            <Contact/>
            <Footer/>
        </Page>
    );
});

export default WebPage;
