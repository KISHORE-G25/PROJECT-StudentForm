function saveStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;

  const table = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const ageCell = newRow.insertCell(1);
  const genderCell = newRow.insertCell(2);
  const courseCell = newRow.insertCell(3);
  const emailCell = newRow.insertCell(4);
  const actionCell = newRow.insertCell(5);

  nameCell.textContent = name;
  ageCell.textContent = age;
  genderCell.textContent = gender;
  courseCell.textContent = course;
  emailCell.textContent = email;
  actionCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  document.getElementById("studentForm").reset();
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
