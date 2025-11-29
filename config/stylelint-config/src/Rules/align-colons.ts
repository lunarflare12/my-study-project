import stylelint, { type Rule } from "stylelint";
import type { Declaration } from "postcss";

const ruleName = "custom/align-colons";

const rule: Rule = (primary) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: primary,
    });

    if (!validOptions) {
      return;
    }

    root.walkRules((ruleNode) => {
      const declarations: Declaration[] = [];
      let maxPropertyLength = 0;

      ruleNode.walkDecls((decl) => {
        const property = decl.prop;
        declarations.push(decl);
        maxPropertyLength = Math.max(maxPropertyLength, property.length);
      });

      if (declarations.length < 2) {
        return;
      }

      declarations.forEach((decl) => {
        const property = decl.prop;
        const currentLength = property.length;
        const spacesNeeded = maxPropertyLength - currentLength;

        const raws = decl.raws;
        if (!raws.between) {
          raws.between = ": ";
        }

        const spacesAfterColon = spacesNeeded + 1;
        const newBetween = ": " + " ".repeat(spacesAfterColon);

        if (raws.between !== newBetween) {
          stylelint.utils.report({
            ruleName,
            result,
            node: decl,
            message: `Align colon by adding ${spacesNeeded} space(s) after colon`,
            fix: () => {
              raws.between = newBetween;
            },
          });
        }
      });
    });
  };
};

rule.ruleName = ruleName;
rule.messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected colon alignment",
});
rule.meta = {
  fixable: true,
  url: "",
};

export default stylelint.createPlugin(ruleName, rule);

