# RPG TOOLS

### How to start
- Don't forget to create the dotenv: ```cp .env.dist .env```
- First build the image: ```docker build --no-cache --target Local -t rpg-tool-app .```
- Then start the docker: ```docker run -p 3035:3035 -it --pid=host --rm --name rpg-tool -v ${PWD}/src:/usr/src/app/src rpg-tool```