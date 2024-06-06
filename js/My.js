
fetch('http://www.codeman.ink/api/likelist?uid=1407748113&cookie=MUSIC_U=003150D5F35B69B138A72566BEAAE926CAD3755BBA9E0075E2AF7FCB607B1582D6894C54E7CE71568E9D6275B44E22454770B9EB1C3FB1593465B8695FE307A2C5018A896FC62EDD3A4616698AA6BC34027A7145CE846AFE788068B900642A6A8C67403244250A9A8D4525F4FAE021B831AA332D4D48FF64E22169B63BDCA1987C62C83697D0DFF59F49AB28CE2F7FD12E7B80AD4915AC2D27E49F186A65487194D5E0151CBF87532249174457728BF3AD4F99BD5FD53E1921E54603F2368F68D24CDD7183101D549B95FC5E61439F337C')
  .then(response => response.json())
  .then(data => {
    // 获取id的数量
    const idCount = data.ids.length;

    // 将id的数量添加到span中
    const spanElement = document.querySelector('.Win_number');
    spanElement.textContent = idCount + '首';
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  function setLinkHref(linkClassName, spanClassName, id) {
    const linkElement = document.querySelector("." + linkClassName);
    const spanElement = document.querySelector("span." + spanClassName);
  
    linkElement.href = "./Gedan.html?params=" + id;
  }
  
  // 调用函数，传入参数
  setLinkHref("Win_link1", "Win_itemName1", "5436502093");
  setLinkHref("Win_link2","Win_itemName2","2185854291");
  setLinkHref("Win_link3","Win_itemName3","2457752542");
  setLinkHref("Win_like","Win_title","2153495063");

  

