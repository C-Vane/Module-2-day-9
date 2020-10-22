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
      cancel_btn.parentElement.classList.add("loadoff");
      let s = destination[destination.length - 1].querySelectorAll("strong")[1].innerText.split(":");

      let a = parseInt(s[0]) * 60 + parseInt(s[1]);

      s = "";
      s = cancel_btn.parentElement.querySelectorAll("td")[1].innerText.split(":");
      a -= parseInt(s[0]) * 60 + parseInt(s[1]);

      s = a % 60 < 10 ? "0" + (a % 60) : a % 60;
      destination[destination.length - 1].querySelectorAll("strong")[1].innerText = Math.floor(a / 60) + ":" + (a % 60);

      setTimeout(function () {
        cancel_btn.parentElement.remove();
      }, 1000);
    });
    destination[i].appendChild(cancel_btn);
  }
};
const clearForm = () => {
  const modal = document.getElementById("addtrack").getElementsByClassName("form-group")[0];
  const input = modal.querySelectorAll("input");
  const select = modal.querySelectorAll("select");
  input.forEach((element) => {
    element.value = "";
  });
  select.forEach((element) => {
    element.value = "";
  });
};

const addTrack = () => {
  const modal = document.getElementById("addtrack").getElementsByClassName("form-group")[0];
  console.log(modal);
  const track_number = modal.querySelector("#tracknumber").value;
  const live_track = modal.querySelector("#livetrack").value;
  const track_name = modal.querySelector("#trackname").value;
  const track_lenght = modal.querySelector("#tracklength").value;
  const track_feat = modal.querySelector("#trackfeaturing").value;
  const destination_num = document.querySelectorAll("table tbody tr th");
  const destination = document.querySelectorAll("table tbody")[0];
  let i = 0;
  if (track_number === "null" || track_name === "null" || track_lenght === "null" || live_track === true) {
    alert("Fill in the form");
  } else {
    for (i = 0; i < destination_num.length; i++) {
      if (track_number === destination_num[i].innerText) {
        alert("Track Already Exists");
      } else if (track_number > destination_num[i].innerText && track_number < destination_num[i + 1].innerText) {
        const new_tr = document.createElement("tr");
        const new_th = document.createElement("th");
        const new_title = document.createElement("td");
        const new_lenght = document.createElement("td");
        new_th.setAttribute("scope", "row");
        new_th.innerText = track_number;
        new_title.innerText = track_name;
        new_lenght.innerText = track_lenght;
        destination.insertBefore(new_tr, destination.childNodes[i]);
        new_tr.appendChild(new_th);
        new_tr.appendChild(new_title);
        new_tr.appendChild(new_lenght);

        let s = destination.childNodes[destination.length - 1].querySelectorAll("strong")[1].innerText.split(":");

        let a = parseInt(s[0]) * 60 + parseInt(s[1]);

        s = "";
        s = track_lenght(":");
        a += parseInt(s[0]) * 60 + parseInt(s[1]);

        s = a % 60 < 10 ? "0" + (a % 60) : a % 60;
        destination[destination.length - 1].querySelectorAll("strong")[1].innerText = Math.floor(a / 60) + ":" + (a % 60);
      }
    }
  }
};

window.onload = function () {
  countAlbum();
  cancelTrack();
};
