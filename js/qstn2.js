function qstn2(){
   Array.prototype.merge_Sort = function(){
      if(this.length <= 1){
         return this;
      }
      var half = parseInt(this.length / 2);
      var left = this.slice(0, half).merge_Sort();
      var right = this.slice(half,this.length).merge_Sort();
      var merge = function (left, right){
         var arry = [];
         while (left.length > 0 && right.length > 0){
            arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
         }
         return arry.concat(left).concat(right);
      };
      return merge(left, right);
   };
   var n = document.getElementById("q2input1").value;
   var a=[];
   for(var i=0;i<n;i++){
      var c = i+1;
      a[i]=prompt("Enter the value "+c);
   }
   alert(a.merge_Sort());
   q2input1.value="";
}