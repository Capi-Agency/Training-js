import data from "./db.json" assert { type: 'json' };
const productData = data.products

function productDataToHTML(productData) {
    let dataRow = document.querySelector('.dataRow')
    let html = ''

    for (let i = 0; i < productData.length; i++) {
        const imageData = productData[i].images
        let imageHTML = ''

        for (let j = 0; j < imageData.length; j++) {
            imageHTML += `
            <img src="${imageData[j]}" alt="" class="imageCol">
            `
        }

        html += `<tr>
        <td>${productData[i].id}</td>
        <td>${productData[i].title}</td>
        <td>${productData[i].shortdescription}</td>
        <td><img src="${productData[i].thumbnail}" alt="" class="imageCol"></td>
        <td class="imageColContainer">${imageHTML}</td>
        </tr>
        `
    }

    dataRow.innerHTML = html
}

productDataToHTML(productData)