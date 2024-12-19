let path = "null shell %";

const inBuildCommands = [["echo", echo]];
const echo = function (args) {

};

const runCommand  = function () {
  
}

while (true) {
  const instruction = prompt(path);
  const [command, ...args] = instruction.split(" ");
  const result = runCommand(command, args);
}