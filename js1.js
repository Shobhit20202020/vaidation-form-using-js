let fname=false;
 let lname=false;
 let email=false;
 let ppass=false;
 let cppass=false;
 let pphone=false;
 
 let aaddress=false;
 let dobb=false;
 let ppdg=false;
 let occup=false;
 let llang=false;
 let iimage=false;
 let ggender=false;


function validation() {
  if (fname === false) {
    document.getElementById('username').innerHTML = 'Invalid first name';
    //alert('Invalid first name');
    return false;
  }

  if (lname === false) {
    document.getElementById('usernames').innerHTML = 'Invalid last name';
   // alert('Invalid last name');
    return false;
  }
    if(email===false)
    {
     document.getElementById('emailss').innerHTML="invalid email"
      //alert('invalid email id');
      return false;
    }
    if(ppass===false){
      document.getElementById('pass-error').innerHTML="invalid password"
    //  alert('invalid password');
      return false;
    }
    if(cppass===false){
      document.getElementById('conpass-error').innerHTML="invalid conpassword"

      //alert('invalid confirm password');
      return false;
    }
    if(pphone===false){
      document.getElementById('error-message').innerHTML="invalid phone field"
// alert('invalid phone format');
      return false;
    }
    if(aaddress===false){
      document.getElementById('addresserror').innerHTML="invalid password"
      //alert('invalid address');
      return false;
    }
    if(occup===false){
      document.getElementById('occupation-error').innerHTML="invalid password"

      //alert('please select the occupation field');
      return false;
    }
    if(dobb===false){
      document.getElementById('birthday1').innerHTML="invalid dob"

      //alert('enter valid dob');
      return false;
    }
    if(ppdg===false){
      document.getElementById('pdf-error').innerHTML="invalid pdf"

      //alert('enter valid pdf');
      return false;
    } 
    if(llang===false){
      document.getElementById('language-field').innerHTML="invalid selected language"

      //alert('enter language field');
      return false;
    }
    if(iimage===false){
      document.getElementById('image-error').innerHTML="invalid image"

      //alert('enter the image only');
      return false;
    }
    if(ggender===false){
      document.getElementById('genderError').innerHTML="invalid gender"
      return false;

    }

  }
  
    function hello() {
         
    var user = document.getElementById('user').value;
    //var aa=/^[A-Z][a-zA-Z]*$/;
    var aa=/^[A-Z][a-z]*$/ 

    var aaa=/^(?=.*[A-Z].*)[a-z]*[A-Z][a-z]*[^A-Z][a-z]*$/;
    var aaaa=/^(?!.*([A-Za-z])\1\1)[A-Za-z]+$/
    var aaaaa=/^[a-zA-Z]+$/i



   // Validate user input for first name
    if (user === "") {
      document.getElementById("username").innerHTML = " empty field.";
      fname=  false;
    }
    else if (!isNaN(user)) {
      document.getElementById('username').innerHTML = "Input must be a character only.";
      fname=  false;
           }
    else if(!aa.test(user)){
      document.getElementById('username').innerHTML="the first letter is capital only"
      fname= false;
    }
    else if(!aaaaa.test(user)){
      document.getElementById('username').innerHTML="Input must be a character only"
      fname= false;
    }
    else if(!aaa.test(user)){
      document.getElementById('username').innerHTML="only one capital letter are allowed"
      fname= false;
    }
    else if(!aaaa.test(user)){
      document.getElementById('username').innerHTML="three consecutive letter are not allowed"
      fname= false;
    }
    else if (user.length < 3 || user.length > 16) {
      document.getElementById('username').innerHTML = "User length must be between 3 to 16.";
      fname= false;
       }
    // else if (!isNaN(user)) {
    // document.getElementById('username').innerHTML = "Input must be a character only.";
    // return false;
    //      }
    else{
      document.getElementById('username').innerHTML='<div class="green">valid firstname</div>'
      fname=true;
    }
  }

  let user = document.getElementById('user');
  user.addEventListener("keydown",function(event) {
    if(user.selectionStart === 0 && event.keyCode === 32 )
    {
      event.preventDefault();
    }
  });
  
//   for lastname 
    function hello1() {

      var users= document.getElementById('users').value;
      var aa1=/^[A-Z][a-zA-Z]*$/;
      var aaa1=/^(?=.*[A-Z].*)[a-z]*[A-Z][a-z]*[^A-Z][a-z]*$/;
      var aaaa1=/^(?!.*([A-Za-z])\1\1)[A-Za-z]+$/
     
      if (users === "") {
        document.getElementById("usernames").innerHTML = " empty field.";
        return false;
      }
      else if(!aa1.test(users)){
        document.getElementById('usernames').innerHTML="the first letter is capital only"
      }
      else if(!aaa1.test(users)){
        document.getElementById('usernames').innerHTML="only one capital letter are allowed"
      }
      else if(!aaaa1.test(users)){
        document.getElementById('usernames').innerHTML="three consecutive letter are not allowed"
      }
      else if (users.length < 3 || users.length > 16) {
        document.getElementById('usernames').innerHTML = "User length must be between 3 to 16.";
           return false;
         }
      else if (!isNaN(users)) {
      document.getElementById('usernames').innerHTML = "Input must be a character only.";
      return false;
           }
      else{
        document.getElementById('usernames').innerHTML='<div class="green">valid firstname</div>'
        lname=true;
      }
   
}
let users = document.getElementById('users');
users.addEventListener("keydown",function(event) {
  if(users.selectionStart === 0 && event.keyCode ===32 )
  {
    event.preventDefault();
  }
});


function hello2(){
  var emails123=document.getElementById('emails').value;
  let myarr=emails123.split(".");
  var z=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

  if(myarr[myarr.length-1]===myarr[myarr.length-2]){
    document.getElementById('emailss').innerHTML='<span class="red"> invalid repetition of .com <span>';
    return false;
   }
  if(emails123===""){
      document.getElementById('emailss').innerHTML="please enter the email id"
      return false;
  }
  // else if(!z.test(emails)){
  //   document.getElementById('emailss').innerHTML="the first value is always character not a @ value"
  //    return false;

  //  }
  else if(emails123.indexOf('@')<=2){
      document.getElementById('emailss').innerHTML="the first three value is always character not a @ value"
      return false;

  }
  else if((emails123.charAt(emails123.length-4)!='.') && (emails123.charAt(emails123.length-3)!='.')){
      document.getElementById('emailss').innerHTML="invalid position of . "
      return false; 
  }
  // else if(!z11.test(emails)){
  //   document.getElementById('emailss').innerHTML="invalid"
  //   return false;

  // }

  else
  document.getElementById('emailss').innerHTML='<div class="green">valid email</div>';
  email=true;
 
}
let emails = document.getElementById('emails');
emails.addEventListener("keydown",function(event) {
  if(emails.selectionStart === 0 && event.keyCode ===32 )
  {
    event.preventDefault();
  }
});

  

    // password filled 
    function hello3() {
      let password = document.getElementById('pass').value;
      let passwordRegex = /^(?=.*\d)(?=.*\W).+$/
    
      if (password === "") {
        document.getElementById('pass-error').innerHTML = "Please fill in the password field.";
        return false;
      } else if (password.length < 7 || password.length > 16) {
        document.getElementById('pass-error').innerHTML = "Password length must be between 7 and 16 characters.";
        return false;
      } else if (!passwordRegex.test(password)) {
        document.getElementById('pass-error').innerHTML = "Password must contain at least one number and one special character.";
        return false;
      } else {
        document.getElementById('pass-error').innerHTML = '<div class="green">valid password</div>';
        ppass= true;
      }
    }
    
 
    let password  = document.getElementById('password');
    password.addEventListener("keydown",function(event) {
  if(pass.selectionStart === 0 && event.keyCode ===32 )
  {
    event.preventDefault();
  }
});
    
                     
   

  function hello4() {
    let conpass = document.getElementById('conpass').value;
  let pass = document.getElementById('pass').value;
                                      
if (conpass === "") {
  document.getElementById('conpass-error').innerHTML = "Please fill in the confirm password field.";
  return false;
}

if (pass !== conpass) {
  document.getElementById('conpass-error').innerHTML = "Passwords do not match.";
  return false;
} else {
  document.getElementById('conpass-error').innerHTML = '<div class="green">valid confirm password</div>';
  cppass=true;
}
}
let conpass  = document.getElementById('conpass');
conpass.addEventListener("keydown",function(event) {
  if(conpass.selectionStart === 0 && event.keyCode ===32 )
  {
    event.preventDefault();
  }
});                                     
  
                
 // phone number format 

function hello5() {
  var c1 = document.getElementById('country-code').value;
  var c2 = document.getElementById('phonenumber').value;
  

  const regexPatterns = {
    '+91': /^\d{10}$/, // India: 10 digits
    '+1': /^\d{10}$/, // USA: 10 digits
    '+44': /^\d{10,14}$/, // UK: 10-14 digits
    '+86': /^\d{11}$/ // China: 11 digits
  };

  if (!c2.match(regexPatterns[c1])) {
    document.getElementById('error-message').innerHTML='Invalid phone number format';
    return false;
  } else {
    document.getElementById('error-message').innerHTML= '<div class="green">valid phone number</div>';

    pphone=true;
  }
}
var phonenumber = document.getElementById('phonenumber');
phonenumber.addEventListener('keydown', (e) => {
if (e.key === ' ') {
e.preventDefault();
              }
            });  
            
// var c2 = document.getElementById('c2');
//   c2.addEventListener('keydown', (e) => {
//                   if (e.key === ' ') {
//                   e.preventDefault();
//                                     }
//                                 });  
                                
  // code of address
  function hello6() {
    var address = document.getElementById('address').value;
    var addressreex=/^[a-zA-Z0-9\s\-\.\,\\\/]{5,50}$/gm;

    if (address === "") {
      document.getElementById('addresserror').innerHTML = 'Please fill in this field';
      return false;
    } 
    else if(!addressreex.test(address)){
      document.getElementById('addresserror').innerHTML='please filled the valid address'
      return false;
    }
    else {
      document.getElementById('addresserror').innerHTML='<div class="green">valid address</div>' ;
      aaddress=true;
    }
  }

  let address  = document.getElementById('address');
  address.addEventListener("keydown",function(event) {
  if(address.selectionStart === 0 && event.keyCode ===32 )
  {
    event.preventDefault();
  }
}); 
  
  // var address  = document.getElementById('address');
  // address.addEventListener('keydown', (e) => {
  //   if (e.key === ' ') {
  //     e.preventDefault();
  //   }
  // });


  function hello10(){

    const occupation = document.getElementById('occupation').value;
     const occupationRegex = /^(employee|unemployed|self-employee|private-job|farmer)$/i;
     if(occupation===""){
         document.getElementById('occupation-error').innerHTML='please select your occupation '
         return false;
     }
     
     if (!occupationRegex.test(occupation)) {
         document.getElementById('occupation-error').innerHTML='please select your occupation '
 
       return false;
     }
     else{
     document.getElementById('occupation-error').innerHTML='<div class="green">valid occupation</div>' 
     occup=true;
     }
}

 
  


function hello7(){
  const birthdayInput = document.getElementById("birthday").value;
const errorMessageSpan = document.getElementById("birthday1");

if (birthdayInput === "") {
  errorMessageSpan.innerHTML = 'Please enter your date of birth';
  return false;
}  else {
    errorMessageSpan.innerHTML = 
    '<div class="green">valid dob</div>';
    dobb= true;
  }
}


var birthday  = document.getElementById('birthday');
birthday.addEventListener('keydown', (e) => {
                  if (e.key === ' ') {
                  e.preventDefault();
                                    }
                                });  

 // pdf validaiton
 function hello8() {
  const fileInput = document.getElementById('pdf-file');
  const errorElement = document.getElementById('pdf-error');
  const allowedExtensions = /(\.pdf)$/i;

  if (!fileInput.value) {
    errorElement.innerHTML = 'Please select a file.';
    return false;
  }

  if (!allowedExtensions.test(fileInput.value)) {
    errorElement.innerHTML = 'Only PDF files are allowed.';
    return false;
  }

  errorElement.innerHTML = '<div class="green">Valid PDF file</div>';
  ppdg=true;
}

//  function hello8() {
  
//     const fileInput = document.getElementById('pdf-file');
//     const errorElement = document.getElementById('pdf-error');
//     const allowedExtensions = /(\.pdf)$/i;
    
//     if (!fileInput.value) {
//       errorElement.innerHTML = 'Please select a file.';
//       return false;
//     }
    
//     if (!allowedExtensions.exec(fileInput.value)) {
//       errorElement.innerHTML = 'Only PDF files are allowed.';
//       return false;
//     }
    
//     errorElement.innerHTML = '<div class="green">valid pdf</div>';
//     ppdg= true;
//   }

  function hello11() {
    let languageSelect = document.getElementById('language-select').value;
    const languageRegex = /^(english|hindi|urdu|other)$/i;
    const errorElement = document.getElementById('language-field');
  
    if (languageSelect === "") {
      errorElement.innerHTML = 'Please select your language';
      return false;
    }
  
    if (!languageRegex.test(languageSelect)) {
      errorElement.innerHTML = 'Invalid language selected';
      return false;
    } else {
      errorElement.innerHTML = '<div class="green">valid language</div>';
      llang=true;
    }
  }

  function hello13(){
   var fileName1 = document.getElementById('image-file').value;
//var regex = /\.(jpg|jpeg|png|gif)$/i;
if(fileName1===""){
    document.getElementById('image-error').innerHTML="Please select an image file only."
    return false;
}
else {
  document.getElementById('image-error').innerHTML=
  '<div class="green">valid image file</div>';
  iimage=true;
}

  }

   //             //   gender code  
   function hello14() {
    var genderSelect = document.getElementById("gender").value;
    var genderregex = /^(male|female|other)$/i;
    var genderError = document.getElementById("genderError");
  
    if (genderSelect === "") {
      genderError.innerHTML = "Please select the gender.";
      return false;
    } else if (!genderregex.test(genderSelect)) {
      genderError.innerHTML = "Invalid gender.";
      return false;
    } else {
      genderError.innerHTML = '<div class="green">Valid gender</div>';
      ggender=true;
    }
  }

  
 

//   }
  
var fileName  = document.getElementById('fileName');
 fileName.addEventListener('keydown', (e) => {
                  if (e.key === ' ') {
                  e.preventDefault();
                                    }
                                }); 


   




   

       
        
    







// // interest field in js 
// const interestLevel = document.getElementById("interest-level").value;
// const educationLevelRegexs = /^(cricket|singing|dancing|writing|other)$/;


// if(interestLevel===""){
// document.getElementById('interest-error').innerHTML='please select your interest '
// return false;
// }
// // if (!educationLevelRegexs.test(interestLevel))
// // {
// // document.getElementById('interest-error').innerHTML='please select your interest '
// // return false;
// // }
// else {
// errorMessageSpan.innerText='valid field'
// }



 




// // marital status in js 
//         const maritalStatus = document.getElementById("marital-status").value;
//         const regex11 = /^(single|married|divorced|widowed)$/i;

//         if (maritalStatus==="") {
//           document.getElementById("marital-status-error").innerHTML = "Please select your marital status.";
//           return false;
//         }

//         if (!regex11.test(maritalStatus)) {
//           document.getElementById("marital-status-error").innerHTML = "Invalid marital status. Please try again.";
//           return false;
//         }
//          else{
//             errorMessageSpan.innerHTML = 'Valid field';
//          }

//         // feedback option 

//         var feed=document.getElementById('feedback').value;
//         if(feed===""){
//             document.getElementById('feedbacks').innerHTML='please give your feedback';
//             return false;
//         }
//         else{
//             errorMessageSpan.innerHTML = 'Valid field';
//         }



  

// // Add an event listener to the form's submit button