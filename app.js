//Question 1//
var items = [
    {
    name:"juice",
    price:50,
    quantity: 3,
    },
    {
    name:"cookie",
    price:30,
    quantity:9,
    },
    {
    name:"shirt",
    price:880,
    quantity:1,
    },
    {
    name:"pen",
    price:100,
    quantity:2}
    ]
    
    var totalPrice = items.reduce(function(accumulator, item){ return accumulator + item.quantity * item.price;}, 0)
    console.log(totalPrice);
    
    //Question 2 //
    var persInfo = {
        name:"Haider",
        email:"Haider@gmail.com",
        password: 123456768,
        age : 22,
        country : "pakistan",
        }
    
        var age = "age" in persInfo;
        console.log(age);
    
        var country = "country" in persInfo;
        console.log(country);
    
        var firstName = "firatName" in persInfo;
        console.log(firstName);
    
        var lsName = "lsName" in persInfo;
        console.log(lsName);
    
        //Question 3 //
    
        function Address(house, street, tehsil, city){
            this.house = house;
            this.street = street;
            this.tehsil = tehsil;
            this.city = city;
        }
    var address1 = new Address (21, 9, "Abbotabad", "Abbotabad");
    var address2 = new Address (24, 5, "East Karachi", "Karachi");
    var address3 = new Address (27, 3, "West Karachi", "Karachi");
    var address4 = new Address (29, 8, "Central Karachi", "Karachi");
    var address5 = new Address (23, 1, "Mansehra", "Mansehra");
    
    console.log(address1);
    
    //Question 4 //
    
    $(document).ready(function(){
    
        jQuery("personDetails").hide();
    
        jQuery("#submit").click(function(){
    
            jQuery("personDetails").show();
    
    var name = $("#name").val();
    var gender = $("#gender").val();
    var address = $("#address").val();
    var education = $("#education").val();
    var profession = $("#profession").val();
    
    function Person(name,gender,address,education,profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
    }
    
    // Create a Person object
    let person = new Person(name,gender,address,education,profession);
    
    // Display Data
    document.getElementById("nameDetail").innerHTML = "Person name is " + person.name + ".";
    document.getElementById("genderDetail").innerHTML = "Person gender is " + person.gender + ".";
    document.getElementById("addressDetail").innerHTML = "Person an address is " + person.address + ".";
    document.getElementById("educationDetail").innerHTML = "Person education is " + person.education + ".";
    document.getElementById("professionDetail").innerHTML = "Person profession is " + person.profession + ".";
        })
    
    })
    