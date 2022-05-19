import {getRandomInt} from "../../utils.js" 

const Ping = {
  names: ["ping"], 
  func: ({chat, body, userData})=>{ 
      chat.reply(`pong`)
  },
  description: "test"
}  
export {Ping};
