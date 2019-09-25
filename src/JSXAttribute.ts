export class JSXAttribute {
  constructor(private readonly name: string | null, private readonly value: string) {

  }

  render(): string {
    if (this.name) {
      return `${this.name}="${this.value}"`
    }
    return `${this.value}`;
  }
}
