document.addEventListener("DOMContentLoaded", () =>{
  const menu = document.querySelector('.header__nav');
  const burger = document.querySelector("#burger");
  document.querySelector("#burger").addEventListener("click", function() {
    
      setTimeout(() => {
          document.querySelector("header").classList.toggle("open");
      }, 10);
    })

  document.addEventListener('click', (e) =>{
      console.log(e)
      if (e.target.parentNode == burger){
          return
      }
      if (e.target != menu ){
          document.querySelector("header").classList.remove("open");
      }
  })

  })