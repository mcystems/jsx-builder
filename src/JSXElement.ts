import {JSXAttribute} from "./JSXAttribute";

export class JSXElement {
  private _attributes: JSXAttribute[] = [];
  private _children: JSXElement[] = [];

  constructor(private readonly _parent: JSXElement | null, private readonly _name: string, private readonly _text: string | null) {

  }

  element(name: string, text: string): JSXElement {
    const e = new JSXElement(this, name, text);
    this._children.push(e);
    return e;
  }

  attribute(name: string | null, value: string): this {
    this._attributes.push(new JSXAttribute(name, value));
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
    return `<${this.name}${this.attributes.length > 0 ? ' ' : ''}${this.attributes.map(a => a.render())
        .join(' ')}${this.children.length === 0 ? '/' : ''}>`
      + (this.text ? this.text : '') + this.children.map(c => c.render())
        .join('') + (this.children.length === 0 ? '' : `</${this.name}>`);
  }
}
