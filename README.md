# Final REST API Project - Inventory and Character Management

## Project Overview

This project is a RESTful API designed to handle character and item management for a gaming platform. It uses Node.js, Express, and MongoDB to provide robust functionality for creating, updating, and retrieving items and characters, including features like inventory management and item assignment. The API is designed to be deployed in a scalable environment, with AWS services such as EC2 and Cloud9 in mind.

## Features

- **Character Management**: Create, retrieve, update, and manage characters with detailed attributes, including stats and elemental affinities.
- **Item Management**: Create, retrieve, update, and manage items with unique codes, descriptions, and prices.
- **Inventory Management**: Add items to a character's inventory, including quantity management.
- **Data Persistence**: Uses MongoDB for data storage, ensuring efficient and scalable data handling.

## Project Structure

```
final_rest_test_cloud/
├── models/
│   ├── character.js
│   └── item.js
├── controllers/
│   ├── characterController.js
│   └── itemController.js
├── routes/
│   ├── characterRoutes.js
│   └── itemRoutes.js
├── config/
│   └── db.js
├── server.js
├── app.js
├── README.md
└── package.json
```

### Key Files and Their Roles
- **`models/`**: Contains the data models for items and characters.
- **`controllers/`**: Houses the business logic for managing characters and items.
- **`routes/`**: Defines the API endpoints and connects them to the appropriate controller functions.
- **`config/`**: Configuration settings, including the database connection.
- **`server.js`**: Entry point for the application.
- **`app.js`**: Application setup and middleware configuration.

## Prerequisites

Before setting up the project, make sure you have the following installed:
- Node.js (version 14 or higher)
- MongoDB (locally or using a cloud service like MongoDB Atlas)
- AWS account with access to Cloud9 and EC2 services

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/final_rest_test_cloud.git
   cd final_rest_test_cloud
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/your-database-name
   PORT=3000
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```
   The API should now be running at `http://localhost:3000`.

## API Endpoints

### Character Endpoints
- `POST /characters`: Create a new character
- `GET /characters/:id`: Get a character by ID
- `POST /characters/:id/inventory`: Add an item to a character's inventory

### Item Endpoints
- `POST /items`: Create a new item
- `GET /items`: Retrieve all items
- `GET /items/:id`: Retrieve an item by its MongoDB ID
- `GET /items/code/:code`: Retrieve an item by its unique code

## Deploying on AWS

### Using AWS Academy and Ubuntu Cloud9

1. **Launch a Cloud9 Environment**:
   - Go to the AWS Management Console.
   - Navigate to Cloud9 and create a new environment using an EC2 instance.
   - Choose the Ubuntu server as the platform.

2. **Set Up the Environment**:
   - Open the terminal in Cloud9.
   - Clone the project repository into your Cloud9 environment:
     ```bash
     git clone https://github.com/your-repo/final_rest_test_cloud.git
     cd final_rest_test_cloud
     ```

3. **Configure MongoDB**:
   - If you are using MongoDB Atlas, set up the MongoDB URI in the `.env` file as follows:
     ```env
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/your-database-name?retryWrites=true&w=majority
     ```
   - Alternatively, you can set up MongoDB on an EC2 instance.

4. **Deploy the Server**:
   - Install dependencies using `npm install`.
   - Start the server using `npm start`.
   - Make sure the server is configured to listen on the public IP to access it externally.

### Additional AWS Services

- **Elastic Beanstalk**: For easy deployment and scaling.
- **Amazon EC2**: Set up your MongoDB server or deploy your Node.js application.
- **Amazon RDS**: Use this for a managed database service if you prefer SQL-based storage.

## Future Enhancements

- **Authentication and Authorization**: Implement JWT-based authentication for secure access.
- **Logging and Monitoring**: Use AWS CloudWatch for monitoring application logs and performance.
- **Scalability**: Consider containerizing the application using Docker and deploying with AWS Elastic Kubernetes Service (EKS).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes you would like to make.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or issues, please open an issue on GitHub or contact the project maintainer.
