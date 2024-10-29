 let book ="https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
//  onebook
 fetch(book)
.then(book => book.json())
.then(book=> gatalog(book))
console.log(book);
let div1=document.querySelector(".divone"); 
let div2=document.querySelector(".divtow");
function gatalog(book){

  for (let index = 0; index < book.length; index++) {
    div1.innerHTML= `<div class="divone align-items-center   justify-content-center"><img  class="  imgfourbook align-items-center   justify-content-center"src="${book[index].simple_thumb}"/></div>
`
    console.log("${book[index].simple-thumb}");
   div2.innerHTML=
   `<h3 class="partaf my-2">${book[index].title}</h3>
   <div class="line3 mb-5"></div>
   <h5 class="gry mb-3">${book[index].author}</h5>
   <h6 class="slug mb-4">${book[index].slug}</h6>
   <p class="gry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos tenetur pariatur debitis dolore amet, alias 
   doloremque voluptatum perspiciatis animi 
   nam nesciunt fuga esse dolorem. Error voluptatem vitae inventore delectus.</p>
    
   
   
   `
   
   
    
  }}


  // fourbook

  fetch(book)
.then(book => book.json())
.then(book=> fourbook(book))

function fourbook(book){ 
  for (let index = 0; index < 4; index++){ 

   let fourbook=document.querySelector(".fourbook");
   fourbook.innerHTML+=`

   <div class="col-lg-3  align-items-center  justify-content-center mx-auto ">
   <div class="divimg"><img  class=" imgfourbook align-items-center   justify-content-center"src="${book[index].simple_thumb}"/></div>
   <div class="align-items-center  justify-content-center my-5">
   <h5 class="partaf">
   ${book[index].title}
   </h5>
   <h6 class="gry mb-3">
   ${book[index].author}
   </h6>
   </div>

   </div>
  
   `




  }}

// eigthbook

  fetch(book)
.then(book => book.json())
.then(book=> eigthbook(book))


  function eigthbook(book){ 

for (let index = 0; index < 8; index++){
  let eigthbook =document.querySelector(".eigthbook");
  eigthbook.innerHTML+=`
    
  <div class="col-lg-3">
    
      <div class="card border border-0 " style="width: 18rem;">
        <img src="${book[index].simple_thumb}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title"> ${book[index].title}</h5>
          <p class="card-text">${book[index].author}</p>
      
        </div>
      </div>
  </div>
 
  
  `

 }}
//  click
let link =document.querySelector(".link");
link.addEventListener('click',clickher());


function clickher(){
  link.style.color="yellow";
}













