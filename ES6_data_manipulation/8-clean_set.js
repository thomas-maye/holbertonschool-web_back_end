/*eslint-disable*/
export default function cleanSet(set, start_string) {
    if (!set || !start_string) {
        return '';
    }
    let result = '';
    for (const item of set) {
        if (item.startsWith(start_string)) {
            result += (result ? '-' : '') + item.slice(start_string.length);
        }
    }
    return result;
    }