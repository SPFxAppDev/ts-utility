import getDeepOrDefault from "./getDeepOrDefault";
import isFunction from "./isFunction";
import isset from "./isset";

/**
 * Replaces all occurrences of the placeholder in the specified template
 * @param {string} [replaceTpl] The template/string with the placeholders that should be replaced
 * @param {object} [placeholderData] The object containing the data with which the placeholders are to be replaced
 * @param {string} [replaceMissingPlaceholderWith] If a template contains a placeholder that cannot be resolved, this placeholder can be replaced by a specific string. Otherwise, the placeholder is not replaced
 * @return {*}  {string} Returns a new string in which the placeholders have been replaced by the data
 * @since 1.2.0
 */
 export default function replaceTpl(template: string, placeholderData: object, replaceMissingPlaceholderWith?: string): string {
    let result = template.slice();
    
    result = result.replace(/\{([\w\.]*)\}/g, (placeholderMatch, placeholderKey): string => {

        const placeholderValue: any = getDeepOrDefault(placeholderData, placeholderKey);

        if (!isset(placeholderValue)) {

            if(isset(replaceMissingPlaceholderWith)) {
                return replaceMissingPlaceholderWith;
            }

            return placeholderMatch;
        }

        if (isFunction(placeholderValue)) {
          return placeholderValue.apply(placeholderData, null);
        }

        return placeholderValue;
      });

    return result;
}