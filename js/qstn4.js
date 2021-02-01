function qstn4(){
    var last =  function(array, n){
        if(array == null){
            return void 0;
        }
        if(n == null){
            return array[array.length - 1];
        }
        return array.slice(Math.max(array.length - n, 0));
    };
    var x = document.getElementById("q4input1").value;
    var arr = [];
    for(var i=0;i<x;i++){
        arr[i]=prompt("Enter the value");
    }
    var h = prompt("Enter the limit:");
    alert(last(arr,h));
    q4input1.value="";
}