function converti (fono) {
	switch (fono) {
		case 'occlusiva_bilabiale_sorda':
			return 'p';
		case 'occlusiva_bilabiale_sonora':
			return 'b';
		case 'occlusiva_dentale_sorda':
			return 't̪';
		case 'occlusiva_dentale_sonora':
			return 'd̪';
		case 'occlusiva_alveolare_sorda':
			return 't';
		case 'occlusiva_alveolare_sonora':
			return 'd';
		case 'occlusiva_postalveolare_sorda':
			return 't̠';
		case 'occlusiva_postalveolare_sonora':
			return 'd̠';
		case 'occlusiva_retroflessa_sorda':
			return 'ʈ';
		case 'occlusiva_retroflessa_sonora':
			return 'ɖ';
		case 'occlusiva_palatale_sorda':
			return 'c';
		case 'occlusiva_palatale_sonora':
			return 'ɟ';
		case 'occlusiva_velare_sorda':
			return 'k';
		case 'occlusiva_velare_sonora':
			return 'g';
		case 'occlusiva_uvulare_sorda':
			return 'q';
		case 'occlusiva_uvulare_sonora':
			return 'ɢ';
		case 'occlusiva_glottidale_sorda':
			return 'ʔ';
			
		case 'nasale_bilabiale_desonorizzata':
			return 'm̥';
		case 'nasale_bilabiale_sonora':
			return 'm';
		case 'nasale_labiodentale_desonorizzata':
			return 'ɱ̊';
		case 'nasale_labiodentale_sonora':
			return 'ɱ';
		case 'nasale_alveolare_desonorizzata':
			return 'n̥';
		case 'nasale_alveolare_sonora':
			return 'n';
		case 'nasale_retroflessa_desonorizzata':
			return 'ɳ̊';
		case 'nasale_retroflessa_sonora':
			return 'ɳ';
		case 'nasale_palatale_desonorizzata':
			return 'ɲ̊';
		case 'nasale_palatale_sonora':
			return 'ɲ';
		case 'nasale_velare_desonorizzata':
			return 'ŋ';
		case 'nasale_velare_sonora':
			return 'ŋ';
		case 'nasale_uvulare_desonorizzata':
			return 'ɴ̥';
		case 'nasale_uvulare_sonora':
			return 'ɴ';
			
		case 'vibrante_bilabiale_desonorizzata':
			return 'ʙ̥';
		case 'vibrante_bilabiale_sonora':
			return 'ʙ';
		case 'vibrante_alveolare_desonorizzata':
			return 'r̥';
		case 'vibrante_alveolare_sonora':
			return 'r';
		case 'vibrante_uvulare_desonorizzata':
			return 'ʀ̥';
		case 'vibrante_uvulare_sonora':
			return 'ʀ';
		case 'tap_alveolare_sonoro':
			return 'ɾ';
		case 'flap_retroflesso_sonoro':
			return 'ɽ';
			
		case 'affricata_bilabiale_sorda':
			return 'p͡ɸ';
		case 'affricata_bilabiale_sonora':
			return 'b͡β';
		case 'affricata_labiodentale_sorda':
			return 'p͡f';
		case 'affricata_labiodentale_sonora':
			return 'b͡v';
		case 'affricata_dentale_sorda':
			return 't̪͡θ';
		case 'affricata_dentale_sonora':
			return 'd̪͡ð';
		case 'affricata_alveolare_sorda':
			return 't͡s';
		case 'affricata_alveolare_sonora':
			return 'd͡z';
		case 'affricata_postalveolare_sorda':
			return 't̠͡ʃ';
		case 'affricata_postalveolare_sonora':
			return 'd̠͡ʒ';
		case 'affricata_retroflessa_sorda':
			return 'ʈ͡ʂ';
		case 'affricata_retroflessa_sonora':
			return 'ɖ͡ʐ';
		case 'affricata_palatale_sorda':
			return 'c͡ç';
		case 'affricata_palatale_sonora':
			return 'ɟ͡ʝ';
		case 'affricata_velare_sorda':
			return 'k͡x';
		case 'affricata_velare_sonora':
			return 'g͡ɣ';
		case 'affricata_uvulare_sorda':
			return 'q͡χ';
		case 'affricata_uvulare_sonora':
			return 'ɢ͡ʁ';
		case 'affricata_glottidale_sorda':
			return 'ʔ͡h';
			
		case 'fricativa_bilabiale_sorda':
			return 'ɸ';
		case 'fricativa_bilabiale_sonora':
			return 'β';
		case 'fricativa_labiodentale_sorda':
			return 'f';
		case 'fricativa_labiodentale_sonora':
			return 'v';
		case 'fricativa_dentale_sorda':
			return 'θ';
		case 'fricativa_dentale_sonora':
			return 'ð';
		case 'fricativa_alveolare_sorda':
			return 's';
		case 'fricativa_alveolare_sonora':
			return 'z';
		case 'fricativa_postalveolare_sorda':
			return 'ʃ';
		case 'fricativa_postalveolare_sonora':
			return 'ʒ';
		case 'fricativa_retroflessa_sorda':
			return 'ʂ';
		case 'fricativa_retroflessa_sonora':
			return 'ʐ';
		case 'fricativa_palatale_sorda':
			return 'ç';
		case 'fricativa_palatale_sonora':
			return 'ʝ';
		case 'fricativa_velare_sorda':
			return 'x';
		case 'fricativa_velare_sonora':
			return 'ɣ';
		case 'fricativa_uvulare_sorda':
			return 'χ';
		case 'fricativa_uvulare_sonora':
			return 'ʁ';
		case 'fricativa_faringale_sorda':
			return 'ħ';
		case 'fricativa_faringale_sonora':
			return 'ʕ';
		case 'fricativa_laringale_sorda':
			return 'h';
		case 'fricativa_laringale_sonora':
			return 'ɦ';
			
		case 'fricativa_laterale_alveolare_sorda':
			return 'ɬ';
		case 'fricativa_laterale_alveolare_sonora':
			return 'ɮ';
		
		case 'approssimante_bilabiale_sonora':
			return 'β̞';
		case 'approssimante_labiodentale_sonora':
			return 'ʋ';
		case 'approssimante_dentale_sonora':
			return 'ð̞';
		case 'approssimante_alveolare_sonora':
			return 'ɹ';
		case 'approssimante_postalveolare_sonora':
			return 'ɹ̠';
		case 'approssimante_retroflessa_sonora':
			return 'ɻ';
		case 'approssimante_palatale_sonora':
			return 'j';
		case 'approssimante_velare_sonora':
			return 'ɰ';
		case 'approssimante_uvulare_sonora':
			return 'ʁ̞';
		
		case 'approssimante_laterale_alveolare_desonorizzata':
			return 'l̥';
		case 'approssimante_laterale_alveolare_sonora':
			return 'l';
		case 'approssimante_laterale_retroflessa_desonorizzata':
			return 'ɭ̊';
		case 'approssimante_laterale_retroflessa_sonora':
			return 'ɭ';
		case 'approssimante_laterale_palatale_desonorizzata':
			return 'λ̥';
		case 'approssimante_laterale_palatale_sonora':
			return 'λ';
		case 'approssimante_laterale_velare_desonorizzata':
			return 'ʟ̥';
		case 'approssimante_laterale_velare_sonora':
			return 'ʟ';
		
		case 'avulsiva_bilabiale':
			return 'ʘ';
		case 'avulsiva_dentale':
			return 'ǀ';
		case 'avulsiva_postalveolare':
			return 'ǃ';
		case 'avulsiva_palatoalveolare':
			return 'ǂ';
		case 'avulsiva_laterale':
			return 'ǁ';
		
		case 'implosiva_bilabiale':
			return 'ɓ';
		case 'implosiva_dentale':
			return 'ɗ';
		case 'implosiva_palatale':
			return 'ʄ';
		case 'implosiva_velare':
			return 'ɠ';
		case 'implosiva_uvulare':
			return 'ʛ';
		
		case 'eiettiva_occlusiva_bilabiale':
			return 'pʼ';
		case 'eiettiva_occlusiva_alveolare':
			return 'tʼ';
		case 'eiettiva_occlusiva_palatale':
			return 'cʼ';
		case 'eiettiva_occlusiva_velare':
			return 'kʼ';
		case 'eiettiva_occlusiva_uvulare':
			return 'qʼ';
		
		case 'eiettiva_fricativa_labiodentale':
			return 'fʼ';
		case 'eiettiva_fricativa_alveolare':
			return 'sʼ';
		case 'eiettiva_fricativa_postalveolare':
			return 'ʃʼ';
		case 'eiettiva_fricativa_velare':
			return 'xʼ';
		case 'eiettiva_fricativa_uvulare':
			return 'χʼ';
		
		case 'fricativa_labiovelare_sorda':
			return 'ʍ';
		case 'approssimante_labiovelare_sonora':
			return 'w';
		case 'approssimante_labiopalatale_sonora':
			return 'ɥ';
		case 'fricativa_epiglottidale_sorda':
			return 'ʜ';
		case 'fricativa_epiglottidale_sonora':
			return 'ʢ';
		case 'occlusiva_epiglottidale':
			return 'ʡ';
		case 'fricativa_alveolopalatale_sorda':
			return 'ɕ';
		case 'fricativa_alveolopalatale_sonora':
			return 'ʑ';
		case 'flap_laterale_alveolare_sonoro':
			return 'ɺ';
		case 'sh_e_x_simultanee':
			return 'ɧ';
		
		case 'vocale_anteriore_alta_non_labializzata':
			return 'i';
		case 'vocale_anteriore_alta_labializzata':
			return 'y';
		case 'vocale_centrale_alta_non_labializzata':
			return 'ɨ';
		case 'vocale_centrale_alta_labializzata':
			return 'ʉ';
		case 'vocale_posteriore_alta_non_labializzata':
			return 'ɯ';
		case 'vocale_posteriore_alta_labializzata':
			return 'u';
		case 'vocale_anteriore_alta_non_labializzata_rilassata':
			return 'ɪ';
		case 'vocale_anteriore_alta_labializzata_rilassata':
			return 'ʏ';
		case 'vocale_posteriore_alta_labializzata_rilassata':
			return 'ʊ';
		case 'vocale_anteriore_medio_alta_non_labializzata':
			return 'e';
		case 'vocale_anteriore_medio_alta_labializzata':
			return 'ø';
		case 'vocale_centrale_medio_alta_non_labializzata':
			return 'ɘ';
		case 'vocale_centrale_medio_alta_labializzata':
			return 'ɵ';
		case 'vocale_posteriore_medio_alta_non_labializzata':
			return 'ɤ';
		case 'vocale_posteriore_medio_alta_labializzata':
			return 'o';
		case 'schwa':
			return 'ə';
		case 'vocale_anteriore_medio_bassa_non_labializzata':
			return 'ɛ';
		case 'vocale_anteriore_medio_bassa_labializzata':
			return 'œ';
		case 'vocale_centrale_medio_bassa_non_labializzata':
			return 'ɜ';
		case 'vocale_centrale_medio_bassa_labializzata':
			return 'ɞ';
		case 'vocale_posteriore_medio_bassa_non_labializzata':
			return 'ʌ';
		case 'vocale_posteriore_medio_bassa_labializzata':
			return 'ɔ';
		case 'vocale_anteriore_quasi_bassa_non_labializzata':
			return 'æ';
		case 'vocale_centrale_quasi_bassa_non_labializzata':
			return 'ɐ';
		case 'vocale_anteriore_bassa_non_labializzata':
			return 'a';
		case 'vocale_anteriore_bassa_labializzata':
			return 'ɶ';
		case 'vocale_posteriore_bassa_non_labializzata':
			return 'ɑ';
		case 'vocale_posteriore_bassa_labializzata':
			return 'ɒ';
			
		case 'diacritico_desonorizzato_alto':
			return '̊';
		case 'diacritico_desonorizzato_basso':
			return '̥';
		case 'diacritico_mormorato':
			return '̤';
		case 'diacritico_dentale':
			return '̪';
		case 'diacritico_sonorizzato':
			return '̬';
		case 'diacritico_laringalizzato':
			return '̰';
		case 'diacritico_apicale':
			return '̺';
		case 'diacritico_aspirato':
			return 'ʰ';
		case 'diacritico_linguolabiale':
			return '̼';
		case 'diacritico_laminale':
			return '̻';
		case 'diacritico_piu_arrotondato':
			return '̹';
		case 'diacritico_labializzato':
			return 'ʷ';
		case 'diacritico_nasalizzato':
			return '̃';
		case 'diacritico_meno_arrotondato':
			return '̜';
		case 'diacritico_palatalizzato':
			return 'ʲ';
		case 'diacritico_rilascio_nasale':
			return 'ⁿ';
		case 'diacritico_avanzato':
			return '̟';
		case 'diacritico_velarizzato':
			return 'ˠ';
		case 'diacritico_rilascio_laterale':
			return 'ˡ';
		case 'diacritico_arretrato':
			return '̠';
		case 'diacritico_faringalizzato':
			return 'ˤ';
		case 'diacritico_rilascio_non_udibile':
			return '̚';
		case 'diacritico_centralizzato':
			return '̈';
		case 'diacritico_velarizzato_faringalizzato':
			return '̴';
		case 'diacritico_medio_centralizzato':
			return '̽';
		case 'diacritico_innalzato':
			return '̝';
		case 'diacritico_sillabico':
			return '̩';
		case 'diacritico_abbassato':
			return '̞';
		case 'diacritico_non_sillabico':
			return '̯';
		case 'diacritico_radice_avanzata':
			return '̘';
		case 'diacritico_rotacizzato':
			return '˞';
		case 'diacritico_radice_arretrata':
			return '̙';
			
		case 'sovra_accento_primario':
			return 'ˈ';
		case 'sovra_accento_secondario':
			return 'ˌ';
		case 'sovra_lunga':
			return 'ː';
		case 'sovra_semilunga':
			return 'ˑ';
		case 'sovra_brevissima':
			return '̆';
		case 'sovra_confine_di_sillaba':
			return '.';
		case 'sovra_gruppo_minore':
			return '|';
		case 'sovra_gruppo_maggiore':
			return '||';
		case 'sovra_legamento':
			return ' ͜ ';
	}
}

function fr2it (fono) {
	fono = fono.replace(/sord./g, "sourde");
	fono = fono.replace(/sonor./g, "sonore");
	fono = fono.replace("desonorezzata", "désonorisée");
	fono = fono.replace("alveolare", "alvéolaire");
	fono = fono.replace(/retrofless./g, "rétroflexe");
	fono = fono.replace("velare", "vélaire");
	fono = fono.replace("uvulare", "uvulaire");
	fono = fono.replace("faringale", "pharyngale");
	fono = fono.replace("glottidale", "glottale");
	fono = fono.replace("laringale", "glottale");
	fono = fono.replace("occlusiva", "occlusive");
	fono = fono.replace("affricata", "affriquée");
	fono = fono.replace("fricativa", "fricative");
	fono = fono.replace("laterale", "latérale");
	fono = fono.replace("approssimante", "approximante");
	fono = fono.replace("avulsiva", "avulsive");
	fono = fono.replace("implosiva", "implosive");
	fono = fono.replace("eiettiva", "ejective");
	fono = fono.replace("epi", "épi");
	fono = fono.replace("simultanee", "simultanéennes");
	fono = fono.replace("vocale", "voyelle");
	fono = fono.replace("anteriore", "antérieure");
	fono = fono.replace("posteriore", "postérieure");
	fono = fono.replace("alta", "fermée");
	fono = fono.replace("medio", "sémi");
	fono = fono.replace("bassa", "ouverte");
	fono = fono.replace("labializzata", "labialisée");
	fono = fono.replace("rilassata", "relaxée");
	return fono;
}

function traduci (fono) {
	switch (fono) {
		case 'occlusiva_bilabiale_sorda':
			return 'voiceless_bilabial_plosive';
		case 'occlusiva_bilabiale_sonora':
			return 'voiced_bilabial_plosive';
		case 'occlusiva_dentale_sorda':
			return 'voiceless_dental_plosive';
		case 'occlusiva_dentale_sonora':
			return 'voiced_dental_plosive';
		case 'occlusiva_alveolare_sorda':
			return 'voiceless_alveolar_plosive';
		case 'occlusiva_alveolare_sonora':
			return 'voiced_alveolar_plosive';
		case 'occlusiva_postalveolare_sorda':
			return 'voiceless_postalveolar_plosive';
		case 'occlusiva_postalveolare_sonora':
			return 'voiced_postalveolar_plosive';
		case 'occlusiva_retroflessa_sorda':
			return 'voiceless_retroflex_plosive';
		case 'occlusiva_retroflessa_sonora':
			return 'voiced_retroflex_plosive';
		case 'occlusiva_palatale_sorda':
			return 'voiceless_palatal_plosive';
		case 'occlusiva_palatale_sonora':
			return 'voiced_palatal_plosive';
		case 'occlusiva_velare_sorda':
			return 'voiceless_velar_plosive';
		case 'occlusiva_velare_sonora':
			return 'voiced_velar_plosive';
		case 'occlusiva_uvulare_sorda':
			return 'voiceless_uvular_plosive';
		case 'occlusiva_uvulare_sonora':
			return 'voiced_uvular_plosive';
		case 'occlusiva_glottidale_sorda':
			return 'voiceless_glottal_plosive';
			
		case 'nasale_bilabiale_desonorizzata':
			return 'devoiced_bilabial_nasal';
		case 'nasale_bilabiale_sonora':
			return 'voiced_bilabial_nasal';
		case 'nasale_labiodentale_desonorizzata':
			return 'devoiced_labiodental_nasal';
		case 'nasale_labiodentale_sonora':
			return 'voiced_labiodental_nasal';
		case 'nasale_alveolare_desonorizzata':
			return 'devoiced_alveolar_nasal';
		case 'nasale_alveolare_sonora':
			return 'voiced_alveolar_nasal';
		case 'nasale_retroflessa_desonorizzata':
			return 'devoiced_retroflex_nasal';
		case 'nasale_retroflessa_sonora':
			return 'voiced_retroflex_nasal';
		case 'nasale_palatale_desonorizzata':
			return 'devoiced_palatal_nasal';
		case 'nasale_palatale_sonora':
			return 'voiced_palatal_nasal';
		case 'nasale_velare_desonorizzata':
			return 'devoiced_velar_nasal';
		case 'nasale_velare_sonora':
			return 'voiced_velar_nasal';
		case 'nasale_uvulare_desonorizzata':
			return 'devoiced_uvular_nasal';
		case 'nasale_uvulare_sonora':
			return 'voiced_uvular_nasal';
			
		case 'vibrante_bilabiale_desonorizzata':
			return 'devoiced_bilabial_trill';
		case 'vibrante_bilabiale_sonora':
			return 'voiced_bilabial_trill';
		case 'vibrante_alveolare_desonorizzata':
			return 'devoiced_alveolar_trill';
		case 'vibrante_alveolare_sonora':
			return 'voiced_alveolar_trill';
		case 'vibrante_uvulare_desonorizzata':
			return 'devoiced_uvular_trill';
		case 'vibrante_uvulare_sonora':
			return 'voiced_uvular_trill';
		case 'tap_alveolare_sonoro':
			return 'devoiced_alveolar_tap';
		case 'flap_retroflesso_sonoro':
			return 'voiced_retroflex_flap';
			
		case 'affricata_bilabiale_sorda':
			return 'voiceless_bilabial_affricate';
		case 'affricata_bilabiale_sonora':
			return 'voiced_bilabial_affricate';
		case 'affricata_labiodentale_sorda':
			return 'voiceless_labiodental_affricate';
		case 'affricata_labiodentale_sonora':
			return 'voiced_labiodental_affricate';
		case 'affricata_dentale_sorda':
			return 'voiceless_dental_affricate';
		case 'affricata_dentale_sonora':
			return 'voiced_dental_affricate';
		case 'affricata_alveolare_sorda':
			return 'voiceless_alveolar_affricate';
		case 'affricata_alveolare_sonora':
			return 'voiced_alveolar_affricate';
		case 'affricata_postalveolare_sorda':
			return 'voiceless_postalveolar_affricate';
		case 'affricata_postalveolare_sonora':
			return 'voiced_postalveolar_affricate';
		case 'affricata_retroflessa_sorda':
			return 'voiceless_retroflex_affricate';
		case 'affricata_retroflessa_sonora':
			return 'voiced_retroflex_affricate';
		case 'affricata_palatale_sorda':
			return 'voiceless_palatal_affricate';
		case 'affricata_palatale_sonora':
			return 'voiced_palatal_affricate';
		case 'affricata_velare_sorda':
			return 'voiceless_velar_affricate';
		case 'affricata_velare_sonora':
			return 'voiced_velar_affricate';
		case 'affricata_uvulare_sorda':
			return 'voiceless_uvular_affricate';
		case 'affricata_uvulare_sonora':
			return 'voiced_uvular_affricate';
		case 'affricata_glottidale_sorda':
			return 'voiceless_glottal_affricate';
			
		case 'fricativa_bilabiale_sorda':
			return 'voiceless_bilabial_fricative';
		case 'fricativa_bilabiale_sonora':
			return 'voiced_bilabial_fricative';
		case 'fricativa_labiodentale_sorda':
			return 'voiceless_labiodental_fricative';
		case 'fricativa_labiodentale_sonora':
			return 'voiced_labiodental_fricative';
		case 'fricativa_dentale_sorda':
			return 'voiceless_dental_fricative';
		case 'fricativa_dentale_sonora':
			return 'voiced_dental_fricative';
		case 'fricativa_alveolare_sorda':
			return 'voiceless_alveolar_fricative';
		case 'fricativa_alveolare_sonora':
			return 'voiced_alveolar_fricative';
		case 'fricativa_postalveolare_sorda':
			return 'voiceless_postalveolar_fricative';
		case 'fricativa_postalveolare_sonora':
			return 'voiced_postalveolar_fricative';
		case 'fricativa_retroflessa_sorda':
			return 'voiceless_retroflex_fricative';
		case 'fricativa_retroflessa_sonora':
			return 'voiced_retroflex_fricative';
		case 'fricativa_palatale_sorda':
			return 'voiceless_palatal_fricative';
		case 'fricativa_palatale_sonora':
			return 'voiced_palatal_fricative';
		case 'fricativa_velare_sorda':
			return 'voiceless_velar_fricative';
		case 'fricativa_velare_sonora':
			return 'voiced_velar_fricative';
		case 'fricativa_uvulare_sorda':
			return 'voiceless_uvular_fricative';
		case 'fricativa_uvulare_sonora':
			return 'voiced_uvular_fricative';
		case 'fricativa_faringale_sorda':
			return 'voiceless_pharyngeal_fricative';
		case 'fricativa_faringale_sonora':
			return 'voiced_pharyngeal_fricative';
		case 'fricativa_glottidale_sorda':
			return 'voiceless_glottal_fricative';
		case 'fricativa_glottidale_sonora':
			return 'voiced_glottal_fricative';
				
		case 'fricativa_laterale_alveolare_sorda':
			return 'voiceless_alveolar_lateral_fricative';
		case 'fricativa_laterale_alveolare_sonora':
			return 'voiced_alveolar_lateral_fricative';
		
		case 'approssimante_bilabiale_sonora':
			return 'voiced_bilabial_approximant';
		case 'approssimante_labiodentale_sonora':
			return 'voiced_labiodental_approximant';
		case 'approssimante_dentale_sonora':
			return 'voiced_dental_approximant';
		case 'approssimante_alveolare_sonora':
			return 'voiced_alveolar_approximant';
		case 'approssimante_postalveolare_sonora':
			return 'voiced_postalveolar_approximant';
		case 'approssimante_retroflessa_sonora':
			return 'voiced_retroflex_approximant';
		case 'approssimante_palatale_sonora':
			return 'voiced_palatal_approximant';
		case 'approssimante_velare_sonora':
			return 'voiced_velar_approximant';
		case 'approssimante_uvulare_sonora':
			return 'voiced_uvular_approximant';
		
		case 'approssimante_laterale_alveolare_desonorizzata':
			return 'devoiced_lateral_alveolar_approximant';
		case 'approssimante_laterale_alveolare_sonora':
			return 'voiced_lateral_alveolar_approximant';
		case 'approssimante_laterale_retroflessa_desonorizzata':
			return 'devoiced_lateral_retroflex_approximant';
		case 'approssimante_laterale_retroflessa_sonora':
			return 'voiced_lateral_retroflex_approximant';
		case 'approssimante_laterale_palatale_desonorizzata':
			return 'devoiced_lateral_palatal_approximant';
		case 'approssimante_laterale_palatale_sonora':
			return 'voiced_lateral_palatal_approximant';
		case 'approssimante_laterale_velare_desonorizzata':
			return 'devoiced_lateral_velar_approximant';
		case 'approssimante_laterale_velare_sonora':
			return 'voiced_lateral_velar_approximant';
		
		case 'avulsiva_bilabiale':
			return 'bilabial_click';
		case 'avulsiva_dentale':
			return 'dental_click';
		case 'avulsiva_postalveolare':
			return 'postalveolar_click';
		case 'avulsiva_palatoalveolare':
			return 'palatoalveolar_click';
		case 'avulsiva_laterale':
			return 'lateral_click';
		
		case 'implosiva_bilabiale':
			return 'bilabial_implosive';
		case 'implosiva_dentale':
			return 'dental_implosive';
		case 'implosiva_palatale':
			return 'palatal_implosive';
		case 'implosiva_velare':
			return 'velar_implosive';
		case 'implosiva_uvulare':
			return 'uvular_implosive';
		
		case 'eiettiva_occlusiva_bilabiale':
			return 'bilabial_plosive_ejective';
		case 'eiettiva_occlusiva_alveolare':
			return 'alveolar_plosive_ejective';
		case 'eiettiva_occlusiva_palatale':
			return 'palatal_plosive_ejective';
		case 'eiettiva_occlusiva_velare':
			return 'velar_plosive_ejective';
		case 'eiettiva_occlusiva_uvulare':
			return 'uvular_plosive_ejective';
		
		case 'eiettiva_fricativa_labiodentale':
			return 'labiodental_fricative_ejective';
		case 'eiettiva_fricativa_alveolare':
			return 'alveolar_fricative_ejective';
		case 'eiettiva_fricativa_postalveolare':
			return 'postalveolar_fricative_ejective';
		case 'eiettiva_fricativa_velare':
			return 'velar_fricative_ejective';
		case 'eiettiva_fricativa_uvulare':
			return 'uvular_fricative_ejective';
		
		case 'fricativa_labiovelare_sorda':
			return 'voiceless_labiovelar_fricative';
		case 'approssimante_labiovelare_sonora':
			return 'voiced_labiovelar_approximant';
		case 'approssimante_labiopalatale_sonora':
			return 'voiced_labiopalatal_approximant';
		case 'fricativa_epiglottidale_sorda':
			return 'voiceless_epiglottal_fricative';
		case 'fricativa_epiglottidale_sonora':
			return 'voiced_epiglottal_fricative';
		case 'occlusiva_epiglottidale':
			return 'epiglottal_plosive';
		case 'fricativa_alveolopalatale_sorda':
			return 'voiceless_alveolopalat_fricative';
		case 'fricativa_alveolopalatale_sonora':
			return 'voiced_alveolopalatal_fricative';
		case 'flap_laterale_alveolare_sonoro':
			return 'voiced_lateral_alveolar_flap';
		case 'sh_e_x_simultanee':
			return 'simultaneous_sh_and_x';
		
		case 'vocale_anteriore_alta_non_labializzata':
			return 'unrounded_high_front_vowel';
		case 'vocale_anteriore_alta_labializzata':
			return 'rounded_high_front_vowel';
		case 'vocale_centrale_alta_non_labializzata':
			return 'unrounded_high_central_vowel';
		case 'vocale_centrale_alta_labializzata':
			return 'rounded_high_central_vowel';
		case 'vocale_posteriore_alta_non_labializzata':
			return 'unrounded_high_back_vowel';
		case 'vocale_posteriore_alta_labializzata':
			return 'rounded_high_back_vowel';
		case 'vocale_anteriore_alta_non_labializzata_rilassata':
			return 'unrounded_high_front_lax_vowel';
		case 'vocale_anteriore_alta_labializzata_rilassata':
			return 'rounded_high_front_lax_vowel';
		case 'vocale_posteriore_alta_labializzata_rilassata':
			return 'rounded_high_back_lax_vowel';
		case 'vocale_anteriore_medio_alta_non_labializzata':
			return 'unrounded_high_mid_front_vowel';
		case 'vocale_anteriore_medio_alta_labializzata':
			return 'rounded_high_mid_front_vowel';
		case 'vocale_centrale_medio_alta_non_labializzata':
			return 'unrounded_high_mid_central_vowel';
		case 'vocale_centrale_medio_alta_labializzata':
			return 'rounded_high_mid_central_vowel';
		case 'vocale_posteriore_medio_alta_non_labializzata':
			return 'unrounded_high_mid_back_vowel';
		case 'vocale_posteriore_medio_alta_labializzata':
			return 'rounded_high_mid_back_vowel';
		case 'schwa':
			return 'schwa';
		case 'vocale_anteriore_medio_bassa_non_labializzata':
			return 'unrounded_low_mid_front_vowel';
		case 'vocale_anteriore_medio_bassa_labializzata':
			return 'rounded_low_mid_front_vowel';
		case 'vocale_centrale_medio_bassa_non_labializzata':
			return 'unrounded_low_mid_central_vowel';
		case 'vocale_centrale_medio_bassa_labializzata':
			return 'rounded_low_mid_central_vowel';
		case 'vocale_posteriore_medio_bassa_non_labializzata':
			return 'unrounded_low_mid_back_vowel';
		case 'vocale_posteriore_medio_bassa_labializzata':
			return 'rounded_low_mid_back_vowel';
		case 'vocale_anteriore_quasi_bassa_non_labializzata':
			return 'unrounded_nearly_low_front_vowel';
		case 'vocale_centrale_quasi_bassa_non_labializzata':
			return 'unrounded_nearly_low_central_vowel';
		case 'vocale_anteriore_bassa_non_labializzata':
			return 'unrounded_low_front_vowel';
		case 'vocale_anteriore_bassa_labializzata':
			return 'rounded_low_front_vowel';
		case 'vocale_posteriore_bassa_non_labializzata':
			return 'unrounded_low_back_vowel';
		case 'vocale_posteriore_bassa_labializzata':
			return 'rounded_low_back_vowel';		
	}
}

function ese (fono) {
	if (location.pathname.match('index_en.html')) {
		esempi = '-- Examples: ';
		it = '<i>It. </i>';
		en = '<i>Eng. </i>';
		am = '<i>Am. Eng. </i>';
		fr = '<i>Fr. </i>';
		de = '<i>Ger. </i>';
		es = '<i>Sp. </i>';
		nl = '<i>Du. </i>';
		he = '<i>Gr. </i>';
		pt = '<i>Port. </i>';
		se = '<i>Swed. </i>';
		is = '<i>Icel. </i>';
		pl = '<i>Pol. </i>';
		ru = '<i>Rus. </i>';
		jp = '<i>Jap. </i>';
		ci = '<i>Chin. </i>';
		sc = '<i>Scottish </i>';
		hu = '<i>Hungarian </i>';
		ara = '<i>Ar. </i>';
		so = '<i>Somalian </i>';
		ga = '<i>Welsh </i>';
		zu = '<i>Zulu </i>';
		et = '<i>Estonian </i>';
	} else if (location.pathname.match('index_fr.html')) {
		esempi = '-- Exemple: ';
		it = '<i>It. </i>';
		en = '<i>Ang. </i>';
		am = '<i>ang. Am. </i>';
		fr = '<i>Fr. </i>';
		de = '<i>All. </i>';
		es = '<i>Esp. </i>';
		nl = '<i>Néerl. </i>';
		he = '<i>Gr. </i>';
		pt = '<i>Port. </i>';
		se = '<i>Suéd. </i>';
		is = '<i>Isl. </i>';
		pl = '<i>Pol. </i>';
		ru = '<i>Rus. </i>';
		jp = '<i>Jap. </i>';
		ci = '<i>Chin. </i>';
		sc = '<i>Ecossais </i>';
		hu = '<i>Ongr. </i>';
		ara = '<i>Ar. </i>';
		so = '<i>Somal. </i>';
		ga = '<i>Gallois </i>';
		zu = '<i>Zulu </i>';
		et = '<i>Est. </i>';
	} else {
		esempi = '-- Esempi: ';
		it = '<i>It. </i>';
		en = '<i>Ing. </i>';
		am = '<i>Ing. Am. </i>';
		fr = '<i>Fr. </i>';
		de = '<i>Ted. </i>';
		es = '<i>Sp. </i>';
		nl = '<i>Neerl. </i>';
		he = '<i>Gr. </i>';
		pt = '<i>Port. </i>';
		se = '<i>Sved. </i>';
		is = '<i>Isl. </i>';
		pl = '<i>Pol. </i>';
		ru = '<i>Rus. </i>';
		jp = '<i>Giapp. </i>';
		ci = '<i>Cin. </i>';
		sc = '<i>Scozzese </i>';
		hu = '<i>Ungh. </i>';
		ara = '<i>Ar. </i>';
		so = '<i>Somalo </i>';
		ga = '<i>Gallese </i>';
		zu = '<i>Zulu </i>';
		et = '<i>Estone </i>';
	}
	switch (fono) {
		case 'occlusiva_bilabiale_sorda':
			return (esempi + it + '<u>p</u>alla.');
		case 'occlusiva_bilabiale_sonora':
			return (esempi + it + '<u>b</u>ar<u>b</u>a.');
		case 'occlusiva_dentale_sorda':
			return ('');
		case 'occlusiva_dentale_sonora':
			return ('');
		case 'occlusiva_alveolare_sorda':
			return (esempi + it + '<u>t</u>ana.');
		case 'occlusiva_alveolare_sonora':
			return (esempi + it + '<u>d</u>ono.');
		case 'occlusiva_postalveolare_sorda':
			return ('');
		case 'occlusiva_postalveolare_sonora':
			return ('');
		case 'occlusiva_retroflessa_sorda':
			return (esempi + se + 'ka<u>rt</u>a');
		case 'occlusiva_retroflessa_sonora':
			return (esempi + se + 'no<u>rd</u>');
		case 'occlusiva_palatale_sorda':
			return (esempi + hu + '<u>ty</u>&uacute;k');
		case 'occlusiva_palatale_sonora':
			return (esempi + hu + '<u>gy</u>&aacute;m.');
		case 'occlusiva_velare_sorda':
			return (esempi + it + '<u>c</u>asa.');
		case 'occlusiva_velare_sonora':
			return (esempi + it + '<u>g</u>as.');
		case 'occlusiva_uvulare_sorda':
			return (esempi + ara + '<u>Q</u>ur\'an\' ');
		case 'occlusiva_uvulare_sonora':
			return (esempi + so + 'Mu<u>q</u>disho');
		case 'occlusiva_glottidale_sorda':
			return (esempi + de + 'B<u>ea</u>chtung');
			
		case 'nasale_bilabiale_desonorizzata':
			return (esempi + is + 'ke<u>m</u>pa.');
		case 'nasale_bilabiale_sonora':
			return (esempi + it + '<u>m</u>a<u>mm</u>a; ' + en + '<u>m</u>u<u>m</u>.');
		case 'nasale_labiodentale_desonorizzata':
			return ('');
		case 'nasale_labiodentale_sonora':
			return (esempi + it + 'a<u>n</u>fora.');
		case 'nasale_alveolare_desonorizzata':
			return (esempi + is + '<u>hn</u>&iacute;fur.');
		case 'nasale_alveolare_sonora':
			return (esempi + it + '<u>n</u>a<u>n</u>o; ' + en + '<u>n</u>u<u>n</u>.');
		case 'nasale_retroflessa_desonorizzata':
			return ('');
		case 'nasale_retroflessa_sonora':
			return (esempi + se + 'V&auml;ne<u>rn</u>.');
		case 'nasale_palatale_desonorizzata':
			return (esempi + is + 'ba<u>n</u>ki.');
		case 'nasale_palatale_sonora':
			return (esempi + it + '<u>gn</u>omo.');
		case 'nasale_velare_desonorizzata':
			return (esempi + is + 'ba<u>n</u>ka.');
		case 'nasale_velare_sonora':
			return (esempi + en + 'si<u>ng</u>.');
		case 'nasale_uvulare_desonorizzata':
			return ('');
		case 'nasale_uvulare_sonora':
			return (esempi + jp + 'niho<u>n</u>.');
			
		case 'vibrante_bilabiale_desonorizzata':
			return ('');
		case 'vibrante_bilabiale_sonora':
			return ('');
		case 'vibrante_alveolare_desonorizzata':
			return (esempi + is + '<u>hr</u>aun.');
		case 'vibrante_alveolare_sonora':
			return (esempi + it + '<u>r</u>osso.');
		case 'vibrante_uvulare_desonorizzata':
			return ('');
		case 'vibrante_uvulare_sonora':
			return (esempi + fr + '<u>r</u>ouge.');
		case 'tap_alveolare_sonoro':
			return (esempi + am + 'spla<u>tt</u>er.');
		case 'flap_retroflesso_sonoro':
			return ('');
			
		case 'affricata_bilabiale_sorda':
			return ('');
		case 'affricata_bilabiale_sonora':
			return ('');
		case 'affricata_labiodentale_sorda':
			return ('');
		case 'affricata_labiodentale_sonora':
			return ('');
		case 'affricata_dentale_sorda':
			return ('');
		case 'affricata_dentale_sonora':
			return ('');
		case 'affricata_alveolare_sorda':
			return (esempi + it + 'pa<u>zz</u>o.');
		case 'affricata_alveolare_sonora':
			return (esempi + it + 'me<u>zz</u>o.');
		case 'affricata_postalveolare_sorda':
			return (esempi + it + 'mar<u>c</u>io;' + en + '<u>ch</u>ocolate.');
		case 'affricata_postalveolare_sonora':
			return (esempi + it + '<u>g</u>etto;' + en + '<u>j</u>ump.');
		case 'affricata_retroflessa_sorda':
			return (esempi + pl + '<u>cz</u>as');
		case 'affricata_retroflessa_sonora':
			return (esempi + pl + '<u>d&#380;</u>em');
		case 'affricata_palatale_sorda':
			return ('');
		case 'affricata_palatale_sonora':
			return ('');
		case 'affricata_velare_sorda':
			return ('');
		case 'affricata_velare_sonora':
			return ('');
		case 'affricata_uvulare_sorda':
			return ('');
		case 'affricata_uvulare_sonora':
			return ('');
		case 'affricata_glottidale_sorda':
			return ('');
			
		case 'fricativa_bilabiale_sorda':
			return (esempi + jp + '<u>f</u>uhai.');
		case 'fricativa_bilabiale_sonora':
			return ('');
		case 'fricativa_labiodentale_sorda':
			return (esempi + it + '<u>f</u>are; ' + en + '<u>f</u>an.');
		case 'fricativa_labiodentale_sonora':
			return (esempi + it + 'a<u>v</u>ere; ' + en + '<u>v</u>an.');
		case 'fricativa_dentale_sorda':
			return (esempi + en + '<u>th</u>orn.');
		case 'fricativa_dentale_sonora':
			return (esempi + en + '<u>th</u>e.');
		case 'fricativa_alveolare_sorda':
			return (esempi + it + '<u>s</u>a<u>ss</u>o; ' + en + '<u>s</u>un.');
		case 'fricativa_alveolare_sonora':
			return (esempi + it + 'ombro<u>s</u>o; ' + en + '<u>z</u>ebra.');
		case 'fricativa_postalveolare_sorda':
			return (esempi + it + '<u>sc</u>iocco; ' + en + '<u>sh</u>ock.');
		case 'fricativa_postalveolare_sonora':
			return (esempi + en + 'lei<u>s</u>ure; ' + fr + '<u>j</u>uste.');
		case 'fricativa_retroflessa_sorda':
			return ('');
		case 'fricativa_retroflessa_sonora':
			return ('');
		case 'fricativa_palatale_sorda':
			return (esempi + de + 'i<u>ch</u>.');
		case 'fricativa_palatale_sonora':
			return (esempi + is + '<u>j</u>&aacute;');
		case 'fricativa_velare_sorda':
			return (esempi + de + 'ma<u>ch</u>en.');
		case 'fricativa_velare_sonora':
			return (esempi + nl + 'van <u>G</u>o<u>gh</u>.');
		case 'fricativa_uvulare_sorda':
			return ('');
		case 'fricativa_uvulare_sonora':
			return ('');
		case 'fricativa_glottidale_sorda':
			return (esempi + en + '<u>h</u>am');
				
		case 'fricativa_laterale_alveolare_sorda':
			return (esempi + ga + '<u>ll</u>wyd');
		case 'fricativa_laterale_alveolare_sonora':
			return (esempi + zu + '<u>dl</u>ala');
		
		case 'approssimante_bilabiale_sonora':
			return ('');
		case 'approssimante_labiodentale_sonora':
			return (esempi + es + 'aca<u>b</u>o.');
		case 'approssimante_dentale_sonora':
			return (esempi + es + 'cerra<u>d</u>o.');
		case 'approssimante_alveolare_sonora':
			return ('');
		case 'approssimante_postalveolare_sonora':
			return (esempi + en + '<u>r</u>ed.');
		case 'approssimante_retroflessa_sonora':
			return (esempi + am + 'a<u>r</u>m.');
		case 'approssimante_palatale_sonora':
			return (esempi + it + '<u>i</u>eri; ' + en + '<u>y</u>ou.');
		case 'approssimante_velare_sonora':
			return (esempi + es + 'a<u>g</u>ua.');
		case 'approssimante_uvulare_sonora':
			return (esempi + fr + 'pa<u>r</u>ent.');
		
		case 'approssimante_laterale_alveolare_desonorizzata':
			return (esempi + is + '<u>hl</u>akka.');
		case 'approssimante_laterale_alveolare_sonora':
			return (esempi + it + '<u>l</u>ampada; ' + en + '<u>l</u>amb.');
		case 'approssimante_laterale_retroflessa_desonorizzata':
			return ('');
		case 'approssimante_laterale_retroflessa_sonora':
			return (esempi + se + 'ka<u>rl</u>');
		case 'approssimante_laterale_palatale_desonorizzata':
			return ('');
		case 'approssimante_laterale_palatale_sonora':
			return (esempi + it + 'pa<u>gl</u>ia.');
		case 'approssimante_laterale_velare_desonorizzata':
			return ('');
		case 'approssimante_laterale_velare_sonora':
			return ('');
		
		case 'avulsiva_bilabiale':
			return ('');
		case 'avulsiva_dentale':
			return ('');
		case 'avulsiva_postalveolare':
			return ('');
		case 'avulsiva_palatoalveolare':
			return ('');
		case 'avulsiva_laterale':
			return ('');
		
		case 'implosiva_bilabiale':
			return ('');
		case 'implosiva_dentale':
			return ('');
		case 'implosiva_palatale':
			return ('');
		case 'implosiva_velare':
			return ('');
		case 'implosiva_uvulare':
			return ('');
		
		case 'eiettiva_occlusiva_bilabiale':
			return ('');
		case 'eiettiva_occlusiva_alveolare':
			return ('');
		case 'eiettiva_occlusiva_palatale':
			return ('');
		case 'eiettiva_occlusiva_velare':
			return ('');
		case 'eiettiva_occlusiva_uvulare':
			return ('');
		
		case 'eiettiva_fricativa_labiodentale':
			return ('');
		case 'eiettiva_fricativa_alveolare':
			return ('');
		case 'eiettiva_fricativa_postalveolare':
			return ('');
		case 'eiettiva_fricativa_velare':
			return ('');
		case 'eiettiva_fricativa_uvulare':
			return ('');
		
		case 'fricativa_labiovelare_sorda':
			return (esempi + sc + '<u>wh</u>at.');
		case 'approssimante_labiovelare_sonora':
			return (esempi + en + '<u>wh</u>at; ' + it + '<u>u</u>omo.');
		case 'approssimante_labiopalatale_sonora':
			return (esempi + fr + 'l<u>u</u>i.');
		case 'fricativa_epiglottidale_sorda':
			return ('');
		case 'fricativa_epiglottidale_sonora':
			return ('');
		case 'occlusiva_epiglottidale':
			return ('');
		case 'fricativa_alveolopalatale_sorda':
			return (esempi + jp + '<u>sh</u>io');
		case 'fricativa_alveolopalatale_sonora':
			return ('');
		case 'flap_laterale_alveolare_sonoro':
			return ('');
		case 'sh_e_x_simultanee':
			return ('');
		
		case 'vocale_anteriore_alta_non_labializzata':
			return (esempi + it + 'p<u>i</u>no.');
		case 'vocale_anteriore_alta_labializzata':
			return (esempi + fr + 'all<u>u</u>re.');
		case 'vocale_centrale_alta_non_labializzata':
			return (esempi + pl + 'm<u>y</u>sz');
		case 'vocale_centrale_alta_labializzata':
			return (esempi + se + 'f<u>u</u>l');
		case 'vocale_posteriore_alta_non_labializzata':
			return (esempi + jp + 's<u>u</u>shi.');
		case 'vocale_posteriore_alta_labializzata':
			return (esempi + it + 't<u>u</u>.');
		case 'vocale_anteriore_alta_non_labializzata_rilassata':
			return (esempi + en + '<u>i</u>t.');
		case 'vocale_anteriore_alta_labializzata_rilassata':
			return (esempi + de + 'H<u>&uuml;</u>tte.');
		case 'vocale_posteriore_alta_labializzata_rilassata':
			return (esempi + en + 'p<u>u</u>t.');
		case 'vocale_anteriore_medio_alta_non_labializzata':
			return (esempi + fr + '<u>Ã©</u>t<u>Ã©</u>.');
		case 'vocale_anteriore_medio_alta_labializzata':
			return (esempi + fr + 'p<u>eu</u>.');
		case 'vocale_centrale_medio_alta_non_labializzata':
			return ('');
		case 'vocale_centrale_medio_alta_labializzata':
			return ('');
		case 'vocale_posteriore_medio_alta_non_labializzata':
			return (esempi + et + 'k&otilde;rv.');
		case 'vocale_posteriore_medio_alta_labializzata':
			return (esempi + fr + 'j<u>au</u>ne.');
		case 'schwa':
			return (esempi + en + 't<u>a</u>ttoo.');
		case 'vocale_anteriore_medio_bassa_non_labializzata':
			return (esempi + fr + 'fen<u>&ecirc;</u>tre.');
		case 'vocale_anteriore_medio_bassa_labializzata':
			return (esempi + fr + 'b<u>eu</u>rre.');
		case 'vocale_centrale_medio_bassa_non_labializzata':
			return (esempi + en + 'b<u>ir</u>d.');
		case 'vocale_centrale_medio_bassa_labializzata':
			return ('');
		case 'vocale_posteriore_medio_bassa_non_labializzata':
			return ('');
		case 'vocale_posteriore_medio_bassa_labializzata':
			return (esempi + fr + 'n<u>o</u>rd.');
		case 'vocale_anteriore_quasi_bassa_non_labializzata':
			return (esempi + en + 'm<u>a</u>n.');
		case 'vocale_centrale_quasi_bassa_non_labializzata':
			return (esempi + de + 'M&auml;nn<u>er</u>.');
		case 'vocale_anteriore_bassa_non_labializzata':
			return (esempi + it + 't<u>a</u>t<u>a</u>');
		case 'vocale_anteriore_bassa_labializzata':
			return ('');
		case 'vocale_posteriore_bassa_non_labializzata':
			return (esempi + en + 'c<u>ar</u>.');
		case 'vocale_posteriore_bassa_labializzata':
			return (esempi + en + 'p<u>o</u>t.');
		return '';
	}
}



function go (fono) {
	
	if (location.pathname.match('index_en.html')) {
		inglese = traduci(fono);
		etichetta = inglese.replace (/_/g, ' ');
		noaudio = 'click here if you hear no sound';
		nofoto = 'no picture available';
		chiudi = 'close this window';
	} else if (location.pathname.match('index_fr.html')) {
		francese = fr2it(fono);
		etichetta = francese.replace (/_/g, ' ');
		noaudio = 'cliquez ici si vous n\'entendez rien';
		nofoto = 'photo non disponible';
		chiudi = 'fermer cette fen&ecirc;tre';
	} else {
		etichetta = fono.replace (/_/g, ' ');
		noaudio = 'clicca qui se non senti nulla';
		nofoto = 'foto non disponibile';
		chiudi = 'chiudi questa finestra';
	}
}

function ipa (tabella) {
	document.getElementById(tabella + '_ipa').style.display = '';
	document.getElementById(tabella + '_sampa').style.display = 'none';
}

function sampa (tabella) {
	document.getElementById(tabella + '_ipa').style.display = 'none';
	document.getElementById(tabella + '_sampa').style.display = '';
}
