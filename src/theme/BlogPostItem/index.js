import React from 'react';
import DefaultBlogPostItem from '@theme-original/BlogPostItem';
import PageView from '../../components/PageView';

export default function BlogPostItem(props) {
  return (
    <DefaultBlogPostItem {...props}>
      <div style={{position: 'relative', paddingBottom: '56px'}}>
        {props.children}
        <PageView />
      </div>
    </DefaultBlogPostItem>
  );
} 