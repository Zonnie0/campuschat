// DATA + STORAGE layer (swap Store for fetch() calls when a backend exists). Demo auth only: NOT secure.
const Store={get(k,d){try{return JSON.parse(localStorage.getItem('cc_'+k))??d}catch{return d}},set(k,v){localStorage.setItem('cc_'+k,JSON.stringify(v))}};
const C=['#6c5ce7','#00b894','#e17055','#0984e3','#d63031','#e84393','#fdcb6e','#636e72'];
const seed=()=>({users:[
{id:'student1',name:'Alex',bio:'NJROTC • Basketball • Class of 2029',role:'student',c:0},
{id:'student2',name:'Jordan',bio:'Hoops and history',role:'student',c:1},
{id:'student3',name:'Taylor',bio:'Art club',role:'student',c:2},
{id:'mike',name:'Mike',bio:'Robotics',role:'student',c:3},{id:'sam',name:'Sam',bio:'Track',role:'student',c:4},
{id:'emma',name:'Emma',bio:'Yearbook',role:'student',c:5},{id:'chris',name:'Chris',bio:'Band',role:'student',c:6},
{id:'ryan',name:'Ryan',bio:'Chess club',role:'student',c:7},
{id:'teacher1',name:'Ms. Rivera',bio:'Moderator',role:'admin',c:3}],
friends:{student1:['student2','student3','mike','sam'],student2:['student1'],student3:['student1']},
reqIn:{student1:['emma']},reqOut:{student1:[]},blocked:{},
convos:{'student1|student2':[{f:'student2',t:'did you finish the history assignment?',ts:Date.now()-3e5},{f:'student1',t:"yeah 😭 i'll send it",ts:Date.now()-2e5}],
'student1|student3':[{f:'student3',t:'yo are you going to the game?',ts:Date.now()-9e6}],'student1|mike':[{f:'mike',t:'meeting after school?',ts:Date.now()-2e7}]},
moments:[{id:1,u:'student2',t:'Game Friday! 🏀',bg:'#0984e3',ts:Date.now()-36e5},{id:2,u:'student3',t:'New mural in the art room 🎨',bg:'#e84393',ts:Date.now()-72e5},{id:3,u:'mike',t:'Robotics won! 🤖',bg:'#00b894',ts:Date.now()-1e7}],
news:[{id:1,t:'Spirit Week starts Monday',cat:'Events',d:'Dress-up themes every day.',a:'Ms. Rivera'},{id:2,t:'Basketball game Friday',cat:'Sports',d:'Home game, 7 PM.',a:'Athletics'},{id:3,t:'NJROTC meeting after school',cat:'Clubs',d:'Room 112.',a:'NJROTC'},{id:4,t:'Fall Club Fair',cat:'Clubs',d:'Meet representatives from clubs around campus Thursday.',a:'Student Council'}],
notifs:[{id:1,txt:'Jordan sent you a message',go:'messages',ts:Date.now()-3e5},{id:2,txt:'Emma sent you a friend request',go:'friends',ts:Date.now()-6e5},{id:3,txt:'Taylor reacted ❤️ to your Moment',go:'moments',ts:Date.now()-9e5}],
reports:[{id:101,target:'ryan',by:'sam',cat:'Spam',desc:'Repeated unwanted messages',ts:Date.now()-8e7,status:'Pending'}],
suspended:[],prefs:{msg:'Friends',add:'Everyone',moments:'Friends'}});
