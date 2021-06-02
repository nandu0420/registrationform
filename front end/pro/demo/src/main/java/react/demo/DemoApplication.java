package react.demo;
import java.util.Date;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.dat
@Document(collection="student")
public class DemoApplication {
	@Id
	private String id;
	private String name;
	private List<String> CLASS;
	private List<String> division;
	private Date DoB;
	private String Gender;
	 public demoApplication(  Int id, String name, String CLASS, String division ,Date doB ,String Gender)
	 {
		 this.id=id;
		 this.name=name;
		 this.CLASS=CLASS;
		 this.division=division;
		 this.DoB=DoB;
		 this.Gender=Gender;


	 }
	 public int getID(){
		 return id;
	 }
	 public void setID(int id){
		 this.id=id;

	 }
	 public String getname()
	 {
		 return name;
	 }
	 public String setname(String name)
	 {
		 this.name=name;
	 }
	 public String getCLASS()
	 {
		 return CLASS;
		
	 }
	 public String setCLASS(String CLASS)
	 {
		 this.CLASS=CLASS;

	 }
	 public String getdivision()
	 {
		 return division;
	 }
	 public String setdivision(String divisionString)
	 {
		 this.division=division;
	 }
	 public String getGender() {  
        return Gender;  
    }  
    public void setGender(String Gender) {  
        this.Gender = Gender; 
		} 
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
