import React from "react";

const Merge = (object, object2) => {
  return Object.assign(JSON.parse(JSON.stringify(object), JSON.stringify(object2)));
};

export default Merge;