const person = {
    firstName: "Soorya S",
    lastName: "Das",
    age: 25,
    eyeColor: "black"
};
// accessing the person's lastname
person.lastName;

person["lastName"];

const person1 = {
    firstName: "Soorya S",
    lastName : "Das",
    id       : 5566,
    fullName : function() 
    {
      return this.firstName + " " + this.lastName;
    }
};

 name = person.fullName();
