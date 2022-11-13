---
cssclass: cards
---


```dataview
table  without id
("![banner|40](" + banner + ")"),
string("**Course:** " +  file.link),
string("**Semester: **") + Semester,
string("**Classroom: **") + classRoom
FROM "Areas/Class"
SORT semester  
```
