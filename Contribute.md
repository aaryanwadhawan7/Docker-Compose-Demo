## Manual Installation
- Install nodejs locally 
- Clone the repo
- Get all npm dependencies (npm install)
- Start the db locally 
      - docker -p 5432:5432 -e POSTGRES_PASSWORD="siddhant@10" -d postgres 
      - Go to neon.tech and get yourself a db
- Change the DATABASE_URL present in the .env (Change your db credential...)
- npx primsa migrate (It will asked for name for the migration...)
- npx prisma generate 
- npm run build           
- npm run start 

## Docker Installation Steps 
- Ensure you have docker installed in ur desktop
- Write a Dockerfile 
- Build an image via Dockerfile 
     - docker build -t project-backend .
- (Optional) Push this build image to docker hub 
     - docker push project-backend:latest
- Execute the build image (Container)
     - docker run  -p 3000:3000 -d project-backend 
- Run the postgres image 
     - docker run -p 5432:5432 -e POSTGRES_PASSWORD='siddhant@10' -d postgres

## Docker-Compose Installation Steps 
- Install docker, docker-compose 
- Run 'docker compose up'