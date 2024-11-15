const fs = require('fs');
const path = require('path');

// 创建 CNAME 文件的路径
const cnamePath = path.join(__dirname, 'build', 'CNAME');

// 写入域名
fs.writeFileSync(cnamePath, 'blog.jiguanchen.space', 'utf8');
console.log('CNAME 文件已创建');