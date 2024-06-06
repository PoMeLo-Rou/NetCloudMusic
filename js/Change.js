
  // 获取URL参数
  function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  // 获取传递的id值
  var id = getUrlParameter("params");
  console.log(id);

  document.querySelector('input').id = `Win_${id}`

  document.querySelector(".Win_input").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认的提交行为
    
    // 获取输入框的值
    var nickname = document.getElementById("Win_nickname").value;
    console.log(nickname);
    var email = document.getElementById("email").value;
  })
    
  //   // 更新用户信息
  //   updateUser(name, email);
  // });
  
  // function updateUser(name, email) {
  //   // 在这里可以发送请求将用户信息保存到服务器
  //   // 例如，可以使用Ajax发送POST请求到后端API
  //   // 并在成功回调函数中处理服务器的响应
  //   // 例如：
  //   /*
  //   fetch("/api/updateUser", {
  //     method: "POST",
  //     body: JSON.stringify({ name: name, email: email }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(function(response) {
  //     // 处理服务器的响应
  //   })
  //   .catch(function(error) {
  //     // 处理错误
  //  });\
  //});