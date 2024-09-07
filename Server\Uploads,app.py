from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="balaji_solutions"
)

# Fetch all jobs
@app.route('/jobs', methods=['GET'])
def get_jobs():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM jobs")
    jobs = cursor.fetchall()
    return jsonify({"jobs": jobs})

# Add a new job
@app.route('/add-job', methods=['POST'])
def add_job():
    data = request.get_json()

    job_description = data['jobDescription']
    salary = data['salary']
    expectations = data['expectations']
    skills = data['skills']
    location = data['location']

    cursor = db.cursor()
    sql = "INSERT INTO jobs (job_description, salary, expectations, skills, location) VALUES (%s, %s, %s, %s, %s)"
    val = (job_description, salary, expectations, skills, location)
    cursor.execute(sql, val)
    db.commit()

    return jsonify({"message": "Job added successfully"}), 201

if __name__ == '__main__':
    app.run(port=3000, debug=True)
