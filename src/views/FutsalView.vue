<template>
    <div class="flex items-center mt-4">
        <div class="w-10 h-1 bg-ascBlue"></div>
        <h1 class="p-4 text-2xl font-semibold text-ascBlue">Futsal</h1>
    </div>
    <h2 class="pl-4 lg:pl-0 text-lg font-semibold text-ascBlue">Was ist Futsal?</h2>
    <p class="px-4">
        Damit unseren Adlern in der Winterpause nicht langweilig wird, haben wir 2021 eine Futsal-Mannschaft gegründet.
        Beim Futsal wird 5 gegen 5 in der Halle gespielt. Im Vergleich zum klassischen Hallenfußball gibt es einen
        speziellen Ball, kleinere Tore und Seitenaus. Unsere Mannschaft, bei der auch zahlreiche Gastspieler aus
        Nachbarvereinen vertreten sind, spielt aktuell in der Bayernliga, der dritthöchsten Liga bundesweit.
    </p>
    <div class="mt-8">
        <img class="mx-auto" src="/images/futsal-team.jpg" alt="erste mannschaft">
    </div>
    <div>
        <h1 id="league-1" class="p-4 pb-0 lg:pt-16 lg:pl-0 text-lg font-semibold text-ascBlue">Liga & Tabelle</h1>
        <h2 class="p-4 mb-4 text-lg font-semibold text-ascBlue underline">Liga</h2>
        <UpcomingGames :widgetGamesConfig="widgetGamesConfig" />
        <h2 class="p-4 my-4 text-lg font-semibold text-ascBlue underline">Tabelle</h2>
        <LeagueTable_Futsal />
        <p class="p-4 lg:mt-4">
            Mehr Informationen zum ASC findet ihr <a class="underline text-ascBlue font-semibold" href="https://www.bfv.de/vereine/asc-geretsried/01S7PPNEG8000000VS548984VTJ68QLL" target="_blank">hier</a>.
        </p>
    </div>
    <div>
        <h2 class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Trainingszeiten</h2>
        <div class="p-4 pb-0">
            <h2>Von November bis Februar in der Halle der Karl-Lederer Grundschule in Geretsried</h2>
            <ul>
                <li class="p-1">Mo 20.30 – 22.00 Uhr</li>
                <li class="p-1">Mi 21.00 – 22.00 Uhr</li>
            </ul>
        </div>
        <h2 class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Verantwortlicher ASC-Futsal:</h2>
        <p class="pl-4">Panagiotis Zormpas</p>
        <h2 class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Coach ASC-Futsal:</h2>
        <p class="pl-4">Tasso Lasidis</p>
    </div>
</template>

<script setup>
import UpcomingGames from '../components/widgets/UpcomingGames.vue'
import LeagueTable_Futsal from '../components/widgets/LeagueTable_Futsal.vue'

const widgetGamesConfig = {
    teamId: "02926EH9DS000000VS5489B1VUH1VNE0",
    widgetId: "bfv1713369012656",
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