let arr=[1,2,4,2,5];
let count=0;
for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[j]==2*arr[i]){
      count++;
      break;
    
    }
  }
  if(count==1){
    break;
  }
}
console.log(count==1?"yes":"no");
