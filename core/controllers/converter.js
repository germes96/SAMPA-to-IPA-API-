const asyncHandler = require('../Utils/async')
const Result =require('../Utils/result')
const error =require('../../config/error')
// definisci equiv ed equiv2
//var equiv = ['ɛ', 'E', 'ɑ', 'A', 'ɔ', 'O', 'ø', '2', 'œ', '9', 'ɶ', '&', 'ɒ', 'Q', 'ʌ', 'V', 'ɤ', '7', 'ɯ', 'M', 'ɪ', 'I', 'ʏ', 'Y', 'æ', '{', 'ʊ', 'U', 'ɨ', '1', 'ʉ', '}', 'ɘ', '@\\', 'ɵ', '8', 'ə', '@', 'ɜ', '3', 'ɞ', '3\\', 'ɐ', '6', '̪', '_d', '̠', '_-', 'ʈ', 't`', 'ɖ', 'd`', 'ɟ', 'j\\', 'g', 'g', 'ɢ', 'G\\', 'ʔ', '?', '̥', '_0', 'ɱ', 'F', 'ɳ', 'n`', 'ɲ', 'J', 'ŋ', 'N', 'ɴ', 'N\\', 'ʙ', 'B\\', 'ʁ', 'R\\', 'ʀ', 'R', 'ɾ', '4', 'ɽ', 'r`', 'ɸ', 'p\\', 'β', 'B', 'θ', 'T', 'ð', 'D', 'ʃ', 'S', 'ʒ', 'Z', 'ʂ', 's`', 'ʐ', 's`', 'ç', 'C', 'ʝ', 'j\\', 'ɣ', 'G', 'χ', 'X', 'ħ', 'X\\', 'ʕ', '?\\', 'ɦ', 'h\\', 'ɬ', 'K', 'ɮ', 'K\\', '̞', '_o', 'ɹ', 'r\\', 'ɻ', 'r\\`', 'ɰ', 'M\\', 'ɭ', 'l`', 'λ', 'L', 'ʟ', 'L\\', 'ʘ', 'O\\', 'ǀ', '|\\', 'ǃ', '!\\', 'ǂ', '=\\', 'ɓ', 'b_<', 'ɗ', 'd_<', 'ʄ', 'j\_<', 'ɠ', 'g_<', 'ʛ', 'G\_<', 'ʼ', '_>', 'ʍ', 'W', 'ɥ', 'H', 'ʢ', '<\\', 'ɕ', 's\\', 'ɺ', 'l\\', 'ʜ', 'H\\', 'ʡ', '>\\', 'ʑ', 'z\\', 'ɧ', 'x\\', 'ː', ':', 'ˑ', ':\\', 'ˑ', '.', '̩', '_=', '̩', '=', '̃', '~', '̃', '_~', 'ˈ', '"', 'ˌ', '%', ' ̈', '_"', '̟', '_+', '̠', '_-', 'ˇ', '_/', '̥', '_0', 'ˤ', '_?\\', 'ˆ', '_\\', '̯', '_^', '̚', '_}', '̘', '_A', '̺', '_a', '᷅', '_B_L', '̏', '_B', '̜', '_c', '̪', '_d', '̴', '_e', '̂', '_F', 'ˠ', '_G', '᷄', '_H_T', '́', '_H', 'ʲ', '_j', '̰', '_k', '̀', '_L', 'ˡ', '_l', '̄', '_M', '̻', '_m', '̼', '_N', 'ʰ', '_h', 'ⁿ', '_n', '̹', '_O', '̞', '_o', '̙', '_q', '᷈', '_R_F', '̌', '_R', '̝', '_r', '̋', '_T', '̤', '_t', '̬', '_v', 'ʷ', '_w', '̆', '_X', '̽', '_x'];
var equiv = ['ɓ', 'b_<', 'ɗ', 'd_<', 'ʄ', 'j\_<', 'ɠ', 'g_<', 'ʛ', 'G\_<', 'ˤ', '_?\\', '᷅', '_B_L', '᷄', '_H_T', '᷈', '_R_F', 'ɘ', '@\\', 'ɞ', '3\\', 'ɟ', 'j\\', 'ɢ', 'G\\', 'ɴ', 'N\\', 'ʙ', 'B\\', 'ʁ', 'R\\', 'ɸ', 'p\\', 'ʝ', 'j\\', 'ħ', 'X\\', 'ʕ', '?\\', 'ɦ', 'h\\', 'ɮ', 'K\\', 'ɹ', 'r\\', 'ɻ', 'r\\`', 'ɰ', 'M\\', 'ʟ', 'L\\', 'ʘ', 'O\\', 'ǀ', '|\\', 'ǃ', '!\\', 'ǂ', '=\\', 'ʢ', '<\\', 'ɕ', 's\\', 'ɺ', 'l\\', 'ʜ', 'H\\', 'ʡ', '>\\', 'ʑ', 'z\\', 'ɧ', 'x\\', 'ˑ', ':\\', 'ˆ', '_\\', '̪', '_d', '̠', '_-', 'ʈ', 't`', 'ɖ', 'd`', '̥', '_0', 'ɳ', 'n`', 'ɽ', 'r`', 'ʂ', 's`', 'ʐ', 's`', '̞', '_o', 'ɭ', 'l`', 'ʼ', '_>', '̩', '_=', '̃', '_~', ' ̈', '_"', '̟', '_+', '̠', '_-', 'ˇ', '_/', '̥', '_0', '̯', '_^', '̚', '_}', '̘', '_A', '̺', '_a', '̏', '_B', '̜', '_c', '̪', '_d', '̴', '_e', '̂', '_F', 'ˠ', '_G', '́', '_H', 'ʲ', '_j', '̰', '_k', '̀', '_L', 'ˡ', '_l', '̄', '_M', '̻', '_m', '̼', '_N', 'ʰ', '_h', 'ⁿ', '_n', '̹', '_O', '̞', '_o', '̙', '_q', '̌', '_R', '̝', '_r', '̋', '_T', '̤', '_t', '̬', '_v', 'ʷ', '_w', '̆', '_X', '̽', '_x', 'ɛ', 'E', 'ɑ', 'A', 'ɔ', 'O', 'ø', '2', 'œ', '9', 'ɶ', '&', 'ɒ', 'Q', 'ʌ', 'V', 'ɤ', '7', 'ɯ', 'M', 'ɪ', 'I', 'ʏ', 'Y', 'æ', '{', 'ʊ', 'U', 'ɨ', '1', 'ʉ', '}', 'ɵ', '8', 'ə', '@', 'ɜ', '3', 'ɐ', '6', 'g', 'g', 'ʔ', '?', 'ɱ', 'F', 'ɲ', 'J', 'ŋ', 'N', 'ʀ', 'R', 'ɾ', '4', 'ɫ', '5', 'β', 'B', 'θ', 'T', 'ð', 'D', 'ʃ', 'S', 'ʒ', 'Z', 'ç', 'C', 'ɣ', 'G', 'χ', 'X', 'ɬ', 'K', 'λ', 'L', 'ʍ', 'W', 'ɥ', 'H', 'ː', ':', 'ˑ', '.', '̩', '=', '̃', '~', 'ˈ', '"', 'ˌ', '%'];
var equiv2 = new Array();
for (var i=0; i<equiv.length; i++) {
	equiv2[i] = equiv[i].replace(/\\/g, '\\\\'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\?/g, '\\?'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\|/g, '\\|'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\+/g, '\\+'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\-/g, '\\-'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\{/g, '\\{'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\}/g, '\\}'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\=/g, '\\='); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\</g, '\\<'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\>/g, '\\>'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\./g, '\\.'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\,/g, '\\,'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\:/g, '\\:'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\;/g, '\\;'); // evita potenziali errori creati dai simboli SAMPA
	equiv2[i] = equiv2[i].replace(/\^/g, '\\^'); // evita potenziali errori creati dai simboli SAMPA
}

// var t1 = document.getElementById('t1');
// var t2 = document.getElementById('t2');

module.exports = {
    ipatosampa: asyncHandler(async (req, res, next)=>{
        let {text} =  req.query
        if(text == undefined) {
            Result.sendObject(res, 401, false, {})
            return;
        }
        var reg = '';
        for (var i=0; i<equiv.length; i=i+2) {
			reg = new RegExp (equiv[i], 'g');
			text = text.replace(reg, equiv[i+1]);
		}
        Result.sendObject(res, 200, true, text)
    }),

    sampatoipa: asyncHandler(async (req, res, next)=>{
        let {text} =  req.query
        if(text == undefined) {
            Result.sendObject(res, 401, false, {})
            return;
        }
        var reg = '';
        for (var i=1; i<=equiv2.length; i=i+2) {
			reg = new RegExp (equiv2[i], 'g');
			text = text.replace(reg, equiv2[i-1]);
		}
        Result.sendObject(res, 200, true, text)
    }),
}
