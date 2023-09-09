# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ .

# Expose the port your Express.js app will run on (assuming port 000)
EXPOSE 8000

# Define the command to start your Express.js application
CMD ["npm", "start"]
