const currentLink = "https://friendly-treacle-f2619f.netlify.app";
document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("copyBtn");
btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentLink);
    btn.textContent = "Link kopiert ✓";
    setTimeout(() => btn.textContent = "Link kopieren", 1500);
  } catch(e) {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = currentLink;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    btn.textContent = "Link kopiert ✓";
    setTimeout(() => btn.textContent = "Link kopieren", 1500);
  }
});