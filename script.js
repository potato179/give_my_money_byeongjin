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
    let tot;
    var date1 = new Date(todayDate);
    var date2 = new Date("2022-07-22");
    
    var diffDate = date1.getTime() - date2.getTime();
    diffDate = diffDate/(1000 * 60 * 60 * 24)+1;
    $("#money").html(diffDate);
}