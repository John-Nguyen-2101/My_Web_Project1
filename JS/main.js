document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.remove();

  const showreel = document.getElementById("showreel");
  if (showreel) showreel.hidden = false;

  const thumb = document.getElementById("videoThumb");
  const iframe = document.getElementById("videoFrame");

  thumb.addEventListener("click", () => {
    iframe.src =
      "https://www.youtube.com/embed/vkbPTWo5y5U?autoplay=1&rel=0";
    iframe.style.opacity = "1";
    iframe.style.pointerEvents = "auto";
    thumb.style.opacity = "0";
    thumb.style.pointerEvents = "none";
  });
});
