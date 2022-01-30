function validateform(){  
var name=document.myform.Email.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Email can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  
