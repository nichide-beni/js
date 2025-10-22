import { Phone } from './phone.js';

class FeaturePhone extends Phone
{
  plans;

  constructor(name, model, release, feature, plans) {
    super(name, model, release, feature);
    this.plans = plans;
  }
}

export { FeaturePhone };
