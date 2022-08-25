//1. Add two numbers
const AddTwoNumbers = (a,b) => {
    return a+b;
  };

//2. Find if the conditions are obeyed or not?
const Is_Valid = (a,b) => {
    if((a<10)&&(a>b))
    return true;
    else
    return false;   
  }; 

//3. Check the conditons
const Check = (A, B) => 
{
  if(((A%10)==0)||((B%10)==0))
  return true;
  else
  return false;
};

//4. Find the first digit of a 4 digit number
const First_Digit = (n) => {
    r = n/1000;
    return parseInt(r);
     
  };

//5. Find the last digit of a 4 digit number
const Last_Digit = (n) => {
    r = n%10;
    return r;
  };
  
//6. Find the remainder
const Find_the_remainder = (a,b) => {
    n = b % a;
    return n;
  };
    
//7. Multipy two Numbers
const Multiply_two_number = (a,b) => {
    n = a*b;
    return n;
  };
  
//8. Marks Calculator  
const Sum = (A, B, C) => 
{
  return A+B+C;
};

const Average = (A, B, C) => 
{
  return parseFloat((A+B+C)/3);
};
