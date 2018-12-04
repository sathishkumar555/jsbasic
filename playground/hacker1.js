
// Write your code here
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
    var arr=stdin_input.split('\n').splice(1);
    let unique=[...new Set(arr)];
    var filt=unique.map((e,i)=> {
     return  arr.filter(ee=> ee==e)
})

function comparator(a,b){
   if(a.length < b.length){
     return -1;
   }
   if(a.length  > b.length){
    return 1;
  }
  return 0;
    
}
let final=filt.sort(comparator).reverse().sort(comparator).reverse();

let result=final.map(e=>e[0]);
result.unshift(result.length);
console.log(result.join('\n'))
});
