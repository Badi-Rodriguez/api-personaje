# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the application's port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
