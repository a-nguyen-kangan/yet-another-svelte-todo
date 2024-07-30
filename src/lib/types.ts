export interface TodoItem {
    id: number | null;
    title: string;
    complete: boolean;
}

export interface AddTodoTemplate {
    title: string;
    complete: boolean;
}
// class TodoItem {
//     id: number;
//     title: string;
//     complete: boolean;

//     constructor(_id: number, _title: string, _complete: boolean) {
//         this.id = _id;
//         this.title = _title;
//         this.complete = _complete;
//     }

//     toggleComplete() {
//         this.complete = !this.complete;
//     }   
// }

