var notes = require('../Controleur/controle');


module.exports.route =function (app) {

app.route('/eleve')
  .post(notes.addEleve)
  .get(notes.getEleve)
  .delete(notes.deleteEleve)

}
