import { order } from "./order";
import { mockitems } from "./mock-items";

export const mockorders : order[] = [
  {
    id : "1",
    items : [mockitems[0] , mockitems[1] , mockitems[2]]
  },
  {
    id : "2",
    items : [mockitems[0] , mockitems[1] ]
  },
]
