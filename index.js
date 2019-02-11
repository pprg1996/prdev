document.querySelector('#projects > div:nth-child(2) > div.projectImgDiv > a').addEventListener("click", e => {
  e.preventDefault();
  const hoverMenu = document.querySelector('#projects > div:nth-child(2) > div.projectImgDiv > div');
  const buttonIcon = document.querySelector('#projects > div:nth-child(2) > div.projectImgDiv > a > i');

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