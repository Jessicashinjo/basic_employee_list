
function Employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Clinician(specialty, firstName, lastName) {
  Employee.call(this, firstName, lastName);
  this.specialty = specialty;
}

Clinician.prototype = new Employee();

function Operations(division, firstName, lastName) {
  Employee.call(this, firstName, lastName);
  this.division = division;
}

Operations.prototype = new Employee();




function Department(){

}

Department.prototype = new Employee ();

function FieldOffice(city) {
  this.city = city;
}

FieldOffice.prototype = new Department()

function Headquarters(city) {
  this.city = city;
}

Headquarters.prototype = new Department();

var amyJones = {
                  item1: new Clinician("Neurologist", "Amy", "Jones"),
                  item2: new FieldOffice("Nashville")
                }



var lillyBlack = {
                    item1: new Clinician("anesthesiologist", "Lilly", "Black"),
                    item2: new Headquarters("Houston")
                  }

var johnDoe = {
                item1: new Operations("Neurologist", "John", "Doe"),
                item2: new FieldOffice("San Diego")
              }


var jordanGin = {
                  item1: new Operations("Neurologist", "Jordan", "Gin"),
                  item2: new Headquarters("Houston")
                }


console.dir(amyJones);
console.dir(lillyBlack);
console.dir(johnDoe);
console.dir(jordanGin);

// Every employee should have a first and last name.
// Every department should have a name.
// Every employee should be assigned to either the FieldOffice or Headquarters department. This is a has-a relationship.
// Clinician employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
// Operations employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
// Every field office should have a unique city.
// Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// Output the following information to the console for each employee.
// Full name
// Department name
// Expertise/responsibility


// Deborah Harris works as a clinician, in the Baltimore field office, and is a phrenologist.
// Michael Slazinski works in operations, in headquarters, and is responsible for compliance.
// Margaret Johnson works as a clinician, in the Indianapolis field office, and is a physical therapist.






