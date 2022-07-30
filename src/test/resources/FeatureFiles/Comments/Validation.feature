@error @errorComments @comments @apiTesting
Feature: Validation of comments endpoint
		
 
 Scenario Outline:  provide invalid informations and validate expected error messages for GET methods
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		When Get the resources from endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT						| STATUS 	| MESSAGE 		|
		|"/comments/800"			| 404 		| "Not Found"	|
		|"/comments/5"				| 200 		| "Ok"				|
		|"/comments?postId=5"	| 200 		| "Ok"				|

		
Scenario Outline:  provide valid, invalid informations or missing request body for create and validate expected error messages
 Method - POST
   	
   	Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for comments using data <REQUEST>
 		When POST the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT	|REQUEST 										| STATUS| MESSAGE 		|
		|"/comments"|"[VALID_COMMENT]" 					| 201 	| "Created"		|
		|"/comments"|"" 												| 400 	| "Bad Request"|
		|"/comments"|"name :=Jo" 								| 400 	| "Bad Request"|
		|"/comments"|"body := asdgkldsg"				| 400 	| "Bad Request"|
		|"/comments"|"email := asfkal@gssv.com" | 400 	| "Bad Request"|
		|"/comments"|"[INVALID_COMMENT]" 				| 400 	| "Bad Request"|
		
Scenario Outline:  provide valid, invalid informations or missing request body for create or edit using PUT 
and validate expected error messages - Method - PUT
   	Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for comments using data <REQUEST>
 		When PUT the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT	|REQUEST 										| STATUS| MESSAGE 		|
		|"/comments/501"|"[VALID_COMMENT]" 			| 201 	| "Created"		|
		|"/comments"|"[VALID_COMMENT]" 					| 201 	| "Created"		|
		|"/comments"|"" 												| 400 	| "Bad Request"|
		|"/comments"|"name :=Jo " 							| 400 	| "Bad Request"|
		|"/comments"|"body := adgsd"						| 400 	| "Bad Request"|
		|"/comments"|"email := asfkal@gssv.com" | 400 	| "Bad Request"|
		|"/comments"|"[INVALID_COMMENT]" 				| 400 	| "Bad Request"|

Scenario Outline:  provide valid ,invalid informations or missing request body for patching comments 
and validate expected error messages Method - PATCH   
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for comments using data <REQUEST>
 		When PATCH the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT				|REQUEST 										| STATUS	| MESSAGE 		|
		|"/comments/5"		|"[VALID_COMMENT_UPDATE]" 	| 200 		| "Ok"				|
		|"/comments/6"		|"name :=Jo" 								| 200 		| "Ok"				|
		|"/comments/7"		|"body := adfgf"						| 200 		| "Ok"				|
		|"/comments/8"		|"email := asfkal@gssv.com" | 200 		| "Ok"				|
		|"/comments/5000"	|"email := asfkal@gssv.com" | 404			| "Not Found"	|
		|"/comments"			|"email := asfkal@gssv.com" | 404			| "Not Found"	|
		|"/comments/10"			|"[INVALID_COMMENT]" 				| 400 	| "Bad Request"|

Scenario Outline:  Delete comments and validate responses
Method - DELETE
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
 		When DELETE the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT						| STATUS 	| MESSAGE 		|
		|"/comments/800"			| 404 		| "Not Found"	|
		|"/comments/5"				| 200 		| "Ok"				|
		|"/comments/5"				| 404 		| "Not Found"	|
		|"/comments?postId=5"	| 404 		| "Not Found"				|
		
		 
 Scenario Outline:  response headers validations for comments endpoints
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		When Get the resources from endpoint <END_POINT>
		Then verify response headers <HEADERS>
		
		Examples:
		|END_POINT						| HEADERS 																					|
		|"/comments"			| "Content-Type := application/json; charset=utf-8"	|
		|"/comments/5"				|	"Content-Type := application/json; charset=utf-8"	|
		|"/comments?postId=5"	| "Content-Type := application/json; charset=utf-8"	|

 Scenario Outline:  verification of search results
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
    And set the parameters as <PARAMETERS>
		When Get the resources from endpoint <ENDPOINT>
		Then verify comments response result contains only filtered value as <PARAMETERS>
		
		Examples:
		|ENDPOINT|PARAMETERS						|
		|"/comments"|"postId := 1"			|
		|"/comments"|"id:=1"				|
		|"/comments"|"name := id labore ex et quam laborum"	|
		|"/comments"|"email := Eliseo@gardner.biz"	|
		|"/comments"|"[COMMENT_FILTER]"	|
		|"/posts/1/comments"|"postId := 1"			|
		|"/posts/1/comments"|"id:=1"				|
		|"/posts/1/comments"|"name := id labore ex et quam laborum"	|
		|"/posts/1/comments"|"email := Eliseo@gardner.biz"	|
		|"/posts/1/comments"|"[COMMENT_FILTER]"	|

 Scenario Outline:  verification error messgaes for invalid search parameters
expecting 422 - Unprocessable entity
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
    And set the parameters as <PARAMETERS>
		When Get the resources from endpoint <ENDPOINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|ENDPOINT		|PARAMETERS			| STATUS | MESSAGE |
		|"/comments"|"postId := @$"	| 422 | "Unprocessable entity" |
		|"/comments"|"id:=*&%"			| 422 | "Unprocessable entity" |
		|"/comments"|"name := 4566@#$%^&*8"| 422 | "Unprocessable entity" |
		|"/comments"|"email := *&*"	| 422 | "Unprocessable entity" |
		|"/comments"|"address := *&*"	| 200 | "Ok"|

		
		