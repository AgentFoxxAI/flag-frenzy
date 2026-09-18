// Assembles index.html from the source parts. Run: node src/build.mjs
import fs from "node:fs";
import {fileURLToPath} from "node:url";
const d=fileURLToPath(new URL(".",import.meta.url));
let a=fs.readFileSync(d+"page.html","utf8");const b=fs.readFileSync(d+"game.js","utf8");
a=a.replace("__RAW__",fs.readFileSync(d+"countries.js","utf8").trim()).replace("__MAPXY__",fs.readFileSync(d+"mapxy.js","utf8").trim());
const html=a+b;fs.writeFileSync(d+"../index.html",html);
const js=html.slice(html.lastIndexOf("<script>")+8,html.lastIndexOf("</script>"));
try{new Function(js);console.log("syntax OK")}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1)}
const ids=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);const used=[...js.matchAll(/\$\("([^"]+)"\)/g)].map(m=>m[1]);
const missing=[...new Set(used)].filter(u=>!ids.includes(u));
console.log("missing ids:",missing.join(",")||"none","| dup ids:",ids.filter((x,i)=>ids.indexOf(x)!==i).join(",")||"none","| bytes:",html.length);
if(missing.length)process.exit(1);
