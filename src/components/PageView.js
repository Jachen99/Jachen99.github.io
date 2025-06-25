import React, { useEffect, useState } from 'react';

// 获取当前页面唯一标识
function getPageKey() {
  return window.location.pathname;
}

// 生成三位数随机数
function getRandomInitCount() {
  return Math.floor(Math.random() * 900) + 100; // 100~999
}

// 从 localStorage 获取浏览量
function getPageViewCount(pageKey) {
  try {
    const stored = localStorage.getItem(`pageview_${pageKey}`);
    return stored ? parseInt(stored, 10) : null;
  } catch (error) {
    console.warn('Failed to get pageview from localStorage:', error);
    return null;
  }
}

// 保存浏览量到 localStorage
function savePageViewCount(pageKey, count) {
  try {
    localStorage.setItem(`pageview_${pageKey}`, count.toString());
  } catch (error) {
    console.warn('Failed to save pageview to localStorage:', error);
  }
}

const PageView = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pageKey = getPageKey();
    const currentCount = getPageViewCount(pageKey);
    
    if (currentCount === null) {
      // 首次访问，初始化为三位数随机数
      const initCount = getRandomInitCount();
      setCount(initCount);
      savePageViewCount(pageKey, initCount);
    } else {
      // 已有记录，+1
      const newCount = currentCount + 1;
      setCount(newCount);
      savePageViewCount(pageKey, newCount);
    }
    
    setLoading(false);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      right: '0.5em',
      bottom: '0.5em',
      background: 'rgba(255,255,255,0.9)',
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
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(0,0,0,0.05)',
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{marginRight: 6}}>
        <path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{fontSize: '0.95em'}}>
        浏览量：
        <b style={{marginLeft: 2, fontWeight: 500, fontSize: '1em'}}>
          {loading ? '加载中...' : count}
        </b>
      </span>
    </div>
  );
};

export default PageView; 