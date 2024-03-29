import { AttributeAssignment } from "./AttributeAssignment";

export class ObligationOrAdvice{
    Id: string;
    AttributeAssignment: AttributeAssignment[] = [];
    
    constructor(Id: string){
        this.Id = Id;
    }
}