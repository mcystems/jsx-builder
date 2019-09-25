export class JSXAttribute {
   constructor(private readonly _name: string | null, private readonly _value: string) {

  }

  render(): string {
    if (this._name) {
      return `${this._name}="${this._value}"`
    }
    return `${this._value}`;
  }

  get name(): string | null {
    return this._name;
  }

  get value(): string {
    return this._value;
  }
}
