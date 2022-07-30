#tags to run at feature file levels
@e2e @e2eComments @comments @apiTesting
Feature: E2E testing of Comments endpoint
Create, read, update and delete a comment and validate data

Background: Runs before every scenarios. 
		
		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
# tags can be given to each scenario to run specific scenarios
@sceanrio1
Scenario: Sunny Path Scenario
end to end crud flow for comments
    
    Then set request body for comments using data "[VALID_COMMENT]"
 		When POST the resource to endpoint "/comments"
 		Then verify the status code is 201
		And verify response body of comments with data "[VALID_COMMENT]"
		
		When Get the resources from endpoint "/comments/[COMMENT_ID]"
		Then verify the status code is 200
		And verify response body of comments with data "[VALID_COMMENT]"
		
		When set request body for users using data "[VALID_COMMENT_UPDATE]"
		And PATCH the resource to endpoint "/comments/[COMMENT_ID]"
		Then verify the status code is 200
		And verify response body of comments with data "[VALID_COMMENT_UPDATE]"
		
		When DELETE the resource to endpoint "/comments/[COMMENT_ID]"
 		Then verify the status code is 200
 		
 		When Get the resources from endpoint "/comments"
		Then verify the status code is 200
 		And verify id "[COMMENT_ID]" is not available in response

Scenario: validate existing data when accesed using GET
		
    When Get the resources from endpoint "/comments/1"
    Then verify response body of comments with data "[VALID_COMMENT_IN_SYS]"
    
Scenario: validate lists of commensts does not have unknown comment id
		
    When Get the resources from endpoint "/comments"
    And verify id "800" is not available in response

    
Scenario: validate response after patching. Changing values of comment id  5

		When set request body for comments using data "[VALID_COMMENT_IN_SYS]"
		And PATCH the resource to endpoint "/comments/5"
		Then verify the status code is 200
		And verify response body of comments with data "[VALID_COMMENT_IN_SYS]"
		