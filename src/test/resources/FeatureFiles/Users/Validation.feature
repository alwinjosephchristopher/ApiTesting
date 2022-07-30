@error @errorComments @users @apiTesting
Feature: Validation of users endpoint
		
 
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
		|"/users/800"			| 404 		| "Not Found"	|
		|"/users/5"				| 200 		| "Ok"				|
		|"/users?id=5"	| 200 		| "Ok"				|

Scenario Outline:  provide valid, invalid informations or missing request body for create and validate expected error messages
 Method - POST
   	
   	Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for users using data <REQUEST>
 		When POST the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT	|REQUEST 										| STATUS| MESSAGE 		|
		|"/users"|"[VALID_USER]" 					| 201 	| "Created"		|
		|"/users"|"" 												| 400 	| "Bad Request"|
		|"/users"|"name :=Jo" 								| 400 	| "Bad Request"|
		|"/users"|"body := asdgkldsg"				| 400 	| "Bad Request"|
		|"/users"|"email := asfkal@gssv.com" | 400 	| "Bad Request"|
		|"/users"|"[INVALID_USER]" 				| 400 	| "Bad Request"|
		
Scenario Outline:  provide valid, invalid informations or missing request body for create or edit using PUT 
and validate expected error messages - Method - PUT
   	Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for users using data <REQUEST>
 		When PUT the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT	|REQUEST 										| STATUS| MESSAGE 		|
		|"/users/501"|"[VALID_USER]" 			| 201 	| "Created"		|
		|"/users"|"[VALID_USER]" 					| 201 	| "Created"		|
		|"/users"|"" 												| 400 	| "Bad Request"|
		|"/users"|"name :=Jo " 							| 400 	| "Bad Request"|
		|"/users"|"body := adgsd"						| 400 	| "Bad Request"|
		|"/users"|"email := asfkal@gssv.com" | 400 	| "Bad Request"|
		|"/users"|"[INVALID_USER]" 				| 400 	| "Bad Request"|

Scenario Outline:  provide valid ,invalid informations or missing request body for patching users 
and validate expected error messages Method - PATCH   
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		And set request body for users using data <REQUEST>
 		When PATCH the resource to endpoint <END_POINT>
		Then verify the status code is <STATUS>
		And verify the status text is <MESSAGE>
		
		Examples:
		|END_POINT				|REQUEST 										| STATUS	| MESSAGE 		|
		|"/users/5"		|"[VALID_USER_UPDATE]" 	| 200 		| "Ok"				|
		|"/users/6"		|"name :=Jo" 								| 200 		| "Ok"				|
		|"/users/7"		|"body := adfgf"						| 200 		| "Ok"				|
		|"/users/8"		|"email := asfkal@gssv.com" | 200 		| "Ok"				|
		|"/users/5000"	|"email := asfkal@gssv.com" | 404			| "Not Found"	|
		|"/users"			|"email := asfkal@gssv.com" | 404			| "Not Found"	|
		|"/users/10"			|"[INVALID_USER]" 				| 400 	| "Bad Request"|

Scenario Outline:  Delete users and validate responses
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
		|"/users/800"			| 404 		| "Not Found"	|
		|"/users/5"				| 200 		| "Ok"				|
		|"/users/5"				| 404 		| "Not Found"	|
		|"/users?id=5"	| 200 		| "Ok"				|
		
		 
 Scenario Outline:  response headers validations for users endpoints
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
		When Get the resources from endpoint <END_POINT>
		Then verify response headers <HEADERS>
		
		Examples:
		|END_POINT						| HEADERS 																					|
		|"/users"			| "Content-Type := application/json; charset=utf-8"	|
		|"/users/5"				|	"Content-Type := application/json; charset=utf-8"	|
		|"/users?id=5"	| "Content-Type := application/json; charset=utf-8"	|

 Scenario Outline:  verification of search results
    
    Given I access the URL "BASE_URI"
    And set the headers as
    """
    	Content-type := application/json
    """
    And set the parameters as <PARAMETERS>
		When Get the resources from endpoint <ENDPOINT>
		Then verify users response result contains only filtered value as <PARAMETERS>
		
		Examples:
		|ENDPOINT|PARAMETERS						|
		|"/users"|"id:=1"				|
		|"/users"|"name := Leanne Graham"	|
		|"/users"|"email := Sincere@april.biz"	|
		|"/users"|"address.street := Kulas Light"	|
		|"/users"|"[USER_FILTER]"	|

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
		|"/users"|"id:=*&%"			| 422 | "Unprocessable entity" |
		|"/users"|"name := 4566@#$%^&*8"| 422 | "Unprocessable entity" |
		|"/users"|"email := *&*"	| 422 | "Unprocessable entity" |
		|"/users"|"address := *&*"	| 200 | "Ok"|

		
		