

export interface Istate3 {
    counter1: number;
    counter2: number;
    counter3?: number;
}

export interface IFormNew {
    pName: string;
    pEmail: string;
    pPassword: string;
}

export interface ICoors {
    pX: number;
    pY: number;
}


export interface IReqQuote {
    pData: IQuotes [];
    pLoading: boolean;
    pError: string;
}

export interface IQuotes {
    quote_id: number;
    quote: string;
    author: string;
    series: string;
}

export interface IPropsCounter {
    pCounterValue: number;
}

export interface IBtnIncrement {
    pFunctionIncrement (a:number) : void; 
    pIncrment: number;
}

export interface ITDList {
    pToDos: any;
    pF_handleToggleTask (a:number) : void;
    pF_handleClickDelete (a:number) : void;
}

export interface ITDLItem {
    pToDo2: ITodo;
    pIndex: number;
    pF_handleToggleTask2 (a:number) : void;
    pF_f_handleClickDelete2 (a:number) : void;
}

export interface IToDoAdd {
    pF_handleAddToDo (a: ITodo) : void;
}

export interface ITodo {
    id : number;
    desc: string;
    done: boolean;
}

export interface IUser {
    vUser: IUserContext,
    vSetUser ( a: {}): void; 
}

export interface IUserContext {
    vId?: number;
    vName?: string;
    vEmail?: string;
}






