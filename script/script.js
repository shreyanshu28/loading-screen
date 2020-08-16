document
  .getElementById("themeSwitch")
  .addEventListener("change", function (Event) {
    event.target.checked
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme");
  });
