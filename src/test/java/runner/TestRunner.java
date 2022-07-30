package runner;

import org.junit.runner.RunWith;
import frameworkFunctionality.ReportBuilder;
import frameworkFunctionality.UserException;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
/**
 * 
 * @author Alwin Joseph
 *Test Runner to execute the tests. 
 *IT will execute with Junit cucumber options.
 *features - path of cucumber feature files
 *glue -  needs the path of step definitions and any hooks file for before and after scenarios
 *tags-  to call or execute specific cucumber tests
 *plugin - to create cucumber reports. we need cucumber json report to build actual fancy report
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/FeatureFiles",
        glue = {"stepDefinitions","hooks"},
        tags = "@apiTesting",
        plugin = {"pretty","html:target/cucumber-reports","json:target/cucumber-reports/CucumberTestReport.json"}, strict = true)

public class TestRunner {

	/**
	 * This function calls to report builder to create report from last cucumber json reports.
	 * This will be executed after all tests or scenarios
	 * @throws UserException
	 */
	@org.junit.AfterClass
	public static void tearDown() throws UserException {
		ReportBuilder reportBuilder = new ReportBuilder();
		reportBuilder.generateReport();
	}
	
}
