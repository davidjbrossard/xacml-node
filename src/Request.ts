import { Category } from "./Category";
import { MultiRequests } from "./MultiRequests";

export class Request{
    ReturnPolicyIdList? : boolean;
    CombinedDecision?: boolean;
    XPathVersion?: string;// = "http://www.w3.org/TR/2007/REC-xpath20-20070123";
    customCategories?: Category[];
    Resource?: Category[];
    Action?: Category[];
    Environment?: Category[];
    AccessSubject?: Category[];
    RecipientSubject?: Category[];
    IntermediarySubject?: Category[];
    CodeBase?: Category[];
    RequestingMachine?: Category[];
    MultiRequests?: MultiRequests;
}  

export class RequestWrapper{
    Request: Request;

    constructor(r: Request){
        this.Request = r;
    }
}