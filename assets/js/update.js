const id=new URLSearchParams(window.location.search).get("id")
const form=document.querySelector("form")
const update_image=document.querySelector("#update-image")
const update_file=document.querySelector("#update-file")
const name=document.querySelector("#name")
const description=document.querySelector("#description")
const input=document.querySelector('input[type="file"]')

fetch("http://localhost:3000/travel/"+id)
.then(res=>res.json())
.then(data=>{
    update_image.src=data.img
    name.value=data.title
    description.value=data.description;
    update_image.style.width="70px"
    update_image.style.height="70px"
})


input.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
        update_image.src=reader.result;
       
    }
}
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    axios.patch("http://localhost:3000/travel/"+id,{
        img:update_image.src,
        title:name.value,
        description:description.value
    })
   .then(res=>{
    window.location="index.html?id"
   })
  
   
})