const obj = {name: 'Valentin', age: 21, city: 'Yekaterinburg'}

let string = 'name'
let string2 = 'height'

function GetAvailability(string, obj) {
    return obj.hasOwnProperty(string)
}

console.log(GetAvailability(string, obj))
console.log(GetAvailability(string2, obj))