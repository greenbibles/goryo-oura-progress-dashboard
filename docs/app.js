(() => {
  "use strict";

  const data = window.PROGRESS_DATA;
  if (!data || !data.project) {
    document.body.textContent = "Dashboard data could not be loaded.";
    throw new Error("window.PROGRESS_DATA is required");
  }

  const UI_TEXT = {
    en: {
      calendarTitleLabel: "Work calendar",
      eyebrowBrand: "ONE CONTRACT · TWO SITES", statusEyebrow: "CURRENT STATUS", compareEyebrow: "SITE OVERVIEW", compareSites: "Compare the two sites", workEyebrow: "WORK SCHEDULE", calendarEyebrow: "WORK CALENDAR", actualEyebrow: "VERIFIED ACTUALS", upcomingEyebrow: "UPCOMING PLAN", photoEyebrow: "PHOTO JOURNAL", materialsEyebrow: "MATERIAL REFERENCES", plannedStart: "Initial planned start", plannedStartNote: "November 13 construction plan", allSites: "All sites", nextPlan: "Next plan", noUpcomingPlan: "No upcoming plan", siteCount: "{count} sites", siteScope: "View by site", workItem: "Work item", noVerifiedRecords: "No verified work recorded", reviewItems: "Items to confirm", dayLabel: "Check a day", noCalendarEvents: "No entries for this date.", scrollSchedule: "Scroll within the schedule to see later dates.", skipToContent: "Skip to main content",
      asOfLabel: "As of", checking: "Checking", weatherInfo: "Weather", languageSelector: "Language",
      statusCopy: "The timeline is organized from mobilization through the reporting date using verified work records.",
      projectSummaryLabel: "Project summary", contractPeriod: "Contract period", contractPeriodNote: "Period verified from source documents",
      recordStart: "Verified record start", recordStartNote: "First confirmed work date", latestActual: "Latest actual",
      latestActualNote: "Verified from completed-work fields", siteMaps: "Google Maps", openSiteMap: "Open {site} in Google Maps (new tab)", workStream: "Work stream", statusLegendLabel: "Status legend",
      completed: "Completed", inProgress: "In progress", paused: "Paused", planned: "Planned", scheduleLabel: "Work schedule, scrollable",
      calendarNavigationLabel: "Change displayed month", previousMonth: "Previous month", nextMonth: "Next month",
      mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
      latestLog: "Latest work", verifiedHistoryLabel: "Verified work history", upcomingPlan: "Upcoming plan",
      upcomingCaption: "Unverified planned work is kept separate from confirmed actuals.", fieldMaterials: "Registered material references",
      materialsCaption: "Field-readable notes from screened registered documents", photoJournal: "Construction photo journal",
      galleryCaption: "Publication-approved milestone images", galleryPreviewCaption: "Preview-selected milestone images",
      noGalleryPhotos: "No construction photos have been added yet.", noSiteGalleryPhotos: "No construction photos have been added for {site} yet.",
      galleryLabel: "Construction photo gallery", openSelectedPhoto: "Open selected photo", zoom: "Zoom",
      previousPhoto: "Previous photo", nextPhoto: "Next photo", choosePhoto: "Choose a construction photo", closePhoto: "Close enlarged photo",
      dashboardName: "Construction Progress Dashboard", publicOnly: "Showing publication-approved information only", previewOnly: "Local preview · publication approval pending", lastUpdated: "Last updated:",
      pageTitleSuffix: "Construction Progress", waitingForConfirmation: "Awaiting confirmation", verifiedProgress: "Verified progress",
      currentMilestone: "Next milestone", latestActualWithDate: "Latest actual: {date}",
      phaseDateRange: "{status} · {start} – {end}", noPhases: "No work phases are available.",
      calendarTitle: "{month} Work Calendar", plannedWeather: "Planned: {planned} / Weather: {weather}", noRecord: "No record",
      noRecentActuals: "No verified actuals are available.", plannedFallback: "Planned", reviewed: "Registered", needsReview: "Needs review",
      summaryState: "Summary status: {state}", purpose: "Purpose", fieldUse: "How it is used on site", checksBeforeUse: "Checks before use",
      sourceDocument: "Source document", summaryUpdated: "{version} / Summary updated {date}", viewCatalog: "View catalog", viewSds: "View SDS",
      openPhotoNamed: "Open a larger view of {title}", photoTabLabel: "{date} {title}"
    },
    ja: {
      calendarTitleLabel: "工程カレンダー",
      eyebrowBrand: "1契約・2現場", statusEyebrow: "いまの状況", compareEyebrow: "現場別の状況", compareSites: "2現場の比較", workEyebrow: "全体の見通し", calendarEyebrow: "日付で見る工程", actualEyebrow: "実績", upcomingEyebrow: "予定", photoEyebrow: "写真記録", materialsEyebrow: "材料資料", plannedStart: "当初の開始予定", plannedStartNote: "11月13日版施工計画書", allSites: "全体", nextPlan: "次の予定", noUpcomingPlan: "予定の記録なし", siteCount: "{count}現場", siteScope: "現場の切り替え", workItem: "工程", noVerifiedRecords: "確認済みの実績なし", reviewItems: "確認事項", dayLabel: "日付を選ぶ", noCalendarEvents: "この日の記録はありません。", scrollSchedule: "後の日付は工程表の中を横にスクロールして確認できます。", skipToContent: "本文へ移動",
      asOfLabel: "基準日", checking: "確認中", weatherInfo: "天気情報", languageSelector: "言語",
      statusCopy: "確認済みの実績記録をもとに、着工から基準日までの工程を整理しています。",
      projectSummaryLabel: "工事概要", contractPeriod: "契約工期", contractPeriodNote: "根拠資料で確認できた期間",
      recordStart: "実績記録開始", recordStartNote: "最初の確認済み実施日", latestActual: "最新実績",
      latestActualNote: "実施欄などで確認済み", siteMaps: "Google マップ", openSiteMap: "{site}をGoogle マップで開く（新しいタブ）", workStream: "工程の流れ", statusLegendLabel: "状態の凡例",
      completed: "実施済み", inProgress: "進行中", paused: "中断・休工", planned: "予定", scheduleLabel: "横にスクロールできる工程表",
      calendarNavigationLabel: "表示月の切り替え", previousMonth: "前月", nextMonth: "次月",
      mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日",
      latestLog: "直近の作業", verifiedHistoryLabel: "確認済みの作業履歴", upcomingPlan: "今後の予定",
      upcomingCaption: "実施確認前の予定を、実績と分けて掲載しています。", fieldMaterials: "登録材料・資料",
      materialsCaption: "公開条件を確認した登録資料をもとにした現場向けメモ", photoJournal: "写真で見る工事の記録",
      galleryCaption: "公開確認済みの節目写真", galleryPreviewCaption: "プレビュー選定済みの節目写真",
      noGalleryPhotos: "掲載写真はまだありません。", noSiteGalleryPhotos: "{site}の掲載写真はまだありません。",
      galleryLabel: "工事写真ギャラリー", openSelectedPhoto: "選択中の写真を拡大表示", zoom: "拡大",
      previousPhoto: "前の写真", nextPhoto: "次の写真", choosePhoto: "表示する工事写真を選択", closePhoto: "拡大写真を閉じる",
      dashboardName: "工事進捗ダッシュボード", publicOnly: "公開用に限定した情報を表示", previewOnly: "ローカルプレビュー・公開承認待ち", lastUpdated: "最終更新：",
      pageTitleSuffix: "工事進捗", waitingForConfirmation: "確認待ち", verifiedProgress: "確認済み進捗",
      currentMilestone: "次の節目", latestActualWithDate: "最新実績 {date}",
      phaseDateRange: "{status} ・ {start} - {end}", noPhases: "表示できる工程がありません。",
      calendarTitle: "{month}月の工程カレンダー", plannedWeather: "予定：{planned} / 天候：{weather}", noRecord: "記録なし",
      noRecentActuals: "確認済みの実績はありません。", plannedFallback: "予定", reviewed: "登録済み", needsReview: "要確認",
      summaryState: "要約状態：{state}", purpose: "使い道", fieldUse: "現場での使い方", checksBeforeUse: "使用前の確認",
      sourceDocument: "参照資料", summaryUpdated: "{version} / 要約更新 {date}", viewCatalog: "カタログを見る", viewSds: "SDSを見る",
      openPhotoNamed: "{title}の写真を拡大表示", photoTabLabel: "{date} {title}"
    }
  };

  const pageUrl = new URL(window.location.href);
  const language = pageUrl.searchParams.get("lang") === "en" ? "en" : "ja";
  const locale = language === "ja" ? "ja-JP" : "en-US";
  document.documentElement.lang = language;
  const DAY = 86400000;
  const project = data.project;
  const sites = Array.isArray(data.sites) ? data.sites : [];
  const scope = sites.find(site => site.id === pageUrl.searchParams.get("site"))?.id || "all";
  const isVisible = item => scope === "all" || !item.siteId || item.siteId === "common" || item.siteId === scope;
  const list = key => Array.isArray(data[key]) ? data[key].filter(isVisible) : [];
  const phases = list("phases");
  const recent = list("recent");
  const upcomingItems = list("upcoming");
  const materialItems = list("materials");
  const calendarRanges = list("calendarRanges");
  const galleryItems = Array.isArray(data.gallery)
    ? data.gallery.filter(item => scope === "all" || item.siteId === scope)
    : [];
  const translations = data.translations?.[language] || {};

  const element = id => document.getElementById(id);
  const ui = (key, values = {}) => Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    UI_TEXT[language][key] || UI_TEXT.en[key] || key,
  );
  const localize = value => typeof value === "string" ? (translations[value] || value) : value;
  const setText = (id, value) => {
    const target = element(id);
    if (target) target.textContent = localize(value) ?? "";
  };
  document.querySelectorAll("[data-i18n]").forEach(target => { target.textContent = ui(target.dataset.i18n); });
  const publicationStatus = document.querySelector('[data-i18n="publicOnly"]');
  if (publicationStatus && project.publicationReady === false) publicationStatus.textContent = ui("previewOnly");
  const galleryCaption = document.querySelector('[data-i18n="galleryCaption"]');
  if (galleryCaption && project.publicationReady === false) galleryCaption.textContent = ui("galleryPreviewCaption");
  document.querySelectorAll("[data-i18n-aria-label]").forEach(target => { target.setAttribute("aria-label", ui(target.dataset.i18nAriaLabel)); });
  document.querySelectorAll("[data-language]").forEach(button => {
    const active = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", () => {
      if (button.dataset.language === language) return;
      const url = new URL(pageUrl);
      if (button.dataset.language === "en") url.searchParams.set("lang","en");
      else url.searchParams.delete("lang");
      window.location.assign(url.href);
    });
  });
  const parseDate = iso => new Date(`${iso}T00:00:00Z`);
  const formatDate = iso => iso
    ? new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Tokyo" }).format(parseDate(iso))
    : ui("waitingForConfirmation");
  const formatShort = iso => new Intl.DateTimeFormat(locale, {
    month: "short", day: "numeric", weekday: "short", timeZone: "Asia/Tokyo",
  }).format(parseDate(iso));
  const formatUpdatedAt = value => new Intl.DateTimeFormat(locale, {
    year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
    timeZone: "Asia/Tokyo", timeZoneName: "short",
  }).format(new Date(value));
  const appendText = (parent, tagName, text, className) => {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    node.textContent = localize(text);
    parent.appendChild(node);
    return node;
  };

  document.title = `${localize(project.name)} | ${ui("pageTitleSuffix")}`;
  setText("project-mark", project.shortMark || (language === "ja" ? "工" : "W"));
  setText("project-name", project.name);
  setText("as-of", formatDate(project.asOf));
  setText("project-status", project.status);
  setText("current-phase", project.currentPhase);
  if (project.statusCopy) setText("status-copy", project.statusCopy);
  const period = element("contract-period");
  const compactDate = new Intl.DateTimeFormat(locale, {year:"numeric",month:"numeric",day:"numeric",timeZone:"Asia/Tokyo"});
  for (const [index, date] of [project.contractStart,project.contractEnd].entries()) {
    if (index) period.appendChild(document.createTextNode(" – "));
    appendText(period,"span",date ? compactDate.format(parseDate(date)) : ui("waitingForConfirmation"),"contract-date");
  }
  const siteMapLinks = element("site-map-links");
  for (const site of sites) {
    if (!site.mapUrl) continue;
    const link = document.createElement("a");
    link.href = site.mapUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const label = ui("openSiteMap", {site: localize(site.name)});
    link.setAttribute("aria-label", label);
    link.title = label;
    appendText(link, "span", site.shortName || site.name);
    const arrow = appendText(link, "span", "↗");
    arrow.setAttribute("aria-hidden", "true");
    siteMapLinks.appendChild(link);
  }
  setText("updated-at", formatUpdatedAt(project.updatedAt));

  if (typeof project.overallProgress === "number") {
    setText("milestone-label", ui("verifiedProgress"));
    setText("milestone-value", `${project.overallProgress}%`);
  } else {
    setText("milestone-label", ui("currentMilestone"));
    setText("milestone-value", project.currentMilestone || project.currentPhase);
  }
  setText("milestone-note", project.milestoneNote ?? (project.plannedStart ? ui("plannedStartNote") : ""));

  const weatherLink = element("weather-link");
  if (project.weatherUrl && weatherLink) {
    weatherLink.href = project.weatherUrl;
    weatherLink.hidden = false;
  }


  const siteName = id => sites.find(site => site.id === id)?.shortName || "共通";
  const siteMark = id => sites.find(site => site.id === id)?.mark || "共";
  const statusName = status => ui({
    completed: "completed", "in-progress": "inProgress", paused: "paused",
    planned: "planned", "not-started": "waitingForConfirmation",
  }[status] || "waitingForConfirmation");
  const scopeBar = element("site-filters");
  for (const item of [{id:"all", shortName:ui("allSites")}, ...sites]) {
    const link = appendText(scopeBar, "a", item.shortName, "scope-link");
    const url = new URL(pageUrl);
    if (item.id === "all") url.searchParams.delete("site");
    else url.searchParams.set("site", item.id);
    url.hash = "site-scope";
    link.href = url.href;
    if (scope === item.id) link.setAttribute("aria-current", "page");
  }
  setText("active-scope", scope === "all" ? ui("allSites") : siteName(scope));
  setText("planned-start", formatDate(project.plannedStart));
  setText("site-count", ui("siteCount", {count: sites.length}));
  const scopedLatest = recent.map(item => item.date).sort().at(-1);
  setText("last-activity", scopedLatest ? formatDate(scopedLatest) : ui("noVerifiedRecords"));
  const overview = element("site-overview");
  for (const site of sites) {
    const card = document.createElement("article");
    card.className = `site-card panel ${site.id}`;
    const meta = document.createElement("div");
    meta.className = "site-card-meta";
    appendText(meta, "span", site.mark, `site-token ${site.id}`);
    appendText(meta, "span", site.place);
    card.appendChild(meta);
    appendText(card, "h3", site.name);
    const latest = (data.recent || []).filter(event => event.siteId === site.id)
      .sort((a,b) => b.date.localeCompare(a.date))[0];
    appendText(card, "p", latest ? `${formatShort(latest.date)} · ${localize(latest.actual)}` : ui("noVerifiedRecords"), "site-status");
    const next = (data.upcoming || []).filter(event => event.siteId === site.id && event.date >= project.asOf)
      .sort((a,b) => a.date.localeCompare(b.date));
    const nextDate = next[0]?.date;
    const nextLabel = nextDate
      ? `${formatShort(nextDate)} · ${next.filter(event => event.date === nextDate).map(event => localize(event.work)).join(language === "ja" ? "・" : " / ")}`
      : ui("noUpcomingPlan");
    appendText(card, "p", `${ui("nextPlan")}: ${nextLabel}`, "site-next");
    overview.appendChild(card);
  }
  const notes = list("notes");
  const notices = element("site-notes");
  notices.hidden = notes.length === 0;
  for (const item of notes) appendText(element("site-note-list"), "li", item.text);


  const gantt = element("gantt");
  const ganttScale = element("gantt-scale");
  const phaseDates = phases.flatMap(item => [item.start,item.end]).filter(Boolean).sort();
  const startValue = parseDate(project.timelineStart || phaseDates[0] || project.contractStart || project.asOf);
  const endValue = parseDate(project.timelineEnd || phaseDates.at(-1) || project.contractEnd || project.asOf);
  const chartStart = Date.UTC(startValue.getUTCFullYear(),startValue.getUTCMonth(),1);
  const chartEnd = Date.UTC(endValue.getUTCFullYear(),endValue.getUTCMonth()+1,1);
  const chartSpan = Math.max(DAY, chartEnd-chartStart);
  const scaleMonths = [];
  for (let cursor = new Date(chartStart); cursor.getTime() < chartEnd;
    cursor = new Date(Date.UTC(cursor.getUTCFullYear(),cursor.getUTCMonth()+1,1))) {
    scaleMonths.push(cursor);
  }
  element("gantt-content").style.setProperty("--gantt-axis-width", `${scaleMonths.length * 18}rem`);
  const axis = document.createElement("div");
  axis.className = "gantt-axis";
  axis.style.gridTemplateColumns = scaleMonths.map(month =>
    `${new Date(Date.UTC(month.getUTCFullYear(),month.getUTCMonth()+1,0)).getUTCDate()}fr`
  ).join(" ");
  const monthFormatter = new Intl.DateTimeFormat(locale,{year:"numeric",month:"short",timeZone:"UTC"});
  for (const month of scaleMonths) appendText(axis,"span",monthFormatter.format(month));
  appendText(ganttScale,"span",ui("workItem"),"gantt-label");
  ganttScale.appendChild(axis);
  for (const id of ["common", ...sites.map(site=>site.id)]) {
    const items = phases.filter(phase => (phase.siteId || "common") === id);
    if (!items.length) continue;
    const heading = document.createElement("div");
    heading.className = `gantt-group ${id}`;
    appendText(heading,"strong",siteName(id),"gantt-label");
    gantt.appendChild(heading);
    for (const phase of items) {
      const row = document.createElement("div");
      row.className = "gantt-row";
      const label = document.createElement("div");
      label.className = "gantt-label";
      appendText(label,"strong",phase.name);
      appendText(label,"small",localize(phase.label));
      row.appendChild(label);
      const track = document.createElement("div");
      track.className = "gantt-track";
      const segments = Array.isArray(phase.segments) && phase.segments.length
        ? phase.segments : [{start:phase.start,end:phase.end}];
      const dateText = segments.map(segment => segment.start === segment.end
        ? formatShort(segment.start) : `${formatShort(segment.start)} – ${formatShort(segment.end)}`
      ).join(" / ");
      appendText(label,"small",dateText,"gantt-date-label");
      for (const segment of segments) {
        const left = Math.max(0,(parseDate(segment.start).getTime()-chartStart)/chartSpan*100);
        const right = Math.min(100,(parseDate(segment.end).getTime()+DAY-chartStart)/chartSpan*100);
        if (right <= left) continue;
        const bar = document.createElement("div");
        bar.className = `gantt-bar ${phase.status} ${id}`;
        if (phase.id === "oura-equipment") bar.classList.add("scope-pending");
        bar.style.left = `${left}%`;
        bar.style.width = `${right-left}%`;
        bar.title = `${localize(phase.name)} · ${formatShort(segment.start)} – ${formatShort(segment.end)} · ${localize(phase.summary)}`;
        bar.setAttribute("aria-hidden","true");
        track.appendChild(bar);
      }
      row.appendChild(track);
      gantt.appendChild(row);
    }
  }
  if (!phases.length) appendText(gantt,"p",ui("noPhases"),"empty-state");

  const allCalendarDates = [
    project.asOf, project.contractEnd,
    ...calendarRanges.flatMap(item=>[item.start,item.end]),
    ...recent.map(item=>item.date), ...upcomingItems.map(item=>item.date),
  ].filter(Boolean).sort();
  const calendarStart = parseDate(allCalendarDates[0]);
  const calendarEnd = parseDate(allCalendarDates.at(-1));
  const months = [];
  for (let cursor = new Date(Date.UTC(calendarStart.getUTCFullYear(),calendarStart.getUTCMonth(),1));
    cursor <= calendarEnd; cursor = new Date(Date.UTC(cursor.getUTCFullYear(),cursor.getUTCMonth()+1,1))) months.push(cursor);
  let selectedMonth = Math.max(0,months.findIndex(month=>month.toISOString().slice(0,7)===project.asOf.slice(0,7)));
  let selectedDate = project.asOf;
  const calendar = element("calendar");
  const calendarPrev = element("calendar-prev");
  const calendarNext = element("calendar-next");
  const daySelect = element("calendar-day-select");
  const agenda = element("calendar-agenda");
  const eventsFor = key => {
    const ranges = calendarRanges.filter(range=>key>=range.start && key<=range.end);
    const actuals = recent.filter(event=>event.date===key).map(event=>({...event,label:event.actual}));
    return [...ranges,...actuals];
  };
  const renderAgenda = () => {
    agenda.replaceChildren();
    const events = eventsFor(daySelect.value);
    for (const event of events) {
      const row = document.createElement("li");
      const id = event.siteId || "common";
      appendText(row,"span",siteMark(id),`site-token ${id}`);
      appendText(row,"span",`${localize(siteName(id))} · ${localize(event.label)}`);
      appendText(row,"span",event.labelStatus ? localize(event.labelStatus) : statusName(event.status),"event-state");
      agenda.appendChild(row);
    }
    element("calendar-empty").hidden = events.length > 0;
  };
  const renderCalendar = () => {
    const month = months[selectedMonth];
    const year = month.getUTCFullYear();
    const monthIndex = month.getUTCMonth();
    const monthKey = month.toISOString().slice(0,7);
    const days = new Date(Date.UTC(year,monthIndex+1,0)).getUTCDate();
    setText("calendar-month",new Intl.DateTimeFormat(locale,{year:"numeric",month:"long",timeZone:"UTC"}).format(month));
    calendarPrev.disabled = selectedMonth === 0;
    calendarNext.disabled = selectedMonth === months.length-1;
    calendar.replaceChildren();
    daySelect.replaceChildren();
    const lead = (month.getUTCDay()+6)%7;
    for (let i=0;i<lead;i++) calendar.appendChild(Object.assign(document.createElement("div"),{className:"calendar-day empty"}));
    for (let day=1;day<=days;day++) {
      const key = `${monthKey}-${String(day).padStart(2,"0")}`;
      const cell = document.createElement("div");
      cell.className = "calendar-day";
      if (key === project.asOf) cell.classList.add("as-of-day");
      appendText(cell,"span",String(day),"num");
      const events = eventsFor(key);
      const marks = document.createElement("div");
      marks.className = "calendar-marks";
      for (const id of new Set(events.map(event=>event.siteId || "common"))) {
        const count = events.filter(event=>(event.siteId || "common")===id).length;
        const badge = appendText(marks,"span",`${localize(siteMark(id))}${count > 1 ? ` ${count}` : ""}`,`site-token ${id}`);
        badge.title = `${localize(siteName(id))}: ${count}`;
      }
      cell.appendChild(marks);
      calendar.appendChild(cell);
      const option = appendText(daySelect,"option",formatShort(key));
      option.value = key;
    }
    for (let i=0;i<(7-(lead+days)%7)%7;i++) calendar.appendChild(Object.assign(document.createElement("div"),{className:"calendar-day empty"}));
    daySelect.value = selectedDate.startsWith(monthKey) ? selectedDate :
      [...daySelect.options].find(option=>eventsFor(option.value).length)?.value || `${monthKey}-01`;
    renderAgenda();
  };
  daySelect.addEventListener("change",()=>{selectedDate=daySelect.value;renderAgenda();});
  calendarPrev.addEventListener("click",()=>{if(selectedMonth>0){selectedMonth--;renderCalendar();}});
  calendarNext.addEventListener("click",()=>{if(selectedMonth<months.length-1){selectedMonth++;renderCalendar();}});
  renderCalendar();

  const recentLog = element("recent-log");
  recent.forEach(item => {
    const row = document.createElement("div");
    row.className = "log-item";
    appendText(row, "div", formatShort(item.date), "log-date");
    const pin = document.createElement("div");
    pin.className = `log-pin ${item.status}`;
    const body = document.createElement("div");
    body.className = "log-body";
    appendText(body, "strong", localize(siteName(item.siteId)) + " · " + localize(item.actual || ui("noRecord")));
    appendText(body, "small", ui("plannedWeather", { planned: localize(item.planned || "-"), weather: localize(item.weather || "-") }));
    row.append(pin, body);
    recentLog.appendChild(row);
  });
  if (!recent.length) appendText(recentLog, "p", ui("noRecentActuals"), "empty-state");

  const upcomingLog = element("upcoming-log");
  if (upcomingItems.length) {
    upcomingItems.forEach(item => {
      const row = document.createElement("div");
      row.className = "upcoming-item";
      appendText(row, "div", formatShort(item.date), "upcoming-date");
      const body = document.createElement("div");
      appendText(body, "strong", localize(siteName(item.siteId)) + " · " + localize(item.work));
      appendText(body, "small", item.note || ui("plannedFallback"));
      row.appendChild(body);
      upcomingLog.appendChild(row);
    });
  } else {
    element("upcoming-section")?.setAttribute("hidden", "");
  }

  const materialsList = element("materials-list");
  if (materialItems.length) {
    materialItems.forEach(item => {
      const card = document.createElement("details");
      card.className = "material-card";

      const summary = document.createElement("summary");
      const heading = document.createElement("span");
      heading.className = "material-heading";
      appendText(heading, "span", item.category, "material-category");
      appendText(heading, "strong", item.name);
      const state = appendText(summary, "span", item.reviewStatus === "reviewed" ? ui("reviewed") : ui("needsReview"), `material-state ${item.reviewStatus}`);
      state.setAttribute("aria-label", ui("summaryState", { state: state.textContent }));
      summary.prepend(heading);

      const body = document.createElement("div");
      body.className = "material-body";

      const purpose = document.createElement("section");
      appendText(purpose, "h3", ui("purpose"));
      appendText(purpose, "p", item.purpose);

      const usage = document.createElement("section");
      appendText(usage, "h3", ui("fieldUse"));
      appendText(usage, "p", item.usageSummary);

      const checks = document.createElement("section");
      appendText(checks, "h3", ui("checksBeforeUse"));
      const checkList = document.createElement("ul");
      (Array.isArray(item.keyChecks) ? item.keyChecks : []).forEach(check => appendText(checkList, "li", check));
      checks.appendChild(checkList);

      const source = document.createElement("div");
      source.className = "material-source";
      const sourceCopy = document.createElement("p");
      appendText(sourceCopy, "span", ui("sourceDocument"));
      appendText(sourceCopy, "strong", item.sourceTitle);
      appendText(sourceCopy, "small", ui("summaryUpdated", { version: localize(item.sourceVersion), date: formatDate(item.updatedAt) }));
      const links = document.createElement("div");
      links.className = "material-links";
      const appendDocumentLink = (href, label) => {
        if (!href) return;
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label;
        links.appendChild(link);
      };
      appendDocumentLink(item.catalogPath, ui("viewCatalog"));
      appendDocumentLink(item.safetyPath, ui("viewSds"));
      source.append(sourceCopy, links);
      body.append(purpose, usage, checks, source);
      card.append(summary, body);
      materialsList.appendChild(card);
    });
  } else {
    element("materials-section")?.setAttribute("hidden", "");
  }

  const calendarCard = document.querySelector(".calendar-card");
  const logCard = document.querySelector(".log-card");
  const syncLogHeight = () => {
    if (!calendarCard || !logCard) return;
    if (window.matchMedia("(min-width: 901px)").matches) {
      logCard.style.height = `${Math.round(calendarCard.getBoundingClientRect().height)}px`;
    } else {
      logCard.style.removeProperty("height");
    }
  };
  syncLogHeight();
  if ("ResizeObserver" in window && calendarCard) new ResizeObserver(syncLogHeight).observe(calendarCard);
  window.addEventListener("resize", syncLogHeight);

  const gallery = element("gallery");
  const dialog = element("gallery-dialog");
  if (!galleryItems.length) {
    const empty = element("gallery-empty");
    empty.textContent = scope === "all"
      ? ui("noGalleryPhotos")
      : ui("noSiteGalleryPhotos", { site: localize(siteName(scope)) });
    empty.hidden = false;
    dialog?.remove();
    return;
  }
  gallery.hidden = false;
  const galleryMain = element("gallery-main");
  const mainImage = element("gallery-main-image");
  const galleryTabs = element("gallery-tabs");
  let selectedPhoto = 0;

  const fillPhotoText = (prefix, item) => {
    const photoSite = sites.find(site => site.id === item.siteId);
    element(`${prefix}-site`).hidden = !photoSite;
    setText(`${prefix}-site`, photoSite?.shortName);
    setText(`${prefix}-date`, formatDate(item.date));
    setText(`${prefix}-phase`, item.phase);
    setText(`${prefix}-title`, item.title);
    setText(`${prefix}-description`, item.description);
  };
  const openPhoto = item => {
    element("dialog-image").src = item.image;
    element("dialog-image").alt = localize(item.alt);
    fillPhotoText("dialog", item);
    dialog.showModal();
  };
  const selectPhoto = index => {
    selectedPhoto = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[selectedPhoto];
    mainImage.src = item.image;
    mainImage.alt = localize(item.alt);
    setText("gallery-counter", `${String(selectedPhoto + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`);
    fillPhotoText("gallery", item);
    galleryMain.setAttribute("aria-label", ui("openPhotoNamed", { title: localize(item.title) }));
    galleryTabs.querySelectorAll("button").forEach((button, buttonIndex) => {
      const active = buttonIndex === selectedPhoto;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
  };

  galleryItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo-tab";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-label", ui("photoTabLabel", { date: formatDate(item.date), title: localize(item.title) }));
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    const copy = document.createElement("span");
    appendText(copy, "time", item.date.slice(5).replace("-", "/"));
    appendText(copy, "strong", item.title);
    button.append(image, copy);
    button.addEventListener("click", () => selectPhoto(index));
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) button.addEventListener("pointerenter", () => selectPhoto(index));
    galleryTabs.appendChild(button);
  });

  selectPhoto(0);
  galleryMain.addEventListener("click", () => openPhoto(galleryItems[selectedPhoto]));
  element("gallery-prev").addEventListener("click", () => selectPhoto(selectedPhoto - 1));
  element("gallery-next").addEventListener("click", () => selectPhoto(selectedPhoto + 1));
  gallery.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { event.preventDefault(); selectPhoto(selectedPhoto - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); selectPhoto(selectedPhoto + 1); }
  });
  element("dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
})();
