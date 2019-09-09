if (!String.prototype.isUnique) {
  /**
   * @global
   * @name String.prototype.isUnique
   * @desc String.prototype function to check if each char in string is unique
   * @return { Boolean }
   *  */
  String.prototype.isUnique = function() {
    "use strict";

    // init set
    const stringSet = new Set();

    //iterate through str(this)
    for (const char of this) {
      if (stringSet.has(char)) {
        return false; // stringSet contains a value, return false, not unique
      } else {
        letterSet.add(char); // add to set
      }
    }

    return true; //End of string, no dupes, is unique
  };
}
