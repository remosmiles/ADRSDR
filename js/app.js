// Gotthard ADR/SDR Checker - Core Evaluation Engine (ADR 2025 / SDR)

document.addEventListener('DOMContentLoaded', () => {
    const substances = window.ADR_SUBSTANCES || [];
    const quickList = window.QUICK_UN_LIST || [];

    // Mode Toggle Elements
    const modeDbBtn = document.getElementById('modeDbBtn');
    const modeManualBtn = document.getElementById('modeManualBtn');
    const dbSearchSection = document.getElementById('dbSearchSection');
    const manualInputSection = document.getElementById('manualInputSection');

    // Manual Elements
    const manualUnInput = document.getElementById('manualUnInput');
    const manualTrcSelect = document.getElementById('manualTrcSelect');
    const manualTcSelect = document.getElementById('manualTcSelect');

    // DB Input Elements
    const unSearch = document.getElementById('unSearch');
    const autocompleteList = document.getElementById('autocompleteList');
    const variantContainer = document.getElementById('variantContainer');
    const variantSelect = document.getElementById('variantSelect');
    const transportMode = document.getElementById('transportMode');
    const quantityInput = document.getElementById('quantityInput');
    const unitBadge = document.getElementById('unitBadge');
    const lqCheckbox = document.getElementById('lqCheckbox');
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
    const forbiddenHeaderTitle = document.getElementById('forbiddenHeaderTitle');
    const forbiddenRulesList = document.getElementById('forbiddenRulesList');
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
    let isManualMode = false;
    let selectedSubstance = substances[0];
    let selectedVariant = selectedSubstance.variants[0];
    let mixedLoad = [];

    // Mode Switching
    modeDbBtn.addEventListener('click', () => {
        isManualMode = false;
        modeDbBtn.className = 'py-2 px-3 rounded-lg text-xs font-bold bg-orange-600 text-white transition';
        modeManualBtn.className = 'py-2 px-3 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition';
        dbSearchSection.classList.remove('hidden');
        manualInputSection.classList.add('hidden');
        evaluateTransport();
    });

    modeManualBtn.addEventListener('click', () => {
        isManualMode = true;
        modeManualBtn.className = 'py-2 px-3 rounded-lg text-xs font-bold bg-orange-600 text-white transition';
        modeDbBtn.className = 'py-2 px-3 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition';
        manualInputSection.classList.remove('hidden');
        dbSearchSection.classList.add('hidden');
        evaluateTransport();
    });

    [manualUnInput, manualTrcSelect, manualTcSelect].forEach(el => {
        el.addEventListener('input', evaluateTransport);
    });

    function getActiveData() {
        if (!isManualMode) {
            return {
                un: selectedSubstance.un,
                name: selectedSubstance.name,
                class: selectedSubstance.class,
                labels: selectedSubstance.labels,
                hin: selectedSubstance.hin,
                unit: selectedSubstance.unit,
                notes: selectedSubstance.notes,
                pg: selectedVariant.pg,
                tc: selectedVariant.tc,
                factor: selectedVariant.factor,
                maxQty: selectedVariant.maxQty,
                trc: selectedVariant.trc
            };
        } else {
            const tc = manualTcSelect.value;
            const trc = manualTrcSelect.value;
            const un = manualUnInput.value.trim() || 'XXXX';
            const tcMap = {
                "0": { factor: 9999, maxQty: 0 },
                "1": { factor: 50, maxQty: 20 },
                "2": { factor: 3, maxQty: 333 },
                "3": { factor: 1, maxQty: 1000 },
                "4": { factor: 0, maxQty: 999999 }
            };
            return {
                un: un,
                name: `Manuelle ADR-Buchabfrage (UN ${un})`,
                class: "lt. Buch",
                labels: "lt. Spalte 5",
                hin: "XX",
                unit: "L / kg",
                notes: "Werte direkt aus Tabelle A (Spalte 15 ADR-Buch) übernommen.",
                pg: "-",
                tc: tc,
                factor: tcMap[tc].factor,
                maxQty: tcMap[tc].maxQty,
                trc: trc
            };
        }
    }

    // Initialize Quick Pills
    function renderQuickPills() {
        quickPills.innerHTML = '';
        quickList.forEach(un => {
            const item = substances.find(s => s.un === un);
            if (!item) return;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'text-xs bg-slate-950 hover:bg-orange-500/20 hover:border-orange-500/50 text-slate-300 border border-slate-800 px-2.5 py-1.5 rounded-lg transition font-semibold';
            btn.textContent = `UN ${item.un}`;
            btn.addEventListener('click', () => selectSubstance(item));
            quickPills.appendChild(btn);
        });
    }

    function selectSubstance(substance) {
        selectedSubstance = substance;
        unSearch.value = `UN ${substance.un} – ${substance.name}`;
        autocompleteList.classList.add('hidden');
        unitBadge.textContent = substance.unit;

        variantSelect.innerHTML = '';
        substance.variants.forEach((v, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = `${v.desc} ➔ Max. ${v.maxQty === 999999 ? 'Unbegrenzt' : v.maxQty + ' ' + substance.unit} frei (BK ${v.tc} | Faktor ${v.factor})`;
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
        renderAutocomplete(matches, query);
    });

    unSearch.addEventListener('focus', () => unSearch.select());

    function renderAutocomplete(matches, query) {
        autocompleteList.innerHTML = '';
        if (matches.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'p-3.5 text-xs text-slate-300 space-y-2';
            empty.innerHTML = `
                <p>UN-Nummer <strong>"${query}"</strong> ist nicht in den Top-100 hinterlegt.</p>
                <button type="button" id="switchToManualQuick" class="bg-orange-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs block w-full text-center">
                    ➔ Jetzt im Universal-Modus (Spalte 15 aus Buch) prüfen
                </button>
            `;
            autocompleteList.appendChild(empty);
            setTimeout(() => {
                const btn = document.getElementById('switchToManualQuick');
                if (btn) btn.addEventListener('click', () => {
                    autocompleteList.classList.add('hidden');
                    if (/^\d{4}$/.test(query)) manualUnInput.value = query;
                    modeManualBtn.click();
                });
            }, 10);
        } else {
            matches.forEach(item => {
                const v0 = item.variants[0];
                const row = document.createElement('div');
                row.className = 'p-3 hover:bg-slate-800 cursor-pointer transition flex items-center justify-between gap-2';
                row.innerHTML = `
                    <div>
                        <span class="font-black text-orange-400 text-sm">UN ${item.un}</span>
                        <span class="text-xs text-white ml-2 font-bold">${item.name}</span>
                        <span class="block text-[11px] text-slate-400">Klasse ${item.class} • Tunnel ${v0.trc} • Frei bis ${v0.maxQty === 999999 ? 'Unbegrenzt' : v0.maxQty + ' ' + item.unit}</span>
                    </div>
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

    variantSelect.addEventListener('change', (e) => {
        const idx = parseInt(e.target.value, 10);
        selectedVariant = selectedSubstance.variants[idx];
        evaluateTransport();
    });

    [transportMode, quantityInput, lqCheckbox, emptyUnvCheckbox].forEach(el => {
        el.addEventListener('input', evaluateTransport);
    });

    // Build Crystal-Clear Forbidden Conditions Box
    function renderForbiddenConditions(data) {
        forbiddenHeaderTitle.textContent = `Wann ist UN ${data.un} im Gotthard VERBOTEN?`;
        forbiddenRulesList.innerHTML = '';

        if (data.trc === '(-)') {
            forbiddenRulesList.innerHTML = `
                <li class="p-3 bg-emerald-950/70 border border-emerald-600/60 rounded-xl text-emerald-200">
                    <strong>AUSNAHME TUNNELCODE (-):</strong> Dieser Stoff allein ist im Gotthard-Strassentunnel <strong>NIE verboten</strong> – selbst bei über 1000 Punkten, im Tankwagen oder mit offenen Warntafeln darf er durchfahren!
                </li>
            `;
            return;
        }

        const rules = [];
        if (data.tc === "0") {
            rules.push(`🚫 <strong>Ab dem ersten Gramm / Tropfen (> 0 ${data.unit}):</strong> Beförderungskategorie 0 hat KEINE Freigrenze. Immer kennzeichnungspflichtig & im Gotthard immer verboten!`);
        } else if (data.tc === "4") {
            rules.push(`✅ <strong>Als Stückgut:</strong> Unbegrenzte Menge erlaubt (Beförderungskategorie 4 = 0 Punkte).`);
        } else {
            rules.push(`🚫 <strong>Als Stückgut ab mehr als ${data.maxQty} ${data.unit}:</strong> Sobald <strong>> ${data.maxQty} ${data.unit}</strong> geladen sind (= über 1000 Punkte), müssen die Warntafeln geöffnet werden ➔ <strong>Gotthard VERBOTEN!</strong>`);
        }

        rules.push(`🚫 <strong>Im Tank / Tankcontainer:</strong> Immer verboten (1000-Punkte-Regel gilt NICHT für Tanks!).`);
        rules.push(`🚫 <strong>In loser Schüttung (Schüttgut):</strong> Immer verboten.`);
        rules.push(`🚫 <strong>Als Begrenzte Menge (LQ) über 8'000 kg:</strong> Wenn das Trägerfahrzeug > 12 t Gesamtgewicht hat und > 8 Tonnen LQ geladen sind.`);
        rules.push(`🚫 <strong>Bei Mischladung über 1000 Punkte:</strong> Wenn zusammen mit anderem Gefahrgut auf dem LKW insgesamt > 1000 Punkte erreicht werden.`);

        rules.forEach(r => {
            const li = document.createElement('li');
            li.className = 'p-2 bg-slate-950/80 rounded-lg border border-slate-800 leading-snug';
            li.innerHTML = r;
            forbiddenRulesList.appendChild(li);
        });
    }

    // Core Evaluation
    function evaluateTransport() {
        const data = getActiveData();
        renderForbiddenConditions(data);

        const qty = parseFloat(quantityInput.value) || 0;
        const mode = transportMode.value;
        const isLQ = lqCheckbox.checked;
        const isEmptyUnv = emptyUnvCheckbox.checked;

        let effectiveTC = data.tc;
        let effectiveFactor = data.factor;
        let effectiveMax = data.maxQty;

        if (isEmptyUnv && effectiveTC !== "0") {
            effectiveTC = "4 (Leer)";
            effectiveFactor = 0;
            effectiveMax = 999999;
        }

        const singlePoints = effectiveFactor === 9999 ? 9999 : Math.round(qty * effectiveFactor * 10) / 10;
        const totalMixedPoints = mixedLoad.reduce((acc, item) => acc + item.points, 0);
        const activePoints = mixedLoad.length > 0 ? (totalMixedPoints + singlePoints) : singlePoints;

        // Update UI Details
        detailUnClass.textContent = `UN ${data.un} • Klasse ${data.class} ${data.pg !== '-' ? '• VG ' + data.pg : ''}`;
        detailName.textContent = data.name;
        detailNotes.textContent = data.notes || '';
        plateHin.textContent = data.hin;
        plateUn.textContent = data.un;
        detailLabels.textContent = data.labels;
        detailTrc.textContent = data.trc;

        pointsValue.textContent = activePoints >= 9999 ? '∞ (BK 0)' : activePoints;
        catBadge.textContent = `Beförderungskategorie: ${effectiveTC}`;
        maxLimitText.textContent = `Freigrenze Stückgut: ${effectiveMax === 999999 ? 'Unbegrenzt' : 'max. ' + effectiveMax + ' ' + data.unit}`;
        calcFormulaText.textContent = mixedLoad.length > 0
            ? `Aktuell (${singlePoints} Pkt.) + Mischladung (${totalMixedPoints} Pkt.)`
            : `${qty} ${data.unit} × Faktor ${effectiveFactor === 9999 ? '∞' : effectiveFactor} = ${singlePoints >= 9999 ? 'Kennzeichnungspflicht' : singlePoints + ' Pkt.'}`;

        const percentage = Math.min((activePoints / 1000) * 100, 100);
        pointsBar.style.width = `${percentage}%`;
        pointsBar.className = `h-full transition-all duration-300 rounded-full ${(activePoints > 1000 || mode !== 'package' || effectiveTC === '0') ? 'bg-red-500' : (activePoints >= 800 ? 'bg-amber-500' : 'bg-emerald-500')}`;

        let status = 'ALLOWED';
        let title = 'DURCHFAHRT ERLAUBT';
        let reason = '';
        let plateRequired = 'NEIN (Zugeklappt)';
        let requirements = [];
        let altRoute = '';

        // 1. LQ Check
        if (isLQ && mode === 'package') {
            if (qty > 8000) {
                status = 'FORBIDDEN';
                title = 'VERBOTEN (Bei LKW > 12t)';
                reason = `Ab mehr als 8'000 kg Bruttomasse (aktuell ${qty} kg) in Begrenzten Mengen (LQ) ist ein LKW > 12t kennzeichnungspflichtig (LQ-Raute) und darf NICHT durch den Gotthard-Tunnel (Kat. E)!`;
                plateRequired = 'JA (LQ-Raute ab >12t Fz)';
                requirements = [
                    'STOPP bei Fahrzeug > 12 t Gesamtgewicht: Einfahrt in Gotthard verboten (8.6.4 ADR)!',
                    'Nur falls Zugfahrzeug/Lieferwagen <= 12 t Gesamtgewicht: Durchfahrt erlaubt.'
                ];
                altRoute = 'Ladung unter 8 Tonnen Bruttomasse abladen oder Verlad auf die Schiene (Rola / UKV).';
            } else {
                status = 'ALLOWED';
                title = 'DURCHFAHRT ERLAUBT (LQ)';
                reason = `Begrenzte Mengen (LQ) bis 8'000 kg Bruttomasse sind nicht kennzeichnungspflichtig und dürfen durch den Gotthard fahren.`;
                plateRequired = 'NEIN';
                requirements = [
                    'LQ-Rauten auf den Versandstücken vorhanden',
                    'Unterweisung nach 1.3 ADR & Ladungssicherung'
                ];
            }
        }
        // 2. Tank or Bulk
        else if (mode === 'tank' || mode === 'bulk') {
            plateRequired = 'JA (Warntafeln + Placards)';
            if (data.trc === '(-)') {
                status = 'ALLOWED';
                title = 'DURCHFAHRT ERLAUBT';
                reason = `Obwohl ${mode === 'tank' ? 'Tanktransport' : 'Lose Schüttung'} kennzeichnungspflichtig ist, hat UN ${data.un} den Tunnelcode (-). Kein Tunnelverbot im Gotthard!`;
                requirements = ['Offene Warntafeln + Grosszettel (Placards)', 'ADR-Schein & volle Ausrüstung'];
            } else {
                status = 'FORBIDDEN';
                title = 'DURCHFAHRT VERBOTEN!';
                reason = `STOPP! ${mode === 'tank' ? 'Tanktransporte' : 'Transporte in loser Schüttung'} fallen NICHT unter die 1000-Punkte-Freigrenze! Sie sind immer kennzeichnungspflichtig und mit Tunnelcode ${data.trc} im Gotthard (Kat. E) strikt verboten.`;
                requirements = [
                    'KEINE EINFAHRT in den Gotthard-Strassentunnel!',
                    'Orangefarbene Warntafeln & Placards zwingend',
                    'ADR-Schein (inkl. Tankkurs bei Tank), Schriftliche Weisungen & volle ADR-Ausrüstung'
                ];
                altRoute = 'Schienenverlad (UKV/Rola) oder im Sommer Prüfung der Passstrasse (Achtung: SDR Anhang 2 Gewässerschutzverbote beachten!).';
            }
        }
        // 3. Standard Package (1.1.3.6 ADR)
        else {
            if (activePoints <= 1000 && effectiveTC !== "0") {
                status = 'ALLOWED';
                title = 'DURCHFAHRT ERLAUBT';
                reason = `Freigrenze nach 1.1.3.6 ADR eingehalten (${activePoints} von max. 1000 Punkten | Grenze bei ${effectiveMax === 999999 ? 'Unbegrenzt' : effectiveMax + ' ' + data.unit}). Keine Warntafeln nötig ➔ Freie Fahrt durch den Gotthard!`;
                plateRequired = 'NEIN (Zuklappen!)';
                requirements = [
                    'Beförderungspapier mit Punkteberechnung nach 5.4.1.1.1 f) ADR',
                    'Mindestens 1 geprüfter 2-kg-Feuerlöscher im Fahrzeug',
                    'WICHTIG: Orangefarbene Warntafeln müssen zugeklappt/abgedeckt sein!'
                ];
            } else {
                plateRequired = 'JA (Vorne & Hinten offen!)';
                if (data.trc === '(-)') {
                    status = 'ALLOWED';
                    title = 'ERLAUBT (Trotz Warntafel!)';
                    reason = `Über 1000 Punkte (${activePoints} Pkt. -> Warntafeln müssen offen sein!), ABER UN ${data.un} hat den Tunnelcode (-). Durchfahrt durch den Gotthard ist erlaubt!`;
                    requirements = [
                        'Orangefarbene Warntafeln vorne & hinten öffnen!',
                        'Gültiger ADR-Schein, Schriftliche Weisungen & komplette Schutzausrüstung an Bord'
                    ];
                } else {
                    status = 'FORBIDDEN';
                    title = 'DURCHFAHRT VERBOTEN!';
                    reason = `STOPP! Menge überschreitet die Freigrenze von ${effectiveMax} ${data.unit} (${activePoints} Punkte > 1000 Pkt.). Das Fahrzeug ist kennzeichnungspflichtig! Mit Tunnelcode ${data.trc} ist der Gotthard-Tunnel (Kat. E) VERBOTEN.`;
                    requirements = [
                        'STOPP: Einfahrt in den Gotthard-Strassentunnel (Kat. E) verboten!',
                        'Warntafeln offen, ADR-Schein, Schriftliche Weisungen & volle Schutzausrüstung Pflicht',
                        `Um durchfahren zu dürfen, dürften maximal ${effectiveMax} ${data.unit} (<= 1000 Pkt.) geladen sein.`
                    ];
                    altRoute = `Entweder Teilmenge abladen (auf maximal ${effectiveMax} ${data.unit} reduzieren), auf zwei Fahrzeuge aufteilen oder Schienenverlad (Rola/UKV).`;
                }
            }
        }

        detailPlateReq.textContent = plateRequired;
        detailPlateReq.className = `text-sm font-bold mt-0.5 block ${plateRequired.startsWith('JA') ? 'text-red-400' : 'text-emerald-400'}`;

        if (status === 'ALLOWED') {
            statusBanner.className = 'rounded-2xl p-5 border-2 shadow-2xl bg-emerald-950/90 border-emerald-500 text-emerald-100';
            statusIcon.className = 'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-black text-3xl bg-emerald-500 text-slate-950';
            statusIcon.textContent = '✓';
            altRouteBox.classList.add('hidden');
        } else {
            statusBanner.className = 'rounded-2xl p-5 border-2 shadow-2xl bg-red-950/95 border-red-500 text-red-100';
            statusIcon.className = 'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-black text-3xl bg-red-600 text-white';
            statusIcon.textContent = '✕';
            altRouteBox.classList.remove('hidden');
            altRouteText.textContent = altRoute;
        }

        statusTitle.textContent = title;
        statusReason.textContent = reason;

        requirementsList.innerHTML = '';
        requirements.forEach(req => {
            const li = document.createElement('li');
            li.className = 'flex items-start gap-2';
            li.innerHTML = `<span class="text-orange-400 font-bold">•</span><span>${req}</span>`;
            requirementsList.appendChild(li);
        });
    }

    // Mixed Load
    addToListBtn.addEventListener('click', () => {
        const data = getActiveData();
        const qty = parseFloat(quantityInput.value) || 0;
        if (qty <= 0) return;

        let factor = data.factor;
        if (emptyUnvCheckbox.checked && data.tc !== "0") factor = 0;

        const pts = factor === 9999 ? 9999 : Math.round(qty * factor * 10) / 10;
        mixedLoad.push({
            un: data.un,
            qty: qty,
            unit: data.unit,
            factor: factor,
            points: pts
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
                    <span class="text-slate-300 ml-1">${item.qty} ${item.unit} × Faktor ${item.factor === 9999 ? '∞' : item.factor}</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="font-bold text-white">${item.points >= 9999 ? 'Warntafel!' : item.points + ' Pkt.'}</span>
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

        mixedTotalPoints.textContent = sum >= 9999 ? 'Kennzeichnungspflicht (> 1000)' : `${Math.round(sum * 10) / 10} Punkte`;
    }

    resetBtn.addEventListener('click', () => {
        mixedLoad = [];
        renderMixedLoad();
        transportMode.value = 'package';
        quantityInput.value = 400;
        lqCheckbox.checked = false;
        emptyUnvCheckbox.checked = false;
        modeDbBtn.click();
        selectSubstance(substances[0]);
    });

    renderQuickPills();
    selectSubstance(substances[0]);
});
