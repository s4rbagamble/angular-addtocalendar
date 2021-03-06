import controller from './controller';
import bindings from './bindings';
import template from './template.html';

import './styles.scss';

const moduleName = 's4rb.angular-atc';

const controllerAs = 'addtocalendar';

const app = {
    template,
    controller,
    controllerAs,
    bindings
};

angular
  .module(moduleName, [])
  .controller('AddtocalendarCtrl', controller)
  .component(controllerAs, app);

export default moduleName;
