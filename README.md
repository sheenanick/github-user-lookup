# GitHub User Lookup

#### _Epicodus JavaScript Week 1 Independent Project, 10.14.2016_

#### By Sheena Nickerson

## Description

This is a web application where users may enter a GitHub username into a form, submit it, and see names and descriptions of that GitHub user's public repositories.

## Technical Specifications

| Behavior                                                               | Example Input | Example Output                                                     |
|------------------------------------------------------------------------|---------------|--------------------------------------------------------------------|
| Store username from form input                                         | 'sheenanick'  | 'sheenanick'                                                       |
| Return repository names of all public repositories of a specified user | 'sheenanick'  | 'hello world'                                                      |
| Return descriptions of all public repositories of a specified user     | 'sheenanick'  | 'Epicodus Intro to Programming - Practice with HTML' |

## Setup / Installation Requirements

Creating Personal Access Tokens:
* Visit the Settings area of your GitHub account, select _Personal Access Tokens_ from the sidebar, and hit _Generate New Token_.
* GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select _Generate Token_.

Setup Instructions:
* `$ git clone https://github.com/sheenanick/github-user-lookup` to clone this repository.
* `$ cd github-user-lookup` to navigate to the cloned directory.
* `$ npm install` and `$ bower install` to install all necessary dependencies.
* Place your token in an .env file at the top level of the directory.
* `$ gulp serve` to run the development server.

## Support and Contact Details

Please feel free to contact sheenanick@gmail.com if you have any issues or questions, ideas or concerns.

## Technologies Used

* JavaScript
* jQuery
* Node.js

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **_Sheena Nickerson_**
