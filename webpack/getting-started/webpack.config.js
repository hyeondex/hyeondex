// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js", //빌드(변환)를 할 대상 파일 경로
  output: {
    // 웹팩으로 변환된 결과물에 대한 파일 경로
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  //loader : js 파일 제외한 파일 변환할 수 있도록 도움주는 것
  module: {
    // entry에서 변환될 때 중간 개입하는 파일
    rules: [],
  },
};
