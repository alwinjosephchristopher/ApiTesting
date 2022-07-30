package functionalities;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import frameworkFunctionality.UserException;
import frameworkFunctionality.Utility;
import io.restassured.path.json.JsonPath;

/**
 * This class files contains functionalities that works with or specific to /users endpoint
 * @author Alwin Joseph
 * This extends ReusableAPIFunction as it has basic functionalites for API Testings
 */
public class Users extends ReusableAPIFunction {
		/**
		 * This function helps to generate json request string for users endpoint.
		 * It needs input in the form of key := value. Does not validate schema, just forms json request for any given inputs.
		 * since user json containes multi layer objects. they should be given as key1.key2. key3 := value.
		 * eg. address.zipcode := l77DB := address.geo.lat := -76.26. this is parsed as
		 * { address :{ 
		 * 			zipcode : l77DB,
		 * 			geo: {
		 * 				lat : -76.26
		 * 			}
		 * 		}
		 * }  
		 * @param data
		 * @return
		 * @throws UserException
		 */
	@SuppressWarnings({ "unchecked" })
	private JSONObject getUserPayload(String data) throws UserException {
		HashMap<String, String> dataMap = Utility.parseString(data);
		JSONObject usersJsonObject = new JSONObject();

		for (String key : dataMap.keySet()) {

			if (!key.contains(".")) {
				if (key.equals("id")) {
					try {
						usersJsonObject.put(key, Integer.parseInt(dataMap.get(key)));
					} catch (Exception e) {
						usersJsonObject.put(key, dataMap.get(key));
					}
					continue;
				}
				usersJsonObject.put(key, dataMap.get(key));
				continue;
			}
			String[] innerObjs = key.split("\\.");
			if (innerObjs.length == 2) {
				JSONObject firstLayer = (JSONObject) usersJsonObject.getOrDefault(innerObjs[0], new JSONObject());
				firstLayer.put(innerObjs[1], dataMap.get(key));
				usersJsonObject.put(innerObjs[0], firstLayer);
			} else if (innerObjs.length == 3) {
				JSONObject firstLayer = (JSONObject) usersJsonObject.getOrDefault(innerObjs[0], new JSONObject());
				JSONObject secLayer = (JSONObject) firstLayer.getOrDefault(innerObjs[1], new JSONObject());
				secLayer.put(innerObjs[2], dataMap.get(key));
				firstLayer.put(innerObjs[1], secLayer);
				usersJsonObject.put(innerObjs[0], firstLayer);
			}
		}

		return usersJsonObject;
	}
	
	/**
	 * This sets the generated user request body in REST ASSSURED
	 * @param data
	 * @throws UserException
	 */
	public void setUsersRequestBody(String data) throws UserException {
		if(request ==null)
			throw new UserException("Calling request before establishing the connection");
		String jsonString = getUserPayload(data).toString();
		request.body(jsonString);
	}

	/**
	 * Function verifies the response json with expected json data
	 * @param data
	 * @throws Exception
	 */
	public void verifyResponseJsonString(String data) throws Exception {
		if(response ==null)
			throw new UserException("Calling response variable before requesting to the endpoint");
		JSONObject exp = getUserPayload(data);
		String actJson = response.asString();
		userId = JsonPath.from(actJson).get("id") + "";
		exp.put("id", Integer.parseInt(userId));

		String jsonStringExpected = exp.toString();

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
		ArrayList<Map<String, Object>> results = om.readValue(actJson, ArrayList.class);

		int i = 1;
		for (Map<String, Object> result : results) {

			for (String key : dataMap.keySet()) {
				String act;
				String exp = dataMap.get(key);

				String[] innerObjs = key.split("\\.");
				if (innerObjs.length == 2) {
					Map<String, Object> temp = (Map<String, Object>) result.get(innerObjs[0]);
					act = (String) temp.get(innerObjs[1]);
				} else if (innerObjs.length == 3) {
					Map<String, Object> temp = (Map<String, Object>) result.get(innerObjs[0]);
					Map<String, Object> tempInner = (Map<String, Object>) temp.get(innerObjs[1]);
					act = (String) tempInner.get(innerObjs[2]);
				} else {
					Object obj = result.get(key);
					if (obj instanceof Integer) {
						act = result.get(key) + "";
					} else {
						act = (String) result.get(key);
					}
				}

				if (!act.equals(exp)) {
					if (failed == null)
						failed = "For json map at location " + i + ", key '" + key + "' mismatches. Actual: " + act
								+ " | Expected: " + exp;
					else
						failed = failed + "\nFor json map at location " + i + ", key '" + key + "' mismatches. Actual: "
								+ act + " | Expected: " + exp;
				}
			}
			i++;
		}
		if (failed != null)
			throw new UserException("Search results validation failed for below results.\n" + failed);
	}
}
