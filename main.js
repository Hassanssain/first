function calculateMarks() {
    const studentName = document.getElementById('studentName').value;
    const fatherName = document.getElementById('fatherName').value;
    const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);

    if (isNaN(obtainedMarks) || isNaN(totalMarks) || obtainedMarks > totalMarks) {
        alert('Please enter valid marks');
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = '';
    let remarks = '';

    if (percentage >= 90) {
        grade = 'A+';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'Satisfactory';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Needs Improvement';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Mark Sheet</h3>
        <p><strong>Student's Name:</strong> ${studentName}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Remarks:</strong> ${remarks}</p>
    `;
}