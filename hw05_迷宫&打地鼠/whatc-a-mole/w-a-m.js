window.onload = function(){
    var is_playing = false;
    var score = 0;
    var time = 0;

    var score_box = document.getElementById("score-box");
    var time_box = document.getElementById("time-box");
    score_box.value = score;
    time_box.value = time + " s";

    var start_timeID, count_down_timeID;
    var status_button = document.getElementById("status-button");

    status_button.onclick = function(){
        if(is_playing)
        endGame();
        
        else
        startGame();
    }

    var moles = document.getElementsByClassName("mole");
    var hit;
    showNextMole();
    for(let i = moles.length-1;i>=0;--i)
    {
        moles[i].onclick = function(){
            if(is_playing)
            {
                if(hit){
                    score ++;
                    score_box.value = score;
                    showNextMole();
                }
                else{
                    score --;
                    score_box.value = score;
                    showNextMole();
                }
            }
        }

        moles[i].onmousedown = function(){
            hit = this.checked;
        }
    }

    function showNextMole(){
        var next =  Math.floor(Math.random()*60);
        moles[next].checked = true;
    }

    function countDown() {
        time -= 1;
        time_box.value = time + " s";
    }

    function endGame(){
        window.clearTimeout(start_timeID);
        clearInterval(count_down_timeID);
        is_playing = false;
        document.getElementById("status-box").value = "Not At Play";
        time = 0;
        time_box.value = time + "s";

        alert("Game Over. Your score is: " + score + "!");
    }


    function startGame(){
        is_playing = true;
        document.getElementById("status-box").value = "At Play";
        score = 0;
        score_box.value = score;

        start_timeID = window.setTimeout(endGame, 30000);
        time = 30;
        time_box.value = time + " s";
        count_down_timeID = setInterval(countDown, 1000);

    }

}