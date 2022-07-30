@schemaUsers @SchemaValidation @users @apiTesting
Feature: Users Schema and Status Code validation
Verify json schema and status codes for users endpoints of Jsonplaceholder api

Background: Runs before every scenarios. 
		
		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
     
 Scenario: verify schema and status codes of users endpoint using GET method
   
 		When Get the resources from endpoint "/users/1"
 		Then verify the status code is 200
 		And Validate the Json Schema for "users" endpoint
 		
Scenario: verify schema and status codes of users collection endpoint using GET method
    
 		When Get the resources from endpoint "/users"
 		Then verify the status code is 200
 		And Validate the Json Schema for "users" collection endpoint

Scenario: verify schema and status codes for users endpoint when accessed users from query parameters for GET method
		
    And set the parameters as
    """
    	id := 1
    """
 		When Get the resources from endpoint "/users"
 		Then verify the status code is 200
 		And Validate the Json Schema for "users" collection endpoint 

Scenario: verify schema and status codes for users endpoint when new users is made using POST
		
    Then set request body for users using data "[VALID_USER]"
 		When POST the resource to endpoint "/users"
 		Then verify the status code is 201
 		And Validate the Json Schema for "users" endpoint

Scenario: verify schema and status codes for users endpoint when new users is made using PUT. Hence expecting status code 201
		as per standards. 15 id is not available, so when PUT is called to it, they should create new object 
		
    Then set request body for users using data "[VALID_USER]"
 		When PUT the resource to endpoint "/users/15"
 		Then verify the status code is 201
 		And Validate the Json Schema for "users" endpoint
 		
Scenario: verify schema and status codes for users endpoint when users is edited using PUT
		
    Then set request body for users using data "[VALID_USER]"
 		When PUT the resource to endpoint "/users/2"
 		Then verify the status code is 200
 		And Validate the Json Schema for "users" endpoint

Scenario: verify schema and status codes for users endpoint when users is modified using PATCH
		
    Then set request body for users using data "[VALID_USER]"
 		When PATCH the resource to endpoint "/users/3"
 		Then verify the status code is 200
 		And Validate the Json Schema for "users" endpoint

Scenario: verify schema and status codes for users endpoint when users is deleted using DELETE
	when 200 is returned, we expected deleted content to be returned
	
 		When DELETE the resource to endpoint "/users/4"
 		Then verify the status code is 200
 		And Validate the Json Schema for "users" endpoint