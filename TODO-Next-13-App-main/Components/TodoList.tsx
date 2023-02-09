"use client";
import { FC } from 'react';
import {
    Checkbox,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    Text
} from '@chakra-ui/react';
import { Todos } from './Types';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoList: FC<Todos> = ({ id, title, complete, onToggle, onDelete }) => {
    return (
        <>
            <Flex py={'2'}>
                <Checkbox
                    w="full"
                    isChecked={complete}
                    onChange={() => onToggle(id)}
                >
                    <Text
                        as={complete ? "s" : "p"}
                    >
                        {title}
                    </Text>
                </Checkbox>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        colorScheme="blackalpha.600"
                        icon={<DeleteIcon />}
                        variant='ghost'
                        onClick={() => onDelete(id)}
                    />
                </Menu>
            </Flex>
        </>
    )
};

export default TodoList;