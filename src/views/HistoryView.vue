<template>
    <div>
        <h2 class="text-2xl font-semibold px-4 lg:mt-12">Meilensteine</h2>
        <div class="p-4 timeline-container">
            <div class="my-3 text-container">
                <h3>Offizielle Gründung </h3>
                <p>
                    Am 03. März 2016 wurde aus einer Idee Wirklichkeit. 12 Freunde gründeten offiziell den ASC Geretsried
                    e.V.
                    Der allgemeine Sportclub Geretsried steht für Freundschaft, Gemeinschaft, Loyalität und Spaß am Sport.
                </p>
            </div>
            <div class="my-3 text-container">
                <h3>Sportliche Heimat</h3>
                <p>
                    Nach der Gründung musste zunächst eine sportliche Heimat gefunden werden. Zunächst konnten wir diese
                    mithilfe eines Bauwagens an der Böhmwiese an der B11 in Geretsried finden. Ohne Spielerkabinen und
                    sanitäre Anlagen war dies aber keine langfristige Option. Erst nach einer kurzen Zeit, in der wir unsere
                    Heimspiele auf dem Sportgelände des SV Ascholding austragen konnten, haben wir mit dem FC Geretsried
                    eine bis heute bestehende Einigkeit erzielen können, sodass wir das Sportgelände am Forst seit einigen
                    Jahren gemeinsam nutzen können.
                </p>
                <p>
                    An dieser Stelle möchten wir uns noch mal herzlich beim SV Ascholding und dem FC Geretsried für die
                    tolle Unterstützung bedanken.
                </p>
            </div>
            <div class="my-3 text-container">
                <h3>Sportlicher Werdegang</h3>
                <p>
                    Als neugegründeter Verein mussten wir in der unterersten Liga, der C-Klasse, starten. Nach Aufstiegen in
                    die B-Klasse und A-Klasse, folgte 2022 das bisher größte sportliche Highlight in der Vereinsgeschichte:
                    Der Aufstieg in die Kreisklasse! In dieser Liga spielt die erste Mannschaft bis heute und behauptet sich
                    gegen zahlreiche starke Vereine.
                    Zudem konnten wir weiteren Spielern eine sportliche Heimat bieten und gründeten zur Saison 2021/22 eine
                    zweite Mannschaft, die aktuell in der C-Klasse spielt.
                </p>
            </div>
            <div class="my-3 text-container">
                <h3>Gründung der Futsal-Sparte</h3>
                <p>
                    Damit unseren Adlern in der Winterpause nicht langweilig wird, haben wir 2021 eine Futsal-Mannschaft
                    gegründet. Beim Futsal wird 5 gegen 5 in der Halle gespielt. Im Vergleich zum klassischen Hallenfußball
                    gibt es einen speziellen Ball, kleinere Tore und Seitenaus. Unsere Mannschaft, bei der auch zahlreiche
                    Gastspieler aus Nachbarvereinen vertreten sind, spielt aktuell in der Bayernliga, der dritthöchsten Liga
                    bundesweit.
                </p>
            </div>
            <div class="my-3 text-container">
                <h3>Ausblick</h3>
                <p>
                    Mit über 120 aktiven Mitgliedern, zwei Fußballmannschaften und einer Futsal-Mannschaft blickt die
                    Vorstandschaft stolz auf die bisherige Entwicklung zurück und möchte diesen erfolgreichen Weg auch in
                    der Zukunft weitergehen.
                    Sportlich möchten wir uns stetig als Mannschaft weiterentwickeln. Unser Hauptaugenmerk liegt aber darin,
                    niemals unsere Werte aus den Augen zu verlieren, denn sie stehen für uns über allem.
                    Auch in der Zukunft wollen wir allen fußballbegeisterten Kickern eine sportliche Heimat bieten. Außerdem
                    ist einer unserer offenen Wünsche, eines Tages eine Jugendmannschaft zu gründen und den ASC somit um
                    diesen Bereich zu erweitern.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h3 {
    font-weight: 500;
}
.timeline-container{
    position: relative;
}

.timeline-container::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #002166;
  top: 30px;
  bottom: 0;
  left: 15px;
}

.text-container {
  padding-left: 2rem;  
  position: relative;
}

.text-container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  left: -10px;
  background-color: white;
  border: 4px solid #002166;
  border-radius: 50%;
  z-index: 1;
}
</style>