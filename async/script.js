const baseURL = "https://vvri.pythonanywhere.com/api";
let selectedCourseId = null;
let selectedStudentId = null;

async function fetchCourses() {
  try{
    const response=await fetch(`${baseURL}/courses`)
    const courses =await response.json()
      const coursesList = document.getElementById("courses-list");
      coursesList.innerHTML = "<h2>Kurzusok:</h2>";
      courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `<p>${course.name}</p>`;
        courseElement.addEventListener("click", () => showCourseDetails(course.id));
        coursesList.appendChild(courseElement);
      });
    }
  catch(error){console.error("Hiba történt a kurzusok lekérésekor:", error);}
  }
  
  

async function showCourseDetails(courseId) {
  try {
  const response = await fetch(`${baseURL}/courses/${courseId}`)
  const course = await response.json()
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
    }
  
    catch(error) { console.error("Hiba történt a kurzus részleteinek lekérésekor:", error);}
}

async function showStudentDetails(studentId, courseId) {
  try {
  const response = await fetch(`${baseURL}/students/${studentId}`)
  const student = await response.json()
      const studentDetails = document.getElementById("student-details");
      studentDetails.innerHTML = `<h2>${student.name}</h2>`;
      studentDetails.innerHTML += `<p>Kurzus ID: ${courseId}</p>`;
      studentDetails.innerHTML += `<button onclick="editStudent(${studentId}, '${student.name}', ${courseId})">Szerkesztés</button>`;
      studentDetails.innerHTML += `<button onclick="deleteStudent(${studentId}, ${courseId})">Törlés</button>`;
    }
  
    catch(error) { console.error("Hiba történt a diák adatainak lekérésekor:", error);}
}

async function deleteStudent(studentId, courseId) {
  try{
    const response = await fetch(`${baseURL}/students/${studentId}`,
    {
      method: 'DELETE'
    })
      if (response.ok) {
        console.log("Diák törölve.");
        showCourseDetails(courseId);
      } else {
        console.error("Hiba történt a diák törlése közben.");
      }
    }
    catch(error) {console.error("Hiba történt a diák törlésekor:", error);}
  }

async function addStudent() {
    const studentName = document.getElementById("student-name").value.trim();
    if (studentName !== "") {
      addStudentToCourse(selectedCourseId, studentName);
    } else {
      alert("Kérlek add meg a diák nevét.");
    }
  }

async function addStudentToCourse(courseId, studentName) {
  try{
    const response = await fetch(`${baseURL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: studentName,
        course_id: courseId
      })
    })
      console.log("Diák hozzáadva a kurzushoz:", data);
      showCourseDetails(courseId);
    }
    catch(error) {console.error("Hiba történt a diák hozzáadásakor:", error);
  }
}
  
async function editStudent(studentId, oldName, courseId) {
  try {
  const name = prompt("Add meg az új diák nevét:", oldName);
  if (newName) {
    const response = await fetch(`${baseURL}/students/${studentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newName
      })
    })
    const data = await response.json()
      console.log("Diák szerkesztve:", data);
      showCourseDetails(courseId);
    }
  }
    catch(error) {console.error("Hiba történt a diák szerkesztésekor:", error);}
}

async function createCourse() {
  try{
  const courseName = document.getElementById("course-name").value.trim();
  if (courseName !== "") {
    const response = await fetch(`${baseURL}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: courseName
      })
    })
    const data = await response.json()
      console.log("Új kurzus létrehozva:", data);
      fetchCourses();}
  
   else {
    alert("Kérlek add meg az új kurzus nevét.");
  }
}
  catch(error) {console.error("Hiba történt az új kurzus létrehozásakor:", error);}

}

document.addEventListener("DOMContentLoaded", fetchCourses);
