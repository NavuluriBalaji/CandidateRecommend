
# Candidate Recommendation System Based on Resume Score

This project provides a recommendation system that evaluates and recommends candidates based on the resume score. The system automatically parses resumes, scores them based on specific metrics (e.g., skills, experience, education), and then recommends the top candidates for a given job opening.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)

## Features

- **Resume Parsing**: Automatically extracts key details such as skills, experience, education, certifications, etc., from resumes.
- **Resume Scoring**: Each resume is scored based on predefined criteria, such as skill match, years of experience, relevant education, etc.
- **Candidate Ranking**: Candidates are ranked based on their resume scores and can be recommended to recruiters for a specific job position.
- **Job Matching**: Matches candidates with suitable job categories based on their parsed resume data.
- **Global Job Listing Integration**: Once a candidate is recommended, job openings are fetched and displayed based on the candidate's profile.

## Technologies

- **Python**: Programming language for developing the recommendation system.
- **Flask**: For the web application and API integration.
- **Resume Parser**: Libraries like `spacy`, `PyResparser`, or custom-built solutions for extracting resume details.
- **NLP Algorithms**: For scoring resumes and extracting meaningful data.
- **Job APIs**: Integration with job platforms (LinkedIn, Indeed, etc.) for job listings.
- **Machine Learning**: Optionally, integrate ML models to score resumes more intelligently over time.

## Installation

To set up the Candidate Recommendation System locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/candidate-recommendation-system.git
cd candidate-recommendation-system
```

### 2. Install Dependencies
Install the necessary dependencies using `pip`:

```bash
pip install -r requirements.txt
```

### 3. Setup API Keys
For integrating job listing APIs, sign up for access to job platforms (LinkedIn, Indeed, etc.) and include your API keys in the `.env` file or directly into the code.

### 4. Run the Application
```bash
python app.py
```

Access the application at `http://127.0.0.1:5000`.

## Usage

### 1. Upload Resume
Upload resumes in `.pdf`, `.docx`, or `.txt` format. The system will automatically parse the resume and extract details such as:

- Skills
- Work Experience
- Education
- Certifications
- Contact Information

### 2. Resume Scoring
After parsing, the system scores the resume based on:

- Skills match with the job description.
- Years of experience.
- Relevance of education.
- Certifications and specializations.

### 3. Candidate Ranking
The system ranks candidates based on their resume scores, helping recruiters shortlist the most relevant applicants for a given job.

### 4. View Job Listings
Once a candidate is shortlisted, the system fetches relevant job openings globally and displays them.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

- [Balaji](https://github.com/yourusername) - Project Lead
- [Other Contributors](https://github.com/othercontributors)
