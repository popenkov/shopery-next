import mongoose from 'mongoose';

import { dbConfig } from '../config/db.config.js';

// const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// todo
// db.products = require('./tutorial.model.js')(mongoose);

export { db };
