package stepDefinitions;


import frameworkFunctionality.UserException;
import functionalities.ReusableAPIFunction;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
/**
 * Step definitions are connectors or glues which keeps gherkin commands workable.
 * For modularity purpose this just calls to the functionality written in src/main/java
 * @author Alwin Joseph
 *
 */
public class ReusableSD extends ReusableAPIFunction{
		
	@Given("I access the URL {string}")
	public void i_access_the_URL(String uri) throws Exception {
		accessURI(uri);
	}
	
	@Given("set the headers as")
	public void set_the_headers_as(String docString) throws UserException {
		setHeaders(docString);
	}
	
	@Given("set the parameters as")
	public void set_the_parameters_as(String docString) throws UserException {
		setParameters(docString);
	}
	
	@Given("set the parameters as {string}")
	public void set_the_parameters_asString(String docString) throws UserException {
		setParameters(docString);
	}

	@When("Get the resources from endpoint {string}")
	public void access_the_endpoint(String endpoint) throws UserException {
	    hitTheEndPoint("GET", endpoint);
	}
	
	@When("POST the resource to endpoint {string}")
	public void post(String endpoint) throws UserException {
	    hitTheEndPoint("POST", endpoint);
	}
	
	@When("PUT the resource to endpoint {string}")
	public void put(String endpoint) throws UserException {
	    hitTheEndPoint("GET", endpoint);
	}
	
	@When("PATCH the resource to endpoint {string}")
	public void patch(String endpoint) throws UserException {
	    hitTheEndPoint("GET", endpoint);
	}

	@When("DELETE the resource to endpoint {string}")
	public void delete(String endpoint) throws UserException {
	    hitTheEndPoint("DELETE", endpoint);
	}
	
	@Then("verify the status code is {int}")
	public void verify_the_status_code_is(Integer status) throws UserException {
	    validateStatusCode(status);
	}
	
	@Then("verify the status text is {string}")
	public void verify_the_status_text_is(String status) throws UserException {
	    validateStatusText(status);
	}
	
	@Then("verify response headers {string}")
	public void veriifyResponseHeaders(String headers) throws UserException {
		validateResponseHeaders(headers);
	}

	@Then("Validate the Json Schema for {string} endpoint")
	public void validateEndPointSchema(String endpoint)throws UserException  {
		validateSchema(endpoint);
	}
	
	@Then("Validate the Json Schema for {string} collection endpoint")
	public void validateCollectionEndPointSchema(String endpoint)throws UserException  {
		validateSchema(endpoint+"collection");
	}
	
	@Then("verify id {string} is not available in response")
	public void verify_id_is_not_available_in_response(String id) throws Exception {
		verifyIDNotInResult(id);
	}



}
