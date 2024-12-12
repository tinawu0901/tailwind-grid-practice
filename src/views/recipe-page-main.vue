<template>
  <div class="w-full h-full px-8">
    <div class="w-full h-1/4">
      <img alt="Vue logo" class="w-full" src="@/assets/image-omelette.jpeg" />
    </div>
    <section class="text-wrap mt-6 w-full">
      <h1 class="font-bold text-4xl mb-6 font-youngserif">
        Simple Omelette Recipe
      </h1>
      <p class="text-lg text-justify font-outfit">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs <br />cooked to perfection, optionally filled with
        your choice of cheese, vegetables, or meats.
      </p>
    </section>

    <div v-for="section in sections" :key="section.title" class="my-6">
      <div v-if="section.title === 'Preparation time'" class="bg-red-50 p-6">
        <RecipePageMainComponent
          :title="section.title"
          :listType="section.title === 'Instructions' ? 'numbered' : 'disc'"
          :items="section.items"
        />
      </div>
      <!-- Default rendering for other sections -->
      <div v-else>
        <RecipePageMainComponent
          :title="section.title"
          :listType="section.title === 'Instructions' ? 'numbered' : 'disc'"
          :items="section.items"
        />
      </div>
    </div>

    <div>
      <h1
        class="my-1.5 font-bold text-4xl mb-6 text-yellow-700 font-youngserif"
      >
        Nutrition
      </h1>
      <p class="font-youngserif">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table class="table-auto w-full text-left font-youngserif">
        <thead>
          <tr class="border-b border-gray-300">
            <td>Calories</td>
            <td class="text-yellow-700 font-bold pb-2">
              {{ nutritionalValues.calories }} kcal
            </td>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-300">
            <td>Carbs</td>
            <td class="text-yellow-700 font-bold">
              {{ nutritionalValues.carbs }} g
            </td>
          </tr>
          <tr class="border-b border-gray-300">
            <td>Protein</td>
            <td class="text-yellow-700 font-bold">
              {{ nutritionalValues.protein }} g
            </td>
          </tr>
          <tr class="border-b border-gray-300">
            <td>Fat</td>
            <td class="text-yellow-700 font-bold">
              {{ nutritionalValues.fat }} g
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import RecipePageMainComponent from "../components/recipe-page-main-component.vue";
type Section = {
  title: "Preparation Time" | "Ingredients" | "Instructions";
  items: string[];
};

const sections: Section[] = [
  {
    title: "Preparation time",
    items: [
      "Total: Approximately 10 minutes",
      "Preparation: 5 minutes",
      "Cooking: 5 minutes",
    ],
  },
  {
    title: "Ingredients",
    items: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    ],
  },
  {
    title: "Instructions",
    items: [
      "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
      "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
      "Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
      "Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      "Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
      "Enjoy: Serve hot, with additional salt and pepper if needed.",
    ],
  },
];

const nutritionalValues = {
  calories: 277,
  carbs: 0,
  protein: 20,
  fat: 22,
};
</script>
<style scoped>
td {
  padding: 10px;
  padding-left: 2.5%;
}
</style>
