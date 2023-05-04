// Declare your genre arrays here
let Hiphop =[ "https://i.scdn.co/image/ab67616d0000b273e62556651b02964959dc8370" ,"https://images.discotech.me/artists/None/adeb41d8-d7be-4d13-9de0-6cc2713c8be1.jpg?auto=format%2Ccompress&w=1000" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgafXdPZliSo1kBYHnxm7NwciHVkM0Rf2ntg&usqp=CAU"
];
console.log(Hiphop);
let Rap = [ "https://i1.sndcdn.com/artworks-000584241410-fgyphh-t500x500.jpg" , "https://i.scdn.co/image/ab67616d0000b273651205fb9f381d686c619d2d" , "https://i.ytimg.com/vi/rMboPgK2OHo/maxresdefault.jpg"];
console.log(Rap);
let Rock = [ "https://i1.sndcdn.com/artworks-000077187052-f48tkd-t500x500.jpg" , "https://upload.wikimedia.org/wikipedia/en/0/0b/Devuelveme_a_mi_chica.jpg" , "https://i.discogs.com/KKeCzw6uVuYne6wbsBxxRtshv47Rc-nuraH4e7kH5YI/rs:fit/g:sm/q:90/h:593/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyNjQx/NS0xMTUwMjgxMzI4/LmpwZWc.jpeg" ] ;
console.log(Rock);
// Make sure to declare your HTML elements as variables! 
let result=document.querySelector(".music");
// Submit Button 
let submitButton = document.querySelector("button"); 
submitButton.onclick = function() {
     let genreInput= document.querySelector(".Inp1").value;
      if (genreInput === "Hiphop"){
      for(let Hiphopgenre of Hiphop){
            let img = "<img src=" + Hiphopgenre + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput ==="Rap") {
      for (let Rapgenre of Rap)   {
        let img ="<img src=" + Rapgenre + ">";
       result.insertAdjacentHTML("beforeend", img);
    }
    }   else if (genreInput ==="Rock"){
        for (let Rockgenre of Rock) {
        let img ="<img src=" + Rockgenre + ">";
        result.insertAdjacentHTML("beforeend", img);
        }
        }
     };
   
    let SuggestButton= document.querySelector(".B2");
SuggestButton.onclick= function() {
    let phInput= document.querySelector(".Inp2").value;
 Hiphop.push(phInput);
    Rap.push(phInput);
    Rock.push(phInput);    
    let img = "<img src=" + phInput + ">";
    result.insertAdjacentHTML("beforebegin","<p>" + "Thanks for your suggestion!" + "</p>");
}; 

