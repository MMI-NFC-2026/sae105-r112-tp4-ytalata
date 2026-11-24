// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");
const summaries = accordeon.querySelectorAll("details > summary");

summaries.forEach((summary) => {
  summary.addEventListener("click", () => {
    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== summary.parentElement) {
        det.open = false;
      }
    });
  });
});