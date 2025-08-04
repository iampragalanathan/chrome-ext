let myLeads=[]
const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const containerEl=document.getElementById("container")
const deleteEl=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")


let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
// console.log(leadsFromLocalStorage)
if( leadsFromLocalStorage){

    myLeads=leadsFromLocalStorage
     render(myLeads)
}
else{
    
    ulEl.textContent="no data to show,please give input and click save input button"
}


deleteEl.addEventListener('click',function(){

     localStorage.clear()
     myLeads=[]
    //  console.log(myLeads)
    render(myLeads)

  if(leadsFromLocalStorage ===null && myLeads.length <=0){

    ulEl.textContent="no data to show"
  }

     
})



inputBtn.addEventListener("click",function(){
   if(inputEl.value){

    myLeads.push(inputEl.value)
   inputEl.value=""
//    console.log(myLeads)
localStorage.setItem("myleads",JSON.stringify(myLeads))
// let box= localStorage.getItem('leads')
// console.log(box)
render(myLeads)
   } 
   else{

    ulEl.textContent="type something in input box"
   }
  
})

function render(leads){
    let listItems=""
for(let i=0;i<leads.length;i++){

   
    // listItems+="<li> <a href='"+myLeads[i]+" '>" +myLeads[i] + "</a></li>"
      listItems+=`<li> <a target="_blank" href="${leads[i]}"> ${leads[i]} </a> </li>`



    
}
ulEl.innerHTML=listItems
}

const tab=[{
  url: "https://www.google.com/",
},]
tabBtn.addEventListener("click",function(){
    //  console.log(tab[0].url)//
     myLeads.push(tab[0].url)
     localStorage.setItem("myleads",JSON.stringify(myLeads))
     render(myLeads)
})




// ========
// function sum(a,b){
//   return a+b
// }
// // console.log(sum(8,9))

// function print(message){

//   console.log(`HI ${message} Mike`)
// }

// // print ("Good Morning")

// let userData=["john","Ben","Ram","Anita"]
// function looper(userArr){

//   let dataVar=""
//   for(let i=0; i<userArr.length;i++){
//     dataVar+=userArr[i] + " "}
//     return dataVar
// }
// console.log(looper(userData))

// let userObj={

//   name: "MIke",
//   age:"25",
//   job:"dev",
//   skill:"React"

// }
// function objPrint(obj){

//   console.log(`The employee name is ${obj.name} age is ${obj.age}, job is ${obj.job}. He is skilled in ${obj.skill}`)
// }

// objPrint(userObj)