import { Category } from "./Category";
import { ObligationOrAdvice } from "./ObligationOrAdvice";
import { PolicyIdentifierList } from "./PolicyIdentifierList";
import { Status } from "./Status";

export class Result{
    Decision: PDPDecision = PDPDecision.Deny;
    Status: Status = Status.OK;
    AssociatedAdvice: ObligationOrAdvice[];
    Obligations: ObligationOrAdvice[];
    Category: Category[];
    PolicyIdentifier: PolicyIdentifierList;
}   

enum PDPDecision{
    Permit = "Permit",
    Deny = "Deny",
    NotApplicable = "NotApplicable",
    Indeterminate = "Indeterminate"
}