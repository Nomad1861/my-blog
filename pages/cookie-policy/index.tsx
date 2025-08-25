import Head from 'next/head'
import Layout from '../../componets/layout/Layout'
import PolicyContent from '../../componets/policyContent/PolicyContent'

export default function CookiePolicy() {
    return (
        <>
            <Head>
                <title>Portfolio | Cookie Polisy</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type='image/svg' sizes='32x32' href="/logo/logo.svg" />
            </Head>
            <Layout>
                <main>
                    <PolicyContent />
                </main>
            </Layout>
        </>
    )
}