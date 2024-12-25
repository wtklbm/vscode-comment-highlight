// TODO xxx
//  - fsdfsdfsdfs`f`sfsddfsdfsfd
// INFO xxx
// NOTE: xxx
// FIXME xxxx
// FIX fsdf
// UGLY fsfd
// BUG fsdfs
// DEBUG fdsf **sdfs**
// HACK fdsf
// REVIEW fdsdf
// OPTIMIZE gfdgd `sdss` xxx
// TSC
// IDEA
// CHANGED [xx](https://fdsfds)
// XXX
// NB
// QUESTION
// COMBAK
// TEMP
// INFO xxx
const s = `${fdsdf}`;

// todo 可以写成 `TODO`、`TODO:`、`@todo`，我希望提取 `@`、`TODO`、`:`三部分，分别定义样式
// N 可以写成 `TODO`、`TODO:`、`@todo`，我希望提取 `@`、`TODO`、`:`三部分，分别定义样式

// 2 TODO xxx `xxx` xxx
// TODO xxx `xxx` xxx
// TODO: Implement `the` function
// @todo xxx
// @todo: xxx
// @TODO xxx
//   @TODO: xxx

// @TODO: Implement `the` function
// @todo: Implement the function
// @todo Implement the function
// @ToDo: Implement the function
// todo: Implement the function
// > ToDo: Implement `the` function
// > xf`s`dfs ${fdsdf}
// - xfvsdfsd **fsddf**
// * fsddfsf `sfds`
// + fsfsdfws


// ${fdsfds} fdsfsd
// #{fdsfds} fdsfsd

// punctuation.definition.template-expression.begin.js
// meta.template.expression.js
// string.template.js
// meta.var.expr.js
// source.js


// **这是加粗的单 `a` `a` 行注释**
//**这是加粗的单行注释**
// ######## `fsd`#########
// # fsfdsdfds`fsdfs`
// fsdfs
// - 这是 `a` 列表
// * 这是 **b** 列表

// # fsdfsdfsdfsfsfsddfsdfsfd
// dsdfs
// - fdsdfsd
// dada
// [fa](xxx)

// ```javascript
// console.log('代码块');
// ```
//
// ```rust
// fn main() {
//  println!("xxx");
// }
// ```
console.log();

// TODO This is a task
//      Indented line for TODO
// NOTE This is a note
//      Indented line for NOTE
// DEBUG This is a debug message
function main() {
   // warn: 警告 `sa`
   //  fdsfs **sdfs**
   // warning: 警告
   //  fdsfds
   // error: 错误
   //  fsdfs
   // log: 日志
   //
   // log:32423
   //
   //  fdsfs
   // info: 日志

}

// TODO: Implement `the` function
// sdfsdfs
// fsfds

"workbench.editor.customLabels.patterns": {
   // 配置所有的入口
   "**/{index,setup,main}{,.*}": "# ${dirname}",
   //"**/app/**/page.*": "${dirname} - Page",
   //"**/app/**/layout.*": "${dirname} - Layout",
   //"**/components/**/index.*": "${dirname} - Component"
   // "**/components/**/index.*": "${dirname} - Component"
},

// 启用配置文件编辑器
"workbench.experimental.enableNewProfilesUI": true,
