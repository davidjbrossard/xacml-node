import axios from "axios";
import { Attribute } from "../src/Attribute";
import { Category } from "../src/Category";
import { Request, RequestWrapper } from "../src/Request"
import { Response } from "../src/Response";
// 0. Parameters
const PDP_URL : string = "http://localhost:8380/authorize"

// 1. Build a XACML JSON request
// TODO: build utility methods
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
// 2. Send request to PDP
// Make a request for a user with a given ID
let decision: string = "TBD";
axios.post(PDP_URL, // destination
           w, // XACML JSON payload
           {
            headers:{
                'Authorization': 'Basic xxx' // Replace with your own credentials (Basic auth, token...)
            }
           })
  .then(function (response) {
    // handle success
    console.log(JSON.stringify(response.data));
    let xacmlResponse: Response = Object.assign(new Response, response.data); 
    console.log(xacmlResponse.Response[0].Decision);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
// 3. Process decision
console.log(decision);