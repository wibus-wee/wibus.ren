/*
 * @FilePath: /nx-theme-tiny/.prettierrc.cjs
 * @author: Wibus
 * @Date: 2022-08-09 13:14:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-09 13:14:14
 * Coding With IU
 */
module.exports = {
  ...require('@innei/prettier'),
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@(.*)/(.*)$',
    '^~/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
}
Footer
