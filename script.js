const baseRadios = document.querySelectorAll('input[name="base"]');
const sauceRadios = document.querySelectorAll('input[name="sauce"]');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let imgContainer = document.getElementById("img-container");

function showBase(event) {
  const img = document.createElement("img");
  img.src = event.target.dataset.image;

  if (this.checked) {
    imgContainer.appendChild(img);
    img.style.zIndex = 1;
  } else {
  }
}

baseRadios.forEach((baseRadio) =>
  baseRadio.addEventListener("change", showBase)
);

function showSauce(event) {
  const img = document.createElement("img");
  img.src = event.target.dataset.image;

  if (this.checked) {
    imgContainer.appendChild(img);
    img.style.zIndex = 2;
  } else {
  }
}

function showTop(event) {
  const img = document.createElement("img");
  img.src = event.target.dataset.image; //kur dabūt šo? console?

  if (this.checked) {
    imgContainer.appendChild(img);
    img.style.zIndex = 3;
    //img.style.visibility = "visible";
    img.console.log("checked");
  } else {
    //remove child?
    //img.style.visibility = "hidden";
    console.log("unchecked");
  }
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", showTop));

sauceRadios.forEach((sauceRadio) =>
  sauceRadio.addEventListener("change", showSauce)
);
