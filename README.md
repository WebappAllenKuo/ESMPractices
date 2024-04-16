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
