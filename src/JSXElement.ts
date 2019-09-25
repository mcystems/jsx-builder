import {JSXAttribute} from "./JSXAttribute";

export class JSXElement {
  private _attributes: JSXAttribute[] = [];
  private _children: JSXElement[] = [];
  private _text: string = '';

  constructor(private readonly _parent: JSXElement | null, private readonly _name: string) {

  }

  element(name: string): JSXElement {
    const e = new JSXElement(this, name);
    this._children.push(e);
    return e;
  }

  attribute(name: string | null, value: string): this {
    this._attributes.push(new JSXAttribute(name, value));
    return this;
  }

  text(txt: string): this {
    this._text = txt;
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

  render(): string {
    return `<${this.name}${this.attributes.length > 0 ? ' ' : ''}${this.attributes.map(a => a.render())
        .join(' ')}${this.children.length === 0 ? '/' : ''}>`
      + (this._text ? this._text : '') + this.children.map(c => c.render())
        .join('') + (this.children.length === 0 ? '' : `</${this.name}>`);
  }
}
