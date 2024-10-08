const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const jsonServer = require('json-server');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 3000);
  });
  next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { email, password } = req.body.data;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { users = [] } = db;

    const userFromBd = users.find((user) => user.email === email && user.password === password);

    if (userFromBd) {
      return res.json(userFromBd);
    }
    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post('/order-detailed', (req, res) => {
  try {
    const { id } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { orders = [] } = db;

    const order = orders.find((order) => {
      return order.id === id;
    });
    if (order) {
      return res.json(order);
    }
    return res.status(403).json({ message: 'Order not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post('/product-detailed', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { product_detailed } = db;

    if (product_detailed) {
      return res.json(product_detailed);
    }
    return res.status(403).json({ message: 'Product not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post('/user_data', (req, res) => {
  try {
    const { userId } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { user_data = [] } = db;

    const user = user_data.find((user) => {
      return user.userId === userId;
    });
    if (user) {
      return res.json(user);
    }
    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.put('/update-billing-address', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { user_data = [] } = db;

    const userDataFromBd = user_data[0];

    if (userDataFromBd) {
      userDataFromBd.billingAddress = req.body;

      fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2));
      return res.status(200).json({ message: 'Success' });
    }
    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.put('/update-personal-data', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { user_data = [] } = db;

    const userDataFromBd = user_data[0];

    if (userDataFromBd) {
      userDataFromBd.personalData = req.body;

      fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2));
      return res.status(200).json({ message: 'Success' });
    }
    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line;
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    // return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// запуск сервера
const PORT = 8443;
const HTTP_PORT = 8000;

const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);

httpsServer.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`server is running on ${HTTP_PORT} port`);
});
