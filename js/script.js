var a=document.getElementById("audio");
var arr=[
    {
        "song": "music/Saiyaara(KoshalWorld.Com).mp3",
        "title": "Saiyaara",
        "image":"images/images.jpeg.jpg",
        
    },
   {
        "song": "music/Akhiyaan Gulaab - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3",
        "title": "Mitraj",
        "image":"images/mitraj1.jpeg"
    },
     {
        "song": "music/Ishq - Mitraz 128 Kbps.mp3",
        "title": "Mitraj",
        "image":"images/mitraj2.jpeg"
    },
     {
        "song": "music/Manave - The PropheC 128 Kbps.mp3",
        "title": "Mitraj",
        "image":"images/mitraj3.jpeg"
    },
     {
        "song": "music/Saajna - Mitraz 128 Kbps.mp3",
        "title": "Mitraj",
        "image":"images/song-image.jpg"
    },
    {
        "song": "music/Khayaal - Zehen 128 Kbps.mp3",
        "title": "Mitraj",
        "image":"images/photo2.png"
    }
]
function aplay(){
    //window.alert("hiii");
    a.play();
    document.getElementById("pl").style.display="none";
    document.getElementById("pa").style.display="inline";
}
function apause(){
    a.pause();
     document.getElementById("pl").style.display="inline";
    document.getElementById("pa").style.display="none";

}
var i=0;
function nxt(){
    //window.alert("hii");
    i=i+1;
    if(arr.length==i){
        i=0;
    }
    a.src=arr[i].song;
    document.getElementById("box").style.backgroundImage="url("+arr[i].image+")";
    document.getElementById("box").style.innerHTML="arr[i].title";
    a.play();
}
function bck(){
    i=i-1;
    if(i<0){
        i=arr.length-1;
    }
    a.src=arr[i].song;
    document.getElementById("box").style.backgroundImage="url("+arr[i].image+")";
    document.getElementById("box").style.innerHTML="arr[i].title";
    a.play();
}