// import tseslint from "@typescript-eslint/eslint-plugin";
// import parser from "@typescript-eslint/parser";

// export default [
//   {
//     files: ["**/*.ts"],
//     languageOptions: {
//       parser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module"
//       }
//     },
//     plugins: {
//       "@typescript-eslint": tseslint
//     },
//     rules: {
//       "@typescript-eslint/no-unused-vars": "error",
//       "@typescript-eslint/no-explicit-any": "error",
//       "@typescript-eslint/explicit-function-return-type": "warn",
//       "@typescript-eslint/no-non-null-assertion": "warn"
//     }
//   }
// ];

import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // <-- Nueva regla para permitir TS sin ;
      "@typescript-eslint/semi": ["error", "never"] 
    }
  }
];