<!DOCTYPE html> <html lang="en"> <head> <meta 
    charset="UTF-8"> <title>Add New Task</title> 
    <style>
        body { background-color: #333; color: 
            #fff;
            font-family: Arial, sans-serif; 
            display: flex; flex-direction: 
            column; align-items: center; 
            justify-content: center; height: 
            100vh; margin: 0;
        }
        form { display: flex; flex-direction: 
            column; align-items: center; gap: 
            10px;
        }
        input, button { padding: 10px; font-size: 
            16px;
        }
        pre { color: #fff; font-size: 16px; 
            white-space: pre-wrap; word-wrap: 
            break-word; padding: 10px; border: 
            1px solid #555; background-color: 
            #222;
            border-radius: 8px;
        }
    </style> </head> <body> <h2>Add a New 
    Task</h2> <form id="taskForm">
        <input type="text" id="taskDescription" 
        placeholder="Task description" required> 
        <button type="button" 
        onclick="addTask()">Add Task</button>
    </form> <pre id="response"></pre> <script> 
        async function addTask() {
            const taskDescription = 
            document.getElementById('taskDescription').value; 
            try {
                const response = await 
                fetch('http://code2024.net:3000/api/tasks', 
                {
                    method: 'POST', headers: { 
                    'Content-Type': 
                    'application/json' }, body: 
                    JSON.stringify({ 
                    task_description: 
                    taskDescription })
                });
                const result = await 
                response.json(); 
                document.getElementById('response').textContent 
                = JSON.stringify(result, null, 
                2);
            } catch (error) {
                console.error('Error:', error); 
                document.getElementById('response').textContent 
                = 'Failed to add task. Check 
                server connection.';
            }
        }
    </script> </body>
</html>
