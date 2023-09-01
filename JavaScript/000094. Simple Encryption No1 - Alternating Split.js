///Task
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
///Solution
//My
const encrypt = (t, n, _t = t) => (t == "") || (t == 0) || (t == null) ? t : (n > 0) ? (_t = [], [...t].map((x, i) => (i % 2) && _t.push(x)) , [...t].map((x, i) => !(i % 2) && _t.push(x)) , _t = _t.join(""), encrypt(t = _t, n -= 1, _t)) : _t;
const decrypt = (t, n, p1 , p2) => (t == "") || (t == 0) || (t == null) ? t : (n > 0) ? (p1 = t.slice(0, t.length / 2), p2 = t.slice(t.length / 2, t.length)) && (t = ([...t].map((_, i) => !(i % 2) ? p2[Math.floor(i * 0.5)] : p1[Math.floor(i * 0.5)]).join("")), decrypt(t, n -= 1, p1, p2)) : t;
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    //Test.assertEquals(encrypt("", 1), "");
    //Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    //Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    //Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    //Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    //Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    //Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    //Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
    //Test.assertEquals(encrypt("This kata is very interesting!", 2), "stsrnenT a ytsghk v et!iaieiri");
    //Test.assertEquals(encrypt("This kata is very interesting!", 3), "treTaysh  tiiiissnn  tgkve!aer");
    //Test.assertEquals(encrypt("This kata is very interesting!", 4), "rTyh iisn tkearteas tiisn gv!e");
    //Test.assertEquals(encrypt("This kata is very interesting!", 5), "This kata is very interesting!");
    /*
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 0), "Kobayashi-Maru-Test");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 1), "oaah-auTsKbysiMr-et");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 2), "ahaTKyireoa-usbsM-t");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 3), "hTyro-ss-aaKieaubMt");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 4), "Tr-saKeuMhyos-aiabt");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 5), "rsKuho-ibT-aeMysaat");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 6), "suoiTaMsarKh-b-eyat");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 7), "uiasrhbeasoTMaK--yt");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 8), "ishesTa-yuarbaoMK-t");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 9), "seT-uraM-ihsayaboKt");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 10), "e-rMisybKsTua-haaot");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 11), "-Msbsu-aoeriyKTahat");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 12), "MbuaeiKaa-ss-oryTht");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 13), "baia-soyhMueKas-rTt");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 14), "aasyMea-Tbi-ohuKsrt");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 15), "aye-b-hKrasMaTioust");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 16), "y--KaMTosaebhrsaiut");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 17), "-KMoabrauy-aTsehsit");
    Test.assertEquals(encrypt("Kobayashi-Maru-Test", 18), "Kobayashi-Maru-Test");
  */
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    /*
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
    Test.assertEquals(decrypt("e-rMisybKsTua-haaot", 10), "Kobayashi-Maru-Test")*/
    /*
   /*
    for (var i = 0; i < 5; i++){
      try {
        Test.assertEquals(decrypt("CD", i), "DC");
        return console.log("i było równe",i,"KONIEC");
    } catch (error) {  console.log(error);
      }      
    }
    */
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});