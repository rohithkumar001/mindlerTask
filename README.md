MindlerTask 


Download the file as zip from https://github.com/rohithkumar001/mindlerTask/

extract the files into any folder. 

fire up(start) your terminal and if your using windows, go to the folder's location by using the cd command

in the terminal go the location where package.json is present and use the command "npm i --force" 

you must use --force to overcome dependency conflicts. some features dont work if we change the dependancy, so its better to not edit the package.json file.

now install angular cli if you don't already have it on your pc. 


type this command npm i -g @angular/cli@10.0.1


now type "ng serve -o" in your terminal . it will run your application and deploy it on localhost:4200. adding -o to ng serve will automatically open local host for you in your default browser. 

The data is rendered using grid.js and grid-js-angular package which is under development. It won't work on angular since the wrapper class for it has some issues. So, after having a chat with this npm package's developers, i figured out a way to make it work. grid-js-angular will soon work for all after the wrapper class will be fixed by the developers. further options like filtering using checkboxes can be added only after the angular wrapper class is fixed. 

To know more about current issues with gridjs, check this out : https://github.com/grid-js/gridjs-angular/issues/89 

I have also used ag-grid package but its a licenced product, so i decided to drop it, but since i've used mindlerTask's data to make it very interactive, i am adding link to that project here :  https://github.com/rohithkumar001/TaskAgGrid
