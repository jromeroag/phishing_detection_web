const toast = document.querySelector("#download-toast");
let toastTimer;

document.querySelectorAll(".download-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.classList.add("show");
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3600);
  });
});

const copyButton = document.querySelector("#copy-checksum");
copyButton?.addEventListener("click", async () => {
  const checksum = document.querySelector("#checksum")?.textContent?.trim();
  if (!checksum || checksum === "PENDIENTE") return;
  try {
    await navigator.clipboard.writeText(checksum);
    copyButton.textContent = "Copiado";
    window.setTimeout(() => { copyButton.textContent = "Copiar"; }, 1800);
  } catch {
    copyButton.textContent = "Selecciona el código";
  }
});
