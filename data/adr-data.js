// Umfassende ADR 2025 / SDR Gefahrgut-Stammdaten für Schwerverkehrskontrollen
// Format kompakt: un, name, class, labels, hin (Gefahrnummer), unit, notes, variants: [{pg, desc, tc (Beförderungskategorie), factor, maxQty, trc (Tunnelcode)}]

window.ADR_SUBSTANCES = [
    // --- TREIBSTOFFE, HEIZÖL, BITUMEN & ÖLE ---
    { un: "1202", name: "DIESELKRAFTSTOFF oder GASÖL oder HEIZÖL, LEICHT", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Häufigster Stoff. Bis 1000 L als Stückgut frei. Im Tank immer verboten!", variants: [{ pg: "III", desc: "VG III (Diesel / Heizöl leicht)", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }] },
    { un: "1203", name: "BENZIN oder OTTOKRAFTSTOFF", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "BK 2 (Faktor 3)! Ab > 333 Liter als Stückgut oder im Tank verboten!", variants: [{ pg: "II", desc: "VG II (Benzin / Ottokraftstoff)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1223", name: "KEROSIN", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Flugpetrol / Kerosin.", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }] },
    { un: "1863", name: "DÜSENKRAFTSTOFF (Jet A-1)", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Je nach Flammpunkt VG I, II oder III.", variants: [
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" },
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "3475", name: "ETHANOL UND BENZIN, GEMISCH (z.B. E85)", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Mit mehr als 10 % Ethanol.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1268", name: "ERDÖLDESTILLATE, N.A.G. oder ERDÖLPRODUKTE, N.A.G.", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Spezialbenzin, Testbenzin, Naphtha.", variants: [
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" },
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "1999", name: "TEERE, FLÜSSIG, einschliesslich Strassenöle und Cutback-Bitumen", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Strassenbau-Bitumen (kalt/gelöst).", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "3257", name: "ERWÄRMTER FLÜSSIGER STOFF, N.A.G. (>= 100 °C, Heissbitumen)", class: "9", labels: "9", hin: "99", unit: "kg", notes: "Heissbitumen im Tankwagen -> Im Gotthard verboten!", variants: [{ pg: "III", desc: "VG III (Heissbitumen)", tc: "3", factor: 1, maxQty: 1000, trc: "(D)" }] },
    { un: "3256", name: "ERWÄRMTER FLÜSSIGER STOFF, ENTZÜNDBAR, N.A.G. (>= 60 °C)", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Erwärmt über Flammpunkt.", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }] },

    // --- TECHNISCHE GASE & FLÜSSIGGAS (KLASSE 2) ---
    { un: "1965", name: "KOHLENWASSERSTOFFGAS, GEMISCH, VERFLÜSSIGT, N.A.G. (Propan/Butan/LPG)", class: "2", labels: "2.1", hin: "23", unit: "kg", notes: "Campinggas / Heizgas. Frei bis 333 kg Nettomasse in Flaschen.", variants: [{ pg: "-", desc: "Gemisch A bis C (2F)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }] },
    { un: "1978", name: "PROPAN", class: "2", labels: "2.1", hin: "23", unit: "kg", notes: "Entzündbares Gas (2F). Max. 333 kg in Flaschen frei.", variants: [{ pg: "-", desc: "Verflüssigtes Gas (2F)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }] },
    { un: "1011", name: "BUTAN", class: "2", labels: "2.1", hin: "23", unit: "kg", notes: "Entzündbares Gas (2F). Max. 333 kg frei.", variants: [{ pg: "-", desc: "Verflüssigtes Gas (2F)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }] },
    { un: "1950", name: "DRUCKGASPACKUNGEN (Aerosole / Spraydosen)", class: "2", labels: "2.1 / 2.2", hin: "-", unit: "kg", notes: "Nettomasse zählt. Sehr oft als LQ (Begrenzte Menge bis 8t frei)!", variants: [
        { pg: "-", desc: "Entzündbar (Code 5F / Zettel 2.1)", tc: "2", factor: 3, maxQty: 333, trc: "(D)" },
        { pg: "-", desc: "Nicht entzündbar (Code 5A, 5O / Zettel 2.2)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" },
        { pg: "-", desc: "Giftig (Code 5T, 5TF, 5TC)", tc: "1", factor: 50, maxQty: 20, trc: "(D)" }
    ]},
    { un: "2037", name: "GEFÄSSE, KLEIN, MIT GAS (Gaskartuschen)", class: "2", labels: "2.1 / 2.2", hin: "-", unit: "kg", notes: "Camping-Stechkartuschen ohne Ventil.", variants: [
        { pg: "-", desc: "Entzündbar (5F)", tc: "2", factor: 3, maxQty: 333, trc: "(D)" },
        { pg: "-", desc: "Nicht entzündbar (5A/5O)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1001", name: "ACETYLEN, GELÖST", class: "2", labels: "2.1", hin: "239", unit: "kg", notes: "Schweissgas. Oft zusammen mit Sauerstoff (Mischladung rechnen!).", variants: [{ pg: "-", desc: "Gelöstes Gas (4F)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }] },
    { un: "1072", name: "SAUERSTOFF, VERDICHTET", class: "2", labels: "2.2 + 5.1", hin: "25", unit: "Liter", notes: "Flaschenvolumen in Litern zählt! Bis 1000 L frei.", variants: [{ pg: "-", desc: "Verdichtetes Gas (1O)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1073", name: "SAUERSTOFF, TIEFGEKÜHLT, FLÜSSIG", class: "2", labels: "2.2 + 5.1", hin: "225", unit: "kg", notes: "Kryo-Sauerstoff.", variants: [{ pg: "-", desc: "Tiefgekühlt flüssig (3O)", tc: "3", factor: 1, maxQty: 1000, trc: "(C/E)" }] },
    { un: "1006", name: "ARGON, VERDICHTET", class: "2", labels: "2.2", hin: "20", unit: "Liter", notes: "Schutzgas. Bis 1000 L Flaschenvolumen frei.", variants: [{ pg: "-", desc: "Verdichtet (1A)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1951", name: "ARGON, TIEFGEKÜHLT, FLÜSSIG", class: "2", labels: "2.2", hin: "22", unit: "kg", notes: "Kryo-Argon.", variants: [{ pg: "-", desc: "Tiefgekühlt flüssig (3A)", tc: "3", factor: 1, maxQty: 1000, trc: "(C/E)" }] },
    { un: "1066", name: "STICKSTOFF, VERDICHTET", class: "2", labels: "2.2", hin: "20", unit: "Liter", notes: "Bis 1000 L Flaschenvolumen frei.", variants: [{ pg: "-", desc: "Verdichtet (1A)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1977", name: "STICKSTOFF, TIEFGEKÜHLT, FLÜSSIG", class: "2", labels: "2.2", hin: "22", unit: "kg", notes: "Flüssigstickstoff.", variants: [{ pg: "-", desc: "Tiefgekühlt flüssig (3A)", tc: "3", factor: 1, maxQty: 1000, trc: "(C/E)" }] },
    { un: "1013", name: "KOHLENDIOXID (Kohlensäure / CO2)", class: "2", labels: "2.2", hin: "20", unit: "kg", notes: "Getränkegas / Feuerlöschgas. Bis 1000 kg Nettomasse frei.", variants: [{ pg: "-", desc: "Verflüssigt (2A)", tc: "3", factor: 1, maxQty: 1000, trc: "(C/E)" }] },
    { un: "1046", name: "HELIUM, VERDICHTET", class: "2", labels: "2.2", hin: "20", unit: "Liter", notes: "Ballongas / Technisches Gas.", variants: [{ pg: "-", desc: "Verdichtet (1A)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1049", name: "WASSERSTOFF, VERDICHTET", class: "2", labels: "2.1", hin: "23", unit: "Liter", notes: "Brennstoffzellen / Industrie. BK 2 (max. 333 L Flaschenvolumen frei!).", variants: [{ pg: "-", desc: "Verdichtet (1F)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }] },
    { un: "1971", name: "ERDGAS, VERDICHTET oder METHAN, VERDICHTET", class: "2", labels: "2.1", hin: "23", unit: "Liter", notes: "CNG / Methan.", variants: [{ pg: "-", desc: "Verdichtet (1F)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }] },
    { un: "1956", name: "VERDICHTETES GAS, N.A.G. (z.B. Schweiss-Mischgas / Corgon)", class: "2", labels: "2.2", hin: "20", unit: "Liter", notes: "Typisches Schutzgas-Gemisch (Argon/CO2).", variants: [{ pg: "-", desc: "Erstickend (1A)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1005", name: "AMMONIAK, WASSERFREI", class: "2", labels: "2.3 + 8", hin: "268", unit: "kg", notes: "Giftiges Gas! BK 1 (Faktor 50) -> Schon ab > 20 kg verboten!", variants: [{ pg: "-", desc: "Giftig & ätzend (2TC)", tc: "1", factor: 50, maxQty: 20, trc: "(C/D)" }] },
    { un: "1017", name: "CHLOR", class: "2", labels: "2.3 + 5.1 + 8", hin: "265", unit: "kg", notes: "Chlorgas für Schwimmbäder/Industrie. Ab > 20 kg verboten!", variants: [{ pg: "-", desc: "Giftig, oxidierend, ätzend (2TOC)", tc: "1", factor: 50, maxQty: 20, trc: "(C/D)" }] },
    { un: "1079", name: "SCHWEFELDIOXID", class: "2", labels: "2.3 + 8", hin: "268", unit: "kg", notes: "Giftiges Gas (BK 1 -> max. 20 kg frei).", variants: [{ pg: "-", desc: "Giftig & ätzend (2TC)", tc: "1", factor: 50, maxQty: 20, trc: "(C/D)" }] },
    { un: "1044", name: "FEUERLÖSCHER mit verdichtetem oder verflüssigtem Gas", class: "2", labels: "2.2", hin: "-", unit: "kg", notes: "Als Ladung transportierte Feuerlöscher (beachte SV 594 bei richtiger Verpackung frei).", variants: [{ pg: "-", desc: "Gegenstand (6A)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },

    // --- FARBEN, LÖSEMITTEL, ALKOHOLE & KLEBSTOFFE (KLASSE 3) ---
    { un: "1263", name: "FARBE oder FARBZUBEHÖRSTOFFE (Verdünner / Lacke)", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Sehr häufig! Genau prüfen ob VG I (20L), VG II (333L) oder VG III (1000L).", variants: [
        { pg: "II", desc: "VG II (Standard Lack / Verdünner)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III (oder viskos nach 2.2.3.1.4)", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" },
        { pg: "I", desc: "VG I (Siedebeginn <= 35 °C)", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" }
    ]},
    { un: "1133", name: "KLEBSTOFFE mit entzündbarem flüssigem Stoff", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Baustellenkleber / Kontaktkleber.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" },
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" }
    ]},
    { un: "1210", name: "DRUCKFARBE oder DRUCKFARBENZUBEHÖRSTOFFE", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Druckerei-Lieferungen.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "1170", name: "ETHANOL (ETHYLALKOHOL) oder ETHANOLLÖSUNG", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Desinfektionsmittel, Industriealkohol.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "1219", name: "ISOPROPANOL (ISOPROPYLALKOHOL)", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Reinigungsmittel, Enteiser, Desinfektion.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1090", name: "ACETON", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Stark entzündbares Lösemittel (VG II -> max. 333 L frei).", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1230", name: "METHANOL", class: "3", labels: "3 + 6.1", hin: "336", unit: "Liter", notes: "Entzündbar und giftig! Max. 333 L frei.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1173", name: "ETHYLACETAT", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Lösemittel.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1193", name: "ETHYLMETHYLKETON (MEK)", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Industrielösemittel.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1294", name: "TOLUEN (Toluol)", class: "3", labels: "3", hin: "33", unit: "Liter", notes: "Lösemittel VG II.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "1307", name: "XYLENE (Xylol)", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "VG II oder VG III.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "1987", name: "ALKOHOLE, N.A.G. (z.B. Scheibenfrostschutz-Konzentrat)", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Häufig im Winterverkehr.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
    ]},
    { un: "1993", name: "ENTZÜNDBARER FLÜSSIGER STOFF, N.A.G.", class: "3", labels: "3", hin: "30", unit: "Liter", notes: "Sammelnummer Klasse 3.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" },
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" }
    ]},
    { un: "2924", name: "ENTZÜNDBARER FLÜSSIGER STOFF, ÄTZEND, N.A.G.", class: "3", labels: "3 + 8", hin: "338", unit: "Liter", notes: "Kombigefahr Klasse 3 + 8.", variants: [
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(C/E)" },
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},

    // --- SÄUREN, LAUGEN & REINIGUNGSMITTEL (KLASSE 8) ---
    { un: "1824", name: "NATRIUMHYDROXIDLÖSUNG (Natronlauge)", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Sehr häufig! VG II (bis 333 L) oder VG III (bis 1000 L).", variants: [
        { pg: "II", desc: "VG II (Stark ätzend)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III (Mässig ätzend)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1823", name: "NATRIUMHYDROXID, FEST (Ätznatron)", class: "8", labels: "8", hin: "80", unit: "kg", notes: "Feste Perlen/Schuppen. VG II (bis 333 kg).", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "1814", name: "KALIUMHYDROXIDLÖSUNG (Kalilauge)", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Industrielauge.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1789", name: "CHLORWASSERSTOFFSÄURE (Salzsäure)", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Bauchemie, Wasseraufbereitung.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1830", name: "SCHWEFELSÄURE mit mehr als 51 % Säure", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Stark ätzend (VG II -> max. 333 L frei).", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "2796", name: "SCHWEFELSÄURE (höchstens 51 %) oder BATTERIEFLÜSSIGKEIT, SAUER", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Batteriesäure VG II.", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "2031", name: "SALPETERSÄURE", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Je nach Konzentration VG I oder VG II.", variants: [
        { pg: "II", desc: "VG II (< 65% Säure)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "I", desc: "VG I (> 65% Säure, oxidierend)", tc: "1", factor: 50, maxQty: 20, trc: "(C/E)" }
    ]},
    { un: "1805", name: "PHOSPHORSÄURE, LÖSUNG", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Lebensmittelindustrie, Rostumwandler (VG III -> 1000 L frei).", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "2790", name: "ESSIGSÄURE, LÖSUNG", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "VG II (50-80%) oder VG III (10-50%).", variants: [
        { pg: "II", desc: "VG II (> 50-80% Säure)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III (10-50% Säure)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1779", name: "AMEISENSÄURE mit mehr als 85 % Säure", class: "8", labels: "8 + 3", hin: "83", unit: "Liter", notes: "Ätzend und entzündbar (VG II).", variants: [{ pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }] },
    { un: "3412", name: "AMEISENSÄURE mit 10 % bis 85 % Säure", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Landwirtschaft / Imkerei / Enteisung.", variants: [
        { pg: "II", desc: "VG II (10-85%)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III (5-10%)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1791", name: "HYPOCHLORITLÖSUNG (Javelwasser / Chlorbleichlauge)", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Schwimmbadchemie.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "2672", name: "AMMONIAKLÖSUNG (Salmiakgeist, 10–35 % Ammoniak)", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "VG III -> bis 1000 L als Stückgut frei.", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "2582", name: "EISEN(III)-CHLORIDLÖSUNG", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Kläranlagen-Flockungsmittel (oft im Tankwagen!).", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1760", name: "ÄTZENDER FLÜSSIGER STOFF, N.A.G.", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Sehr häufig für gewerbliche Reiniger & Bauchemie.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" },
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(C/E)" }
    ]},
    { un: "1759", name: "ÄTZENDER FESTER STOFF, N.A.G.", class: "8", labels: "8", hin: "80", unit: "kg", notes: "Pulverreiniger / Granulate.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" },
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(E)" }
    ]},
    { un: "3264", name: "ÄTZENDER SAURER ANORGANISCHER FLÜSSIGER STOFF, N.A.G.", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Saure Industriereiniger / Entkalker.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "3265", name: "ÄTZENDER SAURER ORGANISCHER FLÜSSIGER STOFF, N.A.G.", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Organische Säuren.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "3266", name: "ÄTZENDER BASISCHER ANORGANISCHER FLÜSSIGER STOFF, N.A.G.", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Alkalische Reiniger / Gastronomie-Reiniger.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "3267", name: "ÄTZENDER BASISCHER ORGANISCHER FLÜSSIGER STOFF, N.A.G.", class: "8", labels: "8", hin: "80", unit: "Liter", notes: "Basische Reiniger / Härter.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},

    // --- BATTERIEN & AKKUS (KLASSE 8 & 9) ---
    { un: "3480", name: "LITHIUM-IONEN-BATTERIEN", class: "9", labels: "9A", hin: "90", unit: "kg", notes: "BK 2 (Faktor 3) -> Max. 333 kg frei! (Ausnahme: Kleine Batterien nach SV 188 sind komplett befreit).", variants: [{ pg: "-", desc: "Lose Batterien (BK 2)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "3481", name: "LITHIUM-IONEN-BATTERIEN IN/MIT AUSRÜSTUNGEN", class: "9", labels: "9A", hin: "90", unit: "kg", notes: "E-Bikes, Werkzeuge, Elektronik. Max. 333 kg (sofern nicht nach SV 188 frei).", variants: [{ pg: "-", desc: "In/mit Geräten (BK 2)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "3090", name: "LITHIUM-METALL-BATTERIEN", class: "9", labels: "9A", hin: "90", unit: "kg", notes: "Nicht wiederaufladbare Lithiumbatterien. Max. 333 kg.", variants: [{ pg: "-", desc: "Lose Batterien (BK 2)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "3091", name: "LITHIUM-METALL-BATTERIEN IN/MIT AUSRÜSTUNGEN", class: "9", labels: "9A", hin: "90", unit: "kg", notes: "BK 2 -> Max. 333 kg.", variants: [{ pg: "-", desc: "In/mit Geräten (BK 2)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "3536", name: "LITHIUMBATTERIEN, IN GÜTERBEFÖRDERUNGSEINHEIT EINGEBAUT", class: "9", labels: "9A", hin: "90", unit: "kg", notes: "Mobile Energiespeicher-Container. Tunnelcode (E)!", variants: [{ pg: "-", desc: "Container-Speicher", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "2794", name: "BATTERIEN (AKKUMULATOREN), NASS, GEFÜLLT MIT SÄURE (Bleibatterien)", class: "8", labels: "8", hin: "80", unit: "kg", notes: "Autobatterien / Staplerbatterien. Bis 1000 kg Bruttomasse frei (oder nach SV 598).", variants: [{ pg: "-", desc: "Blei-Säure-Batterien (BK 3)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "2795", name: "BATTERIEN, NASS, GEFÜLLT MIT ALKALISCHER FLÜSSIGKEIT", class: "8", labels: "8", hin: "80", unit: "kg", notes: "Alkalibatterien.", variants: [{ pg: "-", desc: "BK 3", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "2800", name: "BATTERIEN, NASS, AUSLAUFSICHER", class: "8", labels: "8", hin: "80", unit: "kg", notes: "AGM / Gel-Batterien.", variants: [{ pg: "-", desc: "BK 3", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },

    // --- UMWELTGEFÄHRDEND, TROCKENEIS, ASBEST,FAHRZEUGE (KLASSE 9) ---
    { un: "3082", name: "UMWELTGEFÄHRDENDER STOFF, FLÜSSIG, N.A.G.", class: "9", labels: "9", hin: "90", unit: "Liter", notes: "SONDERFALL: Tunnelcode ist (-)! Selbst über 1000 Liter (mit offenen Warntafeln) darf UN 3082 durch den Gotthard fahren!", variants: [{ pg: "III", desc: "VG III (Tunnelcode (-)!)", tc: "3", factor: 1, maxQty: 1000, trc: "(-)" }] },
    { un: "3077", name: "UMWELTGEFÄHRDENDER STOFF, FEST, N.A.G.", class: "9", labels: "9", hin: "90", unit: "kg", notes: "SONDERFALL: Tunnelcode ist (-)! Auch über 1000 kg (mit offenen Warntafeln) darf UN 3077 durch den Gotthard fahren!", variants: [{ pg: "III", desc: "VG III (Tunnelcode (-)!)", tc: "3", factor: 1, maxQty: 1000, trc: "(-)" }] },
    { un: "1845", name: "KOHLENDIOXID, FEST (Trockeneis)", class: "9", labels: "9", hin: "-", unit: "kg", notes: "Als Kühlmittel nach 5.5.3 ADR beachten.", variants: [{ pg: "-", desc: "Trockeneis", tc: "4", factor: 0, maxQty: 999999, trc: "(-)" }] },
    { un: "3268", name: "SICHERHEITSEINRICHTUNGEN, elektrisch ausgelöst (Airbags / Gurtstraffer)", class: "9", labels: "9", hin: "90", unit: "kg", notes: "Autoteile-Logistik. BK 4 (Faktor 0) -> als Stückgut unbegrenzt frei!", variants: [{ pg: "-", desc: "Airbag-Module / Gurtstraffer (BK 4)", tc: "4", factor: 0, maxQty: 999999, trc: "(E)" }] },
    { un: "3166", name: "FAHRZEUG MIT ANTRIEB DURCH ENTZÜNDBARES GAS ODER FLÜSSIGKEIT", class: "9", labels: "9", hin: "-", unit: "kg", notes: "Unterliegt als Ladung i.d.R. SV 666 (freigestellt) und Tunnelcode (-).", variants: [{ pg: "-", desc: "Fahrzeug (Tunnelcode (-))", tc: "4", factor: 0, maxQty: 999999, trc: "(-)" }] },
    { un: "3171", name: "BATTERIEBETRIEBENES FAHRZEUG oder BATTERIEBETRIEBENES GERÄT", class: "9", labels: "9", hin: "-", unit: "kg", notes: "E-Autos / E-Stapler. Tunnelcode (-).", variants: [{ pg: "-", desc: "E-Fahrzeug (Tunnelcode (-))", tc: "4", factor: 0, maxQty: 999999, trc: "(-)" }] },
    { un: "2212", name: "ASBEST, AMPHIBOL (Blauasbest / Braunasbest)", class: "9", labels: "9", hin: "90", unit: "kg", notes: "Sanierungsabfälle! BK 2 -> Ab > 333 kg verboten!", variants: [{ pg: "II", desc: "VG II (Stark krebserzeugend)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "2590", name: "ASBEST, CHRYSOTIL (Weissasbest)", class: "9", labels: "9", hin: "90", unit: "kg", notes: "Asbestzement / Eternit-Abfälle (beachte SV 168). Sonst BK 3 (bis 1000 kg).", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "2315", name: "POLYCHLORIERTE BIPHENYLE, FLÜSSIG (PCB)", class: "9", labels: "9", hin: "90", unit: "Liter", notes: "Alte Transformatorenöle. BK 0 -> IMMER kennzeichnungspflichtig & im Gotthard VERBOTEN!", variants: [{ pg: "II", desc: "VG II (Beförderungskategorie 0!)", tc: "0", factor: 9999, maxQty: 0, trc: "(D/E)" }] },
    { un: "3432", name: "POLYCHLORIERTE BIPHENYLE, FEST (PCB)", class: "9", labels: "9", hin: "90", unit: "kg", notes: "BK 0 -> IMMER kennzeichnungspflichtig & im Gotthard VERBOTEN!", variants: [{ pg: "II", desc: "VG II (Beförderungskategorie 0!)", tc: "0", factor: 9999, maxQty: 0, trc: "(D/E)" }] },
    { un: "3509", name: "ALTVERPACKUNGEN, LEER, UNGEREINIGT", class: "9", labels: "9", hin: "90", unit: "kg", notes: "Abfall-Leergebinde zur Entsorgung. BK 4 (Faktor 0) als Stückgut, aber oft in loser Schüttung (dann verboten!).", variants: [{ pg: "-", desc: "Altverpackungen (Tunnelcode E)", tc: "4", factor: 0, maxQty: 999999, trc: "(E)" }] },

    // --- OXIDIERENDE STOFFE & PEROXIDE (KLASSE 5.1 & 5.2) ---
    { un: "2014", name: "WASSERSTOFFPEROXID, WÄSSRIGE LÖSUNG (20 % bis 60 %)", class: "5.1", labels: "5.1 + 8", hin: "58", unit: "Liter", notes: "Bleichmittel / Desinfektion. BK 2 -> Max. 333 L frei.", variants: [{ pg: "II", desc: "VG II (20-60%)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "2984", name: "WASSERSTOFFPEROXID, WÄSSRIGE LÖSUNG (8 % bis 20 %)", class: "5.1", labels: "5.1", hin: "50", unit: "Liter", notes: "VG III -> Bis 1000 L frei.", variants: [{ pg: "III", desc: "VG III (8-20%)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1942", name: "AMMONIUMNITRAT", class: "5.1", labels: "5.1", hin: "50", unit: "kg", notes: "Düngemittel / Sprengstoff-Grundstoff. VG III (bis 1000 kg).", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "2067", name: "AMMONIUMNITRATHALTIGE DÜNGEMITTEL", class: "5.1", labels: "5.1", hin: "50", unit: "kg", notes: "Landwirtschafts-Dünger.", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1748", name: "CALCIUMHYPOCHLORIT, TROCKEN (Chlorkalk / Schwimmbadchlor)", class: "5.1", labels: "5.1", hin: "50", unit: "kg", notes: "Chlortabletten / Granulat.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "1479", name: "ENTZÜNDEND (OXIDIEREND) WIRKENDER FESTER STOFF, N.A.G.", class: "5.1", labels: "5.1", hin: "50", unit: "kg", notes: "Sammelposition Klasse 5.1.", variants: [
        { pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" },
        { pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(E)" }
    ]},
    { un: "3105", name: "ORGANISCHES PEROXID TYP D, FLÜSSIG (Härter)", class: "5.2", labels: "5.2", hin: "-", unit: "kg", notes: "Kunstharz-Härter. BK 2 (max. 333 kg).", variants: [{ pg: "-", desc: "Typ D (BK 2)", tc: "2", factor: 3, maxQty: 333, trc: "(D)" }] },

    // --- GIFTIGE & ANSTECKUNGSGEFÄHRLICHE STOFFE (KLASSE 6.1 & 6.2) ---
    { un: "2810", name: "GIFTIGER ORGANISCHER FLÜSSIGER STOFF, N.A.G.", class: "6.1", labels: "6.1", hin: "60", unit: "Liter", notes: "Chemie / Pharmatransporte.", variants: [
        { pg: "I", desc: "VG I (Sehr giftig -> max. 20 L!)", tc: "1", factor: 50, maxQty: 20, trc: "(C/E)" },
        { pg: "II", desc: "VG II (Giftig -> max. 333 L)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III (Schwach giftig -> max. 1000 L)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }
    ]},
    { un: "2811", name: "GIFTIGER ORGANISCHER FESTER STOFF, N.A.G.", class: "6.1", labels: "6.1", hin: "60", unit: "kg", notes: "Achtung: Auch VG III ist bei Klasse 6.1 in BK 2 (max. 333 kg)!", variants: [
        { pg: "I", desc: "VG I (Max. 20 kg)", tc: "1", factor: 50, maxQty: 20, trc: "(C/E)" },
        { pg: "II", desc: "VG II (Max. 333 kg)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III (BK 2 -> Max. 333 kg!)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }
    ]},
    { un: "2902", name: "PESTIZID, FLÜSSIG, GIFTIG, N.A.G. (Pflanzenschutzmittel)", class: "6.1", labels: "6.1", hin: "60", unit: "Liter", notes: "Agrarchemie.", variants: [
        { pg: "I", desc: "VG I (Max. 20 L)", tc: "1", factor: 50, maxQty: 20, trc: "(C/E)" },
        { pg: "II", desc: "VG II (Max. 333 L)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
        { pg: "III", desc: "VG III (Max. 333 L)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }
    ]},
    { un: "1593", name: "DICHLORMETHAN (Methylenchlorid)", class: "6.1", labels: "6.1", hin: "60", unit: "Liter", notes: "Abbeizmittel / Entlacker. BK 2 (max. 333 L).", variants: [{ pg: "III", desc: "VG III (BK 2!)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "1897", name: "TETRACHLORETHYLEN (Perchlorethylen)", class: "6.1", labels: "6.1", hin: "60", unit: "Liter", notes: "Chemische Textilreinigung. BK 2 (max. 333 L).", variants: [{ pg: "III", desc: "VG III (BK 2!)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "3291", name: "KLINISCHER ABFALL, UNSPEZIFIZIERT, N.A.G. (Spitalabfall)", class: "6.2", labels: "6.2", hin: "606", unit: "kg", notes: "AUSNAHME ADR 1.9.5.2.2: Darf auch über 333 kg (mit offenen Warntafeln) durch den Gotthard fahren!", variants: [{ pg: "II", desc: "VG II (Tunnelcode (-)!)", tc: "2", factor: 3, maxQty: 333, trc: "(-)" }] },
    { un: "3373", name: "BIOLOGISCHER STOFF, KATEGORIE B (Laborproben)", class: "6.2", labels: "6.2", hin: "606", unit: "kg", notes: "Ausgenommen von Tunnelbeschränkungen (Tunnelcode (-)).", variants: [{ pg: "-", desc: "Kategorie B (Tunnelcode (-))", tc: "4", factor: 0, maxQty: 999999, trc: "(-)" }] },
    { un: "2814", name: "ANSTECKUNGSGEFÄHRLICHER STOFF, GEFÄHRLICH FÜR MENSCHEN (Kat. A)", class: "6.2", labels: "6.2", hin: "606", unit: "kg", notes: "Hochgefährliche Erreger (Ebola etc.). BK 0 -> IMMER verboten im Gotthard!", variants: [{ pg: "-", desc: "Kategorie A (BK 0 -> Immer Warntafel!)", tc: "0", factor: 9999, maxQty: 0, trc: "(E)" }] },

    // --- ENTZÜNDBARE FESTE STOFFE (KLASSE 4.1, 4.2, 4.3) ---
    { un: "1325", name: "ENTZÜNDBARER ORGANISCHER FESTER STOFF, N.A.G.", class: "4.1", labels: "4.1", hin: "40", unit: "kg", notes: "Klasse 4.1.", variants: [
        { pg: "II", desc: "VG II (Max. 333 kg)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
        { pg: "III", desc: "VG III (Max. 1000 kg)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
    ]},
    { un: "3175", name: "FESTE STOFFE MIT ENTZÜNDBAREM FLÜSSIGEM STOFF, N.A.G. (Ölgetränkte Putzlappen)", class: "4.1", labels: "4.1", hin: "40", unit: "kg", notes: "Häufig bei Werkstätten/Entsorgern (verschmutzte Putzlappen).", variants: [{ pg: "II", desc: "VG II (Max. 333 kg)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "1350", name: "SCHWEFEL", class: "4.1", labels: "4.1", hin: "40", unit: "kg", notes: "VG III (bis 1000 kg).", variants: [{ pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }] },
    { un: "1402", name: "CALCIUMCARBID (Karbid)", class: "4.3", labels: "4.3", hin: "423", unit: "kg", notes: "Bildet mit Wasser entzündbares Gas! VG I (BK 1 -> max. 20 kg) oder VG II (BK 2 -> max. 333 kg).", variants: [
        { pg: "I", desc: "VG I (Max. 20 kg!)", tc: "1", factor: 50, maxQty: 20, trc: "(B/E)" },
        { pg: "II", desc: "VG II (Max. 333 kg)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }
    ]},

    // --- SPRENGSTOFFE, MUNITION & FEUERWERK (KLASSE 1) ---
    { un: "0081", name: "SPRENGSTOFF, TYP A (Gesteinssprengstoff / Dynamit)", class: "1", labels: "1", hin: "1.1D", unit: "kg (NEM)", notes: "Tunnelbau / Steinbruch. Netto-Explosivstoffmasse (NEM) zählt! Bis 20 kg NEM frei.", variants: [{ pg: "-", desc: "1.1D (Max. 20 kg NEM frei)", tc: "1", factor: 50, maxQty: 20, trc: "(B1000C)" }] },
    { un: "0241", name: "SPRENGSTOFF, TYP E (Emulsionssprengstoff)", class: "1", labels: "1", hin: "1.1D", unit: "kg (NEM)", notes: "Baustellensprengstoff. Bis 20 kg NEM frei.", variants: [{ pg: "-", desc: "1.1D (Max. 20 kg NEM frei)", tc: "1", factor: 50, maxQty: 20, trc: "(B1000C)" }] },
    { un: "0335", name: "FEUERWERKSKÖRPER (Grossfeuerwerk 1.3G)", class: "1", labels: "1", hin: "1.3G", unit: "kg (NEM)", notes: "1.3G: Bis 20 kg Netto-Explosivstoffmasse (NEM) frei!", variants: [{ pg: "-", desc: "1.3G (Max. 20 kg NEM frei)", tc: "1", factor: 50, maxQty: 20, trc: "(C5000D)" }] },
    { un: "0336", name: "FEUERWERKSKÖRPER (1.4G Silvester-/1.-August-Feuerwerk)", class: "1", labels: "1.4", hin: "1.4G", unit: "kg (NEM)", notes: "1.4G: BK 2 -> Bis 333 kg Netto-Explosivstoffmasse (NEM) frei!", variants: [{ pg: "-", desc: "1.4G (Max. 333 kg NEM frei)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }] },
    { un: "0337", name: "FEUERWERKSKÖRPER (1.4S Kleinstfeuerwerk / Tischbomben)", class: "1", labels: "1.4", hin: "1.4S", unit: "kg (NEM)", notes: "1.4S: BK 4 (Faktor 0) -> Als Stückgut unbegrenzt frei!", variants: [{ pg: "-", desc: "1.4S (BK 4 -> Unbegrenzt frei)", tc: "4", factor: 0, maxQty: 999999, trc: "(E)" }] },
    { un: "0012", name: "PATRONEN FÜR WAFFEN, MIT INERTEM GESCHOSS oder HANDFEUERWAFFENPATRONEN", class: "1", labels: "1.4", hin: "1.4S", unit: "kg (NEM)", notes: "Standard-Munition (1.4S) ist in BK 4 (Faktor 0) -> Als Stückgut durch Gotthard unbegrenzt erlaubt!", variants: [{ pg: "-", desc: "1.4S (BK 4 -> Unbegrenzt frei)", tc: "4", factor: 0, maxQty: 999999, trc: "(E)" }] },

    // --- RADIOAKTIVE STOFFE (KLASSE 7) ---
    { un: "2910", name: "RADIOAKTIVE STOFFE, FREIGESTELLTES VERSANDSTÜCK – BEGRENZTE STOFFMENGE", class: "7", labels: "-", hin: "-", unit: "Stück", notes: "Prüfstrahler, Messgeräte. BK 4 (Faktor 0) und Tunnelcode (-).", variants: [{ pg: "-", desc: "Freigestelltes Versandstück (BK 4)", tc: "4", factor: 0, maxQty: 999999, trc: "(-)" }] },
    { un: "2915", name: "RADIOAKTIVE STOFFE, TYP A-VERSANDSTÜCK", class: "7", labels: "7A/7B/7C", hin: "70", unit: "Stück", notes: "Medizinische Isotope! BK 0 -> IMMER kennzeichnungspflichtig & mit Tunnelcode (E) im Gotthard VERBOTEN (Ausnahmebewilligung nötig)!", variants: [{ pg: "-", desc: "Typ A (BK 0 -> Immer Warntafel!)", tc: "0", factor: 9999, maxQty: 0, trc: "(E)" }] }
];

window.QUICK_UN_LIST = ["1202", "1203", "1965", "1263", "1824", "1789", "3480", "3082", "1950", "1072", "0336"];
