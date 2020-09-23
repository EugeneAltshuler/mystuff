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
export const  _mentclass=document.createElement("style"); 
_mentclass.innerHTML=`
._menut{
	position:relative;
	width:100%;
	z-index: 10;
	/*color: #fff;*/
	background:slategray;
    /*font-size:12px;
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

export const  _menbclass=document.createElement("style"); 
_menbclass.innerHTML=`
._menub{
	position:relative;
	width:99%;
	height:100%;
    /*border:5px outset black;;
	color: #000;*/
	background:white;
    /*font-size:12px;
    font-weight:bold;
	text-decoration-line: none;*/
	border-radius:5px;
	padding: 5px;
	display:flex;
	flex-direction:row;
	flex-wrap:wrap;
	
}`;
document.body.appendChild(_menbclass);

export const  _menwclass=document.createElement("style"); 
_menwclass.innerHTML=`
._white{
	position: relative;
	display:inline;
	background-color: white;
	color:black;
	text-decoration:none;
	font-size:12px;
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

	export const  _menrclass=document.createElement("style"); 
	_menrclass.innerHTML=`
	._menur{
	position:relative;
	width:100%;
	border:5px black;

	color: #fff;
	background:darkslategray;
    font-size:12px;
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
    font-size:12px;
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

export const  _menssmclass=document.createElement("style"); 
_menssmclass.innerHTML=`
._ssm{
	display:"flex";
	cursor:pointer;
	z-index: 15;
	color: #000;
	background-color:silver;
    font-size:12px;
    font-weight:bold;
	text-decoration: none;
	border-radius:5px;
	padding: 2px;
	flex-direction:column;
	flex-wrap:nowrap;
	transition:opacity 1s;

}`;
document.body.appendChild(_menssmclass);

export const  _menmovclass=document.createElement("style"); 
_menmovclass.innerHTML=`
.mov{
	content:' '
	min-width:30px;
	min-height:1px;
	padding-left:100px;
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


export const  _menspadclass=document.createElement("style"); 
_menspadclass.innerHTML=`
._spad{
	position:fixed;
	color: #000;
	text-decoration-line:none;
	background-color:silver;
	font-size:12px;
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
    font-size:12px;
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
    font-size:12px;
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
    font-size:12px;
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
    font-size:12px;
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
export const  phclass=document.createElement("style"); 
phclass.innerHTML=`
[placeholder]:empty::before {
    color: #555; 
    content: attr(placeholder);
}
[placeholder]:empty:focus::before {
	content: "";
	color: #555; 
}`;
document.body.appendChild(phclass);
