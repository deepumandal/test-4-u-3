// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,news,append} from '../components/navbar.js'
console.log(navbar)

document.querySelector("#navbar").innerHTML= navbar()




let data = JSON.parse(localStorage.getItem("data"))
console.log(data)
append(data,results)


let enter = document.querySelector("#search_input").value


document.getElementById("search_input").addEventListener("keydown",function(enter){
   //alert('enter')
//console.log(enter)

let query = document.querySelector("#search_input").value
   
   if(enter.key =="Enter"){              
    let x =  news(query).then(function(res){
        console.log(res.articles)
       let x = append(res.articles,results)
       

    })
   }  
   
   


})

let result = document.querySelector(".box")
results.style.cursor = 'pointer'
result.addEventListener("click",function(){
   console.log(this)
})

