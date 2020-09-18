/*cmlink,vmlink,menu,menut,menub,menur,spad,mov,sm,ssm,redclass,whiteclass
export const _menclass=document.createElement("style"); _menclass.position="absolute"; _menclass.color="#000";_menclass.resize="both";_menclass.overflow='auto'; _menclass.backgroundColor='silver';_menclass.maxWidth='300px'; _menclass.borderRadius='5px'; _menclass.padding='0px 15px 0px 15px';



*/
export const  _menclass=document.createElement("style"); 
_menclass.innerHTML=`
._menu{	
	position:absolute;
	resize:both;
	/*overflow:auto;*/
	background:silver;
	font-weight:bold;
	border:5px outset white;
	max-width:300px;
	border-radius:5px;
	padding-right: 7px;
	padding-left: 5px;
	padding-top: 0px;
	padding-bottom: 0px;
}`;
document.body.appendChild(_menclass);
/*let _mentclass=document.createElement("style"); _mentclass.display='flex'; _mentclass.flexDirection='row'; _mentclass.flexWrap='wrap'; _mentclass.position="relative"; _mentclass.width="100%"; _mentclass.zIndex=10; _mentclass.backgroundColor='slategray';  _mentclass.borderRadius='5px';_mentclass.padding='5px;*/
export const  _mentclass=document.createElement("style"); 
_mentclass.innerHTML=`
._menut{
	position:relative;
	width:100%;
	z-index: 10;
	/*color: #fff;*/
	background:slategray;
    /*font-size:10px;
    font-weight:bold;
	text-decoration-line: none;*/
	border-radius:5px;
	padding: 5px;
	/*outline:none;*/
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
}`;
document.body.appendChild(_mentclass);

/*let _menbclass=mentclass.cloneNode(true);_menbclass.height="100%";_menbclass.zIndex=10;_menbclass.backgroundColor='white';*/
export const  _menbclass=document.createElement("style"); 
_menbclass.innerHTML=`
._menub{
	position:relative;
	width:99%;
	height:100%;
    /*border:5px outset black;;
	color: #000;*/
	background:white;
    /*font-size:10px;
    font-weight:bold;
	text-decoration-line: none;*/
	border-radius:5px;
	padding: 5px;
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
	
}`;
document.body.appendChild(_menbclass);

/*export const _menwclass=document.createElement("style"); _menwclass.display='inline'; _menwclass.position="relative"; _menwclass.color="black"; _menwclass.fontFamily='Verdana,Arial'; _menwclass.fontSize='10px'; _menwclass.fontWeight='bold'; _menwclass.backgroundColor='white';  _menwclass.borderRadius='5px';_menwclass.padding='0px 5px 0px 5px';*/
export const  _menwclass=document.createElement("style"); 
_menwclass.innerHTML=`
._white{
	position: relative;
	display:inline;
	background-color: white;
	color:black;
	text-decoration:none;
	font-size:10px;
	font-weight:bold;
	border-radius:3px;
	border:none;
	margin-top:3px;
	padding:0px;
	padding-right:5px;
	padding-left:5px;
	cursor:text;
	}`;
	document.body.appendChild(_menwclass);

	/*let _menrclass=_mentclass.cloneNode(true);  _menrclass.flexDirection='column'; _menrclass.position="relative"; _menrclass.width="100%"; _mentclass.backgroundColor='darkslategray';  _menrclass.borderRadius='5px';_menrclass.padding='5px'; _menrclass.borderRadius='5px';_menrclass.padding='5px';   _menrclass.fontFamily='Verdana,Arial'; _menrclass.fontSize='10px'; _menrclass.fontWeight='bold';     */
	export const  _menrclass=document.createElement("style"); 
	_menrclass.innerHTML=`
	._menur{
	position:relative;
	width:100%;
	border:5px black;

	color: #fff;
	background:darkslategray;
    font-size:10px;
    font-weight:bold;
	text-decoration-line: none;
	padding: 5px;
	border:none;
	outline:none;
	display:flex;
	flex-direction:column;
	flex-wrap:wrap;
	border-radius:5px;
	/*border:black,*/
}`;
document.body.appendChild(_menrclass);

/*let _mensmclass=document.createElement("style");_mensmclass.display='flex';mensmclass.flexDirection='column';_mensmclass.flexWrap='nowrap';_mensmclass.backgroundColor='silver';
_mensmclass.border='1px outset white';  mensmclass.position='absolute';_mensmclass.color='black';_mensmclass.zIndex=15;_mensmclass.padding='15px';  _mensmclass.fontFamily='Verdana,Arial'; _mensmclass.fontSize='10px'; _mensmclass.fontWeight='bold';_mensmclass.borderRadius='5px';
*/

export const  _mensmclass=document.createElement("style"); 
_mensmclass.innerHTML=`
._sm{
	display:"flex";
	border:1px outset white;
	position:absolute;
	color: #000;
	z-index: 15;
	background-color:silver;
	text-decoration-line:'none';
    font-size:10px;
    font-weight:bold;
	text-decoration: none;
	border-radius:5px;
	padding: 15px;
	cursor:pointer;
	flex-direction:column;
	flex-wrap:nowrap;
	transition:opacity 1s;

}
a._sm{text-decoration:none;}`;
document.body.appendChild(_mensmclass);

/*let _menssmclass=_mensmclass.cloneNode("style");_mensmclass.display='flex';mensmclass.flexDirection='column';_mensmclass.flexWrap='nowrap';_mensmclass.backgroundColor='silver';
_mensmclass.border='1px outset white';  mensmclass.position='absolute';_mensmclass.color='black';_mensmclass.zIndex=15;_mensmclass.padding='15px';  _mensmclass.fontFamily='Verdana,Arial'; _mensmclass.fontSize='10px'; _mensmclass.fontWeight='bold';_mensmclass.borderRadius='5px';
*/
export const  _menssmclass=document.createElement("style"); 
_menssmclass.innerHTML=`
._ssm{
	display:"flex";
	cursor:pointer;
	z-index: 15;
	color: #000;
	background-color:silver;
    font-size:10px;
    font-weight:bold;
	text-decoration: none;
	border-radius:5px;
	padding: 2px;
	flex-direction:column;
	flex-wrap:nowrap;
	transition:opacity 1s;

}`;
document.body.appendChild(_menssmclass);

/*let _menmovclass=document.createElement("style"); _menmovclass.width='100%'; _menmovclass.position='relative'; _menmovclass.cursor='move';  _menmovclass.backgroundColor='transparent'; _mensmclass.fontFamily='Verdana,Arial'; _mensmclass.fontSize='12px'; _mensmclass.fontWeight='bold';_mensmclass.borderRadius='50%';*/
export const  _menmovclass=document.createElement("style"); 
_menmovclass.innerHTML=`
.mov{
	min-width:100px;min-height:10px;
	width:100px;
	position:relative;
	cursor: move;
	background-color: transparent;
}`;
document.body.appendChild(_menmovclass);
export const  _mennmclass=document.createElement("style"); 
_mennmclass.innerHTML=`
.nm{
	position:relative;
	cursor: pointer;
	background-color: transparent;
}`;
document.body.appendChild(_menmovclass);

/*let _menrcclass=document.createElement("style");_menrcclass.color='red';_menrcclass.position='relative';_menrcclass.cursor='move';_menrcclass.backgroundColor='transparent';
_menrcclass.fontFamily='Verdana,Arial';_menrcclass.fontSize='12px';_menrcclass.fontWeight='bold';_menrcclass.borderRadius='50%';_menrcclass.alignSelf='end';_menrcclass.cursor='pointer';_menrcclass.marginTop='3px';
*/

export const  _menrcclass=document.createElement("style"); 
_menrcclass.innerHTML=`
.redclass{
    background-color: transparent;
	align-self:end;
    color:red;
    text-decoration:none;
    font-size:12px;
    font-weight:bold;
	border-radius:50%;
	margin-top:3px;
	cursor:pointer;
}`;
document.body.appendChild(_menrcclass);
export const  _menrchclass=document.createElement("style"); 
_menrchclass.innerHTML=`
.redclass:hover{
	color:white;
	background-color: red;
	 text-decoration:none;
	font-size:12px;
	font-weight:bold;
	border-radius:50%;
	 border:1px outset white;

	margin-top:3px;
	cursor:pointer;
}`;
document.body.appendChild(_menrchclass);

/*let _menwcclass=document.createElement("style");_menwcclass.display='inline';_menwcclass.position='relative';_menwcclass.cursor='move';_menwcclass.backgroundColor='transparent';
_menwcclass.fontFamily='Verdana,Arial';_menwcclass.fontSize='12px';_menwcclass.fontWeight='bold';_menwcclass.borderRadius='50%';_menwcclass.alignSelf='end';_menwcclass.cursor='pointer';_menwcclass.marginTop='3px';_menwcclass.padding='0px 5px 0px 5px';
*/

export const  _menwcclass=document.createElement("style"); 
_menwcclass.innerHTML=`
.whiteclass{
	display:inline;
	background-color: transparent;
	align-self:end;
	text-decoration:none;
	font-size:12px;
	font-weight:bold;
	border-radius:50%;
	margin-top:3px;
	padding-right:5px;
	padding-left:5px;
	cursor:pointer;
}`;
document.body.appendChild(_menwcclass);

export const  _menwchclass=document.createElement("style"); 
_menwchclass.innerHTML=`
.whiteclass:hover{
	display:inline;
	background-color: white;
	align-self:end;
	text-decoration:none;
	border-radius:30%;
	border:1px outset black;

	cursor:pointer;
}`;
document.body.appendChild(_menwchclass);

/*let _menspadclass=document.createElement("style");_menspadclass.display='none';menspadclass.flexDirection='column';  _menspadclass.flexWrap='nowrap'; _menspadclass.position='fixed'; _menspadclass.color='black';_menspadclass.backgroundColor='silver';_menspadclass.fontFamily='Verdana,Arial';_menspadclass.fontSize='10px';_menspadclass.fontWeight='bold';_menspadclass.borderRadius='5px';_menspadclass.border='5px outset white';_menwcclass.padding='7px 3px 5px 3px';_menspadclass.justifyContent='space-between';_menwcclass.zIndex=15;
*/

export const  _menspadclass=document.createElement("style"); 
_menspadclass.innerHTML=`
._spad{
	position:fixed;
	color: #000;
	text-decoration-line:none;
	background-color:silver;
	font-size:10px;
	font-weight:bold;
	text-decoration: none;
	border:1px outset white;
	z-Index:15;
	border-radius:5px;
	padding-right: 7px;
	padding-left: 5px;
	padding-top: 3px;
	padding-bottom: 3px;
	display:none;
	flex-direction:column;
	flex-wrap:nowrap;
	justify-content:space-between;
}`;
document.body.appendChild(_menspadclass);

/*let _menclclass=document.createElement("style");_menclclass.display='inline-block';_menclclass.position='relative';_menclclass.maxHeight='20px';_menclclass.backgroundColor='aliceblue';_menclclass.color='black';_menclclass.marginLeft='3px';_menclclass.marginTop='3px';_menclclass.fontFamily='Verdana,Arial';_menclclass.fontSize='12px';_menclclass.fontWeight='bold';_menclclass.borderRadius='5px';_menclclass.cursor='pointer';_menclclass.cursor='pointer';
*/
export const  _menclclass=document.createElement("style"); 
_menclclass.innerHTML=`
.cmlink{
    display:inline-block;	
	max-height:20px;
    padding:2px;
    margin-left:3px;
    background-color: aliceblue;
    color:black;
    text-decoration:none;
    font-size:10px;
    font-weight:bold;
	border-radius:5px;
	margin-top:3px;
	cursor:pointer;
	transition:background-color 1s,color 1s;

}`;
document.body.appendChild(_menclclass);


let  _menclhclass=document.createElement("style"); 
_menclhclass.innerHTML=`
.cmlink:hover{
	display:inline-block;
	padding:2px;
	margin-left:3px;
	max-height:20px;
    background-color: darkslategray;
    color:white;
    font-size:10px;
    font-weight:bold;
    padding:2px;
    text-decoration:none;
    border:1px outset white;
    cursor: pointer;
    font-weight:bold;
    text-decoration-line: none;
    border-radius:5px;
    outline:none;
	margin-top:3px;
	cursor:pointer;
	transition:background-color 1s,color 1s;

}`;
document.body.appendChild(_menclhclass);

export const  _menclaclass=document.createElement("style"); 
_menclaclass.innerHTML=`
.cmlink:active{
	animation-name: sk;
	animation-duration: 200ms;
}`;
document.body.appendChild(_menclaclass);

export const  _menvlhclass=document.createElement("style"); 
_menvlhclass.innerHTML=`
.vmlink:hover{
    display:inline-block;
	max-height:20px;
    padding:2px;
    margin-left:3px;
    background-color: blue;
    color:white;
    font-size:10px;
    font-weight:bold;
    padding:2px;
    text-decoration-line:none;
    border:1px outset white;
    cursor: pointer;
    font-weight:bold;
    text-decoration-line: none;
    border-top-left-radius:5px;
	border-top-right-radius:5px;
	border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
	outline:none;
	transition:background-color 1s,color 1s;
}`;
document.body.appendChild(_menvlhclass);

export const  _menvlaclass=document.createElement("style"); 
_menvlaclass.innerHTML=`
.vmlink:active{
	animation-name: sk;
	animation-duration: 200ms;
}`;
document.body.appendChild(_menvlaclass);
export const  _menhidclass=document.createElement("style"); 
_menhidclass.innerHTML=`
._med_hidd{}
`;
document.body.appendChild(_menhidclass);

/*let _menilclass=_menclcass.cloneNode(true);_menclclass.backgroundColor='lightblue';*/
	//document.body.appendChild(_menvlclass);

export const  _menvlclass=document.createElement("style"); 
_menvlclass.innerHTML=`
.vmlink{
    display:inline-block;
    padding:2px;
	max-height:20px;
    margin-left:3px;
    background-color: lightblue;
    color:black;
    text-decoration:none;
    font-size:10px;
    font-weight:bold;
	border-radius:5px;
	margin-top:3px;
	cursor:pointer;
	transition:background-color 1s,color 1s;
	}`
	document.body.appendChild(_menvlclass);
export const  _menkeyclass=document.createElement("style"); 
document.body.appendChild(_menkeyclass);
_menkeyclass.sheet.insertRule(`@keyframes sk {
  25%  {transform: skewY(10deg);}
  75%  {transform: skewY(-10deg);}
}`);


