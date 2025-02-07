/**
 * Function retrieves location from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students
* @author SantosAndrewz <https://github.com/SantosAndrewz/>
* @returns
*/
export default function getListStudentIds(students) {
 if (students instanceof Array) {
   return students.map((student) => student.location === city);
 }
 return [];
}
