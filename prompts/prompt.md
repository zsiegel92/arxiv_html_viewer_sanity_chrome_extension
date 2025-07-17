# Task

Look at the project in `../pr_viewer` to see how to build a Chrome extension.

Make a Chrome extension so that when I'm at a URL matching `https://arxiv.org/html/...`, some pre-defined elements are `display: none` by default and instead there is just a "UI ENABLED" toggle in the bottom-right that can toggle them back on, and it only shows if I move my mouse near the bottom-right.


## Elements to hide


### Header

The header, which will look something like this:
```html
<header class="desktop_header">
    <div class="html-header-logo">
      <a href="https://arxiv.org/">
          <img alt="logo" class="logo" role="presentation" width="100" src="https://services.dev.arxiv.org/html/static/arxiv-logo-one-color-white.svg">
          <span class="sr-only">Back to arXiv</span>
      </a>
    </div>
    <div class="html-header-message" role="banner">
        <p>This is <strong>experimental HTML</strong> to improve accessibility. We invite you to report rendering errors. <span class="sr-only">Use Alt+Y to toggle on accessible reporting links and Alt+Shift+Y to toggle off.</span> Learn more <a href="https://info.arxiv.org/about/accessible_HTML.html" target="_blank">about this project</a> and <a href="https://info.arxiv.org/help/submit_latex_best_practices.html" target="_blank">help improve conversions</a>.
        </p>
    </div>
    <nav class="html-header-nav">
      <a class="ar5iv-footer-button hover-effect" href="https://info.arxiv.org/about/accessible_HTML.html" target="_blank">Why HTML?</a>
      <a class="ar5iv-footer-button hover-effect" target="_blank" href="#myForm" onclick="event.preventDefault(); var modal = document.getElementById('myForm'); modal.style.display = 'block'; bugReportState.setInitiateWay('Header');">Report Issue</a>
      <a class="ar5iv-footer-button hover-effect" href="https://arxiv.org/abs/2506.01937v1">Back to Abstract</a>
      <a class="ar5iv-footer-button hover-effect" href="https://arxiv.org/pdf/2506.01937v1" target="_blank">Download PDF</a>
      <a class="ar5iv-toggle-color-scheme" href="javascript:toggleColorScheme()" title="Toggle dark/light mode">
        <label id="automatic-tog" class="toggle-icon" title="Switch to light mode" for="__palette_3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.3 16-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69m-9.15 3.96h2.3L12 9l-1.15 3.65Z"></path></svg>
        </label>
        <label id="light-tog" class="toggle-icon" title="Switch to dark mode" for="__palette_1" hidden="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69Z"></path></svg>
        </label>
        <label id="dark-tog" class="toggle-icon" title="Switch to system preference" for="__palette_2" hidden="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12c0-2.42-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69Z"></path></svg>
        </label>
      </a>
    </nav></header>
```

### "Report Issue" button

The "Report Issue" button, which will look something like this:
```html
<a class="ar5iv-footer-button hover-effect" target="_blank" href="#myForm" onclick="event.preventDefault(); var modal = document.getElementById('myForm'); modal.style.display = 'block'; bugReportState.setInitiateWay('Header');">Report Issue</a>
```

### "Why HTML?" button

The "Why HTML?" button, which will look something like this:
```html
<button type="button" class="btn btn-primary hover-rp-button" id="openForm">Report Issue</button>
```