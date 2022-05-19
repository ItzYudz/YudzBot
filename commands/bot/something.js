import {getRandomInt} from "../../utils.js" 

const Something = {
  names: ["say", "repeat", "copy"], 
  func: ({chat, body, userData})=>{ 
    if (userData.value.rank == "Owner") {
      chat.reply(`${body}`)
    } else {
      chat.reply(`${body}`)
    }
  },
  description: "test"
}  
export {Something};
