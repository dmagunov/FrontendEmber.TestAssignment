export default function() {

  this.get('/albums');
  this.get('/albums/:id');

  this.get('/songs');
  this.get('/songs/:id');
  this.patch('/songs/:id');
  this.post('/songs');

  this.get('/genres');
  this.get('/genres/:id');

  this.get('/artists');
  this.get('/artists/:id');
}
