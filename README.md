# Basic Information

Hi, I have went with Vue3 + Typescript for this Task. I have Dockerized with nginx to serve the Frontend.
As i understand in this Task i need to Dockerize only Frontend , i did not included the Backend in this this Process.

So I am writing this Document for 2 versions.

1.  Dockerized way
2.  Non-Dockerized way

## Presequesites

- Port:I am using 4000 Port For Frontend in Docker Command. So lets keep `Port:4000` avaiable for this use.
- 1.  Dockerized Version you would need Docker for Desktop
  2.  Non-Dockerized Version you would need Node.js 14+.
- Backend need to be running on `Port:8000` for this Endpoint `http://localhost:8000/addresses`

# Project setup

```
yarn install
```

# Dockerized way

- Run the Backend node index.js as mentioned in the Task Instructions
- Extract the zip file which contains the Frontend Build.
- Run the following command from the Extracted Frontend Folder
  ***
  ```
  docker build -t aqua-app .
  ```
  ***
- Run the Following command to run the Docker Image to get the Frontend Application running

---

```
docker run -it -p -d --rm 4000:80 --name aqua-app aqua-app
```

---

# Non-Dockerzied way

- Extract the zip file which contains the Frontend Build.
- Do any one of the following 2 steps.`(1st Recommended)`
- After completing below step open browser enter following url to see the application
  ```
  http://localhost:4000/#/
  ```

1. ## yarn
   - If `yarn` was installed gloabally just run following commands
   * `yarn install` to install Dependencies
   * `yarn serve` to run Frontend
2. ## npm
   - If yarn was not installed do the following steps to run the application.
   - Remove the `yarn.lock` file
   - Run `npm install` to install Dependencies
   - Run `npm run serve` to run the Frontend

# To Login to the application use the following Credentails

- To see the List of Static Users see this JSON `/src/assets/users.json` or maybe here.

| Email                  | Password    |
| ---------------------- | ----------- |
| srikanth@gmail.com     | srikanth    |
| acockell1@foxnews.com  | Ej4XxEJg0MQ |
| fhart2@blinklist.com   | wTX1AoKM    |
| ebeckley3@yahoo.com    | 8pnHdTm     |
| jjickles4@redcross.org | rEHB79MP    |
| agemmell5@hao123.com   | 2OINQk4tcQP |
| telldred6@com.com      | v8xcjj0WCAj |
| kspivey7@ow.ly         | Q2arX2DtnOU |
| dhefford8@fda.gov      | doQtqUcE    |
| carlidge9@yandex.ru    | YCRVU9Gu    |
