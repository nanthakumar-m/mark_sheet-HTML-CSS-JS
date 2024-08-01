// Sample data
const marksData = [
  {
    code: "DFS102",
    subject: "Fire Services and Technology",
    internal: 30,
    external: 70,
  },
  { code: "DFS103", subject: "Industrial Safety", internal: 40, external: 60 },
  {
    code: "DFS104",
    subject: "Fire Drills & Safety",
    internal: 35,
    external: 65,
  },
  {
    code: "DFS105",
    subject: "Environmental Safety",
    internal: 28,
    external: 72,
  },
  {
    code: "DFS106",
    subject: "Disaster Management",
    internal: 25,
    external: 75,
  },
  {
    code: "DFS107",
    subject: "Construction Safety",
    internal: 45,
    external: 55,
  },
];

// Calculate total, percentage, and grade
let totalMarks = 0;
let maxMarks = 600;
let grade = "";
let result = "Pass";
const marksTable = document.getElementById("marksTable");

marksData.forEach((mark) => {
  const total = mark.internal + mark.external;
  totalMarks += total;

  // Calculate grade
  let subjectGrade = "";
  if (total >= 90) subjectGrade = "A+";
  else if (total >= 80) subjectGrade = "A";
  else if (total >= 70) subjectGrade = "B";
  else if (total >= 60) subjectGrade = "C";
  else if (total >= 50) subjectGrade = "D";
  else {
    subjectGrade = "F";
    result = "Fail";
  }

  // Add row to the table
  marksTable.innerHTML += `
        <tr>
            <td>${mark.code}</td>
            <td>${mark.subject}</td>
            <td>${mark.internal}</td>
            <td>${mark.external}</td>
            <td>${total}</td>
            <td>${subjectGrade}</td>
            <td>${result}</td>
        </tr>
    `;
});

// Calculate overall percentage and grade
const percentage = (totalMarks / maxMarks) * 100;
if (percentage >= 90) grade = "A+";
else if (percentage >= 80) grade = "A";
else if (percentage >= 70) grade = "B";
else if (percentage >= 60) grade = "C";
else if (percentage >= 50) grade = "D";
else grade = "F";

// Update HTML with calculated values
document.getElementById("totalMarks").innerText = totalMarks;
document.getElementById("percentage").innerText = `${percentage.toFixed(2)}%`;
document.getElementById("grade").innerText = grade;
document.getElementById("result").innerText = result;

// Set other student details (use real data in production)
document.getElementById("candidateName").innerText = "John Doe";
document.getElementById("registrationNumber").innerText = "123456";
document.getElementById("enrollmentNumber").innerText = "654321";
document.getElementById("dateOfResult").innerText = "May 2023";
