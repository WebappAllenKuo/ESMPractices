function doIt() {
  import("./math.js").then((module) => {
    console.log("module", module);
    console.log("module.default(5, 2)", module.default(5, 2)); // 7
    console.log("module.multiply(2, 5)", module.multiply(2, 5)); // 10
  });
}

doIt();
