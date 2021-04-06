const leftPad = require("left-pad");
import { createDiagrams } from "./sequence_rendered.js";

export default function (context) {
  return {
    assets: function () {
      return [
        { name: "sequencePlugin.css" },
        { name: "diag_rendered_comps/webfont.js" },
        {
          name: "diag_rendered_comps/underscore.js",
        },
        { name: "diag_rendered_comps/snap.svg.js" },
        { name: "diag_rendered_comps/sequence-diagram.js" },
        { name: "sequence-rendered.js" },
      ];
    },

    plugin: function (markdownIt, _options) {
      const pluginId = context.pluginId;

      const defaultRender =
        markdownIt.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };

      markdownIt.renderer.rules.fence = function (
        tokens,
        idx,
        options,
        env,
        self
      ) {
        const token = tokens[idx];
        if (token.info !== "sequence")
          return defaultRender(tokens, idx, options, env, self);
        // ${createDiagrams(token.content.trim())}
        return `
          <body>
            <script> document.getElementByID("test").innerHTML = "test"</script>
            <div> ${createDiagrams(token.content)}</div>
            <p id = "test"></p>
          </body>

				`;
      };
    },
  };
}
