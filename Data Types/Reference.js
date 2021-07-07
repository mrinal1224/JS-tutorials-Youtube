let personDetail ={
    name : "Adam",
    age : 25
}

let secondPersonDetail = personDetail

personDetail.name = "Steve"

console.log(personDetail)
console.log(secondPersonDetail)