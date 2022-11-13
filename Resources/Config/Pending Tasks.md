> [!ALERT]- Pending Tasks
> ```dataview
> TASK
>FROM "Projects/HomeWork" OR "Daily Notes"
>WHERE !completed
>GROUP BY file.link
>```