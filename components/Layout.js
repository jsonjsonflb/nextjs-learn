import React, { Fragment } from 'react';

import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <Fragment>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
    <style jsx>{`
      p {
        font-size: 20px;
      }
    `}</style>
  </Fragment>
);

export default Layout;
