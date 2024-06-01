const uploadButton = document.querySelector(button);
const childDive = document.querySelector(".child");
const input = document.querySelector("input");


function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }

uploadButton.addEventListener("click", function(event) {
    event.preventDefault();
   let div = document.createElement("div");
   let imageSting = input.value;
   let image = `<img class="upload-image" src="${imageSting}">`;
   div.innerHTML = image;
   childDive.appendChild(div);
});