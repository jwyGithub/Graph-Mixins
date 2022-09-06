import { KeyboardEventListener, MouseEventListener } from '../types';
/**
 * A singleton class that implements a simple console.
 *
 * Variable: consoleName
 *
 * Specifies the name of the console window. Default is 'Console'.
 */
declare class MaxLog {
    static textarea: HTMLTextAreaElement | null;
    static window: any;
    static td: any;
    /**
     * Initializes the DOM node for the console.
     * This requires document.body to point to a non-null value.
     * This is called from within setVisible if the log has not yet been initialized.
     */
    static init(): void;
    static consoleName: string;
    /**
     * Specified if the output for <enter> and <leave> should be visible in the
     * console. Default is false.
     */
    static TRACE: boolean;
    /**
     * Specifies if the output for <debug> should be visible in the console.
     * Default is true.
     */
    static DEBUG: boolean;
    /**
     * Specifies if the output for <warn> should be visible in the console.
     * Default is true.
     */
    static WARN: boolean;
    /**
     * Buffer for pre-initialized content.
     */
    static buffer: string;
    /**
     * Writes the current navigator information to the console.
     */
    static info(): void;
    /**
     * Adds a button to the console using the given label and function.
     */
    static addButton(lab: string, funct: MouseEventListener | KeyboardEventListener): void;
    /**
     * Returns true if the console is visible.
     */
    static isVisible(): any;
    /**
     * Shows the console.
     */
    static show(): void;
    /**
     * Shows or hides the console.
     */
    static setVisible(visible: boolean): void;
    /**
     * Writes the specified string to the console if TRACE is true and returns the current time in milliseconds.
     */
    static enter(string: string): number | undefined;
    /**
     * Writes the specified string to the console
     * if <TRACE> is true and computes the difference
     * between the current time and t0 in milliseconds.
     * See <enter> for an example.
     */
    static leave(string: string, t0: number): void;
    /**
     * Adds all arguments to the console if DEBUG is enabled.
     */
    static debug(...args: string[]): void;
    /**
     * Adds all arguments to the console if WARN is enabled.
     */
    static warn(...args: string[]): void;
    /**
     * Adds the specified strings to the console.
     */
    static write(...args: string[]): void;
    /**
     * Adds the specified strings to the console, appending a linefeed at the end of each string.
     */
    static writeln(...args: string[]): void;
}
export default MaxLog;