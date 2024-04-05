
/**
 * Utilize the optional chaining operator ?. to access the name of the group to which the user belongs
 * Note that the user may not have a group (null)
 * Return undefined if the user has no group
 * 
 * Example: 
 * {
 *   name: "John",
 *   group: {
 *     name: "admin"
 *   }
 * }
 * 
 * Should return "admin"
 * 
 */

const getGroupName = (obj) => {
    return obj?.group?.name;
}

module.exports = {getGroupName};