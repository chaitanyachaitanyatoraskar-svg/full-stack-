# Practical 7: MongoDB Basics (Using MongoDB Compass) & Mongoose

## Aim
To install MongoDB and MongoDB Compass, create a database and collection, perform CRUD operations, and connect MongoDB with Node.js using Mongoose.

---

## Part A: Install and Start MongoDB & MongoDB Compass
1. Install MongoDB Community Server.
2. Install MongoDB Compass GUI.
3. Open MongoDB Compass and connect using the default connection string:
   ```text
   mongodb://localhost:27017
   ```

---

## Part B: Create a Database and Collection in Compass
1. Click **+ Create Database**.
2. Set:
   - **Database Name**: `MERNDB`
   - **Collection Name**: `students`
3. Click **Create Database**.

---

## Part C: Insert Records in MongoDB Compass
Open the `students` collection, click **Add Data** -> **Insert Document**, and add:

### Document 1:
```json
{
  "rollNo": 1,
  "name": "Rahul",
  "course": "MERN",
  "marks": 85
}
```

### Document 2:
```json
{
  "rollNo": 2,
  "name": "Priya",
  "course": "MERN",
  "marks": 90
}
```

---

## Part D: View Records from the Collection
In MongoDB Compass, navigate to `MERNDB` -> `students` -> **Documents** tab to view all stored records.

---

## Part E: Update and Delete Records
- **Update**: Edit Document 1, change `"marks": 85` to `"marks": 95`, and click **Update**.
- **Delete**: Select Document 2 (Priya) and click **Delete** (Trash icon), then confirm deletion.

---

## Part F: Connect MongoDB with Node.js using Mongoose

### 1. Setup
```bash
npm install mongoose
```

### 2. Verify Connection
Run `dbconnect.js`:
```bash
node dbconnect.js
```
**Expected Output:**
```text
MongoDB Connected Successfully
```

### 3. Insert Record with Mongoose
Run `student.js`:
```bash
node student.js
```
**Expected Output:**
```text
Student Saved
```
*(Verify by reopening MongoDB Compass: Amit with rollNo 3 will appear in `MERNDB.students`).*
