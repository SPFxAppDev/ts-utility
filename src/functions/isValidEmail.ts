import isNullOrEmpty from './isNullOrEmpty';
/**
 * Checks if the passed value is a valid email
 *
 * @param {string} email the value to check
 * @return {boolean} If the passed value is a valid email <c>true</c> otherwise <c>false</c>
 * @example isValidEmail('seryoga@spfx-app.dev') // ==> returns true 
 * @example isValidEmail('spfx-app.dev') // ==> returns false
 * @since 1.1.0
 */
export default function isValidEmail(email: string): boolean {

    if(isNullOrEmpty(email)) {
        return false;
    }

    if(typeof email !== "string") {
        return false;
    }

    return !isNullOrEmpty(email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ));
}