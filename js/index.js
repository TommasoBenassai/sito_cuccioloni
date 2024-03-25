function logo (lg){
    var pic;
    if(lg==0){
        pic="img/classic.png";
    }else if(lg==1){
        pic="img/vernice.png";
    }else if(lg==2) {
        pic = "img/donuts.png";

    }
    document.getElementById("img").src=pic;
}



