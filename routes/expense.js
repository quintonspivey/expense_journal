// require express and it's router component
const express = require('express');

const router = express.Router();
const { create } = require('../controllers');
const { create, expenseById, read } = require('../controllers');
const { create, expenseById, read, update } = require('../controllers');
const { create, expenseById, read, update, remove } = require('../controllers');

const { create, expenseById, read, update, remove, expenseByDate } = require('../controllers');



router.post('/expense/create', create);
router.get('/expense/:id', expenseById, read);
router.put('/expense/:id', expenseById, update);
router.delete('/expense/:id', remove);
router.get('/expense/list/:expenseDate', expenseByDate, read);

// require the middlewares and callback functions from the controller directory

// Create POST route to create an expense

// Create PUT route to update an expense

// Create DELETE route to remove an expense

// Create GET route to read an expense

// Create GET route to read a list of expenses

// Create a callback to handle url params

module.exports = router;
