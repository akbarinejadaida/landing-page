import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    const flag = status.status === Sticky.STATUS_FIXED
    setIsSticky(flag);
  };

  return (
    <React.Fragment>
      <Sticky
        innerZ={1001} top={0}
        onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>

      <main id="content"
        sx={{ variant: 'layout.main', }} >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
