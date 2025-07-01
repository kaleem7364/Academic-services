const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// تحديد المسار الصحيح للملفات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// جميع الطلبات ترجع ملف index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
