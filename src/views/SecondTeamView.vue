<template>
    <div class="flex items-center mt-4">
        <div class="w-10 h-1 bg-ascBlue"></div>
        <h1 class="p-4 text-2xl font-semibold text-ascBlue">Zweite Mannschaft</h1>
    </div>
    <div>
        <img src="/images/zweite-mannschaft.jpg" alt="erste mannschaft">
    </div>

    <div>
        <h1 id="league-1" class="p-4 pb-0 lg:pt-16 lg:pl-0 text-lg font-semibold text-ascBlue">Liga & Tabelle</h1>
        <h2 class="p-4 mb-4 text-lg font-semibold text-ascBlue underline">Liga</h2>
        <UpcomingGames :widgetGamesConfig="widgetGamesConfig" />
        <h2 class="p-4 my-4 text-lg font-semibold text-ascBlue underline">Tabelle</h2>
        <LeagueTable :widgetTableConfig="widgetTableConfig" />
        <p class="p-4 lg:mt-4">
            Mehr Informationen zum ASC findet ihr <a class="underline text-ascBlue font-semibold" href="https://www.bfv.de/vereine/asc-geretsried/01S7PPNEG8000000VS548984VTJ68QLL" target="_blank">hier</a>.
        </p>
    </div>

    <div>
        <h1 id="team-2" class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Kader</h1>
        <div class="text-lg m-4 pt-0">
            <div class="p-2 pl-6 bg-slate-200">
                <table>
                    <thead><tr>Coach:</tr></thead>
                    <tbody>
                        <tr><td>Manuel Schneider</td></tr>
                    </tbody> 
                </table>
            </div>
            
            <div class="p-2 pl-6 bg-slate-100">
                <table>
                    <thead><tr>Torhüter:</tr></thead>
                    <tbody>
                        <tr><td>Milosz Piesiura</td></tr>
                    </tbody> 
                </table>
            </div>

            <div class="p-2 pl-6 bg-slate-200">
                <table>
                    <thead><tr>Verteidigung:</tr></thead>
                    <tbody>
                        <tr><td>Julian Baak</td></tr>
                        <tr><td>Panagiotis Athanasiadis</td></tr>
                        <tr><td>Nicolas Engels</td></tr>
                        <tr><td>Marian Mucak</td></tr>
                        <tr><td>Dominik Schwarz</td></tr>
                        <tr><td>Manuel Schneider</td></tr>
                        <tr><td>Christian Wohlan</td></tr>
                    </tbody> 
                </table>
            </div>

            <div class="p-2 pl-6 bg-slate-100">
                <table>
                    <thead><tr>Mittelfeld:</tr></thead>
                    <tbody>
                        <tr><td>Lukas Fleischer</td></tr>
                        <tr><td>Luis Gatzka</td></tr>
                        <tr><td>Robert Haltmaier</td></tr>
                        <tr><td>Stavros Karassakalidis</td></tr>
                        <tr><td>Simon Kriest</td></tr>
                        <tr><td>Mike Ongerth</td></tr>
                        <tr><td>Alexander Reiter</td></tr>
                        <tr><td>Christoph Ruben</td></tr>
                        <tr><td>Rafael Sablonski</td></tr>
                        <tr><td>Alexander Wenus</td></tr>
                        <tr><td>Maximilian Westermeyr</td></tr>
                        <tr><td>Alan Mohamad</td></tr>
                    </tbody> 
                </table>
            </div>
                
            <div class="p-2 pl-6 bg-slate-200">
                <table>
                    <thead><tr>Sturm:</tr></thead>
                    <tbody>
                        <tr><td>Korbinian Beigel</td></tr>
                        <tr><td>Hubertus Beringer</td></tr>
                        <tr><td>Chrystovakantis Fotoglou</td></tr>
                        <tr><td>Arben Gajtani</td></tr>
                        <tr><td>Rene Hammer</td></tr>
                        <tr><td>Javid Kassam</td></tr>
                        <tr><td>Marcel Paringer</td></tr>
                        <tr><td>Konstantin Pavlicek</td></tr>
                    </tbody> 
                </table>
            </div>
        </div>
    </div>

    <div>
        <h1 id="training-2" class="p-4 pb-0 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Trainingszeiten</h1>
        <div class="p-4">
            <div class="p-2">
                <h2>Sommer:</h2>
                <ul>
                    <li class="p-1">Am Forst oder Böhmwiese</li>
                    <li class="p-1">Mo 19.30 – 21.00 Uhr</li>
                    <li class="p-1">Mi 19.30 – 21.00 Uhr</li>
                </ul>
            </div>
            <div class="p-2">
                <h2>Winter:</h2>
                <ul>
                    <li class="p-1">Kunstrasen</li>
                    <li class="p-1">Mo 20.30 – 22.00 Uhr</li>
                    <li class="p-1">Do 20.30 – 22.00 Uhr</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import UpcomingGames from '../components/widgets/UpcomingGames.vue'
import LeagueTable from '../components/widgets/LeagueTable.vue'

const widgetGamesConfig = {
    teamId: "02IDHF83IG000000VS5489B2VU2I8R4H",
    widgetId: "bfv1713365491165",
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

const widgetTableConfig = {
    tableId: "02NO6NQIQG000006VS5489B4VSMU21R6-G",
    widgetId: "bfv1713089993516",
    teamPermanentId: "02IDHF83IG000000VS5489B2VU2I8R4H"
}


</script>