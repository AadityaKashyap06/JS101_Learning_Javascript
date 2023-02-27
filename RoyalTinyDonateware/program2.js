let d=-1;
let n=36;
let day="tuesday";
let arr=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
for(let i=0;i<arr.length;i++){
  if(arr[i]=="tuesday"){
    d=(i+n%7)%7;
    break;
  }
}
console.log(arr[d])