const express = require('express'); const mysql = 
require('mysql2/promise'); const dotenv = 
require('dotenv'); const cors = require('cors'); 
dotenv.config(); const app = express(); const 
PORT = process.env.PORT || 3000; 
app.use(express.json()); app.use(cors({ origin: 
'https://code2024.net' })); // Allow requests 
from your domain async function 
initializeDatabase() {
    const connection = await 
    mysql.createConnection({
        host: process.env.DB_HOST, user: 
        process.env.DB_USER, password: 
        process.env.DB_PASSWORD, database: 
        process.env.DB_NAME,
    });
    return connection;
}
// Add task endpoint
app.post('/api/tasks', async (req, res) => { 
    const connection = await 
    initializeDatabase(); const { 
    task_description } = req.body; try {
        const [result] = await 
        connection.execute(
            "INSERT INTO daily_tasks 
            (task_description) VALUES (?)", 
            [task_description]
        ); res.status(201).json({ message: 'Task 
        created successfully!', taskId: 
        result.insertId });
    } catch (error) {
        console.error('Error adding task:', 
        error); res.status(500).json({ message: 
        'Internal server error' });
    } finally {
        await connection.end();
    }
});
// Get tasks endpoint
app.get('/api/tasks', async (req, res) => { const 
    connection = await initializeDatabase(); try 
    {
        const [rows] = await 
        connection.execute("SELECT * FROM 
        daily_tasks"); res.json(rows);
    } catch (error) {
        console.error('Error retrieving tasks:', 
        error); res.status(500).json({ message: 
        'Internal server error' });
    } finally {
        await connection.end();
    }
});
// Fallback for unsupported methods
app.use((req, res) => { res.setHeader('Allow', 
    ['GET', 'POST']); res.status(405).end(`Method 
    ${req.method} Not Allowed`);
});
// Start server
app.listen(PORT, () => { console.log(`Server is 
    running on http://localhost:${PORT}`);
});
