
```databaseTable
sources:
- type: directory
  path: "Projects/Exams"
fields:
- name: file
  type: fileName20 - Areas
  label: 👨‍🎓 Teacher
  dark: true
  width: 1%
- name: examDate
  label: 🗓️ Exam Date
  type: date
  width: 1%
- name: course
  label: 🎒 Class
  type: link
  width: 20%
  sources:
  - type: directory
    path: "20 - Areas/20.1 Courses"
- name: completed
  label: 🗒️ Completed
  type: checkbox
  width: 1%
```

