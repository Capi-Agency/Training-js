// let inputEle = document.getElementById('demo')
// let usernameValue = document.getElementById('usernameValue')
// let switchButton = document.getElementsByTagName('button')

// let menuTab = document.querySelector('.menuTab')
// let menuNav = document.querySelector('.menuNav')

let colorBtn = document.getElementById('changeColor')
let bodyBg = document.querySelector('body')
let clickBtn = document.querySelector('#clickBtn')
let clickNumber = document.querySelector('.clickNumber')

colorBtn.addEventListener('click', function () {
    bodyBg.style.backgroundColor = 'red'
    colorBtn.style.backgroundColor = 'yellow'
})
let clickNum = 0

clickBtn.addEventListener('click', function () {
    clickNumber.innerHTML = clickNum +=1
})



// inputEle.onchange = function() {
//     usernameValue.innerText = inputEle.value
// }

// menuTab.addEventListener('click', function () {
//     menuNav.classList.toggle('hide')
// })


 

