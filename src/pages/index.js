import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        // 重定向到博客页面
        window.location.href = '/blog';
    }, []);

    return null; // 由于立即重定向，首页不需要显示任何内容
}

export default Home;
