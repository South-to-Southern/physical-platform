var container, stats, controls, camera, scene, renderer, light
var group = new THREE.Group()
var doorGroup = new THREE.Group()
var raycaster = new THREE.Raycaster()
var mouse = new THREE.Vector2()
var group = new THREE.Group()
var doorGroup = new THREE.Group()

var msg = document.querySelector('.msg')
var font = document.getElementById('physical')
var q2 = document.getElementById('q4')
var q4 = document.getElementById('q6')
var q8 = document.getElementById('q8')
var q9 = document.getElementById('q9')
var q10 = document.getElementById('q10')
var q11 = document.getElementById('q11')
var q12 = document.getElementById('q12')
var q6 = document.getElementById('q6')
var q1 = document.getElementById('q1')
var aa5 = document.getElementById('aa5')
var q02 = document.querySelector('.q02')
var q14 = document.querySelector('.q14')
var q16 = document.querySelector('.q16')
var q3 = document.querySelector('.q3')
var q5 = document.querySelector('.q5')
var qq7 = document.querySelector('.qq7')
var q7 = document.querySelector('.q7')
var q20 = document.querySelector('.q20')
var q22 = document.querySelector('.q22')
var q28 = document.querySelector('.q28')
var q30 = document.querySelector('.q30')
var q26 = document.querySelector('.q26')
var q24 = document.querySelector('.q24')
var q32 = document.querySelector('.q32')
var q34 = document.querySelector('.q34')
var q36 = document.querySelector('.q36')
var q38 = document.querySelector('.q38')
var p2 = document.getElementById('p4')
var p4 = document.getElementById('p6')
var p8 = document.getElementById('p8')
var p9 = document.getElementById('p9')
var p10 = document.getElementById('p10')
var p11 = document.getElementById('p11')
var p12 = document.getElementById('p12')
var p6 = document.getElementById('p6')
var p1 = document.getElementById('p1')
var aa5 = document.getElementById('aa5')
var p02 = document.querySelector('.p02')
var p14 = document.querySelector('.p14')
var p16 = document.querySelector('.p16')
var p3 = document.querySelector('.p3')
var p5 = document.querySelector('.p5')
var p7 = document.querySelector('.p7')
var pp7 = document.querySelector('.pp7')
var p20 = document.querySelector('.p20')
var p22 = document.querySelector('.p22')
var p28 = document.querySelector('.p28')
var p30 = document.querySelector('.p30')
var p26 = document.querySelector('.p26')
var p24 = document.querySelector('.p24')
var p32 = document.querySelector('.p32')
var p34 = document.querySelector('.p34')
var p36 = document.querySelector('.p36')
var p38 = document.querySelector('.p38')
var fenhua = document.querySelector(".fenhua")
var heng = document.querySelector(".heng")
var shu = document.querySelector(".shu")
var line = document.querySelector(".line")
var ctr1 = document.querySelector(".ctr1")
var ctr2 = document.querySelector(".ctr2")
var opens = document.querySelector(".opens")
var downs = document.querySelector(".downs")
var opens2 = document.querySelector(".opens2")
var downs2 = document.querySelector(".downs2")
var r1 = document.querySelector(".r1")
var r2 = document.querySelector(".r2")
var r3 = document.querySelector(".r3")
var r4 = document.querySelector(".r4")
var r5 = document.querySelector(".r5")
var r6 = document.querySelector(".r6")
var r7 = document.querySelector(".r7")
var l1 = document.querySelector(".l1")
var l2 = document.querySelector(".l2")
var l3 = document.querySelector(".l3")
var l4 = document.querySelector(".l4")
var l5 = document.querySelector(".l5")
var l6 = document.querySelector(".l6")
var l7 = document.querySelector(".l7")
var r8 = document.querySelector(".r8")
var msg1 = document.getElementById("msg1")
var r9 = document.querySelector(".r9")
var r10 = document.querySelector(".r10")
var r11 = document.querySelector(".r11")
var l11 = document.querySelector(".l11")
var r12 = document.querySelector(".r12")
var l12 = document.querySelector(".l12")
var r13 = document.querySelector(".r13")
var r14 = document.querySelector(".r14")
var r15 = document.querySelector(".r15")
var r16 = document.querySelector(".r16")
var r17 = document.querySelector(".r17")
var r18 = document.querySelector(".r18")
var l13 = document.querySelector(".l13")
var l14 = document.querySelector(".l14")
var l15 = document.querySelector(".l15")
var l16 = document.querySelector(".l16")
var l17 = document.querySelector(".l17")
var l18 = document.querySelector(".l18")
var bb6 = document.getElementById("bb5")
var b = document.getElementById("b")
var b0 = document.getElementById("b0")
var a = document.querySelector(".a")
var a0 = document.querySelector(".a0")
var p1 = document.querySelector(".p1")
var B5 = document.querySelector(".B5")
var B2 = document.getElementById("B2")
var B0 = document.getElementById("B0")
var x2 = document.getElementById('x4')
var x4 = document.getElementById('x6')
var x8 = document.getElementById('x8')
var x9 = document.getElementById('x9')
var x10 = document.getElementById('x10')
var x11 = document.getElementById('x11')
var x12 = document.getElementById('x12')
var x6 = document.getElementById('x6')
var x1 = document.getElementById('x1')
var aa5 = document.getElementById('aa5')
var x02 = document.querySelector('.x02')
var x14 = document.querySelector('.x14')
var x16 = document.querySelector('.x16')
var x3 = document.querySelector('.x3')
var x5 = document.querySelector('.x5')
var xx7 = document.querySelector('.xx7')
var x7 = document.querySelector('.x7')
var x20 = document.querySelector('.x20')
var x22 = document.querySelector('.x22')
var x28 = document.querySelector('.x28')
var x30 = document.querySelector('.x30')
var x26 = document.querySelector('.x26')
var x24 = document.querySelector('.x24')
var x32 = document.querySelector('.x32')
var x34 = document.querySelector('.x34')
var x36 = document.querySelector('.x36')
var x38 = document.querySelector('.x38')
var y2 = document.getElementById('y4')
var y4 = document.getElementById('y6')
var y8 = document.getElementById('y8')
var y9 = document.getElementById('y9')
var y10 = document.getElementById('y10')
var y11 = document.getElementById('y11')
var y12 = document.getElementById('y12')
var y6 = document.getElementById('y6')
var y1 = document.getElementById('y1')
var aa5 = document.getElementById('aa5')
var y02 = document.querySelector('.y02')
var y14 = document.querySelector('.y14')
var y16 = document.querySelector('.y16')
var y3 = document.querySelector('.y3')
var y5 = document.querySelector('.y5')
var yy7 = document.querySelector('.yy7')
var y7 = document.querySelector('.y7')
var y20 = document.querySelector('.y20')
var y22 = document.querySelector('.y22')
var y28 = document.querySelector('.y28')
var y30 = document.querySelector('.y30')
var y26 = document.querySelector('.y26')
var y24 = document.querySelector('.y24')
var y32 = document.querySelector('.y32')
var y34 = document.querySelector('.y34')
var y36 = document.querySelector('.y36')
var y38 = document.querySelector('.y38')
var g5 = document.querySelector(".g5")
var gg5 = document.getElementById("gg5")
var g = document.getElementById("g")
var g0 = document.getElementById("g0")
var u1 = document.querySelector(".u1")
var u12 = document.querySelector(".u12")
var abd2 = document.getElementById("abd2")
var abe2 = document.getElementById("abe2")
var downs4 = document.querySelector(".downs4")
var opens4 = document.querySelector(".opens4")
var fenhua1 = document.querySelector(".fenhua1")
var r19 = document.querySelector(".r19")
var r20 = document.querySelector(".r20")
var l20 = document.querySelector(".l20")
var r21 = document.querySelector(".r21")
var l21 = document.querySelector(".l21")
var opens5 = document.querySelector(".opens5")
var downs5 = document.querySelector(".downs5")
var r22 = document.querySelector(".r22")
var r23 = document.querySelector(".r23")
var l23 = document.querySelector(".l23")
var r24 = document.querySelector(".r24")
var l24 = document.querySelector(".l24")
var light = document.querySelector(".light")
var l22 = document.querySelector(".l22")
var abc3 = document.getElementById("abc3")
var r25 = document.querySelector(".r25")
var l25 = document.querySelector(".l25")
var zhunline = document.querySelector(".zhunline")
var opens6 = document.querySelector(".opens6")
var downs6 = document.querySelector(".downs6")
var l26 = document.querySelector(".l26")
var l27 = document.querySelector(".l27")
var r27 = document.querySelector(".r27")
var turn = document.querySelector(".turn")
var r28 = document.querySelector(".r28")
var l28 = document.querySelector(".l28")
var r29 = document.querySelector(".r29")
var l29 = document.querySelector(".l29")
var r30 = document.querySelector(".r30")
var l30 = document.querySelector(".l30")
var r31 = document.querySelector(".r31")
var l31 = document.querySelector(".l31")
var opens7 = document.querySelector(".opens7")
var downs7 = document.querySelector(".downs7")
var r32 = document.querySelector(".r32")
var l32 = document.querySelector(".l32")
var zhunline1 = document.querySelector(".zhunline1")
var heng1 = document.querySelector(".heng1")
var shu1 = document.querySelector(".shu1")
var fenhua2 = document.querySelector(".fenhua2")
var l39 = document.querySelector(".l39")
var r33 = document.querySelector(".r33")
var l33 = document.querySelector(".l33")
var opens8 = document.querySelector(".opens7")
var downs8 = document.querySelector(".downs7")
var r34 = document.querySelector(".r34")
var l34 = document.querySelector(".l34")
var r35 = document.querySelector(".r35")
var l35 = document.querySelector(".l35")
var l36 = document.querySelector(".l36")
var r37 = document.querySelector(".r37")
var l37 = document.querySelector(".l37")
var r38 = document.querySelector(".r38")
var l38 = document.querySelector(".l38")

let modle0 //汞灯
let modle1 //光栅
let modle2 //三棱镜
let modle3 //偏振片
let modle4 //双面镜
let modle5 //目镜系统整体
let modle6 //内盘

var a000 = 0
var a100 = 0
var a200 = 0
var a300 = 0
var a400 = 0
var a500 = 0
var a600 = 0
init()
animate()
function init () {

  container = document.createElement('div')
  document.body.appendChild(container)
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)
  var loader = new THREE.FBXLoader()
  loader.load('assets/models/实验桌.fbx', function (object) {
    modle0 = object.children[0].children[18]
    modle1 = object.children[0].children[34]
    modle2 = object.children[0].children[23]
    modle3 = object.children[0].children[43]
    modle4 = object.children[0].children[52]
    modle5 = object.children[0].children[51]
    modle6 = object.children[0].children[9]
    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
    object.position.set(0, -1.1, -1.7)
    object.rotation.y = Math.PI / 2
    object.scale.set(0.0025, 0.0025, 0.0025)
    doorGroup.add(object)
    group.add(doorGroup)
    scene.add(group)
    o0(modle0, a000)
    o1(modle1, a100)
    o2(modle2, a200)
    o3(modle3, a300)
    o4(modle4, a400)
    o5(modle5, a500)
    o6(modle6, a600)
  })
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(1520, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.outputEncoding = THREE.sRGBEncoding
  container.appendChild(renderer.domElement)
  window.addEventListener('resize', onWindowResize, false)
  stats = new Stats()
  container.appendChild(stats.dom)
}
function o0 (modle0, a000) {
  console.log(modle0)
  console.log(a000)
  if (a000 == 1) {
    modle0.position.set(0, 0, 0)
  }
  else if (a000 == 2) {
    modle0.rotation.set(0, 0, 0)
  }
}
function o1 (modle1, a100) {
  console.log(modle1)
  console.log(a100)
  if (a100 == 1) {
    modle1.position.set(0, 0, 0)
  }
  else if (a100 == 2) {
    modle1.rotation.set(0, 0, 0)
  }
}
function o2 (modle2, a200) {
  console.log(modle2)
  console.log(a200)
  if (a200 == 1) {
    modle2.position.set(0, 0, 0)
  }
  else if (a200 == 2) {
    modle2.rotation.set(0, 0, 0)
  }
}
function o3 (modle3, a300) {
  console.log(modle3)
  console.log(a300)
  if (a300 == 1) {
    modle3.position.set(0, 0, 0)
  }
  else if (a300 == 2) {
    modle3.rotation.set(0, 0, 0)
  }
}
function o4 (modle4, a400) {
  console.log(modle4)
  console.log(a400)
  if (a400 == 1) {
    modle4.position.set(0, 0, 0)
  }
  else if (a400 == 2) {
    modle4.rotation.set(0, 0, 0)
  }
}
function o5 (modle5, a500) {
  console.log(modle5)
  console.log(a500)
  if (a500 == 1) {
    modle5.position.set(0, 0, 0)
  }
  else if (a500 == 2) {
    modle5.rotation.set(0, 0, 0)
  }
}
function o6 (modle6, a600) {
  console.log(modle6)
  console.log(a600)
  if (a600 == 1) {
    modle6.position.set(0, 0, 0)
  }
  else if (a600 == 2) {
    modle6.rotation.set(0, 0, 0)
  }
}
function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
}

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  stats.update()
}
controls = new THREE.OrbitControls(camera, renderer.domElement)
function render () {
  controls.update()
  // controls.minPolarAngle = Math.PI / 2
  // controls.maxPolarAngle = Math.PI / 2
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
function next0 () {
  q1.style.display = "none"
  bb5.style.display = "block"
  b.style.display = "block"
  b0.style.display = "block"
  a.style.display = "none"
  a0.style.display = "none"
  aa5.style.display = "none"
  fenhua.style.display = "none"
  line.style.display = "none"
  abc.style.display = "none"
  abe.style.display = "none"
  abf.style.display = "none"
  u1.style.display = "block"

}
function next () {
  abc.style.display = "none"
  abd.style.display = "block"
}
function next1 () {
  abd.style.display = "none"
  abe.style.display = "block"
}
function next2 () {
  abe.style.display = "none"
  abf.style.display = "block"
}
function next3 () {
  abf.style.display = "none"
  q1.style.display = "block"
  aa5.style.display = "none"

}
function c2 () {
  q1.style.display = "none"
  q9.style.display = "block"
}
function c4 () {
  q1.style.display = "none"
  q10.style.display = "block"
}
function c6 () {
  q1.style.display = "none"
  q11.style.display = "block"
}
function c8 () {
  q1.style.display = "none"
  q12.style.display = "block"
}
function closedown () {
  msg.style.display = "none"
  r5.style.display = "block"
  r6.style.display = "block"
  r7.style.display = "block"
  l5.style.display = "block"
  l6.style.display = "block"
  l7.style.display = "block"
}
function c11 () {
  q02.style.background = "green"
  r1.style.display = "none"
  l1.style.display = "none"
}
function c13 () {
  q14.style.background = "green"
}

function c15 () {
  q16.style.background = "green"
  r1.style.display = "none"
  l1.style.display = "none"
  opens.style.display = "none"
  downs.style.display = "none"
  opens2.style.display = "none"
  downs2.style.display = "none"
  r2.style.display = "none"
  r3.style.display = "none"
  l2.style.display = "none"
  l3.style.display = "none"
  line.style.display = "none"
}

function c9 () {
  q9.style.display = "none"
  q1.style.display = "block"
  if (
    q02.style.background == "green"
    && q14.style.background == "green"
    && q16.style.background == "green") {
    q3.style.background = "green"
  }
  fenhua.style.display = "none"
}
function c16 () {
  q10.style.display = "none"
  q1.style.display = "block"
  if (
    q20.style.background == "green"
    && q22.style.background == "green"
    && q24.style.background == "green") {
    q5.style.background = "green"
  }

}
function c18 () {
  q20.style.background = "green"
  r8.style.display = "none"
  opens3.style.display = "none"
  downs3.style.display = "none"
}
function c20 () {
  q22.style.background = "green"
  r4.style.display = "none"


}
function c22 () {
  q24.style.background = "green"
  r4.style.display = "none"
  r5.style.display = "none"
  r6.style.display = "none"
  r7.style.display = "none"
  l5.style.display = "none"
  l6.style.display = "none"
  l7.style.display = "none"
}
function c23 () {
  q1.style.display = "block"
  q11.style.display = "none"
  if (
    q26.style.background == "green"
    && q28.style.background == "green"
    && q30.style.background == "green") {
    q7.style.background = "green"
  }
}
function c25 () {
  r9.style.display = "none"
  q26.style.background = "green"
}
function c26 () {
  r10.style.display = "block"
}
function c27 () {
  r10.style.display = "none"
  q28.style.background = "green"
}
function c28 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  r11.style.display = "block"
  l11.style.display = "block"
}
function c29 () {
  q30.style.background = "green"
  r11.style.display = "none"
  l11.style.display = "none"
}
function c30 () {
  q1.style.display = "block"
  q12.style.display = "none"
  if (
    q32.style.background == "green"
    && q32.style.background == "green"
    && q36.style.background == "green"
    && q38.style.background == "green") {
    qq7.style.background = "green"
  }

}
function c31 () {
  opens.style.display = "block"
  downs.style.display = "block"
}
function c32 () {
  opens.style.display = "none"
  downs.style.display = "none"
  r12.style.display = "none"
  l12.style.display = "none"
  q32.style.background = "green"
}
function c33 () {
  r15.style.display = "block"
  r14.style.display = "block"
  l14.style.display = "block"
  l15.style.display = "block"
}
function c34 () {
  q34.style.background = "green"
  r15.style.display = "none"
  r14.style.display = "none"
  l14.style.display = "none"
  l15.style.display = "none"
}
function c35 () {
  r16.style.display = "block"
  l16.style.display = "block"
}
function c36 () {
  q36.style.background = "green"
  r16.style.display = "none"
  l16.style.display = "none"
}
function c37 () {
  r17.style.display = "block"
  r18.style.display = "block"
  l17.style.display = "block"
  l18.style.display = "block"
}
function c38 () {
  q38.style.background = "green"
  r17.style.display = "none"
  r18.style.display = "none"
  l17.style.display = "none"
  l18.style.display = "none"
}

function c10 () {
  fenhua.style.display = "block"
  r1.style.display = "block"
  l1.style.display = "block"
}
function c12 () {
  r1.style.display = "none"
  l1.style.display = "none"
  opens.style.display = "none"
  downs.style.display = "none"
  opens2.style.display = "block"
  downs2.style.display = "block"
}
function c14 () {
  r1.style.display = "none"
  l1.style.display = "none"
  opens.style.display = "none"
  downs.style.display = "none"
  opens2.style.display = "none"
  downs2.style.display = "none"
  r2.style.display = "block"
  r3.style.display = "block"
  l2.style.display = "block"
  l3.style.display = "block"
}



var flag = 4
function z1 () {

  var a = "blur" + "(" + flag + "px" + ")"
  fenhua.style.filter = a
  if (flag < 8) { flag++ }

}
function z2 () {

  var a = "blur" + "(" + flag + "px" + ")"
  fenhua.style.filter = a
  if (flag >= 0) { flag-- }
}
function z3 () {
  line.style.display = "block"
}
function z4 () {
  line.style.display = "none"
}
var flag1 = 0
function z5 () {
  flag1 = 0
}
function z6 () {
  flag1 = 1
}
var flag2 = 1.8
function z7 () {
  if (flag1 == 1) {
    var a = "blur" + "(" + flag2 + "px" + ")"
    line.style.filter = a
    if (flag2 < 2.5) { flag2 = flag2 + 0.1 }
  }
  else {
    alert("请拧松目镜锁紧螺钉")
  }

}
function z8 () {
  if (flag1 == 1) {
    var a = "blur" + "(" + flag2 + "px" + ")"
    line.style.filter = a
    if (flag2 > 0) { flag2 = flag2 - 0.1 }
  }
  else {
    alert("请拧松目镜锁紧螺钉")
  }

}

var opens3 = document.querySelector(".opens3")
var downs3 = document.querySelector(".downs3")

function c17 () {
  opens3.style.display = "block"

}

function z9 () {
  opens3.style.display = "noen"
  downs3.style.display = "block"
  r8.style.display = "block"
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0.5, 1, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  fenhua.style.display = "block"
}
function z10 () {
  opens3.style.display = "block"
  r8.style.display = "none"
  downs3.style.display = "none"
}
function c19 () {
  r4.style.display = "block"

}
function c21 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  msg.style.display = "block"
}
function c24 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0.5, 1, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  r9.style.display = "block"
}
function z22 () {
  r12.style.display = "block"
  r13.style.display = "block"
  l12.style.display = "block"
}
function z23 () {
  r12.style.display = "none"
  l12.style.display = "none"
}
var lef = 800

function z20 () {
  var b = "" + lef + "px"
  r13.style.left = b
  lef = lef - 5
}
function z21 () {
  var b = "" + lef + "px"
  r13.style.left = b
  lef = lef + 5
}

var flag3 = 0

function z24 () {
  flag3 = 0
}
function z25 () {
  flag3 = 1
}
var flag4 = 2.5
function z26 () {
  if (flag3 == 1) {
    var a = "blur" + "(" + flag4 + "px" + ")"
    r13.style.filter = a
    if (flag4 < 4) { flag4 = flag4 + 0.1 }
  }
  else {
    alert("请拧松物镜锁紧螺钉")

  }
}
function z27 () {
  if (flag3 == 1) {
    var a = "blur" + "(" + flag4 + "px" + ")"
    r13.style.filter = a
    if (flag4 > 0) { flag4 = flag4 - 0.1 }
  }
  else {
    alert("请拧松物镜锁紧螺钉")
  }
}

var h = 10
function z28 () {
  var a = "" + h + "px"
  r13.style.width = a
  h = h - 3
}
function z29 () {
  var a = "" + h + "px"
  r13.style.width = a
  h = h + 3
}

var rot = 0
function z30 () {
  var a = "rotate" + "(" + rot + "deg" + ")"
  r13.style.transform = a
  rot = rot + 30
}
function z31 () {
  var a = "rotate" + "(" + rot + "deg" + ")"
  r13.style.transform = a
  rot = rot - 30
}

var h1 = 60
function z32 () {
  var a = "" + h1 + "px"
  r13.style.top = a
  h1 = h1 + 2
}
function z33 () {
  var a = "" + h1 + "px"
  r13.style.top = a
  h1 = h1 - 2
}
function d2 () {
  p9.style.display = "block"
  p1.style.display = "none"
}
function d4 () {
  p12.style.display = "block"
  p1.style.display = "none"
}
function d9 () {
  p9.style.display = "none"
  p1.style.display = "block"
  if (
    p02.style.background == "green"
    && p14.style.background == "green"
    && p16.style.background == "green") {
    p3.style.background = "green"
  }
}
function d30 () {
  p1.style.display = "block"
  p12.style.display = "none"
  if (
    p32.style.background == "green"
    && p34.style.background == "green"
    && p36.style.background == "green"
    && p38.style.background == "green") {
    p5.style.background = "green"
  }
}
function d11 () {
  p02.style.background = "green"
  r19.style.display = "none"
  opens4.style.display = "none"
  downs4.style.display = "none"
  r20.style.display = "none"
  l20.style.display = "none"
  fenhua1.style.display = "none"
}
function d13 () {
  p14.style.background = "green"
}
function d15 () {
  p16.style.background = "green"
  r21.style.display = "none"
  l21.style.display = "none"
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
}
function d32 () {
  p32.style.background = "green"
  opens5.style.display = "none"
  downs5.style.display = "none"
  r22.style.display = "none"
}
function d34 () {
  p34.style.background = "green"
  l22.style.display = "none"
}
function d36 () {
  p36.style.background = "green"
  r23.style.display = "none"
  l23.style.display = "none"
}
function d38 () {
  p38.style.background = "green"
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  r24.style.display = "none"
  l24.style.display = "none"
  opens5.style.display = "none"
  downs5.style.display = "none"
}

function d10 () {
  fenhua1.style.display = "block"
  opens4.style.display = "block"
  downs4.style.display = "block"
}

function h10 () {
  r20.style.display = "block"
  l20.style.display = "block"
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0.5, 1, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  r19.style.display = "block"
}
function h2 () {
  r20.style.display = "none"
  l20.style.display = "none"
  r22.style.display = "none"
  fenhua.style.display = "none"
  light.style.display = "none"
  opens5.style.display = "none"
  downs5.style.display = "none"
  r19.style.display = "none"
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()

}
var flag10 = 1
function h5 () {
  flag10 = 1
}
function h4 () {
  flag10 = 0
}

function d12 () {
  if (flag10 == 0) {
    fenhua.style.display = "block"
    fenhua.style.opacity = "0.1"
    r21.style.display = "block"
    l21.style.display = "block"
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
    camera.position.set(0.5, 1, 0)
    scene.add(camera)
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    function render () {
      controls.update()
      // controls.minPolarAngle = Math.PI / 2
      // controls.maxPolarAngle = Math.PI / 2
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }
    render()
  }
  else {
    alert("请锁紧游标盘")
  }
}
function d31 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0.5, 1, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  opens5.style.display = "block"
  downs5.style.display = "block"
  r24.style.display = "block"
  l24.style.display = "block"

}
function h8 () {
  r22.style.display = "block"
  fenhua.style.display = "block"
  light.style.display = "block"
}
function h9 () {
  r22.style.display = "none"
  fenhua.style.display = "none"
  light.style.display = "none"
}
var lef1 = 800
var flag11 = 1
var flag12 = 1
function h14 () {
  var b = "" + lef1 + "px"
  lef1 = lef1 - 3
  if (lef1 < 750) {
    flag12 = 0
  }
  if (flag12 == 0) {
    lef1 = lef1 + 6
  }
  light.style.left = b
}
function h15 () {
  var b = "" + lef1 + "px"
  lef1 = lef1 + 3
  if (lef1 > 950) {
    flag11 = 0
  }
  if (flag11 == 0) {
    lef1 = lef1 - 6
  }
  light.style.left = b
}
function d33 () {
  l22.style.display = "block"
  msg1.style.display = "block"
}
function closedown1 () {
  msg1.style.display = "none"
  l22.style.display = "block"
}
function h16 () {
  var b = "" + lef1 + "px"
  lef1 = lef1 + 3
  if (lef1 > 950) {
    flag11 = 0
  }
  if (flag11 == 0) {
    lef1 = lef1 - 6
  }
  light.style.left = b
}
function d35 () {
  r23.style.display = "block"
  l23.style.display = "block"
}
var flag15 = 1
function h12 () {
  flag15 = 0
}
function h13 () {
  flag15 = 1
}

function d37 () {
  if (flag15 == 0) {
    opens5.style.display = "block"
    downs5.style.display = "block"
    r23.style.display = "none"
    l23.style.display = "none"
  }
  else {
    alert("请锁紧游标盘")
  }
}
function next09 () {
  B5.style.display = "block"
  B2.style.display = "block"
  B0.style.display = "block"
  b.style.display = "none"
  b0.style.display = "none"
  bb5.style.display = "none"
  p1.style.display = "none"
  abc1.style.display = "none"
  abc3.style.display = "block"
}
function next10 () {
  B5.style.display = "none"
  B2.style.display = "none"
  B0.style.display = "none"
  b.style.display = "none"
  b0.style.display = "none"
  bb5.style.display = "none"
  p1.style.display = "none"
  x1.style.display = "none"
  g5.style.display = "block"
  gg5.style.display = "block"
  g.style.display = "block"
  g0.style.display = "block"
  y12.style.display = "block"
  abc3.style.display = "none"

}
function e8 () {
  x12.style.display = "block"
  x1.style.display = "none"
}
function e4 () {
  x10.style.display = "block"
  x1.style.display = "none"
}
function e6 () {
  x11.style.display = "block"
  x1.style.display = "none"
}
function e16 () {
  x10.style.display = "none"
  x1.style.display = "block"
  if (
    x20.style.background == "green"
  ) { x5.style.background = "green" }
}
function e18 () {
  x20.style.background = "green"
  r32.style.display = "none"
  l32.style.display = "none"
}
function e23 () {
  x11.style.display = "none"
  x1.style.display = "block"
  if (
    x26.style.background == "green"
  ) {
    x7.style.background = "green"
  }
}
function e25 () {
  x26.style.background = "green"
  r32.style.display = "none"
  l32.style.display = "none"
}
function e30 () {
  x12.style.display = "none"
  x1.style.display = "block"
  if (
    x32.style.background == "green"
    && x34.style.background == "green"
    && x36.style.background == "green") {
    xx7.style.background = "green"
  }
}
function e32 () {
  l26.style.display = "none"
  x32.style.background = "green"
}
function e34 () {
  x34.style.background = "green"
  l27.style.display = "none"
  turn.style.display = "none"
  l28.style.display = "none"
  r28.style.display = "none"
  r29.style.display = "none"
  r30.style.display = "none"
  r31.style.display = "none"
  l29.style.display = "none"

}
function e36 () {
  x36.style.background = "green"
  l30.style.display = "none"
  l31.style.display = "none"
}
function e31 () {
  fenhua.style.display = "block"
  opens6.style.display = "block"
  downs6.style.display = "block"
}
function e33 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0.5, 1, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  l27.style.display = "block"
  turn.style.display = "block"
}
function a100 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(1, 0, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  l27.style.display = "none"
  l28.style.display = "block"
  r28.style.display = "block"
  r29.style.display = "block"
  r30.style.display = "block"
  r31.style.display = "block"
  l29.style.display = "block"
}
function e35 () {
  l30.style.display = "block"
  l31.style.display = "block"
}
function e17 () {
  r32.style.display = "block"
  l32.style.display = "block"
}
function e24 () {
  r32.style.display = "block"
  l32.style.display = "block"
}
var lef2 = 800
var flag13 = 1
var flag14 = 1
function h17 () {
  var b = "" + lef2 + "px"
  lef2 = lef2 - 3
  if (lef2 < 750) {
    flag14 = 0
  }
  if (flag14 == 0) {
    lef2 = lef2 + 6
  }
  zhunline.style.left = b
}
function h18 () {
  var b = "" + lef2 + "px"
  lef2 = lef2 + 3
  if (lef2 > 950) {
    flag13 = 0
  }
  if (flag13 == 0) {
    lef2 = lef2 - 6
  }
  zhunline.style.left = b
}
function h20 () {
  zhunline.style.display = "none"
  l26.style.display = "block"
}
function h19 () {

  zhunline.style.display = "block"
}
function next11 () {
  g5.style.display = "none"
  g.style.display = "none"
  g0.style.display = "none"
  y12.style.display = "none"
  window.open('../physical.html', 'self')
}
function f34 () {
  y34.style.background = "green"
  r34.style.display = "none"
  l34.style.display = "none"
  r35.style.display = "none"
  l35.style.display = "none"
}
function f36 () {
  y36.style.background = "green"
  l36.style.display = "none"
}
function f38 () {
  y38.style.background = "green"
  r37.style.display = "none"
  l37.style.display = "none"
}
function f25 () {
  y26.style.background = "green"
  r38.style.display = "none"
  l38.style.display = "none"
}
function f32 () {
  y32.style.background = "green"
  l39.style.display = "none"
  l33.style.display = "none"
  r33.style.display = "none"
  fenhua2.style.display = "none"
}
function f37 () {
  r34.style.display = "block"
  l34.style.display = "block"
  r35.style.display = "block"
  l35.style.display = "block"
}
function f31 () {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(0.5, 1, 0)
  scene.add(camera)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  function render () {
    controls.update()
    // controls.minPolarAngle = Math.PI / 2
    // controls.maxPolarAngle = Math.PI / 2
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  l39.style.display = "block"
  l33.style.display = "block"
  r33.style.display = "block"
  fenhua2.style.display = "block"
}
function f35 () {
  l36.style.display = "block"
}
function f37 () {
  r37.style.display = "block"
  l37.style.display = "block"
  r38.style.display = "block"
  l38.style.display = "block"
}
function next12 () {
  abc1.style.display = "none"
  abd1.style.display = "block"
}
function next13 () {
  abd1.style.display = "none"
  abe1.style.display = "block"
}
function next14 () {
  abe1.style.display = "none"
  abd2.style.display = "block"
}
function next15 () {
  abd2.style.display = "none"
  abe2.style.display = "block"
}
function next16 () {
  abe2.style.display = "none"
  bb5.style.display = "none"
  p1.style.display = "block"
}
function next17 () {
  abc3.style.display = "none"
  abd3.style.display = "block"

}
function next18 () {
  abd3.style.display = "none"
  abe3.style.display = "block"
}
function next19 () {
  x1.style.display = "block"
  abe3.style.display = "none"

}
