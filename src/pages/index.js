import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className={clsx('container', styles.heroContent)}>
                <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
                    {siteConfig.title}
                </Heading>
                <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        快速开始 - 5分钟教程 ⏱️
                    </Link>
                    <Link
                        className="button button--primary button--lg"
                        to="/blog">
                        查看我的博客 ✨
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`欢迎来到 ${siteConfig.title}`}
            description="探索我的世界，发现更多有趣的内容">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
