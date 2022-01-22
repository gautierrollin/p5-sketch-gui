module.exports = {
  env : {
    browser : true,
    es2021 : true
  },

  extends : [
    "airbnb",
    "plugin:react-hooks/recommended"
  ],

  ignorePatterns : [
    "node_modules/*"
  ],

  parser: "@babel/eslint-parser",

  rules : {
    /**
     * Misc
     */
    "arrow-parens" : ["error", "as-needed"],

    "comma-dangle" : ["error", "never"],

    "import/order" : ["error", {
      alphabetize : {
        order : "asc",
        caseInsensitive : true
      },
      groups : [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "object"
      ]
    }],

    "key-spacing" : ["error", {
      singleLine : {
        beforeColon : false,
        afterColon : true
      },
      multiLine : {
        beforeColon : true,
        afterColon : true
      }
    }],

    "no-console" : "error",

    "no-multiple-empty-lines" : ["error", {
      max : 2
    }],

    "no-plusplus" : ["error", {
      allowForLoopAfterthoughts : true
    }],

    "object-curly-newline" : ["error", {
      ObjectExpression : {
        multiline : true,
        consistent : true
      },
      ObjectPattern : {
        multiline : true,
        consistent : true
      }
    }],

    "padded-blocks" : ["error", {
      classes : "always"
    }],

    quotes : ["error", "double"],

    /**
     * React
     */
    "react/destructuring-assignment" : "off",
    "react/jsx-one-expression-per-line" : "off",
    "react/require-default-props" : "off"
  }
};
