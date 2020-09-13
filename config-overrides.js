/**
 * creat-react-app 覆盖配置
 */
const {
    override,
    addWebpackAlias,
    addBabelPresets,
  } = require("customize-cra"); 
  const path = require("path");

module.exports = override(
    ...addBabelPresets(["mobx"]),
    addWebpackAlias({
        ["@Component"]:path.resolve(__dirname,'src/example')
    })
);