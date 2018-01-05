// import enzyme from 'enzyme'
import { mount } from '@skatejs/bore'
import { h } from '@skatejs/val'

/**
 * If you don't use react, you can use Bore to mount DOM elements.
 * Make sure Enzyme is commented out or removed.
*/

global.mount = mount
global.h = h

/**
 *  If you are using React, you can use Enzyme to mount components
 *  and test the DOM. Just un-comment the below and remove Bore.
 */

// global.enzyme = enzyme
// global.mount = enzyme.mount
// global.shallow = enzyme.shallow
// global.render = enzyme.render
