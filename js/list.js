document.addEventListener("DOMContentLoaded", () => {
    const Table = document.querySelector(".Table_Area")
    const table = document.createElement("table")
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")
    const td5 = document.createElement("td")
    Table.appendChild(table).appendChild(tr).append(td1, td2, td3, td4, td5)
    td1.textContent = "글번호"
    td2.textContent = "제목"
    td3.textContent = "작성자"
    td4.textContent = "조회수"
    td5.textContent = "작성일자"
})