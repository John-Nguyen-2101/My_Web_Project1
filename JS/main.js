document.addEventListener("DOMContentLoaded", () => {
    // remove loader
    const loader = document.getElementById("loader");
    if (loader) loader.remove();

    // show showreel
    const showreel = document.getElementById("showreel");
    if (showreel) showreel.hidden = false;

    const thumb = document.getElementById("videoThumb");
    const iframe = document.getElementById("videoFrame");

    thumb.addEventListener("click", () => {
      iframe.src =
        "https://www.youtube.com/embed/vkbPTWo5y5U?autoplay=1&rel=0";
      thumb.style.display = "none";
      iframe.style.display = "block";
    });
  });