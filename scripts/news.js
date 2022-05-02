// Use Import export (MANDATORY)


import {navbar,news} from '../components/navbar.js'
console.log(navbar)

document.querySelector("#navbar").innerHTML= navbar()

let append = (data,results)=>{
    //content title urlToImage
    results.innerHTML = null

    
       
    let box = document.createElement("div")
    box.setAttribute("class","box")
    
    
    let img = document.createElement('img')
    img.src = data.urlToImage
    img.setAttribute("class","image")
    let boxes = document.createElement("div")
    boxes.setAttribute("class","boxes")
    
    let title = document.createElement("h3")
    title.innerText = data.title
    
    let p = document.createElement("p")
    p.innerText = data.content
    
    boxes.append(title,p)
    box.append(img,boxes)




    results.append(box)
     
        
    }
    
    
let data = JSON.parse(localStorage.getItem("news"))
console.log(data)
append(data,results)