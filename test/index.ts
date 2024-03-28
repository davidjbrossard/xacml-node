import { Attribute } from "../src/Attribute";
import { Category } from "../src/Category";
import { Request } from "../src/Request"
let r : Request = new Request();
let c: Category = new Category();
let a: Attribute = new Attribute();
a.AttributeId = "username";
a.Value = "Alice";
c.Attribute.push(a);
r.AccessSubject.push(c);
console.log(JSON.stringify(r));