export interface DoneItem{
    id: number;
    title: string;
    isCompleted?: boolean;
    createdAt?:Date;
    completedAt?:Date;
}