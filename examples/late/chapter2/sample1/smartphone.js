import { Phone } from './phone.js';

class SmartPhone extends Phone
{
  apps;

  constructor(name, model, release, feature, apps) {
    super(name, model, release, feature);
    this.apps = apps;
  }
}

export { SmartPhone };
