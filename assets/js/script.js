const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let position = { x: 0, y: 0 };

const moveCursor = (e) => {
  position = { x: e.clientX, y: e.clientY };
  cursor.style.left = `${position.x}px`;
  cursor.style.top = `${position.y}px`;
};

window.addEventListener("mousemove", moveCursor);

window.addEventListener("beforeunload", () => {
  window.removeEventListener("mousemove", moveCursor);
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-list a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

