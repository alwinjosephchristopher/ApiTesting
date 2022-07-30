package functionalities;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.fasterxml.jackson.databind.ObjectMapper;

import frameworkFunctionality.PropertiesFileHandler;
import frameworkFunctionality.UserException;
import frameworkFunctionality.Utility;
import io.restassured.RestAssured;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

/**
 * @author Alwin Joseph
 * Reusable API testing functionalities. 
 * Few can be reused for any APIS. some are Application specific.
 * This is tha abstract class should be extended by all class created for testing any endpoints
 */
public abstract class ReusableAPIFunction {
	/**
	 * These static variable will be alive for an entire scneario. and can be used with any files that extends them with their package.
	 * cannot be accessed from test package
	 */
	protected static Response response;
	protected static RequestSpecification request;
	protected static String jsonString;
	protected static String userId;
	protected static String postId;
	protected static String commentId;

	/**
	 * Function to access URL or sets rest assured with given url.
	 * request variable will be birthed here
	 * @param urlKey
	 * @throws UserException
	 */
	public void accessURI(String urlKey) throws UserException {
		PropertiesFileHandler prop = new PropertiesFileHandler("config.properties");
		RestAssured.baseURI = prop.getValue(urlKey);
		request = RestAssured.given();
	}

	/**
	 * sets the headers for the request.
	 * @param docs
	 * @throws UserException
	 */
	public void setHeaders(String docs) throws UserException {
		if(request ==null)
			throw new UserException("Calling request before establishing the connection");
		HashMap<String, String> map = Utility.parseString(docs);
		request.headers(map);
		map = null;
	}

	/**
	 * sets the parameters for any endpoints
	 * @param docs
	 * @throws UserException
	 */
	public void setParameters(String docs) throws UserException {
		if(request ==null)
			throw new UserException("Calling request before establishing the connection");
		HashMap<String, String> map = Utility.parseString(docs);
		request.params(map);
	}

	/**
	 * Hits the api with given methods.
	 * Response variable is birthed here
	 * @param method
	 * @param endpoint
	 * @throws UserException
	 */
	public void hitTheEndPoint(String method, String endpoint) throws UserException {
		if(request ==null)
			throw new UserException("Calling request before establishing the connection");
		// checks if user gives input in [KEY] to get variables oor id from runtime. and sets them appropriately
		Pattern pattern = Pattern.compile("\\[[A-Z_]*\\]");
		Matcher matcher = pattern.matcher(endpoint);
		String errors = "";
		while (matcher.find()) {
			String m = matcher.group().trim();
			switch (m) {
			case "[USER_ID]":
				endpoint = endpoint.replace(m, userId);
				break;
			case "[COMMENT_ID]":
				endpoint = endpoint.replace(m, commentId);
				break;
			case "[POST_ID]":
				endpoint = endpoint.replace(m, postId);
				break;
			default:
				errors = errors + "| invalid string in endpoint " + m;
			}
		}
		if (errors.length() != 0)
			throw new UserException("Errors in parsing Endpoint with runtime values. " + errors);

		System.out.println("Hitting the endpoint - " + endpoint);

		// calls specific request based on http method
		switch (method.toLowerCase().replaceAll(" ", "")) {
		case "get":
			response = request.get(endpoint);
			break;
		case "put":
			response = request.put(endpoint);
			break;
		case "post":
			response = request.post(endpoint);
			break;
		case "patch":
			response = request.patch(endpoint);
			break;
		case "delete":
			response = request.delete(endpoint);
			break;
		default:
			throw new UserException("Invalid Input for HTTP Method - " + method);

		}

	}

	/**
	 * validate status codes of the response. 
	 * @param code
	 * @throws UserException
	 */
	public void validateStatusCode(Integer code) throws UserException {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		if (response.statusCode() != code)
			throw new UserException("Assertion Failed: Response status code '" + response.statusCode()
					+ "' differes from expected code '" + code + "' ");
	}
	
	/**
	 * Validates status text of response
	 * @param text
	 * @throws UserException
	 */
	public void validateStatusText(String text) throws UserException {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		if (response.getStatusLine().equals(text))
			throw new UserException("Assertion Failed: Response status Text '" + response.getStatusLine()
					+ "' differes from expected status text '" + text + "' ");
	}

	/**
	 * helps to validate schema for users or posts or comments collection or single resource responses.
	 * Schema structure is stored in src/main/resources/schemas
	 * @param endpoint
	 * @throws UserException
	 */
	public void validateSchema(String endpoint) throws UserException {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		String path = System.getProperty("user.dir") + "/src/main/resources/schemas/";
		switch (endpoint.trim().toLowerCase()) {
		case "users":
			path += "user.json";
			break;
		case "userscollection":
			path += "userCollection.json";
			break;
		case "comments":
			path += "comment.json";
			break;
		case "commentscollection":
			path += "commentCollection.json";
			break;
		case "posts":
			path += "post.json";
			break;
		case "postscollection":
			path += "postCollection.json";
			break;
		default:
			throw new UserException("Invalid endpoint to validate schema - " + endpoint);
		}
		
		JsonSchemaValidator validator = JsonSchemaValidator.matchesJsonSchema(new File(path));
		response.then().assertThat().body(validator);
	}
	
	/**
	 * Helps to validate response headers, based on expected headers from tester
	 * @param expHeaders
	 * @throws UserException
	 */
	public void validateResponseHeaders(String expHeaders) throws UserException {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		HashMap<String,String> expHeadersMap = Utility.parseString(expHeaders);
		String failed = null;
		
		for(String head : expHeadersMap.keySet()) {
			String act = response.header(head);
			if(act==null)
				if(failed ==null)
					failed = "Header '"+head+"' is not available in response";
				else
					failed = failed + "\nHeader '"+head+"' is not available in response";
			
			if(!act.equals(expHeadersMap.get(head))) {
				if(failed == null)
					failed = "Header '"+head+"' is mismatched expected: "+expHeadersMap.get(head)+" | Actual: "+act;
				else
					failed = failed+"\nHeader '"+head+"' is mismatched expected: "+expHeadersMap.get(head)+" | Actual: "+act;
				
			}
		}
		
		if(failed !=null)
			throw new UserException("Following response header validation failed. "+failed);
	}
	
	/**
	 * verifies whether the search result does not contains the id.
	 * Basically used when we delete a resource and try to check they are not available when we try to get all present resources.
	 * @param id
	 * @throws Exception
	 */
	public void verifyIDNotInResult(String id) throws Exception {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		
		Pattern pattern = Pattern.compile("\\[[A-Z_]*\\]");
		Matcher matcher = pattern.matcher(id);
		String errors = "";
		while (matcher.find()) {
			String m = matcher.group().trim();
			switch (m) {
			case "[USER_ID]":
				id = id.replace(m, userId);
				break;
			case "[COMMENT_ID]":
				id = id.replace(m, commentId);
				break;
			case "[POST_ID]":
				id = id.replace(m, postId);
				break;
			default:
				errors = errors + "| invalid string in ID " + m;
			}
		}
		if (errors.length() != 0)
			throw new UserException("Errors in parsing ID with runtime values. " + errors);
		
		String failed = null;
		String actJson = response.asString();
		
		ObjectMapper om = new ObjectMapper();
		ArrayList<Map<String,Object>> results = om.readValue(actJson, ArrayList.class);
		int i = 1;
		for(Map<String,Object> result : results) {
			String act = result.get("id")+"";
			if(act.equals(id)) {
				if(failed == null)
					failed = "For json map at location "+i+", key 'ID' matches. Actual: "+act+" | Expected: "+id;
				else
					failed = failed + "\nFor json map at location "+i+", key 'ID' matches. Actual: "+act+" | Expected: "+id;
			}
			i++;
		}
		if(failed!=null)
			throw new UserException("Results validation for NOT containing ID failed for below results.\n"+failed);
	
	}

}
