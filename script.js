window.onload = function(){
    setInterval(setClock, 1000);
}

function setClock(){
    var dateInfo = new Date(); 
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth()+1;
    var date = dateInfo.getDate();
    
    var dateDisplay = `오늘날짜: ${year}년 ${month}월 ${date}일`;
    $("#date").html(dateDisplay);
    getMoney(`${year}-${month}-${date}`);
}

function getMoney(todayDate){
    var tot = 54000;
    var receivedMoney = 12500;
    var date1 = new Date(todayDate);
    var date2 = new Date("2022-08-09");
    
    var diffDate = date1.getTime() - date2.getTime();
    diffDate = diffDate/(1000 * 60 * 60 * 24)+1;

    tot += diffDate*1000;
    if(diffDate <= 30){
        tot += 40000*2;
    }
    else if(diffDate <= 90){
        tot += 40000*5;
    }
    else if(diffDate <= 180){
        tot += 40000*10;
    }

    $("#money").html(`${tot}원`);
    $("#receivedMoney").html(`${receivedMoney}원`);
    $("#remainMoney").html(`${tot-receivedMoney}원`);
}