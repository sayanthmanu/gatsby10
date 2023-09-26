import React from 'react';

export function onRenderBody({ setHeadComponents }) {
setHeadComponents([
    <script
      id='cookieyes'
      type='text/javascript'
      src='https://scriptstaging.cookieyes.com/client_data/1e4b3b0f9cc2736719714926/script.js'>
    </script>,
    //   <div className="video">
    //   <iframe
    //     src={"https://www.youtube.com/embed/gCuoVMmes4c"}
    //     title={"videoTitle"}
    //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //     frameBorder="0"
    //     webkitallowfullscreen="true"
    //     mozallowfullscreen="true"
    //     allowFullScreen
    //   />
    // </div>
 ]);
}