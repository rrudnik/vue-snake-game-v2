import SnakeCanvas from "./components";

export default {
  name: "App",
  components: {
    SnakeCanvas
  },
  data() {
    return {
      cellSize: 10,
      boardSize: 5,
      speed: 1,
      score: 0,
      isPlaying: false
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
    },
    stop() {
      this.isPlaying = false;
    }
  }
};
