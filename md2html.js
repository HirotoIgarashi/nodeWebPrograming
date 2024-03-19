// md2html.js

import { marked } from "marked";

// Warning回避
marked.use({ mangle: false, headerIds: false });

export function md2html(markdown, cliOptions) {
  return marked.parse(markdown, { gfm: cliOptions.gfm })
};
