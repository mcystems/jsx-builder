import {JSXAttribute} from "./JSXAttribute";

export class JSXElement {
  private _attributes: JSXAttribute[] = [];
  private _children: JSXElement[] = [];

  constructor(private readonly _parent: JSXElement | null, private readonly _name: string, private readonly _text: string | null) {

  }

  element(name: string, attribute: JSXAttribute, text: string): JSXElement {
    const newElement = new JSXElement(this, name, text);
    newElement.attribute(attribute);
    return newElement;
  }

  attribute(attribute: JSXAttribute): this {
    this._attributes.push(attribute);
    return this;
  }

  up(): JSXElement | null {
    return this._parent;
  }

  get attributes(): JSXAttribute[] {
    return this._attributes;
  }

  get children(): JSXElement[] {
    return this._children;
  }

  get parent(): JSXElement | null {
    return this._parent;
  }

  get name(): string {
    return this._name;
  }

  get text(): string | null {
    return this._text;
  }

  render(): string {
    return `<${this.name} ${this.attributes.map(a => {
        if (a.name) {
          return `${a.name}=${a.value}`
        }
        return a.value;
      }).join(' ')}${this.children.length === 0 ? '/' : ''}>`
      + this.children.map(c => c.render()).join('') + (this.children.length === 0 ? '' : `</${this.name}>`);
  }
}
