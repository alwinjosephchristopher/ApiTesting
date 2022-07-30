$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/APIIntegratedTests.feature");
formatter.feature({
  "name": "Integration test",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.scenario({
  "name": "sunny path with all API\u0027s",
  "description": " From user to creating posts to making comments on posts",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_USER_IN_SYS]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users/1/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of comments with data \"[VALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try accessing comments of other posts. That is access comment of post 1 from post 2.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/2/comment/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try accessing posts of other users. That is access posts of user 1 from user 2.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/2/posts/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Comments/E2E.feature");
formatter.feature({
  "name": "E2E testing of Comments endpoint",
  "description": "Create, read, update and delete a comment and validate data",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sunny Path Scenario",
  "description": "end to end crud flow for comments",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    },
    {
      "name": "@sceanrio1"
    }
  ]
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of comments with data \"[VALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments/[COMMENT_ID]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027200\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 200(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/E2E.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify response body of comments with data \"[VALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "set request body for users using data \"[VALID_COMMENT_UPDATE]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/[COMMENT_ID]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify response body of comments with data \"[VALID_COMMENT_UPDATE]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/comments/[COMMENT_ID]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify id \"[COMMENT_ID]\" is not available in response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_id_is_not_available_in_response(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate existing data when accesed using GET",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of comments with data \"[VALID_COMMENT_IN_SYS]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate lists of commensts does not have unknown comment id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify id \"800\" is not available in response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_id_is_not_available_in_response(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate response after patching. Changing values of comment id  5",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT_IN_SYS]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/5\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of comments with data \"[VALID_COMMENT_IN_SYS]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Maps do not match for key:name actual:vero eaque aliquid doloribus et culpa expected:id labore ex et quam laborum\r\n\tat org.testng.Assert.fail(Assert.java:110)\r\n\tat org.testng.Assert.assertEquals(Assert.java:1967)\r\n\tat org.testng.Assert.assertEquals(Assert.java:1925)\r\n\tat functionalities.Comments.verifyResponseJsonString(Comments.java:61)\r\n\tat stepDefinitions.CommentsSD.verify_response_body_of_users_with_data(CommentsSD.java:16)\r\n\tat ✽.verify response body of comments with data \"[VALID_COMMENT_IN_SYS]\"(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/E2E.feature:55)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Comments/Validation.feature");
formatter.feature({
  "name": "Validation of comments endpoint",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "Get the resources from endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/comments/800\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/comments/5\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/comments?postId\u003d5\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments?postId\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for comments using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "POST the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"[VALID_COMMENT]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"name :\u003dJo\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"body :\u003d asdgkldsg\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"[INVALID_COMMENT]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"name :\u003dJo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"body :\u003d asdgkldsg\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[INVALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for comments using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "PUT the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/comments/501\"",
        "\"[VALID_COMMENT]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"[VALID_COMMENT]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"name :\u003dJo \"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"body :\u003d adgsd\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"[INVALID_COMMENT]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments/501\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"name :\u003dJo \"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"body :\u003d adgsd\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[INVALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for comments using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "PATCH the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/comments/5\"",
        "\"[VALID_COMMENT_UPDATE]\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/comments/6\"",
        "\"name :\u003dJo\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/comments/7\"",
        "\"body :\u003d adfgf\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/comments/8\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/comments/5000\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/comments/10\"",
        "\"[INVALID_COMMENT]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT_UPDATE]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"name :\u003dJo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/6\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"body :\u003d adfgf\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/7\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/8\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/5000\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:76)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching comments",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for comments using data \"[INVALID_COMMENT]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/10\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:76)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete comments and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "DELETE the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/comments/800\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/comments/5\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/comments/5\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/comments?postId\u003d5\"",
        "404",
        "\"Not Found\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete comments and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/comments/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:97)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete comments and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/comments/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete comments and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/comments/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:97)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete comments and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/comments?postId\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "response headers validations for comments endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "Get the resources from endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify response headers \u003cHEADERS\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "HEADERS"
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    },
    {
      "cells": [
        "\"/comments/5\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    },
    {
      "cells": [
        "\"/comments?postId\u003d5\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "response headers validations for comments endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "response headers validations for comments endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "response headers validations for comments endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments?postId\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set the parameters as \u003cPARAMETERS\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get the resources from endpoint \u003cENDPOINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \u003cPARAMETERS\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ENDPOINT",
        "PARAMETERS"
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"postId :\u003d 1\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"id:\u003d1\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"name :\u003d id labore ex et quam laborum\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"email :\u003d Eliseo@gardner.biz\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"[COMMENT_FILTER]\""
      ]
    },
    {
      "cells": [
        "\"/posts/1/comments\"",
        "\"postId :\u003d 1\""
      ]
    },
    {
      "cells": [
        "\"/posts/1/comments\"",
        "\"id:\u003d1\""
      ]
    },
    {
      "cells": [
        "\"/posts/1/comments\"",
        "\"name :\u003d id labore ex et quam laborum\""
      ]
    },
    {
      "cells": [
        "\"/posts/1/comments\"",
        "\"email :\u003d Eliseo@gardner.biz\""
      ]
    },
    {
      "cells": [
        "\"/posts/1/comments\"",
        "\"[COMMENT_FILTER]\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"postId :\u003d 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"postId :\u003d 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"id:\u003d1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"name :\u003d id labore ex et quam laborum\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"name :\u003d id labore ex et quam laborum\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"email :\u003d Eliseo@gardner.biz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"email :\u003d Eliseo@gardner.biz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"[COMMENT_FILTER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"[COMMENT_FILTER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"postId :\u003d 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"postId :\u003d 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"id:\u003d1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"name :\u003d id labore ex et quam laborum\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"name :\u003d id labore ex et quam laborum\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"email :\u003d Eliseo@gardner.biz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"email :\u003d Eliseo@gardner.biz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"[COMMENT_FILTER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify comments response result contains only filtered value as \"[COMMENT_FILTER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set the parameters as \u003cPARAMETERS\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get the resources from endpoint \u003cENDPOINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ENDPOINT",
        "PARAMETERS",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"postId :\u003d @$\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"id:\u003d*\u0026%\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"name :\u003d 4566@#$%^\u0026*8\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"email :\u003d *\u0026*\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/comments\"",
        "\"address :\u003d *\u0026*\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"postId :\u003d @$\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:157)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d*\u0026%\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:157)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"name :\u003d 4566@#$%^\u0026*8\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:157)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"email :\u003d *\u0026*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/Validation.feature:157)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"address :\u003d *\u0026*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Comments/schemaValidation.feature");
formatter.feature({
  "name": "Comments Schema and Status Code validation",
  "description": "Verify json schema and status codes for comments endpoints of Jsonplaceholder api",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes of Comments endpoint using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes of comments collection endpoint using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when accessed from comments of postid for GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when accessed comments from query parameters for GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set the parameters as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tpostId :\u003d 1"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when new comment is made using POST",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/comments\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when new comment is made using PUT. Hence expecting status code 201",
  "description": "\t\tas per standards. 501 id is not available, so when PUT is called to it, they should create new object ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments/501\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/schemaValidation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when comment is edited using PUT",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/comments/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when comment is modified using PATCH",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for comments using data \"[VALID_COMMENT]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommentsSD.setCommentRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/comments/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for comments endpoint when comment is deleted using DELETE",
  "description": "when 200 is returned, we expected deleted content to be returned",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Comments"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@comments"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/comments/3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"comments\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nResponse body doesn\u0027t match expectation.\nExpected: The content to match the given JSON schema.\nerror: object has missing required properties ([\"body\",\"email\",\"id\",\"name\",\"postId\"])\n    level: \"error\"\n    schema: {\"loadingURI\":\"#\",\"pointer\":\"\"}\n    instance: {\"pointer\":\"\"}\n    domain: \"validation\"\n    keyword: \"required\"\n    required: [\"body\",\"email\",\"id\",\"name\",\"postId\"]\n    missing: [\"body\",\"email\",\"id\",\"name\",\"postId\"]\n\n  Actual: {}\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat functionalities.ReusableAPIFunction.validateSchema(ReusableAPIFunction.java:148)\r\n\tat stepDefinitions.ReusableSD.validateEndPointSchema(ReusableSD.java:74)\r\n\tat ✽.Validate the Json Schema for \"comments\" endpoint(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Comments/schemaValidation.feature:75)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Posts/E2E.feature");
formatter.feature({
  "name": "E2E testing of posts endpoint",
  "description": "Create, read, update and delete a posts and validate data",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2ePosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": " these commands sets base url and headers.",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sunny Path Scenario",
  "description": " end to end crud flow for posts",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2ePosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of posts with data \"[VALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/[POST_ID]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027200\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 200(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/E2E.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify response body of posts with data \"[VALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST_UPDATE]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/[POST_ID]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify response body of posts with data \"[VALID_POST_UPDATE]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/posts/[POST_ID]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify id \"[POST_ID]\" is not available in response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_id_is_not_available_in_response(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": " these commands sets base url and headers.",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate existing data when accesed using GET",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2ePosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of posts with data \"[VALID_POST_IN_SYS]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": " these commands sets base url and headers.",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate lists of commensts does not have unknown post id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2ePosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify id \"800\" is not available in response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_id_is_not_available_in_response(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": " these commands sets base url and headers.",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate response after patching. Changing values of post id  5",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2ePosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST_IN_SYS]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/5\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of posts with data \"[VALID_POST_IN_SYS]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Maps do not match for key:title actual:nesciunt quas odio expected:sunt aut facere repellat provident occaecati excepturi optio reprehenderit\r\n\tat org.testng.Assert.fail(Assert.java:110)\r\n\tat org.testng.Assert.assertEquals(Assert.java:1967)\r\n\tat org.testng.Assert.assertEquals(Assert.java:1925)\r\n\tat functionalities.Posts.verifyResponseJsonString(Posts.java:58)\r\n\tat stepDefinitions.PostsSD.verify_response_body_of_users_with_data(PostsSD.java:16)\r\n\tat ✽.verify response body of posts with data \"[VALID_POST_IN_SYS]\"(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/E2E.feature:56)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Posts/Validation.feature");
formatter.feature({
  "name": "Validation of posts endpoint",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "Get the resources from endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/posts/800\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/posts/5\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/posts?uersId\u003d5\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts?uersId\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for posts using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "POST the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"[VALID_POST]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"name :\u003dJo\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"body :\u003d asdgkldsg\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"[INVALID_POST]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"name :\u003dJo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"body :\u003d asdgkldsg\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[INVALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for posts using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "PUT the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/posts/501\"",
        "\"[VALID_POST]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"[VALID_POST]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"name :\u003dJo \"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"body :\u003d adgsd\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"[INVALID_POST]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts/501\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"name :\u003dJo \"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"body :\u003d adgsd\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[INVALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for posts using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "PATCH the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/posts/5\"",
        "\"[VALID_POST_UPDATE]\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/posts/6\"",
        "\"name :\u003dJo\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/posts/7\"",
        "\"body :\u003d adfgf\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/posts/8\"",
        "\"title :\u003d asfkalgssvcom\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/posts/5000\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/posts/10\"",
        "\"[INVALID_POST]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST_UPDATE]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"name :\u003dJo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/6\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:76)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"body :\u003d adfgf\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/7\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"title :\u003d asfkalgssvcom\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/8\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/5000\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:76)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching posts",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for posts using data \"[INVALID_POST]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/10\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:76)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete posts and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "DELETE the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/posts/800\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/posts/5\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/posts/5\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/posts?userId\u003d5\"",
        "404",
        "\"Not Found\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete posts and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/posts/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:97)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete posts and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/posts/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete posts and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/posts/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:97)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete posts and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/posts?userId\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "response headers validations for posts endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "Get the resources from endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify response headers \u003cHEADERS\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "HEADERS"
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    },
    {
      "cells": [
        "\"/posts/5\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    },
    {
      "cells": [
        "\"/posts?userId\u003d5\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "response headers validations for posts endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "response headers validations for posts endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "response headers validations for posts endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts?userId\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set the parameters as \u003cPARAMETERS\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get the resources from endpoint \u003cENDPOINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \u003cPARAMETERS\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ENDPOINT",
        "PARAMETERS"
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"userId :\u003d 1\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"id:\u003d1\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"title :\u003d sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"[POST_FILTER]\""
      ]
    },
    {
      "cells": [
        "\"/users/1/posts\"",
        "\"userId :\u003d 1\""
      ]
    },
    {
      "cells": [
        "\"/users/1/posts\"",
        "\"id:\u003d1\""
      ]
    },
    {
      "cells": [
        "\"/users/1/posts\"",
        "\"title :\u003d sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
      ]
    },
    {
      "cells": [
        "\"/users/1/posts\"",
        "\"[POST_FILTER]\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"userId :\u003d 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"userId :\u003d 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"id:\u003d1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"title :\u003d sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"title :\u003d sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"[POST_FILTER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"[POST_FILTER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"userId :\u003d 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"userId :\u003d 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"id:\u003d1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"title :\u003d sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"title :\u003d sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"[POST_FILTER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify posts response result contains only filtered value as \"[POST_FILTER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set the parameters as \u003cPARAMETERS\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get the resources from endpoint \u003cENDPOINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ENDPOINT",
        "PARAMETERS",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"userId :\u003d @$\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"id:\u003d*\u0026%\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"title :\u003d 4566@#$%^\u0026*8\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"email :\u003d *\u0026*\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/posts\"",
        "\"address :\u003d *\u0026*\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"userId :\u003d @$\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:155)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d*\u0026%\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:155)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"title :\u003d 4566@#$%^\u0026*8\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:155)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"email :\u003d *\u0026*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/Validation.feature:155)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorPosts"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"address :\u003d *\u0026*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Posts/schemaValidation.feature");
formatter.feature({
  "name": "Posts Schema and Status Code validation",
  "description": "Verify json schema and status codes for posts endpoints of Jsonplaceholder api",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes of Posts endpoint using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes of Posts collection endpoint using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when accessed posts from userid using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when accessed posts from query parameters for GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set the parameters as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tuserId :\u003d 1"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when new posts is made using POST",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when new posts is made using PUT. Hence expecting status code 201",
  "description": "\t\tas per standards. 800 id is not available, so when PUT is called to it, they should create new object ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/schemaValidation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when posts is edited using PUT",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/posts/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when posts is modified using PATCH",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_POST]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/posts/3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for posts endpoint when posts is deleted using DELETE",
  "description": "when 200 is returned, we expected deleted content to be returned",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaPosts"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@posts"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/posts/4\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"posts\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nResponse body doesn\u0027t match expectation.\nExpected: The content to match the given JSON schema.\nerror: object has missing required properties ([\"body\",\"id\",\"title\",\"userId\"])\n    level: \"error\"\n    schema: {\"loadingURI\":\"#\",\"pointer\":\"\"}\n    instance: {\"pointer\":\"\"}\n    domain: \"validation\"\n    keyword: \"required\"\n    required: [\"body\",\"id\",\"title\",\"userId\"]\n    missing: [\"body\",\"id\",\"title\",\"userId\"]\n\n  Actual: {}\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat functionalities.ReusableAPIFunction.validateSchema(ReusableAPIFunction.java:148)\r\n\tat stepDefinitions.ReusableSD.validateEndPointSchema(ReusableSD.java:74)\r\n\tat ✽.Validate the Json Schema for \"posts\" endpoint(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Posts/schemaValidation.feature:75)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Users/E2E.feature");
formatter.feature({
  "name": "E2E testing of users endpoint",
  "description": "Create, read, update and delete an user",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eUsers"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sunny Path Scenario",
  "description": " end to end crud flow for users",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eUsers"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/[USER_ID]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027200\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 200(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/E2E.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER_UPDATE]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/[USER_ID]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_USER_UPDATE]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/users/[USER_ID]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify id \"[USER_ID]\" is not available in response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_id_is_not_available_in_response(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate existing data when accesed using GET",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eUsers"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_USER_IN_SYS]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate lists of commensts does not have unknown post id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eUsers"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify id \"800\" is not available in response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_id_is_not_available_in_response(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate response after patching. Changing values of post id  5",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@e2e"
    },
    {
      "name": "@e2eUsers"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for posts using data \"[VALID_USER_IN_SYS]\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.PostsSD.setPostRequestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/5\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body of users with data \"[VALID_USER_IN_SYS]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verify_response_body_of_users_with_data(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Maps do not match for key:name actual:Chelsey Dietrich expected:Leanne Graham\r\n\tat org.testng.Assert.fail(Assert.java:110)\r\n\tat org.testng.Assert.assertEquals(Assert.java:1967)\r\n\tat org.testng.Assert.assertEquals(Assert.java:1925)\r\n\tat functionalities.Users.verifyResponseJsonString(Users.java:76)\r\n\tat stepDefinitions.UsersSD.verify_response_body_of_users_with_data(UsersSD.java:17)\r\n\tat ✽.verify response body of users with data \"[VALID_USER_IN_SYS]\"(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/E2E.feature:54)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Users/Validation.feature");
formatter.feature({
  "name": "Validation of users endpoint",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "Get the resources from endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/users/800\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/users/5\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/users?id\u003d5\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide invalid informations and validate expected error messages for GET methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users?id\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for users using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "POST the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"[VALID_USER]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"name :\u003dJo\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"body :\u003d asdgkldsg\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"[INVALID_USER]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"name :\u003dJo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"body :\u003d asdgkldsg\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create and validate expected error messages",
  "description": " Method - POST",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[INVALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027201\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for users using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "PUT the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/users/501\"",
        "\"[VALID_USER]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"[VALID_USER]\"",
        "201",
        "\"Created\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"name :\u003dJo \"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"body :\u003d adgsd\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "400",
        "\"Bad Request\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"[INVALID_USER]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users/501\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"name :\u003dJo \"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"body :\u003d adgsd\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid, invalid informations or missing request body for create or edit using PUT",
  "description": "and validate expected error messages - Method - PUT",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[INVALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set request body for users using data \u003cREQUEST\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "PATCH the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "REQUEST",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/users/5\"",
        "\"[VALID_USER_UPDATE]\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/users/6\"",
        "\"name :\u003dJo\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/users/7\"",
        "\"body :\u003d adfgf\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/users/8\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/users/5000\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"email :\u003d asfkal@gssv.com\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/users/10\"",
        "\"[INVALID_USER]\"",
        "400",
        "\"Bad Request\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER_UPDATE]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"name :\u003dJo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/6\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"body :\u003d adfgf\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/7\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/8\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/5000\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"email :\u003d asfkal@gssv.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:75)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "provide valid ,invalid informations or missing request body for patching users",
  "description": "and validate expected error messages Method - PATCH   ",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set request body for users using data \"[INVALID_USER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/10\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027400\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 400(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:75)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Delete users and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "DELETE the resource to endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/users/800\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/users/5\"",
        "200",
        "\"Ok\""
      ]
    },
    {
      "cells": [
        "\"/users/5\"",
        "404",
        "\"Not Found\""
      ]
    },
    {
      "cells": [
        "\"/users?id\u003d5\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete users and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/users/800\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:96)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete users and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/users/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete users and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/users/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027404\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 404(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:96)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Not Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete users and validate responses",
  "description": "Method - DELETE",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/users?id\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027200\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 200(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:96)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "response headers validations for users endpoints",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "Get the resources from endpoint \u003cEND_POINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify response headers \u003cHEADERS\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "END_POINT",
        "HEADERS"
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    },
    {
      "cells": [
        "\"/users/5\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    },
    {
      "cells": [
        "\"/users?id\u003d5\"",
        "\"Content-Type :\u003d application/json; charset\u003dutf-8\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "response headers validations for users endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "response headers validations for users endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "response headers validations for users endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users?id\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response headers \"Content-Type :\u003d application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.veriifyResponseHeaders(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set the parameters as \u003cPARAMETERS\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get the resources from endpoint \u003cENDPOINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify users response result contains only filtered value as \u003cPARAMETERS\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ENDPOINT",
        "PARAMETERS"
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"id:\u003d1\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"name :\u003d Leanne Graham\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"email :\u003d Sincere@april.biz\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"address.street :\u003d Kulas Light\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"[USER_FILTER]\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify users response result contains only filtered value as \"id:\u003d1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"name :\u003d Leanne Graham\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify users response result contains only filtered value as \"name :\u003d Leanne Graham\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"email :\u003d Sincere@april.biz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify users response result contains only filtered value as \"email :\u003d Sincere@april.biz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"address.street :\u003d Kulas Light\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify users response result contains only filtered value as \"address.street :\u003d Kulas Light\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification of search results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"[USER_FILTER]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify users response result contains only filtered value as \"[USER_FILTER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.verifyResponseSearchResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.step({
  "name": "set the parameters as \u003cPARAMETERS\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get the resources from endpoint \u003cENDPOINT\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify the status code is \u003cSTATUS\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the status text is \u003cMESSAGE\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ENDPOINT",
        "PARAMETERS",
        "STATUS",
        "MESSAGE"
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"id:\u003d*\u0026%\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"name :\u003d 4566@#$%^\u0026*8\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"email :\u003d *\u0026*\"",
        "422",
        "\"Unprocessable entity\""
      ]
    },
    {
      "cells": [
        "\"/users\"",
        "\"address :\u003d *\u0026*\"",
        "200",
        "\"Ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"id:\u003d*\u0026%\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:151)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"name :\u003d 4566@#$%^\u0026*8\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:151)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"email :\u003d *\u0026*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027200\u0027 differes from expected code \u0027422\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 422(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/Validation.feature:151)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the status text is \"Unprocessable entity\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verification error messgaes for invalid search parameters",
  "description": "expecting 422 - Unprocessable entity",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@error"
    },
    {
      "name": "@errorComments"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the parameters as \"address :\u003d *\u0026*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_asString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status text is \"Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_text_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Users/schemaValidation.feature");
formatter.feature({
  "name": "Users Schema and Status Code validation",
  "description": "Verify json schema and status codes for users endpoints of Jsonplaceholder api",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes of users endpoint using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/users/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes of users collection endpoint using GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for users endpoint when accessed users from query parameters for GET method",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set the parameters as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tid :\u003d 1"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_parameters_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the resources from endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.access_the_endpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" collection endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateCollectionEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for users endpoint when new users is made using POST",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "POST the resource to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.post(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for users endpoint when new users is made using PUT. Hence expecting status code 201",
  "description": "\t\tas per standards. 15 id is not available, so when PUT is called to it, they should create new object ",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users/15\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "frameworkFunctionality.UserException: Assertion Failed: Response status code \u0027404\u0027 differes from expected code \u0027201\u0027 \r\n\tat functionalities.ReusableAPIFunction.validateStatusCode(ReusableAPIFunction.java:108)\r\n\tat stepDefinitions.ReusableSD.verify_the_status_code_is(ReusableSD.java:59)\r\n\tat ✽.verify the status code is 201(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/schemaValidation.feature:47)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for users endpoint when users is edited using PUT",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PUT the resource to endpoint \"/users/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.put(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for users endpoint when users is modified using PATCH",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "set request body for users using data \"[VALID_USER]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersSD.setUserRequstBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PATCH the resource to endpoint \"/users/3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.patch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Runs before every scenarios.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the URL \"BASE_URI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.i_access_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set the headers as",
  "keyword": "And ",
  "doc_string": {
    "value": "\tContent-type :\u003d application/json"
  }
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.set_the_headers_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify schema and status codes for users endpoint when users is deleted using DELETE",
  "description": "\twhen 200 is returned, we expected deleted content to be returned",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@schemaUsers"
    },
    {
      "name": "@SchemaValidation"
    },
    {
      "name": "@users"
    },
    {
      "name": "@apiTesting"
    }
  ]
});
formatter.step({
  "name": "DELETE the resource to endpoint \"/users/4\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.delete(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.verify_the_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Json Schema for \"users\" endpoint",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.ReusableSD.validateEndPointSchema(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nResponse body doesn\u0027t match expectation.\nExpected: The content to match the given JSON schema.\nerror: object has missing required properties ([\"address\",\"company\",\"email\",\"id\",\"name\",\"phone\",\"username\",\"website\"])\n    level: \"error\"\n    schema: {\"loadingURI\":\"#\",\"pointer\":\"\"}\n    instance: {\"pointer\":\"\"}\n    domain: \"validation\"\n    keyword: \"required\"\n    required: [\"address\",\"company\",\"email\",\"id\",\"name\",\"phone\",\"username\",\"website\"]\n    missing: [\"address\",\"company\",\"email\",\"id\",\"name\",\"phone\",\"username\",\"website\"]\n\n  Actual: {}\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor161.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor160.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat functionalities.ReusableAPIFunction.validateSchema(ReusableAPIFunction.java:148)\r\n\tat stepDefinitions.ReusableSD.validateEndPointSchema(ReusableSD.java:74)\r\n\tat ✽.Validate the Json Schema for \"users\" endpoint(file:///C:/Users/Alwin%20Joseph/eclipse-workspace/ApiTestingAssignment/src/test/resources/FeatureFiles/Users/schemaValidation.feature:69)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});