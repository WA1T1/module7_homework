const obj = {name: 'Valentin', age: 21, city: 'Yekaterinburg'}

function GetKeysFromObject(obj) {
    Object.keys(obj).map((item)=>{
        console.log(item)
    })
}

GetKeysFromObject(obj)