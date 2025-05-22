export interface CardProps {
    id: string;
    title: string;
    content: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface CardLayoutItem {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
    static?: boolean;
}

export interface CreateCardParams {
    title?: string;
    content?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    parentId?: string;
}

export interface UpdateCardParams {
    id: string;
    title?: string;
    content?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
}
