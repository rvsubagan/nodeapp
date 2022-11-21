import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import ticketsRoutes from './routes/tickets.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/tickets', ticketsRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Node API! "});
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`)))
.catch((error) => console.log(error.message));


