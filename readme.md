### Api poll automation for Niedersachsen Vaccination

Note:- Please use it at your own risk. I am not responsible for any consequences. I develop the application for learning purpose.

#### How to setup ?
- Prerequisit 
    - [Nodejs](https://nodejs.org/en/)
    - Any VPN (cyberghost,hotspotshield,tunnelbear,etc)
- clone the project by `https://github.com/parthmakadiya12/vaccine-niedersachsen-automation.git`
- start the vpn (not necessary but recommended)
- go to project directory inside terminal/cmd
- run `npm install` or `yarn`
- create your env file. see below steps.
- also modify the value other variables defined in .env file
- run `npm run start` or `yarn start`


#### How to create .env file ?
- rename `env.txt` to `.env`
- open telegram 
- search `botfather` and create new bot there and follow the steps. It will give you token. paste it inside `.env` file. `TELEGRAM_TOKEN`
- search another bot in telegram called `userinfobot` it will give you user id of yours.
- paste it inside `.env` file `TELEGRAM_CHAT_ID`
- change zip code of your area.
- change dob of yours.

NOTE: Please do not use less than 1 minute on the schedule time for 2 reasons
    - Your IP will be blacklisted by `impfportal-niedersachsen.de`
    - For ethical reasons. (use one minute or more only)

#### What to do if my IP get blacklisted (3 ways you can use again)
- disconnect the VPN and reconnect. You will get a new IP so basically you will use services again normally.
- Restart the router (or renew DHCP lease). Maybe this will solve the issue.
- Wait for some time so that they can unblock your IP