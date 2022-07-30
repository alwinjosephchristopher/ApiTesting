package hooks;


import io.cucumber.java.After;
import io.cucumber.java.Before;

/**
 * Hooks file will be executed before every cucumber scenario
 * @author Alwin Joseph
 *Now I havent added any functionalities here, later this can be extended with methods to add resources specific to each scenarios
 */
public class Hooks {
	
	
	@Before
    public void beforeScenarioStart(){
        System.out.println("-----------------Start of Scenario-----------------");
    }	
	
	
	@After
    public void afterScenarioFinish(){
        System.out.println("-----------------End of Scenario-----------------");
        
    }	
	

}