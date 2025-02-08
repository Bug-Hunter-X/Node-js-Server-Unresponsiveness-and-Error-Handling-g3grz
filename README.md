# Node.js Server Unresponsiveness and Error Handling

This repository demonstrates a common issue in Node.js servers: unresponsiveness and poor error handling.  The example shows a server that can hang or become unresponsive due to long-running operations or unhandled exceptions.  A solution is provided to address these issues.

## Bug

The `serverBug.js` file contains a server that simulates a long-running operation (a 5-second delay).  In a real-world scenario, this could be a database query, file operation, or network request. If an error occurs during this operation, the server might not handle it gracefully, leading to unresponsiveness.

## Solution

The `serverSolution.js` file demonstrates a more robust approach. It includes error handling using `try...catch` blocks and uses proper cleanup mechanisms to prevent resource leaks. It also handles potential errors more gracefully.