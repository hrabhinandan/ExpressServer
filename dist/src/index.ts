import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const dbFilePath = path.join(__dirname, 'db.json');

app.use(express.json());

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };

    // Read existing submissions
    let submissions: Submission[] = [];
    if (fs.existsSync(dbFilePath)) {
        const data = fs.readFileSync(dbFilePath, 'utf-8');
        submissions = JSON.parse(data) as Submission[];
    }

    // Add new submission
    submissions.push(newSubmission);

    // Save back to the file
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2), 'utf-8');

    res.json({ success: true });
});

app.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
    const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8')) as Submission[];
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

app.get('/search', (req: Request, res: Response) => {
    const email = req.query.email as string;
    const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8')) as Submission[];
    const result = submissions.filter(submission => submission.email === email);
    if (result.length > 0) {
        res.json(result);
    } else {
        res.status(404).json({ error: 'No submissions found with the provided email' });
    }
});

app.delete('/delete', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
    let submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8')) as Submission[];
    if (index >= 0 && index < submissions.length) {
        submissions.splice(index, 1);
        fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
        res.json({ success: true });
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

app.put('/edit', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    let submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8')) as Submission[];
    if (index >= 0 && index < submissions.length) {
        submissions[index] = { name, email, phone, github_link, stopwatch_time };
        fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
        res.json({ success: true });
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

app.get('/ping', (_req: Request, res: Response) => {
    res.json(true);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
