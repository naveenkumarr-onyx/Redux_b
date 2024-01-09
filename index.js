// // function Maincontent(){
// //     return(
// //         <>
// //         <img src="airbnb-logo.png" alt="hello"/>
// //         </>
// //     )
// // }

// // ReactDOM.render(<Maincontent/>,document.getElementById("root"));

// // function search() {
// //     var input = document.getElementById("search-input").value.toLowerCase(); // Get the search input value and convert it to lowercase for case-insensitive search
// //     var items = document.getElementsByClassName("searchable-item"); // Get all the elements with the "searchable-item" class

// //     for (var i = 0; i < items.length; i++) {
// //       var itemText = items[i].innerText.toLowerCase(); // Get the text content of the current item and convert it to lowercase

// //       if (itemText.includes(input)) {
// //         items[i].style.display = ""; // Show the item if the search input is found in its text
// //       } else {
// //         items[i].style.display = "none"; // Hide the item if the search input is not found
// //       }
// //     }
// //   }

// // maping

// // const array1= new Map([[1,2],[3,4],[5,6],])
// // console.log("array1")
// //  console.log(array1)

// // const array2 = new Map([ ["firstName","Naveen"],
// // ["lastName","Kumar"],
// // ["city","Rasipuram"]]
// //  );
// // console.log("array2")
// // console.log(array2)

// // let array2 = new Map();
// // array2.set("firstName", "Nandhu");
// // array2.set("lastName", "Nandhuk");
// // array2.set("city", "erode");
// // console.log(array2)

// // let array3= new Map([
// //   ["firstName", "Nandhu"],
// //   ["lastName", "Nandhuk"],
// //   ["city", "erode"],
// //   ["gender","Female"]

// // ])
// // console.log(array3)

// // const array1 = new Map([[
// //   "fatherName",["Ramalingam"]],
// //   ["MotherName",["Sumathi"]]]);
// // console.log(array1)
// // const array2 = [10,20,30,40,50]
// // array2.push(60,70)
// // setTimeout(()=>{
// //   const hello = "timeout"
// //   console.log(hello)
// // },50)
// // console.log(array2)

// // function
// // const value = hello(78,90,"this is function")
// // console.log(value)

// // const square = function (number){
// //   return number * number
// // }
// // const x = square(6)
// // console.log(x)

// // const value= function (a1,a2){
// //   return a1+a2
// // }

// // const x2 = value(22,23)

// // console.log(x2)

// // const a = ["helium","Oxygen","Nitrogen,carbon Dioxide","Monoxide"]
// // const a2 = a.map(function(s){
// //   return s.length;
// // })
// // const a2 = a.map((s)=> s.length)
// // console.log("Map + function",a2);

// // let price = function(a,b,c){
// //     return a,b,c*83
// // }

// // const convert = price(12,34,56)
// // console.log(convert)

// // ex

// // setInterval(()=>console.log("welcome"),0)

// // const person= {
// //     name:"Naveen",
// //     age :23,
// //     city :"Mumbai"
// // };
// // console.log("My Name is "+"" +person.name,"My Age is ",person.age,)

// // function calculateVolume(length) {
// //     return function (breadth) {
// //         return function (height) {
// //             return 5 * 5 * 7;
// //         }
// //     }
// // }
// // console.log(calculateVolume());

// function getUser(userId){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             const user = {
//                 id:userId,
//                 name:"Naveen kumar"
//             };
//             resolve(user)
//         },1000)
//     })

// }
// function getOrders (userId){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             const orders = ['Order 1', 'Order 2', 'Order 3'];
//            resolve(orders);
//           }, 1000);
//     })
//   }

//   function getProducts(orders) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             const products = ['Product 1', 'Product 2', 'Product 3'];
//             callback(products);
//           }, 1000);
//     })

//   };

// getUser(123)
// .then((user)=>getOrders(user.id))
// .then((orders)=>getOrders(orders))
// .then((result)=>{
//     console.log("Result", result);
// })
// .catch((error)=>{
//     console.log("Error ", error);
// })

// const x = new Date;
// console.log(x)

// function clickEvent(){
//     alert('Your Login session is over');
// };

// // setInterval(function showtime(){
// //     let a = new Date;
// //     let time = a.getHours()  + ":" + a.getMinutes() + ":" + a.getSeconds();
// //     let date = a.toLocaleDateString();

// //     document.getElementById('configure').innerHTML= time + " " +" "+ date
// // },1000);

// for(let i=0;i<10;i++){
//     console.log("This is naveen")
// }

// function* nextNatural(){
//     let naturalNumber = 1
//     while (true){
//         yield naturalNumber
//     }
// }
//     let gen = nextNatural();
//   for (i=0;i<10;i++){
//     console.log()
//   }

// function mainFunction(callback){
//     console.log("This is a log of mainFunction output")
// setTimeout(()=>{
//     callback("This is a callback output")
// },1000)
// }

// function secondFunction(result){
//     console.log("this is another Function "+result)
// }
// mainFunction(secondFunction);

// fetch("https://fakestoreapi.com/products/category/jewelery?id=5")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function showProjectDetails(projectId) {
//   // Hide all project details
//   var projectDetails = document.getElementsByClassName('project-details');
//   for (var i = 0; i < projectDetails.length; i++) {
//     projectDetails[i].style.display = 'none';
//   }

//   // Show the selected project details
//   var selectedProject = document.getElementById(projectId);
//   selectedProject.style.display = 'block';
// }

//   const arr=[{
//     id:"1",
//     name: "John",
//     age:23,
//     city:'New York'
//   },
//   {
//     id:"2",
//     name: "Jane",
//     age:28,
//     city:'Los Angeles'
//   }
// ]

// const fil = arr.filter((arr)=>{
//   try{
//     return arr['age']>30 && arr["city"]=="New York"
//   }catch(error){
//     console.log("The data Does not exist",error)
//   }

// })
// console.log(fil)

// addEventListener("click",function submit(){
//   const search = document.getElementById("searchBar");
//   var valve = search.value;
// })
// addEventListener("click", function submit(){
//     var input, filter, div, h1, txtValue;
//     input = document.getElementById("searchBar");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("portfolio");
//     h1 = div.getElementsByTagName("h1");
//     for (var i = 0; i < h1.length; i++) {
//       div=h1[i].getElementsByTagName("h1")[0];
//       txtValue = h1[i].textContent || h1[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         h1[i].style.display = "";
//       } else {
//         h1[i].style.display = "none";
//       }
//     }
// })

// const myCar = new model ("Ford","Mustang")
// const x = document.getElementById('portfolio')
// x.innerHTML=myCar.show()

// var btn = document.getElementsByClassName("sub--btn");
//
// function myFunction() {
//   var input, filter, div, h1, txtValue;
//   input = document.getElementById("searchBar");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("portfolio");
//   h1 = div.getElementsByTagName("h1");

//   for (var i = 0; i < h1.length; i++) {
//     div=h1[i].getElementsByTagName("h1")[0];
//     txtValue = h1[i].textContent || h1[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       h1[i].style.display = "";
//     } else {
//       h1[i].style.display = "none";
//     }
//   }

// var a = {},
// b={key:'b'},
// c={key:"c"};

// a[b]=100;
// a[c]=200

// $(document).ready(function(){
//   $("button").click(function(){
//     $("#hid").hide();
//   });
// });

// $(document).ready(function(){
//   $("#searchBar").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#portfolio h1").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// const x = document.getElementById("btn");

// x.addEventListener("click",()=>{
//   var element = document.getElementById('hid');
//   if (element !== null) element.style.display = 'none';
// })
// const str = "  Naveen     "  ;
// console.log(str.length)
// console.log(str.charAt(2))
// console.log(str.indexOf("N"))
// console.log(str.substring(1))
// console.log(str.concat(str))
// console.log(str.split())
// console.log(str.slice(1,2))
// console.log(str.replace("a","f"))
// console.log(str.trim())
// console.log(str.toLowerCase())
// console.log(str.toLocaleUpperCase())

// const arr = ["apple","Mango"];
// const arr1 = ["Grapes"]
// console.log(arr.length)
// console.log(arr.toString())
// console.log(arr.includes("apple"))
//  const el= arr.concat(arr1)
//  console.log(el)

// function person(age){
//   if(age ==35){
//     return "Yes,The Person age is correct"
//   }else{
//     return "Yes,The Person age is wrong"
//   }
// }
// console.log(person(35))\

// console.log("fecth1 ")
// console.log("fecth2 ")
// setTimeout(()=>{
//   const fecthData = fetch("https://fakestoreapi.com/products?limit=5")
// .then(res=>res.json())
// .then(result=>console.log(result))
// },2000)
// setTimeout(()=>{
//   const fecthData = fetch("https://fakestoreapi.com/products?sort=desc")
// .then(res=>res.json())
// .then(result=>console.log(result))
// },1000)

// const check = function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(0);
// };
// console.log(check("naveen"));

const literal = {
  name: "naveen",
  hobbies: ["eat", "sleep"],
  alertName: function () {
    console.log(this.name);
  },
};
const array1 = [];
// literal.alertName("Hobbies");
sessionStorage.setItem("check", JSON.stringify(literal));
const mySession = JSON.parse(sessionStorage.getItem("check"));
console.log(mySession);
const get = prompt("enter value");
if (get !== null) {
  const sol = alert("value is " + get.split(" "));
} else {
  alert("value is null ");
}
