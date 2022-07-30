package frameworkFunctionality;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * Utility file to have list of utility function that helps in testing.
 * @author Alwin Joseph
 *
 */
public class Utility {
	
	private static final String testDataFile = System.getProperty("user.dir")+"/src/test/resources/TestData/TestData.xlsx";

	/**
	 * 
	 * @param input is in pattern "key := value | key1 := value1.." may be in multiple lines
	 * input also can be as [KEY] - this key should match a row key in Test data excel
	 * @return
	 * @throws UserException 
	 */
	public static HashMap<String,String> parseString(String input) throws UserException{
		HashMap<String,String> output = new HashMap<>();
		// if input contains multiple lines, change it to single line split with pipe '|' symbol
		if(input.contains("\n")) {
			input.trim().replaceAll("\n", "|");
		}
		List<String> inputs;
		// check if string matches format [<KEY>], then retrieve data from excel
		if(input.matches("^\\[[a-zA-Z_]+\\]$")) {
			ExcelUtility excel = new ExcelUtility(testDataFile);
			inputs = excel.getValueForKey(input.replaceAll("\\[", "").replaceAll("\\]", ""));
		}else
			inputs = Arrays.asList(input.split("\\|"));
		
		// finally split each data as key, value pair. Expected data should be as <Key := value>
		for(String inp : inputs) {
			if(inp.contains(":="))
				output.put(inp.split(":=")[0].trim(), inp.split(":=")[1].trim());
		}
		return output;		
		
	}
	
}
