function validateForm(){
    const usernameRegex=/^[a-zA-Z0-9_]$/;
    const phoneRegex=/^\d{10}$/;
    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    const username=document.getElementById("username").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;

    resetErrorMessages();


    if(!usernameRegex.test(username)){
        document.getElementById("usernameError").innerText="Invalid username";
        return;
    }
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").innerText="Inavalid Phone number";
        return;
    }
    if(!emailRegex.test(email)){
        document.getElementById("emailerror").innerText="Invalid email address";
        return;
    }
    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").innerText="password must conatain atleast 8 characters long and contain atleast one digit ,one lower case,uppercase letter";
        return;
    }
    if(password !== confirmPassword){
        document.getElementById("confirmPasswordError").innerText="password does'nt match";
        return;

    }
    alert("Form Subimtted Successfully");
    console.log("username",username);
    console.log("phone",phone);
    console.log("email",email);
    console.log("password",password);
    console.log("confirmPassword",confirmPassword);
    }
    function resetForm(){
        document.getElementById("registrationForm").reset();
        resetErrorMessages();
    }
    function resetErrorMessages(){
        const resetErrorMessages=document.querySelectorAll(".error-messge");
        resetErrorMessages.forEach(message=>message.innerText="");
    }


