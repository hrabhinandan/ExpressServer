"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
const dbFilePath = path_1.default.join(__dirname, 'db.json');
app.use(express_1.default.json());
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    // Read existing submissions
    let submissions = [];
    if (fs_1.default.existsSync(dbFilePath)) {
        const data = fs_1.default.readFileSync(dbFilePath, 'utf-8');
        submissions = JSON.parse(data);
    }
    // Add new submission
    submissions.push(newSubmission);
    // Save back to the file
    fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
    res.json({ success: true });
});
app.get('/read', (req, res) => {
    const index = parseInt(req.query.index, 10);
    const submissions = JSON.parse(fs_1.default.readFileSync(dbFilePath, 'utf8'));
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    }
    else {
        res.status(404).json({ error: 'Submission not found' });
    }
});
app.get('/search', (req, res) => {
    const email = req.query.email;
    const submissions = JSON.parse(fs_1.default.readFileSync(dbFilePath, 'utf8'));
    const result = submissions.filter(submission => submission.email === email);
    if (result.length > 0) {
        res.json(result);
    }
    else {
        res.status(404).json({ error: 'No submissions found with the provided email' });
    }
});
app.delete('/delete', (req, res) => {
    const index = parseInt(req.query.index, 10);
    let submissions = JSON.parse(fs_1.default.readFileSync(dbFilePath, 'utf8'));
    if (index >= 0 && index < submissions.length) {
        submissions.splice(index, 1);
        fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
        res.json({ success: true });
    }
    else {
        res.status(404).json({ error: 'Submission not found' });
    }
});
app.put('/edit', (req, res) => {
    const index = parseInt(req.query.index, 10);
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    let submissions = JSON.parse(fs_1.default.readFileSync(dbFilePath, 'utf8'));
    if (index >= 0 && index < submissions.length) {
        submissions[index] = { name, email, phone, github_link, stopwatch_time };
        fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
        res.json({ success: true });
    }
    else {
        res.status(404).json({ error: 'Submission not found' });
    }
});
app.get('/ping', (_req, res) => {
    res.json(true);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map