import fs from 'fs';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// import mongoose from 'mongoose';
import multer from 'multer';

import { ProductsController } from './app/controllers/index.js';
import { db } from './app/models/index.js';
import { checkAuth } from './app/utils/index.js';


dotenv.config();

// todo настройка базы
console.log('db.url', db.url);
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('db ok');
    })
    .catch((error) => {
        console.log('db error', error);
        process.exit();
    });

//записываем всю логику экспресса в app
const app = express();

//хранилище для загрузки изображений
const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
            fs.mkdirSync('uploads');
        }
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });
const whitelist = ['http://localhost:3000', 'http://192.168.1.111:3000/'];
const corsOptions = {
    origin: function (origin, callback) {
        console.log('origin', origin, whitelist.indexOf(origin));
        // todo проверить условия
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

//по умолчанию express  не умеет читать жсон, так включается эта опция
app.use(express.json());
// todo Disable CORS for all routes
app.use(cors({ origin: true, credentials: true }));
//app.use(cors(corsOptions));
// объясняем экспрессу, что по пути аплоадс надо возвращать статические картинки из папки аплоадс
app.use('/uploads', express.static('uploads'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//работа с роутами (описывается логика)
//при обращении по пути "/" будет выполняться следующая команда
// req- все, что пришло с фронтенда
// res- то, что передам клиенту
app.get('/', (req, res) => {
    res.send('Hello, world');
});

//посты
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/api/uploads/${req.file.originalname}`,
    });
});

app.get('/api/products', ProductsController.getAll);

// app.post(
//   '/posts',
//   checkAuth,
//   postCreateValidation,
//   handleValidationErrors,
//   PostController.create
// );
// app.delete('/posts/:id', checkAuth, PostController.remove);
// app.patch(
//   '/posts/:id',
//   checkAuth,
//   postCreateValidation,
//   handleValidationErrors,
//   PostController.update
// );

//запуск вебсервера
//объясняем, на какой порт прикрепить наше приложение (любой)
// теперь мы можем открыть наш сайт в браузере http://localhost:4444/

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server is running on port ${PORT}.`);
});
