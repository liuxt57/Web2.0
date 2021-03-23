$(document).ready(function(){
    var as=false;
    $("th").each(function(){
        $(this).click(function(){
            if(!($(this).hasClass("ascend") || $(this).hasClass("descend")))
                as=false;
            var tableObject=$(this).parents("table");
            tableObject.find("th").removeClass("ascend").removeClass("descend");

            if(as) 
                $(this).addClass("descend");
            else 
                $(this).addClass("ascend");
        

            var tbBody=tableObject.find("tbody");
            var tbTr=tbBody.find("tr");
            var tbHead=tableObject.find("thead");
            var tbTh=tbHead.find("tr th");
            var thisIndex=tbTh.index($(this));

            var tdValue=new Array();
            
            tbTr.each(function(){
                var tds=$(this).find("td");
                tdValue.push($(tds[thisIndex]).text()+".separator"+$(this).html());
                $(this).html();
            });

            
            var len=tdValue.length;
            for(var i=0;i<len;i++){
                for(var j=i+1;j<len;j++){
                    var value1=tdValue[i].split(".separator")[0];
                    var value2=tdValue[j].split(".separator")[0];
                    if(value1>value2){
                        var temp=tdValue[i];
                        tdValue[i]=tdValue[j];
                        tdValue[j]=temp;
                    }
                }
            }

            if(as)
                tdValue.reverse();
            for(var i=0;i<len;i++){
                $(tbTr[i]).html(tdValue[i].split(".separator")[1]);
            }
            as=!as;
        });
    });
});