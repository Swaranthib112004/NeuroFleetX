# NeuroFleetX Backend

Spring Boot backend application for the NeuroFleetX project.

## 🚀 Setup & Run

### 1️⃣ Prerequisites Used
- Java JDK 24 or later  
- Apache Maven 3.9+  
- POSTGRESQL PgAdmin

### 2️⃣ Build the Project
```bash
mvn clean install
3️⃣ Run the Application
bash
Copy code
mvn spring-boot:run
4️⃣ Test the Server
Open in browser or Postman:

bash
Copy code
http://localhost:8080/api/hello
Expected Output:
✅ Spring Boot backend is running successfully!
📁 Project Structure
swift
Copy code
src/
 ├─ main/java/com/neurofleetx/backend/
 │   ├─ BackendApplication.java
 │   └─ controller/
 │       └─ HelloController.java
 └─ main/resources/
     ├─ application.properties
     └─ static/ | templates/
🧩 Technologies
Java Spring Boot

Maven

REST API

✅ Status: Backend running successfully on http://localhost:8080
