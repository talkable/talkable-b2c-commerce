The automation framework was done using Selenium Web Driver with java as programming language and Eclipse as IDE. 
Other method of writing the tests would have been using MochaJS with Java Script as programming language. This was not chosen because I do not have much experience with these
and would have taken much more time(research for the tools and programming languages needed).

In order to run the tests, you need:
- open CMD and run "npm add --dev njre glob path" to add the needed libraries in package.json dependencies
- in project folder, create a folder named "test", then create a folder named "functional" in the "test" folder

In "functional" folder, you need:
- the executable jar "talkable-project-0.0.1-SNAPSHOT-fat-tests.jar"
- the properties file which contains the username and password for storefront and the URL for storefront; here you can modify and add your own username,password and URLs
- the data.properties file which contains some configurations for placing order like productIndex(productIndex used for checkout), shipping details and payment details
- the latest version of chrome driver under the drivers folder
- the index.js file

In project folder, open package.json and under scripts, create script to run "node ./test/functional/index.js"; Ex: "test:functional": "node ./test/functional/index.js"

1. Open CMD in the project location
2. Run the created script in CMD; Ex: npm run test:functional

!!! As preconditions, the site must be online(not online-protected)

After the tests are ran, an "test-output" folder will be created in the location with some basic tests reports. You can check the index.html file there to see the results.
