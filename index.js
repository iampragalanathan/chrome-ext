let myLeads=[]
const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const containerEl=document.getElementById("container")
const deleteEl=document.getElementById("delete-btn")


let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
// console.log(leadsFromLocalStorage)
if( leadsFromLocalStorage){

    myLeads=leadsFromLocalStorage
     renderLeads()
}
else{
    
    ulEl.textContent="no data to show,please give input and click save input button"
}


deleteEl.addEventListener('click',function(){

     localStorage.clear()
     myLeads=[]
    //  console.log(myLeads)
    renderLeads()

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
renderLeads()
   } 
   else{

    ulEl.textContent="type something in input box"
   }
  
})

function renderLeads(){
    let listItems=""
for(let i=0;i<myLeads.length;i++){

   
    // listItems+="<li> <a href='"+myLeads[i]+" '>" +myLeads[i] + "</a></li>"
      listItems+=`<li> <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a> </li>`



    
}
ulEl.innerHTML=listItems
}





