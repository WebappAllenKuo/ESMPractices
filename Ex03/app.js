function doIt() {
  import("./math.js").then(({ default: funcAdd, multiply }) => {
    // console.log("module", module);
    console.log("funcAdd(5, 3)", funcAdd(5, 3)); // 7
    console.log("module.multiply(2, 5)", multiply(2, 6)); // 10
  });
}

doIt();
