export default class FormatHelper {
  static isEmpty(value: any): boolean {
    if ( value === '' || value == null || value === undefined ||
      (value != null && typeof value === 'object' && !Object.keys(value).length) ) {
      return true;
    }
    return false;
  }

  static isObject(value: any): boolean {
    return (!!value) && (value.constructor === Object);
  }

  static isArray(value: any): boolean {
    return (!!value) && (value.constructor === Array);
  }

  static isString(value: any): boolean {
    return typeof(value) === 'string';
  }
}
