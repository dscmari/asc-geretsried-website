
<template>
    <div class="flex items-center mt-4">
        <div class="w-10 h-1 bg-ascBlue"></div>
        <h1 class="p-4 text-2xl font-semibold text-ascBlue">Alte Herren</h1>
    </div>
    <p class="px-4">
        2023 haben wir zusammen mit dem TuS Geretsried eine AH gegründet. Seit 2024 nehmen wir auch am Spielbetrieb teil. 
        Hier steht der Spaß absolut im Vordergrund. Wer Lust hat mit einigen Legenden mitzukicken, kann sich gerne bei uns melden. 
        Wir freuen uns über Neuzugänge für diese tolle Gemeinschaft! Vorraussetzung für eine Spielberechtigung ist,
        dass die Spieler im aktuellen Kalenderjahr mindestens das 32. Lebensjahr vollenden. 
    </p>
    <div class="mt-8">
        <img class="mx-auto" src="/images/ah_badquality.jpeg" alt="Alte Herren Mannschaftsfoto">
    </div>
    <div>
        <h1 id="league-1" class="p-4 pb-0 lg:pt-16 lg:pl-0 text-lg font-semibold text-ascBlue">Liga & Tabelle</h1>
        <h2 class="p-4 mb-4 text-lg font-semibold text-ascBlue underline">Liga</h2>
        <UpcomingGames :widgetGamesConfig="widgetGamesConfig" />
        <h2 class="p-4 my-4 text-lg font-semibold text-ascBlue underline">Tabelle</h2>
        <LeagueTable_AH />
        <p class="p-4 lg:mt-4">
            Mehr Informationen zum ASC findet ihr <a class="underline text-ascBlue font-semibold" href="https://www.bfv.de/vereine/asc-geretsried/01S7PPNEG8000000VS548984VTJ68QLL" target="_blank">hier</a>.
        </p>
    </div>
    <div>
        <h2 class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Trainingszeiten</h2>
        <div class="pl-4 pb-0">
            <ul>
                <li class="p-1">Di 19.30 – 21.00 Uhr</li>
            </ul>
        </div>
        <h2 class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Ansprechpartner ASC:</h2>
        <p class="pl-4">Andreas Mathäus</p>
        <p class="pl-4">Tel.: 0176 70593616</p>
        <h2 class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Ansprechpartner TuS:</h2>
        <p class="pl-4">René Steinbrecher</p>
        <p class="pl-4">Tel.: 0155 66168018</p>
    </div>
</template>

<script setup>
import UpcomingGames from '../components/widgets/UpcomingGames.vue'
import LeagueTable_AH from '../components/widgets/LeagueTable_AH.vue'

const widgetGamesConfig = {
    teamId: "021S4HAIE4000000VS548985VT98051J",
    widgetId: "bfv1713368049881",
    options: {
        height: "100%",
        width: "100%",
        selectedTab: BFVWidget.HTML5.mannschaftTabs.spiele,
        colorResults: "undefined",
        colorNav: "undefined",
        colorClubName: "#002166",
        backgroundNav: "undefined"
    }
};

</script>