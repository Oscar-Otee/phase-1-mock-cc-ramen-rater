// write your code here


const BASE_URL = "http://localhost:3000/ramens/"

class Ramen{

  id; name; restaurant; image; rating; comment;

  constructor(id, name, restaurant, image, rating, comment) {
    this.id = id;
    this.name = name;
    this.restaurant = restaurant;
    this.image = image;
    this.rating = rating;
    this.comment = comment;
  }

}

document.addEventListener('DOMContentLoaded', ()=>{

  getRamens()
  loadRamen("1")

  document.getElementById("new-ramen").addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = document.getElementById("new-name").value;
    let restaurant = document.getElementById("new-restaurant").value;
    let image = document.getElementById("new-image").value;
    let rating = document.getElementById("new-rating").value;
    let comment = document.getElementById("new-comment").value;

    console.log("DATA")

  })


  document.getElementById("delete").addEventListener("click", (e)=>{
    e.preventDefault();
    let name = document.getElementById("new-name").value = "";
    let restaurant = document.getElementById("new-restaurant").value = "";
    let image = document.getElementById("new-image").value = "";
    let rating = document.getElementById("new-rating").value = "";
    let comment = document.getElementById("new-comment").value = "";
    console.log("DATA")
    
  })

 

  


})

function getRamens(){

  const ram = document.getElementById("ramen-menu");

  fetch(BASE_URL)
    .then( response => response.json() )
    .then( (result) => {

      result.forEach(
        (ramen) => {
          let ramenInfo = new Ramen(ramen.id, ramen.name, ramen.restaurant, ramen.image, ramen.rating, ramen.comment);
          let ramenContainer = document.createElement("div");
          ramenContainer.classList.add("ramStyle")
          //let ramenImage= getElementById("ramen-menu")
          ramenContainer.src = ramenInfo.image
          
          //itemName.innerText = characterInfo.name
          //itemContainer.append(itemName)
          ram.append(ramenContainer)

          ramenContainer.addEventListener("click", ()=>{
            loadRamen(ramenInfo.id)
          })

        }
      )

    }).catch( error => {throw error})

}

function loadRamen(id){

  fetch(BASE_URL+id)
    .then( response => response.json() )
    .then( (ramen) => {
        let ramenInfo = new Ramen(ramen.id, ramen.name, ramen.restaurant, ramen.image, ramen.rating, ramen.comment);
          document.getElementById("ramen-name").innerText = ramenInfo.name
          document.getElementById("ramen-restaurant").innerText = ramenInfo.restaurant
          document.getElementById("rating-display").innerText = ramenInfo.rating
          document.getElementById("comment-display").innerText = ramenInfo.comment
          document.querySelector(".detail-image").src = ramenInfo.image;
          document.getElementById("ramen-menu").src = ramenInfo.image
          
        }

      )
    .catch( error => {throw error})
}




