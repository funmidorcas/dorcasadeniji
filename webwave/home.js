// let bar  = document.getElementById("bar")
// let close  = document.getElementById("close")
// let mobileMenu = document.getElementById("mobile-nav-links")
// let mobileIcons = document.getElementById("mobile-icons")
// let mobileStatus = false
// function handleMobileNav() {
//   mobileStatus = !mobileStatus
//   console.log(mobileStatus)
//     if (mobileStatus) {
//   mobileMenu.style.display = "flex"
//   bars.style.display = "none"
//   close.style.display = "block"
//     }
//     else{
//         mobileMenu.style.display = "none" //.top = "-1000"
//         bars.style.display = "block"
//         close.style.display = "none"
      
//     }
// }

// mobileIcons.addEventListener("click", handleMobileNav);




//higher order function are loops*functions
// they are methods that you call on arrays

const numArr = [1,2,3,4,5,6,7,8,9,10]
let sum1 = 0
let z = 0
 while (z < numArr.length) {
    sum1 = sum1 + numArr[z]
    z++
 }

 console.log(sum1)

 const students = [
    "funmi",
    "tobi",
    "seyi"
 ]
const topStudents = []
for(let name of students){
    console.log(name)

//  name = name.toUpperCase
 topStudents.push(name.toUpperCase())
   }
   console.log(topStudents)

   const quiteStudents = [
      "luke",
      "bose", 
      "temi"
   ]
   const modifiedName = []
   let addedEven = 0
   quiteStudents = (name, index, array) => {
      console.log(name)
      console.log(index)
      console.log(array)

   }
