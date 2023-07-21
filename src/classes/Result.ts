import { isset } from '../functions';

export interface IResult<T> {
  originalError?: any;
  error?: any;
  value: T | null;
  success: boolean;
}

export class Result<T> implements IResult<T> {
  private _error: any = null;
  public get error(): any {
    return this._error;
  }

  public set error(val: any) {
    this._error = val;
    this.success = false;

    if (!isset(this.originalError)) {
      this.originalError = val;
    }
  }

  public originalError?: any = null;
  public value: T | null = null;
  public success: boolean;

  public constructor(success: boolean = true) {
    this.success = success;
  }
}
