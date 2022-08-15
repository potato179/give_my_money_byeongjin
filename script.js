window.onload = function(){
    setInterval(setClock, 1000);
}

function setClock(){
    var dateInfo = new Date(); 
    var year = dateInfo.getFullYear();
    var month = modifyNumber(dateInfo.getMonth()+1);
    var date = modifyNumber(dateInfo.getDate());
    
    var dateDisplay = `오늘날짜: ${year}년 ${month}월 ${date}일`;
    $("#date").html(dateDisplay);
}

function modifyNumber(time){
    if(parseInt(time) < 10){
        return "0" + time;
    }
    else{
        return time;
    }
}