class Student{
    static count=0;
    NoOfStudents=++Student.count;
    constructor(name, age, phoneNumber, boardMarks)
    {
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.boardMarks=boardMarks;
    }
    eligibleForCollege()
    {
        if(this.boardMarks>40)
        {
            console.log(this.name+' is eligible for college.');
        }
        else console.log(this.name+' is not eligible for college');
    }
    eligibleForPlacements(boardM)
    {

            return (ageS)  =>
            {
              if(ageS>18&&boardM>40)
              {
                  console.log(this.name+' is eligible for placements');
              }
              else console.log(this.name+' is not eligible for placements');
            }
        }
    getNoOfStudents()
    {
        console.log(Student.count);
    }
    getName()
    {
        console.log(this.name);
    }
}
let Student1=new Student('john', 20, 12345, 45);
Student1.eligibleForCollege();
let Student2=new Student('Mary', 21, 123, 30);
Student2.eligibleForCollege();
let Student3=new Student('Shiny', 22, 123456, 20);
Student3.eligibleForCollege();
let Student4=new Student('David', 19, 1234, 70);
Student4.eligibleForCollege();
let Student5=new Student('Carla', 18, 123458, 50);
Student5.eligibleForCollege();
Student5.getNoOfStudents();

Student1.eligibleForPlacements(45)(20); 
Student2.eligibleForPlacements(30)(21); 
Student3.eligibleForPlacements(20)(22); 
Student4.eligibleForPlacements(70)(19); 
Student5.eligibleForPlacements(50)(18);
