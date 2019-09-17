window.onload = async function index() {
  let res = await window.fetch('/index')
  let item = await res.json()
  console.log(item)
  document.querySelector('#show').innerHTML = `
  <p>${item.content}</p>
  `
}