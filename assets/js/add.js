const form=document.querySelector("form")
const add_image=document.querySelector("#add-image")
const add_file=document.querySelector("#add-file")
const name=document.querySelector("#name")
const description=document.querySelector("#description")
const input=document.querySelector('input[type="file"]')

input.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
        add_image.src=reader.result;
        add_image.style.width="70px"
        add_image.style.height="70px"
    }
}
})

form.addEventListener("submit",(event)=>{
event.preventDefault()
let obj={}
let src=add_file.files[0];
const reader=new FileReader()   
reader.readAsDataURL(src)
reader.onload=(e)=>{
    obj={
    img:e.target.result,
    title:name.value,
    description:description.value
    }
    axios.post("http://localhost:3000/travel",obj)
 }
    window.location="index.html"
})