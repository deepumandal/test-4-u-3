// Ude Import export (MANDATORYdocument.querySelector("#sidebar>button").children// Onclicking store the news in local storage with key "news" so that you can access that on news.html pagdocument.querySelector("#sidebar>button").childrenimport {navbar,news,append,sidebar} from '../components/navbar.jsdocument.querySelector("#sidebar>button").childrenconsole.log(navbar)
import {navbar,news,append, sidebar} from '../components/navbar.js'
console.log(navbar)
document.querySelector("#navbar").innerHTML= navbar()


//https://masai-mock-api.herokuapp.com/news?q={query}

let enter = document.querySelector("#search_input").value


document.getElementById("search_input").addEventListener("keydown",function(enter){
   // alert('enter')
//console.log(enter)

let query = document.querySelector("#search_input").value
   
   if(enter.key =="Enter"){   
          
    let x =  news(query).then(function(res){
        console.log(res.articles)
        localStorage.setItem("data",JSON.stringify(res.articles))
        window.location.href='search.html'
    })
   }  


})


let category = document.querySelector("#sidebar").children
//console.log(category)







function myfunc(){
   console.log(this.id)

let output = sidebar1(this.id).articles
console.log(output)
   
}


for(let e of category){
   e.addEventListener("click",myfunc)
}

   
let sidebar1 = async (country)=>{
console.log(country)
   
   let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`
   
   try{
   
   let data = await fetch(url)
   let res =  await data.json()
   console.log(res.articles)
   append(res.articles,results)
   
   
   }catch(err){
       console.log(err)
   }    
   
   }

   sidebar1("in")


document.querySelector(".image").style.cursur = 'pointer'


