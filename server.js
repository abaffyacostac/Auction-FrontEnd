const serve = require('serve');
const path = require('path');

const port = process.env.PORT || 3000;
const staticDir = path.join(__dirname, 'dist');

serve(staticDir, {
  port: port,
  single: true
});
