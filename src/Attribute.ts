export class Attribute{
    AttributeId: string;
    Value: string;
    DataType?: string;
    Issuer?: string;
    IncludeInResult: boolean = false;

    constructor(AttributeId: string, Value: string){
        this.AttributeId = AttributeId;
        this.Value = Value;
    }
}