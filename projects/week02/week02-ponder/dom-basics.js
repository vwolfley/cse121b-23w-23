const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const addImage = document.createElement("img");
addImage.setAttribute("src", "https://placeimg.com/200/200/animals");
addImage.setAttribute("alt", "animals")
document.body.appendChild(addImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const sect1 = document.createElement("section");
const sect1H2 = document.createElement("h2");
sect1H2.innerText = "CSE 121b";
sect1.appendChild(sect1H2);
const sect1p = document.createElement("p");
sect1p.innerText = "Welcome to Javascript Language";
sect1.appendChild(sect1p);
document.body.appendChild(sect1);
