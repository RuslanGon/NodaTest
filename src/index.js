import express from 'express';

const app = express();

app.use((req, res, next) => {
req.someId = Math.random();
next();
});

app.get('/', (req, res, next) => {
    console.log(req.someId);
res.send(req.someId.toString());
});

app.listen(3000, () => {
    console.log('Server is running on port 3001');
});

