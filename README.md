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
| Return descriptions of all public repositories of a specified user     | 'sheenanick'  | 'simple web page that collects hellos in many different languages' |

## Setup/Installation Requirements

Creating Personal Access Tokens:
* Visit the Settings area of your GitHub account, select _Personal Access Tokens_ from the sidebar, and hit _Generate New Token_.
* GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select _Generate Token_.

Setup Instructions:
* Clone this repository from [GitHub](https://github.com/sheenanick/github-user-lookup).
* Place your token in an .env file at the top level of the directory.
* Type 'npm install' and 'bower install' to install all necessary dependencies.
* Run the development server by typing 'gulp serve' in your terminal.

## Support and Contact Details

Please feel free to contact me at sheenanick@gmail.com if you have any issues or questions, ideas or concerns.

## Technologies Used

JavaScript
jQuery
Node.js

### License

Licensed under GPL.

Copyright (c) 2016 **_Sheena Nickerson_**
