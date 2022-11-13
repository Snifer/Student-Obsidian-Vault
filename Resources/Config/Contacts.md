

```databaseTable
sources:
- type: directory
  path: "Resources/Contacts"
fields:
- name: file
  type: fileName
  label: 📚 Name
  dark: true
  width: 1%
- name: Name
  label: Name
  type: text
  width: 30%
- name: Email
  label: Email
  type: text
  width: 20%
- name: Phone
  label: Phone
  type: text
  width: 10%
- name: birthday
  label: 🗓️ Birthday
  type: date
  width: 10%
  
- name: nameClass
  label: 🎒 Class
  type: link
  multiple: true
  width: 40%
  sources:
  - type: directory
    path: "Areas/Class"

```
