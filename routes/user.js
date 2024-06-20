/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
// eslint-disable-next-line no-undef
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
// eslint-disable-next-line no-undef
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send("respond with a resource");
});
// eslint-disable-next-line no-undef
exports.default = router;
//# sourceMappingURL=user.js.map