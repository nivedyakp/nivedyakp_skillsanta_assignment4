function qstn3(){
    var a = document.getElementById("q3input1").value;
    var b = document.getElementById("q3input2").value;
    var gcd;
    while(a!=b){
        if(a>b){
            a=a-b;
        }
        else{
            b=b-a;
        }
    }
    gcd=a;
    alert(gcd);
    q3input1.value="";
    q3input2.value="";
}