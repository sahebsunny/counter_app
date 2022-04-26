
let count = 0
let count_el = document.getElementById("count")
function increment() {
 count++
  count_el.innerText = count
}

arr = ""

let result = document.getElementById("res")
function save(){
  arr += " "+count+" "
  result.innerText = arr
  count = 0
  count_el.innerText = count
}
