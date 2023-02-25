// ==UserScript==
// @name         Neptun Rice
// @namespace    https://glorantv.hu/
// @homepage     https://github.com/glorantq/neptun-rice
// @version      v1.3.7
// @description  Extensive theming for Neptun (dark base only)
// @author       Gerber Lóránt Viktor
// @match        https://neptun.elte.hu/*
// @match        https://*.neptun.elte.hu/*
// @grant        GM.addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @run-at       document-start
// @updateURL    https://github.com/glorantq/neptun-rice/releases/latest/download/Neptun.Rice.user.js
// @downloadURL  https://github.com/glorantq/neptun-rice/releases/latest/download/Neptun.Rice.user.js
// @supportURL   https://github.com/glorantq/neptun-rice/issues
// ==/UserScript==

(async function() {
    'use strict';

    let textColor = await GM.getValue("textColor", "#dddddd");
    let darkText = await GM.getValue("darkText", "#121212");
    let backgroundColor = await GM.getValue("backgroundColor", "#1f1e1e");
    let darkerBackground = await GM.getValue("darkerBackground", "#171616");

    let neptunBorderColor = await GM.getValue("neptunBorderColor", "#232222");
    let neptunLightGray = await GM.getValue("neptunLightGray", "#313131");
    let neptunDarkGray = await GM.getValue("neptunDarkGray", "#121212");
    let neptunAlertBackground = await GM.getValue("neptunAlertBackground", "#FFDCA9");
    let neptunAlertBorder = await GM.getValue("neptunAlertBorder", "#FAAB78");
    let neptunLighterGray = await GM.getValue("neptunLighterGray", "#474747");
    let neptunMidDark = await GM.getValue("neptunMidDark", "#232222");

    let neptunPrimary = await GM.getValue("neptunPrimary", "#EB8242");
    let neptunPrimaryDark = await GM.getValue("neptunPrimaryDark", "#C9753D");
    let neptunPrimaryLight = await GM.getValue("neptunPrimaryLight", "#F1AE89");

    let npuGreen = await GM.getValue("npuGreen", "#83B582");
    let npuYellow = await GM.getValue("npuYellow", "#FCDDB0");
    let npuRed = await GM.getValue("npuRed", "#EF4B4B");

    let neptunFont = `system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

    let cssBaseUrl = `https://rawcdn.githack.com/glorantq/neptun-rice/${GM.info.script.version}/css`;
    if(GM.info.script.version === "local") {
        cssBaseUrl = "http://127.0.0.1:8080/css"
    }

    let loginCssUrl = await GM.getValue("loginCssUrl", `${cssBaseUrl}/ndm_login.css`);
    let neptunCssUrl = await GM.getValue("neptunCssUrl", `${cssBaseUrl}/ndm_neptun.css`);
    let imagesCssUrl = await GM.getValue("imagesCssUrl", `${cssBaseUrl}/ndm_images.css`);

    let injectorCss = String.raw`
    @import url("${loginCssUrl}");
    @import url("${imagesCssUrl}");
    @import url("${neptunCssUrl}");

    :root {
        --textColor: ${textColor};
        --backgroundColor: ${backgroundColor};
        --darkerBackground: ${darkerBackground};
        --neptunBorderColor: ${neptunBorderColor};
        --neptunLightGray: ${neptunLightGray};
        --neptunDarkGray: ${neptunDarkGray};
        --neptunAlertBackground: ${neptunAlertBackground};
        --neptunAlertBorder: ${neptunAlertBorder};
        --neptunLighterGray: ${neptunLighterGray};
        --neptunMidDark: ${neptunMidDark};
        --neptunPrimary: ${neptunPrimary};
        --neptunPrimaryDark: ${neptunPrimaryDark};
        --neptunPrimaryLight: ${neptunPrimaryLight};
        --npuGreen: ${npuGreen};
        --npuYellow: ${npuYellow};
        --npuRed: ${npuRed};
        --neptunFont: ${neptunFont};
        --darkText: ${darkText};
    }
    `;

    console.log("[Neptun Rice] Injecting CSS");

    let addCss = (css) => {
        let styleElement = document.createElement("style");
        styleElement.innerHTML = css;
        styleElement.className = "ndm-style";
        document.head.appendChild(styleElement);
    };

    addCss(injectorCss);

    window.addEventListener("load", () => {
        console.log("[Neptun Rice] Window loaded, continuing");

        let changeGadgetButton = (title, newSource) => {
            for(let button of document.getElementsByClassName("gadgetbutton")) {
                if(button.title === title) {
                    button.src = newSource;
                }
            }
        };

        console.log("[Neptun Rice] Performing DOM hacks");

        changeGadgetButton("Bezárás", "https://glorantv.web.elte.hu/neptun_assets/16_ghb_close.png");
        changeGadgetButton("Frissítés", "https://glorantv.web.elte.hu/neptun_assets/16_ghb_refresh.png");

        let footer = document.createElement("footer");
        footer.id = "ndm_footer";

        let attribution1 = document.createElement("div");
        attribution1.id = "ndm_attribution1";

        let scriptName = document.createElement("a");
        scriptName.href = "https://github.com/glorantq/neptun-rice";
        scriptName.target = "_blank";
        scriptName.innerText = `${GM.info.script.name} ${GM.info.script.version}:`;

        let settingsButton = document.createElement("a");
        settingsButton.innerText = "Settings";

        attribution1.appendChild(scriptName);
        attribution1.appendChild(settingsButton);

        let attribution2 = document.createElement("span");
        attribution2.innerHTML = `Some icons on this page are used under license from <a href="https://icons8.com/">Icons8</a>`;

        footer.appendChild(attribution1);
        footer.appendChild(attribution2);

        let dialogContainer = document.createElement("div");
        dialogContainer.id = "ndm_dialog_container";

        let settingsDialog = document.createElement("div");
        settingsDialog.title = `${GM.info.script.name} Settings`;
        settingsDialog.id = "ndm_settings_dialog";
        settingsDialog.innerHTML = `
<div id="ndm_settings_inner">
<div class="ndm_property_wrapper">
<h2>Theme colours</h2>
<ul class="ndm_property_list">
    <li><span>Primary</span><input type="color" value="${neptunPrimary}" name="neptunPrimary"></li>
    <li><span>Primary (dark)</span><input type="color" value="${neptunPrimaryDark}" name="neptunPrimaryDark"></li>
    <li><span>Primary (light)</span><input type="color" value="${neptunPrimaryLight}" name="neptunPrimaryLight"></li>
</ul>
</div>
<div class="ndm_property_wrapper">
<h2>Neptun PowerUp! colours</h2>
<ul class="ndm_property_list">
<li><span>Green</span><input type="color" value="${npuGreen}" name="npuGreen"></li>
<li><span>Yellow</span><input type="color" value="${npuYellow}" name="npuYellow"></li>
<li><span>Red</span><input type="color" value="${npuRed}" name="npuRed"></li>
</ul>
</div>
<div class="ndm_property_wrapper">
<h2>Common base colours</h2>
<ul class="ndm_property_list">
<li><span>Text colour</span><input type="color" value="${textColor}" name="textColor"></li>
<li><span>Text colour (dark)</span><input type="color" value="${darkText}" name="darkText"></li>
<li><span>Background colour</span><input type="color" value="${backgroundColor}" name="backgroundColor"></li>
<li><span>Background colour (darker)</span><input type="color" value="${darkerBackground}" name="darkerBackground"></li>
</ul>
</div>
<div class="ndm_property_wrapper">
<h2>Neptun base colours</h2>
<ul class="ndm_property_list">
<li><span>Lighter grey</span><input type="color" value="${neptunLighterGray}" name="neptunLighterGray"></li>
<li><span>Light grey</span><input type="color" value="${neptunLightGray}" name="neptunLightGray"></li>
<li><span>Middle grey</span><input type="color" value="${neptunMidDark}" name="neptunMidDark"></li>
<li><span>Dark grey</span><input type="color" value="${neptunDarkGray}" name="neptunDarkGray"></li>
<li><span>Border colour</span><input type="color" value="${neptunBorderColor}" name="neptunBorderColor"></li>
<li><span>Alert background</span><input type="color" value="${neptunAlertBackground}" name="neptunAlertBackground"></li>
<li><span>Alert border</span><input type="color" value="${neptunAlertBorder}" name="neptunAlertBorder"></li>
</ul>
</div>
<div class="ndm_property_wrapper">
<h2>Advanced</h2>
<ul class="ndm_property_list">
<li><span>Login page stylesheet</span><input type="text" value="${loginCssUrl}" name="loginCssUrl"></li>
<li><span>Neptun stylesheet</span><input type="text" value="${neptunCssUrl}" name="neptunCssUrl"></li>
<li><span>Images stylesheet</span><input type="text" value="${imagesCssUrl}" name="imagesCssUrl"></li>
</ul>
</div>
<div class="ndm_property_wrapper">
<h2>Miscellaneous</h2>
<ul class="ndm_property_list">
<li><span>Version</span><span>${GM.info.script.version}</span></li>
<li><span>Reset to default</span><a class="GadgetMenuItem" id="ndm_reset_colors_button">Reset</a></li>
<li><span>Export theme</span><a class="GadgetMenuItem" id="ndm_export_button">Export</a></li>
<li><span>Import theme</span><a class="GadgetMenuItem" id="ndm_import_button">Import</a></li>
</ul>
</div>
</div>
<div id="ndm_settings_buttons">
<button class="button" type="button" id="ndm_settings_close">Close</button><button class="button" type="button" id="ndm_settings_save">Save</button>
</div>
        `;

        console.log("[Neptun Rice] Creating footer");

        document.body.appendChild(footer);

        console.log("[Neptun Rice] Creating settings dialog")
        dialogContainer.appendChild(settingsDialog);
        document.body.appendChild(dialogContainer);

        let listProperties = () => {
            return document.querySelectorAll(".ndm_property_list > li input");
        };

        let resetColors = async () => {
            if(!confirm("Do you really want to delete all saved settings?")) {
                return;
            }

            for(let setting of listProperties()) {
                await GM.deleteValue(setting.name);
            }

            alert("Deleted all saved colours!");
            window.location.reload();
        }

        document.getElementById("ndm_reset_colors_button").onclick = resetColors;

        let exportTheme = () => {
            let savedTheme = {};

            for(let setting of listProperties()) {
                savedTheme[setting.name] = setting.value;
            }

            prompt("Theme data:", JSON.stringify(savedTheme));
        }

        document.getElementById("ndm_export_button").onclick = exportTheme;

        let importTheme = () => {
            let themeData = prompt("Theme data:");

            if(themeData != null) {
                let theme = JSON.parse(themeData);

                for(let setting in theme) {
                    document.querySelector(`.ndm_property_list > li input[name=${setting}]`).value = theme[setting];
                }
            }
        }

        document.getElementById("ndm_import_button").onclick = importTheme;

        let saveColors = async () => {
            for(let setting of listProperties()) {
                console.log(`${setting.name} => ${setting.value}`);
                await GM.setValue(setting.name, setting.value);
            }

            window.location.reload();
        }

        let openSettingsDialog = () => {
            dialogContainer.className = "ndm-dialog-visible";
        }

        let closeSettingsDialog = () => {
            dialogContainer.className = "";
        }

        settingsButton.onclick = openSettingsDialog;

        document.getElementById("ndm_settings_close").onclick = closeSettingsDialog;
        document.getElementById("ndm_settings_save").onclick = () => {
            setTimeout(saveColors, 1);
        };

        console.log("[Neptun Rice] Done");
    });
})();