#What's this
Menu That Emulates File Explorer In JavaScript (beginners project)

#Installation
`npm i menufexp --save`
Then...

```
import {mnu,it,rm} from '.menufexp'

// create array of menu items
// new it(item id, item title, item value, item parent id, item type ('c'-container(folder),'i' - end item(file)) )
let items=[
    new it(-1,"*","*",-2,"c"),new it(1,"it1","val1",-1,"c"),new it(2,"it2","val2",-1,"c"),new it(3,"it3","val3",-1,"c"),
    new it(11,"it11 it11 it11it11 it11 it11","val11",1,"c"),new it(12,"it12","val12",1,"c"),new it(13,"it13","val13",1,"c"),
    new it(41,"it11 it11 it11it11 it11 it11","val11",1,"c"),new it(42,"it42","val12",1,"c"),new it(43,"it43","val13",1,"c"),
    new it(21,"it21","val21",2,"c"),new it(22,"it22","val22",2,"c"),new it(23,"it23","val23",2,"c"),
    new it(31,"it31","val31",3,"c"),new it(32,"it32","val32",3,"c"),new it(33,"it33","val33",3,"i"),
    new it(111,"it111","val111",11,"c"),new it(112,"it112","val112",11,"i"),new it(113,"it113","val113",11,"c"),
    new it(121,"it121","val21",21,"i"),new it(122,"it122","val122",21,"i"),new it(123,"it123","val123",21,"i"),
    new it(131,"it131","val131",21,"i"),new it(132,"it132","val132",21,"i"),new it(133,"it133","val133",21,"i"),
    ]
    
/////////////////////////////////////////////////////////////////////
//create new menu :
//icli handles click on item
//
let showmenu=()=>{
    
   let icli=(e,item,r,rndr,rr)=>{
		switch(item.type){
			case "c":rndr(item.id); break;
			case "i":
				let q=false;
				for(let i=0;i<r.length;i++){
					if (r[i]==item.id){q=true; break;}
					//console.log("i=",i,"res=",this.result[i],"it=",item.id,"rel=",(this.result[i]==item.id),"q=",q);
				}
				if(!q) { 
					r.push(item.id); 
					rr();
				}  
				break;
			}
		}
let root=1;
let currentFolder=1;
let selectedItems=[113];	
let f1={name:'Properties',f:(i)=>{alert(i.title+"\nProperties");}, type:"ci"};
let f2={name:"New File",f:(i)=>{alert("New File in " + i.title + " folder");}, type:"c"};
let f3={name:"Edit File",f:(i)=>{alert(i.title+"\nEdit\n"+i.value);}, type:"i"};
let f4={name:"Delete",f:(i)=>{alert(i.title+"\n Delete\n"+i.value);}, type:"ci"};
let f5={name:"Alert1",f:(i)=>{alert(i.title+"\nAlert1\n"+i.value)}, type:"ci"};
let mfarr=[f1,f2,f3,f4,f5];

//new menu parameters 
// icli -handler of click onthe iem event,
// trigger id of html element click on which invokes new menu
// app id of html element where menu is placed
// moveanchor id of html element dragging of which moves menu
// id of root menu item (here 1)
// items array of menu items
// SelectedItems aray of ids  of selected items
// mfarr array of item  actions
// render menu method that renders menu: 1 id of current folder

    const tebu= new mnu(icli,'trigger','app','moveanchor',1,items,selectedItems,mfarr).render(currentFolder);
    let move=null;
    // rm object enabling menu moving
    if(!move){ move= new rm('moveanchor','app')};
}
///////////////////////////////////////////////////////////////////
    document.getElementById("trigger").addEventListener("click",showmenu)

```