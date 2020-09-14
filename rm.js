export class rm{
	constructor(hook,menuhook){this.p=[0,0,0,0];
	this.el=document.getElementById(menuhook);
	this.her=document.getElementById(hook);
	this.her.pp=this.el;this.zi=100;
	this.sw=0;this.sh=0;this.sx=0;this.sw=0;
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ed
	this.ed=(e)=>{	
		if(!this.el)return;
		e=e|| window.event;
		this.p[0]=this.p[2]-e.clientX; 
		this.p[1]=this.p[3]-e.clientY;
		this.p[2]=e.clientX; this.p[3]=e.clientY; 
		this.el.style.top = this.el.offsetTop - this.p[1] + "px"; 
		this.el.style.left = this.el.offsetLeft-this.p[0] + "px";
		}
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cde
	this.cde=()=>{
		 document.removeEventListener("mousemove",this.ed);	
		document.removeEventListener("mouseup",this.cde);
		}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////dmd
	this.dmd=(e)=>{

		if(!this.el) return; 
		//if(this.el){
		this.el=document.getElementById(menuhook); 
		if(e.target.id=='x') return;
		//if(this.el)this.el.style.zIndex=""+ ++this.zi; 
		e=e|| window.event; 
		//}
		this.p[2]=e.clientX;
		this.p[3]=e.clientY;
		document.addEventListener("mouseup",this.cde);
		document.addEventListener("mousemove",this.ed);
		}
//////////////////////////////////////////////// move prep
		this.her.addEventListener('mousedown',this.dmd);
	//////////////////////////////////////////////////resize prep
}}