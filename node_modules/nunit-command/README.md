[![Build Status](https://api.travis-ci.org/meilke/nunit-command.png)](https://travis-ci.org/meilke/nunit-command)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![NPM version](https://badge.fury.io/js/nunit-command.svg)](http://badge.fury.io/js/nunit-command)  
[![Code Climate](https://codeclimate.com/github/meilke/nunit-command/badges/gpa.svg)](https://codeclimate.com/github/meilke/nunit-command)
[![Test Coverage](https://codeclimate.com/github/meilke/nunit-command/badges/coverage.svg)](https://codeclimate.com/github/meilke/nunit-command/coverage)
[![Dependency Status](https://david-dm.org/meilke/nunit-command.svg)](https://david-dm.org/meilke/nunit-command)
[![devDependency Status](https://david-dm.org/meilke/nunit-command/dev-status.svg)](https://david-dm.org/meilke/nunit-command#info=devDependencies)  
[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)


# nunit-command

Node plugin for creating NUnit commands [NUnit](http://www.nunit.org/).

## Getting Started

```bash
$ npm install nunit-command
```

## Config
Create an options object like this:

```js
{

    // Can be solutions, projects or individual assemblies. Solutions
    // are searched for projects referencing nunit.framework.dll.
    files: {
        src: [
            'src/MySolution.sln',
            'src/Tests/Tests.csproj',
            'src/Tests/bin/Debug/Tests.dll'
        ]
    }

    // The path to the NUnit bin folder. If not specified the bin
    // folder must be in the system path.
    path: 'c:/Program Files/NUnit/bin',

    // Runs the anycpu or x86 build of NUnit. Default is anycpu.
    // http://www.nunit.org/index.php?p=nunit-console&r=2.6.3
    platform: 'anycpu|x86',

    // Integrate test output with TeamCity.
    teamcity: true|false,

    // The options below map directly to the NUnit console runner. See here
    // for more info: http://www.nunit.org/index.php?p=consoleCommandLine&r=2.6.3

    // Name of the test case(s), fixture(s) or namespace(s) to run.
    run: ['TestSuite.Unit', 'TestSuite.Integration'],

    // Name of a file containing a list of the tests to run, one per line.
    runlist: 'TestsToRun.txt',

    // Project configuration (e.g.: Debug) to load.
    config: 'Debug',

    // Name of XML result file (Default: TestResult.xml)
    result: 'TestResult.xml',

    // Suppress XML result output.
    noresult: true|false,

    // File to receive test output.
    output: 'TestOutput.txt',

    // File to receive test error output.
    err: 'TestErrors.txt',

    // Work directory for output files.
    work: 'BuildArtifacts',

    // Label each test in stdOut.
    labels: true|false,

    // Set internal trace level.
    trace: 'Off|Error|Warning|Info|Verbose',

    // List of categories to include.
    include: ['BaseLine', 'Unit'],

    // List of categories to exclude.
    exclude: ['Database', 'Network'],

    // Framework version to be used for tests.
    framework: 'net-1.1',

    // Process model for tests.
    process: 'Single|Separate|Multiple',

    // AppDomain Usage for tests.
    domain: 'None|Single|Multiple',

    // Apartment for running tests (Default is MTA).
    apartment: 'MTA|STA',

    // Disable shadow copy when running in separate domain.
    noshadow: true|false,

    // Disable use of a separate thread for tests.
    nothread: true|false,

    // Base path to be used when loading the assemblies.
    basepath: 'src',

    // Additional directories to be probed when loading assemblies.
    privatebinpath: ['lib', 'bin'],

    // Set timeout for each test case in milliseconds.
    timeout: 1000,

    // Wait for input before closing console window.
    wait: true|false,

    // Do not display the logo.
    nologo: true|false,

    // Do not display progress.
    nodots: true|false,

    // Stop after the first test failure or error.
    stoponerror: true|false,

    // Erase any leftover cache files and exit.
    cleanup: true|false
    
}
```

## License
MIT License
