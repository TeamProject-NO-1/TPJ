document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title_input")
    const titleText = document.getElementById("title_text")
    const titleName = document.getElementById("title_name")
    const 등록버튼 = document.getElementById("update")

    /* localStorage 부분 */
    // 구분 숫자메기는 건 forEach 인덱스로 붙이고
    // 제목, 작성자, 작성일자를 객체로 저장해서 list.html에서 쓴다

    /* arr에 localStroage input속성에 값이 있으면 빈배열 출력 */
    let arr = JSON.parse(localStorage.getItem('input')) ?? []

    /* 등록버튼을 누르면 -> localStroage에 저장되게하는 부분 */
    등록버튼.addEventListener('click', () => {
      // 버튼을 누른 날짜를 받아오기 위해서
      // new Date() 사용 => 'today.get~()'를 사용하기 위해
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1;  // 월(0~11까지 돌아서 +1)
      let date = today.getDate();  // 날짜

      if (titleInput.value == "") {
        alert('제목을 입력해주세요.');
        titleInput.focus();
      } else if (titleText.value == "") {
        alert('내용을 입력해주세요.');
        titleText.focus()
      } else if (titleName.value == "") {
        alert('작성자를 입력해주세요.');
        titleName.focus();
      } else {
        /* arr배열에 객체 형식으로 밀어줄텐데 */
        arr.push({ 
          제목: titleInput.value, 
          내용: titleText.value, 
          작성자: titleName.value, 
          작성일자: year + '/' + month + '/' + date })
          localStorage.setItem('input', JSON.stringify(arr))
  
        /* input태그, textarea태그 내용 비워주기 */
        titleInput.value = '';
        titleText.value = '';
        titleName.value = '';
      }
    })
  })