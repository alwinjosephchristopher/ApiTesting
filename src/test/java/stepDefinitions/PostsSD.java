package stepDefinitions;

import functionalities.Posts;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
/**
 * Step definitions are connectors or glues which keeps gherkin commands workable.
 * For modularity purpose this just calls to the functionality written in src/main/java
 * @author Alwin Joseph
 *
 */
public class PostsSD extends Posts{

	@Given("set request body for posts using data {string}")
	public void setPostRequestBody(String data) throws Exception {
		setPostsRequestBody(data);
	}
	
	@Then("verify response body of posts with data {string}")
	public void verify_response_body_of_users_with_data(String string) throws Exception {
		verifyResponseJsonString(string);
	}
	@Then("verify posts response result contains only filtered value as {string}")
	public void verifyResponseSearchResult(String string) throws Exception {
		verifySearchResults(string);
	}
}
