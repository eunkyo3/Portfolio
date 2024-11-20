// 다크 모드 버튼 제어
const invertButton = document.getElementById("invert-button");
const body = document.body;

invertButton.addEventListener("click", () => {
  // 다크 모드 활성화/비활성화
  body.classList.toggle("dark-mode");

  // 버튼 텍스트 변경
  if (body.classList.contains("dark-mode")) {
    invertButton.textContent = "화이트 모드";
  } else {
    invertButton.textContent = "다크 모드";
  }
});
