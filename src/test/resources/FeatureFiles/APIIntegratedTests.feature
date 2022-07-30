@apiTesting
Feature: Integration test
  I want to use this template for my feature file

 Scenario: sunny path with all API's
 From user to creating posts to making comments on posts
 		Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
    When Get the resources from endpoint "/users/1"
		Then verify the status code is 200
		And verify response body of users with data "[VALID_USER_IN_SYS]"
    
    Then set request body for posts using data "[VALID_POST]"
 		When POST the resource to endpoint "/users/1/posts"
 		Then verify the status code is 201
		And verify response body of users with data "[VALID_POST]"
		
		Then set request body for comments using data "[VALID_COMMENT]"
 		When POST the resource to endpoint "/comments"
 		Then verify the status code is 201
		And verify response body of comments with data "[VALID_COMMENT]"

 Scenario:  Try accessing comments of other posts. That is access comment of post 1 from post 2.
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		When Get the resources from endpoint "/posts/2/comment/1"
		Then verify the status code is 404
		And verify the status text is "Not Found"

 Scenario:  Try accessing posts of other users. That is access posts of user 1 from user 2.
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		When Get the resources from endpoint "/users/2/posts/1"
		Then verify the status code is 404
		And verify the status text is "Not Found"
