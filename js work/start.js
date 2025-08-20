// const fruitsArray = [
//     "Banana", "Mango", "olive", "orange", "pawpaw"
// ]
 //const numArray = [1, 2, 3, 4, 5, 6]
 //const copy = [...numArray]
 //console.log(copy)
 //console.log(numArray[numArray.length-1])

// //object array
//   const objectArray = [
//     { name: "Dog", legs: 4, type: "ominivore"},
// { name: "Bird", legs: 2, type: "ominivore"},
//   { name: "Lion", legs: 4, type: "carnivore"},
//     { name: "Cow", legs: 4, type: "hebivore"}

// ]
 // unclear yet or try to ignore jare 
//  for (const object of objectArray){
// console.log(object[0])     
// }
  // for of loop 
//     for (const [first, second, third, fourth] of objectArray) {
//     console.log(first)
//   console.log(objectArray[0])
// }

//  const [first, second, third] = objectArray  
//     console.log(first, second, third)

// console.log(typeof second)
// console.log(objectArray[3].legs)
// console.log(objectArray[1].name)
// console.log(third)

// const listMeal = fruitsArray.map((fruit, index) => {
//     // console.log(fruit, index)
//     // return 2
//     return fruit.slice(0,3)

// })
// console.log(listMeal)

// const shopShelf = [ "bag", "shoe", "cat food", "dog food" ]
//  let userPrompt = "food"
//  const searchResults = shopShelf.filter((product) => {
// return product
//  })
//  console.log(userPrompt)

 let list = document.getElementById("list")
let shopList = document.querySelectorAll("li")
// let userPromt = document.
 console.log(shopList) 
const shopArray = []

shopList.forEach((li) => shopArray.push(li.textContent))
console.log(shopArray)
 userPrompt.addEventListener("change", (event) => {
    let value = event.target.value.toLowerCase()
    console.log(value)
 })
const searchBar = shopList.filter((item) => item.toLowerCase().includes(value))
   console.log(searchBar)
if(searchBar.length != 0){
    // console.log("searchBar")
    const resultList = searchBar.map((item) => "<li>" + item + "</li>")
    console.log(resultList)
} else {
    console.log("not available")
    list.innerHTML = "not on shelf"

}



//  let displayDiv = document.createElement("div")
//  displayDiv.innerHTML = "<button>Stop</button>"
//  document.body.appendChild(displayDiv);
//  let image = document.createElement("img");  
//  image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANH8-R3R74SaxS7BLFPnnar8LzX02fW2NvQ&s";
//  displayDiv.appendChild(image);



