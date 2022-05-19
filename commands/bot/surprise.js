//not really a surprise after you see this anymore...
import {getRandomInt} from "../../utils.js" 

const Surprise = {
  names: ["surprise"], 
  func: ({chat, body, userData})=>{ 
    if (userData.value.rank == "Owner") {
      chat.reply(`Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
`)
    } else {
      chat.reply(`Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
`)
    }
  },
  description: "test"
}  
export {Surprise};
