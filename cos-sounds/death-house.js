var soundPlaying = false;
var soundButtonList  = document.querySelectorAll(".soundButton");
var pageAudioList = document.querySelectorAll(".audio");

for(var i = 0; i < soundButtonList.length; i++){
    soundButtonList[i].addEventListener("click", function(){
        var curAudio = this.querySelector("audio");
        if(!soundPlaying){
            curAudio.play();
             soundPlaying = true;
         } else {
             curAudio.pause();
             curAudio.load();
             soundPlaying = false;
         }
    });
}