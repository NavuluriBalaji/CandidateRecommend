document.addEventListener('DOMContentLoaded', function() {
    fetchJobListings();

    // Handle form submission for adding new job
    document.getElementById('job-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        // Gather form data
        const jobDescription = document.getElementById('job-description').value;
        const salary = document.getElementById('salary').value;
        const expectations = document.getElementById('expectations').value;
        const skills = document.getElementById('skills').value;
        const location = document.getElementById('location').value;

        // Create job object to send to backend
        const jobData = {
            jobDescription: jobDescription,
            salary: salary,
            expectations: expectations,
            skills: skills,
            location: location
        };

        // Send job data to Flask backend
        fetch('http://localhost:3000/add-job', {  // Flask endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Job added successfully") {
                alert('Job added successfully');
                fetchJobListings();  // Refresh job listings after successful addition
            } else {
                alert('Failed to add job: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

// Function to fetch job listings from the Flask API and display them
function fetchJobListings() {
    fetch('http://localhost:3000/jobs')  // Flask endpoint for getting jobs
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            jobList.innerHTML = '';  // Clear existing job listings

            data.jobs.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job-listing');
                jobElement.innerHTML = `
                    <h3>${job.jobDescription}</h3>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                    <p><strong>Expectations:</strong> ${job.expectations}</p>
                    <p><strong>Skills:</strong> ${job.skills}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                `;
                jobList.appendChild(jobElement);
            });
        })
        .catch(error => {
            console.error('Error fetching jobs:', error);
        });
}
