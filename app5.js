
import * as SSheetes from './app5.css.js';
import{rm} from "./rm.js";
export {rm};
export class ICfg{ 
	constructor(){this.cc="cmlink";  this.ic="vmlink"; } 
		}
export class MCfg{ 
	constructor(){this.mc="menu"; this.mct="menut"; this.mcr="menur"; this.mcb="menub";   this.rid=1; this.sr=true;
	this.mrootel=-1;} 
		}


export class it{
constructor(id,title,value,parent,typ=i,cfg=null){ this.id=id;this.title=title;this.value=value,this.parent=parent;this.type=typ;this.oldrid=null;
this.cfg=cfg==null?new ICfg():cfg; 	
this.itEl=document.createElement("div");
this.itmEl=document.createElement("div");

this.rndr=()=>{
	let itEl = this.itEl;
	let im=document.createElement('img');
	this.mim=document.createElement('img');		
	this.mim.className='_men_hidd'; this.mim.t=1;

		switch(this.type){	
			case "i": 	itEl.className=this.cfg.ic; im.src= "data:image/gif;base64,R0lGODlhAgAKAIABAPIHB////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAACAAoAAAIFhI8WG1gAOw==";  
					this.mim.src="data:image/gif;base64,R0lGODlhFAAKAIABAHPY9gAAACH5BAEKAAEALAAAAAAUAAoAAAIUjG+ggO2x2Ju02hovyrp7zXVhUwAAOw==";
					break;
			case "c": 	itEl.className=this.cfg.cc; im.src = "data:image/gif;base64,R0lGODlhDwANALMJAP//zvLto/PzuuO2LeHEAl1cW+LRXv////z8hf///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAAAPAA0AAAREMCVCaZEYk3OACMSVTUZpGlU1CWzrskZBCEht24MQz/c9IIMdrQcE6mRDXzGIxDl/wuISOGDOftNfdXfqni6FsHg8jgAAOw=="; 
			this.mim.src="data:image/gif;base64,R0lGODlhFAAKAKECAICAgP///wAAAAAAACH5BAEKAAAALAAAAAAUAAoAAAIUhI+hge2w2Ju02hpvWrr7nnkhUgAAOw==";

		} 

		itEl.append(im);itEl.append(this.title); itEl.append(this.mim); 
		//console.log("itel=",itEl);

		this.itmEl.className="_sm";//this.cfg.mc;
		this.itmEl.style.position='fixed'; 
		this.itmEl.style.display="none";
		this.itmEl.style.visibility='hidden'; 
		this.itmEl.style.opacity=0;
		//this.itmEl.style.textDecorationLine='none';

		/*this.itmEl.innerHTML=`<a style='text-decoration:none;' href="javascript:alert('Properties of itemtitle?')" >Properties</a><br><a  style='text-decoration:none;' href="javascript:alert('New Item in current Folder')" >New Item</a><br>
		<a  style='text-decoration:none;' href="javascript:alert('Edit itemtitle')" >Edit Item</a><br><a   style='text-decoration:none;' href="javascript:alert('Delete itemtitle ?')" >Delete Item</a><br>
		<a  style='text-decoration:none;'  href="javascript:alert('Alert1 itemtitle ?')"> Alert 1</a><br`;
		//document.body.append()*/

	
	this.itEl=itEl
	//console.log(this.itEl.querySelector('img._men_hidd'));
	}		
}
}


export class mnu
{
//items=items;
constructor(fu,trigger,menuhook='app',movehook='moveanchor',rootit=-1,items=[],result=[],mfarr=[],rfarr=[],rrfarr=[]){
	this.prefix="0"
	while(!isNaN(this.prefix.substr(0,1))){
	this.prefix= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); console.log('prefix=',this.prefix)}
	this.trigger=trigger
	this.srch=null; 
	this.srt=0; 
	this.asc=1; 
	this.cfg=new MCfg();
	this.items=items;
	this.result=result;
	this.rid=this.cfg.rid;
	this.sortmenu=()=>{
		let srtmnu=document.createElement("div");	srtmnu.className="_spad"; srtmnu.id=this.prefix+"srtmenu"; 
		srtmnu.innerHTML=`<div style='justify-content:space-between;'><span class='redclass' style='cursor:pointer;float:right;' id='${this.prefix}srtX'> &nbsp;X&nbsp; </span></div>
		<span id='${this.prefix}so0' style='cursor:pointer;' >OrderNumber Asc</span><br/><span  style='cursor:pointer;'  id='${this.prefix}so1' >OrderNumber Desc</span><br/><span  style='cursor:pointer;'  id='${this.prefix}so2' >Title Asc</span><br/>
		<span  style='cursor:pointer;'  id='${this.prefix}so3' >Title Desc</span><br/><span id='${this.prefix}so4'  style='cursor:pointer;'  >Value Asc</span><br/><span id='${this.prefix}so5'  style='cursor:pointer;'  >Value Desc</span>
		`;
		document.body.append(srtmnu);
		document.getElementById(this.prefix+'srtX').addEventListener('click',()=>{this.asc=1;this.srt=0; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
		document.getElementById(this.prefix+'so0').addEventListener('click',()=>{this.asc=1;this.srt=0; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
		document.getElementById(this.prefix+'so1').addEventListener('click',()=>{this.asc=-1;this.srt=0; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
		document.getElementById(this.prefix+'so2').addEventListener('click',()=>{this.asc=1;this.srt=1; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
		document.getElementById(this.prefix+'so3').addEventListener('click',()=>{this.asc=-1;this.srt=1; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
		document.getElementById(this.prefix+'so4').addEventListener('click',()=>{this.asc=1;this.srt=2; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
		document.getElementById(this.prefix+'so5').addEventListener('click',()=>{this.asc=-1;this.srt=2; this.render();document.getElementById(this.prefix+'srtmenu').style.display='none'; });
	}
////////////////////////////////////////////////////////////////////////////////////////////////////////
	this.sorton=(x,y)=>{
		let desc=0-this.asc;
		if (x.order>y.order) return this.asc;
		return desc;
		}
	this.sorttit=(x,y)=>{
		let desc=0-this.asc;
		if (x.title>y.title) return this.asc;
		if (x.title<y.title) return desc;
		if (x.title==y.title) return x.order>y.order?this.asc:desc;
		}
	////////////////////////////////////////////////////////////////////////
	this.sortval=(x,y)=>{
		let desc=0-this.asc;
		if (x.val>y.val) return this.asc;
		if (x.val<y.val) return desc;
		if (x.val==y.val) return x.order>y.order?this.asc:desc;
		}
		this.sortarr=[this.sorton,this.sorttit,this.sortval]
	
	this.sortmenu();
	const xm=document.createElement("div");
	xm.className="nm";
	xm.id="xmid";
	xm.style.width='100%';
	//if(move) xm.addEventListener('mousedown',move.dmd);
	let src= "data:image/gif;base64,R0lGODlhCgAKAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAKAAoAAAIWTIBgi9auWIzruHoP1RLipDyYtlVIAQA7";
	if(this.srch!=null)src="data:image/gif;base64,R0lGODlhCgAKAIABAP8AAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAKAAoAAAIWTIBgi9auWIzruHoP1RLipDyYtlVIAQA7";
	xm.innerHTML=`	<span class='move' style='min-width:100px; cursor:move;background-color:transparent;'id=${movehook} > &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; </span>
	 <span id='${this.prefix}x' class='redclass' style='float:right;top:5px;'> &nbsp; X &nbsp; </span>
	<span class='whiteclass' id='itsrt' style='float:right;'><img id='${this.prefix}srt' src= "data:image/gif;base64,R0lGODlhCgAKAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAKAAoAAAIVTACWqGnf1HEMvrqog6jv6VmhNZEFADs="></span>
	<span class='whiteclass' id='itsrc' style='float:right;'><img id='${this.prefix}src' src=${src}></span>
	<span class='_white' id='${this.prefix}itf' style='min-width:50px;float:right;visibility:hidden;border-radius:1px;' contenteditable='true' >&nbsp;</span>
	`;
	this.xm=xm;
////////////////////////////////////////////////////////////////////
this.getitembyid=(id)=>{ return this.items.filter(i=>i.id==id)[0]}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	this.items.forEach(i=> {
				if (typeof(i.set)==='undefined')
			{
			let kids=[];
			let siblings=[];
			let parents=[];
			this.items.forEach(k=>{
				if (k.parent===i.id)kids.push(k)
				if (k.parent===i.parent && i.id!=k.id)siblings.push(k)
				})
				let rl=-1;
				let tid=i.id
				//if (this.cfg.sr)rl=-2;
				if (this.cfg?.sr)rl=-2;
				if (this.cfg?.mrootel)rl=this.cfg.mrootel;
				while(!parents.some((t)=>tid==t)){
					let tit=this.getitembyid(tid); 
					if (!tit)break;
					if((!this.cfg.sr) && tid==rl) break;
					//console.log("tid:",tid)
					parents.unshift(tit.id); 
					if(this.cfg.sr && tid==rl) break;
					tid=tit.parent; 
				}
				i.parents=parents
		
		
		
		
					i.rndr();
					i.kids=kids.sort(this.sortarr[this.srt]);//sort((a,b)=>{ if(a.type!= b.type){return a.type>b.type? 1:-1;}else{return a.title>b.title? 1:-1}})
		
					i.siblings=siblings.sort(this.sortarr[this.srt])//sort((a,b)=>{ if(a.type!= b.type){return a.type>b.type? 1:-1;}else{return a.title>b.title? 1:-1}})
		;
					i.mnu=this;
					i.itEl.addEventListener("mouseenter",()=>console.log("qq"));
					i.set=true;
			}
		
		//console.log('mcitel=',i.itEl);
		//console.log('mcmenhidd=',i.itEl.querySelector('img'));
		i.itEl.querySelector('img._men_hidd').id=this.prefix+'mim'+i.id;
		//i.mim.id=this.prefix+'mim'+i.id;
		//document.body.append(i.itmEl);
	});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
this.render=(id=null)=>{
	let rit=this.getitembyid(rootit)
	if (!rit){alert("Root Item not found"); return;}
	if (rit.type!='c'){alert("Root Item should be a container"); return;}
	if (id==null ) id=this.rid; 
	else this.rid=id;
	{
		let disc=true;
		let tid=id;
		let par=[];
		let tit=this.getitembyid(tid);
		if (!tit){alert("Current Item not found.  \n Current Item will be reassigned to Root Item"); id=rootit; disc=false}
		if (tit.type!="c"){alert("Current should be a container.  \n Current Item will be reassigned to Root Item"); id=rootit;disc=false;}
		if (disc){
			while(!par.some((t)=>id==tid)){
				if(tid==rootit) {disc=false;break;}
				tit=this.getitembyid(tid); 
				if (!tit)break;
				par.unshift(tit.id); 
				tid=tit.parent; 
			}
		}
		if(disc){alert("Root item is not ancestor of current item. \n Current Item will be reassigned to Root Item"+par.toString());id=rootit;}

	}

	let mid=id
	this.mks=null;
	let src="data:image/gif;base64,R0lGODlhCgAKAIABAAAAAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAKAAoAAAIWTIBgi9auWIzruHoP1RLipDyYtlVIAQA7";
	if(this.srch!=null)src="data:image/gif;base64,R0lGODlhCgAKAIABAP8AAP///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAKAAoAAAIWTIBgi9auWIzruHoP1RLipDyYtlVIAQA7";
	let el=document.getElementById(this.prefix+"bmid"); if(el) el.remove();
	el=document.getElementById(this.prefix+"tmid"); if(el) el.remove();
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
let tarr=[]; let barr=[];
		let tid=id; 
		let count=0;
		const bm=document.createElement("div");
		bm.className='_menub';
		bm.id="bmid";
		bm.innerText='';


		const tm=document.createElement("div");
		tm.id=this.prefix+"tmid";
		tm.style.width="100%";

		tm.innerText="";
		tm.className="_menut";
		//tm.innerText='';
		this.roo=document.getElementById(menuhook);
		this.roo.style.display="block";
		this.roo.className="_menu";
		this.roo.innerText='';
		//this.roo.style.border="1px outset black;";
		this.roo.append(this.xm);
		this.roo.append(tm);
		document.getElementById(this.prefix+'itf').addEventListener('keydown',this.srchKey)
		document.getElementById(this.prefix+'x').addEventListener('click',this.close)
		document.getElementById(this.prefix+'src').addEventListener('click',this.srchClick);
		document.getElementById(this.prefix+'srt').addEventListener('click',this.togglesrt)

		const hr=document.createElement("hr");
		hr.setAttribute("width","100%"); 
		this.roo.append(hr);
		//roo.innerText+="<hr width=100%>"
		this.roo.append(bm);
		let rl=-1;
		if (rootit) rl=rootit
		
		while(!tarr.some((t)=>tid==t.id)){
				count++; let tit=this.getitembyid(tid); 
				if((!this.cfg.sr) && tid==rl) break;
				//console.log("tid:",tid)
				if(!tit)break; 
				tarr.unshift(tit); 
				if(this.cfg.sr && tid==rl) break;
				tid=tit.parent; 
				}

		if(this.srch==null)	barr=this.items.filter(i=>i.parent==id).sort(this.sortarr[this.srt]);//sort((a,b)=>{ if(a.type!= b.type){return a.type>b.type? 1:-1;}else{return a.title<b.title? 1:-1}});
		else	{
			this.srch=this.srch.toUpperCase();
			for(let w=0;w<this.items.length;w++){ 
				let i=this.items[w];
				if(this.parid(i.parents,this.rid) && i.title.toUpperCase().indexOf(this.srch)>=0) barr.push(i);
			}
			barr=barr.sort(this.sortarr[this.srt]);
			}
		//console.log("barr",barr); //console.log("tarr",tarr);
		

		tarr.forEach(i=>{
			/////////////////////////////////////////////////////////////
			let kids=[];
			let siblings=[];
			let parents=[];
			this.items.forEach(k=>{
				if (k.parent===i.id)kids.push(k)
				if (k.parent===i.parent && i.id!=k.id)siblings.push(k)
			})
			let rl=-1;
			let tid=i.id
			if (this.cfg?.sr)rl=-2;
			if (this.cfg?.mrootel)rl=this.cfg.mrootel;
			while(!parents.some((t)=>tid==t)){
				let tit=this.getitembyid(tid); 
				if (!tit)break;
				if((!this.cfg.sr) && tid==rl) break;
				parents.unshift(tit.id); 
				if(this.cfg.sr && tid==rl) break;
				tid=tit.parent; 
			}
			i.parents=parents
			//i.rndr();
			i.kids=kids.sort(this.sortarr[this.srt]);//sort((a,b)=>{ if(a.type!= b.type){return a.type>b.type? 1:-1;}else{return a.title>b.title? 1:-1}})

			i.siblings=siblings.sort(this.sortarr[this.srt])//sort((a,b)=>{ if(a.type!= b.type){return a.type>b.type? 1:-1;}else{return a.title>b.title? 1:-1}})
;
			i.mnu=this;
			i.itEl.addEventListener("mouseenter",()=>console.log("qq"));
			i.set=true;
	
			//////////////////////////////////////////////////////////////
			let t=i.itEl.cloneNode(true);
			t.addEventListener("click",()=>{this.render(i.id)})

			t.addEventListener("dragstart",(e)=>{
				e.dataTransfer.setData('text/plain',i.id);	
				e.dataTransfer.effectAllowed="move";
				});
			t.addEventListener("dragover",(e)=>{e.preventDefault();}); 
			t.addEventListener("drop",(e)=>{
				let id=e.dataTransfer.getData('text/plain');
				this.getitembyid(e.dataTransfer.getData('text/plain')).parent= i.id ; 
				this.render(mid); }); 
			tm.append(t);
			let im=document.getElementById(this.prefix+'mim'+i.id)
			im.addEventListener("mouseenter",(e)=>{this.mks=setTimeout(()=>this.rendermks(e,i),1000)});
			im.addEventListener("mouseleave",()=>{if(this.mks!=null) {clearTimeout(this.mks); this.mks=null;}});
			});

		barr.forEach(item=>{
			let r=item.itEl.cloneNode(true);r.draggable="true"; 
			/////////////////////////////////////////////////////
			r.addEventListener("dragstart",(e)=>{
				e.dataTransfer.setData('text/plain',item.id);	
				e.dataTransfer.effectAllowed="move";
				});
			////////////////////////////////////////////////////////////
			//r.addEventListener("dragenter",(e)=>{e.preventDefault();}); 
			r.addEventListener("dragover",(e)=>{e.preventDefault();}); 
			r.addEventListener("drop",(e)=>{
				let id=e.dataTransfer.getData('text/plain');
				let i=this.getitembyid(e.dataTransfer.getData('text/plain'));
				i.parent= item.id ; 
				this.render(mid); }); 

			//////////////////////////////////////////////////////////////////////
			r.addEventListener("click",(e)=>{
				fu(e,item,this.result,this.render,this.renderr);
			})
			bm.append(r);
			let im=document.getElementById(this.prefix+'mim'+item.id)
			im.addEventListener("mouseenter",(e)=>{if(this.itm!=null) {clearTimeout(this.itm); this.itm=null;
			} else this.itm=setTimeout(()=>this.renderitm(e,item),1000)});
			im.addEventListener("mouseleave",()=>{if(this.itm!=null) {clearTimeout(this.itm); this.itm=null;}});
			});
			this.renderr();
			//this.rendermks(items[4])
		

}
////////////////////////////////////////////////////////
this.parid=(par,id)=>{
	for (let q=0;q<par.length ;q++ ){ if (par[q]==id) return true;	}
	return false;
}
//////////////////////////////////////////////////////////////////
this.renderrrm=(e)=>{	
	
	let m=document.createElement('div');
	m.className='_sm'
	m.style.cursor="pointer";
	rrfarr.forEach(mf=>{
		let md=document.createElement('div')
		md.style.cursor="pointer";
		md.innerText=mf.name
		md.addEventListener('click',()=>mf.f(this.result));	
		m.append(md);	
		})
	//m.innerText= m.innerText.replace(/itemtitle/ig,i.title);
	document.body.append(m);
	m.style.textDecoration='none';
	m.style.visibility='visible';
	m.style.top=(e.clientY-10)+'px';
	m.style.left=(e.clientX-10)+'px';
	m.style.opacity=1;  
	m.addEventListener('mouseleave', ()=>{m.style.visibility='hiddene';m.style.opacity=0;});
	setTimeout(()=>{if(m){m.style.visibility='hidden';m.style.opacity=0;m.style.display="none";m.remove();} },3000)
};

//////////////////////////////////////////////////////////////////
this.renderitm=(e,i)=>{	
	
	i.itmEl.id=this.prefix+'itmel'+i.id; 
	i.itmEl.style.display="flex";
	let m=i.itmEl.cloneNode(true);
	m.style.cursor="pointer";
	mfarr.forEach(mf=>{
		if (mf.type.indexOf(i.type)>=0){
		let md=document.createElement('div')
		md.style.cursor="pointer";
		md.innerText=mf.name
		md.addEventListener('click',()=>mf.f(i));	
		m.append(md);	
		}
	})
	//m.innerText= m.innerText.replace(/itemtitle/ig,i.title);
	document.body.append(m);
	m.style.textDecoration='none';
	m.style.visibility='visible';
	m.style.top=(e.clientY-10)+'px';
	m.style.left=(e.clientX-10)+'px';
	m.style.opacity=1;  
	m.addEventListener('mouseleave', ()=>{m.style.visibility='hiddene';m.style.opacity=0;});
	setTimeout(()=>{if(m){m.style.visibility='hidden';m.style.opacity=0;m.style.display="none";m.remove();} },3000)
};
//////////////////////////////////////////////////////////////
this.rendermks=(e,i)=>{
	//console.log(e);
	let sm=document.createElement("div");
	sm.className="_sm"; //sm.style.zIndex=25;//this.cfg.mc;
	sm.style.top=(e.clientY-10)+'px';
	sm.style.left=(e.clientX-10)+'px';

	sm.id=this.prefix+"smid";
	sm.addEventListener('mouseleave', ()=>{
		let s=document.getElementById(this.prefix+'smid'); 
	if(s) s.remove();
	});

	let t=i.itEl.cloneNode(true);

	t.style.display="block";	
	t.style.selfAlign="center";
	sm.append(t);
	t=document.createElement("div"); t.className="_ssm"; t.style.fontWeight="bold";	t.style.display="block";	
	t.innerText='Children:';
	sm.append(t);
	let k=document.createElement("div"); k.className="_ssm";//this.cfg.mc	
	k.style.display="flex";	
	k.style.flexDirection="row";
	k.style.flexWrap='wrap';
	k.style.borderRadius="5px";
	k.style.border="3px black;";

	i.kids.forEach(i=>{		let t=i.itEl.cloneNode(true); 		//t.style.alignSelf="start";
	k.append(t);
	t.addEventListener('click',()=>{
				switch(i.type){
					case "c":this.render(i.id); break;
					case "i":
						let r=false;
						for(let q=0;q<this.result.length;q++){
							if (this.result[q]==i.id){r=true; break;}
							if(r) break;
							console.log("q=",q,"res=",this.result[q],"it=",i.id,"rel=",(this.result[q]==i.id),"q=",r);
							}
						if(!r) 
						{ 
						this.result.push(i.id); 
						this.renderr();
						}  
						break;
				}
			});});
			sm.append(k);

k=document.createElement("div"); k.className='_ssm';//this.cfg.mc
	k.style.flexDirection="row";
	k.style.flexWrap='wrap';
	k.style.borderRadius="5px";
	k.style.border="3px black;";	t=document.createElement("div"); t.className='_ssm';//this.cfg.mc
	t.innerText='Siblings:';
	//t.style.display="block";
	sm.append(t);
	i.siblings.forEach(s=>{		let t=s.itEl.cloneNode(true); k.append(t);//t.style.alignSelf="start"	
		t.style.display="inline-block";
		t.addEventListener('click',
			()=>{
		switch(s.type){
					case "c":this.render(s.id); break;
					case "i":
						let q=false;
						for(let p=0;p<this.result.length;p++){
							if (this.result[p]==s.id){q=true; break;}
							if (q) break;
							
							//console.log("p=",p,"res=",this.result[p],"it=",s.id,"rel=",(this.result[p]==s.id),"q=",q);
							}
						if(!q) 
						{ 
						this.result.push(s.id); 
						this.renderr();
						}  
						break;
				}
			});
			});
	sm.append(k);

	//console.log("sm=",sm);
document.body.append(sm);
}

//////////////////////////////////////////////////////////////////
this.renderrtm=(e,i)=>{	
	
	i.itmEl.id=this.prefix+'ritmel'+i.id; 
	i.itmEl.style.display="flex";
	let m=i.itmEl.cloneNode(true);
	m.style.cursor="pointer";
	rfarr.forEach(mf=>{
		if (mf.type.indexOf(i.type)>=0){
		let md=document.createElement('div')
		md.style.cursor="pointer";
		md.innerText=mf.name
		md.addEventListener('click',()=>mf.f(i));	
		m.append(md);	
		}
	})
	//m.innerText= m.innerText.replace(/itemtitle/ig,i.title);
	document.body.append(m);
	m.style.textDecoration='none';
	m.style.visibility='visible';
	m.style.top=(e.clientY-10)+'px';
	m.style.left=(e.clientX-10)+'px';
	m.style.opacity=1;  
	m.style.cursor="pointer";
	m.addEventListener('mouseleave', ()=>{m.style.visibility='hiddene';m.style.opacity=0;});
	setTimeout(()=>{if(m){m.style.visibility='hidden';m.style.opacity=0;m.style.display="none";m.remove();} },3000)
};

///////////////////////////////////////////////////////////////
this.renderr=()=>{
	let el=document.getElementById(this.prefix+"rmid"); if(el) el.remove();
	this.rm=document.createElement("div");
	this.rm.id=this.prefix+"rmid";
	this.rm.className='_menur'//this.cfg.mcr;
	this.rm.style.border="5px white";
	this.rm.innerText="Selected:";

	
	
	this.rma=document.createElement("div");
	this.rma.className='_menur'//this.cfg.mcr;
	this.rma.style.width="95%";
	//this.rma.style.border="3px white";

	this.rma.style.flexDirection="row";
	this.result.forEach(i=>{
	let ir=this.getitembyid(i)
	let r=ir.itEl.cloneNode(true);
	let im=r.querySelector("img._men_hidd"); 
	im.id=this.prefix+'rim'+ i;
	this.rma.append(r);
	r.addEventListener('dblclick',()=>{
		console.log("dbl");
		for(let q=0;q<this.result.length;q++){
			if(this.result[q]==i)this.result.splice(q,1);
			//break;
		}
						this.renderr();
	})
r.addEventListener("dragover",(e)=>{e.preventDefault();}); 
r.addEventListener("drop",(e)=>{
				let id=e.dataTransfer.getData('text/plain');
				if(!this.result.some(q=>q==id) && this.getitembyid(id).type=="i"){this.result.push(id);	this.renderr();} }); 
	im=r.querySelector('#'+this.prefix+'rim'+ i)
	im.addEventListener("mouseenter",(e)=>{if(this.rtm!=null) {clearTimeout(this.rtm); this.rtm=null;
	} else this.rtm=setTimeout(()=>this.renderrtm(e,ir),1000)});
	im.addEventListener("mouseleave",()=>{if(this.rtm!=null) {clearTimeout(this.rtm); this.rtm=null;}});

	})
	if(this.result!=[]){
	let mim=document.createElement('img');		
	mim.src="data:image/gif;base64,R0lGODlhFAAKAKECAICAgP///wAAAAAAACH5BAEKAAAALAAAAAAUAAoAAAIUhI+hge2w2Ju02hpvWrr7nnkhUgAAOw==";
	mim.addEventListener("mouseenter",(e)=>{if(this.rrtm!=null) {clearTimeout(this.rrtm); this.rrtm=null;
	} else this.rtm=setTimeout(()=>this.renderrrm(e),1000)});
	mim.addEventListener("mouseleave",()=>{if(this.rrtm!=null) {clearTimeout(this.rrtm); this.rrtm=null;}});
	this.rma.append(mim);
	}
	this.rm.addEventListener("dragover",(e)=>{e.preventDefault();}); 
	this.rm.addEventListener("drop",(e)=>{
				let id=e.dataTransfer.getData('text/plain');
				if(!this.result.some(q=>q==id) && this.getitembyid(id).type=="i"){this.result.push(id);	this.renderr();} }); 
this.rm.append(this.rma)
this.roo.append(this.rm);
	}

//////////////////////////////////////////////////////////////////////////////////////
this.close=(e)=> setTimeout(()=>{
	document.getElementById("trigger").style.display="block";
	 var child = this.roo.lastElementChild;  
        while (child) { 
            this.roo.removeChild(child); 
            child = this.roo.lastElementChild; }
						this.roo.innerText=''; 
	this.roo.className='';
	let tebu=this;
	tebu=null;
	} 
	,100);
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
this.srchClick=(e)=>{	let el=document.getElementById(this.prefix+'itf');
			if(!this.srch){
				
				if (el.style.visibility=='hidden')
				{ el.style.visibility='visible';}
			else{
				if(el.innerText.length>0 && 
				el.innerText!="Enter search filter" &&el.innerText!="&nbsp;" ){
				this.srch=el.innerText.trim();
				//console.log("rid0=",this.rid)
				this.render(); }
		}
			}
		else{
			el.style.visibility='hidden';
			this.srch=null; this.render(this.rid);  
		}
		}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
this.srchKey=(e)=>{
	if (e.keyCode!=13 && e.KeyCode!=93)return true;
	else{this.srchClick(e); return false;}
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
this.togglesrt=(e)=>{
	let el=document.getElementById(this.prefix+'srtmenu');
	el.style.top=(e.clientY-10)+'px';
	el.style.left=(e.clientX-30)+'px';
	el.style.display='flex'
}

}}//end of mnu

