# Neptun Rice ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/glorantq/neptun-rice?include_prereleases&style=flat-square) ![GitHub all releases](https://img.shields.io/github/downloads/glorantq/neptun-rice/total?style=flat-square)
Ez a kis userscript átdolgozza a Neptun felületét, hogy könnyebb legyen nézegetni egész nap. Sajnos mivel magyarok csinálták az oldalt, nem mindent lehet témázni rajta úgy ahogy szeretném, de már így is egész jó.

### Telepítés
A használathoz szükséged lesz egy userscript managerre. Asztali böngészőkhöz beszerezheted a Tampermonkeyt innen (Neptun PowerUp!-tól lopva a linkeket):
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)
* [Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* [Legacy Microsoft Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S)
* [Új Microsoft Edge](https://microsoftedge.microsoft.com/insider-addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
* [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta)
* [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)

A script továbbá tesztelve van iOS Safari böngészőben is, ezzel a userscript managerrel: [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)

Ha megvan, tudod telepíteni a scriptet, ehhez [kattints ide](https://github.com/glorantq/neptun-rice/releases/latest/download/Neptun.Rice.user.js).

### Változtatások
- Alapértelmezett sötét mód az oldalnak, betűtípus lecserélve, jó kis Verdana helyett a rendszer alapértelmezett UI fontja
  ![image](https://user-images.githubusercontent.com/17655680/221344653-652c84d3-a4d4-4c44-82a5-2c78b120a5c1.png)
- Minden szín az oldalon személyre szabható
  ![image](https://user-images.githubusercontent.com/17655680/221350583-667d166b-f5ac-4efc-98ad-230ba1d5397e.png)
- Csomó kisebb idiotikus UI-fixek:

  | Before | After |
  |--------|-------|
  |![image](https://user-images.githubusercontent.com/17655680/221344754-9bc69411-ccf8-49bb-bc30-fb8ac3f6a6a2.png)|![image](https://user-images.githubusercontent.com/17655680/221344714-b6aab38f-f78f-442b-82a6-3db59d04dea4.png)|
  |![image](https://user-images.githubusercontent.com/17655680/221344779-10f779ff-72c9-4f49-b93a-17423aebedfd.png)|![image](https://user-images.githubusercontent.com/17655680/221344787-cbd42144-ce00-42b3-bb92-d1658a603a4b.png)|
  |![image](https://user-images.githubusercontent.com/17655680/221344827-c1136989-5ca7-4cbc-8ccb-ce7b5e8e9178.png)|![image](https://user-images.githubusercontent.com/17655680/221344811-ed8d5139-b079-4a29-980e-a94d99e78af1.png)|
  |![image](https://user-images.githubusercontent.com/17655680/221344844-423245fc-63b2-406f-be0e-82b433738825.png)|![image](https://user-images.githubusercontent.com/17655680/221344851-570d0938-f3f7-4a8f-a0bb-db1a7f6f56e5.png)
  
  És így tovább...
- Neptun PowerUp! integráció:
  - Meg lehet változtatni a kijelölések színét
  - A felugró "Kis türelmet..." ablak is követi a beállított primary színt
