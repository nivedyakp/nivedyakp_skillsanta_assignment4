function qstn1(){
    var dat = document.getElementById("q1input1").value;
    var diff = Date.now() - dat;
    var age_dt = new Date(diff);
    var h = (Math.abs(age_dt.getUTCFullYear() - 1970));
    if(14<h<24){
        alert("Not Eligible");
    }
    else{
        alert("Eligible");
    }
}