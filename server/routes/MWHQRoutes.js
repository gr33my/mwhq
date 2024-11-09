const express = require('express');
const MWHQModel = require('../models/MWHQModel');

const router = express.Router();

// Get all examples
router.get('/', async (req, res) => {
    try {
        const examples = await MWHQModel.findAll();
        res.json(examples);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/{id}:
 *   get:
 *     summary: Get example by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The example ID
 *     responses:
 *       200:
 *         description: An example object
 *       404:
 *         description: Example not found
 */
router.get('/:id', async (req, res) => {
    try {
        const example = await MWHQModel.findById(req.params.id);
        if (example) {
            res.json(example);
        } else {
            res.status(404).json({ message: 'Example not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api:
 *   post:
 *     summary: Create a new example
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created example object
 *       400:
 *         description: Bad request
 */
router.post('/', async (req, res) => {
    try {
        const savedExample = await MWHQModel.create(req.body);
        res.status(201).json(savedExample);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/{id}:
 *   put:
 *     summary: Update an example
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The example ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated example object
 *       400:
 *         description: Bad request
 */
router.put('/:id', async (req, res) => {
    try {
        const updatedExample = await MWHQModel.update(req.params.id, req.body);
        res.json(updatedExample);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/{id}:
 *   delete:
 *     summary: Delete an example
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The example ID
 *     responses:
 *       200:
 *         description: A message indicating whether the deletion was successful
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', async (req, res) => {
    try {
        const deletedExample = await MWHQModel.delete(req.params.id);
        res.json(deletedExample);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;