const myLeads=["apple","orange"]
const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const containerEl=document.getElementById("container")

inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)
//    console.log(myLeads)
  
})

for(let i=0;i<myLeads.length;i++){

    // console.log(myLeads[i])
    ulEl.innerHTML+= "<li>"+ myLeads[i]+ "</li> "
    
}
containerEl.innerHTML+="<button> click me </button>"



