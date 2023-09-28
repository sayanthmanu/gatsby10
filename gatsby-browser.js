// import './src/styles/dist/ravenbright.min.css'

document.addEventListener("cookieyes_consent_update", function (eventData) {
  const data = eventData.detail;
  if (
    data.accepted.includes("functional") &&
    !document.getElementById("google-fonts-styles")
  ) {
    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.id = "google-fonts-styles";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href =
"https://api.fontshare.com/v2/css?f[]=satoshi@700,500,600,400&display=swap";
    head.appendChild(link);
  }
});
