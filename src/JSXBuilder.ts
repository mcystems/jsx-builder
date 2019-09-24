import {JSXBuilderOptions} from "./JSXBuilderOptions";
import {JSXElement} from "./JSXElement";

export class JSXBuilder {
  constructor(private readonly options: JSXBuilderOptions) {

  }



  render(root: JSXElement): string {
    let jsx: string = `<${root.name} ${root.attributes.map(a => {
      if(a.name) {
        return `${a.name}=${a.value}`
      }
      return a.value;
    }).join(' ')}>`;

    return jsx;
  }
}
