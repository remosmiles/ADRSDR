// Modulare Gefahrgut-Stammdaten nach ADR 2025 / SDR Schweiz
// Fokus: Praxisrelevante Stoffe im alpenquerenden Schwerverkehr (Gotthard Kat. E)

window.ADR_SUBSTANCES = [
    {
        un: "1202",
        name: "DIESELKRAFTSTOFF oder GASÖL oder HEIZÖL, LEICHT",
        class: "3",
        labels: "3",
        hin: "30",
        unit: "Liter",
        variants: [
            { id: "1202-vg3", pg: "III", desc: "VG III (Standard Diesel / Heizöl leicht)", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
        ],
        notes: "Häufigster Gefahrgutstoff im Strassenverkehr. Bis 1000 Liter als Versandstück nach 1.1.3.6 befreit."
    },
    {
        un: "1203",
        name: "BENZIN oder OTTOKRAFTSTOFF",
        class: "3",
        labels: "3",
        hin: "33",
        unit: "Liter",
        variants: [
            { id: "1203-vg2", pg: "II", desc: "VG II (Ottokraftstoff / Benzin)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" }
        ],
        notes: "Beförderungskategorie 2 (Faktor 3). Ab > 333 Liter als Stückgut kennzeichnungspflichtig!"
    },
    {
        un: "1965",
        name: "KOHLENWASSERSTOFFGAS, GEMISCH, VERFLÜSSIGT, N.A.G. (Flüssiggas / Propan / Butan)",
        class: "2",
        classificationCode: "2F",
        labels: "2.1",
        hin: "23",
        unit: "kg",
        variants: [
            { id: "1965-std", pg: "-", desc: "Gemisch A, A01, A02, A0, A1, B1, B2, B oder C (Gasflaschen / Tank)", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }
        ],
        notes: "Entzündbares Gas (2.1). Bis 333 kg Nettomasse in Gasflaschen nach 1.1.3.6 befreit."
    },
    {
        un: "1005",
        name: "AMMONIAK, WASSERFREI",
        class: "2",
        classificationCode: "2TC",
        labels: "2.3 + 8",
        hin: "268",
        unit: "kg",
        variants: [
            { id: "1005-std", pg: "-", desc: "Giftiges und ätzendes Gas", tc: "1", factor: 50, maxQty: 20, trc: "(C/D)" }
        ],
        notes: "Beförderungskategorie 1 (Faktor 50)! Bereits ab > 20 kg kennzeichnungspflichtig."
    },
    {
        un: "1824",
        name: "NATRIUMHYDROXIDLÖSUNG (Natronlauge)",
        class: "8",
        labels: "8",
        hin: "80",
        unit: "Liter",
        variants: [
            { id: "1824-vg2", pg: "II", desc: "VG II (Stark ätzend)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
            { id: "1824-vg3", pg: "III", desc: "VG III (Mässig ätzend)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
        ],
        notes: "Wichtig: Verpackungsgruppe im Beförderungspapier prüfen (VG II = Faktor 3, VG III = Faktor 1)."
    },
    {
        un: "1789",
        name: "CHLORWASSERSTOFFSÄURE (Salzsäure)",
        class: "8",
        labels: "8",
        hin: "80",
        unit: "Liter",
        variants: [
            { id: "1789-vg2", pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
            { id: "1789-vg3", pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
        ],
        notes: "Ätzender flüssiger Stoff. Tunnelcode (E)."
    },
    {
        un: "1830",
        name: "SCHWEFELSÄURE mit mehr als 51 % Säure",
        class: "8",
        labels: "8",
        hin: "80",
        unit: "Liter",
        variants: [
            { id: "1830-vg2", pg: "II", desc: "VG II (> 51% Säure)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }
        ],
        notes: "Stark ätzende Säure, Beförderungskategorie 2."
    },
    {
        un: "1263",
        name: "FARBE oder FARBZUBEHÖRSTOFFE",
        class: "3",
        labels: "3",
        hin: "30",
        unit: "Liter",
        variants: [
            { id: "1263-vg1", pg: "I", desc: "VG I (Siedebeginn <= 35 °C)", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" },
            { id: "1263-vg2", pg: "II", desc: "VG II (Standard Lösungsmittelfarbe)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
            { id: "1263-vg3", pg: "III", desc: "VG III (oder viskos nach 2.2.3.1.4)", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
        ],
        notes: "Sehr häufig auf Baustellen- und Stückgut-LKW. Genau auf VG I, II oder III achten!"
    },
    {
        un: "1993",
        name: "ENTZÜNDBARER FLÜSSIGER STOFF, N.A.G.",
        class: "3",
        labels: "3",
        hin: "30",
        unit: "Liter",
        variants: [
            { id: "1993-vg1", pg: "I", desc: "VG I", tc: "1", factor: 50, maxQty: 20, trc: "(D/E)" },
            { id: "1993-vg2", pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
            { id: "1993-vg3", pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
        ],
        notes: "Sammelposition für entzündbare Flüssigkeiten."
    },
    {
        un: "1950",
        name: "DRUCKGASPACKUNGEN (Aerosole)",
        class: "2",
        labels: "2.1 / 2.2",
        hin: "-",
        unit: "kg",
        variants: [
            { id: "1950-flam", pg: "-", desc: "Entzündbar (Klassifizierungscode 5F / 2.1)", tc: "2", factor: 3, maxQty: 333, trc: "(D)" },
            { id: "1950-nonflam", pg: "-", desc: "Nicht entzündbar, erstickend (5A / 5O / 2.2)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" },
            { id: "1950-toxic", pg: "-", desc: "Giftig (5T, 5TF, 5TC, 5TO, 5TFC)", tc: "1", factor: 50, maxQty: 20, trc: "(D)" }
        ],
        notes: "Bei UN 1950 gilt die Nettomasse der Druckgaspackungen. Oft auch als LQ (Begrenzte Mengen) befördert!"
    },
    {
        un: "3480",
        name: "LITHIUM-IONEN-BATTERIEN",
        class: "9",
        labels: "9A",
        hin: "90",
        unit: "kg",
        variants: [
            { id: "3480-std", pg: "-", desc: "Lose Batterien (ohne Ausrüstung)", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }
        ],
        notes: "Beförderungskategorie 2 (max. 333 kg). Sondervorschriften (z.B. SV 188 für kleinere Zellen/Batterien) beachten!"
    },
    {
        un: "3481",
        name: "LITHIUM-IONEN-BATTERIEN IN AUSRÜSTUNGEN oder MIT AUSRÜSTUNGEN VERPACKT",
        class: "9",
        labels: "9A",
        hin: "90",
        unit: "kg",
        variants: [
            { id: "3481-std", pg: "-", desc: "Batterien in/mit Geräten", tc: "2", factor: 3, maxQty: 333, trc: "(E)" }
        ],
        notes: "Beförderungskategorie 2 (Faktor 3)."
    },
    {
        un: "3082",
        name: "UMWELTGEFÄHRDENDER STOFF, FLÜSSIG, N.A.G.",
        class: "9",
        labels: "9",
        hin: "90",
        unit: "Liter",
        variants: [
            { id: "3082-vg3", pg: "III", desc: "VG III (Flüssig)", tc: "3", factor: 1, maxQty: 1000, trc: "(-)" }
        ],
        notes: "WICHTIGE AUSNAHME: UN 3082 hat im ADR 2025 den Tunnelbeschränkungscode (-) statt (E)! Selbst über 1000 L (kennzeichnungspflichtig) greift für UN 3082 allein KEIN Tunnelverbot im Gotthard (SV 375 <= 5 L/kg ohnehin freigestellt)."
    },
    {
        un: "3077",
        name: "UMWELTGEFÄHRDENDER STOFF, FEST, N.A.G.",
        class: "9",
        labels: "9",
        hin: "90",
        unit: "kg",
        variants: [
            { id: "3077-vg3", pg: "III", desc: "VG III (Fest)", tc: "3", factor: 1, maxQty: 1000, trc: "(-)" }
        ],
        notes: "WICHTIGE AUSNAHME: UN 3077 hat den Tunnelcode (-)! Auch bei Kennzeichnungspflicht (> 1000 kg) ist die Durchfahrt durch Tunnel der Kategorie E erlaubt."
    },
    {
        un: "1006",
        name: "ARGON, VERDICHTET",
        class: "2",
        classificationCode: "1A",
        labels: "2.2",
        hin: "20",
        unit: "Liter",
        variants: [
            { id: "1006-std", pg: "-", desc: "Erstickendes Schutzgas (1A)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
        ],
        notes: "Inertes Schweiss-/Schutzgas. Bis 1000 Liter Fassungsraum der Flaschen nach 1.1.3.6 befreit."
    },
    {
        un: "1072",
        name: "SAUERSTOFF, VERDICHTET",
        class: "2",
        classificationCode: "1O",
        labels: "2.2 + 5.1",
        hin: "25",
        unit: "Liter",
        variants: [
            { id: "1072-std", pg: "-", desc: "Oxidierendes Gas (1O)", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
        ],
        notes: "Massgebend bei verdichteten Gasen ist das nominale Fassungsvermögen des Gefässes in Litern."
    },
    {
        un: "1001",
        name: "ACETYLEN, GELÖST",
        class: "2",
        classificationCode: "4F",
        labels: "2.1",
        hin: "239",
        unit: "kg",
        variants: [
            { id: "1001-std", pg: "-", desc: "Entzündbares Schweissgas", tc: "2", factor: 3, maxQty: 333, trc: "(B/D)" }
        ],
        notes: "Beförderungskategorie 2 (Faktor 3). Oft zusammen mit Sauerstoff (UN 1072) auf Baustellenfahrzeugen (Mischladung rechnen!)."
    },
    {
        un: "1170",
        name: "ETHANOL (ETHYLALKOHOL) oder ETHANOLLÖSUNG",
        class: "3",
        labels: "3",
        hin: "33",
        unit: "Liter",
        variants: [
            { id: "1170-vg2", pg: "II", desc: "VG II (Stark entzündbar)", tc: "2", factor: 3, maxQty: 333, trc: "(D/E)" },
            { id: "1170-vg3", pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(D/E)" }
        ],
        notes: "Häufig in der Chemie-, Pharma- und Getränkeindustrie."
    },
    {
        un: "1791",
        name: "HYPOCHLORITLÖSUNG (Javelwasser / Chlorbleichlauge)",
        class: "8",
        labels: "8",
        hin: "80",
        unit: "Liter",
        variants: [
            { id: "1791-vg2", pg: "II", desc: "VG II", tc: "2", factor: 3, maxQty: 333, trc: "(E)" },
            { id: "1791-vg3", pg: "III", desc: "VG III", tc: "3", factor: 1, maxQty: 1000, trc: "(E)" }
        ],
        notes: "Typisches Schwimmbad- und Reinigungschemikal."
    },
    {
        un: "3291",
        name: "KLINISCHER ABFALL, UNSPEZIFIZIERT, N.A.G. oder MEDIZINISCHER ABFALL",
        class: "6.2",
        labels: "6.2",
        hin: "606",
        unit: "kg",
        variants: [
            { id: "3291-vg2", pg: "II", desc: "Klinischer Abfall Kat. B", tc: "2", factor: 3, maxQty: 333, trc: "(-)" }
        ],
        notes: "EXPLIZITE AUSNAHME ADR 1.9.5.2.2: Selbst bei Kennzeichnungspflicht darf UN 3291 durch Tunnel der Kategorie E befördert werden!"
    },
    {
        un: "3373",
        name: "BIOLOGISCHER STOFF, KATEGORIE B",
        class: "6.2",
        labels: "6.2",
        hin: "606",
        unit: "kg",
        variants: [
            { id: "3373-std", pg: "-", desc: "Laborproben / Diagnostische Proben", tc: "4", factor: 0, maxQty: 999999, trc: "(-)" }
        ],
        notes: "Ausgenommen von den Tunnelbeschränkungen der Kategorie E."
    },
    {
        un: "0081",
        name: "SPRENGSTOFF, TYP A",
        class: "1",
        labels: "1",
        hin: "1.1D",
        unit: "kg (NEM)",
        variants: [
            { id: "0081-11d", pg: "-", desc: "Unterklasse 1.1D (Netto-Explosivstoffmasse)", tc: "1", factor: 50, maxQty: 20, trc: "(B1000C)" }
        ],
        notes: "Klasse 1.1D: Freigrenze liegt bei 20 kg Netto-Explosivstoffmasse (NEM) (Faktor 50)."
    },
    {
        un: "3257",
        name: "ERWÄRMTER FLÜSSIGER STOFF, N.A.G. (z.B. Flüssigbitumen >= 100 °C)",
        class: "9",
        labels: "9",
        hin: "99",
        unit: "kg",
        variants: [
            { id: "3257-vg3", pg: "III", desc: "VG III (Heissbitumen im Tank)", tc: "3", factor: 1, maxQty: 1000, trc: "(D)" }
        ],
        notes: "Wird fast immer im Tankwagen befördert -> Kennzeichnungspflichtig -> Durchfahrt Gotthard verboten!"
    }
];

window.QUICK_UN_LIST = ["1202", "1203", "1965", "1824", "1005", "1263", "3480", "3082"];
