// Type definitions for XDomUtil
// Project: XDomUtil
// Definitions by: tomsa.md


/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

// export as namespace XDomUtil;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */

declare class XDomUtil {
    public static addClass(element: any, className: string): void;

    public static hasClass(element: any, className: string): boolean;

    public static removeClass(element: any, className: string): void;

}

export {XDomUtil};
