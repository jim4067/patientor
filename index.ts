import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/ping', (_req, res) => {
    res.send("pong ");
});

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`successfully running the server on port ${PORT}`);
});
