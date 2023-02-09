"use client";
import { ChangeEvent, FC, useState } from 'react';
import {
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    Input
} from '@chakra-ui/react';
import TodoList from './TodoList';
import { Todo } from './Types';

const Main: FC = () => {

    const [input, setInput] = useState<string>("");

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 0,
            title: "Learning Jamstack",
            complete: true
        },
        {
            id: 1,
            title: "Learning Serverless API's",
            complete: false
        },
    ]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (!input.length) return;

        const newTodos = [...todos, {
            id: Math.random(),
            title: input,
            complete: false
        }];

        setTodos(newTodos);
        setInput("");
    };

    const EmptyTodo = () => (
        <Badge colorScheme='red' p='4' m='4' borderRadius='lg'>
            No Todos Yay !!!
        </Badge>
    );

    const onToggle = (id: number): void => {

        const updateTodos = todos.map(todo => {

            if (todo.id === id) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            };

            return todo;
        });

        setTodos(updateTodos);
    };

    const onDelete = (id: number): void => {

        const deleteTodos = todos.filter((todo) => todo.id !== id);
        setTodos(deleteTodos);

    };

    return (
        <>
            <Flex
                as="form"
                w="full"
                maxW="xl"
                mx="auto"
                px={["2", "4", "4"]}
                alignItems="center"
                flexDirection="column"
                onSubmit={handleSubmit}
            >
                <Heading
                    mt="8"
                    mb="8"
                    as='h1'
                    fontSize={['4xl', '5xl', '5xl']}
                    fontWeight='extrabold'
                    bgGradient='linear(to-l, #0033ff, #0afffb)'
                    bgClip='text'
                >
                    Todo Application
                </Heading>
                <Input
                    color="white"
                    placeholder="Enter A Task..."
                    value={input}
                    onChange={handleChange}
                />
                <Button
                    w="full"
                    mt="4"
                    type="submit"
                    colorScheme="cyan"
                    color="white"
                >
                    Add Todo
                </Button>

                <Flex
                    color="white"
                    w="full"
                    flexDirection="column"
                    mt='4'
                >
                    {todos.map((todo) => (
                        <TodoList
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            complete={todo.complete}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                    <Box textAlign={"center"}>
                        {todos.length === 0 && <EmptyTodo />}
                    </Box>
                </Flex>
            </Flex>
        </>
    )
};

export default Main;