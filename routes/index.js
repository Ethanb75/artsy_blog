var express     = require("express"),
    router      = express.Router();

    router.get('/', (res, req) => {
      res.render('../views/index');
    });

module.exports = router;