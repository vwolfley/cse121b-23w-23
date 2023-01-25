/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

const me = {
  name: "Vern Wolfley",
  photo: "images/vw-pic.jpg",
  favoriteFoods: ["barbecue", "mexican food", "pizza", "Chick-fil-a"],
  hobbies: ["wood working", "metal working", "tools", "hunting", "fishing"],
  placesLived: [],
};

const p1 = { place: "El Mirage", length: "19 Years" };
const p2 = { place: "Minnesota", length: "2 Years" };
const p3 = { place: "Tempe", length: "3 Years" };
const p4 = { place: "Litchfield Park", length: "19 Years" };

me.placesLived.push(p1, p2, p3, p4);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = me.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", me.photo);
document.querySelector("#photo").setAttribute("width", "240px");
document.querySelector("#photo").setAttribute("height", "300px");
document.querySelector("#photo").setAttribute("alt", me.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Foods
me.favoriteFoods.forEach((food) => {
  const li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

// Hobbies
me.hobbies.forEach((hobby) => {
  const li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

// Places Lived
me.placesLived.forEach((place) => {
  // console.log(place);
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
