// inputBtn.addEventListener("click",function(){
//     console.log("btn clicked")
// })

// inputBtn.addEventListener("click",print)
// function print(){
//     console.log("printed")
// }
// const name="pragala"
// console.log(name)

// const array=["apple","orange"]
// console.log(array)
// array="new"
// console.log(array)   //Assignment to constant variable.


// ==============innerHTML=======================

// containerEl.innerHTML+="<button onclick='btnclick()'> click me </button>"

// const cont=document.getElementById("container")
// cont.innerHTML="<button id='butn'> click me </button>"

// document.getElementById("butn").addEventListener("click",function(){
//     cont.innerHTML+= "<img style='display:block'id='immg'src='https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'>"
// })

// ==============Localstorage===================

// localStorage.setItem("myName",[123,"mango",12.5,"kiwi"])
// localStorage.setItem("user" ,123)
// localStorage.setItem("product","iphone")
// const local=localStorage.getItem("myName")
// localStorage.removeItem("user")
// localStorage.clear()
// console.log(local)
// console.log(typeof local)

// let mobile=["iphone","realme","infinix","redmi"]
// // console.log(mobile)
// localStorage.setItem("brand",JSON.stringify(mobile))
// let smartphone =JSON.parse(localStorage.getItem("brand"))
// mobile.push("nothing","tecno")
// console.log(mobile)
// localStorage.setItem("brand",JSON.stringify(mobile))
//  smartphone =JSON.parse(localStorage.getItem("brand"))

// let fruits=`["apple","orange"]`
// fruits=JSON.parse(fruits)
// fruits.push("kiwi")
// localStorage.setItem("fruitsArr",JSON.stringify(fruits))
// const fromLocal=JSON.parse(localStorage.getItem("fruitsArr"))
// console.log(fromLocal)

// =========Truthy or Falsy====================

// console.log(Boolean(undefined))   //falsy
// console.log(Boolean("")) //falsy
// console.log(Boolean(null)) //falsy
// console.log(Boolean(0)) //falsy
// console.log(Boolean(false)) //falsy
// console.log(Boolean("false")) //truthy
// console.log(Boolean(true)) //truthy
// console.log(Boolean("hi")) //truthy
// console.log(Boolean([])) //truthy
// console.log(Boolean({})) //truthy
// console.log(Boolean(1235)) //truthy
// console.log(Boolean(NaN)) //falsy

