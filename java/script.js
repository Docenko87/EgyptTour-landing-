
// вызов alert
let xml = new XMLHttpRequest();
console.log(xml);

xml.open('GET','http://127.0.0.1:5500/text.txt');
xml.onreadystatechange = function(){
    console.log(xml.readyState);
    if(xml.readyState === 4){
        alert(xml.response);
    }
}
xml.send();
// вызов alert
