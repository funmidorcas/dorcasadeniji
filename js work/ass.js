function fullName(){
    console.log("Funmi Adeniji")
}
fullName()


 function realName(firstName, lastName) {
   return firstName + " " + lastName

   }
  console.log(realName("Dorcas", "Adeniji"))

function addNumbers(a, b){
    return a + b
}
console.log(addNumbers(2,3))


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary', 'IceLand', 'Ireland',
    'Japan',
    'Kenya',
    ]
    
    const names = ['Tamara', 'Mathias', 'Elias', 'Brook'] 
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    const products = [ 
      { product: 'banana', price: 3 }, 
      { product: 'mango', price: 6 }, 
      { product: 'potato', price: ' ' }, 
      { product: 'avocado', price: 8 }, 
      { product: 'coffee', price: 10 }, 
      { product: 'tea', price: '' }, 
    ]

    countries.forEach(country => console.log(country))
    names.forEach(name => console.log(name))
    numbers.forEach(number => console.log(number));
 const countriesList = countries.map((country) => {
    return countries.length
 })
 console.log(countriesList)
 const countriesLetter = countries.map((country) => {
return country.toUpperCase()
})
console.log(countriesLetter)

const squareNum = numbers.map((number) => {
    return number * number
})
console.log(squareNum)

const nameUpper = names.map((name) => {
    return name.toUpperCase()
    })
    console.log(nameUpper)
    const productPrice = products.map((product) => {
        return product.price
        })
        console.log(productPrice)
        
        const countriesWithA = countries.filter((country) => {
            return country.includes("a")
        })
        console.log(countriesWithA)

        const countriesWithSix = countries.filter((country) => {
            return country.length === 6
        })
        console.log(countriesWithSix)

        const countriesWithSixAndMore  = countries.filter((country) => {
            return country.length >= 6
        })
        console.log(countriesWithSixAndMore) 
        const countriesStartWithE = countries.filter((country) => {
            return country.startsWith("E")
        })
        console.log(countriesStartWithE)

        const productsWithPrice = products.filter((product) => {
            return product.price !== ''})
        console.log(productsWithPrice)

        // const countriesWithLand = countries.filter((country) => {
        //     return country.includes("land")
        // })
        // console.log(countriesWithLand)


        function findPatternCountries(pattern) {
            return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
          }
          console.log(findPatternCountries('land'))

          let dog = {}
console.log(dog)
dog = {
    name: 'Buddy',
    legs: 4,
    color: 'Brown',
    age: 5,
    bark: function() {
      return 'Woof!'
    }
  };
  console.log(dog);
  console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
