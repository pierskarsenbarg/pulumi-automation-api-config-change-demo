# Updating config example

This is an example Pulumi automation api program that sets a version to the config in a local Pulumi program and then creates an S3 bucket with that version in the name.

## Running instructions

### Prerequisites

You must have NodeJS and Pulumi installed. You should also have your AWS credentials available. See the [Pulumi AWS Getting Started Guide](https://www.pulumi.com/docs/get-started/aws/begin/) for more information.

### Deploying

1. Clone this repository: `git clone https://github.com/pierskarsenbarg/pulumi-automation-api-config-change-demo.git`
1. Change to the cloned directory: `cd pulumi-automation-api-config-change-demo`
1. Install NPM packages for both the Pulumi program and the root automation api program: `npm install && cd infrastructure && npm i && cd ..`
1. Run the program: `npm start v0.0.1`

### Destroying infrastructure

1. Change to the infrastructure folder: `cd infrastructure`
1. Destroy resources: `pulumi destroy`
