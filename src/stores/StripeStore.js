import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _stripe = {};

class StripeStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case 'RECEIVE_STRIPE':
          _stripe = action.stripeObj.charge;
          this.emit('CHANGE');
          break;
      }
    });
  }

  getStripeTrans() {
    return _stripe;
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }
}

export default new StripeStore();
