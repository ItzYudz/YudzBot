import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";

const client = new Client({ username: "YudzBot", password: process.env['Pass'] }, { logSocketMessages: false });
//process.env['pass'] is a secret
const noop = () => { };

client.onPost = async (post) => {
  const resetTimeout = await post.connect(60000, () => {
    post.onChat = noop;
    if (post.text.match(START)) {
      post.chat("YudzBot has disconnected because of inactivity")
    }
  })
  if (post.text.match(START)) {
    setTimeout(function( ) {
      resetTimeout()
      post.chat(`I'm now connected to ${post.author.username}'s post!`)
    }, 2000)
  }

  post.onChat = (chat) => {
    resetTimeout();
    onChat(client, chat);
  }
  }

client.onReady = () => {
  console.log("YudzBot is ready for use")
}
