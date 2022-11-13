```databaseTable
sources:
- type: directory
  path: "Projects/Exams"
fields:
- name: file
  type: fileName
  label: 📚 Name
  dark: true
  width: 1%
- name: examDate
  label: 🗓️ Exam Date
  type: date
  width: 1%
- name: Class
  label: 🎒 Class
  type: link
  width: 20%
  sources:
  - type: directory
    path: "Areas/Class"
- name: completed
  label: 🗒️ Completed
  type: checkbox
  width: 1%
```
