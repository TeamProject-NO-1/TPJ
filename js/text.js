document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.querySelector("title_input")
    const titleText = document.querySelector("title_text")
    const titleName = document.querySelector("title_name")

    /* localStorage 부분 */
    // 구분 숫자메기는 건 forEach 인덱스로 붙이고
    // 제목, 작성자, 작성일자를 객체로 저장해서 list.html에서 쓴다
    let saveData = localStorage.getItem("arr")
    titleInput.addEventListener("keyup", () => {
    })
})