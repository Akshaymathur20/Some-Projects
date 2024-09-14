function myFunction(){
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML=text.replace(/microsoft/i,"W3Schools");
}


function myFunction1(){
    let text = " Madhya Pradesh is called heart of India";
    let pattern = /[p]/g;
    
    let result = text.match(pattern);

    document.getElementById("demo").innerHTML=result;
    
}