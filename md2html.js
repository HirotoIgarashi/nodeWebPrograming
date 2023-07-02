// md2html.js

import { marked } from "marked";

export function md2html(markdown, clipOptions) {
  return marked.parse(markdown, {
    gfm: clipOptions.gfm
  })
};
