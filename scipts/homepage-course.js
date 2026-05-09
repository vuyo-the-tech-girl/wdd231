const courses = [
{ subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, completed: true },
{ subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
{ subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: false },
{ subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
{ subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
{ subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

const courseCards = document.getElementById("course-cards");
const totalCredits = document.getElementById("total-credits");

function displayCourses(filteredCourses) {
courseCards.innerHTML = "";
filteredCourses.forEach(course => {
const card = document.createElement("div");
card.classList.add("course-card");
if (course.completed) card.classList.add("completed");
card.innerHTML = `<h3>${course.subject} ${course.number}</h3><p>${course.title}</p><p>${course.credits} credits</p>`;
courseCards.appendChild(card);
});

const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
totalCredits.textContent = total;
}

document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("wdd").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === 'WDD')));
document.getElementById("cse").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === 'CSE')));

displayCourses(courses);