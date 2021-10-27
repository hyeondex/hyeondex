var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none", // production : 배포 , development : 개발
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      //loader 규칙
      /*    {
        test: /\.css$/, // css 파일
        use: ["style-loader", "css-loader"],
        //오른쪽에서 왼쪽 순서로 진행됨
      }, */
      /* ex
      {
        test: /\.scss$/, // scss 파일
        use: ["style-loader", "css-loader", "sass-loader"],
         sass > css > style 로 변환해야함
      }, */
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  // 웹팩의 기본 적인 동작에 추가적인 기능 결과물의 형태를 바꾸는 역할
  // 생성자 함수로 생성한 객체 인스턴스만 추가 될 수 있음 , 필요한건 구글링 plz
};
