/**
 * creat-react-app 覆盖配置
 */
const {
    override,
    addWebpackAlias,
    addBabelPresets,
    addLessLoader,
    fixBabelImports,
  } = require("customize-cra"); 
  const path = require("path");

module.exports = override(
    fixBabelImports("import",{
        libraryName:"antd",
        libraryDirectory:'es',
        style:true
    }),
    addLessLoader({
        javascriptEnabled:true,
    }),
    ...addBabelPresets(["mobx"]),
    addWebpackAlias({
        ["@Component"]:path.resolve(__dirname,'src/example'),
        ["@Static"]:path.resolve(__dirname,'src/static'),
        ["@API"]:path.resolve(__dirname,'src/API')
    })
);