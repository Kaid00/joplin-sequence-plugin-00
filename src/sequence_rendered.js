// import { Diagram } from "./diag_rendered_comps/sequence-diagram.js";

export function createDiagrams(lines) {
  // var d = Diagram.parse(lines);
  // var options = { theme: "simple" };
  // d.drawSVG("homelander", options);

  return `<pre class = "homelander">${lines}</pre>`;
}
