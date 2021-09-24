<template>
  <div id="app">
    <h1>Snake Game</h1>
    <div class="column">
      Cell Size(px):
      <input type="number" min="10" v-model.number="cellSize"/>

    </div>
    <div class="column">
      Board Size (cells)
      <input type="number" min="5" v-model.number="boardSize"/>
    </div>
    <div class="column">
      Speed:
      <input type="number" min="1"  v-model.number="speed"/>
    </div>
    <br/>
    <SnakeCanvas
      :cellSize= "cellSize"
      :boardSize= "boardSize"
      :speed= "speed"
      :score= "score"
      :isPlaying = "isPlaying"
    />  

    <div>Scores:  {{ score }}</div>
    <button id="play-btn">{{ isPlaying ? "Stop" : "Start" }}</button>


  </div>
</template>

<script src="./app.js"/>
<style src="./app.css" />

