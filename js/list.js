document.addEventListener("DOMContentLoaded", () => {
    const TableArea = document.querySelector(".Table_Area")

    /* localstorage를 바디에 뿌려주기 */
    let array = JSON.parse(localStorage.getItem("input"))
    console.log(array)
    console.log(array[0])
    console.log(array[1])
    console.log(array[1].순번)
    console.log(array[1].제목)

    const table = document.querySelector("table")

    for(let i = 0; i < array.length; i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        table.appendChild(tr).append(td1,td2,td3,td4,td5)
        td1.textContent = array[i].순번
        td2.textContent = array[i].제목
        td3.textContent = array[i].작성자
        td4.textContent = 999
        td5.textContent = array[i].작성일자
    }

    /* 될것같은데 안됨... */
    // let list = ``
    // list += `<table>`
    // list += `<tr>`
    // list += `<td>글자</td><td>제목</td><td>작성자</td><td>조회수</td><td>작성일자</td>`
    // list += `</tr>`
    // for(let i = 0; i < array.length; i++){
    //     list += `<tr>`
    //     list += `<td>${array[i].순번}</td><td>${array[i].제목}</td><td>${array[i].작성자}</td><td>???</td><td>${array[i].작성일자}</td>`
    //     list += `</tr>`
    // }
    // list += `</table>`
    // document.write(list)
})