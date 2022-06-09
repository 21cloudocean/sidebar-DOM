//选择element
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

//加event listener
closeBtn.addEventListener("click", function () {
  //   console.log("closeBtn");
  checkSidebar();
});
toggleBtn.addEventListener("click", function () {
  //   console.log("toggleBtn");
  checkSidebar();
});

function checkSidebar() {
  //   console.log("function");
  sidebar.classList.toggle("show-sidebar");
}
