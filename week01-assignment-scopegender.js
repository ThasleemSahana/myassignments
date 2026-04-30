var genderType = "female";
//console.log("print gendertype globally",genderType);
function printGender()
    {
        let color ="brown" ;
         if (genderType === 'female')
         {
            var age = 30 ;
            { let color = "pink"
              console.log("print color inside the block is", color);
            }   
            console.log("outside block and inside function-print age", age);
         }
        
       }
printGender();
console.log("print gendertype globally",genderType);
    
       
           
