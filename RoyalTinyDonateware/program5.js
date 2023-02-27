let arr=[12,13,23,45,43,12,76];
let a=[];
for(let i=0;i<arr.length;i++){
  let ans="";
  ans+=arr[i];
   let sum=0;
  for(let j=0;j<ans.length;j++){
   
    sum+=+(ans[j]);
   
  }
  a.push(sum);
}
console.log(a);
