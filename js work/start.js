const fruitsArray = [
    "Banana", "Mango", "olive", "orange", "pawpaw"
]
const numArray = [1, 2, 3, 4, 5, 6]


//object array
const objectArray = [
    { name: "Dog", legs: 4, type: "ominivore"},
    { name: "Bird", legs: 2, type: "ominivore"},
    { name: "Lion", legs: 4, type: "carnivore"},
    { name: "Cow", legs: 4, type: "hebivore"}

]

const listMeal = fruitsArray.map((fruit, index) => {
    // console.log(fruit, index)
    // return 2
    return fruit.slice(0,3)

})
console.log(listMeal)

const shopShelf = [ "bag", "shoe", "cat food", "dog food" ]
 let userPrompt = "food"
 const searchResults = shopShelf.filter((product) => {
return product
 })
 console.log(userPrompt)




 
 let displayDiv = document.createElement("div")
 displayDiv.innerHTML = "<button>Stop</button>"
 document.body.appendChild(displayDiv);
 let image = document.createElement("img");  
 image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANH8-R3R74SaxS7BLFPnnar8LzX02fW2NvQ&s";
 displayDiv.appendChild(image);