var start = false;
var f = true;

window.onload = function(){

    document.getElementById('walls1').onmouseover=function()
    {
        if(start == true)
        {
        document.getElementById('block1').className = "red";
        document.getElementById('block2').className = "red";
        document.getElementById('block3').className = "red";

        document.getElementById('result').innerText = "You Lose!";
        document.getElementById('result').className = "ScoreShow";
        start = false;
        }
    }
    document.getElementById('walls1').onmouseout=function()
    {
        document.getElementById('block1').className = "gray";
        document.getElementById('block2').className = "gray";
        document.getElementById('block3').className = "gray";
        
    }
    document.getElementById('walls2').onmouseover=function()
    {
        if(start == true)
        {
        document.getElementById('block4').className = "red";
        document.getElementById('block5').className = "red";
        

        document.getElementById('result').innerText = "You Lose!";
        document.getElementById('result').className = "ScoreShow";
        start = false;
        }
    }
    document.getElementById('walls2').onmouseout=function()
    {
        document.getElementById('block4').className = "gray";
        document.getElementById('block5').className = "gray";
       
        
    }
    document.getElementById('start').onmouseover = function()
    {
        start = true;
        f = false;
        document.getElementById('result').innerText = "Start!";
        document.getElementById('result').className = "ScoreShow";
    }

    document.getElementById('end').onmouseover = function()
    {
        if(start == true) 
        {
            if(f == true)
            {
                document.getElementById("result").innerText = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
            }
            else
            {
                document.getElementById("result").innerText = "You win!";
            }
        }
        else {
                document.getElementById("result").innerText = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
        }

        start = false;
        document.getElementById("result").className = "ScoreShow";
    }

    document.getElementById("maze_body").onmouseleave = function()
    {
        f = true;
        document.getElementById("result").innerText = "";
    }
}