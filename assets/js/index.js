const list=document.querySelector(".list")
const listBtn=document.querySelector("#list")

listBtn.addEventListener("click",()=>{
   list.classList.toggle("none")
})

const book=document.querySelector(".book")
fetch("http://localhost:3000/travel/")
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
              <button onclick="detailsBtn(${element.id})">Details</button>
              <button>Update</button>
        </div>
        </div>
        `
    });
})

function detailsBtn(id){
    window.location=`details.html?id=${id}`
}
function deleteBtn(id){
    axios.delete("http://localhost:3000/travel/"+id)
    window.location.reload()
}

const add=document.querySelector("#add")
add.addEventListener("click",()=>{
    window.location="add.html"
})


