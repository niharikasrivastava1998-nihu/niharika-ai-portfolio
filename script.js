function openTab(evt, tabName) {
    // 1. Hide all tab content
    var i, tabContent, tabBtn;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active-content");
    }

    // 2. Remove "active" class from all buttons
    tabBtn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }

    // 3. Show current tab and add "active" class to button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Add a slight parallax effect to bubbles on mousemove
document.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.bubble');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    bubbles.forEach((b, index) => {
        const speed = (index + 1) * 15;
        const xOff = (window.innerWidth / 2 - e.clientX) / speed;
        const yOff = (window.innerHeight / 2 - e.clientY) / speed;
        b.style.transform = `translate(${xOff}px, ${yOff}px)`;
    });
});
