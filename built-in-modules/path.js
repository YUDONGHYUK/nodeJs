const path = require('node:path');

console.log(__filename); // 전체 파일 경로
console.log(__dirname); // 전체 폴더 경로

/*  path.basename
- 경로의 마지막 부분을 반환
*/

console.log(path.basename(__filename)); // index.js
console.log(path.basename(__dirname)); // built-in-modules

/*  path.extname
- 경로의 확장자를 반환
*/

console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname)); // ''

/*  path.parse
- 경로의 중요한 요소를 나타내는 속성을 가진 오브젝트 반환
*/

console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/donghyuk-yu/projects/codevolution/nodejs/built-in-modules',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

/*  path.format
- 오브젝트를 지정하여 경로 문자열을 반환
*/

console.log(path.format(path.parse(__filename))); // /Users/donghyuk-yu/projects/codevolution/nodejs/built-in-modules/index.js

/*  path.isAbsolute
- 경로가 절대 경로인지 여부를 반환
*/

console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute('./data.json')); // false

/*  path.join
- 구분 기호로 사용하여 지정된 모든 경로 세그먼트를 결합하고 결과 경로를 정규화
- 구분 기호 : Window(\), Mac(/)
*/

console.log(path.join('folder1', 'folder2', 'index.html')); // forder1/forder2/index.html
console.log(path.join('/folder1', 'folder2', 'index.html')); // /folder1/folder2/index.html
console.log(path.join('/folder1', '//folder2', 'index.html')); // /folder1/folder2/index.html
console.log(path.join('/folder1', '//folder2', '../index.html')); // /folder1/index.html
console.log(path.join(__dirname, 'data.json')); // /Users/donghyuk-yu/projects/codevolution/nodejs/built-in-modules/data.json

/*  path.resolve
- 경로 또는 경로 세그먼트의 시퀀스를 절대 경로로 만듦
*/

console.log(path.resolve('folder1', 'folder2', 'index.html')); // /Users/donghyuk-yu/projects/codevolution/nodejs/forder1/folder2/index.html
console.log(path.resolve('/folder', 'folder2', 'index.html')); // /folder/folder2/index.html
console.log(path.resolve('/folder1', '//folder2', 'index.html')); // /folder2/index.html
console.log(path.resolve('/folder1', '//folder2', '../index.html')); // /index.html
console.log(path.resolve(__dirname, 'data.json')); // /Users/donghyuk-yu/projects/codevolution/nodejs/built-in-modules/data.json
