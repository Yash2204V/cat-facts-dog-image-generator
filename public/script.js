const btn = document.getElementById("btn");
const h4 = document.getElementById("h4");
const catFact = document.getElementById("catFact");
console.log("Hey! js is working");

async function animalName() {
  const response = await fetch("/animalname");
  const data = await response.json();
    const animalName = data.fact;
  //   const animalName = data[0].join(" ");
  catFact.textContent = animalName;
}

async function animalImage() {
  const response = await fetch("/animalimage");
  const data = await response.json();

  let dataimage = data.message;

  console.log(dataimage);
  let img = document.createElement("img");
  if(document.querySelector('#dogImage') !== null){
    let image_x = document.getElementById('dogImage');
    image_x.parentNode.removeChild(image_x);
  }

  img.src = dataimage;
  img.id ='dogImage';
  console.log(img);

  let src = document.querySelector("body");
  src.appendChild(img);
}

btn.addEventListener("click", () => {
  animalName();
  animalImage();
});
