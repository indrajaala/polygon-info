import pkg from "./package.json";

export default {
    input: 'src/polygonInfo.js',
    output: [
        {
            file: pkg.browser,
            format: 'umd',
            name: "polygonInfo"
        },
        {
            file: pkg.main,
            format: "cjs",
        },
        {
            file: pkg.module,
            format: 'es',
        }
    ]
};