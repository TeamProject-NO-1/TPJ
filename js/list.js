document.addEventListener("DOMContentLoaded", () => {
    /* localstorage data를 추가할 곳 */
    const table = document.createElement("table")
    /* 생성하기 */
    const tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")

    /* localstorage를 바디에 뿌려주기 */
    let array = localStorage.getItem("input")
    console.log(array)
    array.forEach((v) => {
    table.appendChild(tr).append(td1, td2, td3, td4, td5)
    })
    td1.textContent = 1
    td2.textContent = v.제목
    td3.textContent = v.작성자
    td5.textContent = v.작성일자
})