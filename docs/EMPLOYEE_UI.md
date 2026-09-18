# Employee UI Flow

## Employee Route Flow

The employee journey will follow this route sequence:

/login
↓
/employee/dashboard
↓
/employee/gaps/:skill
↓
/employee/courses
↓
/employee/quiz/generate
↓
/employee/quiz
↓
/employee/quiz/result

---

## Employee Dashboard

The employee dashboard should contain the following sections:

- Welcome
- Employee Identity
- Role
- Department
- Overall Competency
- Skill Gaps
- Learning Progress
- Current Skills
- Skill Gap Visualization
- Recommended Learning
- Recent Quiz Attempts

---

## Demo Employee

The demo employee for the prototype is:

**Name:** Rahul Sharma  
**Role:** Statistical Officer  
**Department:** National Accounts

---

## Backend API Dependencies

The future employee UI will consume data from the backend APIs.

### Authentication

`POST /api/auth/login`

Used for employee login.

### Employee Profile

`GET /api/profile`

Used to retrieve employee identity, role, department, and profile information.

### Skill Gaps

`GET /api/gaps`

Used to retrieve the employee's identified skill gaps.

### Learning Recommendations

`GET /api/recommendations?skill=<skill>`

Used to retrieve recommended learning resources for a selected skill gap.

### iGOT Course Enrollment

`POST /api/igot/enrol`

Used to enroll an employee in a recommended course.

### Course Completion

`GET /api/igot/completion/:id`

Used to retrieve learning completion information.

### Quiz Generation

`POST /api/quiz/generate`

Used to generate an AI-based quiz.

### Quiz Submission

`POST /api/quiz/submit`

Used to submit quiz answers and retrieve the result.

---

## UI Development Note

This document defines the employee UI structure and route flow.

React pages, styling, API integration, and interactive UI components will be implemented in a later development phase.