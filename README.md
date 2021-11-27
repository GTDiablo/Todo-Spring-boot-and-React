# Todo full-stack applikáció (spring boot + react)
*Készítette: Boda Zsolt - EKKB9P
Motiváció: Webfejlesztés beadandó*

## Rövid bemutató
Egy egyszerű todo list app, amit a backend-n egy spring boot szerver támogat, frontend-n pedig egy react-ban és typescript-ben íródott weblap. Tudunk egy todo elemet létrehozni a oldal tetején található input-l. Ezt a szerveren az API elmenti a háttérben futó MySql szerverben. Ha csak az adatbázis tartalmát akarjuk megnézni, akkor elég csak a PhpMyAdmin fellületét megnézni. Továbba az aplikáció a todo elem lezárásával (kipipálás, update) és törlését is tudja kezelni. Todo elem szövegét is lehet állítani a már elkészült todo-knak.

## Használat
> A docker megléte fontos ehhez a project elindításához!

### Fejlesztéshez

> Fontos, hogy ebben a sorrendben indítsuk el a service-ket!

Ha szeretnénk továbbfejleszteni az applikációt, akkor kövessük a következő lépéseket. Ez messze nem egy production ready felállás! Minden service-t egyenként indítunk el, különböző modulokkal dolgozunk.

#### MySql szerver és PhpMyAdmin (szép adatbázis kezelő felület)
Adjuk ki a parent mappában a következő parancsot:

    docker-compose up db phpmyadmin

A PhpMyAdmin felületét a http://localhost:8030 -n lehet elérni.
#### API fordítása és futtatása
Backend service a backend mappában van, ezért navigáljunk bele, majd adjuk ki a következő parancsot:

    mvn spring-boot:run

> A parancs futtatásához maven-re van szükségünk!

#### Frontend futtatása
Frontend service a web mappában van, ezért navigáljunk bele, majd adjuk ki a következő parancsokat:

Csomagok telepítése:

    npm install

Futtatás debug módban:

    npm start

> Parancsok futtatásához node-ra, valamint npm-re van szükségünk!

Az applikáció itt lesz elérhető: http://localhost:3000
