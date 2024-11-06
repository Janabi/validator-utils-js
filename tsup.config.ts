import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs"],
  entry: ["src/**/*.ts"],
  external: [],
  dts: true,
  bundle: true,
  treeshake: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  env: {
    LOCALE_PATH: "../../locales",
  },
});
