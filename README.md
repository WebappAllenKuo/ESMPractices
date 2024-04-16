# ES6 ESM 語法練習

## Ex01 簡易地 export/import function

- export function add...
- import { add } from './math.js'
- \<script src="./app.js" type='module' / \>

html page 若要引用的 js 內含 import, 必需加 `type='module'`

## Ex02

js 可以 export 多個常數, 函數

import 時, 用物件包住,例如 import{ pi , add} from './math.js'

js 可以有一個 export default, import 時, 就直接用該 函數名稱, 但 import 時就不能用大括號包住; 可以 import 同一檔案多次

## Ex03 動態 import

runtime import 時, 無法指定要 import 什麼, 必需是整個 module

如果 math.js 模組使用 export default 來導出一個函數，那麼在動態導入這個模組時，您需要以特定方式來存取這個默認導出的函數。當使用 import() 來導入有默認導出的模組時，可以直接通過 .default 屬性來訪問這個默認導出的函數。

```js
import("./math.js").then(({ default: funcAdd, multiply }) => {
  // console.log("module", module);
  console.log("funcAdd(5, 3)", funcAdd(5, 3)); // 7
  console.log("module.multiply(2, 5)", multiply(2, 6)); // 10
});
```
