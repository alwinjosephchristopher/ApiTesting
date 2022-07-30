package functionalities;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;

import com.fasterxml.jackson.databind.ObjectMapper;

import frameworkFunctionality.UserException;
import frameworkFunctionality.Utility;
import io.restassured.path.json.JsonPath;
/**
 * This class files contains functionalities that works with or specific to /comments endpoint
 * @author Alwin Joseph
 * This extends ReusableAPIFunction as it has basic functionalites for API Testings
 */
public class Comments extends ReusableAPIFunction {
	/**
	 * This function helps to generate json request string for comments endpoint.
	 * It needs input in the form of key := value. Does not validate schema, just forms json request for any given inputs.  
	 * @param data
	 * @return
	 * @throws UserException
	 */
	@SuppressWarnings("unchecked")
	private JSONObject getCommentPayload(String data) throws UserException {
		HashMap<String, String> dataMap = Utility.parseString(data);
		JSONObject commentJsonObject = new JSONObject();
		for (String key : dataMap.keySet()) {
			// if key is postId or id it should be integer. But for negative cases we can send String 
			// hence try to parse and if error then added as string
			if (key.equals("postId") || key.equals("id")) {
				try {
					commentJsonObject.put(key, Integer.parseInt(dataMap.get(key)));
				} catch (Exception e) {
					commentJsonObject.put(key, dataMap.get(key));
				}
				continue;
			}

			commentJsonObject.put(key, dataMap.get(key));
		}
		return commentJsonObject;
	}
	
	/**
	 * This sets the generated comment request body in REST ASSSURED
	 * @param data
	 * @throws UserException
	 */
	public void setCommentsRequestBody(String data) throws UserException {
		if(request ==null)
			throw new UserException("Calling request before establishing the connection");
		String jsonString = getCommentPayload(data).toString();
		System.out.println(jsonString);
		request.body(jsonString);
	}
	
	/**
	 * Function verifies the response json with expected json data
	 * @param data
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public void verifyResponseJsonString(String data) throws Exception {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		// expected data by user for a request made
		JSONObject exp = getCommentPayload(data);
		// response from endpoint
		String actJson = response.asString();
		commentId = JsonPath.from(actJson).get("id")+"";
		//user might not have expected id as its created by application, hence just add id from response to expected json
		// it makes easier to compare 2 jsons
		exp.put("id", Integer.parseInt(commentId));
		
		String jsonStringExpected = exp.toString();
		// jackson object mapper to conver json string to json objects
		ObjectMapper om = new ObjectMapper();
		
		assertEquals(om.readValue(actJson,Map.class),om.readValue(jsonStringExpected,Map.class));
	}
	
	/**
	 * Function to verify the search results using filter parameters in GET requests.
	 * Verifies whether results just contains the filtered data. If not gathers all failed resources and throws error
	 * @param filters
	 * @throws Exception
	 */
	public void verifySearchResults(String filters) throws Exception {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		HashMap<String, String> dataMap = Utility.parseString(filters);
		
		String failed = null;
		String actJson = response.asString();
		
		ObjectMapper om = new ObjectMapper();
		ArrayList<Map<String,Object>> results = om.readValue(actJson, ArrayList.class);
		int i = 1;
		for(Map<String,Object> result : results) {
			
			for(String key : dataMap.keySet()) {
				String act;
				Object obj = result.get(key);
				if(obj instanceof Integer) {
					act = result.get(key)+"";
				}else {
					act = (String) result.get(key);
				}
				String exp = dataMap.get(key);
				if(!act.equals(exp)) {
					if(failed == null)
						failed = "For json map at location "+i+", key '"+key+"' mismatches. Actual: "+act+" | Expected: "+exp;
					else
						failed = failed + "\nFor json map at location "+i+", key '"+key+"' mismatches. Actual: "+act+" | Expected: "+exp;
				}
			}
			i++;
		}
		if(failed!=null)
			throw new UserException("Search results validation failed for below results.\n"+failed);
	}

}
