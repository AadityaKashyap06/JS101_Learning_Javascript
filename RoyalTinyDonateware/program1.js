//a b c
//d e f
//g h i
let m="abcdefghijklmnopqrstuvwxyz";
let obj={};
for(let i=0;i<m.length;i++){
  obj[m[i]]=i+1;
}
// console.log(obj);
let count=0;
for(let i=1;i<=4;i++){
  let bag="";
  for(let j=1;j<=4;j++){
    count++
    for(let k in obj){
      if(obj[k]==count){
        bag+=k+" "
      }
    }
  }
  console.log(bag);
}