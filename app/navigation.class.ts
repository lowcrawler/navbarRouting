export class Navigation {
    label: string;
    route: string;

    constructor(_label: string, _route: string) {
        this.label = _label;
        this.route = _route;
    }

    getRoute() {
        return this.route;
    }

    getLabel() {
      return this.label;
    }

    toString() {
      return "Navigation Object: (Label: " + this.label + ", " + this.route + ")";
    }
}
