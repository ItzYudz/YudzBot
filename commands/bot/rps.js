import {getRandomInt} from "../../utils.js" 

function getSay (h) {
  switch (h) {
    case 3:
      return "scissors";

    case 2:
      return "paper";

    case 1:
      return "rock";
  }
}

const RPS = {
  names: ["rps"], 
  func: ({chat, body, userData})=>{ 
    const h = getRandomInt(1, 3)
    chat.reply(getSay(h))
  },
  description: "test"
}  
export {RPS};
