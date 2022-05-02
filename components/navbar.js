function navbar (){
    
    return `  <h1 onclick='window.location.href="index.html"'>NEWS</h1>
    <input type="text" name="" id="search_input">`
}



let news = async (query)=>{

    try{
    
    let data = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    let res =  await data.json()
    
    return res
    
    
    }catch(err){
        console.log(err)
    }    
    
    }

    
let sidebar = async (country)=>{

    try{
    
    let data = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`)
    let res =  await data.json()
    
    return res
    
    
    }catch(err){
        console.log(err)
    }    
    
    }


    let append = (data,results)=>{
        //content title urlToImage
        results.innerHTML = null

            data.forEach((e,i) => {
           
        let box = document.createElement("div")
        box.setAttribute("class","box")
        box.setAttribute("id",i)
        
        let img = document.createElement('img')
        img.src = e.urlToImage
        img.setAttribute("class","image")
        let boxes = document.createElement("div")
        boxes.setAttribute("class","boxes")
        
        let title = document.createElement("h3")
        title.innerText = e.title
        
        let p = document.createElement("p")
        p.innerText = e.content
        
        boxes.append(title,p)
        box.append(img,boxes)




        results.append(box)
            });
            
        }
        
       

export  {navbar,news,append,sidebar}