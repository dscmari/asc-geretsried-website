<template>
    <div class="flex items-center mt-4">
        <div class="w-10 h-1 bg-ascBlue"></div>
        <h1 class="p-4 text-2xl font-semibold text-ascBlue">Erste Mannschaft</h1>
    </div>
    <div>
        <img src="/images/24-25/mannschaftsfoto_asc1_24-25.jpg" alt="erste mannschaft">
    </div>

    <div>
        <h1 id="league-1" class="p-4 pb-0 lg:pt-16 lg:pl-0 text-lg font-semibold text-ascBlue">Liga & Tabelle</h1>
        <h2 class="p-4 mb-4 text-lg font-semibold text-ascBlue underline">Liga</h2>
        <UpcomingGames :widgetGamesConfig="widgetGamesConfig"/>
        <h2 class="p-4 my-4 text-lg font-semibold text-ascBlue underline">Tabelle</h2>
        <LeagueTable :widgetTableConfig="widgetTableConfig" />
        <p class="p-4 lg:mt-4">
            Mehr Informationen zum ASC findet ihr <a class="underline text-ascBlue font-semibold" href="https://www.bfv.de/vereine/asc-geretsried/01S7PPNEG8000000VS548984VTJ68QLL" target="_blank">hier</a>.
        </p>
    </div>

    <div>
        <h1 id="team-1" class="p-4 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Kader</h1>
        <div class="text-lg m-4 pt-0">
            <div class="p-2 pl-6 bg-slate-200">
                <table>
                    <thead><tr>Coaches:</tr></thead>
                    <tbody>
                        <tr><td>Anastasios Lasidis (Spielertrainer)</td></tr>
                        <tr><td>Cem Acikbas (Trainer)</td></tr>
                        <tr><td>Rico Krillmäurer (Co-Trainer)</td></tr>
                        <tr><td>Kevin Rehmann (TW-Trainer)</td></tr>
                    </tbody> 
                </table>
            </div>
            
            <div class="p-2 pl-6 bg-slate-100">
                <table>
                    <thead><tr>Torhüter:</tr></thead>
                    <tbody>
                        <tr><td>Phil Malzacher</td></tr>
                    </tbody> 
                </table>
            </div>

            <div class="p-2 pl-6 bg-slate-200">
                <table>
                    <thead><tr>Verteidigung:</tr></thead>
                    <tbody>
                        <tr><td>Florian Krone</td></tr>
                        <tr><td>Florian Meindl</td></tr>
                        <tr><td>Kristian Derek</td></tr>
                        <tr><td>Jordanis Michos</td></tr>
                        <tr><td>Marius Wedderwille</td></tr>
                        <tr><td>Phillip Willwohl</td></tr>
                    </tbody> 
                </table>
            </div>

            <div class="p-2 pl-6 bg-slate-100">
                <table>
                    <thead><tr>Mittelfeld:</tr></thead>
                    <tbody>
                        <tr><td>Alexander Kutzmutz</td></tr>
                        <tr><td>Altin Gajtani</td></tr>
                        <tr><td>Andreas Knobloch</td></tr>
                        <tr><td>Andreas Zimolong</td></tr>
                        <tr><td>Christian Sacher</td></tr>
                        <tr><td>Jordanis Michos</td></tr>
                        <tr><td>Rafael Sablonski</td></tr>
                        <tr><td>Rilind Sadiku</td></tr>
                        <tr><td>Sebastian Philp</td></tr>
                        <tr><td>Stavro Iosifoglou</td></tr>
                        <tr><td>Theodoros Mastoridis</td></tr>
                        <tr><td>Thomas Philp</td></tr>
                    </tbody> 
                </table>
            </div>
                
            <div class="p-2 pl-6 bg-slate-200">
                <table>
                    <thead><tr>Sturm:</tr></thead>
                    <tbody>
                        <tr><td>Anastasios Lasidis</td></tr>
                        <tr><td>Daniel Zielinski</td></tr>
                        <tr><td>Lukas Steer</td></tr>
                        <tr><td>Mike Ongerth</td></tr>
                        <tr><td>Paul Karamanos</td></tr>
                        <tr><td>Raphael Paringer</td></tr>
                    </tbody> 
                </table>
            </div>
        </div>
    </div>
    <div>
        <h1 id="training-1" class="p-4 pb-0 lg:pt-8 lg:pl-0 text-lg font-semibold text-ascBlue">Trainingszeiten</h1>
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
import LeagueTable from '../components/widgets/LeagueTable.vue'
import UpcomingGames from '../components/widgets/UpcomingGames.vue'

const widgetGamesConfig = {
  teamId: "01S9OK0ABK000000VS548984VTL2SVNK",
  widgetId: "bfv1713367909332",
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
    tableId: "02PEHFL87800001RVS5489B4VU56U9AA-G",
    widgetId: "bfv1722591156688",
    teamPermanentId: "01S9OK0ABK000000VS548984VTL2SVNK"
}

</script>

<!-- id="bfv1713367909332" -->
<!--  BFVWidget.HTML5.zeigeMannschaftKomplett("01S9OK0ABK000000VS548984VTL2SVNK", "bfv1713367909332", { height: "100%", width: "100%", selectedTab:BFVWidget.HTML5.mannschaftTabs.spiele, colorResults: "undefined" , colorNav: "undefined" , colorClubName : "#002166" , backgroundNav: "undefined"}); -->