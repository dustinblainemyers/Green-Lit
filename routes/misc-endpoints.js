const express = require('express'),
   router = express.Router(),
   lights = require('../models/lights');

router.get('/:user_id?', async (req, res) => {
    const user_id = req.params.user_id;
    const data = await lights.viewUnjoined(user_id);
   
    console.log("data", data);

        res.send(data);
   });


   module.exports = router