// Java : Exception
// Javascirpt : Erro
// const array = new Array(100000000000000000000);

// Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "notexist") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}
const fileName = "notexist";

function run() {
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!! ${error}`);
    return;
  } finally {
    closeFile(fileName);
    console.log("CLOSED");
  }
  console.log("RUNNING");
}
run();
