export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment) {
    'ngInject';
      console.log('test');
    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).format();
  }
}