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

// вызов alert
// let xml = new XMLHttpRequest();
// console.log(xml);

// xml.open('GET','http://127.0.0.1:5500/text.txt');
// xml.onreadystatechange = function(){
//     console.log(xml.readyState);
//     if(xml.readyState === 4){
//         alert(xml.response);
//     }
// }
// xml.send();
// вызов alert

    
    
