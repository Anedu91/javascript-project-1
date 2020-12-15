import dino from "./db";
import db from "./db";

const Dinos = {
  list: () => {
    return db.dinos;
  },
};
export { Dinos };
