var container, stats, controls, camera, scene, renderer, light
var group = new THREE.Group()
var doorGroup = new THREE.Group()
var raycaster = new THREE.Raycaster()
var mouse = new THREE.Vector2()
var group = new THREE.Group()
var doorGroup = new THREE.Group()
var font = document.getElementById('physical')
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
    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
    object.position.set(0, -1, -2)
    object.rotation.y = Math.PI / 2
    console.log(object.position)

    object.scale.set(0.0025, 0.0025, 0.0025)
    doorGroup.add(object)
    group.add(doorGroup)
    scene.add(group)
    for (var i = 1; i < 1000; i++) {
      if (scene.children[i].object.name == '物镜俯仰螺钉') {
        alert.log(1)
      }
      else {
        alert.log(0)
      }
    }
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
document.addEventListener('dblclick', onDocumentMouseDown, false)
function onDocumentMouseDown (event) {
  event.preventDefault()
  var vector = new THREE.Vector3(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
    0.5
  )
  vector = vector.unproject(camera)
  var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize())
  var intersects = raycaster.intersectObjects(scene.children, true)
  console.log(intersects[0])
  if (intersects[0].object.name == '物镜俯仰螺钉') {
    font.innerHTML = "平行光管俯仰调节螺钉"
  }
  if (intersects[0].object.name == '目镜紧定螺钉') {
    font.innerHTML = "目镜锁紧螺钉"
  }
  if (intersects[0].object.name == '物镜调焦手轮') {
    font.innerHTML = "狭缝宽度调节手轮"
  }
  if (intersects[0].object.name == '物镜锁紧螺钉') {
    font.innerHTML = "狭缝装置锁紧螺钉"
  }
  if (intersects[0].object.name == '目镜系统整体') {
    font.innerHTML = "望远镜"
  }
  if (intersects[0].object.name == '平行光管') {
    font.innerHTML = "平行光管"
  }
  if (intersects[0].object.name == '目镜调焦手轮') {
    font.innerHTML = "目镜调焦手轮"
  }
  if (intersects[0].object.name == '目镜俯仰螺钉') {
    font.innerHTML = "望远镜俯仰调节螺钉"
  }
  if (intersects[0].object.name == '柱体') {
    font.innerHTML = "刻度盘"
  }
  if (intersects[0].object.name == '内盘max') {
    font.innerHTML = "游标盘"
  }
  if (intersects[0].object.name == '锁紧螺钉') {
    font.innerHTML = "游标盘止动螺钉"
  }
  if (intersects[0].object.name == '载物台') {
    font.innerHTML = "载物台"
  }
  if (intersects[0].object.name == '载物台螺钉1' || intersects[0].object.name == '载物台螺钉2' || intersects[0].object.name == '载物台螺钉3') {
    font.innerHTML = "载物台面调节螺钉"
  }
  if (intersects[0].object.name == '汞灯') {
    font.innerHTML = "汞灯"
  }
  if (intersects[0].object.name == '双面平面镜') {
    font.innerHTML = "双面平面镜"
  }
  if (intersects[0].object.name == '三棱镜') {
    font.innerHTML = "三棱镜"
  }
  if (intersects[0].object.name == '偏振片') {
    font.innerHTML = "偏振片"
  }
  if (intersects[0].object.name == '光栅') {
    font.innerHTML = "光栅"
  }
  controls.update()
  render()
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
  window.location.href = "./physical1.html"
}