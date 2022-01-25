export class XDomUtil {
  /**
   * Add the class to the DOM element
   * @param element DOM element
   * @param className string Name of the class to be added to the DOM element
   */
  static addClass(element: any, className: string): void {
    element.className = (element.className + ' ' + className).trim();
  }

  /**
   * Check if the DOM element has a specific class
   * @param element DOM element to be checked
   * @param className string Name of the class to be checked
   * @returns {boolean} Returns TRUE is the elements has the class and FALSE is there is no such class
   */
  static hasClass(element: any, className: string): boolean {
    return (!className || (' ' + element.className + ' ').indexOf(' ' + className + ' ') == -1) ? false : true;
  }

  /**
   * Remove the class from the DOM element
   * @param element DOM element
   * @param className string Name of the class to be removed from the DOM element
   */
  static removeClass(element: any, className: string): void {
    let currentClassName = ' ' + element.className;
    element.className = currentClassName.replace(' ' + className, '');
  }
}
