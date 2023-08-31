
/*
Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
*/
//const encrypt = (t, n, _t = t) => (t == "") || (t == 0) || (t == null) ? t : (n > 0) ? (_t = [], [...t].map((x, i) => i % 2 != 0 && _t.push(x)) , [...t].map((x, i) => i % 2 == 0 && _t.push(x)) , (_t = _t.join(""), encrypt(t = _t, n -= 1, _t))) : _t;
//console.log(encrypt("This is a test!", 1));

//const decrypt = (t, n, _t = t) => (t == "") || (t == 0) || (t == null) ? t : (n > 0) ? (_t = [], [...t].map((x, i) => i % 2 != 0 && _t.push(x)) , [...t].map((x, i) => i % 2 == 0 && _t.push(x)) , (_t = _t.join(""), decrypt(t = _t, n -= 1, _t))) : _t;
function decrypt (t, n) {
    var p1 = t.slice(0, t.length/2);
    var p2 =  t.slice(t.length/2, t.length);
    return [...t].map((x, i) => (i % 2 == 0) ? p2[Math.floor(i * 0.5)] : p1[Math.floor(i * 0.5)]).join("");
}
console.log(decrypt("hsi  etTi sats!", 1));