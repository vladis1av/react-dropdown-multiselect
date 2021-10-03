import React from 'react';

import LayoutStyle from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={LayoutStyle.wrapper}>
      <div className={LayoutStyle.content}>{children}</div>;
    </div>
  );
};

export default Layout;
