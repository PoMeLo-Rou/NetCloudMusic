function getTimestamp() {
  return new Date().getTime();
} //获取当前时间的时间戳

// 获取二维码 key
fetch(`http://www.codeman.ink/api/login/qr/key?timestamp=${getTimestamp()}`)
      .then(response => response.json())
      .then(data => {
          const key = data.data.unikey;
      fetch(`http://www.codeman.ink/api/login/qr/create?key=${key}&qrimg=${key}&timestamp=${getTimestamp()}`)
        .then(response => response.json())
        .then(data => {
          const  qrCodeBase64 = data.data.qrimg;
          // 在页面中展示二维码图片
          const qrcodeDiv = document.getElementById('Win_qrcodeDiv');
          const img = document.createElement('img');
          img.src = `${data.data.qrimg}`;
          qrcodeDiv.appendChild(img);

          // 轮询二维码扫码状态
          const checkStatus = setInterval(() => {
            fetch(`http://www.codeman.ink/api/login/qr/check?key=${key}&timestamp=${getTimestamp()}`)
              .then(response => response.json())
              .then(data => {
                const status = data.code;
                if (status === 800) {
                  // 二维码过期
                  clearInterval(checkStatus);
                  console.log('二维码已过期');
                } else if (status === 801) {
                  // 等待扫码
                  console.log('请扫描二维码');
                } else if (status === 802) {
                  // 待确认
                  console.log('二维码已扫描，请确认登录');
                } else if (status === 803) {
                  // 授权登录成功
                  clearInterval(checkStatus);
                 
                    window.location.href = './HomePage.html'
                  const cookies = data.cookie;
                  console.log('登录成功');
                  console.log('Cookies:', cookies);

                } else if (status === 502) {
                  // 扫码后返回502，加上noCookie参数
                  console.log('请加上noCookie参数重新扫码');
                }
              })
              .catch(error => {
                console.error('二维码检测出错', error);
                clearInterval(checkStatus);
              });
          }, 2000);
        })
        .catch(error => {
          console.error('二维码生成出错', error);
        });
})
.catch(error => {
  console.log("Error:", error);
});

