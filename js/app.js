// Gotthard ADR/SDR Checker - Core Evaluation Engine (ADR 2025 / SDR)

document.addEventListener('DOMContentLoaded', () => {
    const substances = window.ADR_SUBSTANCES || [];
    const quickList = window.QUICK_UN_LIST || [];

    // DOM Elements
    const unSearch = document.getElementById('unSearch');
    const autocompleteList = document.getElementById('autocompleteList');
    const variantContainer = document.getElementById('variantContainer');
    const variantSelect = document.getElementById('variantSelect');
    const transportMode = document.getElementById('transportMode');
    const quantityInput = document.getElementById('quantityInput');
    const unitBadge = document.getElementById('unitBadge');
    const lqCheckbox = document.getElementById('lqCheckbox');
    const eqCheckbox = document.getElementById('eqCheckbox');
    const emptyUnvCheckbox = document.getElementById('emptyUnvCheckbox');
    const quickPills = document.getElementById('quickPills');
    const resetBtn = document.getElementById('resetBtn');

    // Mixed Load Elements
    const addToListBtn = document.getElementById('addToListBtn');
    const mixedLoadCard = document.getElementById('mixedLoadCard');
    const mixedLoadItems = document.getElementById('mixedLoadItems');
    const mixedTotalPoints = document.getElementById('mixedTotalPoints');
    const clearListBtn = document.getElementById('clearListBtn');

    // Result Elements
    const statusBanner = document.getElementById('statusBanner');
    const statusIcon = document.getElementById('statusIcon');
    const statusTitle = document.getElementById('statusTitle');
    const statusReason = document.getElementById('statusReason');
    const calcFormulaText = document.getElementById('calcFormulaText');
    const pointsValue = document.getElementById('pointsValue');
    const pointsBar = document.getElementById('pointsBar');
    const catBadge = document.getElementById('catBadge');
    const maxLimitText = document.getElementById('maxLimitText');
    const detailUnClass = document.getElementById('detailUnClass');
    const detailName = document.getElementById('detailName');
    const detailNotes = document.getElementById('detailNotes');
    const plateHin = document.getElementById('plateHin');
    const plateUn = document.getElementById('plateUn');
    const detailLabels = document.getElementById('detailLabels');
    const detailTrc = document.getElementById('detailTrc');
    const detailPlateReq = document.getElementById('detailPlateReq');
    const requirementsList = document.getElementById('requirementsList');
    const altRouteBox = document.getElementById('altRouteBox');
    const altRouteText = document.getElementById('altRouteText');

    // State
    let selectedSubstance = substances[0];
    let selectedVariant = selectedSubstance.variants[0];
    let mixedLoad = [];

    // Initialize Quick Pills
    function renderQuickPills() {
        quickPills.innerHTML = '';
        quickList.forEach(un => {
            const item = substances.find(s => s.un === un);
            if (!item) return;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'text-xs bg-slate-950 hover:bg-orange-500/20 hover:border-orange-500/50 text-slate-300 border border-slate-800 px-2.5 py-1.5 rounded-lg transition font-medium';
            btn.textContent = `UN ${item.un}`;
            btn.addEventListener('click', () => selectSubstance(item));
            quickPills.appendChild(btn);
        });
    }

    // Select a substance
    function selectSubstance(substance) {
        selectedSubstance = substance;
        unSearch.value = `UN ${substance.un} – ${substance.name}`;
        autocompleteList.classList.add('hidden');
        unitBadge.textContent = substance.unit;

        // Populate variants if more than 1
        variantSelect.innerHTML = '';
        substance.variants.forEach((v, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = `${v.desc} [BK ${v.tc} | Faktor ${v.factor} | Tunnel ${v.trc}]`;
            variantSelect.appendChild(opt);
        });

        if (substance.variants.length > 1) {
            variantContainer.classList.remove('hidden');
        } else {
            variantContainer.classList.add('hidden');
        }

        selectedVariant = substance.variants[0];
        evaluateTransport();
    }

    // Search & Autocomplete
    unSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
            autocompleteList.classList.add('hidden');
            return;
        }
        const matches = substances.filter(s =>
            s.un.includes(query) ||
            s.name.toLowerCase().includes(query) ||
            (s.notes && s.notes.toLowerCase().includes(query))
        );

        renderAutocomplete(matches);
    });

    unSearch.addEventListener('focus', () => {
        unSearch.select();
    });

    function renderAutocomplete(matches) {
        autocompleteList.innerHTML = '';
        if (matches.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'p-3 text-xs text-slate-400';
            empty.textContent = 'Keine UN-Nummer im lokalen Katalog gefunden.';
            autocompleteList.appendChild(empty);
        } else {
            matches.forEach(item => {
                const row = document.createElement('div');
                row.className = 'p-3 hover:bg-slate-800 cursor-pointer transition flex items-center justify-between gap-2';
                row.innerHTML = `
                    <div>
                        <span class="font-bold text-orange-400 text-sm">UN ${item.un}</span>
                        <span class="text-xs text-slate-200 ml-2 font-medium">${item.name}</span>
                        <span class="block text-[11px] text-slate-400">Klasse ${item.class} • Tunnel ${item.variants[0].trc}</span>
                    </div>
                    <span class="text-[11px] bg-slate-950 px-2 py-1 rounded border border-slate-700 text-slate-300 shrink-0">${item.unit}</span>
                `;
                row.addEventListener('click', () => selectSubstance(item));
                autocompleteList.appendChild(row);
            });
        }
        autocompleteList.classList.remove('hidden');
    }

    document.addEventListener('click', (e) => {
        if (!unSearch.contains(e.target) && !autocompleteList.contains(e.target)) {
            autocompleteList.classList.add('hidden');
        }
    });

    // Event Listeners for changes
    variantSelect.addEventListener('change', (e) => {
        const idx = parseInt(e.target.value, 10);
        selectedVariant = selectedSubstance.variants[idx];
        evaluateTransport();
    });

    [transportMode, quantityInput, lqCheckbox, eqCheckbox, emptyUnvCheckbox].forEach(el => {
        el.addEventListener('input', () => {
            if (el === lqCheckbox && lqCheckbox.checked) eqCheckbox.checked = false;
            if (el === eqCheckbox && eqCheckbox.checked) lqCheckbox.checked = false;
            evaluateTransport();
        });
    });

    // Core ADR / SDR Gotthard Evaluation Logic
    function evaluateTransport() {
        if (!selectedSubstance || !selectedVariant) return;

        const qty = parseFloat(quantityInput.value) || 0;
        const mode = transportMode.value; // 'package', 'tank', 'bulk'
        const isLQ = lqCheckbox.checked;
        const isEQ = eqCheckbox.checked;
        const isEmptyUnv = emptyUnvCheckbox.checked;

        let effectiveTC = selectedVariant.tc;
        let effectiveFactor = selectedVariant.factor;
        let effectiveMax = selectedVariant.maxQty;

        // Ungereinigte leere Verpackungen (1.1.3.6.3 ADR): Falls nicht BK 0, dann BK 4 (Faktor 0)
        if (isEmptyUnv && effectiveTC !== "0") {
            effectiveTC = "4 (Leer)";
            effectiveFactor = 0;
            effectiveMax = "Unbegrenzt";
        }

        const singlePoints = Math.round(qty * effectiveFactor * 10) / 10;
        const totalMixedPoints = mixedLoad.reduce((acc, item) => acc + item.points, 0);
        const activePoints = mixedLoad.length > 0 ? (totalMixedPoints + singlePoints) : singlePoints;

        // Update Substance Header & Orange Plate
        detailUnClass.textContent = `UN ${selectedSubstance.un} • Klasse ${selectedSubstance.class} ${selectedVariant.pg !== '-' ? '• VG ' + selectedVariant.pg : ''}`;
        detailName.textContent = selectedSubstance.name;
        detailNotes.textContent = selectedSubstance.notes || '';
        plateHin.textContent = selectedSubstance.hin;
        plateUn.textContent = selectedSubstance.un;
        detailLabels.textContent = selectedSubstance.labels;
        detailTrc.textContent = selectedVariant.trc;

        // Points UI Update
        pointsValue.textContent = activePoints;
        catBadge.textContent = `Beförderungskategorie: ${effectiveTC}`;
        maxLimitText.textContent = `Freigrenze (Stückgut): ${effectiveMax} ${effectiveMax === 'Unbegrenzt' ? '' : selectedSubstance.unit}`;

        if (mixedLoad.length > 0) {
            calcFormulaText.textContent = `Aktuell (${qty} × ${effectiveFactor}) + Mischladung (${totalMixedPoints} Pkt.)`;
        } else {
            calcFormulaText.textContent = `${qty} ${selectedSubstance.unit} × Faktor ${effectiveFactor} = ${singlePoints} Pkt.`;
        }

        const percentage = Math.min((activePoints / 1000) * 100, 100);
        pointsBar.style.width = `${percentage}%`;
        if (activePoints > 1000 || mode !== 'package') {
            pointsBar.className = 'h-full transition-all duration-300 rounded-full bg-red-500';
        } else if (activePoints >= 800) {
            pointsBar.className = 'h-full transition-all duration-300 rounded-full bg-amber-500';
        } else {
            pointsBar.className = 'h-full transition-all duration-300 rounded-full bg-emerald-500';
        }

        // Determine Tunnel Status (Gotthard = Category E)
        let status = 'ALLOWED'; // ALLOWED, FORBIDDEN, WARNING
        let title = 'DURCHFAHRT ERLAUBT';
        let reason = '';
        let plateRequired = 'NEIN';
        let requirements = [];
        let altRoute = '';

        // 1. Check Excepted Quantities (EQ - 3.5 ADR)
        if (isEQ && mode === 'package') {
            status = 'ALLOWED';
            title = 'DURCHFAHRT ERLAUBT (EQ)';
            reason = 'Freigestellte Mengen gemäss Kapitel 3.5 ADR unterliegen keinen Tunnelbeschränkungen.';
            plateRequired = 'NEIN';
            requirements = [
                'EQ-Kennzeichen auf Versandstücken (3.5.4 ADR)',
                'Maximal 1000 Versandstücke pro Beförderungseinheit',
                'Keine orangefarbenen Warntafeln und kein ADR-Schein nötig'
            ];
        }
        // 2. Check Limited Quantities (LQ - 3.4 ADR)
        else if (isLQ && mode === 'package') {
            if (qty > 8000) {
                status = 'WARNING';
                title = 'PRÜFUNG 8-TONNEN-GRENZE (LQ)';
                reason = 'Achtung (3.4.13 / 8.6.3.3 ADR): Bei Fahrzeugen > 12 t Gesamtmasse mit mehr als 8 Tonnen LQ-Bruttomasse besteht Kennzeichnungspflicht (Raute) und somit Durchfahrtsverbot für Tunnel der Kategorie E!';
                plateRequired = 'LQ-Raute (vorn/hinten)';
                requirements = [
                    'Prüfen ob Höchstmasse des Fahrzeugs > 12 Tonnen beträgt',
                    'Falls Fz > 12 t und LQ > 8 t: Durchfahrt durch den Gotthard VERBOTEN (8.6.4 ADR)',
                    'Falls Fz <= 12 t: Keine Kennzeichnung am Fahrzeug nötig -> Durchfahrt erlaubt'
                ];
                altRoute = 'Bei kennzeichnungspflichtigem LQ-Transport (> 8 t auf > 12 t LKW): Ausweichen via Bahnverlad (Rola / UKV) oder Ladung unter 8 Tonnen reduzieren.';
            } else {
                status = 'ALLOWED';
                title = 'DURCHFAHRT ERLAUBT (LQ)';
                reason = 'Begrenzte Mengen (Kapitel 3.4 ADR) bis 8 Tonnen Bruttomasse sind nicht kennzeichnungspflichtig und dürfen den Gotthard-Tunnel passieren.';
                plateRequired = 'NEIN';
                requirements = [
                    'LQ-Raute (Schwarz/Weiss) auf den Versandstücken angebracht',
                    'Unterweisung des Fahrpersonals nach 1.3 ADR',
                    'Ladungssicherung nach 7.5.7 ADR'
                ];
            }
        }
        // 3. Check Tank or Bulk Transport (1.1.3.6 applies ONLY to packages!)
        else if (mode === 'tank' || mode === 'bulk') {
            plateRequired = 'JA (Warntafeln + Großzettel)';
            if (selectedVariant.trc === '(-)') {
                status = 'ALLOWED';
                title = 'DURCHFAHRT ERLAUBT (Trotz Tank/Schüttgut)';
                reason = `Obwohl Kennzeichnungspflicht besteht (${mode === 'tank' ? 'Tanktransport' : 'Lose Schüttung'}), hat UN ${selectedSubstance.un} den Tunnelcode (-). Es gilt keine Tunnelbeschränkung im Gotthard (Kat. E)!`;
                requirements = [
                    'Orangefarbene Warntafeln + Placards (Großzettel) erforderlich',
                    'ADR-Schulungsbescheinigung (mit Aufbaukurs Tank bei Tanktransport)',
                    'Vollständige ADR-Schutzausrüstung, Feuerlöscher & schriftliche Weisungen'
                ];
            } else {
                status = 'FORBIDDEN';
                title = 'DURCHFAHRT VERBOTEN';
                reason = `Die Freigrenze nach 1.1.3.6 ADR gilt NUR für Versandstücke! ${mode === 'tank' ? 'Tanktransporte' : 'Transporte in loser Schüttung'} sind immer kennzeichnungspflichtig. Durch Tunnelcode ${selectedVariant.trc} ist die Durchfahrt im Gotthard (Kat. E) strikt untersagt.`;
                requirements = [
                    'STOPP: Keine Einfahrt in den Gotthard-Strassentunnel!',
                    'Orangefarbene Warntafeln & Bezettelung (Placards) zwingend',
                    'Vollständige ADR-Ausrüstung, Beförderungspapier & ADR-Schein'
                ];
                altRoute = 'Verbot im Gotthard-Tunnel (Kat. E) und San-Bernardino-Tunnel (Kat. E)! Bei Sommersaison ggf. Passstrasse prüfen (Achtung: SDR Anhang 2 Gewässerschutz-/Streckenverbote beachten!) oder unbegleiteter kombinierter Verkehr (Schiene) / Sonderbewilligung ASTRA.';
            }
        }
        // 4. Standard Package Transport (1.1.3.6 ADR Check)
        else {
            if (activePoints <= 1000 && effectiveTC !== "0") {
                status = 'ALLOWED';
                title = 'DURCHFAHRT ERLAUBT';
                reason = `Freistellung nach 1.1.3.6 ADR ("1000-Punkte-Regel" eingehalten: ${activePoints} von max. 1000 Punkten). Der Transport ist nicht kennzeichnungspflichtig und darf den Gotthard-Tunnel (Kat. E) passieren.`;
                plateRequired = 'NEIN (Tafeln abdecken/klappen!)';
                requirements = [
                    'Beförderungspapier mit Gesamtpunkteanzahl nach 5.4.1.1.1 f) ADR mitführen',
                    '1 geprüfter 2-kg-Feuerlöscher (ABC-Pulver) im Fahrzeug (8.1.4.2 ADR)',
                    'Tragbares Beleuchtungsgerät (ex-geschützt bei Klasse 2.1 / 3) (8.3.4 ADR)',
                    'Unterweisung des Fahrpersonals nach Kapitel 1.3 ADR',
                    'WICHTIG: Eventuell vorhandene orangefarbene Warntafeln MÜSSEN zugeklappt/entfernt sein!'
                ];
            } else {
                // Over 1000 points or TC 0 -> Requires Orange Plates
                plateRequired = 'JA (Vorne & Hinten)';
                if (selectedVariant.trc === '(-)') {
                    status = 'ALLOWED';
                    title = 'DURCHFAHRT ERLAUBT (Ausnahme Tunnelcode)';
                    reason = `Der Transport überschreitet zwar die 1000-Punkte-Grenze (${activePoints} Pkt.) und ist kennzeichnungspflichtig, aber UN ${selectedSubstance.un} besitzt den Tunnelcode (-). Tunnel der Kategorie E dürfen trotz offenen Warntafeln befahren werden!`;
                    requirements = [
                        'Orangefarbene Warntafeln vorne und hinten öffnen (Kennzeichnungspflicht!)',
                        'Gültige ADR-Schulungsbescheinigung (ADR-Schein) des Fahrers',
                        'Schriftliche Weisungen nach 5.4.3 ADR in einer Sprache, die der Fahrer versteht',
                        'Komplette ADR-Schutzausrüstung (Warnweste, Augenspülflüssigkeit, Handschuhe etc.) & Feuerlöscher nach 8.1.4 ADR'
                    ];
                } else {
                    status = 'FORBIDDEN';
                    title = 'DURCHFAHRT VERBOTEN';
                    reason = `Freigrenze nach 1.1.3.6 ADR überschritten (${activePoints} Punkte > 1000 Pkt.). Der Transport ist kennzeichnungspflichtig! Wegen Tunnelbeschränkungscode ${selectedVariant.trc} ist die Durchfahrt durch den Gotthard-Strassentunnel (Kat. E) verboten.`;
                    requirements = [
                        'STOPP: Einfahrt in den Gotthard-Strassentunnel (Kat. E) verboten!',
                        'Orangefarbene Warntafeln vorne und hinten aufgeklappt',
                        'ADR-Schein, Schriftliche Weisungen, Beförderungspapier & volle Schutzausrüstung erforderlich',
                        'Möglichkeit einer Teilentladung prüfen (Reduktion auf <= 1000 Punkte) oder Schienenverlad'
                    ];
                    altRoute = 'Durchfahrt durch Gotthard (Kat. E) und San Bernardino (Kat. E) verboten. Optionen: Schienenverlad (UKV/Rola), Aufteilung der Ladung auf zwei Fahrzeuge (je <= 1000 Pkt.) oder Ausnahmebewilligung des ASTRA (mit gebührenpflichtiger Feuerwehrbegleitung).';
                }
            }
        }

        // Apply Status Styling
        detailPlateReq.textContent = plateRequired;
        detailPlateReq.className = `text-sm font-bold mt-0.5 block ${plateRequired.startsWith('JA') ? 'text-red-400' : 'text-emerald-400'}`;

        if (status === 'ALLOWED') {
            statusBanner.className = 'rounded-2xl p-5 border-2 shadow-xl bg-emerald-950/80 border-emerald-500 text-emerald-100';
            statusIcon.className = 'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-2xl bg-emerald-500 text-slate-950';
            statusIcon.innerHTML = '✓';
            altRouteBox.classList.add('hidden');
        } else if (status === 'FORBIDDEN') {
            statusBanner.className = 'rounded-2xl p-5 border-2 shadow-xl bg-red-950/85 border-red-500 text-red-100';
            statusIcon.className = 'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-2xl bg-red-500 text-white';
            statusIcon.innerHTML = '✕';
            altRouteBox.classList.remove('hidden');
            altRouteText.textContent = altRoute;
        } else {
            statusBanner.className = 'rounded-2xl p-5 border-2 shadow-xl bg-amber-950/85 border-amber-500 text-amber-100';
            statusIcon.className = 'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-2xl bg-amber-500 text-slate-950';
            statusIcon.innerHTML = '!';
            altRouteBox.classList.remove('hidden');
            altRouteText.textContent = altRoute;
        }

        statusTitle.textContent = title;
        statusReason.textContent = reason;

        // Render Requirements List
        requirementsList.innerHTML = '';
        requirements.forEach(req => {
            const li = document.createElement('li');
            li.className = 'flex items-start gap-2';
            li.innerHTML = `<span class="text-orange-400 font-bold mt-0.5">•</span><span>${req}</span>`;
            requirementsList.appendChild(li);
        });
    }

    // Mixed Load Handling
    addToListBtn.addEventListener('click', () => {
        const qty = parseFloat(quantityInput.value) || 0;
        if (qty <= 0) return;

        const isEmptyUnv = emptyUnvCheckbox.checked;
        let factor = selectedVariant.factor;
        if (isEmptyUnv && selectedVariant.tc !== "0") factor = 0;

        const pts = Math.round(qty * factor * 10) / 10;
        mixedLoad.push({
            un: selectedSubstance.un,
            name: selectedSubstance.name,
            pg: selectedVariant.pg,
            qty: qty,
            unit: selectedSubstance.unit,
            factor: factor,
            points: pts,
            trc: selectedVariant.trc
        });

        renderMixedLoad();
        quantityInput.value = 0;
        evaluateTransport();
    });

    clearListBtn.addEventListener('click', () => {
        mixedLoad = [];
        renderMixedLoad();
        evaluateTransport();
    });

    function renderMixedLoad() {
        if (mixedLoad.length === 0) {
            mixedLoadCard.classList.add('hidden');
            return;
        }
        mixedLoadCard.classList.remove('hidden');
        mixedLoadItems.innerHTML = '';
        let sum = 0;

        mixedLoad.forEach((item, index) => {
            sum += item.points;
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800';
            div.innerHTML = `
                <div>
                    <span class="font-bold text-orange-400">UN ${item.un}</span>
                    <span class="text-slate-300 ml-1">${item.qty} ${item.unit} × Faktor ${item.factor}</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="font-bold text-white">${item.points} Pkt.</span>
                    <button type="button" data-idx="${index}" class="text-slate-500 hover:text-red-400 font-bold">✕</button>
                </div>
            `;
            div.querySelector('button').addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-idx'), 10);
                mixedLoad.splice(idx, 1);
                renderMixedLoad();
                evaluateTransport();
            });
            mixedLoadItems.appendChild(div);
        });

        mixedTotalPoints.textContent = `${Math.round(sum * 10) / 10} Punkte`;
    }

    // Reset Handler
    resetBtn.addEventListener('click', () => {
        mixedLoad = [];
        renderMixedLoad();
        transportMode.value = 'package';
        quantityInput.value = 400;
        lqCheckbox.checked = false;
        eqCheckbox.checked = false;
        emptyUnvCheckbox.checked = false;
        selectSubstance(substances[0]);
    });

    // Init
    renderQuickPills();
    selectSubstance(substances[0]);
});
