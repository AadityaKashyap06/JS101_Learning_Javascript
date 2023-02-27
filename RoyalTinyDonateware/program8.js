let str="anna";
let count=0;
for(let i=0;i<str.length;i++){
  let ans="";
  let m="";
  for(let j=i;j<str.length;j++){
    ans+=str[j];
    console.log(ans);
    m=str[j]+m;
    if(m==ans&&ans.length%2==0){
      count++;
    }
  }
}
console.log(count);