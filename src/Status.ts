import { StatusCode } from "./StatusCode";

enum StatusCodeIdentifiers{
    // This identifier indicates success.
    OK="urn:oasis:names:tc:xacml:1.0:status:ok",
    // This identifier indicates that all the attributes necessary to make a policy decision were not available (see Section 5.58).
    MISSING_ATTR="urn:oasis:names:tc:xacml:1.0:status:missing-attribute",
    // This identifier indicates that some attribute value contained a syntax error, such as a letter in a numeric field.
    SYNTAX_ERR="urn:oasis:names:tc:xacml:1.0:status:syntax-error",
    // This identifier indicates that an error occurred during policy evaluation.  An example would be division by zero.
    PROCESSING_ERR="urn:oasis:names:tc:xacml:1.0:status:processing-error"
}

export class Status{
    StatusCode: StatusCode;
    StatusMessage: string;
    StatusDetail: any[];
    public static readonly OK = new Status(StatusCodeIdentifiers.OK);

    constructor(message: StatusCodeIdentifiers){
        this.StatusMessage = message;
        this.StatusCode = new StatusCode();
        this.StatusCode.Value = message;
    }
}   
