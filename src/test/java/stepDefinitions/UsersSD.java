package stepDefinitions;

import frameworkFunctionality.UserException;
import functionalities.Users;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
/**
 * Step definitions are connectors or glues which keeps gherkin commands workable.
 * For modularity purpose this just calls to the functionality written in src/main/java
 * @author Alwin Joseph
 *
 */
public class UsersSD extends Users{

	@Given("set request body for users using data {string}")
	public void setUserRequstBody(String data) throws Exception {
		setUsersRequestBody(data);
	}
	
	@Then("verify response body of users with data {string}")
	public void verify_response_body_of_users_with_data(String string) throws Exception {
		verifyResponseJsonString(string);
	}
	
	@Then("verify users response result contains only filtered value as {string}")
	public void verifyResponseSearchResult(String string) throws Exception {
		verifySearchResults(string);
	}
}
