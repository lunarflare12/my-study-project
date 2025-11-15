"use strict";

const isRelativePath = (candidate) =>
  typeof candidate === "string" && (candidate.startsWith("./") || candidate.startsWith("../"));

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Changes .js to .ts in imports/exports/require()/import()",
      recommended: false
    },
    fixable: "code",
    messages: {
      noJs: "Change .js to .ts in import/export/require()/import()"
    }
  },

  create(context) {
    const maybeReport = (litNode) => {
      if (!litNode || litNode.type !== "Literal" || typeof litNode.value !== "string") return;
      const raw = litNode.value;

      if (!isRelativePath(raw)) return;

      if (!raw.endsWith(".js")) return;

      context.report({
        node: litNode,
        messageId: "noJs",
        fix(fixer) {
          const fixed = raw.replace(/\.js$/u, ".ts");

          return fixer.replaceTextRange(litNode.range, JSON.stringify(fixed));
        }
      });
    };

    return {
      // import x from "..."
      ImportDeclaration(node) {
        if (node.source) maybeReport(node.source);
      },
      // export ... from "..."
      ExportAllDeclaration(node) {
        if (node.source) maybeReport(node.source);
      },
      ExportNamedDeclaration(node) {
        if (node.source) maybeReport(node.source);
      },
      // import("...")
      ImportExpression(node) {
        if (node.source && node.source.type === "Literal") maybeReport(node.source);
      },
      // require("...")
      CallExpression(node) {
        if (node.callee.type === "Identifier" && node.callee.name === "require") {
          const arg = node.arguments?.[0];
          if (arg && arg.type === "Literal") maybeReport(arg);
        }
      }
    };
  }
};
