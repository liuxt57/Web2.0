window.onload = function() {
    create_pic();
    this.random_pos(document.getElementById("picture"));
    document.getElementById("restart").addEventListener("click", random_pos);
}

function create_pic() {
    picture = document.getElementById("picture");
    for (var i = 1; i <= 16; i++) {
    var part = document.createElement("div");
    part.addEventListener("click", pic_move);
    part.className = "picture_part" + " position_"+i;
    picture.appendChild(part);
    part.id = "_position_"+i;
    }
}

function random_pos(event) {
    document.getElementById("result").innerText = "Start!";
    
    for (var k = 1; k <= 16; k++) {// 先将拼图块对应的位置复位
    document.getElementById("_position_"+k).className="picture_part"+" position_"+k;
    }
    var part = document.getElementById("picture").childNodes;
    random_arr = [];
    for (var j = 0; j < 15; j++) {
    random_arr[j] = j+1;
    }
    //产生随机数列
    function cmp() { return 0.5-Math.random(); }   
    random_arr.sort(cmp);
       
    // 通过更改类名来改变位置
    for (var i = 0; i < 15; i++) {
    part[i].className = "picture_part" + " position_" + random_arr[i];
    }

}
    
function pic_move(event) {
    var blank_pic_offset = document.getElementById("_position_16");
    var blank_pic_offset_top = blank_pic_offset.offsetTop;
    var blank_pic_offset_left = blank_pic_offset.offsetLeft;
    var _offset_top = this.offsetTop;
    var _offset_left = this.offsetLeft;
    // 判断点击的图片块是否与空格块相邻 
    if ((Math.abs(blank_pic_offset_top-_offset_top) == 85 && blank_pic_offset_left == _offset_left) ||
    (Math.abs(blank_pic_offset_left-_offset_left) == 85 && blank_pic_offset_top == _offset_top)) {
    var str = blank_pic_offset.className;
    blank_pic_offset.className = this.className;
    this.className = str;
    check(); // 检查是否还原原图
    }
}
   
function check() { 
    for (var i = 1; i <= 16; i++) {
        var item = document.getElementById("_position_"+i);
        if (item.className != "picture_part" +" position_"+i ) {
            document.getElementById("result").innerText = "Continue...";
            return;
        }
    }
    document.getElementById("result").innerText = "You Win!";
}