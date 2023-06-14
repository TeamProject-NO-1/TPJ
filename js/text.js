document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title_input")
    const titleText = document.getElementById("title_text")
    const titleName = document.getElementById("title_name")
    const 등록버튼 = document.getElementById("update")

    /* localStorage 부분 */
    // 제목, 작성자, 작성일자를 객체로 저장해서 list.html에서 쓴다

    /* 1. arr에 localStroage input속성에 값이 있으면 빈배열 출력 */
    // 아래 구문에서 푸쉬할 예정 => 제일 상단에 있지만 제일 마지막 느낌임
    let arr = JSON.parse(localStorage.getItem('input')) ?? []

    /* 등록버튼을 누르면 -> localStroage에 저장되게하는 부분 */
    등록버튼.addEventListener('click', () => {
      /* 날짜를 받아오기 위해서 */
      /* new Date() 사용 => 'today.get~()'를 사용하기 위해 */
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;  // 월(0~11까지 돌아서 +1)
      let date = today.getDate();

      /* 값을 입력 하지 않으면 alert로 경고문구 띄우기 */
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
        /* 1-1. arr배열에 객체 형식으로 밀어주기 */
        arr.push({ 
          제목: titleInput.value, 
          내용: titleText.value, 
          작성자: titleName.value, 
          작성일자: year + '/' + month + '/' + date })

          /* 1-2. 앞서 push받은 자료들을 localStorage input속성에 저장 */
          localStorage.setItem('input', JSON.stringify(arr))
  
        /* 1-3. 저장 후 input, textarea태그 내용 비우기(잔존 데이터 제거) */
        titleInput.value = '';
        titleText.value = '';
        titleName.value = '';
      }
    })



  })