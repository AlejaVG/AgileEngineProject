# Estee  Lauder Test Automation
This project corresponds to the Test Automation Framework for the Estee Lauder Company Site.

<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
                <li><a href="#built-with">Built With</a>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a>
                <li><a href="#installation">Installation</a>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#contribute">Contribute</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright Demo - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

Top Features:

- Easy to Configure.
- Auto-waits for all the relevant checks to pass and only then performs the requested action.
- Records videos for Test Cases.
- Records the test script and every action on the target page is turned into generated script.
- Generates trace file, which gives in-depth details of Test Case execution.
- Execution of test case is faster when compared with other competitive framework in market.
- Supports Headful/Headless mode execution for Firefox/Google Chrome/Chromium on Windows/Linux/Mac machines.
- Supports Serial and Parallel execution.
- HTML Reports are generated after execution with an option to capture screenshot/video/trace file on failure.


### Built With

- [Playwright](https://playwright.dev)
- [JavaScript](https://lenguajejs.com/javascript/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs 18 or above: Download and Install Node JS from
  sh
  https://nodejs.org/en/download/

  

### Installation

1. Clone the repo on your local using below URL


https://github.com/AlejaVG/AgileEngineProject


2. Navigate to the folder and install npm packages using:


npm install


<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in playwright.config.ts.

2. For execution entire end to end test suite on all available browsers simultaneously execute below command, Test Cases are present in the "tests" folder:

'npm run test:all'


3. For executing test cases on individual browsers, then execute the below commands, just make sure the browser name given matches the name given in playwright.config.js


Chrome: 'npm run test:chromium'
Firefox: 'npm run test:firefox'

4. For executing test cases for accessibility tags or functional tags, then execute the below commands, 

Accessibility: 'npm run test:accessibility'
Functional: 'npm run test:functional'



5. For HTML Report generation execute below command , single static HTML report(index.html) 

6. Screenshots, Videos and Trace files will be generated in test-results folder.

## Reports

## Contribute

### Lint

Avoid sumbitting lint issues. To check the lint rules on the whole project, run:
bash
npm run lint

To automatically fix simple formatting lining issues, run:
bash
npm run lint:fix

The project has been configured with a PreCommit Hook that will run the lint rule validations before commiting new changes.

### Naming conventions

When naming filenames, directories, classes, variables and methods, please make sure that the folloging naming conventions are used:

| Type | Naming conventions | Example
| - | - | - |
| Filenames | Snake Case | estee_lauder.js |
| Directories | Kebab Case | page-objects/ |
| Classes | Pascal Case | EsteeLauderPage |
| Variables | Camel Case | headerTitle |
| Methods | Camel Case | getValueFromPage() |