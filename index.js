let myLeads=[]
const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const containerEl=document.getElementById("container")


let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
// console.log(leadsFromLocalStorage)
if( leadsFromLocalStorage){

    myLeads=leadsFromLocalStorage
     renderLeads()
}
else{
    
    ulEl.textContent="no data to show,please give input and click save input button"
}



inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)
   inputEl.value=""
//    console.log(myLeads)
localStorage.setItem("myleads",JSON.stringify(myLeads))
// let box= localStorage.getItem('leads')
// console.log(box)
renderLeads()
  
})

function renderLeads(){
    let listItems=""
for(let i=0;i<myLeads.length;i++){

   
    // listItems+="<li> <a href='"+myLeads[i]+" '>" +myLeads[i] + "</a></li>"
      listItems+=`<li> <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a> </li>`



    
}
ulEl.innerHTML=listItems
}

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





