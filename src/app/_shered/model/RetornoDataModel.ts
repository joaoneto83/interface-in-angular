import { ResultDataModel } from './RetornoModel';

export class RetornoDataModel<T> {
    
    result:ResultDataModel<T>;
    id:Number;
    exception:any;
    status:Number;
    isCanceled:boolean;
    isCompleted:boolean;
    isCompletedSuccessfully:boolean;
    creationOptions:Number;
    asyncState:any;
    isFaulted:boolean;
}