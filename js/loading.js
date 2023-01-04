// 控制tab
var leader = document.querySelector('.leader')
var lis = leader.querySelectorAll('li')
var items = document.querySelectorAll('.content div')
for (var i = 0; i < lis.length; i++) {
  lis[i].setAttribute('index', i)
  lis[i].onclick = function () {
    for (i = 0; i < lis.length; i++) {
      items[i].className = 'noitem'
      lis[i].className = ''
    }
    this.className = 'current'
    var index = this.getAttribute('index')
    items[index].className = 'item'
  }
}
//控制登录界面
var background = document.querySelector('.background')
var launch = document.querySelector('.launch')
var msg = document.querySelector('.msg')
function loading () {
  launch.style.display = "block"
  background.style.display = "block"
  msg.style.display = "block"
}
function closedown () {
  msg.style.display = "none"
}
function quit () {
  launch.style.display = "none"
  background.style.display = "none"
}
//验证信息  
var account = document.getElementById('account')
var password = document.getElementById('password')

function next () {
  var radios = document.getElementsByName("link")
  var checked = false
  for (var j = 0; j < radios.length; j++) {
    if (radios[j].checked == true) {
      checked = true
    }
  }
  if (!checked) {
    alert("请选择相应平台！")
  }
  else {
    if (account.value != '123456' || password.value != '123456')
      alert("账号或密码错误")
    else
      if (radios.id = "student")
        window.location.href = "../physical.html"
      else
        window.location.href = "../teacher.html"
  }
}
