// let inputEle = document.getElementById('demo')
// let usernameValue = document.getElementById('usernameValue')
// let switchButton = document.getElementsByTagName('button')

// let menuTab = document.querySelector('.menuTab')
// let menuNav = document.querySelector('.menuNav')

// let colorBtn = document.getElementById('changeColor')
// let bodyBg = document.querySelector('body')
// let clickBtn = document.querySelector('#clickBtn')
// let clickNumber = document.querySelector('.clickNumber')

// colorBtn.addEventListener('click', function () {
//     bodyBg.style.backgroundColor = 'red'
//     colorBtn.style.backgroundColor = 'yellow'
// })
// let clickNum = 0

// clickBtn.addEventListener('click', function () {
//     clickNumber.innerHTML = clickNum +=1
// })

// inputEle.onchange = function() {
//     usernameValue.innerText = inputEle.value
// }

// menuTab.addEventListener('click', function () {
//     menuNav.classList.toggle('hide')
// })

/** Tạo danh sách:
 Tạo một danh sách <ul> trong HTML với một ID như "myList".
 Tạo một nút button với ID "addItemButton".
 Khi người dùng nhấn vào nút "addItemButton", thêm một mục mới vào danh sách.
 */

let addBtn = document.querySelector('#addItemButton')
let deleteBtn = document.querySelector('#deleteItemButton')
let itemValue = document.querySelector('#myList')
let quantity = 0

addBtn.addEventListener('click', function () {
    quantity += 1
    itemValue.innerHTML += '<li>item '+ quantity +'</li>'
})

deleteBtn.addEventListener('click', function () {
    quantity -= 1
    itemValue.removeChild(itemValue.lastElementChild)
})

/** Xử lý sự kiện:
Tạo một ô input với một ID như "myInput".
Tạo một nút button với ID "submitButton".
Khi người dùng nhập thông tin vào input và nhấn nút "submitButton", hiển thị thông báo "Đã nhấn submit" trên trang.
 */

let inputValue = document.querySelector('#myInput')
let submitBtn = document.querySelector('#submitButton')

function checkInput() {
    if (inputValue.value.trim()) {
        alert(`Đã submit với nội dung: ${inputValue.value}`)
    }
}

submitBtn.addEventListener('click', checkInput)