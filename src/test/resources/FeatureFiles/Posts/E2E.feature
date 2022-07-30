@e2e @e2ePosts @posts @apiTesting
Feature: E2E testing of posts endpoint
Create, read, update and delete a posts and validate data

 
 Background: Runs before every scenarios.
 these commands sets base url and headers.
		
		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
  
 Scenario: Sunny Path Scenario 
 end to end crud flow for posts
  	
    Then set request body for posts using data "[VALID_POST]"
 		When POST the resource to endpoint "/posts"
 		Then verify the status code is 201
		And verify response body of posts with data "[VALID_POST]"
		
		When Get the resources from endpoint "/posts/[POST_ID]"
		Then verify the status code is 200
		And verify response body of posts with data "[VALID_POST]"
		
		When set request body for posts using data "[VALID_POST_UPDATE]"
		And PATCH the resource to endpoint "/posts/[POST_ID]"
		Then verify the status code is 200
		And verify response body of posts with data "[VALID_POST_UPDATE]"
		
		When DELETE the resource to endpoint "/posts/[POST_ID]"
 		Then verify the status code is 200
 		
 		When Get the resources from endpoint "/posts"
		Then verify the status code is 200
 		And verify id "[POST_ID]" is not available in response

 		
Scenario: validate existing data when accesed using GET
		
    When Get the resources from endpoint "/posts/1"
    Then verify response body of posts with data "[VALID_POST_IN_SYS]"
    
Scenario: validate lists of commensts does not have unknown post id
		
    When Get the resources from endpoint "/posts"
    And verify id "800" is not available in response

    
Scenario: validate response after patching. Changing values of post id  5

		When set request body for posts using data "[VALID_POST_IN_SYS]"
		And PATCH the resource to endpoint "/posts/5"
		Then verify the status code is 200
		And verify response body of posts with data "[VALID_POST_IN_SYS]"