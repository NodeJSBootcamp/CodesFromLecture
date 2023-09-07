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

# Expose the port your app will run on (assuming Next.js uses port 3000 by default)
EXPOSE 3000

# Define the command to start your Next.js application
CMD ["npm","run dev"]
