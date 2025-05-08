# 🎓 College Placement Portal – Multi-College MERN Web App

A full-featured, multi-college **Placement Portal Web App** built with the MERN stack (MongoDB, Express, React, Node.js). This system enables college admins to post company registration drives, students to register and track progress, and supports complete placement lifecycle management with company registeration autofill, email reminders, grievance forum, and interview experience sharing.

---

## 🌐 Project Overview

This is a **multi-college SaaS-style placement management system**, where each college can manage its own users, company drives, and student placements. The system separates data cleanly for each college while running under a unified platform.

---

## 📌 Key Features

### 👨‍🎓 Student Side

* 🔐 Student login with college-based access
* 📝 Profile page to auto-fill company registration forms
* 📩 Email notification for eligible job openings
* 📆 Add-to-Google Calendar reminders directly from email for company registeration deadline
* 🗣️ Discussion forum for posting grievances and clarifications
* 📈 Personal placement history dashboard (companies attended, rounds cleared, offers)
* 🧾 Interview experience submission (by invitation)
* Student can search for particular company's interview experince filled by their seniors

### 🛠️ Admin Side

* 👥 Admin can create a workspace for their college
* 🏢 Company registration form with eligibility and deadlines
* 📬 Auto-email to all **eligible and non-blocklisted students**
* 📤 Download registered student list as Excel
* ✅ Shortlist students for next rounds and disable others
* 🎤 Invite offered students to submit interview experiences
* 📊 Approve and publish interview experiences
* 🧑‍💻 Share candidate list with companies for filtering and access

### 🏫 Multi-College SaaS Features

* 🏛️ Each college has a separate database (optional multi-DB architecture)
* 🔗 Global admin and college metadata stored in a master DB
* 🔄 Dynamic DB switching per user session based on `collegeId`

---

## 🧠 System Architecture

### 📁 Backend (Node.js + Express + MongoDB)

* **Global DB**: Stores all colleges and admin metadata
* **Per-College DBs**: Stores students, company drives, registrations, experiences, and discussion-forums
* **JWT-based authentication**
* **Excel export**, **email sending**

### 🖥️ Frontend (React)

* React UI with protected routes
* Components: Login, Dashboard, CompanyForm, RegistrationForm, Forum, Profile, ExperienceForm etc
* Integrated with email actions

---

## 📊 Collections & Their Roles

| Collection      | Description                                         |
| --------------- | --------------------------------------------------- |
| `Colleges`      | **Master DB**: stores college name, domain, DB name |
| `Users`         | Both DBs: login info, role, profile data            |
| `Companies`     | College DB: job postings by admin                   |
| `Registrations` | College DB: student registration status for jobs    |
| `Experiences`   | College DB: interview experience records            |
| `ForumPosts`    | College DB: grievance and Q\&A system               |
