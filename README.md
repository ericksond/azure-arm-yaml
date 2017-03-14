## How to Use YAML for Azure ARM Templates and Make Life Easier

The sample Gruntfile.js demonstrates how one can continuously develop ARM templates in YAML and convert them into JSON during the build. This can also be done as part of the build steps in your pipeline.

This sample uses a nested template that is assumed to be stored in an Azure Blob Storage.

* frontends.yml - base template
* frontends_parameters.yml - base template parameters
* vm_windows.yml - nested template

This template will generate multiple Windows VMs based on the number of IP addresses you provide:

    ipAddresses:
      value: 10.0.0.4,10.0.0.5

It also uses the Chef Extension to automatically bootstrap chef-client for configuration management.

The sample Gruntfile includes the grunt-yaml and grunt-yamllint npm packages.

## Usage:

    git clone https://github.com/ericksond/azure-arm-yaml.git
    npm install
    node_modules\.bin\grunt 
