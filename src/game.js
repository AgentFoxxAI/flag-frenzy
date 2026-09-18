
// Historical flags: [id, name, capital, continent, era, modern country for the map pin, tier, colors, fact]
const HIST_RAW=[
["ussr","Soviet Union","Moscow","EU","1922–1991","ru",1,"ry","One flag for 15 countries that are now separate, including Russia and Ukraine."],
["qing","Qing Dynasty China","Beijing","AS","1889–1912","cn",2,"bry","A blue dragon chasing a red pearl. China's last emperors ruled under this flag."],
["korea","Korean Empire","Seoul","AS","1897–1910","kr",2,"bkrw","An early version of today's South Korean flag, with the same red-and-blue circle."],
["mongolia","Mongolian People's Republic","Ulaanbaatar","AS","1945–1992","mn",3,"bry","Like today's Mongolian flag, but with a star on top of the golden symbol."],
["us1777","United States (13 stars)","Philadelphia","NA","1777–1795","us",1,"brw","The Betsy Ross flag: 13 stars in a circle for the 13 original colonies."],
["us1795","United States (15 stars)","Washington, D.C.","NA","1795–1818","us",2,"brw","The Star-Spangled Banner! This 15-star, 15-stripe flag inspired the national anthem."],
["us1912","United States (48 stars)","Washington, D.C.","NA","1912–1959","us",1,"brw","48 stars, before Alaska and Hawaii became states."],
["ottoman","Ottoman Empire","Constantinople","AS","1844–1922","tr",2,"rw","An empire that lasted 600 years. Its flag became Turkey's flag."],
["austriahungary","Austria-Hungary","Vienna","EU","1869–1918","at",3,"grw","Two countries with one emperor, so the flag has two coats of arms."],
["germanempire","German Empire","Berlin","EU","1871–1918","de",2,"krw","Black, white and red stripes, before Germany's black, red and gold."],
["italykingdom","Kingdom of Italy","Rome","EU","1861–1946","it",2,"grw","Italy's flag with the royal family's shield in the middle."],
["brazilempire","Empire of Brazil","Rio de Janeiro","SA","1822–1889","br",2,"gy","Brazil once had an emperor! The green and yellow diamond is still on today's flag."],
["grancolombia","Gran Colombia","Bogotá","SA","1819–1831","co",3,"bry","One country that became Colombia, Venezuela, Ecuador and Panama."],
["ethiopiaempire","Ethiopian Empire","Addis Ababa","AF","1897–1974","et",3,"gry","The Lion of Judah carrying a flag, on the stripes Ethiopia still uses."],
["egyptkingdom","Kingdom of Egypt","Cairo","AF","1922–1953","eg",3,"gw","A crescent and three stars on green, from when Egypt had a king."],
["yugoslavia","Yugoslavia","Belgrade","EU","1946–1992","rs",2,"brwy","One country that split into seven: Serbia, Croatia, Slovenia and more."],
["eastgermany","East Germany","East Berlin","EU","1959–1990","de",2,"kry","Germany was split in two for 41 years. This was the eastern half's flag."],
["zaire","Zaire","Kinshasa","AF","1971–1997","cd",3,"gry","An arm holding a torch. Today this country is DR Congo."],
["china1912","Republic of China (five colors)","Beijing","AS","1912–1928","cn",3,"bkrwy","Five stripes for five peoples of China, after the last emperor gave up his throne."],
["francekingdom","Kingdom of France","Paris","EU","before 1792","fr",2,"by","Golden fleurs-de-lis (lily flowers) on blue: the flag of the French kings."],
["spanishempire","Spanish Empire","Madrid","EU","1500s–1700s","es",2,"rw","The Cross of Burgundy flew over Spanish ships and forts from Florida to the Philippines."],
["rome","Roman Empire","Rome","EU","ancient","it",1,"ry","SPQR means 'The Senate and People of Rome'. Roman soldiers marched behind it."],
["byzantine","Byzantine Empire","Constantinople","EU","1300s–1453","tr",3,"ry","Four letters B for 'King of Kings, ruling over Kings'."],
["hre","Holy Roman Empire","Vienna","EU","1400–1806","de",3,"ky","A double-headed eagle looking east and west."],
["hawaii","Kingdom of Hawaii","Honolulu","OC","1845–1893","us",2,"brw","Hawaii was a kingdom with its own kings and queens. It's still the state flag today!"],
["texas","Republic of Texas","Austin","NA","1839–1845","us",1,"brw","Texas was its own country for nine years before joining the USA."],
["persia","Imperial Iran (Persia)","Tehran","AS","1964–1979","ir",3,"grw","A lion holding a sword under a rising sun."],
["prussia","Kingdom of Prussia","Berlin","EU","1892–1918","de",3,"kw","A black eagle on white. Prussia helped create modern Germany."],
["venice","Republic of Venice","Venice","EU","697–1797","it",2,"ry","A winged lion for the city of canals, a republic for 1,100 years."],
["mexicoempire","Second Mexican Empire","Mexico City","NA","1864–1867","mx",3,"grw","Mexico briefly had an emperor named Maximilian. Four eagles in the corners!"],
["portugalkingdom","Kingdom of Portugal","Lisbon","EU","1830–1910","pt",3,"bw","Blue and white with a crown, before Portugal became a republic."],
];
const HIST_ORDER="austriahungary,brazilempire,byzantine,china1912,eastgermany,egyptkingdom,ethiopiaempire,francekingdom,germanempire,grancolombia,hawaii,hre,italykingdom,korea,mexicoempire,mongolia,ottoman,persia,portugalkingdom,prussia,qing,rome,spanishempire,texas,us1777,us1795,us1912,ussr,venice,yugoslavia,zaire".split(",");
// US states: [code, name, capital, fact]
const STATES_RAW=[
["al","Alabama","Montgomery","The first rockets to the Moon were built in Huntsville."],["ak","Alaska","Juneau","The biggest state, bought from Russia for about 2 cents an acre."],["az","Arizona","Phoenix","Home of the Grand Canyon."],["ar","Arkansas","Little Rock","You can dig for real diamonds in a state park here."],["ca","California","Sacramento","The bear on the flag is a grizzly. Home of Hollywood."],["co","Colorado","Denver","Has more than 50 mountains over 14,000 feet tall."],["ct","Connecticut","Hartford","The first hamburger and the first lollipop were made here."],["de","Delaware","Dover","The first state to join the USA, in 1787."],["fl","Florida","Tallahassee","Alligators, beaches and the Kennedy Space Center."],["ga","Georgia","Atlanta","The Peach State, birthplace of Martin Luther King Jr."],["hi","Hawaii","Honolulu","The only state made of islands, with active volcanoes."],["id","Idaho","Boise","Grows more potatoes than any other state."],["il","Illinois","Springfield","Home of Chicago and its giant shiny 'Bean' sculpture."],["in","Indiana","Indianapolis","Home of the Indy 500 car race."],["ia","Iowa","Des Moines","Grows more corn than any other state."],["ks","Kansas","Topeka","Where Dorothy lived in The Wizard of Oz."],["ky","Kentucky","Frankfort","Famous for fast horses and the Kentucky Derby."],["la","Louisiana","Baton Rouge","New Orleans, jazz music and Mardi Gras parades."],["me","Maine","Augusta","Lobsters, lighthouses and the first sunrise in the USA."],["md","Maryland","Annapolis","One of the boldest flags, from an old family's coat of arms."],["ma","Massachusetts","Boston","The Pilgrims landed here in 1620."],["mi","Michigan","Lansing","Touches four of the five Great Lakes."],["mn","Minnesota","Saint Paul","Land of 10,000 lakes. Brand-new flag in 2024!"],["ms","Mississippi","Jackson","Named after the mighty Mississippi River. New flag in 2021."],["mo","Missouri","Jefferson City","The Gateway Arch in St. Louis is 630 feet tall."],["mt","Montana","Helena","Big Sky Country, with grizzly bears and glaciers."],["ne","Nebraska","Lincoln","More miles of river than any other state."],["nv","Nevada","Carson City","Home of Las Vegas, and mostly desert."],["nh","New Hampshire","Concord","Its motto is 'Live Free or Die'."],["nj","New Jersey","Trenton","The first baseball game was played here in 1846."],["nm","New Mexico","Santa Fe","The red sun symbol comes from the Zia people."],["ny","New York","Albany","Home of the Statue of Liberty and New York City."],["nc","North Carolina","Raleigh","The Wright brothers made the first airplane flight here."],["nd","North Dakota","Bismarck","Has more wildlife refuges than any other state."],["oh","Ohio","Columbus","The only state flag that isn't a rectangle."],["ok","Oklahoma","Oklahoma City","A Native American shield with an olive branch and peace pipe."],["or","Oregon","Salem","The only state flag with a different picture on the back: a beaver!"],["pa","Pennsylvania","Harrisburg","The Declaration of Independence was signed in Philadelphia."],["ri","Rhode Island","Providence","The smallest state. The anchor means hope."],["sc","South Carolina","Columbia","A palmetto tree and a crescent moon."],["sd","South Dakota","Pierre","Home of Mount Rushmore's four giant presidents."],["tn","Tennessee","Nashville","Three stars for its three regions. Music City!"],["tx","Texas","Austin","The Lone Star State, once its own country."],["ut","Utah","Salt Lake City","A beehive for hard work. Brand-new flag in 2024!"],["vt","Vermont","Montpelier","Makes more maple syrup than any other state."],["va","Virginia","Richmond","Birthplace of eight U.S. presidents."],["wa","Washington","Olympia","The only green state flag, with George Washington on it."],["wv","West Virginia","Charleston","The Mountain State, almost entirely covered in hills."],["wi","Wisconsin","Madison","America's Dairyland, famous for cheese."],["wy","Wyoming","Cheyenne","Home of Yellowstone, the first national park."],
];
const STATES_ORDER=STATES_RAW.map(s=>s[0]).sort();
const HFLAGS=HIST_RAW.map(r=>({code:"h_"+r[0],hid:r[0],name:r[1],capital:r[2],cont:r[3],era:r[4],map:r[5],tier:r[6],colors:r[7],fact:r[8],hist:true}));
const STATES=STATES_RAW.map(r=>({code:"s_"+r[0],sid:r[0],name:r[1],capital:r[2],fact:r[3]}));
HFLAGS.forEach(f=>BY[f.code]=f);STATES.forEach(f=>BY[f.code]=f);

/* sprite sheets: sliced into per-flag image URLs once loaded */
const SPRITES={};
function loadSprite(file,ids,cols,cw,ch,prefix){
 const im=new Image();im.onload=()=>{ids.forEach((id,i)=>{const c=document.createElement("canvas");c.width=cw;c.height=ch;c.getContext("2d").drawImage(im,(i%cols)*cw,Math.floor(i/cols)*ch,cw,ch,0,0,cw,ch);
  c.toBlob(b=>{if(b){SPRITES[prefix+id]=URL.createObjectURL(b);document.querySelectorAll(`img[data-flag="${prefix+id}"]`).forEach(el=>el.src=SPRITES[prefix+id])}},"image/jpeg",.9)})};
 im.src=file;
}
loadSprite("hist.jpg",HIST_ORDER,4,480,360,"h_");
loadSprite("states.jpg",STATES_ORDER,5,480,320,"s_");
const flagSrc=c=>c.startsWith("h_")||c.startsWith("s_")?(SPRITES[c]||""):`flags/${c}.svg`;
const flagAttr=c=>`src="${flagSrc(c)}" data-flag="${c}"`;

const LEVELS=[
 {name:"Easy",emoji:"🙂",tiers:[1],choices:4,reveal:10,blur:3,gray:false,distract:"random",fx:"",desc:"40 famous flags · 4 choices · slow reveal"},
 {name:"Medium",emoji:"😎",tiers:[1,2],choices:4,reveal:9,blur:5,gray:false,distract:"continent",fx:"",desc:"About 100 flags · choices from the same continent"},
 {name:"Hard",emoji:"😤",tiers:[1,2,3],choices:4,reveal:8,blur:6,gray:false,distract:"continent",fx:"",desc:"Over 150 flags · faster reveal"},
 {name:"Ridiculously Hard",emoji:"🤯",tiers:[1,2,3,4],choices:4,reveal:7,blur:8,gray:true,distract:"lookalike",fx:"",desc:"Every flag · look-alike choices · colors fade in slowly"},
 {name:"Stupidly Hard",emoji:"🫠",tiers:[2,3,4],choices:6,reveal:6,blur:8,gray:true,distract:"lookalike",fx:"",desc:"No easy flags · 6 look-alike choices"},
 {name:"Uncontrollable Vomiting Hard",emoji:"🤮",tiers:[2,3,4],choices:6,reveal:6,blur:8,gray:true,distract:"lookalike",fx:"fx-wobble",desc:"The flag wobbles and lurches. Don't get seasick!"},
 {name:"IMPOSSIBLE",emoji:"💀",tiers:[3,4],choices:8,reveal:4,blur:10,gray:true,distract:"lookalike",fx:"fx-chaos",desc:"Upside down, spinning, tiny, 8 choices, 4-second reveal. Good luck."},
];
const LEGACY_LEVELS=["🙂 Easy","😎 Medium","😤 Hard","🤯 Ridiculously Hard","🫠 Stupidly Hard","🤮 Uncontrollable Vomiting Hard","🐱 Spinning Cat Hard","💀 IMPOSSIBLE"];
const STYLES={
 classic:{name:"Puzzle tiles",desc:"Colorful tiles flip away to uncover the flag in five stages."},
 spotlight:{name:"Spotlight",desc:"One spotlight wanders around the flag. It never shows the whole thing, so watch closely!"},
 zoom:{name:"Mystery Zoom",desc:"Start with an extremely zoomed-in piece of the flag, then zoom out."},
 flip:{name:"Upside-Down",desc:"Every flag appears rotated. It flips the right way up after you answer."},
 lookalike:{name:"Look-alikes",desc:"Choices are flags that look alike: Romania & Chad, Indonesia & Monaco, Ireland & Ivory Coast…"},
 mix:{name:"Mix it up",desc:"A random style for every flag. Anything can happen!"}
};
const MIX_STYLES=["classic","spotlight","zoom","flip","lookalike"];
const FLAGSETS={modern:"Today's 194 country flags.",both:"Country flags plus 31 historical flags mixed in: Soviet Union, Qing dynasty, old US flags and more.",hist:"Only the 31 historical flags. Empires, kingdoms and countries that no longer exist."};
const SPOT_R={s:30,m:48,l:72};
const BONUS={
 capital:{name:"Capital Quest",desc:"3 questions: name the capital of a flag you just saw. +3 points each, no penalty."},
 lightning:{name:"Lightning Round",desc:"20 seconds. Flags appear instantly. +1 point each, no penalty. Go go go!"},
 states:{name:"US States",desc:"5 state flags from the USA. +2 points each, no penalty."},
 off:{name:"No bonus",desc:"Straight to the scoreboard."}
};
const AVATARS=[
 {id:"einstein",name:"Albert Einstein",emoji:"🧑‍🔬",from:"Germany",bg:"#7B5CFF",pos:"50% 22%",bio:"A scientist whose ideas explain how space, time and energy work. E = mc²!"},
 {id:"cleopatra",name:"Cleopatra",emoji:"👑",from:"Egypt",bg:"#FFD23F",pos:"50% 30%",bio:"The last queen of ancient Egypt. She could speak nine languages."},
 {id:"caesar",name:"Julius Caesar",emoji:"🏛️",from:"Ancient Rome",bg:"#FF5E5B",pos:"50% 30%",bio:"A Roman general who became the most powerful man in Rome. July is named after him!"},
 {id:"amelia",name:"Amelia Earhart",emoji:"✈️",from:"United States",bg:"#00A8E8",pos:"50% 30%",bio:"The first woman to fly alone across the Atlantic Ocean."},
 {id:"davinci",name:"Leonardo da Vinci",emoji:"🎨",from:"Italy",bg:"#2D7DD2",pos:"50% 30%",bio:"Painted the Mona Lisa and sketched flying machines 400 years before airplanes."},
 {id:"curie",name:"Marie Curie",emoji:"⚗️",from:"Poland",bg:"#2BB673",pos:"50% 25%",bio:"Discovered two elements and won two Nobel Prizes, the first person ever to do that."},
 {id:"frida",name:"Frida Kahlo",emoji:"🌺",from:"Mexico",bg:"#E84393",pos:"50% 25%",bio:"A painter famous for colorful self-portraits full of flowers, monkeys and parrots."},
 {id:"pele",name:"Pelé",emoji:"⚽",from:"Brazil",bg:"#43A047",pos:"50% 18%",bio:"The king of soccer. He won three World Cups."},
 {id:"confucius",name:"Confucius",emoji:"📜",from:"China",bg:"#F28C28",pos:"50% 20%",bio:"A wise teacher whose sayings about kindness are still read 2,500 years later."},
 {id:"musa",name:"Mansa Musa",emoji:"💰",from:"Mali",bg:"#E0B31C",pos:"50% 25%",bio:"Emperor of Mali and maybe the richest person who ever lived."},
 {id:"genghis",name:"Genghis Khan",emoji:"🐎",from:"Mongolia",bg:"#8D6E63",pos:"50% 25%",bio:"Built the largest land empire in history, all on horseback."},
 {id:"gandhi",name:"Mahatma Gandhi",emoji:"🕊️",from:"India",bg:"#F5A623",pos:"50% 25%",bio:"Led India to freedom using peace instead of fighting."},
 {id:"mandela",name:"Nelson Mandela",emoji:"✊",from:"South Africa",bg:"#1E8F58",pos:"50% 30%",bio:"Spent 27 years in prison, then became South Africa's first Black president."},
 {id:"joan",name:"Joan of Arc",emoji:"⚔️",from:"France",bg:"#5C6BC0",pos:"50% 25%",bio:"A teenage farm girl who led the French army to victory."},
 {id:"newton",name:"Isaac Newton",emoji:"🍎",from:"England",bg:"#D9413F",pos:"50% 25%",bio:"Figured out gravity. The story says an apple fell on his head!"},
 {id:"ada",name:"Ada Lovelace",emoji:"💻",from:"England",bg:"#9C27B0",pos:"50% 20%",bio:"Wrote the very first computer program, 100 years before computers existed."},
 {id:"battuta",name:"Ibn Battuta",emoji:"🗺️",from:"Morocco",bg:"#26A69A",pos:"50% 40%",bio:"Traveled 75,000 miles across Africa and Asia on foot, camel and boat."},
 {id:"hokusai",name:"Hokusai",emoji:"🌊",from:"Japan",bg:"#1F5FA3",pos:"50% 25%",bio:"The artist who painted The Great Wave, one of the most famous pictures ever."},
 {id:"bolivar",name:"Simón Bolívar",emoji:"🐴",from:"Venezuela",bg:"#FFB300",pos:"50% 25%",bio:"Helped six South American countries win their independence."},
 {id:"mozart",name:"Wolfgang Mozart",emoji:"🎼",from:"Austria",bg:"#EC407A",pos:"50% 25%",bio:"Composed his first music when he was only five years old!"},
 {id:"wangari",name:"Wangari Maathai",emoji:"🌳",from:"Kenya",bg:"#689F38",pos:"50% 35%",bio:"Planted millions of trees across Africa and won the Nobel Peace Prize."},
 {id:"sejong",name:"Sejong the Great",emoji:"📖",from:"Korea",bg:"#3F51B5",pos:"50% 30%",bio:"A king who invented the Korean alphabet so everyone could learn to read."},
];
const CREDITS={einstein:"Oren Jack Turner, public domain",cleopatra:"Louis le Grand (bust photo), public domain",caesar:"Ángel M. Felicísimo (bust photo), public domain",amelia:"Underwood & Underwood, public domain",davinci:"Attributed to Francesco Melzi, public domain",curie:"Henri Manuel, public domain",frida:"Guillermo Kahlo, public domain",pele:"Unknown author, public domain",confucius:"Anonymous Han-dynasty painter, public domain",musa:"Catalan Atlas, attributed to Abraham Cresques, public domain",genghis:"Yuan-dynasty album portrait, public domain",gandhi:"Elliott & Fry, public domain",mandela:"Kingkongphoto & celebrity-photos.com, CC BY-SA 2.0",joan:"Medieval manuscript miniature, public domain",newton:"Godfrey Kneller, public domain",ada:"Antoine Claudet, public domain",battuta:"Léon Benett engraving, public domain",hokusai:"CC0 via Wikimedia Commons",bolivar:"Luis Enrique Toro Moreno, public domain",mozart:"Johann Nepomuk della Croce, public domain",wangari:"Kingkongphoto & celebrity-photos.com, CC BY-SA 2.0",sejong:"Statue photo by Marsilar, CC BY-SA 4.0"};
const STARTER_LEGENDS=8;
const LETTERS="ABCDEFGH";
const STAGE_TILES=[3,8,14,20,24];
const STAGE_ZOOM=[6,3.6,2.3,1.5,1];
const STAGE_SPOT=[[26,0,0],[44,28,0],[62,46,30],[90,74,58],[700,700,700]];
const STAGE_MORPH=[.85,.65,.45,.22,0];
const STAGE_PTS=[5,4,3,2,1];
const TILE_N=24;
const TILE_COLORS=["#FF5E5B","#FFD23F","#2BB673","#2D7DD2","#7B5CFF","#FF8C42"];
const DEFAULT_SETTINGS={minutes:2,level:0,bonus:"capital",style:"classic",cont:"ALL",sound:true,speak:false,practiceTimed:false,practiceAuto:true,flagset:"modern",spotSize:"m",blitzCount:20};

/* ---------- STORAGE ---------- */
const store={
 get(k,d){try{const v=localStorage.getItem("ff_"+k);return v?JSON.parse(v):d}catch(e){return d}},
 set(k,v){try{localStorage.setItem("ff_"+k,JSON.stringify(v))}catch(e){}}
};

/* ---------- STATE ---------- */
const S={
 mode:"two",
 players:[{name:"",avatar:{type:"hist",id:"einstein"}},{name:"",avatar:{type:"hist",id:"cleopatra"}}],
 settings:{...DEFAULT_SETTINGS},
 custom:[],profiles:[],friends:[],unlocked:STARTER_LEGENDS,order:[],cur:0,results:[]
};
let R=null,B=null;
let collection=new Set(store.get("collection",[]));

/* ---------- HELPERS ---------- */
const $=id=>document.getElementById(id);
const shuffle=(a,rnd=Math.random)=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const mulberry32=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const flagEmoji=c=>c.startsWith("h_")?"🏛️":c.startsWith("s_")?"🇺🇸":String.fromCodePoint(...[...c.toUpperCase()].map(ch=>0x1F1E6+ch.charCodeAt(0)-65));
const fmt=s=>{s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")};
const legend=av=>AVATARS.find(a=>a.id===av.id)||AVATARS[0];
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const whereTxt=f=>f.hist?f.era:CONT[f.cont];
function avatarHTML(av,cls=""){
 if(av.type==="custom")return `<div class="avatar ${cls}"><img src="${av.data}" alt="" style="object-position:50% 50%"></div>`;
 const h=legend(av);return `<div class="avatar ${cls}" style="background:${h.bg}"><span class="em">${h.emoji}</span><img src="legends/${h.id}.jpg" alt="" style="object-position:${h.pos}" onerror="this.remove()"></div>`;
}
const avatarName=av=>av.type==="custom"?"":legend(av).name;
const playerName=i=>S.players[i].name.trim()||avatarName(S.players[i].avatar)||("Player "+(i+1));
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("on",s.id===id));window.scrollTo(0,0)}
let flashT=null;function flash(msg){const f=$("flash");f.textContent=msg;f.classList.remove("on");void f.offsetWidth;f.classList.add("on");clearTimeout(flashT);flashT=setTimeout(()=>f.classList.remove("on"),1800)}
let cfCb=null;
function askConfirm(title,msg,yes,no,cb,noCb){$("cfTitle").textContent=title;$("cfMsg").textContent=msg;$("cfYes").textContent=yes;$("cfNo").textContent=no;cfCb=cb;$("cfNo").onclick=()=>{$("confirmModal").classList.remove("on");cfCb=null;if(noCb)noCb()};$("confirmModal").classList.add("on")}
$("cfYes").onclick=()=>{$("confirmModal").classList.remove("on");const cb=cfCb;cfCb=null;if(cb)cb()};

/* ---------- AUDIO ---------- */
let AC=null;
function tone(freq,dur,type="sine",vol=.18,when=0){
 if(!S.settings.sound)return;
 try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();
  const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.value=freq;
  const t=AC.currentTime+when;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g).connect(AC.destination);o.start(t);o.stop(t+dur+.05)}catch(e){}
}
const sfx={
 correct(){tone(660,.12,"triangle",.2);tone(880,.18,"triangle",.2,.1);tone(1320,.25,"triangle",.2,.2)},
 wrong(){tone(200,.25,"sawtooth",.12);tone(150,.35,"sawtooth",.12,.15)},
 pass(){tone(400,.1,"sine",.1)},
 tick(){tone(1000,.05,"square",.06)},
 stage(){tone(520,.06,"sine",.07)},
 warn(){[0,.18,.36].forEach(w=>tone(1200,.12,"square",.16,w))},
 timeup(){tone(600,.2,"square",.15);tone(450,.2,"square",.15,.2);tone(300,.5,"square",.15,.4)},
 fanfare(){[523,659,784,1047].forEach((f,i)=>tone(f,.3,"triangle",.2,i*.13));tone(1047,.7,"triangle",.2,.55)},
 streak(){[880,1100,1320,1760].forEach((f,i)=>tone(f,.1,"sine",.15,i*.07))},
 tap(){tone(500,.05,"sine",.08)}
};
function speak(text,force){
 if(!(force||S.settings.speak))return;
 try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=1;speechSynthesis.speak(u)}catch(e){}
}

/* ---------- HOME ---------- */
function renderPlayers(){
 const box=$("players");const n=S.mode==="two"?2:1;box.classList.toggle("solo",n===1);
 const profOpts=S.profiles.map((p,j)=>`<option value="${j}">${esc(p.name)}</option>`).join("");
 const who={two:i=>"Player "+(i+1),solo:()=>"Solo player",practice:()=>"Practicing",blitz:()=>"Blitz player",online:()=>"You"}[S.mode];
 box.innerHTML=S.players.slice(0,n).map((p,i)=>`
  <div class="pcard">
   <div class="who">${who(i)}</div>
   <button class="avbtn" data-pick="${i}" aria-label="Choose your Legend or photo">${avatarHTML(p.avatar)}</button>
   <div class="avname">${avatarName(p.avatar)||"My photo"}</div>
   <input id="pname${i}" placeholder="Type your name" value="${esc(p.name)}" maxlength="16" aria-label="Player name">
   ${S.profiles.length?`<select id="prof${i}" data-p="${i}" aria-label="Load a saved player"><option value="">👥 Load a saved player…</option>${profOpts}</select>`:""}
   <div class="mini-row"><button class="btn sm ghost" data-pick="${i}">🎭 Change Legend</button><button class="btn sm ghost" data-save="${i}">💾 Save player</button></div>
  </div>`).join("");
 box.querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>openAvatar(+b.dataset.pick));
 box.querySelectorAll("[data-save]").forEach(b=>b.onclick=()=>saveProfile(+b.dataset.save,true));
 box.querySelectorAll("input").forEach((inp,i)=>inp.oninput=()=>{S.players[i].name=inp.value;savePlayers()});
 box.querySelectorAll("select").forEach(sel=>sel.onchange=()=>{const p=S.profiles[+sel.value];if(!p)return;const i=+sel.dataset.p;S.players[i]={name:p.name,avatar:JSON.parse(JSON.stringify(p.avatar))};savePlayers();renderPlayers();sfx.tap();flash(`Welcome back, ${p.name}!`)});
}
function saveProfile(i,loud){
 const nm=S.players[i].name.trim();
 if(!nm){if(loud)flash("Type a name first, then save");return}
 const j=S.profiles.findIndex(p=>p.name.toLowerCase()===nm.toLowerCase());
 const rec={name:nm,avatar:JSON.parse(JSON.stringify(S.players[i].avatar))};
 if(j>=0)S.profiles[j]=rec;else S.profiles.push(rec);
 if(S.profiles.length>12)S.profiles.shift();
 store.set("profiles",S.profiles);
 if(loud){flash(`Saved ${nm} ✓`);sfx.correct();renderPlayers()}
}
function renderLevels(){
 $("levels").innerHTML=LEVELS.map((l,i)=>`<button class="chip ${i===S.settings.level?"on":""}" data-l="${i}">${l.emoji} ${l.name}</button>`).join("");
 $("levels").querySelectorAll(".chip").forEach(c=>c.onclick=()=>{S.settings.level=+c.dataset.l;saveSettings();renderLevels();sfx.tap()});
 $("lvlDesc").textContent=LEVELS[S.settings.level].desc;
}
function renderHome(){
 document.querySelectorAll("#modes .mode").forEach(m=>m.classList.toggle("on",m.dataset.mode===S.mode));
 $("modeDesc").textContent={two:"Take turns. Highest score wins the crown! 👑",solo:"Just you against the clock. Beat your best score!",practice:"No pressure, no lost points. Learn flags at your own pace.",blitz:"⚡ Flag Blitz: full flags, no reveal. How fast can you name them?",online:"🌐 Two tablets, same flags, same time. Hosting? Pick the settings below, then create the room at the bottom. Joining? Skip straight to Join a room."}[S.mode];
 renderPlayers();renderLevels();
 $("timeVal").textContent=fmt(S.settings.minutes*60);$("timeRange").value=S.settings.minutes;
 const isP=S.mode==="practice",isB=S.mode==="blitz",isO=S.mode==="online";
 const op=$("onlinePanel");op.hidden=!isO;$("btnStart").hidden=isO;$("onlineStatus").textContent="";
 if(isO){const sr=document.querySelector("#s-home .start-row");if(op.nextElementSibling!==sr)sr.parentNode.insertBefore(op,sr);$("duelCfg").textContent=cfgSummary(makeCfg())}
 $("practiceTimedRow").hidden=!isP;$("practiceAutoRow").hidden=!isP;$("blitzRow").hidden=!isB;
 $("timeRange").hidden=isB||(isP&&!S.settings.practiceTimed);$("timeVal").hidden=isB||(isP&&!S.settings.practiceTimed);
 $("setTime").querySelector(".label").textContent=isB?"⚡ Flag Blitz":"⏱ Round time";
 $("swPracticeTimed").classList.toggle("on",S.settings.practiceTimed);$("swPracticeAuto").classList.toggle("on",S.settings.practiceAuto);
 $("blitzChips").querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",+c.dataset.n===S.settings.blitzCount));
 $("setBonus").hidden=isP||isB||isO;
 document.querySelectorAll("#bonusChips .chip").forEach(c=>c.classList.toggle("on",c.dataset.bonus===S.settings.bonus));
 $("bonusDesc").textContent=BONUS[S.settings.bonus].desc;
 document.querySelectorAll("#styleChips .chip").forEach(c=>{c.classList.toggle("on",c.dataset.style===S.settings.style);c.disabled=isB});
 $("styleDesc").textContent=isB?"Flag Blitz shows every flag in full, so reveal styles are off.":STYLES[S.settings.style].desc;
 $("contChipsHome").innerHTML=Object.entries(CONT_GROUPS).map(([k,g])=>`<button class="chip ${k===S.settings.cont?"on":""}" data-cont="${k}">${g.name}</button>`).join("");
 $("contChipsHome").querySelectorAll(".chip").forEach(c=>c.onclick=()=>{S.settings.cont=c.dataset.cont;saveSettings();renderHome();sfx.tap()});
 document.querySelectorAll("#flagsetChips .chip").forEach(c=>c.classList.toggle("on",c.dataset.fs===S.settings.flagset));$("flagsetDesc").textContent=FLAGSETS[S.settings.flagset];
 $("spotRow").hidden=isB||!(S.settings.style==="spotlight"||S.settings.style==="mix");document.querySelectorAll("#spotChips .chip").forEach(c=>c.classList.toggle("on",c.dataset.sp===S.settings.spotSize));
 renderFriends();
 $("swSound").classList.toggle("on",S.settings.sound);$("swSpeak").classList.toggle("on",S.settings.speak);
 $("creditsList").innerHTML=AVATARS.map(a=>`<li>${a.name}: ${CREDITS[a.id]||""}</li>`).join("")+`<li>Historical and US state flags: Wikimedia Commons renderings, public domain.</li>`;
}
const saveSettings=()=>store.set("settings",S.settings);
const savePlayers=()=>store.set("players",S.players.map(p=>({name:p.name,avatar:p.avatar})));
document.querySelectorAll("#modes .mode").forEach(m=>m.onclick=()=>{S.mode=m.dataset.mode;store.set("mode",S.mode);renderHome();sfx.tap()});
$("timeRange").oninput=e=>{S.settings.minutes=+e.target.value;$("timeVal").textContent=fmt(S.settings.minutes*60);saveSettings()};
document.querySelectorAll("#bonusChips .chip").forEach(c=>c.onclick=()=>{S.settings.bonus=c.dataset.bonus;saveSettings();renderHome();sfx.tap()});
document.querySelectorAll("#styleChips .chip").forEach(c=>c.onclick=()=>{S.settings.style=c.dataset.style;saveSettings();renderHome();sfx.tap()});
document.querySelectorAll("#blitzChips .chip").forEach(c=>c.onclick=()=>{S.settings.blitzCount=+c.dataset.n;saveSettings();renderHome();sfx.tap()});
$("swSound").onclick=()=>{S.settings.sound=!S.settings.sound;saveSettings();renderHome();sfx.tap()};
$("swSpeak").onclick=()=>{S.settings.speak=!S.settings.speak;saveSettings();renderHome();if(S.settings.speak)speak("I will read the choices out loud.",true)};
$("swPracticeTimed").onclick=()=>{S.settings.practiceTimed=!S.settings.practiceTimed;saveSettings();renderHome();sfx.tap()};
$("swPracticeAuto").onclick=()=>{S.settings.practiceAuto=!S.settings.practiceAuto;saveSettings();renderHome();sfx.tap()};
document.querySelectorAll("#flagsetChips .chip").forEach(c=>c.onclick=()=>{S.settings.flagset=c.dataset.fs;saveSettings();renderHome();sfx.tap()});
document.querySelectorAll("#spotChips .chip").forEach(c=>c.onclick=()=>{S.settings.spotSize=c.dataset.sp;saveSettings();renderHome();sfx.tap()});
$("btnSaveSettings").onclick=()=>{saveSettings();savePlayers();[0,1].forEach(i=>saveProfile(i,false));store.set("profiles",S.profiles);const t=new Date();$("saveStatus").textContent=`Saved ✓ ${t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}`;flash("Settings and players saved ✓");sfx.correct();renderPlayers()};
$("btnResetSettings").onclick=()=>askConfirm("Reset settings?","Round time, difficulty, challenges and sound go back to the defaults. Players and scores are kept.","Reset","Cancel",()=>{S.settings={...DEFAULT_SETTINGS};saveSettings();renderHome();flash("Settings reset")});
$("btnHof").onclick=()=>{renderHof();showScreen("s-hof")};
$("btnHof2").onclick=()=>{renderHof();showScreen("s-hof")};
$("btnHofBack").onclick=()=>showScreen("s-home");
$("btnBook").onclick=()=>{renderBook();showScreen("s-book")};
$("btnBookBack").onclick=()=>{labStop();showScreen("s-home")};

/* ---------- LEGEND PICKER ---------- */
let picking=0;
function openAvatar(i){picking=i;renderAvGrid();$("avTitle").textContent=S.mode==="two"?`Player ${i+1}, pick your Legend`:"Pick your Legend";$("avModal").classList.add("on")}
function renderAvGrid(){
 const cur=S.players[picking].avatar;
 $("avHint").textContent=`${S.unlocked} of ${AVATARS.length} World Legends unlocked. Finish a game to unlock the next one! Or upload your own photo.`;
 let h=AVATARS.map((a,i)=>{const locked=i>=S.unlocked;return `<button class="avopt ${cur.type==="hist"&&cur.id===a.id?"on":""}" data-id="${a.id}" ${locked?'data-locked="1"':""}>${avatarHTML({type:"hist",id:a.id},locked?"locked":"")}${locked?'<span class="lock">🔒</span>':""}<span>${locked?"???":a.name}</span></button>`}).join("");
 h+=S.custom.map((d,i)=>`<button class="avopt ${cur.type==="custom"&&cur.data===d?"on":""}" data-custom="${i}">${avatarHTML({type:"custom",data:d})}<span>My photo</span></button>`).join("");
 h+=`<button class="avopt upload" id="avUpload"><span style="font-size:1.8rem">📷</span><span>Upload my photo</span></button>`;
 $("avgrid").innerHTML=h;
 $("avgrid").querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>{
  if(b.dataset.locked){const a=AVATARS.find(x=>x.id===b.dataset.id);$("avBio").innerHTML=`${avatarHTML({type:"hist",id:a.id},"sm locked")}<div><b>Locked Legend</b><p>Finish a Solo or Two Player game to unlock the next Legend.</p></div>`;sfx.pass();return}
  S.players[picking].avatar={type:"hist",id:b.dataset.id};savePlayers();renderAvGrid();sfx.tap()});
 $("avgrid").querySelectorAll("[data-custom]").forEach(b=>b.onclick=()=>{S.players[picking].avatar={type:"custom",data:S.custom[+b.dataset.custom]};savePlayers();renderAvGrid();sfx.tap()});
 $("avUpload").onclick=()=>$("avFile").click();
 const a=cur.type==="hist"?legend(cur):null;
 $("avBio").innerHTML=a?`${avatarHTML(cur,"sm")}<div><b>${a.name}</b> · from ${a.from}<p>${a.bio}</p></div>`:`${avatarHTML(cur,"sm")}<div><b>Your own photo</b><p>Looking good! Tap Done to play as yourself.</p></div>`;
}
$("avFile").onchange=e=>{
 const f=e.target.files[0];if(!f)return;
 const img=new Image();const url=URL.createObjectURL(f);
 img.onload=()=>{const c=document.createElement("canvas");const s=160;c.width=c.height=s;const x=c.getContext("2d");
  const m=Math.min(img.width,img.height);x.drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,s,s);
  const data=c.toDataURL("image/jpeg",.82);URL.revokeObjectURL(url);
  S.custom.push(data);if(S.custom.length>6)S.custom.shift();store.set("custom",S.custom);
  S.players[picking].avatar={type:"custom",data};savePlayers();renderAvGrid();sfx.correct()};
 img.src=url;e.target.value="";
};
$("avDone").onclick=()=>{$("avModal").classList.remove("on");renderHome()};
$("avModal").onclick=e=>{if(e.target===$("avModal"))$("avDone").click()};

/* ---------- GAME FLOW ---------- */
$("btnStart").onclick=()=>{
 if(S.mode==="online"){flash("Create or join a room above");return}
 S.order=S.mode==="two"?[0,1]:[0];S.cur=0;S.results=[];
 document.querySelectorAll("#players input").forEach((inp,i)=>S.players[i].name=inp.value);
 S.order.forEach(i=>saveProfile(i,false));savePlayers();
 sfx.tap();goReady();
};
function goReady(){
 const i=S.order[S.cur];const L=LEVELS[S.settings.level];
 $("readyAvatar").innerHTML=avatarHTML(S.players[i].avatar,"xl pop");
 const titles={practice:`${playerName(i)}, let's practice!`,blitz:`${playerName(i)}, ready for the Blitz?`};
 $("readyTitle").textContent=titles[S.mode]||`${playerName(i)}, get ready!`;
 const extras=[S.mode!=="blitz"&&S.settings.style!=="classic"?STYLES[S.settings.style].name:null,S.settings.cont!=="ALL"?CONT_GROUPS[S.settings.cont].name+" only":null,S.settings.flagset==="both"?"historical flags mixed in":S.settings.flagset==="hist"?"historical flags only":null].filter(Boolean).join(" · ");
 if(S.mode==="blitz")$("readyRules").textContent=`${S.settings.blitzCount} flags, shown in full. Tap the right country as fast as you can. ✓ for right, ✗ for wrong, no points lost. The clock counts up until you finish. Level: ${L.emoji} ${L.name}.`+(extras?` Challenge: ${extras}.`:"");
 else{const timed=S.mode!=="practice"||S.settings.practiceTimed;
  $("readyRules").textContent=(timed?`You have ${fmt(S.settings.minutes*60)}. `:"No timer. ")+`The flag is revealed in 5 stages: guess at stage 1 for 5 points, stage 2 for 4… fully revealed is 1 point. `+(S.mode==="practice"?"Wrong answers cost nothing here. ":"Wrong answers cost 1 point. Passing is free. ")+`3 in a row = 🔥 double points! Level: ${L.emoji} ${L.name}.`+(extras?` Challenge: ${extras}.`:"")}
 showScreen("s-ready");
}
$("btnGo").onclick=()=>{sfx.tap();startRound()};
let cdTimer=null;
function runCountdown(cb){
 const ov=$("cdOverlay"),n=$("cdNum");ov.classList.add("on");const seq=["3","2","1","GO!"];let i=0;
 const show=()=>{n.textContent=seq[i];n.classList.toggle("go",seq[i]==="GO!");$("cdSub").textContent=seq[i]==="GO!"?"Spot that flag!":"Get ready…";$("cdCancel").hidden=seq[i]==="GO!";
  n.classList.remove("pop");void n.offsetWidth;n.classList.add("pop");
  if(seq[i]==="GO!")tone(900,.35,"square",.16);else tone(600,.15,"square",.12);
  i++;cdTimer=i<seq.length?setTimeout(show,850):setTimeout(()=>{cdTimer=null;ov.classList.remove("on");cb()},650)};
 show();
}
$("cdCancel").onclick=()=>{clearTimeout(cdTimer);cdTimer=null;$("cdOverlay").classList.remove("on");quitGame();flash("Cancelled. No game started.")};
function activeFlags(){const fs=S.settings.flagset;return fs==="hist"?HFLAGS:fs==="both"?FLAGS.concat(HFLAGS):FLAGS}
function buildPool(L,rnd){
 const conts=CONT_GROUPS[S.settings.cont].conts;
 const inCont=f=>!conts||conts.includes(f.cont);
 const fs=S.settings.flagset;
 if(fs==="hist"){let hp=HFLAGS.filter(inCont);if(hp.length<6)hp=HFLAGS.slice();return shuffle(hp,rnd)}
 let pool=FLAGS.filter(f=>inCont(f)&&L.tiers.includes(f.tier));
 if(pool.length<8)pool=FLAGS.filter(inCont);
 if(fs==="both")pool=pool.concat(HFLAGS.filter(inCont));
 return shuffle(pool,rnd);
}
function startRound(){
 const i=S.order[S.cur];const L=LEVELS[S.settings.level];const blitz=S.mode==="blitz";
 const rng=(NET&&NET.started&&NET.seed!=null)?mulberry32(NET.seed):Math.random;
 R={player:i,L,rng,pool:buildPool(L,rng),qi:0,score:0,correct:0,wrong:0,passed:0,streak:0,best:0,seen:[],learned:[],blitz,blitzN:S.settings.blitzCount,elapsed:0,
    timed:!blitz&&(S.mode!=="practice"||S.settings.practiceTimed),timeLeft:S.settings.minutes*60,total:S.settings.minutes*60,
    active:true,started:false,paused:false,userPaused:false,pendingNext:false,locked:false,lastTs:0,revealT:0,stage:0,lastTick:99,warned:false,target:null,choices:[],order:[],style:"classic"};
 $("hudAvatar").innerHTML=avatarHTML(S.players[i].avatar,"sm");$("hudName").textContent=playerName(i);
 $("hudScore").textContent="0";$("hudStreak").textContent="";$("hudScore").previousElementSibling.textContent=blitz?"Right":"Score";
 $("fxwrap").className=L.fx;$("timer").classList.toggle("off",!R.timed);$("timer").classList.remove("low");$("s-play").classList.remove("hurry");
 $("btnStop").textContent=(S.mode==="practice"||blitz)?"⏹ Finish":"⏹ Quit";$("btnPass").hidden=blitz;$("meter").hidden=blitz;
 $("tiles").innerHTML=Array.from({length:TILE_N},(_,i)=>`<div class="tile" style="background-color:${TILE_COLORS[(i*5+Math.floor(i/6))%TILE_COLORS.length]}">?</div>`).join("");
 showScreen("s-play");renderTimer();nextFlag(true);renderOppHud();
 runCountdown(()=>{if(!R||!R.active)return;R.started=true;R.lastTs=0;speakChoices();requestAnimationFrame(loop)});
}
function speakChoices(force){speak("Which flag is this? "+R.choices.map((c,i)=>LETTERS[i]+". "+c.name).join(". "),force)}
function nextFlag(silent){
 if(R.blitz&&R.seen.length>=R.blitzN){endRound();return}
 if(R.qi>=R.pool.length){R.pool=shuffle(R.pool,R.rng);R.qi=0}
 const t=R.pool[R.qi++];R.target=t;R.seen.push(t.code);
 R.style=R.blitz?"blitz":(S.settings.style==="mix"?MIX_STYLES[Math.floor(R.rng()*MIX_STYLES.length)]:S.settings.style);
 const dmode=R.style==="lookalike"||R.style==="morph"?"lookalike":R.L.distract;
 R.choices=shuffle([t,...distractors(t,R.L.choices-1,dmode)],R.rng);
 R.order=shuffle(Array.from({length:TILE_N},(_,i)=>i));
 R.revealT=0;R.stage=-1;R.locked=false;R.paused=false;
 const fb=$("flagbox");fb.classList.add("noanim");fb.classList.remove("noimg");fb.classList.toggle("flip",R.style==="flip");fb.classList.toggle("contain",!!t.hist);fb.classList.toggle("morphing",R.style==="morph");
 const img=$("flagimg");img.style.transition="none";img.style.transform="";img.style.transformOrigin=`${20+Math.random()*60}% ${20+Math.random()*60}%`;
 img.src=flagSrc(t.code);img.dataset.flag=t.code;$("flagEmoji").textContent=flagEmoji(t.code);img.onerror=()=>{if(!img.src.startsWith("blob:")&&!flagSrc(t.code))return;fb.classList.add("noimg")};
 if(R.style==="morph"){const decoy=R.choices.find(c=>c.code!==t.code);R.decoy=decoy;const m=$("morphimg");m.src=flagSrc(decoy.code);m.dataset.flag=decoy.code;m.style.opacity=STAGE_MORPH[0]}
 $("tiles").classList.toggle("hide",R.style!=="classic"&&R.style!=="flip"&&R.style!=="lookalike");
 $("tiles").querySelectorAll(".tile").forEach(x=>{x.style.transitionDelay="0ms";x.classList.remove("gone")});
 $("spot").classList.toggle("on",R.style==="spotlight");
 [0,1,2].forEach(k=>{const c=$("sc"+k);c.style.r="0px";c.setAttribute("r","0")});
 if(R.style==="spotlight"){const sr=mulberry32(((NET&&NET.seed)||Math.floor(Math.random()*1e9))+R.qi*7919);R.spotRnd=sr;R.spot={x:60+sr()*280,y:50+sr()*200,tx:40+sr()*320,ty:35+sr()*230};const c=$("sc0");c.setAttribute("cx",R.spot.x);c.setAttribute("cy",R.spot.y)}
 const pill=$("stylePill");pill.hidden=R.style==="classic";
 pill.textContent=R.blitz?`⚡ Flag Blitz · ${R.seen.length}/${R.blitzN}`:({spotlight:"🔦 Spotlight",zoom:"🕵️ Mystery Zoom",flip:"🔄 Upside-Down",lookalike:"👀 Look-alikes",morph:"🧬 Morph"}[R.style]||"");
 $("toast").classList.remove("on");$("bmark").className="bmark";
 $("choices").innerHTML=R.choices.map((c,i)=>`<button class="choice" data-c="${c.code}"><span class="k">${LETTERS[i]}</span><span>${c.name}</span></button>`).join("");
 $("choices").querySelectorAll(".choice").forEach(b=>b.onclick=()=>answer(b.dataset.c));
 if(R.blitz){$("tiles").querySelectorAll(".tile").forEach(x=>x.classList.add("gone"));img.style.filter="none";void fb.offsetWidth;fb.classList.remove("noanim")}
 else{const st0=R.style==="zoom"?STAGE_ZOOM[0]:1;img.style.transform=`scale(${st0})`;img.style.filter=`blur(${R.L.blur}px) grayscale(${R.L.gray?1:0})`;void fb.offsetWidth;fb.classList.remove("noanim");updateReveal(true)}
 requestAnimationFrame(()=>requestAnimationFrame(()=>{img.style.transition=""}));
 const nx=R.pool[R.qi];if(nx&&!nx.hist){const im=new Image();im.src=flagSrc(nx.code)}
 if(!silent)speakChoices();
}
function distractors(t,n,mode){
 const maxT=Math.min(4,Math.max(...R.L.tiers)+1);
 const conts=CONT_GROUPS[S.settings.cont].conts;
 const all=activeFlags();
 let cands=all.filter(f=>f.code!==t.code&&f.tier<=maxT&&(!conts||conts.includes(f.cont)));
 if(cands.length<n)cands=all.filter(f=>f.code!==t.code&&(!conts||conts.includes(f.cont)));
 if(cands.length<n)cands=all.filter(f=>f.code!==t.code);
 const rnd=R.rng;
 if(mode==="random")return shuffle(cands,rnd).slice(0,n);
 if(mode==="continent"){const same=shuffle(cands.filter(f=>f.cont===t.cont),rnd);const rest=shuffle(cands.filter(f=>f.cont!==t.cont),rnd);return same.concat(rest).slice(0,n)}
 const sim=f=>{let inter=0;for(const c of t.colors)if(f.colors.includes(c))inter++;const uni=new Set(t.colors+f.colors).size;return inter/uni+(f.cont===t.cont?.2:0)+(f.hist===t.hist?.15:0)+rnd()*.25};
 return cands.map(f=>[sim(f),f]).sort((a,b)=>b[0]-a[0]).slice(0,n).map(x=>x[1]);
}
function spotRadius(st){const r=(SPOT_R[S.settings.spotSize]||48)*(1+.1*st);const c=$("sc0");c.style.r=r+"px";c.setAttribute("r",r)}
function moveSpot(dt){const p=R.spot;if(!p)return;const k=Math.min(1,dt*1.7);p.x+=(p.tx-p.x)*k;p.y+=(p.ty-p.y)*k;if(Math.hypot(p.tx-p.x,p.ty-p.y)<16){p.tx=40+R.spotRnd()*320;p.ty=35+R.spotRnd()*230}const c=$("sc0");c.setAttribute("cx",p.x.toFixed(1));c.setAttribute("cy",p.y.toFixed(1))}
function updateReveal(first){
 const per=R.L.reveal/5;const st=Math.min(4,Math.floor(R.revealT/per));
 if(st===R.stage&&!first)return;
 if(!first&&st>0)sfx.stage();
 R.stage=st;
 const shown=STAGE_TILES[st];let k=0;
 $("tiles").querySelectorAll(".tile").forEach((x,i)=>{const show=R.order[i]<shown;if(show&&!x.classList.contains("gone")){x.style.transitionDelay=(k++*70)+"ms";x.classList.add("gone")}});
 if(R.style==="spotlight")spotRadius(st);
 const img=$("flagimg");const f=st/4;
 if(R.style==="zoom"){img.style.transform=`scale(${STAGE_ZOOM[st]})`;img.style.filter=R.L.gray?`grayscale(${(1-f).toFixed(2)})`:"none"}
 else if(R.style==="morph"){const m=$("morphimg");m.style.opacity=STAGE_MORPH[st];m.style.filter=`blur(${(st===4?0:1+st).toFixed(0)}px)`;img.style.filter=`blur(${((1-f)*Math.min(R.L.blur,4)).toFixed(1)}px)`}
 else{img.style.filter=`blur(${((1-f)*R.L.blur).toFixed(1)}px) grayscale(${R.L.gray?(1-f).toFixed(2):0})`}
 const pts=STAGE_PTS[st];const mult=R.streak>=3?2:1;
 $("meter").innerHTML=[1,2,3,4,5].map(i=>`<span class="star ${i<=pts?"":"off"}">⭐</span>`).join("")+`<span class="pts">${st<4?"Stage "+(st+1):(R.style==="spotlight"?"Final stage":"Fully revealed")} · ${pts*mult} point${pts*mult>1?"s":""}${mult>1?" 🔥":""}</span>`;
}
function loop(ts){
 if(!R||!R.active)return;
 const dt=R.lastTs?Math.min(.1,(ts-R.lastTs)/1000):0;R.lastTs=ts;
 if(!R.paused&&!R.userPaused){
  if(R.blitz){R.elapsed+=dt}
  else if(R.timed){R.timeLeft-=dt;const s=Math.ceil(R.timeLeft);
   if(s===10&&!R.warned){R.warned=true;sfx.warn();$("s-play").classList.add("hurry");speak("Ten seconds left!")}
   if(s<=10&&s!==R.lastTick&&s>0){if(s!==10)sfx.tick();R.lastTick=s}
   if(R.timeLeft<=0){R.timeLeft=0;renderTimer();endRound();return}}
  if(!R.locked&&!R.blitz){R.revealT+=dt;updateReveal();if(R.style==="spotlight")moveSpot(dt)}
  renderTimer();
 }
 requestAnimationFrame(loop);
}
function renderTimer(){
 if(R.blitz){$("timerFill").style.transform=`scaleX(${Math.min(1,R.seen.length/R.blitzN)})`;$("timerTxt").textContent=`⏱ ${R.elapsed.toFixed(1)} s · flag ${Math.min(R.seen.length,R.blitzN)} of ${R.blitzN}`;return}
 if(!R.timed){$("timerFill").style.transform="scaleX(1)";$("timerTxt").textContent="Practice · no timer";return}
 $("timerFill").style.transform=`scaleX(${R.timeLeft/R.total})`;$("timerTxt").textContent=fmt(R.timeLeft);
 $("timer").classList.toggle("low",R.timeLeft<=10);
}
function answer(code){
 if(!R.started||R.locked||R.userPaused)return;R.locked=true;R.paused=true;
 const t=R.target;const ok=code===t.code;
 $("choices").querySelectorAll(".choice").forEach(b=>{b.disabled=true;if(b.dataset.c===t.code)b.classList.add("correct");else if(b.dataset.c===code)b.classList.add("wrong");else b.classList.add("dim")});
 if(R.blitz){
  if(ok){R.correct++;R.streak++;R.best=Math.max(R.best,R.streak);sfx.correct();if(!R.learned.includes(t.code))R.learned.push(t.code);if(!collection.has(t.code)){collection.add(t.code);store.set("collection",[...collection])}}
  else{R.wrong++;R.streak=0;sfx.wrong()}
  $("hudScore").textContent=R.correct;$("hudStreak").textContent=R.streak>=3?`🔥 ${R.streak} in a row!`:"";
  const bm=$("bmark");bm.textContent=ok?"✓":"✗";bm.className="bmark on "+(ok?"ok":"no");
  R.toastTimer=setTimeout(()=>{if(!R||!R.active)return;if(R.userPaused){R.pendingNext=true;return}R.paused=false;nextFlag(true)},ok?450:900);
  return;
 }
 const base=STAGE_PTS[R.stage];const mult=R.streak>=3?2:1;
 revealAll();
 let delta=0,extra="";
 if(ok){R.correct++;R.streak++;R.best=Math.max(R.best,R.streak);delta=base*mult;
  if(R.streak===3){extra="🔥 Streak! Double points!";sfx.streak()}else if(mult>1){extra="🔥 ×2";sfx.correct()}else sfx.correct();
  if(!R.learned.includes(t.code))R.learned.push(t.code);
  if(!collection.has(t.code)){collection.add(t.code);store.set("collection",[...collection]);extra+=(extra?" · ":"")+"🌟 New flag collected!"}
  $("hudScore").classList.add("pop");
 }else{R.wrong++;R.streak=0;delta=S.mode==="practice"?0:-1;sfx.wrong();$("stage").classList.add("shake");setTimeout(()=>$("stage").classList.remove("shake"),450)}
 R.score=Math.max(0,R.score+delta);$("hudScore").textContent=R.score;setTimeout(()=>$("hudScore").classList.remove("pop"),500);
 renderStreak();netSync();
 showToast(ok?"good":"bad",ok?`${flagEmoji(t.code)} ${t.name.toUpperCase()} — Correct! +${delta}`:`${flagEmoji(t.code)} It was ${t.name.toUpperCase()}${S.mode==="practice"?"":" · −1"}`,t,extra);
 speak(ok?`Correct! ${t.name}. Capital ${t.capital}.`:`Oops. It was ${t.name}. Capital ${t.capital}.`);
}
function renderStreak(){
 $("hudStreak").innerHTML=R.streak>=3?`<span class="mult">🔥 ×2 streak (${R.streak})</span>`:R.streak===2?"🔥 2 in a row, one more for ×2!":"";
}
function pass(){
 if(!R||!R.started||R.locked||R.userPaused||R.blitz)return;R.locked=true;R.paused=true;R.passed++;
 const t=R.target;$("choices").querySelectorAll(".choice").forEach(b=>{b.disabled=true;if(b.dataset.c===t.code)b.classList.add("correct");else b.classList.add("dim")});
 revealAll();sfx.pass();netSync();showToast("pass",`${flagEmoji(t.code)} ${t.name.toUpperCase()} · passed`,t,"");speak(`It was ${t.name}.`);
}
function revealAll(){$("tiles").querySelectorAll(".tile").forEach((x,i)=>{x.style.transitionDelay=(i%6*40)+"ms";x.classList.add("gone")});[0,1,2].forEach(j=>{$("sc"+j).style.r="700px";$("sc"+j).setAttribute("r","700")});const img=$("flagimg");img.style.filter="none";img.style.transform="scale(1)";$("morphimg").style.opacity=0;$("flagbox").classList.remove("flip")}
function showToast(kind,big,t,extra){
 $("toastBig").className="big "+kind;$("toastBig").textContent=big;
 $("toastWho").textContent=`Capital: ${t.capital} • ${whereTxt(t)}`+(extra?`  ${extra}`:"");
 const xy=MAPXY[t.map||t.code];$("toastMap").hidden=!xy;if(xy){$("toastPin").style.left=(xy[0]/8)+"%";$("toastPin").style.top=(xy[1]/4)+"%"}
 const practice=S.mode==="practice";$("toastFact").hidden=!practice;$("toastFact").textContent=t.fact;$("toastNext").hidden=!practice;
 $("toast").classList.add("on");
 const auto=!practice||S.settings.practiceAuto;
 if(auto)R.toastTimer=setTimeout(()=>{if(!R||!R.active)return;if(R.userPaused){R.pendingNext=true;return}R.paused=false;nextFlag()},practice?3200:(kind==="good"?2000:2400));
}
$("toastNext").onclick=()=>{if(R&&R.active&&!R.userPaused){clearTimeout(R.toastTimer);R.paused=false;nextFlag()}};
$("btnPass").onclick=pass;
$("btnSpeak").onclick=()=>{if(R&&R.choices.length)speakChoices(true)};
/* pause / resume / quit */
function pauseGame(){
 if(R&&R.active&&R.started&&!R.userPaused){R.userPaused=true}
 else if(B&&B.active&&!B.userPaused){B.userPaused=true}
 else return;
 try{speechSynthesis.cancel()}catch(e){}
 $("pauseOv").classList.add("on");sfx.pass();
}
function resumeGame(){
 $("pauseOv").classList.remove("on");
 if(R&&R.active&&R.userPaused){R.userPaused=false;R.lastTs=0;if(R.pendingNext){R.pendingNext=false;R.paused=false;nextFlag(R.blitz)}}
 if(B&&B.active&&B.userPaused){B.userPaused=false;B.lastTs=0;if(B.pendingNext){B.pendingNext=false;bonusNext()}}
 sfx.tap();
}
function quitGame(){
 if(R){R.active=false;clearTimeout(R.toastTimer)}if(B){B.active=false}
 try{speechSynthesis.cancel()}catch(e){}
 $("pauseOv").classList.remove("on");$("cdOverlay").classList.remove("on");$("s-play").classList.remove("hurry");
 R=null;B=null;S.results=[];netLeave(true);renderHome();showScreen("s-home");flash("Game ended. No score saved.");
}
$("btnPause").onclick=pauseGame;$("btnBonusPause").onclick=pauseGame;$("btnResume").onclick=resumeGame;
$("btnStop").onclick=()=>{if(!R||!R.active)return;if(S.mode==="practice"||R.blitz){endRound();return}pauseGame();askConfirm("Quit this game?","The round ends now and nothing is saved to the leaderboard.","Quit game","Keep playing",quitGame,resumeGame)};
$("btnBonusQuit").onclick=()=>{if(!B||!B.active)return;pauseGame();askConfirm("Quit this game?","The bonus round and this game's scores are thrown away.","Quit game","Keep playing",quitGame,resumeGame)};
function endRound(){
 if(!R||!R.active)return;R.active=false;clearTimeout(R.toastTimer);sfx.timeup();try{speechSynthesis.cancel()}catch(e){}
 $("s-play").classList.remove("hurry");$("pauseOv").classList.remove("on");$("bmark").className="bmark";
 const res={player:R.player,score:R.score,correct:R.correct,wrong:R.wrong,passed:R.passed,best:R.best,learned:R.learned.slice(),seen:R.seen.slice(),bonus:0};
 S.results.push(res);
 $("sumAvatar").innerHTML=avatarHTML(S.players[R.player].avatar,"xl pop");
 const dyk=shuffle([...new Set(res.learned.length?res.learned:res.seen)]).slice(0,3);
 $("sumDyk").innerHTML=dyk.map(c=>`<div class="c"><img ${flagAttr(c)} alt=""><div><b>${BY[c].name}</b><p>${BY[c].fact}</p></div></div>`).join("")||`<div class="muted" style="font-weight:800">Play a little longer to collect facts!</div>`;
 $("sumLearned").innerHTML=res.learned.length?res.learned.map(c=>`<span class="mini"><img ${flagAttr(c)} alt="">${BY[c].name}</span>`).join(""):`<span class="muted" style="font-weight:800">No flags yet. Next time!</span>`;
 if(R.blitz){
  const answered=R.correct+R.wrong;const secs=R.elapsed;const per=answered?secs/answered:0;
  const best=store.get("blitz",null);const better=!best||R.correct>best.right||(R.correct===best.right&&secs<best.secs);
  const rec={right:R.correct,total:R.blitzN,secs:+secs.toFixed(1),level:S.settings.level,ln:R.L.name,d:new Date().toISOString().slice(0,10)};
  if(better&&answered>=R.blitzN)store.set("blitz",rec);
  $("sumTitle").textContent=answered>=R.blitzN?(better?"⚡ New Blitz record!":"⚡ Blitz complete!"):"⚡ Blitz stopped";
  $("sumScore").textContent=`${R.correct}/${answered}`;
  $("sumSub").textContent=`${playerName(R.player)} · ${secs.toFixed(1)} seconds · ${per.toFixed(1)} s per flag · ${answered?Math.round(R.correct/answered*100):0}% accuracy`+(best&&!better?` · Best: ${best.right}/${best.total} in ${best.secs}s`:"");
  $("sumRight").textContent=R.correct;$("sumWrong").textContent=R.wrong;$("sumPass").textContent=secs.toFixed(0);$("sumPass").nextElementSibling.textContent="Seconds";
  $("btnSumNext").textContent="Done ➜";
 }else{
  $("sumPass").nextElementSibling.textContent="Passed";
  $("sumTitle").textContent=R.timed&&R.timeLeft<=0?"Time's up!":"Round over!";
  $("sumScore").textContent=res.score;$("sumSub").textContent=`${playerName(R.player)} · best streak ${res.best}`;
  $("sumRight").textContent=res.correct;$("sumWrong").textContent=res.wrong;$("sumPass").textContent=res.passed;
  const hasBonus=S.mode!=="practice"&&S.mode!=="online"&&S.settings.bonus!=="off";
  $("btnSumNext").textContent=hasBonus?"🎁 Bonus round ➜":(S.mode==="two"&&S.cur<1?"Next player ➜":(S.mode==="practice"?"Done ➜":"See results ➜"));
 }
 $("btnSumNext").disabled=false;
 if(S.mode==="online"&&NET){NET.done=true;netTrack();netCheckResults()}
 showScreen("s-summary");
}
$("btnSumNext").onclick=()=>{sfx.tap();if(S.mode!=="practice"&&S.mode!=="blitz"&&S.mode!=="online"&&S.settings.bonus!=="off")startBonus();else afterPlayer()};
function afterPlayer(){
 if(S.mode==="online"){showResultsOnline();return}
 if(S.mode==="practice"||S.mode==="blitz"){renderHome();showScreen("s-home");return}
 S.cur++;if(S.cur<S.order.length)goReady();else showResults();
}

/* ---------- BONUS ---------- */
function startBonus(){
 const res=S.results[S.results.length-1];const i=res.player;const type=S.settings.bonus;
 $("bonusAvatar").innerHTML=avatarHTML(S.players[i].avatar,"sm");$("bonusName").textContent=playerName(i);
 $("bonusPill").textContent=BONUS[type].name;$("bonusScore").textContent="0";
 B={type,res,score:0,q:0,active:true,locked:false,userPaused:false,pendingNext:false};
 if(type==="capital"){
  const seen=shuffle([...new Set(res.seen)]).map(c=>BY[c]);const fill=shuffle(FLAGS.filter(f=>f.tier<=2&&!res.seen.includes(f.code)));
  B.qs=seen.concat(fill).slice(0,3);B.per=12;
 }else if(type==="states"){B.qs=shuffle(STATES).slice(0,5);B.per=10}
 else{B.total=20;B.timeLeft=20;B.pool=shuffle(FLAGS.filter(f=>f.tier<=Math.max(...LEVELS[S.settings.level].tiers)))}
 $("btnBonusPass").hidden=false;showScreen("s-bonus");bonusNext();B.lastTs=0;requestAnimationFrame(bonusLoop);
}
function bonusNext(){
 B.locked=false;$("bonusToast").classList.remove("on");
 let opts,t;
 if(B.type==="capital"||B.type==="states"){
  if(B.q>=B.qs.length){endBonus();return}
  t=B.qs[B.q];B.qTime=B.per;
  if(B.type==="capital"){
   const caps=shuffle(FLAGS.filter(f=>f.code!==t.code&&f.capital!==t.capital&&f.cont===t.cont)).slice(0,3);opts=shuffle([t,...caps]);
   $("bonusQ").textContent=`What is the capital of ${t.name}?`;
   $("bonusChoices").innerHTML=opts.map((c,i)=>`<button class="choice" data-c="${c.code}"><span class="k">${LETTERS[i]}</span><span>${c.capital}</span></button>`).join("");
   speak(`What is the capital of ${t.name}? `+opts.map((c,i)=>LETTERS[i]+". "+c.capital).join(". "));
  }else{
   opts=shuffle([t,...shuffle(STATES.filter(s=>s.code!==t.code)).slice(0,3)]);
   $("bonusQ").textContent="🇺🇸 Which state's flag is this?";
   $("bonusChoices").innerHTML=opts.map((c,i)=>`<button class="choice" data-c="${c.code}"><span class="k">${LETTERS[i]}</span><span>${c.name}</span></button>`).join("");
   speak("Which state is this? "+opts.map((c,i)=>LETTERS[i]+". "+c.name).join(". "));
  }
 }else{
  if(B.q>=B.pool.length)B.pool=shuffle(B.pool);
  t=B.pool[B.q%B.pool.length];
  opts=shuffle([t,...shuffle(FLAGS.filter(f=>f.code!==t.code&&f.tier<=2)).slice(0,3)]);
  $("bonusQ").textContent="Quick! Which flag is this?";
  $("bonusChoices").innerHTML=opts.map((c,i)=>`<button class="choice" data-c="${c.code}"><span class="k">${LETTERS[i]}</span><span>${c.name}</span></button>`).join("");
 }
 B.target=t;const bi=$("bonusImg");bi.src=flagSrc(t.code);bi.dataset.flag=t.code;bi.style.objectFit=t.code.startsWith("s_")?"contain":"cover";bi.style.background=t.code.startsWith("s_")?"#1E3350":"";
 $("bonusChoices").querySelectorAll(".choice").forEach(b=>b.onclick=()=>bonusAnswer(b.dataset.c));
}
function bonusLoop(ts){
 if(!B||!B.active)return;const dt=B.lastTs?Math.min(.1,(ts-B.lastTs)/1000):0;B.lastTs=ts;
 if(!B.locked&&!B.userPaused){
  if(B.type==="capital"||B.type==="states"){B.qTime-=dt;$("bonusFill").style.transform=`scaleX(${Math.max(0,B.qTime/B.per)})`;$("bonusTxt").textContent=`Question ${B.q+1} of ${B.qs.length} · ${Math.ceil(Math.max(0,B.qTime))}s`;if(B.qTime<=0)bonusAnswer(null)}
  else{B.timeLeft-=dt;$("bonusFill").style.transform=`scaleX(${Math.max(0,B.timeLeft/B.total)})`;$("bonusTxt").textContent=fmt(B.timeLeft);if(B.timeLeft<=0){endBonus();return}}
 }
 requestAnimationFrame(bonusLoop);
}
function bonusAnswer(code){
 if(B.locked||B.userPaused)return;B.locked=true;const t=B.target;const ok=code===t.code;
 $("bonusChoices").querySelectorAll(".choice").forEach(b=>{b.disabled=true;if(b.dataset.c===t.code)b.classList.add("correct");else if(b.dataset.c===code)b.classList.add("wrong");else b.classList.add("dim")});
 const gain=ok?(B.type==="capital"?3:B.type==="states"?2:1):0;B.score+=gain;$("bonusScore").textContent=B.score;
 if(ok){sfx.correct();if(!collection.has(t.code)){collection.add(t.code);store.set("collection",[...collection])}}else if(code===null)sfx.pass();else sfx.wrong();
 $("bonusToastBig").className="big "+(ok?"good":code===null?"pass":"bad");$("bonusToastBig").textContent=ok?`+${gain}!`:(code===null?"Skipped":"Not this time");
 if(B.type==="capital"){$("bonusToastWho").textContent=`${t.capital} is the capital of ${t.name}`;$("bonusToastFact").textContent=CONT[t.cont]}
 else if(B.type==="states"){$("bonusToastWho").textContent=`${t.name} · Capital: ${t.capital}`;$("bonusToastFact").textContent=t.fact}
 else{$("bonusToastWho").textContent=t.name;$("bonusToastFact").textContent=`Capital: ${t.capital}`}
 $("bonusToast").classList.add("on");B.q++;
 setTimeout(()=>{if(!B||!B.active)return;if(B.userPaused){B.pendingNext=true;return}bonusNext()},B.type==="lightning"?600:(B.type==="states"?1900:1500));
}
$("btnBonusPass").onclick=()=>{if(B&&!B.locked)bonusAnswer(null)};
function endBonus(){
 if(!B||!B.active)return;B.active=false;B.res.bonus=B.score;B.res.score+=B.score;
 $("bonusToastBig").className="big good";$("bonusToastBig").textContent=`Bonus: +${B.score}`;$("bonusToastWho").textContent="Nice work!";$("bonusToastFact").textContent="";
 $("bonusToast").classList.add("on");$("btnBonusPass").hidden=true;sfx.fanfare();
 setTimeout(afterPlayer,1500);
}

/* ---------- RESULTS ---------- */
function showResults(){
 const L=LEVELS[S.settings.level];const hof=store.get("hof",[]);const today=new Date().toISOString().slice(0,10);
 S.results.forEach(r=>hof.push({n:playerName(r.player),a:S.players[r.player].avatar,s:r.score,l:S.settings.level,ln:L.emoji+" "+L.name,m:S.settings.minutes,d:today,mode:S.mode}));
 hof.sort((a,b)=>b.s-a.s);store.set("hof",hof.slice(0,30));
 const rank=r=>hof.findIndex(h=>h.n===playerName(r.player)&&h.s===r.score)+1;
 if(S.mode==="two"){
  const [a,b]=S.results;const tie=a.score===b.score;const w=a.score>=b.score?a:b;
  if(!tie){const wins=store.get("wins",{});const nm=playerName(w.player);wins[nm]=(wins[nm]||0)+1;store.set("wins",wins)}
  $("resTitle").textContent=tie?"🤝 It's a tie!":`🏆 ${playerName(w.player)} wins!`;
  $("resBody").innerHTML=`<div class="versus">${[a,b].map(r=>`<div class="pl ${!tie&&r===w?"win":""}"><span class="crown">👑</span>${avatarHTML(S.players[r.player].avatar,"xl")}<div class="nm">${playerName(r.player)}</div><div class="sc">${r.score}</div><div class="muted" style="font-weight:800;font-size:.85rem">${r.correct} right${r.bonus?` · +${r.bonus} bonus`:""}</div></div>`).join('<div class="vs">VS</div>')}</div>`;
  $("resRankLabel").textContent=`Leaderboard: ${playerName(a.player)} #${rank(a)} · ${playerName(b.player)} #${rank(b)} · ${L.emoji} ${L.name}`;
 }else{
  const r=S.results[0];const rk=rank(r);
  $("resTitle").textContent=rk===1?"🥇 New high score!":"🎉 Great round!";
  $("resBody").innerHTML=`<div class="pl win"><span class="crown">${rk===1?"👑":rk<=3?"🏅":"⭐"}</span>${avatarHTML(S.players[r.player].avatar,"xl")}<div class="nm">${playerName(r.player)}</div><div class="sc">${r.score}</div><div class="muted" style="font-weight:800">${r.correct} right · ${r.wrong} wrong · ${r.passed} passed${r.bonus?` · +${r.bonus} bonus`:""}</div></div>`;
  $("resRankLabel").textContent=`Leaderboard rank #${rk} · ${L.emoji} ${L.name} · ${fmt(S.settings.minutes*60)}`;
 }
 let unlockHTML="";
 if(S.unlocked<AVATARS.length){const a=AVATARS[S.unlocked];S.unlocked++;store.set("unlocked",S.unlocked);
  unlockHTML=`<div class="unlock pop">${avatarHTML({type:"hist",id:a.id},"sm")}<div><b>🎉 New Legend unlocked: ${a.name}!</b><p>${a.bio}</p></div></div>`}
 else unlockHTML=`<div class="unlock"><span style="font-size:2rem">🏅</span><div><b>All ${AVATARS.length} World Legends unlocked!</b><p>You've met every Legend. Legendary.</p></div></div>`;
 $("resUnlock").innerHTML=unlockHTML;
 showScreen("s-results");sfx.fanfare();confetti();
}
function confetti(){
 if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
 const box=$("confetti");box.innerHTML="";const cols=["#FF5E5B","#FFD23F","#2BB673","#2D7DD2","#7B5CFF","#FF8C42"];
 for(let i=0;i<80;i++){const e=document.createElement("i");e.style.left=Math.random()*100+"%";e.style.background=cols[i%cols.length];e.style.animationDuration=(2+Math.random()*2)+"s";e.style.animationDelay=Math.random()*1.2+"s";e.style.transform=`rotate(${Math.random()*360}deg)`;box.appendChild(e)}
 setTimeout(()=>box.innerHTML="",5000);
}
$("btnRematch").onclick=()=>{sfx.tap();if(S.mode==="online"){renderHome();showScreen("s-home");flash("Create or join a new room for a rematch");return}$("btnStart").click()};
$("btnHome").onclick=()=>{renderHome();showScreen("s-home")};

/* ---------- LEADERBOARD ---------- */
function renderHof(){
 const hof=store.get("hof",[]);const tb=$("hofTable").querySelector("tbody");
 tb.innerHTML=hof.slice(0,10).map((h,i)=>`<tr><td class="rank">${i===0?"🥇":i===1?"🥈":i===2?"🥉":i+1}</td><td>${avatarHTML(h.a)}</td><td>${esc(h.n)}<div class="muted" style="font-size:.75rem">${h.d}${h.mode==="solo"?" · solo":""}</div></td><td class="rank">${h.s}</td><td>${h.ln||LEGACY_LEVELS[h.l]||""}</td><td>${fmt(h.m*60)}</td></tr>`).join("");
 $("hofEmpty").hidden=hof.length>0;
 const wins=store.get("wins",{});const ws=Object.entries(wins).sort((a,b)=>b[1]-a[1]);
 const bz=store.get("blitz",null);
 $("trophies").innerHTML=(ws.length?ws.map(([n,c])=>`<span class="trophy">🏆 ${esc(n)} · ${c} win${c>1?"s":""}</span>`).join(""):`<span class="muted" style="font-weight:800">No two-player wins yet.</span>`)+(bz?`<span class="trophy">⚡ Blitz record: ${bz.right}/${bz.total} in ${bz.secs}s (${bz.ln||(LEGACY_LEVELS[bz.level]||"").replace(/^\S+ /,"")})</span>`:"");
}
$("btnHofClear").onclick=()=>askConfirm("Clear the leaderboard?","All saved scores, the trophy case and the Blitz record will be erased.","Clear it","Keep them",()=>{store.set("hof",[]);store.set("wins",{});store.set("blitz",null);renderHof();flash("Leaderboard cleared")});

/* ---------- COLLECTION + FLAG LAB ---------- */
let bookCont="ALL";
function renderBook(){
 const conts=["ALL",...Object.keys(CONT),"HIST"];
 $("contChips").innerHTML=conts.map(c=>`<button class="chip ${c===bookCont?"on":""}" data-c="${c}">${c==="ALL"?"🌍 All":c==="HIST"?"🏛️ Historical":CONT[c]}</button>`).join("");
 $("contChips").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{bookCont=b.dataset.c;renderBook()});
 const list=(bookCont==="HIST"?HFLAGS:FLAGS.filter(f=>bookCont==="ALL"||f.cont===bookCont)).slice().sort((a,b)=>a.name.localeCompare(b.name));
 const total=FLAGS.length+HFLAGS.length;const have=[...collection].filter(c=>BY[c]&&!c.startsWith("s_")).length;
 $("passportTxt").textContent=`${have} of ${total} flags (${FLAGS.length} countries + ${HFLAGS.length} historical)`;$("passportBar").style.width=(have/total*100).toFixed(1)+"%";
 $("bookgrid").innerHTML=list.map(f=>{const got=collection.has(f.code);return `<button class="bk ${got?"":"locked"}" data-c="${f.code}"><img ${flagAttr(f.code)} alt="Flag of ${f.name}" loading="lazy" ${f.hist?'style="object-fit:contain;background:#1E3350"':""}>${got?'<span class="ok">✓</span>':'<span class="lk">🔒</span>'}<div class="n">${f.name}</div><div class="c">${got?f.capital+" · ":""}${whereTxt(f)}</div><div class="f">${got?f.fact:"Guess this flag correctly in a game to unlock its facts."}</div></button>`}).join("");
 $("bookgrid").querySelectorAll(".bk").forEach(b=>b.onclick=()=>{b.classList.toggle("open");const f=BY[b.dataset.c];if(b.classList.contains("open")&&collection.has(f.code))speak(`${f.name}. Capital: ${f.capital}. ${f.fact}`)});
 renderLab();
}
let labT=null,labDir=1;
function renderLab(){
 const all=FLAGS.concat(HFLAGS).slice().sort((a,b)=>a.name.localeCompare(b.name));
 const opts=all.map(f=>`<option value="${f.code}">${f.name}</option>`).join("");
 const a=$("labA"),b=$("labB");if(!a.options.length){a.innerHTML=opts;b.innerHTML=opts;a.value="it";b.value="ie";
  a.onchange=b.onchange=labUpdate;$("labRange").oninput=labUpdate;$("labPlay").onclick=()=>{if(labT)labStop();else labStart()}}
 labUpdate();
}
function labUpdate(){
 const a=BY[$("labA").value],b=BY[$("labB").value],p=+$("labRange").value/100;
 const ia=$("labImgA"),ib=$("labImgB");ia.src=flagSrc(a.code);ia.dataset.flag=a.code;ib.src=flagSrc(b.code);ib.dataset.flag=b.code;
 const melt=Math.sin(p*Math.PI);ia.style.objectFit=ib.style.objectFit=(a.hist||b.hist)?"contain":"cover";
 ib.style.opacity=p;ib.style.filter=`blur(${(melt*3).toFixed(1)}px) saturate(${1+melt*.6})`;ia.style.filter=`blur(${(melt*3).toFixed(1)}px) hue-rotate(${(melt*25).toFixed(0)}deg)`;
 ia.style.transform=ib.style.transform=`scale(${1+melt*.08}) rotate(${(melt*3).toFixed(1)}deg)`;
 $("labTxt").textContent=p<.5?`${Math.round((1-p)*100)}% ${a.name} · ${Math.round(p*100)}% ${b.name}`:`${Math.round(p*100)}% ${b.name} · ${Math.round((1-p)*100)}% ${a.name}`;
}
function labStart(){$("labPlay").textContent="⏸ Stop";labT=setInterval(()=>{const r=$("labRange");let v=+r.value+labDir*2;if(v>=100){v=100;labDir=-1}if(v<=0){v=0;labDir=1}r.value=v;labUpdate()},50)}
function labStop(){clearInterval(labT);labT=null;$("labPlay").textContent="▶ Auto-morph"}

/* ---------- ONLINE DUEL (Supabase Realtime presence; public key by design) ---------- */
const SUPA_URL="https://whijwxutskcdpytdwkfj.supabase.co";
const SUPA_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoaWp3eHV0c2tjZHB5dGR3a2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwODg5MzEsImV4cCI6MjA5MDY2NDkzMX0.Q3GvJkWUwHLGqG1aEyExovSM7a4oVQvJiGlfxbZvlps";
const ONLINE_OK=/^https?:$/.test(location.protocol)&&!/claude\.ai$/.test(location.hostname);
const makeCfg=()=>({minutes:S.settings.minutes,level:S.settings.level,style:S.settings.style,cont:S.settings.cont,flagset:S.settings.flagset,spotSize:S.settings.spotSize});
function cfgSummary(c){if(!c)return "Waiting for the host…";const L=LEVELS[Math.min(LEVELS.length-1,c.level|0)];const spot=(c.style==="spotlight"||c.style==="mix")?` (${{s:"tiny",m:"medium",l:"big"}[c.spotSize]||"medium"} spotlight)`:"";
 return `⏱ ${fmt(c.minutes*60)}  ·  ${L.emoji} ${L.name}  ·  ${(STYLES[c.style]||STYLES.classic).name}${spot}  ·  ${(CONT_GROUPS[c.cont]||CONT_GROUPS.ALL).name.replace("🌍 ","")} continents  ·  ${{modern:"Country flags",both:"Countries + historical",hist:"Historical flags only"}[c.flagset]||"Country flags"}`}
let NET=null,SB=null,INBOX=null,lastChallenge="";
let DID=store.get("did",null);if(!DID){DID=Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,8);store.set("did",DID)}
async function getSB(){await loadSupabase();if(!SB)SB=window.supabase.createClient(SUPA_URL,SUPA_KEY);return SB}
const CODE_CHARS="BCDFGHJKLMNPQRSTVWXZ23456789";
const makeCode=()=>Array.from({length:4},()=>CODE_CHARS[Math.floor(Math.random()*CODE_CHARS.length)]).join("");
function loadSupabase(){return new Promise((res,rej)=>{if(window.supabase)return res();const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.116.0/dist/umd/supabase.js";s.onload=()=>res();s.onerror=()=>rej(new Error("load"));document.head.appendChild(s)})}
function myMeta(){const p=S.players[0];return {id:NET.id,did:DID,name:playerName(0),av:p.avatar.type==="hist"?p.avatar.id:null,host:NET.host,started:NET.started,seed:NET.seed,cfg:NET.cfg,score:R?R.score:0,correct:R?R.correct:0,wrong:R?R.wrong:0,n:R?R.seen.length:0,done:NET.done,ts:Date.now()}}
async function netJoin(code,host,calling){
 $("onlineStatus").textContent="Connecting…";
 try{await getSB()}catch(e){$("onlineStatus").textContent="Couldn't load the online part. Check the Wi-Fi and try again.";return}
 if(NET)netLeave(true);
 const id=Math.random().toString(36).slice(2,10);
 NET={id,code,host,started:false,seed:null,cfg:host?makeCfg():null,done:false,opp:null,lastOpp:null,hadOpp:false,oppLeft:false,oppDone:false,sb:SB,ch:null,calling:calling||null,callCh:null,callT:null};
 NET.ch=NET.sb.channel("ff-"+code,{config:{presence:{key:id}}});
 NET.ch.on("presence",{event:"sync"},netOnSync);
 NET.ch.subscribe(async status=>{
  if(!NET)return;
  if(status==="SUBSCRIBED"){await netTrack();showLobby()}
  else if(status==="CHANNEL_ERROR"||status==="TIMED_OUT"){$("onlineStatus").textContent="Connection problem. Check the Wi-Fi and try again.";$("lobbyStatus").textContent="Connection lost. Leave the room and try again."}
 });
}
async function netTrack(){if(!NET||!NET.ch)return;try{await NET.ch.track(myMeta())}catch(e){}}
const netSync=()=>{if(NET&&NET.started)netTrack()};
function netOpp(){if(!NET||!NET.ch)return null;const st=NET.ch.presenceState();for(const k in st){if(k===NET.id)continue;const m=st[k][0];if(m)return m}return null}
function netOnSync(){
 if(!NET)return;const opp=netOpp();NET.opp=opp;if(opp){NET.hadOpp=true;NET.lastOpp=opp;if(opp.done)NET.oppDone=true}else if(NET.hadOpp&&NET.started)NET.oppLeft=true;
 renderLobby();renderOppHud();
 if(!NET.started&&!NET.host&&opp&&opp.host&&opp.started&&opp.seed!=null){NET.started=true;NET.seed=opp.seed;NET.cfg=opp.cfg;Object.assign(S.settings,opp.cfg||{});renderHome();netStartRound()}
 if(NET.done)netCheckResults();
}
function avatarFor(m){return m&&m.av&&AVATARS.find(a=>a.id===m.av)?{type:"hist",id:m.av}:{type:"hist",id:"amelia"}}
function showLobby(){$("lobbyCode").textContent=NET.code;$("btnLobbyStart").hidden=!NET.host;$("lobbyHint").textContent=NET.calling?`Calling ${NET.calling.name}… They need Flag Frenzy open on their screen. Or just tell them the code.`:(NET.host?"Tell your opponent this code. They tap Online Duel → Join a room.":"You're in! Waiting for the host to start.");renderLobby();showScreen("s-lobby")}
function renderLobby(){
 if(!NET||NET.started)return;const opp=NET.opp;
 const me=`<div class="lobbyp">${avatarHTML(S.players[0].avatar)}<span>${esc(playerName(0))} (you)</span></div>`;
 const other=opp?`<div class="lobbyp">${avatarHTML(avatarFor(opp))}<span>${esc(opp.name||"Opponent")}</span></div>`:`<div class="lobbyp empty">${avatarHTML({type:"hist",id:"amelia"},"locked")}<span>Waiting…</span></div>`;
 $("lobbyPlayers").innerHTML=me+'<div class="vs" style="align-self:center">VS</div>'+other;
 $("btnLobbyStart").disabled=!opp;
 const hostCfg=NET.host?NET.cfg:(opp&&opp.host?opp.cfg:null);$("lobbyCfg").textContent=cfgSummary(hostCfg);$("lobbyCfgNote").textContent=NET.host?"To change these, leave the room, adjust the settings, and create a new room.":"These come from the host's tablet. Your own settings are not used in this duel.";
 const fb=$("btnSaveFriend"),canF=!!(opp&&opp.did&&!S.friends.some(f=>f.did===opp.did));fb.hidden=!canF;if(canF){fb.textContent=`⭐ Save ${opp.name||"them"} as a friend`;fb.onclick=()=>{saveFriend(opp);renderLobby()}}
 $("lobbyStatus").textContent=opp?(NET.host?"Both players are here. Hit Start!":"Waiting for the host to start…"):(NET.host?"Waiting for your opponent to join…":"Nobody else is here yet. Double-check the code.");
}
$("btnLobbyStart").onclick=async()=>{if(!NET||!NET.host||!NET.opp)return;NET.seed=Math.floor(Math.random()*2147483647);NET.cfg=makeCfg();NET.started=true;await netTrack();netStartRound()};
$("btnLobbyLeave").onclick=()=>{netLeave(true);renderHome();showScreen("s-home")};
function netStartRound(){S.mode="online";S.order=[0];S.cur=0;S.results=[];sfx.tap();startRound()}
function netLeave(){if(!NET)return;try{clearInterval(NET.callT);if(NET.callCh)NET.sb.removeChannel(NET.callCh);NET.ch.untrack();NET.sb.removeChannel(NET.ch)}catch(e){}NET=null;$("oppHud").hidden=true}
function renderOppHud(){
 if(!NET||!NET.started){$("oppHud").hidden=true;return}
 const o=NET.opp||NET.lastOpp;$("oppHud").hidden=false;
 if(!o){$("oppAvatar").innerHTML=avatarHTML({type:"hist",id:"amelia"},"locked");$("oppName").textContent="Opponent";$("oppInfo").textContent="connecting…";$("oppScore").textContent="–";return}
 $("oppAvatar").innerHTML=avatarHTML(avatarFor(o));$("oppName").textContent=o.name||"Opponent";
 $("oppInfo").textContent=NET.oppLeft&&!NET.opp?"left the game":(o.done?"finished ✓":`${o.n||0} flags · ${o.correct||0} right`);$("oppScore").textContent=o.score||0;
}
function netCheckResults(){
 if(!NET||!NET.done||!document.getElementById("s-summary").classList.contains("on"))return;
 if(NET.oppDone||NET.oppLeft||!NET.hadOpp){$("btnSumNext").disabled=false;$("btnSumNext").textContent="See results ➜"}
 else{$("btnSumNext").disabled=true;$("btnSumNext").textContent="⏳ Waiting for opponent to finish…"}
}
function showResultsOnline(){
 const opp=(NET&&(NET.opp||NET.lastOpp))||{name:"Opponent",score:0,correct:0,wrong:0};
 S.players[1]={name:opp.name||"Opponent",avatar:avatarFor(opp)};
 S.results=[S.results[0],{player:1,score:opp.score||0,correct:opp.correct||0,wrong:opp.wrong||0,passed:0,bonus:0}];
 const keep=S.mode;S.mode="two";showResults();S.mode=keep;
 $("resRankLabel").textContent="🌐 Online duel · "+$("resRankLabel").textContent;
 if(opp.did&&!S.friends.some(f=>f.did===opp.did)){const b=document.createElement("button");b.className="btn sm sun";b.style.marginTop="12px";b.textContent=`⭐ Save ${opp.name||"them"} as a friend`;b.onclick=()=>{saveFriend(opp);b.remove()};$("resUnlock").appendChild(b)}
 netLeave();
}
$("btnCreateRoom").onclick=()=>{document.querySelectorAll("#players input").forEach((inp,i)=>S.players[i].name=inp.value);saveProfile(0,false);savePlayers();sfx.tap();netJoin(makeCode(),true)};
$("btnJoinRoom").onclick=()=>{const c=$("joinCode").value.trim().toUpperCase();if(c.length!==4){flash("Type the 4-letter code first");return}document.querySelectorAll("#players input").forEach((inp,i)=>S.players[i].name=inp.value);saveProfile(0,false);savePlayers();sfx.tap();netJoin(c,false)};
/* friends: saved opponents you can challenge without a code. Only saved friends can ping you. */
function saveFriend(m){if(!m||!m.did||m.did===DID)return;const rec={did:m.did,name:String(m.name||"Friend").slice(0,16),av:m.av||null};const j=S.friends.findIndex(f=>f.did===m.did);if(j>=0)S.friends[j]=rec;else S.friends.push(rec);if(S.friends.length>12)S.friends.shift();store.set("friends",S.friends);flash(`⭐ ${rec.name} saved as a friend`);sfx.correct();renderFriends();inboxInit()}
function renderFriends(){const row=$("friendsRow");row.hidden=!S.friends.length;
 $("friendChips").innerHTML=S.friends.map(f=>`<span class="fchip"><button class="chip" data-ch="${esc(f.did)}">⚔️ ${esc(f.name)}</button><button class="fx" data-rm="${esc(f.did)}" aria-label="Remove ${esc(f.name)}">✕</button></span>`).join("");
 $("friendChips").querySelectorAll("[data-ch]").forEach(b=>b.onclick=()=>challengeFriend(S.friends.find(f=>f.did===b.dataset.ch)));
 $("friendChips").querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{const f=S.friends.find(x=>x.did===b.dataset.rm);if(!f)return;askConfirm(`Remove ${f.name}?`,"They won't be able to send you challenges any more.","Remove","Keep",()=>{S.friends=S.friends.filter(x=>x.did!==f.did);store.set("friends",S.friends);renderFriends()})})}
async function inboxInit(){if(!ONLINE_OK||INBOX||!S.friends.length)return;try{await getSB()}catch(e){return}
 INBOX=SB.channel("ff-inbox-"+DID);INBOX.on("broadcast",{event:"challenge"},m=>onChallenge((m&&m.payload)||{}));INBOX.subscribe()}
function onChallenge(p){const f=S.friends.find(x=>x.did===p.fromDid);if(!f||!/^[A-Z0-9]{4}$/.test(p.code||"")||p.code===lastChallenge)return;
 if((R&&R.active)||(B&&B.active)||NET||$("confirmModal").classList.contains("on"))return;lastChallenge=p.code;sfx.streak();
 askConfirm(`🌐 ${f.name} wants a duel!`,"Same flags, same time, on both screens.","Accept ⚔️","Not now",()=>{S.mode="online";store.set("mode","online");renderHome();netJoin(p.code,false)})}
async function challengeFriend(f){if(!f)return;document.querySelectorAll("#players input").forEach((inp,i)=>S.players[i].name=inp.value);saveProfile(0,false);savePlayers();sfx.tap();
 const code=makeCode();await netJoin(code,true,f);if(!NET||NET.code!==code)return;
 const ch=SB.channel("ff-inbox-"+f.did);NET.callCh=ch;let tries=0;
 ch.subscribe(st=>{if(st!=="SUBSCRIBED"||!NET||NET.code!==code)return;
  const ping=()=>{if(!NET||NET.code!==code||NET.opp||NET.started||tries++>45){clearInterval(NET&&NET.callT);return}ch.send({type:"broadcast",event:"challenge",payload:{fromDid:DID,fromName:playerName(0),code}})};
  ping();NET.callT=setInterval(ping,2000)})}
$("joinCode").addEventListener("keydown",e=>{if(e.key==="Enter")$("btnJoinRoom").click()});

/* ---------- BOOT ---------- */
function boot(hot){
 Object.assign(S.settings,store.get("settings",{}));
 S.mode=store.get("mode",S.mode);
 S.custom=store.get("custom",[]);S.profiles=store.get("profiles",[]);S.friends=store.get("friends",[]);
 S.unlocked=Math.min(AVATARS.length,Math.max(STARTER_LEGENDS,store.get("unlocked",STARTER_LEGENDS)|0));
 const ps=store.get("players",null);if(ps&&ps.length===2)S.players=ps.map(p=>({name:p.name||"",avatar:p.avatar}));
 if(hot&&hot.settings){Object.assign(S.settings,hot.settings);if(hot.mode)S.mode=hot.mode;if(hot.players)S.players=hot.players}
 S.settings.level=Math.min(LEVELS.length-1,Math.max(0,S.settings.level|0));
 if(S.settings.hist===true&&!store.get("settings",{}).flagset)S.settings.flagset="both";delete S.settings.hist;
 if(!FLAGSETS[S.settings.flagset])S.settings.flagset="modern";if(!SPOT_R[S.settings.spotSize])S.settings.spotSize="m";
 if(!STYLES[S.settings.style])S.settings.style="classic";if(!CONT_GROUPS[S.settings.cont])S.settings.cont="ALL";if(!BONUS[S.settings.bonus])S.settings.bonus="capital";
 if(![10,20,30,50].includes(S.settings.blitzCount))S.settings.blitzCount=20;if(!["two","solo","practice","blitz","online"].includes(S.mode))S.mode="two";
 if(!ONLINE_OK){$("modeOnline").hidden=true;if(S.mode==="online")S.mode="two"}
 S.players.forEach(p=>{if(!p.avatar||(p.avatar.type==="hist"&&AVATARS.findIndex(a=>a.id===p.avatar.id)>=S.unlocked))p.avatar={type:"hist",id:AVATARS[0].id}});
 renderHome();showScreen("s-home");inboxInit();
}
try{window.claude?.hot?.snapshot?.(()=>({settings:S.settings,mode:S.mode,players:S.players}))}catch(e){}
if(window.claude?.hot?.ready){window.claude.hot.ready(boot)}else{boot(window.claude?.hot?.data??{})}
</script>
