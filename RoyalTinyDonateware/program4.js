let arr=[1,2,3,2,1,2,1,2,3,2]
let obj={};
for(let i=0;i<arr.length;i++){
  obj[arr[i]]=obj[arr[i]]+1||1;
  //f||true=true;
}
console.log(obj);
let max=-Infinity;
let min=Infinity;
for(let k in obj){
  if(max<obj[k]){
    max=obj[k];
  }
  if(min=obj[k]){
    min=obj[k];
  }
}
console.log(max,min);