let arr=[1,3,2,4,2];
let count=0;
let k=2;
for(let i=0;i<arr.length-1;i++){
for(let j=i+1;j<arr.length;j++){
if(arr[i]-arr[j]==k){
count++;
}
}
}
console.log(count);
