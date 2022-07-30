@Comments @SchemaValidation @comments @apiTesting
Feature: Comments Schema and Status Code validation
Verify json schema and status codes for comments endpoints of Jsonplaceholder api

Background: Runs before every scenarios. 
		
		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
  		
Scenario: verify schema and status codes of Comments endpoint using GET method
    
 		When Get the resources from endpoint "/comments/1"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" endpoint
 
Scenario: verify schema and status codes of comments collection endpoint using GET method
    
 		When Get the resources from endpoint "/comments"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" collection endpoint

Scenario: verify schema and status codes for comments endpoint when accessed from comments of postid for GET method
		
 		When Get the resources from endpoint "/posts/1/comments"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" collection endpoint 
 		
Scenario: verify schema and status codes for comments endpoint when accessed comments from query parameters for GET method
		
    And set the parameters as
    """
    	postId := 1
    """
 		When Get the resources from endpoint "/comments"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" collection endpoint 

Scenario: verify schema and status codes for comments endpoint when new comment is made using POST
		
    Then set request body for comments using data "[VALID_COMMENT]"
 		When POST the resource to endpoint "/comments"
 		Then verify the status code is 201
 		And Validate the Json Schema for "comments" endpoint

Scenario: verify schema and status codes for comments endpoint when new comment is made using PUT. Hence expecting status code 201
		as per standards. 501 id is not available, so when PUT is called to it, they should create new object 
		
    Then set request body for comments using data "[VALID_COMMENT]"
 		When PUT the resource to endpoint "/comments/501"
 		Then verify the status code is 201
 		And Validate the Json Schema for "comments" endpoint
 		
Scenario: verify schema and status codes for comments endpoint when comment is edited using PUT
		
    Then set request body for comments using data "[VALID_COMMENT]"
 		When PUT the resource to endpoint "/comments/1"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" endpoint

Scenario: verify schema and status codes for comments endpoint when comment is modified using PATCH

    Then set request body for comments using data "[VALID_COMMENT]"
 		When PATCH the resource to endpoint "/comments/2"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" endpoint

Scenario: verify schema and status codes for comments endpoint when comment is deleted using DELETE
when 200 is returned, we expected deleted content to be returned
		
 		When DELETE the resource to endpoint "/comments/3"
 		Then verify the status code is 200
 		And Validate the Json Schema for "comments" endpoint
 		
 		
 	