const rotate = (event) => {
  const img = event.currentTarget.parentNode.previousSibling.previousSibling.lastChild.previousSibling;
  img.classList.add("rotate");
};
const stoprotate = (event) => {
  const img = event.currentTarget.parentNode.previousSibling.previousSibling.lastChild.previousSibling;
  img.classList.remove("rotate");
};
const countAlbum = () => {
  const albums = document.querySelectorAll(".albumcontainer").length;
  const albumcovers = document.getElementById("tapestry").querySelectorAll("img").length;
  const destination = document.getElementsByTagName("footer")[0].querySelector("div+p");
  destination.innerText += albumcovers + albums;
};

const cancelTrack = () => {
  const destination = document.querySelectorAll("table tbody tr");

  for (let i = 0; i < destination.length - 1; i++) {
    const cancel_btn = document.createElement("input");
    cancel_btn.type = "button";
    cancel_btn.value = "x";
    cancel_btn.classList.add("cancel-btn");
    cancel_btn.addEventListener("click", (event) => {
      cancel_btn.parentElement.remove();
      cancel_btn.remove();
    });

    destination[i].appendChild(cancel_btn);

    console.log(destination.length);
  }
};
window.onload = countAlbum;
window.onload = cancelTrack;
