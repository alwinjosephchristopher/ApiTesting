@e2e @e2eUsers @users @apiTesting 
Feature:  E2E testing of users endpoint
Create, read, update and delete an user

Background: Runs before every scenarios. 
		
		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
  
 Scenario: Sunny Path Scenario
 end to end crud flow for users

    Then set request body for users using data "[VALID_USER]"
 		When POST the resource to endpoint "/users"
 		Then verify the status code is 201
		And verify response body of users with data "[VALID_USER]"
		
		When Get the resources from endpoint "/users/[USER_ID]"
		Then verify the status code is 200
		And verify response body of users with data "[VALID_USER]"
		
		When set request body for users using data "[VALID_USER_UPDATE]"
		And PATCH the resource to endpoint "/users/[USER_ID]"
		Then verify the status code is 200
		And verify response body of users with data "[VALID_USER_UPDATE]"
		
		When DELETE the resource to endpoint "/users/[USER_ID]"
 		Then verify the status code is 200
 		
 		When Get the resources from endpoint "/users"
		Then verify the status code is 200
 		And verify id "[USER_ID]" is not available in response

 		
Scenario: validate existing data when accesed using GET
		
    When Get the resources from endpoint "/users/1"
    Then verify response body of users with data "[VALID_USER_IN_SYS]"
    
Scenario: validate lists of commensts does not have unknown post id
		
    When Get the resources from endpoint "/users"
    And verify id "800" is not available in response

    
Scenario: validate response after patching. Changing values of post id  5

		When set request body for posts using data "[VALID_USER_IN_SYS]"
		And PATCH the resource to endpoint "/users/5"
		Then verify the status code is 200
		And verify response body of users with data "[VALID_USER_IN_SYS]"
		