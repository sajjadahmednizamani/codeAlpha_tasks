// Active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 250) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// Reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{threshold:0.1});

document.querySelectorAll(".glass-card,.project-card,.skill-item").forEach(el=>{
  el.style.opacity=0;
  el.style.transform="translateY(30px)";
  el.style.transition="all .7s ease";
  observer.observe(el);
});

// Cursor glow
const glow = document.createElement("div");
glow.style.position="fixed";
glow.style.width="220px";
glow.style.height="220px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(59,130,246,.18), transparent 60%)";
glow.style.zIndex="0";
document.body.appendChild(glow);

window.addEventListener("mousemove", e=>{
  glow.style.left = e.clientX - 110 + "px";
  glow.style.top  = e.clientY - 110 + "px";
});
