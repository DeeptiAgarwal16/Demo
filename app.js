let jobsData = [
    { title: "Software Engineer", company: "Google", location: "California, USA", experience: "2+ years", link: "https://careers.google.com/jobs/results/" },
    { title: "Data Scientist", company: "Amazon", location: "Seattle, USA", experience: "3+ years", link: "https://www.amazon.jobs/en/job_categories/data-science" },
    { title: "Web Developer", company: "Microsoft", location: "Redmond, USA", experience: "1+ years", link: "https://careers.microsoft.com/us/en/search-results?keywords=Web%20Developer" },
    { title: "Product Manager", company: "Facebook", location: "Menlo Park, USA", experience: "5+ years", link: "https://www.metacareers.com/jobs/product-manager" },
    { title: "Cybersecurity Analyst", company: "IBM", location: "New York, USA", experience: "4+ years", link: "https://www.ibm.com/careers/us-en/search/?keywords=cybersecurity" },
    { title: "AI Researcher", company: "OpenAI", location: "San Francisco, USA", experience: "5+ years", link: "https://openai.com/careers/" },
    { title: "Full-Stack Developer", company: "Netflix", location: "Los Angeles, USA", experience: "3+ years", link: "https://jobs.netflix.com/" },
    { title: "UI/UX Designer", company: "Adobe", location: "San Francisco, USA", experience: "2+ years", link: "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced" },
    { title: "DevOps Engineer", company: "Tesla", location: "Austin, USA", experience: "4+ years", link: "https://www.tesla.com/careers/search/?site=US&query=DevOps" },
    { title: "Business Analyst", company: "Goldman Sachs", location: "New York, USA", experience: "3+ years", link: "https://www.goldmansachs.com/careers/" },
];

let currentIndex = 0;
const jobsPerLoad = 3;

function displayJobs() {
    const jobList = document.getElementById('job-list');

    // Load only the next set of jobs
    const jobsToDisplay = jobsData.slice(currentIndex, currentIndex + jobsPerLoad);
    
    jobsToDisplay.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <div class="job-info">🏢 ${job.company}</div>
            <div class="job-info">📍 ${job.location}</div>
            <div class="job-info">📆 ${job.experience}</div>
            <a class="apply-btn" href="${job.link}" target="_blank">💼 Apply Now</a>
        `;
        jobList.appendChild(jobCard);
    });

    currentIndex += jobsPerLoad;
    if (currentIndex >= jobsData.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

function loadMoreJobs() {
    displayJobs();
}

function searchJobs() {
    const query = document.getElementById('search').value.toLowerCase();
    const locationQuery = document.getElementById('location').value.toLowerCase();
    const experienceQuery = document.getElementById('experience').value.toLowerCase();

    const filteredJobs = jobsData.filter(job => 
        job.title.toLowerCase().includes(query) &&
        job.location.toLowerCase().includes(locationQuery) &&
        job.experience.toLowerCase().includes(experienceQuery)
    );
    
    document.getElementById('job-list').innerHTML = ""; // Clear previous jobs
    currentIndex = 0;
    jobsData = filteredJobs;
    displayJobs();
}

// Load initial jobs on page load
document.addEventListener("DOMContentLoaded", displayJobs);
