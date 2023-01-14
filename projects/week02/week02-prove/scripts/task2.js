/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Vern Wolfley"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = myName

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = "2023"

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = currentYear 

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPicture = "images/vw-pic.jpg"

// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute('src', myPicture)
document.querySelector("img").setAttribute('width', "240px")
document.querySelector("img").setAttribute('height', "300px")



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foodArray = [" barbecue", " mexican food", " pizza"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = foodArray

// Step 3: declare and instantiate a variable to hold another favorite food
var favFood0 = " Chick-fil-a"

// Step 4: add the variable holding another favorite food to the favorite food array
foodArray.push(favFood0)

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = foodArray

// Step 6: remove the first element in the favorite foods array
foodArray.shift()

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = foodArray

// Step 8: remove the last element in the favorite foods array
foodArray.pop()

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = foodArray


