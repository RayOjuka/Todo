/* var model = {
    user: 'Ojuka',
    items: [{ action: 'Buy Flowers', done: false},
{ action: 'Get Shoes', done: false},
{ action: 'Collect tickets', done: true},
{ action: 'Call Joe', done: false}]
}; */

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}

export class Model {
    user;
    items;
    constructor() {
        this.user = 'Ojuka';
        this.items = [new TodoItem('Buy Flowers', false),
        new TodoItem('Get Shoes', false),
        new TodoItem('Collect Tickets', false),
        new TodoItem('Call Joe', false)];
    }
}


