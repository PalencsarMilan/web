const baseURL = "https://vvri.pythonanywhere.com/api";
let selectedCourseId = null;
let selectedStudentId = null;

function fetchCourses() {
  fetch(`${baseURL}/courses`)
    .then(response => response.json())
    .then(courses => {
      const coursesList = document.getElementById("courses-list");
      coursesList.innerHTML = "<h2>Kurzusok:</h2>";
      courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `<p>${course.name}</p>`;
        courseElement.addEventListener("click", () => showCourseDetails(course.id));
        coursesList.appendChild(courseElement);
      });
    })
    .catch(error => console.error("Hiba történt a kurzusok lekérésekor:", error));
}

function showCourseDetails(courseId) {
  selectedCourseId = courseId;
  selectedStudentId = null;
  fetch(`${baseURL}/courses/${courseId}`)
    .then(response => response.json())
    .then(course => {
      const courseDetails = document.getElementById("course-details");
      courseDetails.innerHTML = `<h2>${course.name}</h2>`;
      courseDetails.innerHTML += `<p>Diákok száma: ${course.students.length}</p>`;
      if (course.students.length > 0) {
        courseDetails.innerHTML += "<h3>Diákok:</h3>";
        const studentsList = document.createElement("ul");
        course.students.forEach(student => {
          const studentItem = document.createElement("li");
          studentItem.classList.add("student");
          studentItem.textContent = student.name;
          studentItem.addEventListener("click", () => showStudentDetails(student.id, courseId));
          studentsList.appendChild(studentItem);
        });
        courseDetails.appendChild(studentsList);
      }
      document.getElementById("new-student-form").style.display = "block";
      document.getElementById("edit-student-form").style.display = "none";
    })
    .catch(error => console.error("Hiba történt a kurzus részleteinek lekérésekor:", error));
}

function showStudentDetails(studentId, courseId) {
  selectedStudentId = studentId;
  fetch(`${baseURL}/students/${studentId}`)
    .then(response => response.json())
    .then(student => {
      const studentDetails = document.getElementById("student-details");
      studentDetails.innerHTML = `<h2>${student.name}</h2>`;
      studentDetails.innerHTML += `<p>Kurzus ID: ${courseId}</p>`;
      studentDetails.innerHTML += `<button onclick="editStudent(${studentId}, '${student.name}', ${courseId})">Szerkesztés</button>`;
      studentDetails.innerHTML += `<button onclick="deleteStudent(${studentId}, ${courseId})">Törlés</button>`;
    })
    .catch(error => console.error("Hiba történt a diák adatainak lekérésekor:", error));
}

function deleteStudent(studentId, courseId) {
    fetch(`${baseURL}/students/${studentId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log("Diák törölve.");
        showCourseDetails(courseId);
      } else {
        console.error("Hiba történt a diák törlése közben.");
      }
    })
    .catch(error => console.error("Hiba történt a diák törlésekor:", error));
  }

function addStudent() {
    const studentName = document.getElementById("student-name").value.trim();
    if (studentName !== "") {
      addStudentToCourse(selectedCourseId, studentName);
    } else {
      alert("Kérlek add meg a diák nevét.");
    }
  }

function addStudentToCourse(courseId, studentName) {
    fetch(`${baseURL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: studentName,
        course_id: courseId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Diák hozzáadva a kurzushoz:", data);
      showCourseDetails(courseId);
    })
    .catch(error => console.error("Hiba történt a diák hozzáadásakor:", error));
  }
  
function editStudent(studentId, oldName, courseId) {
  const newName = prompt("Add meg az új diák nevét:", oldName);
  if (newName) {
    fetch(`${baseURL}/students/${studentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newName
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Diák szerkesztve:", data);
      showCourseDetails(courseId);
    })
    .catch(error => console.error("Hiba történt a diák szerkesztésekor:", error));
  }
}

function createCourse() {
  const courseName = document.getElementById("course-name").value.trim();
  if (courseName !== "") {
    fetch(`${baseURL}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: courseName
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Új kurzus létrehozva:", data);
      fetchCourses();
    })
    .catch(error => console.error("Hiba történt az új kurzus létrehozásakor:", error));
  } else {
    alert("Kérlek add meg az új kurzus nevét.");
  }
}

document.addEventListener("DOMContentLoaded", fetchCourses);
