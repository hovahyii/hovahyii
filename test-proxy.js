const { createClient } = require("@supabase/supabase-js");

const url = "";
const key = "";

let _supabase;
const supabase = new Proxy({}, {
  get: (target, prop) => {
    if (!_supabase) _supabase = createClient(url, key);
    return _supabase[prop];
  }
});

console.log("Module loaded successfully without crashing!");

try {
  console.log("Accessing supabase.from...");
  supabase.from("test");
} catch (err) {
  console.log("Expected crash when actually used:", err.message);
}
