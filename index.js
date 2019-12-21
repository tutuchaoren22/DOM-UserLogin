function userLogin() {
    var buttonOfLogin = document.getElementById("login");
    var userName = document.getElementsByClassName("username")[0];
    var passWord = document.getElementsByClassName("password")[0];
    if (userName.value === "123" && passWord.value === "123") {
        alert("登录成功！");
    } else {
        alert("账号或密码输入错误,请重新输入！");
        passWord.value = '';
    }
}