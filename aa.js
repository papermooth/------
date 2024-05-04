// const express = require('express');
// const app = express();
// const port = 3000;

// // 定义一个 GET 请求处理程序
// app.get('/api/data', (req, res) => {
//   const data = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' }
//   ];
//   res.json(data);
// });

// // 启动服务器
// app.listen(port, () => {
//   console.log(`服务器运行在 http://localhost:${port}`);
// });


const express = require('express');
const app = express();

// 定义返回数据的中间件函数
function sendResponse(req, res) {
  const data = { /* 填充实际数据 */ };
  const msg = 'Success'; // 或根据实际情况设置消息

  res.status(200).json({
    status: 200,
    msg,
    data,
  });
}

// 配置路由，当访问 '/api/data' 时触发 sendResponse 中间件
app.get('/api/data', sendResponse);

// 启动服务器监听指定端口（例如 3000）
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const sampleData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];
  
  // ... （保持其他代码不变）
  
  function sendResponse(req, res) {
    const data = sampleData; // 使用实际数据替代占位符
    const msg = 'Success'; // 或根据实际情况设置消息
  
    res.status(200).json({
      status: 200,
      msg,
      data,
    });
  }