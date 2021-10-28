import { LocalProgramArgs, LocalWorkspace } from "@pulumi/pulumi/automation";
import * as upath from "upath";

const process = require('process');

const args = process.argv.slice(2);
let version = "";
if (args.length > 0 && args[0]) {
    version = args[0];
} else {
    console.log("No version set.Exiting program.");
    process.exit();
}

const run = async () => {
    const args: LocalProgramArgs = {
        stackName: "dev",
        workDir: upath.joinSafe(__dirname, "..", "infrastructure"),
    };

    const stack = await LocalWorkspace.createOrSelectStack(args);
    console.info("successfully initialized stack");
    console.info("setting up config");

    await stack.setConfig("version", { value: version });

    await stack.up({ onOutput: console.log })
}

run();