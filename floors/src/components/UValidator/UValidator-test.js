/**
 * UValidator test suite
 *
 * @ver 0.0.0
 * @author npm generator
 */

import React from 'react';
import UValidator from './UValidator';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import emptyFunction from 'fbjs/lib/emptyFunction';

describe('<UValidator />', () => {
  let component;

  beforeEach(() => {
    const props = {
      context: {
        insertCss: emptyFunction
      }
    };

    component = shallow(<UValidator {...props}/>);
  });

  it('should render without errors', () => {
    expect(component).to.not.be.undefined;
  });

});
