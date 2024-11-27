import express from 'express';
const app = express();
import postRouter from './Routes/posts';

app.use(express.json());

app.get('/landing', (req, res) => {
    res.status(200).send('ok');
});

app.use('/api/v1', postRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});