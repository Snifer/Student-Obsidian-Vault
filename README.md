

Hello, 

I will participate with a demo vault for students either school or university I think it could be used in both cases in [Obsidian October](https://publish.obsidian.md/hub/Obsidian+October+2022)

The objective was to create a vault as simple and accessible as possible, that's why it handles a simple task control and data logging, we plan to make this vault modular and add other functionalities over time. 

We avoided integrating many plugins or functionality such as Templater, Obsidian Database Folder or GTD Plugin for example, in order not to complicate the main use of the vault. 

Use PARA method for organizate the vault and content management, with posibility. 

Currently I generate spanish content about Obsidian on my [Youtube channel](https://youtube.com/sniferl4bs), previously created a note system based on Zettelkasten and the workflow of Ruben Loan. [Sistema de Notas - Zettelkasten (Obsidian Template)](https://snifer.gumroad.com/l/ylwkc)

[Twitter](https://twitter.com/sniferl4bs)


- All callouts can be collapsed for maintain clean Dashboard 
- The registration of information is performed from the dashboard in the respective areas.
- The trash is configured to send to the **.trash** folder to Obsidian to prevent deletions due to errors. 
- User Wikilinks to reference notes. 


>[!NOTE]
>If you are just starting out and want to learn more about Obsidian you have the https://forum.obsidian.md and https://help.obsidian.md.


## Example of Use Vault 



- [[#Example of Use Vault|Example of Use Vault]]
	- [[#Example of Use Vault#Register and use Tables|Register and use Tables]]
		- [[#Register and use Tables#Class Register|Class Register]]
		- [[#Register and use Tables#Exam Register|Exam Register]]
		- [[#Register and use Tables#HomeWork Register|HomeWork Register]]
		- [[#Register and use Tables#Contact Register|Contact Register]]
	- [[#Example of Use Vault#Tasks and Birthday|Tasks and Birthday]]
		- [[#Tasks and Birthday#Tasks|Tasks]]
		- [[#Tasks and Birthday#Birthday of Month|Birthday of Month]]
	- [[#Example of Use Vault#Plugins|Plugins]]
			- [[#Birthday of Month#Table of content|Table of content]]
			- [[#Birthday of Month#Dataview|Dataview]]
			- [[#Birthday of Month#Annotator|Annotator]]
			- [[#Birthday of Month#Custom File explore sorting|Custom File explore sorting]]
			- [[#Birthday of Month#Hover Editor|Hover Editor]]
			- [[#Birthday of Month#Obsidian Editing Toolbar|Obsidian Editing Toolbar]]
			- [[#Birthday of Month#Advanced Tables|Advanced Tables]]
			- [[#Birthday of Month#Home Page|Home Page]]
			- [[#Birthday of Month#Calendar|Calendar]]
	- [[#Example of Use Vault#TODO.|TODO.]]

### Register and use Tables 

Each one can record additional information in the note as preferred. 

#### Class Register 

A new class is registered from the `new field name` field. The information must be filled in the fields of the form.

![[NewRegister.png]]


The teacher field read contacts folder. 

![[TeacherField.png]]

> [!ALERT]
> It is recommended to create a note per subject and link it to the respective class, creating a MOC for each class.

#### Exam Register

For a new exam, the date and the class it belongs to are recorded to have the relationship between the class.

![[ExamnRegister .png]]

#### HomeWork Register 

Every homework need a register day and due day for delivery and the class respective assigment and current status. 

![[HomeWorkRegister.png]]

#### Contact Register

This is a personal agenda in the vault, registering the type of contact and birthday, in the case of being a teacher this is used in the rest of the tables. 

![[ContactsDashboard.png]]

### Tasks and Birthday

#### Tasks

All pending tasks showed in the dashboard, include the Daily Notes. 

![[PendingTasks.png]]

Its possible complete a task from this view. 

> [!NOTE]
> Register of the tasks that are part of homework

- [ ] Task1 
- [x] Task2

> Show progressbar with tasks.

`$= const value = Math.round(((dv.current().file.tasks.where(t => t.completed).length) / (dv.current().file.tasks).length || 0) * 100); "<progress value='" + value + "' max='100'></progress>" + " " + value + "%"`


#### Birthday of Month

The Birthdays section updates itself, keeping in mind that the next birthday needs to  recorded in the contact section. 

### Plugins

The principal plugins used during the creation this vault. 

##### Table of content 

With the command `ctrl + p` search for Table of content we will generate the respective table of content. 

![[TableOfContent.png]]



##### Dataview 

Dataview is being used by Database plugin as well as to visualize the progress of tasks created in a job, pending tasks in the whole vault and birthdays month. 


| **Birthday and Tasks**    | **Progress Bar tasks**    |
| ------------------------- | ------------------------- |
| ![[BirthdayandTasks.png]] | ![[ProgressBarTasks.png]] | 

##### Annotator

If you need to take notes from a PDF document, the Annotator plugin allows you to highlight information. 

```Markdown
 annotation-target: https://arxiv.org/pdf/2104.13478.pdf`
```

More information about use [Annotator](https://github.com/elias-sundqvist/obsidian-annotator)

##### Custom File explore sorting

More information about [Custom File explore sorting](https://github.com/SebastianMC/obsidian-custom-sort)

##### Hover Editor 

It's possible edit transclusion with this plugin. 

![[HoverEditor.png]]

##### Obsidian Editing Toolbar

Obsidian Editing Toolbar is **a plugin that provides a toolbar similar to MS-Word，and adds a minimal and user friendly text editor modal for a smoother writing/editing experience** .

![[ObsidianEditingToolbar.png]]


##### Advanced Tables 

Its used por easy generation tables. 

##### Home Page

This plugin permit configure a Workspace from HomePage. 


##### Calendar

##### Excalidraw

Use for create diagrams or visual notes. 


### TODO. 

- Implementd Database Folder with Relation a rollup in the Dashboard. 
- Implement Templater from creation in Dashboard. 
- Implement Pandoc Enhacing export for generate. 
- Implement Presentation with Slide Advanced Template.
- Implement use of Daily Notes. 
- Remminder notification. 
- PDF to markdown convertion with Obsidian to Markdown
