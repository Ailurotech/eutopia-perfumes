import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { NavigationMenu } from "./NavigationMenu";
import clsx from "clsx";
import { NavigationRoute } from "../route";
import { Icon } from "../common/Icon";

export function NavigationDrawer() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="whiteAlpha"
        variant="buttonLink"
        size="lg"
      >
        <Icon name="menu" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} size="xs" colorScheme="green">
        <DrawerOverlay />
        <DrawerContent
          className={clsx("py-4")}
          backgroundColor="rgba(102,104,90,0.9)"
          color="white"
        >
          <DrawerCloseButton fontSize="0.8rem" top="1.5rem" right="1.5rem" />
          <DrawerHeader
            borderBottomWidth="1px"
            borderBottomColor="white"
            fontSize="1.5rem"
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <ul className="space-y-4">
              <NavigationMenu
                navigationMenuRoute={NavigationRoute}
                direction="vertical"
              />
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
