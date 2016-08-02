import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _lots = [];

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
    console.log('8.');
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
