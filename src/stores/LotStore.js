import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

// let _lots = [];
let _lots = [
  {
    "_id": "57a0ed1b40c1b83b26b601dc",
    "name": "A",
    "totalSpots": 12,
    "price": 20,
    "__v": 0,
  },
  {
    "_id": "57a0ed2c40c1b83b26b601dd",
    "name": "B",
    "totalSpots": 10,
    "price": 25,
    "__v": 0,
  },
  {
    "_id": "57a0ed3740c1b83b26b601de",
    "name": "C",
    "totalSpots": 25,
    "price": 15,
    "__v": 0,
  },
  {
    "_id": "57a0ed4140c1b83b26b601df",
    "name": "D",
    "totalSpots": 12,
    "price": 15,
    "__v": 0,
  }
];


class LotStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_LOTS':
          _lots = action.lots;
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAllLots() {
    return _lots;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new LotStore();
