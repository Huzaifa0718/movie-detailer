let a = document.getElementById("name");
let b = document.getElementById("actors");
let c = document.getElementById("Genre");
let d = document.getElementById("imdbRating");
let e = document.getElementById("Poster");

function movie(){
  let x = document.getElementById("movie");
console.log(x.value)
let film = x.value;
let p  = fetch("https://www.omdbapi.com/?t="+ film+"&apikey=b94e125c")
 p.then(response => response.json())
      .then((data) => {
        if(film.length == 0){
          console.log("kuch likho yaar")
        }else{

a.textContent=data.Title;
b.textContent=data.Actors;
c.textContent=data.Genre;
d.textContent=data.imdbRating;
 e.src= data.Poster;    
          console.log(data.Poster)

          
        console.log(data);
      console.log(data.Title)
        console.log(data.Actors)
      console.log(data.Genre)
      console.log(data.imdbRating,"*" )


          

  
        } })
}
