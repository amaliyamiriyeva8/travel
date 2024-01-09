let id=new URLSearchParams(window.location.search).get("id")
const book=document.querySelector(".book")
fetch("http://localhost:3000/favorites")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        book.innerHTML+=`
        <div class="book-1">
        <img src=${element.img} alt="">
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        <div class="btns">
              <button  onclick="deleteBtn(${element.id})">Delete</button>
        </div>
        </div>
        `
    });
})


const back=document.querySelector(".back")
back.addEventListener("click",()=>{
    window.location="index.html"
})

function deleteBtn(id){
    axios.delete("http://localhost:3000/travel/"+id)
    window.location.reload()
}