
import { UserService } from './services/mongodb.service';
import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
import * as io from 'socket.io-client/dist/socket.io';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebsocketService {

  private socket = io('http://localhost:3000');
  constructor() { }

  joinRoom(data) {
    console.log(data);
    this.socket.emit('join', data);
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    const observable = new Observable<{ user: String, message: String}>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  typing(data) {
    this.socket.emit('typing', data);
  }

  receivedTyping() {
    const observable = new Observable<{ isTyping: boolean}>(observer => {
      this.socket.on('typing', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}