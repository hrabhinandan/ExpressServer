# ExpressServer - Backend for Slidely Task 2
### Overview
This backend server is built using TypeScript and Express. It serves as the backend for the Slidely Task 2 Windows Desktop App, providing endpoints for creating, viewing, and managing form submissions. The server uses a JSON file as a database to store submission data.
### Features
* Handles form submissions from the Windows Desktop App.
* Provides endpoints to view and navigate through submissions.
* Stores data in a JSON file.
  
![slidely8](https://github.com/hrabhinandan/ExpressServer/assets/96574240/a3bfd334-d531-43c8-acfb-b96a22fc748b)

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
  curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name":"H R Abhinandan", "email":"abhinandanholalu2001@gmail.com", "phone":" +91 8050506963", "github_link":"https://github.com/hrabhinandan", "stopwatch_time":"00:01:06"}'
* #### Read a submission
  
![slidely6](https://github.com/hrabhinandan/ExpressServer/assets/96574240/b5bcdb59-b8cd-4e96-ba3f-b4163996edf6)

   curl http://localhost:3000/read?index=0
   
* #### Search by emailid

 ![slidely7](https://github.com/hrabhinandan/ExpressServer/assets/96574240/68d13f28-8ee5-4f8e-a35f-90e083fade22)
  
 curl http://localhost:3000/search?email=abhinandanholalu2001@gmail.com

### Contact
For any questions or issues, please contact H R Abhinandan.
##

