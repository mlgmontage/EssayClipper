import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import highlightJS from "highlight.js";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/obsidian.css";
import "./index.css";
import App from "./App";

marked.setOptions({
  highlight: (code, lang) => {
    const validLang = highlightJS.getLanguage(lang) ? lang : "plaintext";
    return highlightJS.highlight(validLang, code).value;
  },
});

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
