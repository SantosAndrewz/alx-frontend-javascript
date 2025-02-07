/**
 * Function retrieves ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students
* @author SantosAndrewz <https://github.com/SantosAndrewz/>
* @returns
*/
export default function getListStudentsIdaSum(students) {
 if (students instanceof Array) {
   return students.reduce((sum, student) => sum + student.id, 0);
 }
 return 0;
}
