const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cron = require("cron");
var axios = require("axios");
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Received your message");
});

const dob = process.env.DATE_OF_BIRTH;
const date = `${dob} 00:00:00.000`;
console.log(date);
const dobUnixTimestamp = Math.floor(new Date(date).getTime() / 1000);

const port = 3030;
const router = express.Router();
const chatIds = process.env.TELEGRAM_CHAT_ID.split(",");

const checkVaccineAvalible = async () => {
  // console.log("Checking Vaccine Availiblity",`${process.env.VACCINE_URL}/${process.env.ZIP}?stiko=&count=1&birthdate=${dobUnixTimestamp}`)
  const res = await axios.get(
    `${process.env.VACCINE_URL}/${process.env.ZIP}?stiko=&count=1&birthdate=${dobUnixTimestamp}`
  );
  if (res.data.resultList[0].outOfStock != true) {
    chatIds.forEach((i) => {
      console.log("Sending notification");
      bot.sendMessage(
        i,
        "Go Check the site https://www.impfportal-niedersachsen.de/ You might get a slot for vaccine..."
      );
    });
  } else {
    console.log(new Date().toISOString(), " No Slots avalilible");
  }
};

const cronJob = cron.job("*/10 * * * * *", async () => {
  // console.log("RUNNING CRON");
  try {
    await checkVaccineAvalible();
  } catch (e) {
    console.log(e);
  }
});
console.log("will start cron job");
cronJob.start();

app.use("/", router);
app.use(router);
app.listen(process.env.PORT || port);
console.log("server is running on port " + port);
