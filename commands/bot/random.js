import {getRandomInt} from "../../utils.js" 

const Random = {
  names: [`yn`], 
  func: ({chat, body, userData})=>{ 
    if(Math.random() < 0.5) {
      chat.reply(`Yes`)
    } else {
      chat.reply(`No`)
    }
  },
  description: "test"
}  
export {Random};
