const preview = document.getElementById("preview");

fetch("note.md")
  .then((response) => response.text())
  .then((markdown) => {
    preview.innerHTML = marked(markdown);
  })
  .catch((error) => {
    console.error("Error fetching note.md:", error);
  });
