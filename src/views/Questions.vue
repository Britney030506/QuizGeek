<script setup>
import { ref, computed } from "vue";

const questions = ref([
  {
    question: "¿En qué año se estrenó la mítica película Jurassic Park?",
    answer: 0,
    options: ["1993", "1997", "1995", "1991"],
    selected: null,
    image: "../../src/assets/jurassic-park.jpg",
  },

  {
    question: "En Big Bang Theory, ¿De dónde procede Penny?",
    answer: 1,
    options: ["New York", "Nebraska", "Texas", "Los Angeles"],
    selected: null,
    image: "../../src/assets/penny.jpg",
  },

  {
    question: "En The Walking Dead ¿Cómo se llama el bate de Negan?",
    answer: 0,
    options: ["Lucille", "Lubelly", "Max Power"],
    selected: null,
    image: "../../src/assets/negan.jpg",
  },

  {
    question: "¿De qué material están hechos los brazaletes de Wonder Woman?",
    answer: 2,
    options: ["Vibranium", "Meteorium", "Amazonium", "Adamantium"],
    selected: null,
    image: "../../src/assets/wonder-woman.jpg",
  },

  {
    question: "¿Cómo se llama el soundtack de Darth Vader?",
    answer: 2,
    options: [
      "The Throne Room",
      "Duel of the fates",
      "The imperial March",
      "Batt",
    ],
    selected: null,
    image: "../../src/assets/darth-vader.jpg",
  },

  {
    question:
      "¿Cuál es el nombre y el año en el que se estrenó la primera película de Harry Potter?",
    answer: 3,
    options: [
      "La camara Secreta (2000)",
      "El Caliz de Fuego (2001)",
      "La Orden del Fenix (2000)",
      "La Piedra Filosofal (2001)",
    ],
    selected: null,
    image: "../../src/assets/harry-potter.jpg",
  },

  {
    question:
      "¿Cuál es el nombre del juego de rol más popular en la cultura geek?",
    answer: 1,
    options: ["World of Warcraft", "Dungeons & Dragons", "Final Fantasy"],
    selected: null,
    image: "../../src/assets/Gamer.jpg",
  },

  {
    question: "¿Qué significa el acrónimo 'RPG' en la cultura geek?",
    answer: 0,
    options: [
      "Role Playing Game",
      "Rocket Propelled Grenade",
      "Really Popular Geek",
    ],
    selected: null,
    image: "../../src/assets/juegos-rpg.jpg",
  },

  {
    question:
      "¿Cuál es el nombre del personaje principal en el videojuego 'The Legend of Zelda'?",
    answer: 0,
    options: ["Link", "Zelda", "Ganon"],
    selected: null,
    image: "../../src/assets/link.jpg",
  },

  {
    question: "¿Qué es un 'easter egg' en la cultura geek?",
    answer: 2,
    options: [
      "Un personaje de videojuego que siempre aparece en la pantalla",
      "Un huevo de Pascua decorado con personajes de cómic",
      "Un mensaje oculto en una película, videojuego o software",
    ],
    selected: null,
    image: "../../src/assets/Gamer.jpg",
  },
]);
const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

// Función para obtener el texto correspondiente al puntaje obtenido
const getScoreText = () => {
  if (score.value >= 7) {
    return "¡Qué bien!";
  } else if (score.value >= 4) {
    return "No tan mal";
  } else {
    return "Sigue intentando";
  }
};

const SetAnswer = (evt) => {
  console.log("holaaaaaa");
  questions.value[currentQuestion.value].selected = evt.target.value;
  evt.target.value = null;
};

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
  }
};
</script>

<template>
  <main class="app">
    <section class="quizz" v-if="!quizCompleted">
      <div class="quizz-info">
        <h3 class="question">{{ getCurrentQuestion.question }}</h3>
        <img
          class="img-questions"
          :src="getCurrentQuestion.image"
          alt="imggg"
        />
        <!-- Agrega una etiqueta de imagen -->
        <h4 class="score">Score{{ score }}/{{ questions.length }}</h4>
      </div>

      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :for="'option' + index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
          :key="index"
        >
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer"
          />
          <span>{{ option }} </span>
        </label>
      </div>

      <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Finish"
            : getCurrentQuestion.selected == null
            ? "Select an option"
            : "Next question"
        }}
      </button>
    </section>

    <section v-else class="final">
      <div class="gifs">
        <h2>You have finished the quiz!</h2>
        <iframe
          v-if="score >= 5 && score <= 7"
          allow="fullscreen"
          frameBorder="0"
          src="https://giphy.com/embed/THsgSe9BVrQh7ENthU"
        >
        </iframe>

        <iframe
          v-if="score >= 0 && score <= 4"
          allow="fullscreen"
          frameBorder="0"
          src="https://giphy.com/embed/QeRhSS0j7SMLmu09fM"
        >
        </iframe>

        <iframe
          v-if="score >= 8 && score <= 10"
          allow="fullscreen"
          frameBorder="0"
          src="https://giphy.com/embed/phGElmSM4P0sg "
        >
        </iframe>

        <h5 v-if="score >= 5 && score <= 7">¿Sufriste bullying verdad?</h5>
        <h5 v-if="score >= 0 && score <= 4">
          ¡Tienes vida social felicidades!
        </h5>
        <h5 v-if="score >= 8 && score <= 10">
          ¡¿Estas bien?!, ¿seguro que tienes amigos?
        </h5>
      </div>

      <p>Your score is {{ score }}/{{ questions.length }}</p>
      <a href="/"><button>Go to Quiz Home</button></a>
    </section>
  </main>
</template>

<style scoped>
h5 {
  text-align: center;
  font-size: 1.5rem;
}
h2 {
  font-size: 2rem;
}

p {
  color: #e2dcdc;
  font-size: 1.7rem;
  text-align: center;
}
.app {
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 90vh;
}

h1 {
  font-size: 0.5rem;
  margin-bottom: 2rem;
}

.quizz-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quizz-info .question {
  color: #ffffff;
  font-size: 1.7rem;
}

.quizz-info .score {
  color: #fff;
  font-size: 1.25rem;
  flex-direction: column;
}

.options {
  margin-bottom: 1rem;
}

.option {
  display: block;
  padding: 1rem;
  background-color: rgba(107, 107, 107, 0.432);
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
}

.option:hover {
  background-color: #0466c9c9;
}

.option.correct {
  background-color: #37e9bb;
  color: black;
}

.option.wrong {
  background-color: #ff5a5f;
  color: black;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;

  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
a,
button {
  align-self: center;
}
.quizz {
  background: #261c55c5;
  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.281);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0);
  padding: 1rem;
  width: 50%;
  border-radius: 0.5rem;
}
.final {
  background: #2931658e;
  box-shadow: 0 8px 32px 0 rgba(214, 122, 122, 0.329);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0);
  padding: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  align-self: center;
}
.quizz-info,
.options {
  width: 100%;
  float: none;
}

button:disabled {
  opacity: 0.5;
}
.img-questions {
  width: 370px;

  border-radius: 10px;

  margin-left: auto;
  margin-right: auto;
}
.gifs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
h4 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: rgba(140, 203, 255, 0.644);
}
h3 {
  font-size: 1.7rem;
  margin-bottom: 2rem;
  text-align: center;
  color: rgb(255, 255, 255);
}

@media (max-width: 768px) {
  h2,
  p {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1rem;
  }
  .quizz-info .question {
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 0.5rem;
    font-size: 0.9rem;
  }
  .final,
  .quizz {
    width: 100%;
  }
  .img-questions {
    width: 270px;

    border-radius: 10px;

    margin-left: auto;
    margin-right: auto;
  }
}
</style>
