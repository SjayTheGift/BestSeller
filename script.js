const showMoreButton = document.getElementById("showMoreButton");
const hiddenItems = document.querySelectorAll(".hidden");

showMoreButton.addEventListener("click", function() {
  hiddenItems.forEach(item => {
    item.classList.toggle("hidden");
  });

  showMoreButton.textContent = hiddenItems[0].classList.contains("hidden") ? "Show More" : "Show Less";
});