export const notFaundMiddleware = (req, res) => {
    res.status(404).send('Oops, not found');
};
