FROM node:16

# Create app directory inside container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Binds to port 5000 of container
EXPOSE 5000

# Run your app
CMD ["node", "index.js"]