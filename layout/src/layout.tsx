import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';
import './layout.scss';

const Logo = () => {
  return (
    <section>
      <div style={{ fontSize: '64px' }}>🎱</div>
    </section>
  );
};

export default function Layout(props) {
  return (
    <MDXProvider components={{}}>
      <CoreLayout logo={<Logo />} {...props}></CoreLayout>
    </MDXProvider>
  );
}
