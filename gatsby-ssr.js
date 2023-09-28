import React from 'react';

export function onRenderBody({ setHeadComponents }) {
setHeadComponents([
    <script
      id='cookieyes'
      type='text/javascript'
      src='https://cdn-cookieyes.com/client_data/92754a67d9c17a2adf937980/script.js'>
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
