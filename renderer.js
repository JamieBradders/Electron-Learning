// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
import marked from "marked";
import { ipcRenderer } from "electron";

let filePath = null;
let originalContent = "";

const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#preview");

const renderMarkdownToHtml = (markdown) => {
  htmlView.innerHTML = marked(markdown, { sanitize: true });
};

ipcRenderer.on("file-opened", (event, file, content) => {
  markdownView.value = content;
  renderMarkdownToHtml(content);
});
