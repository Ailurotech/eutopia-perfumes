import {
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface NumberAdderProps {
  onSetQuantity: (quantity: number) => void;
}

export function NumberAdder({ onSetQuantity }: NumberAdderProps) {
  return (
    <NumberInput
      step={1}
      min={0}
      max={999}
      defaultValue={1}
      onChange={(_, value) => onSetQuantity(value)}
      className="w-[85px] border-default"
    >
      <NumberInputField rounded="10px" fontSize="1.2rem" fontWeight="900" />
      <NumberInputStepper>
        <NumberIncrementStepper
          className="border-none"
          borderLeft={0}
          fontSize="2rem"
          textColor="default"
          _active="none"
          transform="translateX(-10px) translateY(-2px)"
          textAlign="center"
        >
          +
        </NumberIncrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
}
