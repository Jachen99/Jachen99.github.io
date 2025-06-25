import React, { useEffect, useState, useRef } from 'react';

// Busuanzi 统计脚本地址
const BUSUANZI_SCRIPT = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';

function loadBusuanziScript() {
  if (document.getElementById('busuanzi-script')) return;
  const script = document.createElement('script');
  script.id = 'busuanzi-script';
  script.async = true;
  script.src = BUSUANZI_SCRIPT;
  document.body.appendChild(script);
}

const PageView = () => {
  const [count, setCount] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    loadBusuanziScript();
    let fetchCount = 0;
    intervalRef.current = setInterval(() => {
      const el = document.getElementById('busuanzi_value_page_views');
      if (window && window.busuanzi && window.busuanzi.fetch) {
        window.busuanzi.fetch();
      }
      if (el && el.innerText && !isNaN(Number(el.innerText))) {
        setCount(el.innerText);
        setLoaded(true);
        clearInterval(intervalRef.current);
      }
      fetchCount++;
      // 最多尝试 10 次
      if (fetchCount > 10) {
        clearInterval(intervalRef.current);
        setLoaded(true);
      }
    }, 800);
    return () => clearInterval(intervalRef.current);
  }, []);

  // 监听标签内容变化，自动刷新 count
  useEffect(() => {
    const el = document.getElementById('busuanzi_value_page_views');
    if (!el) return;
    const observer = new MutationObserver(() => {
      if (el.innerText && !isNaN(Number(el.innerText))) {
        setCount(el.innerText);
        setLoaded(true);
      }
    });
    observer.observe(el, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div style={{
      position: 'absolute',
      right: '0.5em',
      bottom: '0.5em',
      background: 'rgba(255,255,255,0.85)',
      borderRadius: '16px',
      padding: '6px 16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      fontSize: '0.95em',
      color: 'var(--ifm-color-primary)',
      minWidth: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      pointerEvents: 'auto',
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{marginRight: 6}}><path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span style={{fontSize: '0.95em'}}>
        浏览量：
        <b id="busuanzi_value_page_views" style={{marginLeft: 2, fontWeight: 500, fontSize: '1em'}}>{loaded ? (count !== null ? count : '0') : '加载中...'}</b>
      </span>
    </div>
  );
};

export default PageView; 