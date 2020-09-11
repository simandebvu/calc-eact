# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2020-09-10
### Added
- Create React App used to initialize the project using instructions in the create-react-app-buildpack to deploy the app to Heroku
- Removed Unnecessary files and assets created by create-react-app
- Added prop-types and big.js using npm
- Added Linting for Github actions
- Added Changelog and Readme
- Prepare the directory structure 
- Implemented the App component 
- Implemented the Display component 
- Implemented the Button component 
- Implemented the ButtonPanel component
- Flex display mode
- Styled the Display component
- Styled the ButtonPanel component
- Styled the Button component
- Passed "color" and "wide" props to the Button
- Logic Folder with `calculate` and `operate`
- Used `big.js`
- Import `Calculate` into `App`
- Interaction
- App Passes state as Props to ButtonPanel

### Fixed
- `calcRow` height to be 100px
- `mod` to retain value