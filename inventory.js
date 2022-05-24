var arr=JSON.parse(localStorage.getItem("products"))
// console.log(collect)


display(arr)
function display(arr){
arr.forEach(function(el,index){
  var box=document.createElement("div")
  box.setAttribute("id","boxs")

  var img=document.createElement("img")
  img.setAttribute("src",el.image)
  img.setAttribute("id", "imgs")

  var name=document.createElement("p")
  img.innerText=el.type

  var descri=document.createElement("p")
  descri.innerText=el.desc

  var price=document.createElement("p")
  price.innerText=el.price

  var del=document.createElement("button")
  del.setAttribute("id","remove_products")
  del.innerText="delete"
  del.style.cursor="pointer"
  del.addEventListener("click",function(){
    delrow(el,index)
  })

  box.append(img,name,descri,price,del)
document.querySelector("#all_products").append(box)
})


}
function delrow(el,index){
arr.splice(index,1)
localStorage.setItem("products",JSON.stringify(arr))
window.location.reload()
}