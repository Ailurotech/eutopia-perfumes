import { Spinner } from "@chakra-ui/react";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-60">
      <Spinner
        thickness="5px"
        speed="0.6s"
        emptyColor="gray.200"
        color="#808274"
        size="xl"
      />
    </div>
  );
}
