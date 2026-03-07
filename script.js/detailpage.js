//login condition
const loginBtn=document.getElementById("login-btn");
loginBtn.addEventListener("click",()=>{
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
//login check
if(user==="admin" && pass ==="admin123"){
    window.location.href="detail.html";
}
else{
    alert("Invalid username or password!");
}
});
