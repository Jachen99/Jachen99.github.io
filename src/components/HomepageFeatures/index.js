import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import GiscusComponent from "../GiscusComponent";


const FeatureList = [
    {
        title: '专属小窝',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                这是软件一班季同学的专属小窝，记录学习的点滴，分享个人的成长历程。
            </>
        ),
    },
    {
        title: '日记与技术博客',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                这里是记录日常生活和技术思考的地方，让我与大家一起分享开发中的心得与经验。
            </>
        ),
    },
    {
        title: '软件研发之路',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                专注于软件研发的探索，分享最新的技术动态与解决方案，持续进步。
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                {/* 添加评论区 */}
                <GiscusComponent />
            </div>
        </section>
    );
}
