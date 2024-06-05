const fun = async () => {
const data = await fetch("https://status.pizza.json/210")
const json = await data.json()
console.log(json)


}

fun()