

let songindex=0;

let audioeliment=new Audio("./music/4.mp3.mpeg");

let masterplay=document.getElementById("masterplay");

let mypogressbar=document.getElementById("mypogress");
let gif=document.getElementById("gif");


let mastersongname=document.getElementById("mastersongname");

let songitem= Array.from(document.getElementsByClassName("songitemtext"));

let song=[
    {
        songname:"Butterflies",filepath:"./music/1.mp3.mpeg",coverpath:"image/cover2.jpg"
    },

    {
        songname:"Until I Found You",filepath:"./music/2.mp3.mpeg",coverpath:"image/cover3.jpg"
    },

    {
        songname:"Scars To Your Beautiful",filepath:"./music/3.mp3.mpeg",coverpath:"image/cover2.jpg"
    },

    {
        songname:"Ho Hey (The Moonlight)",filepath:"./music/4.mp3.mpeg",coverpath:"image/cover3.jpg"
    }
    

];







//audio play();

masterplay.addEventListener('click',()=>{

    if(audioeliment.paused || audioeliment.currentTime<=0){

audioeliment.play();

masterplay.classList.remove("bi-play-circle");
masterplay.classList.add("bi-pause-circle");
gif.style.opacity=1;

    }

    else{

        audioeliment.pause();

        masterplay.classList.add("bi-play-circle");
        masterplay.classList.remove("bi-pause-circle");
        gif.style.opacity=0;

    }



})


//lision event
audioeliment.addEventListener('timeupdate',()=>{

console.log("time");

progress=parseInt((audioeliment.currentTime/audioeliment.duration)*100)



mypogressbar.value=progress;

})

mypogressbar.addEventListener('change',()=>{

    audioeliment.currentTime=mypogressbar.value*audioeliment.duration/100;

})


const makeALLplays=()=>{


    Array.from(document.getElementsByClassName('songitemplay')).forEach(item => {
        
item.classList.add("bi-play-circle");
item.classList.add("bi-pause-circle");



    });

}


Array.from(document.getElementsByClassName('songitemplay')).forEach(play => {


play.addEventListener('click',function(e){


    if(audioeliment.paused){


        
makeALLplays();



songindex=parseInt(e.target.id);

e.target.classList.remove('bi-play-circle');
e.target.classList.add('bi-pause-circle');

audioeliment.src=`./music/${songindex+1}.mp3.mpeg`;

audioeliment.currentTime=0;

mastersongname.innerHTML=song[songindex].songname;

gif.style.opacity=1;

audioeliment.play();

masterplay.classList.remove("bi-play-circle");
masterplay.classList.add("bi-pause-circle");

}

else{

    audioeliment.pause();

    e.target.classList.add('bi-play-circle');
e.target.classList.remove('bi-pause-circle');

}
        
    }
    
    
    
    )


    
});


document.getElementById("previous").addEventListener('click',function(){

    if(songindex>4){
songindex=0

    }

else{

    songindex-=1;
}


if(songindex<0){
    songindex=3
    
        }



audioeliment.src=`./music/${songindex+1}.mp3.mpeg`;

mastersongname.innerHTML=song[songindex].songname;

audioeliment.currentTime=0;

audioeliment.play();

gif.style.opacity=1;

masterplay.classList.remove("bi-play-circle");
masterplay.classList.add("bi-pause-circle");


})




document.getElementById("next").addEventListener('click',function(){

    if(songindex<0){
songindex=0

    }

else{

    songindex+=1;
}



if(songindex>3){
    songindex=0
    
        }
    



audioeliment.src=`./music/${songindex+1}.mp3.mpeg`;

mastersongname.innerHTML=song[songindex].songname;


audioeliment.currentTime=0;

audioeliment.play();

gif.style.opacity=1;

masterplay.classList.remove("bi-play-circle");
masterplay.classList.add("bi-pause-circle");


})