let navelements = ["home", "about","gallery", "contact"];
let navtext='<ul class= "flex">';
let navlinks =["index.html", "about.html", "gallery.html", "contact.html",];
let navl= navelements.length;
for(i=0; i<navl; i++){
  navtext+='<li><a href="'+navlinks[i]+'">'+ navelements[i]+"</a></li>";
   console.log(navtext);
   console.log(navlinks[i]);

}
navtext +="</ul>";
console.log(navtext);

document.getElementById("nav"). innerHTML = navtext;

let raiseheader = ()=> {

    let headerheight= document.getElementById
    ("header").style.height;
    console.log(headerheight);
    if(headerheight==""  ||headerheight=="100px"){
        document.getElementById("header").style
        .height="270px";
        document.getElementById("xazi2").style
        .display="none";
        document.getElementById("xazi1").
        style.transform="rotate(45deg)";
        document.getElementById("xazi3").style
        .transform="rotate(-45deg)";
        
    }
    else{
        document.getElementById("header").
        style.height="100px";
        document.getElementById("xazi2").style
        .display="block";
        document.getElementById("xazi1").style
        .transform="rotate(0deg)";
        document.getElementById("xazi3").style
        .transform="rotate(0deg)";
    }
}