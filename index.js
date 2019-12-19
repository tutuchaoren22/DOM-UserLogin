window.onload = function() {
    var buttonOfLogin = document.getElementById("login");
    buttonOfLogin.onclick = function() {
        var userName = document.getElementById("username");
        var passWord = document.getElementById("password");
        if (username.value == "123" && password.value == "123") {
            alert("登录成功！");
        } else {
            alert("账号或者密码输入错误！");
            password.value = '';
        }
    }
}