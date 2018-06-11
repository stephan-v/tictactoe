# Opdracht 1
>Maak een component voor het spel TicTacToe. Een leeg component ziet er als volgt uit: 
```html
<template>
</template>

<script>
  export default {
  }
</script>

<style>
</style>
```

Zorg ook dat het nieuwe component beschikbaar komt binnen het hoofdcomponent 'App'. Zorg vervolgens dat de inhoud van dit component wordt meegenomen in de template.

#Opdracht 2
> Maak een component om het speelbord weer te geven.

Om het spel te kunnen spelen zijn we nog een aantal elementen nodig. Het belangrijkste compoment is het speelbord. Deze bestaat uit een veld van 9 (3x3)vlakken:

Voor het gemak en om tijd te besparen kun je gebruik maken van onderstaande CSS. We maken gebruik van CSS-Grid.

```html
  <div class="grid">
```
```css
.grid {
  display: grid;
  grid-gap: 5px 5px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  margin-top: 20px;
}
```

> Maak voor de vlakken in het bord ook een component.

Een component heeft altijd zijn eigen state. Delen van de app die vaker worden herbruikt zijn dus ook uitstekend geschikt als component. Zorg daarom dat er een component komt voor de vlakken in het speelbord.

\* Zorg dat het component alleen gegevens vasthoudt die ook echt nodig zijn!

Voor deze vlakken kan je eventueel onderstaande CSS gebruiken. Zorg wel dat je de CSS alleen toepast op het component zelf!

```css
div {
    background: lightblue;
    font-size: 110px;
    height: 120px;
    line-height: 110px;
    width: 120px;
}
```

Remember: import component, declare component, use component.

# Opdracht 3
> Zorg dat het bord de status bij kan houden. 

Hierbij moet het mogelijk zijn om op een vlak te klikken en vervolgens dit op te slaan.

# Opdracht 4

> Belangrijk bij dit spel is om te zien wie er aan de beurt is en of er gewonnen is (of gelijkspel). 

De focus tijdens deze opdrachten ligt op Vue. Niet op het uitwerken van de spelmechanics. Daarom krijg je deze code cadeau. Zorg dat er een nieuw component komt die het volgende bijhoudt:
* Wie is er nu aan de beurt?
* Heeft er iemand gewonnen?
* Is het gelijkspel?

```javascript
function gameIsWon() {
 return cellsAreEqual(this.cellMarkers.LT, this.cellMarkers.CT, this.cellMarkers.RT) 
        || cellsAreEqual(this.cellMarkers.LM, this.cellMarkers.CM, this.cellMarkers.RM)
        || cellsAreEqual(this.cellMarkers.LB, this.cellMarkers.CB, this.cellMarkers.RB)
        || cellsAreEqual(this.cellMarkers.LT, this.cellMarkers.LM, this.cellMarkers.LB)
        || cellsAreEqual(this.cellMarkers.CT, this.cellMarkers.CM, this.cellMarkers.CB)
        || cellsAreEqual(this.cellMarkers.RT, this.cellMarkers.RM, this.cellMarkers.RB)
        || cellsAreEqual(this.cellMarkers.LT, this.cellMarkers.CM, this.cellMarkers.RB)
        || cellsAreEqual(this.cellMarkers.LB, this.cellMarkers.CM, state.cellMarkers.RT)
          
     function cellsAreEqual(firstCell, secondCell, thirdCell) {
       return firstCell !== ''   && firstCell === secondCell && secondCell === thirdCell; 
     }
}
```

# Opdracht 5
> Zet een Vuex Store op

Naarmate de code uitgebreid wordt, wordt het ook complexer. Door gebruik te maken van een store kan veel logica op één plek worden neergezet. Dit zorgt ervoor dat de code begrijpbaarder wordt. Dit zorgt er ook voor dat de componenten 'dommer' worden.

Reminder:
De store bevindt zicht in de file store.js en bevat een aantal belangrijke dingen:
* state. Bevat de daadwerkelijke data
* mutations. Bevat de methodes om de state te muteren
* getters. Bevat de methodes om data uit de state op te halen

* Een methode in de store kan zowel de state als de getters meekrijgen. Dit kan door ze simpelweg als parameter in de methode neer te zetten:
```javascript
 getWinner: (state, getters) => {
     return getters.gameIsWon ? state.currentPlayer: null;
   },
```

# Opdracht 6
> Voeg een scorebord toe

Voeg een extra component to die met behulp van de Vuex store de score kan bijhouden.