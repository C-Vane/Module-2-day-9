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
window.onload = countAlbum;
