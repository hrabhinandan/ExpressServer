# ExpressServer - Backend for Slidely Task 2
### Overview
This backend server is built using TypeScript and Express. It serves as the backend for the Slidely Task 2 Windows Desktop App, providing endpoints for creating, viewing, and managing form submissions. The server uses a JSON file as a database to store submission data.
### Features
* Handles form submissions from the Windows Desktop App.
* Provides endpoints to view and navigate through submissions.
* Stores data in a JSON file.
  
 ![slidely5](https://github.com/hrabhinandan/ExpressServer/assets/96574240/95f5fa26-4726-4f07-b2fd-62017836d4a0)

### Endpoints
#### '/ping'
* #### Method: 
   GET
* #### Description:
   A simple endpoint to check if the server is running.
* Response: 'true'
#### '/submit'
* #### Method: 
   POST
* #### Description:
   Accepts form submissions.
* #### Parameters:
  * name (string): The name of the submitter.
  * email (string): The email of the submitter.
  * phone (string): The phone number of the submitter.
  * github_link (string): The GitHub link for the task.
  * stopwatch_time (string): The stopwatch time for the task.
* #### Response: 
  Confirmation message indicating successful submission.
#### '/read'
* #### Method: 
  GET
* #### Description: 
  Retrieves a specific submission based on the provided index.
* #### Query Parameter:
  * index (number): The 0-indexed position of the submission to retrieve.
  * Response: The details of the requested submission.
## How to Run
### Prerequisites
* Node.js
* TypeScript
#### Installation
##### 1.Clone the Repository
  git clone <repository-url>
  cd ExpressServer
##### 2.Install Dependencies
   npm install
##### 3.Compile TypeScript
   npm run build
##### 4.Run the Server
   npm start
   
   ![slidely7](https://github.com/hrabhinandan/ExpressServer/assets/96574240/b787fe8a-f93c-4234-8fec-06949de3dc69)

## Testing the Endpoints
Use tools like Postman or curl to test the endpoints. Here are some examples:
* #### Ping the server
curl http://localhost:3000/ping
* #### Submit a form
  curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name":"H R Abhinandan", "email":"abhinandanholalu2001@gmail.com", "phone":"8050506963", "github_link":"https://github.com/hrabhinandan", "stopwatch_time":"00:58:00"}'
* #### Read a submission
* 
![slidely6](https://github.com/hrabhinandan/ExpressServer/assets/96574240/de0a9de8-067e-4a53-bb27-ffc0d0a15e98)

   curl http://localhost:3000/read?index=0
### Contact
For any questions or issues, please contact H R Abhinandan.
##

