function qstn5(){
    function removeDuplicates(num){
        var x,len=num.length,out=[],obj={};
        for(x=0; x<len; x++){
            obj[num[x]]=0;
        }
        for(x in obj){
            out.push(x);
        }
        return out;
    }
    var n = document.getElementById("q5input1").value;
    var Mynum = [];
    for(var i=0;i<n;i++){
        Mynum[i]=prompt("Enter the value: ");
    }
    result = removeDuplicates(Mynum);
    alert("Entered array: "+Mynum);
    alert("Result array: "+result);
    q5input1.value="";
}