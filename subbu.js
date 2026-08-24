function login() {

    let myemail = document.getElementById("email").value;
    let mypassword = document.getElementById("password").value;

    if (myemail === "gautham@2005" && mypassword === "123456") {

        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user", myemail);

        window.location.replace("home.html");
    } 
    else {
        alert("Invalid username or password");
    }
}