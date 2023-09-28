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

// let addBtn = document.querySelector('#addItemButton')
// let deleteBtn = document.querySelector('#deleteItemButton')
// let itemValue = document.querySelector('#myList')
// let quantity = 0

// addBtn.addEventListener('click', function () {
//     quantity += 1
//     itemValue.innerHTML += '<li>item '+ quantity +'</li>'
// })

// deleteBtn.addEventListener('click', function () {
//     quantity -= 1
//     itemValue.removeChild(itemValue.lastElementChild)
// })

/** Xử lý sự kiện:
Tạo một ô input với một ID như "myInput".
Tạo một nút button với ID "submitButton".
Khi người dùng nhập thông tin vào input và nhấn nút "submitButton", hiển thị thông báo "Đã nhấn submit" trên trang.
 */

// let inputValue = document.querySelector('#myInput')
// let submitBtn = document.querySelector('#submitButton')

// function checkInput() {
//     if (inputValue.value.trim()) {
//         alert(`Đã submit với nội dung: ${inputValue.value}`)
//     }
// }

// submitBtn.addEventListener('click', checkInput)

// ====================== Buổi 5 ======================
// Hiển thỉ list sản phẩm ra table
let dataFake = [
    {
        id: 1,
        name: "Product A",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
    },
    {
        id: 2,
        name: "Product B",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
    },
    {
        id: 3,
        name: "Product C",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
    },
    {
        id: 4,
        name: "Product D",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
    },
    {
        id: 5,
        name: "Product E",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
    },
    {
        id: 6,
        name: "Product F",
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem praesentium facere rerum perferendis nobis. Est odio cumque praesentium quasi, eum esse mollitia illo molestiae",
        image: "https://picsum.photos/200/300.jpg",
    },
];
// trong table có 2 nút xóa và update, ấn xóa thì xóa phần tử đó ra khỏi mảng ấn vào cập nhật thì thêm chữ update vào sau product
// và 1 nút create ấn vào sẽ thêm 1 phần tử vào mảng với tên sản phẩn mới

function dataToHTML(dataFake) {
    let dataRow = document.querySelector('.dataRow')
    let html = ''
    
    // Render to HTML
    for (let i = 0; i < dataFake.length; i++) {
        let updateStatus = ''
        if (dataFake[i].updated) {
            updateStatus = '<span class="badge bg-success">Updated</span>'
        }
        html += `<tr>
        <th scope="row">${dataFake[i].id}</th>
        <td>${dataFake[i].name}</td>
        <td>${dataFake[i].price}</td>
        <td class="descriptionCol">${dataFake[i].description}</td>
        <td class="imageCol"><img src="${dataFake[i].image}"></td>
        <td class="buttonCol">
        <button class="button-delete" onclick="deleteProduct(${dataFake[i].id})">Delete</button>
        <button class="button-update" onclick="updateProduct(${dataFake[i].id})">Update</button>
        </td>
        </tr>`
    }
    
    dataRow.innerHTML = html;
}

function deleteProduct(id) {
    let newArray = dataFake.filter(function (product) {
        return product.id != id
    })

    dataFake = newArray;
    dataToHTML(dataFake);
}

function updateProduct(id) {
    let product = dataFake.find(function (product) {
        return product.id == id
    })

    if (product) {
        product.updated = true;
        dataToHTML(dataFake);
    }
}


dataToHTML(dataFake)