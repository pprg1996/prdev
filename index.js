document.querySelector(".projectMenuButton").addEventListener("click", e => {
  e.preventDefault();
  const hoverMenu = document.querySelector(".projectImgHoverDiv");
  const buttonIcon = document.querySelector(".projectMenuButtonIcon");

  if (!hoverMenu.classList.contains("show")) {
    buttonIcon.classList.replace("fa-bars", "fa-window-close");

    hoverMenu.classList.toggle("showDisplay");
    setTimeout(() => {
      hoverMenu.classList.toggle("show");
    }, 1);
  } else {
    buttonIcon.classList.replace("fa-window-close", "fa-bars");

    hoverMenu.classList.toggle("show");
    setTimeout(() => {
      hoverMenu.classList.toggle("showDisplay");
    }, 200);
  }
});