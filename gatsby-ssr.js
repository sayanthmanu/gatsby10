import React from 'react';

export function onRenderBody({ setHeadComponents }) {
setHeadComponents([
    <script
      id='cookieyes'
      type='text/javascript'
      src='https://cdn-cookieyes.com/client_data/1e4b3b0f9cc2736719714926/script.js'
    ></script>,
 ]);
}