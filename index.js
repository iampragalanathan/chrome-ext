const myLeads=["apple","orange"]
const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const containerEl=document.getElementById("container")

inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)
   inputEl.value=""
//    console.log(myLeads)
renderLeads()
  
})

function renderLeads(){
    let listItems=""
for(let i=0;i<myLeads.length;i++){

    // console.log(myLeads[i])
    // ulEl.innerHTML+= "<li>"+ myLeads[i]+ "</li> "
    listItems+="<li>" '<a href='' target=''blank>' +myLeads[i] + '</a>' "</li>"
    
}
ulEl.innerHTML=listItems
}

// containerEl.innerHTML+="<button onclick='btnclick()'> click me </button>"

// const cont=document.getElementById("container")
// cont.innerHTML="<button id='butn'> click me </button>"

// document.getElementById("butn").addEventListener("click",function(){
//     cont.innerHTML+= "<img style='display:block'id='immg'src='https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'>"
// })



