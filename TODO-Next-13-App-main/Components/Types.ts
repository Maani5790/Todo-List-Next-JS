export interface Todo {
    id: number;
    title: string;
    complete: boolean;
};

export interface Todos {
    id: number;
    title: string;
    complete: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};