<template>
  <main class="main">
    <Calculator :value="calculatorStore.value">
      <Keyboard>
        <div class="keyboard_one_slot_size_row">
          <Button
            class="yellow_button"
            character="C"
            data-cy="clean_button"
            @click="calculatorStore.clean()" />
          <Button
            class="dark_blue_button"
            character="/"
            data-cy="division_button"
            @click="
              calculatorStore.addCharacter(CalculatorCharacters.DIVISION)
            " />
          <Button
            class="dark_blue_button"
            character="*"
            data-cy="multiplication_button"
            @click="
              calculatorStore.addCharacter(CalculatorCharacters.MULTIPLICATION)
            " />
          <Button
            class="yellow_button"
            character="<"
            data-cy="backspace_button"
            @click="calculatorStore.backspace()" />
        </div>
        <div class="keyboard_one_slot_size_row">
          <Button
            class="light_blue_button"
            character="7"
            data-cy="seven_button"
            @click="calculatorStore.addCharacter(CalculatorCharacters.SEVEN)" />
          <Button
            class="light_blue_button"
            character="8"
            data-cy="eight_button"
            @click="calculatorStore.addCharacter(CalculatorCharacters.EIGHT)" />
          <Button
            class="light_blue_button"
            character="9"
            data-cy="nine_button"
            @click="calculatorStore.addCharacter(CalculatorCharacters.NINE)" />
          <Button
            class="dark_blue_button"
            character="-"
            data-cy="subtraction_button"
            @click="
              calculatorStore.addCharacter(CalculatorCharacters.SUBTRACTION)
            " />
        </div>
        <div class="keyboard_one_slot_size_row">
          <Button
            class="light_blue_button"
            character="4"
            data-cy="four_button"
            @click="calculatorStore.addCharacter(CalculatorCharacters.FOUR)" />
          <Button
            class="light_blue_button"
            character="5"
            data-cy="five_button"
            @click="calculatorStore.addCharacter(CalculatorCharacters.FIVE)" />
          <Button
            class="light_blue_button"
            character="6"
            data-cy="six_button"
            @click="calculatorStore.addCharacter(CalculatorCharacters.SIX)" />
          <Button
            class="dark_blue_button"
            character="+"
            data-cy="addition_button"
            @click="
              calculatorStore.addCharacter(CalculatorCharacters.ADDITION)
            " />
        </div>
        <div class="keyboard_two_slot_size_row">
          <div class="keyboard_two_slot_size_row_button_container">
            <div>
              <Button
                class="light_blue_button"
                character="1"
                data-cy="one_button"
                @click="
                  calculatorStore.addCharacter(CalculatorCharacters.ONE)
                " />
              <Button
                class="light_blue_button"
                character="2"
                data-cy="two_button"
                @click="
                  calculatorStore.addCharacter(CalculatorCharacters.TWO)
                " />
              <Button
                class="light_blue_button"
                character="3"
                data-cy="three_button"
                @click="
                  calculatorStore.addCharacter(CalculatorCharacters.THREE)
                " />
            </div>
            <div class="keyboard_two_slot_size_row_zero_button_container">
              <Button
                class="light_blue_button"
                character="0"
                data-cy="zero_button"
                @click="
                  calculatorStore.addCharacter(CalculatorCharacters.ZERO)
                " />
              <Button
                class="dark_blue_button"
                character="."
                data-cy="point_button"
                @click="
                  calculatorStore.addCharacter(CalculatorCharacters.POINT)
                " />
            </div>
          </div>
          <Button
            class="yellow_button"
            character="="
            data-cy="evaluation_button"
            @click="calculatorStore.evaluate()" />
        </div>
      </Keyboard>
    </Calculator>
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Calculator from "../components/calculator.vue";
import Keyboard from "../components/keyboard.vue";
import Button from "../components/button.vue";
import useCalculatorStore from "../stores/calculator_store";
import CalculatorCharacters from "../domains/calculator/calculator_characters";

const calculatorStore = useCalculatorStore();

onMounted(() => {
  calculatorStore.loadLastSessionCalculationExpression();
});
</script>

<style>
@import "../assets/colors/neutrals_colors.css";
@import "../assets/colors/primary_colors.css";
@import "../assets/colors/secondary_colors.css";

.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rem;
  min-height: 800rem;
}

.keyboard_one_slot_size_row {
  display: flex;
  gap: 10rem;
  height: 100%;
  max-height: 70rem;
  width: 100%;
}

.keyboard_two_slot_size_row {
  width: 100%;
  display: grid;
  grid-template-areas: "button-container button-container button-container equal-button";
  gap: 10rem;
  height: 200%;
  max-height: 150rem;
}

.keyboard_two_slot_size_row_button_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: button-container;
  flex-flow: column nowrap;
  gap: 10rem;
}

.keyboard_two_slot_size_row_button_container > div {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10rem;
}

.keyboard_two_slot_size_row_button_container > :nth-child(2) {
  width: 100%;
  height: 100%;
}

.keyboard_two_slot_size_row_zero_button_container > :nth-child(2) {
  max-width: 70rem;
}

.light_blue_button {
  background-color: var(--primary-400);
  border: 1rem;
  border-style: solid;
  border-color: var(--primary-500);
  color: var(--neutrals-900);
}

.light_blue_button:active {
  background-color: var(--primary-600);
}

.yellow_button {
  background-color: var(--secondary-500);
  border: 1rem;
  border-style: solid;
  border-color: var(--secondary-600);
  color: var(--neutrals-900);
}

.yellow_button:active {
  background-color: var(--secondary-700);
}

.dark_blue_button {
  background-color: var(--primary-900);
  border: 1rem;
  border-style: solid;
  border-color: var(--neutrals-900);
  color: var(--neutrals-100);
}

.dark_blue_button:active {
  background-color: var(--neutrals-900);
}

@media screen and (max-width: 400px) {
  .keyboard_two_slot_size_row_zero_button_container > :nth-child(2) {
    max-width: initial;
    width: 45%;
  }
}
</style>
