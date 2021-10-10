var firstNameV, lastNameV, emailV, passV, cpassV;

function readFom(){
    firstNameV = document.getElementById("firstName").value;
    lastNameV = document.getElementById("lastName").value;
    emailV = document.getElementById("email").value;
    passV = document.getElementById("pass").value;
    cpassV = document.getElementById("cpass").value;
    console.log(firstNameV,lastNameV,emailV,passV,cpassV);
}


document.getElementById("submit").onclick = function() {
    readFom();
  
    firebase
      .database()
      .ref("Coder/" + emailV)
      .set({
        Email: emailV,
        fname: firstNameV,
        lname: lastNameV,
        password: passV,
        confirmPassword: cpassV, 
      });
      if(emailV == ""){
        alert("Please Enter details");
        return false
      }
    alert("You are successfully signed up!");
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("cpass").value = "";
  };