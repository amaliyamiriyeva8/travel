const list=document.querySelector(".list")
const listBtn=document.querySelector("#list")

let firstArr=[];
let secondArr=[];
const search=document.querySelector("#searchh")
const sort=document.querySelector("#sortt")

listBtn.addEventListener("click",()=>{
   list.classList.toggle("none")
})

const book=document.querySelector(".book")

function CRUD(){
fetch("http://localhost:3000/travel/")
.then(res=>res.json())
.then(data=>{
    secondArr=data;
    book.innerHTML=""
    firstArr=firstArr.length || search.value ? firstArr : data;
    axios.get("http://localhost:3000/favorites")
    .then(fav=>{
        firstArr.forEach(element => {
        if(fav.data.find(favEl=>favEl.id===element.id)){
            book.innerHTML+=`
            <div class="book-1">
            <img src=${element.img} alt="">
            <i class="bi bi-heart-fill"  style="color:red" onClick='DeleteFavEl(${element.id})'></i>
            <h1>${element.title}</h1>
            <p>${element.description}</p>
            <div class="btns">
                  <button  onclick="deleteBtn(${element.id})">Delete</button>
                  <button onclick="detailsBtn(${element.id})">Details</button>
                  <button>Update</button>
            </div>
            </div>
            `
        }
        else{
            book.innerHTML+=`
            <div class="book-1">
            <img src=${element.img} alt="">
            <i class="bi bi-heart"  onClick='AddFavEl(${element.id})'></i>
            <h1>${element.title}</h1>
            <p>${element.description}</p>
            <div class="btns">
                  <button  onclick="deleteBtn(${element.id})">Delete</button>
                  <button onclick="detailsBtn(${element.id})">Details</button>
                  <button onclick="updateBtn(${element.id})">Update</button>
            </div>
            </div>
            `
        }
    }) 
    });
})
}
CRUD()

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

function AddFavEl(id){
   fetch(`http://localhost:3000/travel/${id}`)
    .then(res=>res.json())
    .then(data=>{
        axios.post("http://localhost:3000/favorites/",data)
    })
}
function DeleteFavEl(id){
    axios.delete(`http://localhost:3000/favorites/${id}`)
}

const favori=document.querySelector("#favori")
favori.addEventListener("click",()=>{
    window.location="favorite.html"
})

function updateBtn(id){
    window.location=`update.html?id=${id}`
}


search.addEventListener("input",(e)=>{
    firstArr =secondArr;
    firstArr = firstArr.filter((element) =>
    element.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    CRUD()
})

let sorted="des";
sort.addEventListener("click",()=>{
    if(sorted==="as"){
        firstArr.sort((a,b)=> a.title.localeCompare(b.title))
        sorted="des"
        sort.innerHTML="SORT ASC"
    }
    else if(sorted==="des"){
        firstArr.sort((a,b)=> b.title.localeCompare(a.title))
        sorted="def"
        sort.innerHTML="SORT DSC"
    }
    else{
        firstArr=secondArr
        sorted="as"
        sort.innerHTML="SORT DEF"
    }
    CRUD()
})