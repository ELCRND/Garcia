const code = document.querySelector(".token__code");
const tokenomicCode = document.querySelector(".tokenomic__token-code");
const footerCode = document.querySelector(".footer__token-code");
const tooltip = document.querySelector(".tooltip");

// копирование кода в буфер обмена
document.querySelector(".token__copy").addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 600);
});
document
  .querySelector(".tokenomic__token-copy")
  .addEventListener("click", () => {
    navigator.clipboard.writeText(tokenomicCode.innerText);
    tooltip.classList.add("visible");
    setTimeout(() => tooltip.classList.remove("visible"), 600);
  });
document.querySelector(".footer__token-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(footerCode.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 600);
});
