import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes.js'; // Import the grouped routes
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

mongoose
    .connect('mongodb://localhost:27017/myexam2024')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
app.use('/', apiRoutes);

const server = http.createServer(app);
const io = new Server(server);
io.on('connection', async (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
