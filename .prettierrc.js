module.exports = {
  // Retain the default behavior of ternaries; keep question marks on the same line as the consequent
  experimentalTernaries: false,

  // Specify the line length that the printer will wrap on
  printWidth: 80,

  // Specify the number of spaces per indentation-level
  tabWidth: 2,

  // Indent lines with spaces instead of spaces
  useTabs: false,

  // Add a semicolon at the end of every statement
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: false,

  // Only add quotes around object properties where required
  quoteProps: "as-needed",

  // Use double quotes in JSX instead of single quotes
  jsxSingleQuote: false,

  // Trailing commas wherever possible
  trailingComma: "all",

  // Print spaces between brackets in object literals. Example: `{ foo: bar }`
  bracketSpacing: true,

  // Fit to a single line when possible so it wraps object literals when they could fit on one line
  objectWrap: "collapse",

  // Put the `>` of a multi-line HTML element on the next line instead of being at the end of the last line
  bracketSameLine: false,

  // Always include parens. Example: `(x) => x`
  arrowParens: "always",

  // Line Feed only (\n), common on Linux and macOS as well as inside git repos
  endOfLine: "lf",

  // Format embedded code if Prettier can automatically identify it
  embeddedLanguageFormatting: "auto",

  // Do not enforce a single attribute per line
  singleAttributePerLine: false,

  requirePragma: false,
  insertPragma: false,
  checkIgnorePragma: false,
};
