export class AttributeAssignment{
    AttributeId: string;
    Value: any;
    Category?: string;
    DataType?: string;
    Issuer?: string;

    constructor(AttributeId: string, Value: string){
        this.AttributeId = AttributeId;
        this.Value = Value;
    }
}