

```databaseTable
sources:
- type: directory
  path: "Areas/Class"
fields:
- name: file
  type: fileName
  label: 📚 Name
  dark: true
  width: 1%
- name: nameCLass
  label: 🎒 Name Class
  type: text
  width: 30%
- name: banner
  label: Banner URL
  type: text
  width: 30%
- name: Teacher
  label: 🎒 Teacher
  type: link
  multiple: true
  width: 20%
  sources:
  - type: directory
    path: "Resources/Contacts"
- name: Semester
  label: 🗒️ Semester
  type: text
  width: 10%
- name: classRoom
  label: 🗒️ Class Room
  type: text
  width: 10%

```
