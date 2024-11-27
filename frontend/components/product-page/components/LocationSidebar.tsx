import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
interface LocationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  firstField: any;
}
export function LocationSidebar({
  isOpen,
  onClose,
  firstField
  }: LocationSidebarProps){
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const options = ['50', '100', '200', '500', '1000','5000','5000000']; // 可选项
  
    // 处理输入变化
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
  
      // 过滤选项
      if (value) {
        const filtered = options.filter(option => option.includes(value));
        setFilteredOptions(filtered);
      } else {
        setFilteredOptions([]);
      }
    };
  
    // 处理点击选项
    const handleOptionClick = (option) => {
      setInputValue(option); // 设置输入框为点击的选项
      setFilteredOptions([]); // 清空补全列表
      handleSearch(); // 处理搜索
    };
  
    // 处理搜索
    const handleSearch = () => {
      if (filteredOptions.length === 0) {
        alert('No matching result'); // 显示没有匹配结果的提示
      } else {
        alert(`Searching for: ${inputValue}`); // 处理搜索逻辑
      }
    };
  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent className='relative'>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Find a store
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box className='pt-3'>
                {/* <FormLabel htmlFor='username'>Name</FormLabel> */}
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please search postcode'
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {filteredOptions.length > 0 && (
                  <div className="absolute z-10 w-[85%] bg-white border border-gray-300 mt-1 rounded shadow-lg">
                    {filteredOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="cursor-pointer hover:bg-gray-200 p-2"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                <p className='text-xs text-slate-500 p-2'>Start typing and choose a postcode or suburb from the list</p>
              </Box>
            </Stack>
          </DrawerBody>
          <div className='bg-neutral-300 h-4/5'>


          </div>

          {/* <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
  );
};

export default LocationSidebar;