import React from 'react';
import { RedocStandalone } from 'redoc';
// import './RedocComponent.css';

const RedocContainer = () => (
<div style={{border: '1px solid red'}}>
  <RedocStandalone
    spec="https://easy-mock.com/mock/5d2e7d70aa2e084e0acbab94/example/apireference"
    options={{
      disableSearch: true,
      // pathInMiddlePanel: true,
      hideDownloadButton: true,
      // scrollYOffset: 100,
      // theme: { rightPanel: { width: '30%' } },
    }}
  />
</div>
);

export default RedocContainer;
