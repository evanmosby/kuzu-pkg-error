// Import handler to investigate segmentation faults
const segfaultHandler = require("segfault-handler");
segfaultHandler.registerHandler("crash.log");


// import kuzu.
// This import is expected to cause a segmentation fault when "packed" on Windows. 
// Works fine when "packed" on Ubuntu or Red Hat 
// Running normally works fine.

console.log("Kuzu importing...");
require("kuzu");
console.log("Kuzu imported successfully!");
