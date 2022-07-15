import express from 'express';

const router = express.Router();

router.post('/contact', (req, res) => {
    res.status(200);
    res.send(JSON.stringify({
        message: 'Not implemented yet'
    }));
});

router.get('/health-check', (req, res) => {
    res.status(200);
    res.send(JSON.stringify({
        message: 'Not implemented yet'
    }));
});

export default router;