"use strict";

var njre = require("njre");
var glob = require("glob");
var path = require("path");

var files = glob.sync(path.join(__dirname, "/**/java.exe"));

function runTest() {
    var exec = require("child_process").exec;
    var jarPath = path.resolve(__dirname, "./talkable-project-0.0.1-SNAPSHOT-fat-tests.jar");
    process.chdir(__dirname);
    var myShellScript = exec(files[0] + " -jar " + jarPath);
    myShellScript.stdout.on("data", function (data) {
        // eslint-disable-next-line no-console
        console.log(data);
    });
    myShellScript.stderr.on("data", function (data) {
        // eslint-disable-next-line no-console
        console.error(data);
    });
}

if (files.length === 0) {
    njre.install().then(function () {
        files = glob.sync(path.join(__dirname, "/**/java.exe"));
        runTest();
    });
} else {
    runTest();
}
