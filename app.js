// LE QUADRANT — app.js v4
var bk={t:null,pC:0,pP:0,dt:null,sl:null,dur:'1h',pl:2,filmage:false,coaching:false,bar:false,tp:0};
var cy=2026,cm=4;
var MN=['JANVIER','FÉVRIER','MARS','AVRIL','MAI','JUIN','JUILLET','AOÛT','SEPTEMBRE','OCTOBRE','NOVEMBRE','DÉCEMBRE'];
var sD2=false;

// SPLASH
(function(){
  var L='LE QUADRANT'.split(''),c=document.getElementById('spText');
  L.forEach(function(l,i){
    var s=document.createElement('span');
    s.className='sp-letter'+('QUAD'.includes(l)?' q-color':'');
    s.textContent=l===' '?'\u00a0':l;
    s.style.animation='spLetterIn .4s ease '+(1.2+i*.07)+'s forwards';
    if(l===' ')s.style.width='.4em';
    c.appendChild(s);
  });
  setTimeout(function(){var sp=document.getElementById('splash');if(sp){sp.classList.add('hide');setTimeout(function(){sp.style.display='none';},900);}},2800);
})();

window.addEventListener('scroll',function(){var n=document.getElementById('nav');if(window.scrollY>50)n.classList.add('sc');else n.classList.remove('sc');});
function TN(){document.getElementById('nm').classList.toggle('open');}
function CN(){document.getElementById('nm').classList.remove('open');}
function goT(){P('home');CN();setTimeout(function(){var e=document.getElementById('tr');if(e)e.scrollIntoView({behavior:'smooth'});},100);}
function goC(){P('home');setTimeout(function(){var e=document.getElementById('chill');if(e)e.scrollIntoView({behavior:'smooth'});},100);}

var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');if(!sD2&&e.target.closest&&e.target.closest('#stats')){sD2=true;animC();}}});},{threshold:.1});
function obsEl(c){c.querySelectorAll('.fi').forEach(function(el){obs.observe(el);});}
function animC(){[[1,4],[2,200],[3,3],[4,22]].forEach(function(t){var el=document.getElementById('c'+t[0]);if(!el)return;var v=0,tm=setInterval(function(){v+=Math.ceil(t[1]/1500*16*3);if(v>=t[1]){v=t[1];clearInterval(tm);}el.textContent=v;},16);});}

function P(pg){
  document.querySelectorAll('.pv').forEach(function(e){e.classList.remove('active');});
  var el=document.getElementById('page-'+pg);
  if(!el)return;
  el.classList.add('active');
  if(!el.innerHTML.trim())rPage(pg,el);
  window.scrollTo(0,0);
}
function rPage(pg,c){
  var fns={home:rHome,tarifs:rTarifs,coaches:rCoaches,histoire:rHistoire,contact:rContact,mentions:rMentions,cgv:rCGV,rgpd:rRGPD};
  if(fns[pg])fns[pg](c);
  setTimeout(function(){obsEl(c);},50);
}

// ICONS
var iCourt='<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="4" width="28" height="28" rx="2" stroke="#C9A84C" stroke-width="1.5"/><line x1="18" y1="4" x2="18" y2="32" stroke="#C9A84C" stroke-width="1"/><line x1="4" y1="18" x2="32" y2="18" stroke="#C9A84C" stroke-width="1"/></svg>';
var iPeople='<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="12" cy="13" r="6" stroke="#C9A84C" stroke-width="1.5"/><circle cx="24" cy="13" r="6" stroke="#C9A84C" stroke-width="1.5"/><path d="M3 32c0-5 4-8 9-8M33 32c0-5-4-8-9-8" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/></svg>';
var iStar='<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><polygon points="18,3 21.5,12 32,12 23.5,18 26.5,28 18,22 9.5,28 12.5,18 4,12 14.5,12" stroke="#C9A84C" stroke-width="1.5" fill="none"/></svg>';
var iClock='<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="13" stroke="#C9A84C" stroke-width="1.5"/><polyline points="18,9 18,18 24,24" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/></svg>';
var iCheck='<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#C9A84C" stroke-width="1.2"/><path d="M5 8.5C6 10 9 11 11 9" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/></svg>';
var iGoogle='<svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>';

var TR=[
  {id:'C1',name:'Le Central',type:'Panoramique Indoor · Standard',specs:['6.5m sous plafond','Gazon FFT','LED dorés'],pC:25,pP:32,badge:'bavail',bTxt:'Disponible',bg1:'#0d1a3a',bg2:'#1a3a6e',lc:'#C9A84C'},
  {id:'A2',name:"L'Arena",type:'Panoramique Indoor · Tribunes',specs:['6.5m sous plafond','Tribunes','LED violets'],pC:28,pP:36,badge:'bavail',bTxt:'Disponible',bg1:'#1a0d3a',bg2:'#3a1a6e',lc:'#7B5EA7'},
  {id:'P3',name:'Le Panoramique',type:'Vitrage 360° · Premium',specs:['6.5m sous plafond','Vitrage 360°','LED verts'],pC:30,pP:38,badge:'bavail',bTxt:'Disponible',bg1:'#0d3a1a',bg2:'#1a6e3a',lc:'#1D9E75'},
  {id:'V4',name:'Le VIP',type:'Premium · Sonorisation · Service',specs:['8m sous plafond','Sonorisation','LED dorés ×2'],pC:35,pP:45,badge:'bvip',bTxt:'VIP Premium',bg1:'#3a1a0d',bg2:'#6e3a1a',lc:'#C9A84C'}
];

function mkTSVG(t){
  var vip=t.id==='V4'?('<circle cx="300" cy="225" r="65" fill="none" stroke="'+t.lc+'" stroke-width="1.5" opacity=".25" style="animation:courtGlow 3.5s ease .5s infinite"/><circle cx="300" cy="225" r="100" fill="none" stroke="'+t.lc+'" stroke-width="1" opacity=".12" style="animation:courtGlow 5s ease 1s infinite"/>'):'';
  return '<svg class="tc-vis" viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">'+
    '<rect width="600" height="450" fill="'+t.bg1+'"/>'+
    '<rect x="60" y="60" width="480" height="330" fill="'+t.bg2+'" rx="2" opacity=".8"/>'+
    '<line x1="300" y1="75" x2="300" y2="375" stroke="'+t.lc+'" stroke-width="1" opacity=".2"/>'+
    '<line x1="75" y1="225" x2="525" y2="225" stroke="'+t.lc+'" stroke-width="1" opacity=".2"/>'+
    '<rect x="150" y="135" width="300" height="180" fill="none" stroke="'+t.lc+'" stroke-width="1" opacity=".2"/>'+
    '<circle cx="300" cy="225" r="30" fill="none" stroke="'+t.lc+'" stroke-width="1" opacity=".3" style="animation:courtGlow 4s ease infinite"/>'+vip+
    '<rect x="75" y="75" width="450" height="4" fill="'+t.lc+'" opacity=".9" style="animation:ledPulse 3s ease infinite"/>'+
    '<rect x="75" y="371" width="450" height="4" fill="'+t.lc+'" opacity=".9" style="animation:ledPulse 3s ease .5s infinite"/>'+
    '<rect x="75" y="75" width="4" height="300" fill="'+t.lc+'" opacity=".9" style="animation:ledPulse 3s ease 1s infinite"/>'+
    '<rect x="521" y="75" width="4" height="300" fill="'+t.lc+'" opacity=".9" style="animation:ledPulse 3s ease 1.5s infinite"/>'+
    '<line x1="75" y1="75" x2="525" y2="75" stroke="'+t.lc+'" stroke-width="2.5" opacity=".7" stroke-dasharray="8,4" style="animation:ledFlow 3s linear infinite"/>'+
    '<line x1="75" y1="375" x2="525" y2="375" stroke="'+t.lc+'" stroke-width="2.5" opacity=".7" stroke-dasharray="8,4" style="animation:ledFlow 3s linear infinite reverse"/>'+
    '<circle cx="75" cy="75" r="6" fill="'+t.lc+'" style="animation:ledPulse 2s ease infinite"/>'+
    '<circle cx="525" cy="75" r="6" fill="'+t.lc+'" style="animation:ledPulse 2s ease .5s infinite"/>'+
    '<circle cx="75" cy="375" r="6" fill="'+t.lc+'" style="animation:ledPulse 2s ease 1s infinite"/>'+
    '<circle cx="525" cy="375" r="6" fill="'+t.lc+'" style="animation:ledPulse 2s ease 1.5s infinite"/>'+
    '<text x="300" y="28" fill="'+t.lc+'" font-family="Montserrat,sans-serif" font-size="9" font-weight="700" letter-spacing="4" text-anchor="middle" opacity=".5">'+t.name.toUpperCase()+' · '+t.id+'</text>'+
    '</svg>';
}

function mkTC(t){
  return '<div class="tc" onclick="OR()">'+mkTSVG(t)+
    '<span class="tc-badge '+t.badge+'">'+t.bTxt+'</span>'+
    '<div class="tc-info">'+
    '<div class="tc-name">'+t.name+'</div>'+
    '<div class="tc-type">'+t.type+'</div>'+
    '<div class="tc-specs">'+t.specs.map(function(s){return '<span class="tc-spec">'+s+'</span>';}).join('')+'</div>'+
    '<div class="tc-price">H. creuse <strong>'+t.pC+'€/h</strong> · H. pleine <strong>'+t.pP+'€/h</strong></div>'+
    '</div>'+
    '<div class="tc-hover"><span style="color:#C9A84C;font-size:.72rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;border:1px solid #C9A84C;padding:.6rem 1.5rem">Réserver</span></div>'+
    '</div>';
}

var COA=[
  {i:'GF',n:'Gaël Fayol',r:'Co-fondateur · Co-Gérant',s:'Technique & Compétition',b:'BPJEPS Tennis-Padel. Classé P100.',tg:['55€/h','Coach'],bg:'linear-gradient(160deg,#0A0F2E,#1a2060)'},
  {i:'NE',n:'Noaïm El Houzi',r:'Co-fondateur · Co-Gérant',s:'Tactique & Performance',b:'BPJEPS Tennis-Padel. Compétiteur régional.',tg:['55€/h','Coach'],bg:'linear-gradient(160deg,#0A0F2E,#1a3a20)'},
  {i:'SS',n:"S'sana Salim",r:'Co-fondatrice · Associée',s:'Initiation & Familles',b:"BPJEPS. 6 ans d'expérience. Enfants dès 8 ans.",tg:['55€/h','Coach'],bg:'linear-gradient(160deg,#2a0a1a,#0A0F2E)'},
  {i:'Ti',n:'Timoté',r:'Co-fondateur · Associé',s:'Bar & Accueil',b:"Responsable Chill Corner & service bord terrain. L'âme sociale du Quadrant.",tg:['Bar','Accueil'],bg:'linear-gradient(160deg,#3a1a0d,#0A0F2E)',nc:true}
];
function mkCC(c){
  return '<div class="cc"><div class="cc-ph" style="background:'+c.bg+'"><div class="cc-av">'+c.i+'</div></div>'+
    '<div class="ccb"><div class="stars">★★★★★</div><div class="cc-name">'+c.n+'</div><div class="cc-role">'+c.r+'</div><div class="cc-spec">'+c.s+'</div>'+
    '<div class="cc-bio">'+c.b+'</div>'+
    '<div class="cc-btns">'+c.tg.map(function(t){return '<span class="cc-tag">'+t+'</span>';}).join('')+'</div>'+
    '<button class="btn-cc" onclick="'+(c.nc?"P('contact')":'OR()')+'">'+( c.nc?'Contact':'Réserver')+'</button></div></div>';
}

var REV=[
  {n:'Thomas M.',c:'Bordeaux · 2 sem.',i:'https://randomuser.me/api/portraits/men/32.jpg',t:"Les terrains LED sont magnifiques. L'accueil de Timoté au bar, on ne veut plus partir !"},
  {n:'Camille D.',c:'Mérignac · 1 mois',i:'https://randomuser.me/api/portraits/women/44.jpg',t:"Gaël est un coach incroyable. Le Panoramique vitrage 360° est sublime."},
  {n:'Alexandre P.',c:'Talence · 1 sem.',i:'https://randomuser.me/api/portraits/men/89.jpg',t:"L'option filmage à 5€ c'est une tuerie ! Service bord terrain de Timoté, parfait."}
];
function mkRev(r){
  return '<div class="rc"><div class="rc-q">"</div><div class="stars">★★★★★</div><p class="rc-tx">'+r.t+'</p>'+
    '<div class="rev"><img src="'+r.i+'" class="rev-img" onerror="this.style.display=\'none\'"><div><div class="rev-n">'+r.n+'</div><div class="rev-c">'+r.c+'</div></div></div></div>';
}

function rHome(c){c.innerHTML=
'<section class="hero"><div class="hbg2"></div><div class="hpat"></div>'+
'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.05"><svg viewBox="0 0 800 500" style="width:90%;height:90%"><rect x="50" y="50" width="700" height="400" fill="none" stroke="white" stroke-width="3"/><line x1="400" y1="50" x2="400" y2="450" stroke="white" stroke-width="2"/><line x1="50" y1="250" x2="750" y2="250" stroke="white" stroke-width="2"/><rect x="200" y="150" width="400" height="200" fill="none" stroke="white" stroke-width="1.5"/><circle cx="400" cy="250" r="40" fill="none" stroke="white" stroke-width="2"/></svg></div>'+
'<div class="hovl"></div>'+
'<div class="hc"><div class="hbadge">Club de Padel Indoor Premium — Bordeaux Métropole</div><h1 class="htitle"><span class="le">Le</span>QUADRANT</h1>'+
'<p class="hsl">"Plus qu\'un match, créez des liens."</p><p class="hsub">4 terrains LED · Coaches BPJEPS · Chill Corner</p>'+
'<div class="hbtns"><button class="bp" onclick="OR()">Réserver un terrain</button><button class="bo" onclick="document.getElementById(\'tr\').scrollIntoView({behavior:\'smooth\'})">Découvrir le club</button></div></div>'+
'<div class="hscr" onclick="document.getElementById(\'stats\').scrollIntoView({behavior:\'smooth\'})"><span>Découvrir</span><div class="hscr-a"></div></div></section>'+

'<section style="background:var(--cr)" id="stats"><div class="si"><div style="text-align:center;margin-bottom:1rem"><span class="stag">Le Quadrant en chiffres</span><h2 class="stitle std" style="text-align:center">L\'Excellence, Mesurable</h2></div>'+
'<div class="sgrp fi"><div class="sc2"><div class="sico">'+iCourt+'</div><div class="sn"><span id="c1">0</span><span class="u">+</span></div><div class="sl">Terrains indoor panoramiques</div></div>'+
'<div class="sc2"><div class="sico">'+iPeople+'</div><div class="sn"><span id="c2">0</span><span class="u">+</span></div><div class="sl">Membres attendus — An 1</div></div>'+
'<div class="sc2"><div class="sico">'+iStar+'</div><div class="sn"><span id="c3">0</span></div><div class="sl">Coaches certifiés BPJEPS</div></div>'+
'<div class="sc2"><div class="sico">'+iClock+'</div><div class="sn"><span id="c4">0</span><span class="u">h</span></div><div class="sl">7j/7 — De 7h à 22h</div></div></div></div></section>'+

'<section style="background:var(--n)" id="tr"><div class="si"><div class="fi"><span class="stag">Nos installations</span><h2 class="stitle stl">4 Terrains d\'Exception</h2><p class="ssub ssub-l">Courts indoor certifiés FFT, rubans LED immersifs, hauteur sous plafond jusqu\'à 8m.</p></div></div>'+
'<div class="tgrid fi">'+TR.map(mkTC).join('')+'</div>'+
'<div class="service-banner fi"><div class="service-inner">'+
'<span class="stag">Service exclusif</span><h2 class="stitle stl" style="font-size:clamp(1.5rem,3vw,2.2rem);margin-bottom:.5rem">Rafraîchissement au bord du terrain</h2>'+
'<p class="ssub ssub-l" style="margin:0 auto;text-align:center;max-width:500px">Timoté et son équipe vous apportent boissons et snacks directement sur votre court.</p>'+
'<div class="service-grid">'+
'<div class="svc-card"><div class="svc-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 4h10v8a5 5 0 01-10 0V4z" stroke="#C9A84C" stroke-width="1.5"/><line x1="3" y1="7" x2="6" y2="7" stroke="#C9A84C" stroke-width="1.5"/></svg></div><div class="svc-name">Boissons fraîches</div><div class="svc-desc">Eau, sodas, jus frais, isotoniques livrés pendant votre partie.</div><div class="svc-price">À partir de 3€</div></div>'+
'<div class="svc-card"><div class="svc-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="8" width="16" height="10" rx="2" stroke="#C9A84C" stroke-width="1.5"/><path d="M7 8V6a4 4 0 018 0v2" stroke="#C9A84C" stroke-width="1.5"/></svg></div><div class="svc-name">Pack récupération</div><div class="svc-desc">Shaker protéiné + barre énergétique + boisson de récupération.</div><div class="svc-price">8€ le pack</div></div>'+
'<div class="svc-card"><div class="svc-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="6" width="14" height="10" rx="1" stroke="#C9A84C" stroke-width="1.5"/><line x1="8" y1="6" x2="8" y2="16" stroke="#C9A84C" stroke-width="1"/><line x1="14" y1="6" x2="14" y2="16" stroke="#C9A84C" stroke-width="1"/></svg></div><div class="svc-name">Snacks & planches</div><div class="svc-desc">Fruits, noix, fromages, charcuterie au bord du terrain.</div><div class="svc-price">À partir de 6€</div></div>'+
'</div></div></div>'+
'<div class="si" style="padding-top:2rem;padding-bottom:2rem"><div class="fi" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;padding:2rem;background:var(--gb)">'+
['Raquettes incluses','3 balles Head Pro','Vestiaires premium','WiFi haut débit','Parking gratuit','Filmage +5€'].map(function(l){return '<div style="text-align:center;padding:.75rem"><div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--n)">'+l+'</div></div>';}).join('')+
'</div></div></section>'+

'<section style="overflow:hidden" id="chill"><div class="cw">'+
'<div class="ci-side"><img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&auto=format&fit=crop" alt="Chill Corner Bar" onerror="this.parentNode.style.background=\'linear-gradient(135deg,#1a2060,#0A0F2E)\'">'+
'<div class="ci-ovl"></div><div class="ci-lbl"><div style="font-family:\'Cormorant Garamond\',serif;font-size:2.5rem;font-style:italic;color:#C9A84C;line-height:1">Le Chill</div><div style="font-family:\'Cormorant Garamond\',serif;font-size:2.5rem;font-style:italic;color:rgba(255,255,255,.7);line-height:1">Corner</div><div style="width:40px;height:1px;background:#C9A84C;margin-top:.75rem;opacity:.6"></div></div></div>'+
'<div class="cc-content"><span class="stag">Bar & Club House</span><h2 class="stitle stl" style="font-size:clamp(1.5rem,3vw,2.2rem)">Après le match,<br>le vrai plaisir commence</h2>'+
'<p style="font-size:.85rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:1.5rem">Le Quadrant ne s\'arrête pas au dernier point. Notre Chill Corner est l\'endroit où les matchs se racontent et où les amitiés se forgent.</p>'+
'<ul class="cil">'+['Cafés, thés et infusions premium','Smoothies & jus frais pressés maison','Bières artisanales & boissons fraîches','Snacks & planches à partager','Service bord terrain sur commande','Playlist curatée & ambiance lounge'].map(function(i){return '<li><div class="cicn">'+iCheck+'</div>'+i+'</li>';}).join('')+'</ul>'+
'<div class="tbadge"><div class="tav">Ti</div><div><div style="font-size:.85rem;font-weight:700;color:#fff">Timoté — Co-fondateur & Responsable Bar</div><div style="font-size:.65rem;color:#C9A84C;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-top:.15rem">Co-fondateur · Associé · Âme du Chill Corner</div><div style="font-size:.72rem;color:rgba(255,255,255,.5);margin-top:.35rem;font-style:italic;font-family:\'Cormorant Garamond\',serif">"Le bar, c\'est là où Le Quadrant devient un lieu de vie."</div></div></div>'+
'<div style="margin-top:1.5rem"><button class="pdf-dl-btn" onclick="dlPDF()"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm5 0v5h5"/></svg>Télécharger la carte du bar</button></div>'+
'<p class="ctl">"Le Quadrant, c\'est plus qu\'un club. C\'est un lieu de vie."</p></div></div></section>'+

'<section style="background:var(--gb)"><div class="si"><div class="fi" style="text-align:center"><span class="stag">Notre équipe</span><h2 class="stitle std" style="text-align:center">Les 4 Co-fondateurs</h2><p class="ssub" style="text-align:center;margin:0 auto">À égalité, chacun expert dans son domaine.</p></div><div class="cgrid fi">'+COA.map(mkCC).join('')+'</div></div></section>'+

'<section style="background:var(--w)"><div class="si"><div class="fi" style="text-align:center">'+
'<div style="display:inline-flex;align-items:center;gap:.75rem;border:1px solid rgba(10,15,46,.1);padding:.5rem 1.25rem;margin:0 auto 1.5rem;background:#fff">'+iGoogle+'<span style="font-size:.75rem;font-weight:700;color:var(--n)">4.9/5 — Note Google vérifiée</span></div>'+
'<span class="stag">Avis de nos membres</span><h2 class="stitle std">Ce que disent nos joueurs</h2></div>'+
'<div class="rgrid fi">'+REV.map(mkRev).join('')+'</div></div></section>'+

'<section style="background:var(--cr)"><div class="si"><div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center" class="fi">'+
'<div><span class="stag">Notre histoire</span><h2 class="stitle std">Nés d\'une passion partagée</h2><p style="font-size:.9rem;color:rgba(26,26,46,.65);line-height:1.9;margin-bottom:1.5rem">Quatre co-fondateurs égaux — Gaël, Noaïm, Timoté et S\'sana — unis par la même frustration : l\'absence à Bordeaux d\'un club padel vraiment premium.</p><button class="bp" onclick="P(\'histoire\')">Notre histoire complète</button></div>'+
'<div style="background:var(--n);padding:2.5rem">'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">'+
[['GF','Gaël Fayol','Co-fondateur · Co-Gérant'],['NE','Noaïm El Houzi','Co-fondateur · Co-Gérant'],['Ti','Timoté','Co-fondateur · Bar & Accueil'],['SS',"S'sana Salim",'Co-fondatrice · Coach']].map(function(x){
  return '<div style="padding:1.25rem;background:rgba(255,255,255,.06);border:1px solid rgba(201,168,76,.2)"><div style="font-family:\'Playfair Display\',serif;font-size:.95rem;font-weight:700;color:#fff">'+x[1]+'</div><div style="font-size:.58rem;color:#C9A84C;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-top:.2rem">'+x[2]+'</div></div>';
}).join('')+
'</div><div style="text-align:center;padding:1.5rem;border:1px solid rgba(201,168,76,.2)"><div style="font-size:.6rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:.5rem">Ouverture prévue</div><div style="font-family:\'Playfair Display\',serif;font-size:2rem;font-weight:700;color:#C9A84C">T4 2026</div></div>'+
'</div></div></div></section>'+

'<section style="background:var(--w)" id="map"><div style="max-width:1200px;margin:0 auto;padding:3rem 2rem 0">'+
'<div class="fi" style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem">'+
'<div><span class="stag">Nous trouver</span><h2 class="stitle std" style="margin-bottom:.25rem">Bordeaux Métropole</h2><p class="ssub" style="font-size:.8rem">Gironde (33) — Adresse précise T4 2026</p></div>'+
'<button class="bp" onclick="P(\'contact\')">Nous contacter</button></div></div>'+
'<div class="fi">'+
'<iframe class="maps-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90786.58!2d-0.63!3d44.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b1ce71b!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Le Quadrant Bordeaux"></iframe>'+
'<div class="maps-info-bar"><div class="mib-cell"><div class="mib-label">Localisation</div><div class="mib-val">Bordeaux Métropole (33)</div></div><div class="mib-cell"><div class="mib-label">Horaires</div><div class="mib-val">7j/7 · 7h00–22h00</div></div><div class="mib-cell"><div class="mib-label">Contact</div><div class="mib-val"><a href="mailto:contact@lequadrant.fr">contact@lequadrant.fr</a></div></div><div class="mib-cell"><div class="mib-label">Parking</div><div class="mib-val">Gratuit sur place</div></div></div>'+
'</div></section>'+

'<section class="cta-sec"><div style="position:relative" class="fi"><div style="font-family:\'Playfair Display\',serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:.75rem">Prêt à rejoindre Le Quadrant ?</div><p style="font-size:.85rem;color:rgba(255,255,255,.5);margin-bottom:2.5rem">Réservez votre terrain — ouverture T4 2026</p><div class="hbtns"><button class="bp" onclick="OR()">Réserver maintenant</button><button class="bo" onclick="P(\'contact\')">Nous contacter</button></div></div></section>';
}

function rTarifs(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:1200px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Nos offres</span><h1 class="stitle stl">Tarifs & Abonnements</h1><p class="ssub ssub-l">Transparence totale.</p></div></div><div style="max-width:1200px;margin:0 auto;padding:4rem 2rem">'+
'<div class="tab-menu"><button class="tbt active" onclick="ST(\'terrain\')">Terrains</button><button class="tbt" onclick="ST(\'coaching\')">Coaching</button><button class="tbt" onclick="ST(\'abonnement\')">Abonnement</button><button class="tbt" onclick="ST(\'events\')">Événements</button></div>'+
'<div id="tab-terrain" class="tabc active"><div style="border:1px solid rgba(10,15,46,.08)">'+
'<div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;background:var(--n)"><div><div style="font-size:.85rem;font-weight:700;color:#fff">Terrain</div><div style="font-size:.72rem;color:rgba(255,255,255,.4)">LED & hauteur plafond</div></div><div style="display:flex;gap:2rem"><div style="text-align:right"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:rgba(255,255,255,.4)">H. Creuse</div><div style="font-size:.6rem;color:rgba(255,255,255,.3)">Lun-Ven 7h-17h</div></div><div style="text-align:right;min-width:70px"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:rgba(255,255,255,.4)">H. Pleine</div><div style="font-size:.6rem;color:rgba(255,255,255,.3)">17h-22h+WE</div></div></div></div>'+
TR.map(function(t,i){return '<div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;border-top:1px solid rgba(10,15,46,.06)'+(i%2?' background:var(--gb)':'')+'">'+'<div><div style="font-size:.85rem;font-weight:700;color:var(--n)">'+t.name+'</div><div style="font-size:.72rem;color:rgba(26,26,46,.5)">'+t.specs.join(' · ')+'</div></div>'+'<div style="display:flex;gap:2rem"><div style="text-align:right;min-width:55px"><div style="font-family:\'Playfair Display\',serif;font-size:1.2rem;font-weight:700;color:#2D5A3D">'+t.pC+'€/h</div></div><div style="text-align:right;min-width:55px"><div style="font-family:\'Playfair Display\',serif;font-size:1.2rem;font-weight:700;color:#C9A84C">'+t.pP+'€/h</div></div></div></div>';}).join('')+
'</div><div style="margin-top:1.5rem;padding:1.5rem;background:var(--cr);border-left:3px solid #C9A84C"><p style="font-size:.82rem;color:rgba(26,26,46,.65);line-height:1.7"><strong>Inclus :</strong> raquettes Wilson, 3 balles Head Pro, vestiaires, WiFi, parking.<br><strong>Filmage HD :</strong> +5€/match.<strong> Service bord terrain.</strong> Abonnés : −20% (65€/mois).</p></div></div>'+
'<div id="tab-coaching" class="tabc"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem"><div style="border:1px solid rgba(10,15,46,.1);padding:2rem"><div style="font-family:\'Playfair Display\',serif;font-size:1.3rem;font-weight:700;color:var(--n);margin-bottom:.5rem">Cours individuel</div><div style="font-family:\'Playfair Display\',serif;font-size:2.2rem;font-weight:900;color:#C9A84C;margin-bottom:1rem">55€<span style="font-size:.9rem;color:rgba(26,26,46,.5);font-family:\'Montserrat\',sans-serif;font-weight:400">/h</span></div><p style="font-size:.82rem;color:rgba(26,26,46,.65)">1h ou 1h30 · analyse vidéo · forfait 10 séances −10%</p><button class="br" style="margin-top:1.5rem;width:100%;border:none;cursor:pointer" onclick="OR()">Réserver</button></div>'+
'<div style="border:1px solid rgba(10,15,46,.1);padding:2rem"><div style="font-family:\'Playfair Display\',serif;font-size:1.3rem;font-weight:700;color:var(--n);margin-bottom:.5rem">Cours collectif</div><div style="font-family:\'Playfair Display\',serif;font-size:2.2rem;font-weight:900;color:#C9A84C;margin-bottom:1rem">18€<span style="font-size:.9rem;color:rgba(26,26,46,.5);font-family:\'Montserrat\',sans-serif;font-weight:400">/pers</span></div><p style="font-size:.82rem;color:rgba(26,26,46,.65)">4–6 joueurs · tous niveaux · enfants 15€</p><button class="br" style="margin-top:1.5rem;width:100%;border:none;cursor:pointer" onclick="OR()">S\'inscrire</button></div></div></div>'+
'<div id="tab-abonnement" class="tabc"><div style="max-width:500px;margin:0 auto;border:2px solid #C9A84C;padding:3rem;text-align:center;position:relative"><span style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#C9A84C;color:#0A0F2E;font-size:.65rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:.35rem 1.25rem;white-space:nowrap">Abonnement Mensuel</span><div style="font-family:\'Playfair Display\',serif;font-size:4rem;font-weight:900;color:var(--n);line-height:1">65<span style="font-size:1.5rem">€</span></div><div style="font-size:.75rem;color:rgba(26,26,46,.5);text-transform:uppercase;margin-bottom:2rem">/mois</div>'+
['Accès illimité heures creuses','−20% sur les heures pleines','Tournois mensuels gratuits','Priorité réservation 48h avant','Offres exclusives membres'].map(function(i){return '<div style="display:flex;justify-content:space-between;padding:.5rem 0;border-bottom:1px solid rgba(10,15,46,.06);font-size:.82rem;color:rgba(26,26,46,.7)"><span>'+i+'</span><span style="color:#C9A84C;font-weight:700">✓</span></div>';}).join('')+
'<button class="bcf" style="margin-top:1.5rem" onclick="alert(\'Disponible à l\\\'ouverture T4 2026\')">Souscrire</button></div></div>'+
'<div id="tab-events" class="tabc"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.5rem">'+
[{n:'Privatisation Entreprise',p:'200€',s:'/4h',d:'Team building, séminaires, afterworks. Service bord terrain inclus.'},
 {n:'Tournoi mensuel',p:'25€',s:'/participant',d:'Formats loisir & compétition. Afterwork Chill Corner inclus.'},
 {n:'Filmage HD du match',p:'5€',s:'/match',d:'Replay HD envoyé sous 24h. Analysez votre jeu.'}].map(function(e){return '<div style="border:1px solid rgba(10,15,46,.1);padding:2rem"><div style="font-size:1.1rem;font-weight:700;color:var(--n);margin-bottom:.5rem">'+e.n+'</div><div style="font-family:\'Playfair Display\',serif;font-size:1.8rem;font-weight:700;color:#C9A84C;margin-bottom:.75rem">'+e.p+'<span style="font-size:.8rem;color:rgba(26,26,46,.5);font-family:\'Montserrat\',sans-serif;font-weight:400">'+e.s+'</span></div><p style="font-size:.82rem;color:rgba(26,26,46,.65);line-height:1.7">'+e.d+'</p></div>';}).join('')+
'</div></div></div>';}

function rCoaches(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:1200px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Notre équipe</span><h1 class="stitle stl">Les 4 Co-fondateurs</h1><p class="ssub ssub-l">À égalité, chacun expert dans son domaine.</p></div></div>'+
'<div style="max-width:1200px;margin:0 auto;padding:4rem 2rem">'+
'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem">'+
COA.map(function(co){return '<div class="cc" style="border:none;box-shadow:0 4px 30px rgba(10,15,46,.1)"><div class="cc-ph" style="background:'+co.bg+';aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;position:relative"><div class="cc-av" style="width:100px;height:100px;font-size:2.5rem">'+co.i+'</div><div style="position:absolute;bottom:1.5rem;left:0;right:0;text-align:center;font-size:.6rem;color:rgba(255,255,255,.4);letter-spacing:.2em;text-transform:uppercase">'+co.r.split('·')[0].trim()+'</div></div><div class="ccb"><div class="stars">★★★★★</div><div class="cc-name">'+co.n+'</div><div class="cc-role">'+co.r+'</div><div class="cc-spec">'+co.s+'</div><div class="cc-bio">'+co.b+'</div><div class="cc-btns">'+co.tg.map(function(t){return '<span class="cc-tag">'+t+'</span>';}).join('')+'</div><button class="btn-cc" onclick="'+(co.nc?"P('contact')":'OR()')+'">'+( co.nc?'Contact':'Réserver')+'</button></div></div>';}).join('')+
'</div></div>';}

function rHistoire(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:1200px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Notre histoire</span><h1 class="stitle stl">L\'histoire du Quadrant</h1></div></div>'+
'<div style="max-width:1200px;margin:0 auto;padding:4rem 2rem">'+
'<div class="hgrid"><div><span class="stag">La genèse</span><h2 class="stitle std" style="font-size:2rem">Une frustration devenue projet</h2>'+
'<p style="font-size:.9rem;color:rgba(26,26,46,.65);line-height:1.9;margin-bottom:1.25rem">Gaël, Noaïm, Timoté et S\'sana — quatre co-fondateurs à parts égales — ont constaté le manque d\'une offre padel premium à Bordeaux. Ensemble ils ont décidé de construire Le Quadrant.</p></div>'+
'<div><div class="tl">'+
[['2024','L\'idée naît','Les quatre décident ensemble, à parts égales.'],
 ['2025','Structuration','Business plan, SAS 50 000€, 4 terrains LED planifiés.'],
 ['T3 2026','Construction','Terrains LED, Chill Corner de Timoté, vestiaires premium.'],
 ['T4 2026','Ouverture','200 premiers membres. Un lieu de vie est né.']].map(function(t){
  return '<div class="tli"><div class="tld"></div><div><div class="tly">'+t[0]+'</div><div class="tltt">'+t[1]+'</div><div class="tltx">'+t[2]+'</div></div></div>';
}).join('')+'</div></div></div>'+
'<div style="margin-top:4rem"><span class="stag">Les 4 co-fondateurs</span><h2 class="stitle std">À égalité, ensemble</h2>'+
'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-top:2rem">'+
[['GF','Gaël Fayol','Co-fondateur · Co-Gérant · Coach','Vision stratégique et technique. BPJEPS P100.','Le Quadrant, la réponse à ce qui manquait.'],
 ['NE','Noaïm El Houzi','Co-fondateur · Co-Gérant · Coach','Expert opérationnel et tactique. BPJEPS.','Un lieu où l\'on revient pour le padel, reste pour l\'ambiance.'],
 ['Ti','Timoté','Co-fondateur · Associé · Bar & Accueil','Âme du Chill Corner, service bord terrain et accueil.','Le bar, c\'est là où le club prend sa dimension sociale.'],
 ['SS',"S'sana Salim",'Co-fondatrice · Associée · Coach','Pilier pédagogique, académie jeunes et familles.','Le padel pour tous, à tous les âges.']].map(function(f){
  return '<div class="fcard"><div class="favt">'+f[0]+'</div><div style="font-family:\'Playfair Display\',serif;font-size:1.1rem;font-weight:700;color:var(--n)">'+f[1]+'</div><div style="font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#C9A84C;margin:.25rem 0 .75rem">'+f[2]+'</div><p style="font-size:.8rem;color:rgba(26,26,46,.6);line-height:1.7;margin-bottom:.75rem">'+f[3]+'</p><p style="font-family:\'Cormorant Garamond\',serif;font-style:italic;font-size:.9rem;color:#C9A84C">"'+f[4]+'"</p></div>';
}).join('')+'</div></div>'+
'<div style="margin-top:4rem;padding:4rem 3rem;background:var(--n)"><div style="text-align:center;margin-bottom:2.5rem"><span class="stag">Nos valeurs</span><h2 class="stitle stl" style="text-align:center">Ce qui nous guide</h2></div>'+
'<div class="vg">'+[['Excellence','Terrains FFT, coaches BPJEPS, LED premium.'],['Convivialité','Le Chill Corner de Timoté — chaque match finit autour d\'un verre.'],['Durabilité','LED basse conso, gazon sans microbilles.'],['Innovation','Terrains LED, filmage 5€, service bord terrain.']].map(function(v){return '<div class="vc"><div class="vc-ico">'+iCourt+'</div><div class="vc-t">'+v[0]+'</div><div class="vc-tx">'+v[1]+'</div></div>';}).join('')+'</div></div></div>';}

function rContact(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:1200px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Contact</span><h1 class="stitle stl">Nous contacter</h1><p class="ssub ssub-l">Réponse sous 24h — contact@lequadrant.fr</p></div></div>'+
'<div style="max-width:1200px;margin:0 auto;padding:4rem 2rem"><div class="ct-grid">'+
'<div><span class="stag">Envoyer un message</span><h2 class="stitle std" style="font-size:1.6rem;margin-bottom:2rem">Écrivez-nous</h2>'+
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem"><div><label class="flabel">Prénom *</label><input type="text" class="finput" placeholder="Gaël" id="cP"></div><div><label class="flabel">Nom *</label><input type="text" class="finput" placeholder="Fayol" id="cN"></div></div>'+
'<label class="flabel">Email *</label><input type="email" class="finput" placeholder="votre@email.fr">'+
'<label class="flabel">Sujet *</label><select class="finput"><option>Réservation</option><option>Coaching</option><option>Privatisation entreprise</option><option>Partenariat</option><option>Autre</option></select>'+
'<label class="flabel">Message *</label><textarea class="finput" rows="5" placeholder="Votre message..."></textarea>'+
'<button class="bp" style="width:100%;border:none;font-family:\'Montserrat\',sans-serif;cursor:pointer;padding:1rem" onclick="sCF()">Envoyer le message</button></div>'+
'<div><div class="cinfo-block"><span class="stag">Informations</span><h2 class="stitle std" style="font-size:1.5rem;margin-bottom:1.5rem">Coordonnées</h2>'+
'<div class="cinfo-item"><div class="cii"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div><div><div class="cil2">Adresse</div><div class="civ">Bordeaux Métropole (33)</div></div></div>'+
'<div class="cinfo-item"><div class="cii"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div><div><div class="cil2">Email</div><div class="civ"><a href="mailto:contact@lequadrant.fr" style="color:#C9A84C;text-decoration:none;font-weight:600">contact@lequadrant.fr</a></div></div></div>'+
'<div class="cinfo-item"><div class="cii"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg></div><div><div class="cil2">Horaires</div><div class="civ">7j/7 · 7h00 – 22h00</div></div></div>'+
'<div style="margin-top:1.5rem;padding:1.25rem;border:1px solid rgba(201,168,76,.3);background:rgba(201,168,76,.04)"><div style="font-size:.65rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#C9A84C;margin-bottom:.5rem">Bar & Accueil</div>'+
'<div style="display:flex;align-items:center;gap:.75rem"><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#C9A84C,#E8C96A);display:flex;align-items:center;justify-content:center;font-family:\'Playfair Display\',serif;font-size:.9rem;font-weight:700;color:#0A0F2E;flex-shrink:0">Ti</div><div><div style="font-size:.85rem;font-weight:700;color:var(--n)">Timoté</div><div style="font-size:.7rem;color:rgba(26,26,46,.5)">Co-fondateur · Chill Corner</div></div></div></div>'+
'</div></div></div></div>';}

function rMentions(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:900px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Légal</span><h1 class="stitle stl">Mentions Légales</h1></div></div><div style="max-width:900px;margin:0 auto;padding:4rem 2rem"><div class="lc"><h2>Éditeur</h2><p>LE QUADRANT SAS · Capital 50 000€ · Bordeaux Métropole (33) · contact@lequadrant.fr · APE 9311Z · Affilié FFT</p><h2>Direction de la publication</h2><p>Gaël Fayol & Noaïm El Houzi — Co-Gérants</p><h2>Hébergement</h2><p>Vercel Inc. — San Francisco, CA</p></div></div>';}
function rCGV(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:900px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Légal</span><h1 class="stitle stl">CGV</h1></div></div><div style="max-width:900px;margin:0 auto;padding:4rem 2rem"><div class="lc"><h2>Tarifs</h2><ul>'+TR.map(function(t){return '<li>'+t.name+' : creuse '+t.pC+'€/h · pleine '+t.pP+'€/h</li>';}).join('')+'<li>Coaching individuel : 55€/h · Collectif : 18€/pers · Filmage : 5€</li></ul><h2>Annulation</h2><p>+48h : remboursement intégral. -48h : avoir 3 mois. No-show : aucun remboursement.</p></div></div>';}
function rRGPD(c){c.innerHTML='<div style="padding-top:80px;background:var(--n)"><div style="max-width:900px;margin:0 auto;padding:4rem 2rem 2rem"><span class="stag">Légal</span><h1 class="stitle stl">Politique de Confidentialité</h1></div></div><div style="max-width:900px;margin:0 auto;padding:4rem 2rem"><div class="lc"><h2>Responsable</h2><p>LE QUADRANT SAS — contact@lequadrant.fr — DPO : Gaël Fayol</p><h2>Droits RGPD</h2><p>Accès, rectification, suppression, opposition. Email : contact@lequadrant.fr</p></div></div>';}

// RESERVATION
function OR(){var r=document.getElementById('ro');if(r){r.classList.add('active');document.body.style.overflow='hidden';GS(1);iRTG();}}
function CR(){var r=document.getElementById('ro');if(r){r.classList.remove('active');document.body.style.overflow='';}}
function iRTG(){
  var g=document.getElementById('rtgrid');if(!g)return;
  g.innerHTML=TR.map(function(t){
    return '<div class="rtc" onclick="sT(this,\''+t.name+'\',\''+t.specs.join(' · ')+'\','+t.pC+','+t.pP+')">'+
      '<div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem"><div style="width:34px;height:34px;background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.3);display:flex;align-items:center;justify-content:center;font-family:\'Playfair Display\',serif;font-size:.85rem;font-weight:700;color:#C9A84C">'+t.id+'</div>'+
      '<span style="font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.25rem .6rem;background:'+(t.id==='V4'?'rgba(201,168,76,.85);color:#0A0F2E':'#2D5A3D;color:#fff')+'">'+(t.id==='V4'?'VIP Premium':'Disponible')+'</span></div>'+
      '<div class="rtc-name">'+t.name+'</div><div class="rtc-type">'+t.type+'</div><div class="rtc-spec">'+t.specs.join(' · ')+'</div>'+
      '<div class="rtc-prices"><div class="rtc-p">Creuse <strong>'+t.pC+'€/h</strong></div><div class="rtc-p">Pleine <strong>'+t.pP+'€/h</strong></div></div></div>';
  }).join('');
}
function GS(n){
  for(var i=1;i<=4;i++){var s=document.getElementById('st'+i),p=document.getElementById('rp'+i);if(!s||!p)continue;s.className='step';p.className='sp2';if(i<n){s.classList.add('done');s.querySelector('.snum').innerHTML='✓';}else if(i===n){s.classList.add('active');s.querySelector('.snum').textContent=i;}else s.querySelector('.snum').textContent=i;if(i===n)p.classList.add('active');}
  if(n===2)rCal2();if(n===3||n===4)uSum();
  var r=document.getElementById('ro');if(r)r.scrollTop=0;
}
function sT(el,n,sp,pc,pp){document.querySelectorAll('.rtc').forEach(function(c){c.classList.remove('sel');});el.classList.add('sel');bk.t=n;bk.pC=pc;bk.pP=pp;}
function rCal2(){
  var g=document.getElementById('calG');if(!g)return;
  var l=document.getElementById('calL');if(l)l.textContent=MN[cm]+' '+cy;
  var h=['L','M','M','J','V','S','D'],html='';
  h.forEach(function(d){html+='<div class="cal-h">'+d+'</div>';});
  var f=new Date(cy,cm,1),dow=f.getDay();dow=dow===0?6:dow-1;
  for(var i=0;i<dow;i++)html+='<div></div>';
  var today=new Date(),dim=new Date(cy,cm+1,0).getDate();
  for(var d=1;d<=dim;d++){var dt=new Date(cy,cm,d),past=dt<new Date(today.getFullYear(),today.getMonth(),today.getDate()),isT=dt.toDateString()===today.toDateString();html+='<div class="cal-d'+(past?' dis':'')+(isT?' tod':'')+'" onclick="sD2fn(this,'+d+')">'+ d+'</div>';}
  g.innerHTML=html;
}
function PM(){cm--;if(cm<0){cm=11;cy--;}rCal2();}
function NM(){cm++;if(cm>11){cm=0;cy++;}rCal2();}
function sD2fn(el,day){document.querySelectorAll('.cal-d').forEach(function(d){d.classList.remove('sel');});el.classList.add('sel');bk.dt=day+' '+MN[cm]+' '+cy;var l=document.getElementById('sDateL');if(l)l.textContent=bk.dt;var s=document.getElementById('slS');if(s)s.style.display='block';rSlots(new Date(cy,cm,day).getDay());}
var tkS=['09:00','10:00','14:00','18:00','19:00','20:00'];
function rSlots(dow){var g=document.getElementById('slG');if(!g)return;var html='';for(var h=7;h<=21;h++){var hs=(h<10?'0':'')+h+':00',isP=(h>=17)||dow===6||dow===0,isTk=tkS.indexOf(hs)!==-1;html+='<div class="slot'+(isTk?' tk':'')+'" onclick="sSl(this,\''+hs+'\','+isP+')">'+hs+(isTk?' ✗':'')+'</div>';}g.innerHTML=html;}
function sSl(el,sl,isP){document.querySelectorAll('.slot').forEach(function(s){s.classList.remove('sel');});el.classList.add('sel');bk.sl=sl;bk.isP=isP;uPD();}
function uPD(){if(!bk.sl||!bk.t)return;var p=bk.isP?bk.pP:bk.pC,d=bk.dur==='1h30'?1.5:1,t=p*d;var pl=document.getElementById('pdL'),pv=document.getElementById('pdV');if(pl)pl.textContent=bk.isP?'Heure pleine':'Heure creuse';if(pv)pv.textContent=t+'€';bk.tp=t;}
function sDur(el,d){document.querySelectorAll('.db').forEach(function(b){b.classList.remove('sel');});el.classList.add('sel');bk.dur=d;uPD();}
function sPl(el,n){document.querySelectorAll('.pb').forEach(function(b){b.classList.remove('sel');});el.classList.add('sel');bk.pl=n;}
function tO(opt,price){bk[opt]=!bk[opt];var sw=document.getElementById('sw-'+opt.charAt(0)),tog=document.getElementById('ot-'+opt.charAt(0));if(sw){if(bk[opt])sw.classList.add('on');else sw.classList.remove('on');}if(tog){if(bk[opt])tog.classList.add('active');else tog.classList.remove('active');}uSum();}
function set(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
function show(id,v){var e=document.getElementById(id);if(e)e.style.display=v?'flex':'none';}
function uSum(){var t=bk.t||'—',p=bk.tp?bk.tp+'€':'—',tot=bk.tp||0;if(bk.filmage)tot+=5;if(bk.coaching)tot+=30;if(bk.bar)tot+=8;set('st_',t+' — '+(bk.sl||'créneau')+' ('+bk.dur+')');set('sp_',p);show('srf',bk.filmage);show('src',bk.coaching);show('srb',bk.bar);set('stot',tot>0?tot+'€':'—');set('s2t',t+' — '+(bk.sl||'—'));set('s2d',bk.dt?'Le '+bk.dt:'—');show('s2f',bk.filmage);show('s2c',bk.coaching);show('s2b',bk.bar);set('s2tot',tot>0?tot+'€':'—');set('btnT',tot>0?tot+'€':'');}
function cRes(){var pr=(document.getElementById('rP')||{}).value||'Joueur',em=(document.getElementById('rE')||{}).value||'votre email',tot=bk.tp||0;if(bk.filmage)tot+=5;if(bk.coaching)tot+=30;if(bk.bar)tot+=8;var rc='<strong>Terrain :</strong> '+(bk.t||'—')+'<br><strong>Date :</strong> '+(bk.dt||'—')+'<br><strong>Heure :</strong> '+(bk.sl||'—')+' ('+bk.dur+')<br>';if(bk.filmage)rc+='<strong>Option :</strong> Filmage +5€<br>';if(bk.coaching)rc+='<strong>Option :</strong> Coaching +30€<br>';if(bk.bar)rc+='<strong>Option :</strong> Service bord terrain +8€<br>';rc+='<strong>Total :</strong> '+tot+'€';set('ctxt','Merci '+pr+' ! Confirmation à '+em+'.');var cr=document.getElementById('crec');if(cr)cr.innerHTML=rc;var cm2=document.getElementById('cm');if(cm2)cm2.classList.add('active');}
function CM(){var cm2=document.getElementById('cm');if(cm2)cm2.classList.remove('active');CR();P('home');}
function ST(t){document.querySelectorAll('.tbt').forEach(function(b){b.classList.remove('active');if(b.getAttribute('onclick').includes("'"+t+"'"))b.classList.add('active');});document.querySelectorAll('.tabc').forEach(function(c){c.classList.remove('active');});var el=document.getElementById('tab-'+t);if(el)el.classList.add('active');}
function sCF(){var n=((document.getElementById('cP')||{}).value+' '+(document.getElementById('cN')||{}).value).trim()||'vous';alert('Message envoyé ! Merci '+n+'. Réponse sous 24h.');}
function AC(){var e=document.getElementById('ckb');if(e)e.classList.add('hidden');localStorage.setItem('ck','1');}
function RC(){var e=document.getElementById('ckb');if(e)e.classList.add('hidden');localStorage.setItem('ck','0');}
if(localStorage.getItem('ck')){var ck=document.getElementById('ckb');if(ck)ck.classList.add('hidden');}

function dlPDF(){
  var cv=document.createElement('canvas');cv.width=794;cv.height=1123;var ctx=cv.getContext('2d');
  ctx.fillStyle='#0A0F2E';ctx.fillRect(0,0,794,1123);
  ctx.strokeStyle='rgba(201,168,76,.08)';ctx.lineWidth=.5;
  for(var x=0;x<794;x+=40)for(var y=0;y<1123;y+=40){ctx.strokeRect(x,y,40,40);}
  ctx.strokeStyle='#C9A84C';ctx.lineWidth=2;ctx.strokeRect(30,30,734,1063);ctx.strokeRect(38,38,718,1047);
  ctx.fillStyle='#C9A84C';ctx.textAlign='center';ctx.font='bold 10px sans-serif';ctx.fillText('CLUB DE PADEL INDOOR PREMIUM · BORDEAUX MÉTROPOLE',397,78);
  ctx.font='bold 48px Georgia,serif';ctx.fillText('LE QUADRANT',397,145);
  ctx.font='italic 19px Georgia,serif';ctx.fillStyle='rgba(255,255,255,.5)';ctx.fillText('"Plus qu\'un match, créez des liens."',397,176);
  ctx.strokeStyle='rgba(201,168,76,.4)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(100,198);ctx.lineTo(694,198);ctx.stroke();
  ctx.font='bold 26px Georgia,serif';ctx.fillStyle='#C9A84C';ctx.fillText('CARTE DU CHILL CORNER',397,238);
  ctx.font='13px sans-serif';ctx.fillStyle='rgba(255,255,255,.4)';ctx.fillText('Bar & Club House · Géré par Timoté, Co-fondateur',397,262);
  var secs=[
    {t:'BOISSONS CHAUDES',y:310,items:[['Café espresso','3€'],['Double espresso','3.50€'],['Cappuccino','4€'],['Thé premium','3.50€'],['Infusion du moment','3€']]},
    {t:'BOISSONS FRAÎCHES',y:500,items:[['Jus frais pressé','5€'],['Smoothie énergie','6€'],['Eau minérale','2€'],['Bière artisanale','5€'],['Soda / Cola','3€'],['Boisson isotonique','4€']]},
    {t:'RÉCUPÉRATION SPORTIVE',y:720,items:[['Shaker protéiné','6€'],['Barre énergétique','3€'],['Pack récupération','12€'],['Boisson BCAA','5€']]},
    {t:'SNACKS & PLANCHES',y:895,items:[['Planche charcuterie & fromages','14€'],['Fruits frais de saison','6€'],['Mix noix & fruits secs','5€'],['Sandwich du Quadrant','8€']]}
  ];
  secs.forEach(function(sec){
    ctx.font='bold 11px sans-serif';ctx.fillStyle='#C9A84C';ctx.textAlign='center';ctx.fillText(sec.t,397,sec.y);
    ctx.strokeStyle='rgba(201,168,76,.2)';ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(60,sec.y+10);ctx.lineTo(330,sec.y+10);ctx.stroke();ctx.beginPath();ctx.moveTo(464,sec.y+10);ctx.lineTo(734,sec.y+10);ctx.stroke();
    sec.items.forEach(function(item,i){var iy=sec.y+32+i*31;ctx.textAlign='left';ctx.font='12px sans-serif';ctx.fillStyle='rgba(255,255,255,.8)';ctx.fillText(item[0],70,iy);ctx.textAlign='right';ctx.font='bold 12px sans-serif';ctx.fillStyle='#C9A84C';ctx.fillText(item[1],724,iy);ctx.strokeStyle='rgba(255,255,255,.04)';ctx.lineWidth=.3;ctx.beginPath();ctx.moveTo(70,iy+14);ctx.lineTo(724,iy+14);ctx.stroke();});
  });
  ctx.strokeStyle='rgba(201,168,76,.4)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(60,1058);ctx.lineTo(734,1058);ctx.stroke();
  ctx.textAlign='center';ctx.font='10px sans-serif';ctx.fillStyle='rgba(201,168,76,.55)';ctx.fillText('SERVICE BORD TERRAIN DISPONIBLE · COMMANDEZ AVANT VOTRE MATCH',397,1080);
  ctx.fillStyle='rgba(255,255,255,.2)';ctx.font='9px sans-serif';ctx.fillText('contact@lequadrant.fr · Bordeaux Métropole (33) · 7j/7 de 7h à 22h',397,1099);
  var lk=document.createElement('a');lk.download='LeQuadrant_Carte_Bar.png';lk.href=cv.toDataURL('image/png');lk.click();
}

P('home');
