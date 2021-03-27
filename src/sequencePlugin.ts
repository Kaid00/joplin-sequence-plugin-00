const leftPad = require("left-pad");

export default function (context) {
  return {
    plugin: function (markdownIt, _options) {
      const pluginId = context.pluginId;

      const defaultRender =
        markdownIt.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
          return self.renderTOken(tokens, idx, options, env, self);
        };

      markdownIt.renderer.rules.fences = function (
        tokens,
        idx,
        options,
        env,
        self
      ) {
        const token = tokens[idx];
        if (token.info !== "sequence") {
          return defaultRender(tokens, idx, options, env, self);
        }

        return `
             <div class = "diagram">
                <p> Testing sequence token info: <div>${token.info}</div> </p>
                <p> Testing content: <div>${token.content.trim()}</div></p>
                            
        `;
      };
    },
    assets: function () {
      return [{ name: "sequencePlugin.css" }];
    },
  };
}
