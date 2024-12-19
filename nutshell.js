let path = "null shell %";

while (true) {
  const instruction = prompt(path);
  const [command, ...args] = instruction.split(" ");
  const result = runCommand(command, args);
}