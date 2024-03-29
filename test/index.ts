import { Attribute } from "../src/Attribute";
import { Category } from "../src/Category";
import { Request, RequestWrapper } from "../src/Request"
let r : Request = new Request();
let c: Category = new Category();
let a: Attribute = new Attribute("username","Alice");
a.AttributeId = "username";
a.Value = "Alice";
c.Attribute.push(a);
r.AccessSubject = [];
r.AccessSubject.push(c);
let w: RequestWrapper = new RequestWrapper(r);
console.log(JSON.stringify(w));