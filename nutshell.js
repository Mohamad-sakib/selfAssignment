let path = "null shell %";

const echo = function (args) {
  const stringToReturn = args.join(" ");
  
  if (stringToReturn[0] === '"' || stringToReturn[0] === "'") {
    return stringToReturn.slice(1, stringToReturn.length - 1);
  }

  return  stringToReturn;
};

const builtInCommands = [["echo", echo]];
// const extermalCommands = [["deno", deno]];



// const isExternalCommand = function (userCommand, args) {
//   for (const command of builtInCommands) {
//     if (command === userCommand) {
//       return userCommand(args);
//     }
//   }
// };

const runCommand = function (userCommand, args) {
  for (const command of builtInCommands) {
    if (command[0] === userCommand) {
      return command[1](args);
    };
  }

  return "invalid command";
  // return isExternalCommand(userCommand, args);
}

const displayResult = function (result) {
  console.log(result);
}

while (true) {
  const instruction = prompt(path);
  const [command, ...args] = instruction.split(" ");
  const result = runCommand(command, args);
  displayResult(result);
}