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

const PageView = ({inline = false}) => {
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

  if (inline) {
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '0.92em',
        color: 'var(--ifm-color-primary)',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '8px',
        padding: '1px 8px',
        marginLeft: 0,
        fontWeight: 400,
        border: '1px solid rgba(0,0,0,0.03)',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{marginRight: 3}}>
          <path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>浏览量：<b style={{marginLeft: 1, fontWeight: 500}}>{loading ? '...' : count}</b></span>
      </span>
    );
  }

  return (
    <div style={{
      position: 'absolute',
      right: '0.5em',
      top: '0.5em',
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '12px',
      padding: '3px 10px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      fontSize: '0.82em',
      color: 'var(--ifm-color-primary)',
      minWidth: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      pointerEvents: 'auto',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(0,0,0,0.04)',
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{marginRight: 4}}>
        <path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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