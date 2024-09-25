import {
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

export function NumberAdder() {
  return (
    <NumberInput step={1} min={0} max={999} defaultValue={1}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper>+</NumberIncrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
}
