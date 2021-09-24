export default {
  name: "snakeCanvas",
  props: {
    cellSize: Number,
    boardSize: Number,
    speed: Number,
    score: Number,
    isPlaying: Boolean
  },
  computed: {
    boardSizePx() {
      return this.cellSize * this.boardSize;
    }
  }
};
