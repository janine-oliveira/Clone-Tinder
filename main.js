count = 0;
function prox(){

    var perfis = [
        {
          image: "asia2.jpg",
          name: "Ana",
          idade:"30",
          description: "Amo viajar!"
        },
        {
          image: "oculos2.jpg",
          name: "João",
          idade:"50",
          description: "Músico!!"
        },
        {
            image: "ruiva1.jpg",
            name: "Maria",
            idade:"22",
            description: "A vida é bela!!"
          },
          {
            image: "loira1.jpg",
            name: "Isis",
            idade:"29",
            description: "Viva cada minuto como se fosse o último!!"
          },  
          {
            image: "m2.jpg",
            name: "Lua",
            idade:"23",
            description: "Viva a beleza de cada dia!!"
          },  
          {
            image: "trancas2.jpg",
            name: "Joyse",
            idade:"25",
            description: "Sobrevivendo e aprendendo a cada dia!!"
          },  
          {
            image: "dog.jpg",
            name: "Carlos",
            idade:"55",
            description: "Desconfie de quen não gosta de animais!"
          }, 
          {
            image: "moreno2.jpg",
            name: "Jhon",
            idade:"21",
            description: "Viva La Vida!"
          },                  
      ];

      document.getElementById("name").innerHTML = perfis[count].name;
      document.getElementById("idade").innerHTML = perfis[count].idade;
      document.getElementById("descrition").innerHTML = perfis[count].description;
      
      var profileImage = "" + perfis[count].image;
      document.querySelector(".photo").style.backgroundImage = "url(./img/" + profileImage + ")";
      


      count += 1;

      if(count > 7){
        count = 0;
      }


}

function Like(){
    document.getElementById("status").innerHTML = '<i class="fa-solid fa-heart" style="color: #16c23c;"></i>';
    
    var minhaTag = document.getElementById("status");
    minhaTag.style.display = "block"; 
  setTimeout(function() {
    minhaTag.style.display = "none"; 
    prox();
  }, 1000);
  
  
}

function DesLike(){
    document.getElementById("status").innerHTML = '<i class="fa-solid fa-xmark" style="color: #fb0442;"></i>';
    
    var minhaTag = document.getElementById("status");
    minhaTag.style.display = "block"; 
  setTimeout(function() {
    minhaTag.style.display = "none"; 
    prox();
  }, 1000);

}

function SuperLike(){
    document.getElementById("status").innerHTML = '<i class="fa-solid fa-star" style="color: #2db1ff;"></i>';
    
    var minhaTag = document.getElementById("status");
    minhaTag.style.display = "block"; 
  setTimeout(function() {
    minhaTag.style.display = "none"; 
    prox();
  }, 1000);
}
