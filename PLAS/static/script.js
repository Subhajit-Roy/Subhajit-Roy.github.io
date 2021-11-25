console.log("Somethomg");
document.addEventListener("DOMContentLoaded", function () {
    var stage = new NGL.Stage("viewport");
    stage.loadFile("./1po1.pdb", {defaultRepresentation: true});
});