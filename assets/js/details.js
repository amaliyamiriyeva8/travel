const id=new URLSearchParams(window.location.search).get("id")
const book=document.querySelector(".book")
fetch("http://localhost:3000/travel/"+id)
.then(res=>res.json())
.then(element=>{
        book.innerHTML+=`
        <div class="book-1">
        <img src=${element.img} alt="">
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        </div>
        `
    });

    const back=document.querySelector(".back")
    back.addEventListener("click",()=>{
        window.location="index.html"
    })
