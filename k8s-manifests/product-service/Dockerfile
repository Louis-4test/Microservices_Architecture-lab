# 1. Use the Node.js image
FROM node:14

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port (3001 for product-service, 3002 for order-service, 3003 for user-service)
# Change the port number according to each service
EXPOSE 3001

# 7. Run the application
CMD ["node", "server.js"]
