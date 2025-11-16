// inline.js
import fs from "fs";
import juice from "juice";

const html = fs.readFileSync("email.html", "utf8");  // your HTML with <style>...</style>
const inlined = juice(html);

fs.writeFileSync("email-inlined.html", inlined);
console.log("✅  CSS inlined → email-inlined.html");
