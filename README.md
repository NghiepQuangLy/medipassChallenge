Install:
- Depends on the request package so: npm i request
- Depends on the mime package so: npm install mime
- Depends on the csv headers package so: npm install csv-headers
- Depends on the csv parser package so: npm install csv-parser
- Depends on the mongo db package so: npm install mongodb

Comment:
Due to time constraints and me not having too much experience in 
Node js, the design of this overall solution is definitely not too great.

During development, the only way for me to make sure my program works is 
to use a URL for a sample CSV file.

Additionally, for testing, there was not enough time to perform 
functionality correctness tests on readCSV module and the importOrders module.
Nonetheless, even if there is time, the testing of importOrders module 
would probably require creating a database or some sort of mocking which would 
take me a decent amount of time to get to.

There is also no performance test (if I do get a chance to implement I was 
thinking of doing something like a timeit in Python with various file 
sizes).

The last commit to the repo made on May 19th, 2019 (out of the 90 min challenge)
is an essential bug (found during code review) fix to the program.
All previous commits were timeboxed to a 90 minute period.

How to run:
The file to be used is the app.js file.
Due to time constraint, the functionality to allow user to use command 
line arguments to specify the CSV url was not added. Thus, user would 
need to specify the CSV url within the app.js in the variable inputURL.
Additionally, user would have to specify a database URL within the importOrders
module; otherwise the program would crash since it does not know which database
to talk to.
