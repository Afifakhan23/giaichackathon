"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateResume() {
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const skill3 = document.getElementById('skill3').value;
    // Collect the resume data
    const resumeData = {
        name,
        email,
        phone,
        degree,
        institution,
        year: parseInt(year),
        jobTitle,
        company,
        duration,
        skills: [skill1, skill2, skill3]
    };
    // Display the resume
    displayResume(resumeData);
    // Hide the form
    const form = document.getElementById('resume-form');
    form.style.display = 'none';
    // Show the resume display
    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.style.display = 'block';
}
function displayResume(data) {
    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <h3>Education</h3>
        <p>${data.degree}, ${data.institution} (${data.year})</p>
        <h3>Experience</h3>
        <p>${data.jobTitle} at ${data.company} (${data.duration})</p>
        <h3>Skills</h3>
        <ul>
            <li>${data.skills[0]}</li>
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
        </ul>
    `;
}
