// 1.Find the Product.
const Find_Prod = (array, N) => 
{
  let n=1;
  for(let i=0;i<array.length;i++){
    n=n*array[i];  
  }
  return n;   
};
//  2.Find the Sum.
const Find_Sum = (array, N) => 
{
  let n=0;
   for(let i=0;i<array.length;i++){
    n=n+array[i];  
  }
  return n; 
};
//  3.Count Occurrences
const findCount = (N, K, Arr) => 
{
  let count=0;
   for(i=0;i<Arr.length;i++){
    if(K==Arr[i]){
      count++;
    }
   }
   return count;
};
//  4.Even Odd
const findEvenOdd = (N, Arr) => 
{ 
  let B=[];
  let odd=0,even=0;
  for(i=0;i<Arr.length;i++){
    if(Arr[i]%2===0){
      even+=Arr[i]
      B[0]=even;
    } 
    else {
       odd+=Arr[i]
       B[1]=odd;
    }
  }
    return B;
};
// 5.Find whether the number is present or not
const Find_Num = (array,N,M) => 
{
  let found=false;
  for(i=0;i<array.length;i++){
    if(M===array[i]){
      found++;
    }
  }
  if(found){
    return "YES"
  }
  else{
    return "NO"
  }
};
//  6.Higher Age
const highAge = (N, Arr) => 
{
  let result=[];
  for(i=0;i<Arr.length;i++) {
    if(Arr[i]>=18){
      result.push(Arr[i]);
    }
  }
  return result;
};
//  7.Increment the Array Elements
const Inc_Arr = (array,N) => 
{
  for(i=0;i<array.length;i++){
    array[i]+=1;
  }
  console.log(...array)
};
//  8.Pass or Fail
const isAllPass = (N, Arr) => 
{
    let i=0;
    while(i<Arr.length){
      if(Arr[i]>=32){
        i++;
      }
      else{
        return "NO"
      }
    }
    return "YES"
};
//  9.Unique Color Shir
function Unique_Shirts (arr,N) {
    let count=0;
     for(i=0;i<arr.length;i++) {
       for(j=0;j<arr.length;j++)  {
         if(arr[i]==arr[j]&&i!=j)
         break;
       }
       if(j==N){
         count++
       }
   }
   return count;
   }
   
// 10.Birthday Game
function Birthday_Game(arr,D ,M) {
    let counter = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    counter += 1;
                }
             }
       }
       return counter;
  } 
// 11.Min and Max
function arrayMin(arr) {
  let min=arr[0];
  for(i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i]
    }
  }
 return(min)
}

function arrayMax(arr) {
 let max=arr[0];
  for(i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
 return(max)
}

