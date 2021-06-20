### Api poll automation for Niedersachsen Vaccination

Note:- Please use it at your own risk. I am not responsible for any consequences. I develop the application for learning purpose.

#### How to setup ?
- Prerequisit 
    - [Nodejs](https://nodejs.org/en/)
- clone the project by `https://github.com/parthmakadiya12/vaccine-niedersachsen-poll.git`
- go to project directory inside terminal/cmd
- run `npm install` or `yarn`
- create your env file. see below steps.
- run `npm run start` or `yarn start`


#### How to create .env file ?
- rename `env.txt` to `.env`
- open telegram 
- search `botfather` and create new bot there and follow the steps. It will give you token. paste it inside `.env` file. `TELEGRAM_TOKEN`
- search another bot in telegram called `userinfobot` it will give you user id of yours.
- paste it inside `.env` file `TELEGRAM_CHAT_ID`
- change zip code of your area.
- change dob of yours.