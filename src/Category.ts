import { Attribute } from "./Attribute";

export class Category{
    CategoryId : string;
    Id: string;
    Content: string;
    Attribute: Attribute[] = [];
}