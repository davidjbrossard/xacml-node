import { Category } from "./Category";
import { MultiRequests } from "./MultiRequests";

export class Request{
    ReturnPolicyIdList : boolean = false;
    CombinedDecision: boolean = false;
    XPathVersion: string = "http://www.w3.org/TR/2007/REC-xpath20-20070123";
    customCategories: Category[] = [];
    Resource: Category[] = [];
    Action: Category[] = [];
    Environment: Category[] = [];
    AccessSubject: Category[] = [];
    RecipientSubject: Category[] = [];
    IntermediarySubject: Category[] = [];
    CodeBase: Category[] = [];
    RequestingMachine: Category[] = [];
    MultiRequests: MultiRequests = new MultiRequests;
}   