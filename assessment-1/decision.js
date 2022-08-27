// 1. Calculator
const Calculator = (A, B, C) => 
{
	switch(A)
	{
	  case "+":{
	    return(B+C);
	  }
	  case "-":{
	    return(B-C);
     	}
     case "*":{
       return(B*C);
     }
     case "/":{
       return(B/C);
     }
    }    
};

// 2. Check whether the condition is fulfilled or not?
const Check_divisibility = (N) => {
    if((N%6==0)&&(N%9==0)) 
       return("Divisible by both");
   else
      return("Not Divisible by both");     
 };
 
//  3. Eligible Voter
const isEligible = (a) => {
    if(a>18){
    return("Eligible for Voting");
    }
    else{
    return("Not Eligible for Voting");
    }     
  };

//  4. Find Relation
const findRelation = (x,y) => {
    if(x<y){
      return(x +" is smaller than "+ y)
    }
    else if(x>y){
      return(x +" is greater than "+ y)
    }
    else{
      return(x +" is equal to "+ y)
    }
   };
   
// 5. Find Grades
const findGrades = (a) => {
    if(a <= 10) {
      return("E");
    } 
    else if(a<=20){
      return("D");
    }
    else if(a<=30){
      return("C")
    }
    else if(a<=40){
      return("B")
    }
    else if(a<=50){
      return("A")
    }
  };
  
// 6. Get Value
const getValue = (a) => {
    if((a=="P")||(a=="p")) {
     return("PrepBytes");
   } 
   else if((a=="Z")||(a=="z")){
     return("Zenith");
   }
   else if((a=="E")||(a=="e")){
     return("Expert Coder");
   }
   else {
     return("Data Structure");
   }
 };
 
//  7. Find the maximum out of three numbers.
const Max_out_of_three = (A,B,C) => {
    if((A>B)&&(A>C)){
      return A;
    }
    else if((B>C)&&(B>A)){
      return B;
    }
    else if((C>A)&&(C>B)) {
      return C;
    }
    else{
      return("-1");
    }
};
  
//   8. Second Smallest
const findSndSmallest = (x,y,z) => {
    if((x<y)&&(y<z)){
        return(y);
    }
    else if((y<z)&&(z<x)){
       return(z);
    }
    else {
       return(x);
    }

};

// 9. Check whether the triangle is Acute or Obtuse
const Triangle_Check = (A,B,C) => {
    if(A<90&&B<90&&C<90)  {
      return("acute")
    }
    else{
      return("obtuse")
    }   
};
  
  
  