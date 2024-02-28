const express = require('express');
const connection = require('../utils/connection');
const router = express.Router();

router.post('/create-item', async (req,res)=>{
    const {boardId, itemName, columnValues} = req.body;
    const mutation = `
                    mutation createItem($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
                    create_item(board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
                        id
                    }
                    }
                    `;
    try {
        const response = await connection.post('', {
            query: mutation,
            variables: {
            boardId,
            itemName,
            columnValues: JSON.stringify(columnValues),
            },
        });

        console.log("Item created:", response.data);
        res.json(response.data); 
        } catch (error) {
        console.error("Error creating item:", error);
        res.status(500).send(error.message);
        }

});

module.exports = router;

