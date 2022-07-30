@schemaPosts @SchemaValidation @posts @apiTesting
Feature: Posts Schema and Status Code validation
Verify json schema and status codes for posts endpoints of Jsonplaceholder api

Background: Runs before every scenarios. 
		
		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
    
Scenario: verify schema and status codes of Posts endpoint using GET method
    
 		When Get the resources from endpoint "/posts/1"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" endpoint
 
Scenario: verify schema and status codes of Posts collection endpoint using GET method

 		When Get the resources from endpoint "/posts"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" collection endpoint
 
Scenario: verify schema and status codes for posts endpoint when accessed posts from userid using GET method
		
 		When Get the resources from endpoint "/users/1/posts"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" collection endpoint 
 		
Scenario: verify schema and status codes for posts endpoint when accessed posts from query parameters for GET method
		
    And set the parameters as
    """
    	userId := 1
    """
 		When Get the resources from endpoint "/posts"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" collection endpoint 

Scenario: verify schema and status codes for posts endpoint when new posts is made using POST
		
    Then set request body for posts using data "[VALID_POST]"
 		When POST the resource to endpoint "/posts"
 		Then verify the status code is 201
 		And Validate the Json Schema for "posts" endpoint

Scenario: verify schema and status codes for posts endpoint when new posts is made using PUT. Hence expecting status code 201
		as per standards. 800 id is not available, so when PUT is called to it, they should create new object 
		
    Then set request body for posts using data "[VALID_POST]"
 		When PUT the resource to endpoint "/posts/800"
 		Then verify the status code is 201
 		And Validate the Json Schema for "posts" endpoint
 		
Scenario: verify schema and status codes for posts endpoint when posts is edited using PUT
		
    Then set request body for posts using data "[VALID_POST]"
 		When PUT the resource to endpoint "/posts/2"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" endpoint

Scenario: verify schema and status codes for posts endpoint when posts is modified using PATCH
		
    Then set request body for posts using data "[VALID_POST]"
 		When PATCH the resource to endpoint "/posts/3"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" endpoint

Scenario: verify schema and status codes for posts endpoint when posts is deleted using DELETE
when 200 is returned, we expected deleted content to be returned

 		When DELETE the resource to endpoint "/posts/4"
 		Then verify the status code is 200
 		And Validate the Json Schema for "posts" endpoint
 		
