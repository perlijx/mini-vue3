/*
 * @Author: lijiaxin 1003914407@qq.com
 * @Date: 2022-05-24 16:24:56
 * @LastEditors: lijiaxin 1003914407@qq.com
 * @LastEditTime: 2022-05-24 16:25:17
 * @FilePath: \min-vue\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ],
  };