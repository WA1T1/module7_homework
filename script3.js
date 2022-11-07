function CreateObjectWithoutPrototype() {
    return Object.create(null)
}

const objWithoutProto = CreateObjectWithoutPrototype()

console.log(objWithoutProto)