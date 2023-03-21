export interface TodoItem{
    id: number;
    title: string;
    isCompleted?: boolean;
    createdAt?:Date;
    completedAt?:Date;
}