const { Plugin } = require('powercord/entities');
const mappings = require('./mapping')

module.exports = class AOUUtils extends Plugin {
  startPlugin () {
    this.registerMain();
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('toenchanting');
    powercord.api.commands.unregisterCommand('fromenchanting')
  }

  registerMain () {
    powercord.api.commands.registerCommand({
      command: 'toenchanting',
      description: 'Converts text to enchanting table.',
      usage : '{c} <text>',
      executor: (args) =>{
        if (args.length == 0){
          return {
            send: false,
            result: "No text was provided."
          };
        }
        var content = args.join(" ")
        return {
          send: true,
          result: mappings.toenchanting(content)
        };
      }
    });

    powercord.api.commands.registerCommand({
      command: 'fromenchanting',
      description: 'Converts enchanting table to English.',
      usage: '{c} <enchanting table>',
      executor: (args) =>{
        if (args.length == 0){
          return {
            send: false,
            result: "No text was provided."
          };
        }
        var content = args.join(" ")
        return {
          send: false,
          result: mappings.fromenchanting(content)
        };
      }
    })
  }
};
