import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, ReactNode} from 'react';

interface PageProps {
    title: string;
    description: string;
    children?: ReactNode;
}

const Page: NextPage<PageProps> = memo(({children, title, description}) => {
    const {asPath: pathname} = useRouter();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={description} name="description"/>

                {/* several domains list the same content, make sure google knows we mean this one. */}
                <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical"/>

                <link href="/favicon.png" rel="icon" sizes="any"/>
                <link href="/site.webmanifest" rel="manifest"/>

                {/* Open Graph : https://ogp.me/ */}
                <meta content={title} property="og:title"/>
                <meta content={description} property="og:description"/>
                <meta content={`https://reactresume.com${pathname}`} property="og:url"/>

                {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
                <meta content={title} name="twitter:title"/>
                <meta content={description} name="twitter:description"/>
            </Head>
            {children}
        </>
    );
});

Page.displayName = 'Page';
export default Page;
