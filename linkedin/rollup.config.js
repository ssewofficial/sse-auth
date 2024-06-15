import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
// import typescript from "rollup-plugin-typescript2";
import typescript from "@rollup/plugin-typescript";
import * as packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    // typescript({ useTsconfigDeclarationDir: true, jsx: 'react-jsx' }),
    typescript(),

    // eslint-disable-next-line no-undef
    process.env.BUILD_MODE !== "dev" &&
      terser({
        output: { comments: false },
        compress: {
          drop_console: true,
        },
      }),
  ],
};
