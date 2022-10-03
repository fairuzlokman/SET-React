import { get } from '.'

/**
 * Function to fetch/get list of universities
 */
export const getUniversities = async () => {
    const res = await get(
        'http://universities.hipolabs.com/search?country=Malaysia'
    );
    return res;
}