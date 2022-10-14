FROM node:current-alpine as Local

# Setup directory
WORKDIR /usr/src/app

# Copy packages
COPY package*.json ./

# Run Clean Install instead of Install to get an exact extract of
# package-lock.json
RUN npm i

# Copy files
COPY . .

# Build with vite
RUN npm run build

# Expose 3035 to not confuse with 3030 in back
EXPOSE 3035

CMD ["npm", "run", "dev"]