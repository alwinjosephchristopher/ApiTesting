package frameworkFunctionality;

import java.io.File;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.Reportable;

/**
 * Report Builder helps to build report from cucumber json files
 * @author Alwin Joseph
 *
 */
public class ReportBuilder {

	public final String INPUT_DIR = System.getProperty("user.dir") + "/target/cucumber-reports";
	public String outputDir = System.getProperty("user.dir") + "/report";
	public String projectName = "API Testing Assignment";
    
	/**
	 * Function generates report
	 * @throws UserException
	 */
    public void generateReport() throws UserException {
    	// get list of json files
    	List<String> jsonFiles = getJsonFiles();
    	// make report output directories
    	File output = new File(outputDir);
    	output.mkdirs();
    	PropertiesFileHandler prop = new PropertiesFileHandler("config.properties");
    	
    	// set configuration for reports.
    	Configuration config = new Configuration(output, projectName);
    	// set classification information for report from config files
    	config.addClassifications("BASE URI", prop.getValue("BASE_URI")); 
    	config.addClassifications("OS", prop.getValue("OS")); 
    	config.addClassifications("BUILD", prop.getValue("BUILD")); 
    	
    	// generate report
    	net.masterthought.cucumber.ReportBuilder reportBuilder = new net.masterthought.cucumber.ReportBuilder(jsonFiles, config);
    	Reportable re = reportBuilder.generateReports();
    	
    	System.out.println("--------Cucumber Test Scenario Stats--------");
    	System.out.println("*** Passed Scenarios : "+re.getPassedScenarios());
    	System.out.println("*** Failed Scenarios : "+re.getFailedScenarios());
    	System.out.println("*** Total Scenarios : "+(re.getFailedScenarios()+re.getPassedScenarios()));
    	System.out.println("--------------------------------------------");
    	
    	// rename output report folder with timestamp
    	File outputFolder = new File(outputDir+"/cucumber-html-reports");
    	String timeStamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Timestamp(new Date().getTime()));
    	
    	File newFolder = new File(outputDir+"/cucumber-html-reports"+timeStamp);
    	outputFolder.renameTo(newFolder);
    	
    }

    /**
     * helps to retrieve list of json files
     * @return
     * @throws UserException
     */
   private List<String> getJsonFiles() throws UserException{
	   List<String> jsonFiles = new ArrayList<>();
	   try {
		   File folder = new File(INPUT_DIR);
		   File[] listOfFiles = folder.listFiles();
		   
		   for(File file : listOfFiles) {
			   if(file.isFile() && file.getName().endsWith(".json")) {
				   jsonFiles.add(file.getAbsolutePath());
			   }
		   }
		   
	   }catch(Exception e) {
		   throw new UserException("Error occured when fetching Json Files. "+e.getLocalizedMessage());
	   }
	   return jsonFiles;
   }

  
}
