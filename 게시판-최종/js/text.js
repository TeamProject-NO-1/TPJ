document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.getElementById("title_input");
  const titleText = document.getElementById("title_text");
  const titleName = document.getElementById("title_name");
  const 등록버튼 = document.getElementById("update");

  // 로컬 스토리지에서 'input' 키로 저장된 데이터 가져오기
  let inputFromLocalStorage = localStorage.getItem("input");

  // 'input' 키로 저장된 데이터가 없거나 배열이 아닌 경우 빈 배열로 초기화
  let arr = inputFromLocalStorage ? JSON.parse(inputFromLocalStorage) : [];

  등록버튼.addEventListener("click", () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    if (titleInput.value == "") {
      alert("제목을 입력해주세요.");
      titleInput.focus();
    } else if (titleText.value == "") {
      alert("내용을 입력해주세요.");
      titleText.focus();
    } else if (titleName.value == "") {
      alert("작성자를 입력해주세요.");
      titleName.focus();
    } else {
      arr.push({
        제목: titleInput.value,
        내용: titleText.value,
        작성자: titleName.value,
        작성일자: year + "/" + month + "/" + date,
      });

      // 배열을 로컬 스토리지에 다시 저장
      localStorage.setItem("input", JSON.stringify(arr));

      titleInput.value = "";
      titleText.value = "";
      titleName.value = "";
    }
  });
});
