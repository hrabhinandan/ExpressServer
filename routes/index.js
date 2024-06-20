/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = require("body-parser");
const fs_1 = require("fs");
const path_1 = require("path");
const app = (0, express_1.default)();
const PORT = 3000;
const DB_FILE =path_1.join(__dirname,'db.json');
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
const readDatabase = () => {
    try {
        const data = (0, fs_1.readFileSync)(DB_FILE, 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
};
const writeDatabase = (data) => {
    (0, fs_1.writeFileSync)(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
};
app.get('/ping', (req, res) => {
    res.json({ success: true });
});
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    const submissions = readDatabase();
    submissions.push(newSubmission);
    writeDatabase(submissions);
    res.json({ success: true });
});
app.get('/read', (req, res) => {
    const index = parseInt(req.query.index, 10);
    const submissions = readDatabase();
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    }
    else {
        res.status(404).json({ error: 'Submission not found' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map