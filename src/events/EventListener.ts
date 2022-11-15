export interface IEventListener {
    Sequence: number;
    Execute?(name: string, lastEventResult: IEventListenerResult|null, ...args: any[]): IEventListenerResult;
}

export interface IEventListenerResult {
    ErrorOccurred: boolean;
    Error: string|Error;
    Result: any;
    DisableEventListening: boolean;
}

export abstract class EventListenerBase implements IEventListenerResult, IEventListener {

    public Sequence: number = 0;
    public ErrorOccurred: boolean = false;
    public Error: string | Error = null;
    public Result: any = null;
    public DisableEventListening: boolean = false;

    public Execute(name: string, lastEventResult: IEventListenerResult, ...args: any[]): IEventListenerResult {
        throw new Error('Method not implemented.');
    }
}