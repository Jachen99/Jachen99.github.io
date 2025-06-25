import React from 'react';
import DefaultBlogPostItem from '@theme-original/BlogPostItem';
import PageView from '../../components/PageView';
import GiscusComponent from '../../components/GiscusComponent';

export default function BlogPostItem(props) {
  return (
    <DefaultBlogPostItem {...props}>
      <div style={{position: 'relative', paddingTop: '56px', paddingBottom: '80px'}}>
        {props.children}
        <PageView />
        <div style={{marginTop: '80px', marginBottom: '20px'}}>
          <GiscusComponent />
        </div>
      </div>
    </DefaultBlogPostItem>
  );
} 