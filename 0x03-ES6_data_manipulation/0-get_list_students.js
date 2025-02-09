/**
 * Function retrieves a list of students
 * @author SantosAndrewz <https://github.com/SantosAndrewz/>
 * @returns {{ id: number, firstName: string, location: string}[]}
*/
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
