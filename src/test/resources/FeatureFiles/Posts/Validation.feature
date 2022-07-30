@error @errorPosts @posts @apiTesting
Feature: Validation of posts endpoint
		
 
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
		|"/posts/800"			| 404 		| "Not Found"	|
		|"/posts/5"				| 200 		| "Ok"				|
		|"/posts?uersId=5"	| 200 		| "Ok"				|

		
Scenario Outline:  provide valid, invalid informations or missing request body for create and validate expected error messages
 Method - POST
   	
   	Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for posts using data <REQUEST>
 		When POST the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT	|REQUEST 										| STATUS| MESSAGE 		|
		|"/posts"|"[VALID_POST]" 					| 201 	| "Created"		|
		|"/posts"|"" 												| 400 	| "Bad Request"|
		|"/posts"|"name :=Jo" 								| 400 	| "Bad Request"|
		|"/posts"|"body := asdgkldsg"				| 400 	| "Bad Request"|
		|"/posts"|"email := asfkal@gssv.com" | 400 	| "Bad Request"|
		|"/posts"|"[INVALID_POST]" 				| 400 	| "Bad Request"|
		
Scenario Outline:  provide valid, invalid informations or missing request body for create or edit using PUT 
and validate expected error messages - Method - PUT
   	Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for posts using data <REQUEST>
 		When PUT the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT	|REQUEST 										| STATUS| MESSAGE 		|
		|"/posts/501"|"[VALID_POST]" 			| 201 	| "Created"		|
		|"/posts"|"[VALID_POST]" 					| 201 	| "Created"		|
		|"/posts"|"" 												| 400 	| "Bad Request"|
		|"/posts"|"name :=Jo " 							| 400 	| "Bad Request"|
		|"/posts"|"body := adgsd"						| 400 	| "Bad Request"|
		|"/posts"|"email := asfkal@gssv.com" | 400 	| "Bad Request"|
		|"/posts"|"[INVALID_POST]" 				| 400 	| "Bad Request"|

Scenario Outline:  provide valid ,invalid informations or missing request body for patching posts 
and validate expected error messages Method - PATCH   
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for posts using data <REQUEST>
 		When PATCH the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT				|REQUEST 										| STATUS	| MESSAGE 		|
		|"/posts/5"		|"[VALID_POST_UPDATE]" 	| 200 		| "Ok"				|
		|"/posts/6"		|"name :=Jo" 								| 400 		| "Bad Request"				|
		|"/posts/7"		|"body := adfgf"						| 200 		| "Ok"				|
		|"/posts/8"		|"title := asfkalgssvcom" | 200 		| "Ok"				|
		|"/posts/5000"	|"email := asfkal@gssv.com" | 404			| "Not Found"	|
		|"/posts"			|"email := asfkal@gssv.com" | 404			| "Not Found"	|
		|"/posts/10"			|"[INVALID_POST]" 				| 400 	| "Bad Request"|

Scenario Outline:  Delete posts and validate responses
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
		|"/posts/800"			| 404 		| "Not Found"	|
		|"/posts/5"				| 200 		| "Ok"				|
		|"/posts/5"				| 404 		| "Not Found"	|
		|"/posts?userId=5"	| 404 		| "Not Found"				|
		
		 
 Scenario Outline:  response headers validations for posts endpoints
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		When Get the resources from endpoint <END_POINT>
		Then verify response headers <HEADERS>
		
		Examples:
		|END_POINT						| HEADERS 																					|
		|"/posts"			| "Content-Type := application/json; charset=utf-8"	|
		|"/posts/5"				|	"Content-Type := application/json; charset=utf-8"	|
		|"/posts?userId=5"	| "Content-Type := application/json; charset=utf-8"	|

 Scenario Outline:  verification of search results
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
    And set the parameters as <PARAMETERS>
		When Get the resources from endpoint <ENDPOINT>
		Then verify posts response result contains only filtered value as <PARAMETERS>
		
		Examples:
		|ENDPOINT|PARAMETERS						|
		|"/posts"|"userId := 1"			|
		|"/posts"|"id:=1"				|
		|"/posts"|"title := sunt aut facere repellat provident occaecati excepturi optio reprehenderit"	|
		|"/posts"|"[POST_FILTER]"	|
		|"/users/1/posts"|"userId := 1"			|
		|"/users/1/posts"|"id:=1"				|
		|"/users/1/posts"|"title := sunt aut facere repellat provident occaecati excepturi optio reprehenderit"	|
		|"/users/1/posts"|"[POST_FILTER]"	|

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
		|"/posts"|"userId := @$"	| 422 | "Unprocessable entity" |
		|"/posts"|"id:=*&%"			| 422 | "Unprocessable entity" |
		|"/posts"|"title := 4566@#$%^&*8"| 422 | "Unprocessable entity" |
		|"/posts"|"email := *&*"	| 422 | "Unprocessable entity" |
		|"/posts"|"address := *&*"	| 200 | "Ok"|

		
		