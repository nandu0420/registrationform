package regstd;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="student")
public class stud {

	@Id
	private String id;
	private String name;
	private List<String> CLASS;
	private List<String> division;
	private Date DoB;
	private String Gender;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getCLASS() {
		return CLASS;
	}
	public void setCLASS(List<String> cLASS) {
		CLASS = cLASS;
	}
	public List<String> getDivision() {
		return division;
	}
	public void setDivision(List<String> division) {
		this.division = division;
	}
	public Date getDoB() {
		return DoB;
	}
	public void setDoB(Date doB) {
		DoB = doB;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
}
