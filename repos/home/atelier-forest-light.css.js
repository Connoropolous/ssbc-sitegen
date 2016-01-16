module.exports = function*() {
yield `

/* Base16 Atelier Forest Light - Theme */
/* by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest) */
/* Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16) */

/* Atelier-Forest Comment */
.hljs-comment,
.hljs-quote {
  color: #A7A7A7;
}

/* Atelier-Forest Red */
.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-name,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #f22c40;
}

/* Atelier-Forest Orange  {
  color: #df5320;
}*/

/* Atelier-Forest Green */
.hljs-string,
.hljs-symbol,
.hljs-literal,
.hljs-bullet {
  color: #7b9726;
}

/* Atelier-Forest Blue */
.hljs-built_in,
.hljs-keyword,
.hljs-section {
  color: #407ee7;
}

/* Atelier-Forest Purple */
.hljs-number,
.hljs-meta,
.hljs-builtin-name,
.hljs-type,
.hljs-params,
.hljs-title,
.hljs-selector-tag {
/*  color: #6666ea;*/
  color: #df5320;

}

.hljs {
  display: block;
  overflow-x: auto;
  background: #f1efee;
  color: #68615e;
  padding: 0.5em;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
`
}