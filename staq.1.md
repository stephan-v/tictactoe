# Staq assignment 1
>Create a component TicTacToe and include it in your App.vue

Create the file TicTacToe.vue in /components with the default content for a component:
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
Import the component in App.vue
```js 
import TicTacToe from './components/TicTacToe.vue';
```
Declare the component in App.vue
```js
export default {
  components: {
    TicTacToe
  }
}
```
Use it in the template, within div#app
```html
<TicTacToe></TicTacToe>   
``` 

> Create the board component with the following layout in your template
```html
<div>
  <div>
    <button>New Game</button>
  </div>
  <div class="grid">
  </div>
</div>
```
Save yourself some time with styling the grid by using this CSS.
```css
<style>
.grid {
  display: grid;
  grid-gap: 5px 5px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  margin-top: 20px;
}
</style>
```

> Create the Cell component. Don't worry about functionality, we'll get to that later. A template with an empty div will do for now.

Save yourself some time with styling the grid by using this CSS for your cell. (Make sure the style is scoped or use a unique classname for the cell!)
```css
<style scoped>
div {
    background: lightblue;
    font-size: 110px;
    height: 120px;
    line-height: 110px;
    width: 120px;
}
</style>
```

> Put 9 cells in your div.grid in the board component.

Remember: import component, declare component, use component.
# Staq assignment 2
> Draw a marker (X or O) in the cell after it gets clicked on.

Create a onClick method for your cell