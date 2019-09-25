import {JSXElement} from "../src/JSXElement";
import {expect} from "chai";

describe('JSXElement tests', () => {
  it('1', () => {
    const e = new JSXElement(null, 'div', null);
    expect(e.render()).to.eq('<div />');
  });
  it('1.1', ()=> {
    const e = new JSXElement(null, 'div', null);
    e.attribute('className',`{classnames('a', {e: true})}`);
    e.attribute(null, '{...this.props}');
    expect(e.render()).to.eq(`<div className="{classnames('a', {e: true})}" {...this.props}/>`);
  });
  it('2', ()=> {
    const e = new JSXElement(null, 'div', null);
    e.element('asv','hello').element('bsv', 'bello');
    e.attribute('className',`{classnames('a', {e: true})}`);
    e.attribute(null, '{...this.props}');
    expect(e.render()).to.eq(`<div className="{classnames('a', {e: true})}" {...this.props}><asv>hello<bsv/>bello</asv></div>`);
  })
});
