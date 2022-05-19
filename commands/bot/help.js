import {Commands} from "../index.js";
import {PREFIX} from "../../constants.js"
const MAX_CHAT_LEN = 180;
const pages = [];
let initialized = false;
function init(){
  const commandNames = Commands.map(e=>e.names[0])
  let currentPage;
  for (const [index, name] of commandNames.entries()) {
    if (Commands[index].hidden) {continue};
    let tba = `${PREFIX}${name}: ${Commands[index].description}`;
      if (currentPage && MAX_CHAT_LEN < currentPage.length + tba.length) {
        pages.push(currentPage);
        currentPage = undefined;
      }
    if (!currentPage) {
      currentPage = tba;
    } else {
      currentPage += "\n"+tba;
    }
  };
  initialized = true;
}
const Help = {
  names: ["help", "commands"],
  func: ({chat, body})=>{
    if (!initialized) init();
    let n = (parseInt(body) || 1)-1;
    chat.reply(`This is YudzBot, and here are some commands for now. y!help, y!commands, y!say, y!repeat, y!copy, y!yn, y!test, y!surprise, y!ping, y!beg`)
  },
  description: "Get a list of commands."
};

export {Help};
