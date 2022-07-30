package frameworkFunctionality;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * Excel Utility
 * @author Alwin Joseph
 * Used to work with excel using Apache POI.
 * 
 */
public class ExcelUtility {
	private FileInputStream file;
	private XSSFWorkbook workbook;
	private XSSFSheet sheet;
	/**
	 * Constructor initializes the path and file input stream.
	 * Opens workbook and first sheet in the workbook
	 * @param path
	 * @throws UserException
	 */
	public ExcelUtility(String path) throws UserException {
		try {
			file = new FileInputStream(new File(path));
			workbook = new XSSFWorkbook(file);
			sheet = workbook.getSheetAt(0);
		} catch (FileNotFoundException e) {
			throw new UserException("Excel Test Data file not found at path " + path);
		} catch (IOException e) {
			throw new UserException(
					"Not able to read Excel Test Data file at path " + path + ". Error - " + e.getLocalizedMessage());
		}
	}
	/**
	 * Gets list of string value from row which matches with the given key. Key should match the first cell of any row
	 * @param key
	 * @return
	 * @throws UserException
	 */
	public List<String> getValueForKey(String key) throws UserException {
		// Key should not be empty
		if (key == null || key.trim().length() == 0)
			throw new UserException("Key is Empty, that needs to be fetched from test Data excel.");
		
		// Data formatter and formula evaluator to convert any cell type to string
		DataFormatter objDefaultFormat = new DataFormatter();
		FormulaEvaluator objFormulaEvaluator = new XSSFFormulaEvaluator(workbook);
		
		// Output array list of columns of matching row
		List<String> output = new ArrayList<>();
		try {
			//Iterator to iterate through rows
			Iterator<Row> rows = sheet.rowIterator();

			while (rows.hasNext()) {
				Row row = rows.next();
				Cell cell = row.getCell(0);
				objFormulaEvaluator.evaluate(cell); // This will evaluate the cell, And any type of cell will return
													// string value
				String cellValueStr = objDefaultFormat.formatCellValue(cell, objFormulaEvaluator);

				if (cellValueStr.equalsIgnoreCase(key)) {
					//Iterator to iterate through column cells
					Iterator<Cell> cells = row.cellIterator();
					while (cells.hasNext()) {
						cell = cells.next();
						objFormulaEvaluator.evaluate(cell); // This will evaluate the cell, And any type of cell will
															// return string value
						cellValueStr = objDefaultFormat.formatCellValue(cell, objFormulaEvaluator);
						output.add(cellValueStr);
					}
					// break the loop when key is matched.
					break;
				}

			}
		} catch (Exception e) {
			throw new UserException("Error getting data from Excel. " + e.getLocalizedMessage());
		} finally {
			try {
				// Finally close all varibles. Garbage collector
				sheet = null;
				workbook.close();
				file.close();
			} catch (IOException e) {
			}
		}
		return output;
	}
	
}
