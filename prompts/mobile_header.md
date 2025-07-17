Look at `prompts/prompt.md` to see the core task.

It's implemented in `content.js` and `manifest.json`.

Update `content.js` so that the "mobile" header that appears on a narrow window is also hidden by default.

It will look something like this:

```html
<header class="mob_header">
    <div class="html-header-logo">
      <a href="https://arxiv.org/">
        <img alt="logo" class="logomark" role="presentation" width="100" src="https://services.dev.arxiv.org/html/static/arxiv-logomark-small-white.svg">
        <span class="sr-only">Back to arXiv</span>
      </a>
    </div>

    <!--TOC, dark mode, links-->
    <div class="html-header-nav">
      <!--back to abstract-->
      
        <a class="nav-link ar5iv-footer-button hover-effect" aria-label="Back to abstract page" href="https://arxiv.org/abs/2506.01937v1#S1">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512" fill="#ffffff" aria-hidden="true">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"></path>
        </svg>
        </a>
      <!--dark mode-->
      <a class="ar5iv-toggle-color-scheme" href="javascript:toggleColorScheme()" title="Toggle dark/light mode" aria-label="System preference">
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
      <!--nav-->
      <button class="navbar-toggler ar5iv-footer-button" type="button" data-bs-theme="dark" data-bs-toggle="collapse" aria-expanded="false" data-bs-target=".ltx_page_main &gt;.ltx_TOC.mobile" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" style="border:none; margin-right: 0em;">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512" aria-hidden="true" role="img" fill="#ffffff"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
      </button>
    </div>
    </header>
  ```