// Event listener for showing exercises based on the button click
document.querySelectorAll('.show-btn').forEach(button => {
    button.addEventListener('click', function() {
        const exerciseId = button.dataset.exercise;
        const url = `10 Challenge/index${exerciseId}.html`;
        window.location.href = `../10 Challenge/index${exerciseId}.html`;
    });
});

// Modal functionality for the profile image zoom
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");
const profileImg = document.getElementById("zoom-img");

profileImg.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = profileImg.src;
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicked outside of the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});