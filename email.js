// The address is stored reversed so it never appears as plain text in the page
// source, which is what most address-harvesting bots read.
for (const a of document.querySelectorAll("a[data-e]")) {
  const email = [...a.dataset.e].reverse().join("");
  a.href = "mailto:" + email;
  a.textContent = email;
}
