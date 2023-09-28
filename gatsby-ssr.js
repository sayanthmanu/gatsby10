import React from 'react';

export function onRenderBody({ setHeadComponents }) {
setHeadComponents([
    <script
      id='cookieyes'
      type='text/javascript'
      src='https://cdn-cookieyes.com/client_data/92754a67d9c17a2adf937980/script.js'>
    </script>,
      <div className="video">
      <iframe
        src="https://player.vimeo.com/video/861813479?h=4bb45e91be&color=ec4543" 
        width="640" 
        height="267" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen
          />
    </div>
 ]);
}
