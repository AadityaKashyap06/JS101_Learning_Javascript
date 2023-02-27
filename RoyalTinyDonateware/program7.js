let str="naman";
let max=-Infinity;
for(let i=0;i<str.length;i++){
  let ans="";
  let m=""
  for(let j=i;j<str.length;j++){
    ans+=str[j];
    // console.log(ans)
    m=str[j]+m;
    if(m==ans&& max<ans.length){
      max=ans.length;
    }
    
  }
}
console.log(max);