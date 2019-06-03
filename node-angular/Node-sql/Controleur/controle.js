
module.exports.addEleve = function(req, res) {

console.log(req.body)
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let age = req.body.age;   
 console.log("tafiditra eleve",nom,prenom,age)
    // send the player's details to the database
    let query = "INSERT INTO `eleve` (nom, prenom, age) VALUES ('" + nom + "', '" + prenom  + "', '" + age + "')";

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        console.log("result  ",result)
        res.send('post reussi');
    });
};


module.exports.getEleve = function(req, res) {
    // send the player's details to the database
    let query = "SELECT * FROM eleve";

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        console.log("result  ",result)
        res.send(result);
    });
};


module.exports.deleteEleve = function(req, res) {
    // send the player's details to the database
    let id = req.body.id
    let query = "DELETE FROM eleve WHERE id='"+id+"'";

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        console.log("result  ",result)
        res.send('suppression reussi');
    });
};







// var Eleve = require('../Model/eleve.model');


// // Create tableau des eleves
// module.exports.PosteEleve = function(req,res) {
   
    
//     var nom = req.body.nom
//     var prenom = req.body.prenom
//     var age  = req.body.age
//      var classe = req.body.classe
     
//      Eleve.find()
//             .then(note0 => {
//                 // if(note0.length==0) {
//                 //     id = 0;
//                 //     console.log('mbola',id);
                    
//                 // }else{
//                 //     id = parseInt(note0[note0.length-1].id)+1;
//                 // }

//             const insert = new Eleve({nom:nom,prenom:prenom,age:age,classe:classe});
//             (!nom || !prenom)? console.log("reussi"):insert.save()
//                 .then(()=>{
//                     Eleve.find()
//                         .then(note=>{
//                             res.send(note);
//                         })
//                 })
//                 .catch(e=>{
//                     res.status(500).send({mes:e.mes || "erreur"})
//                 })
//             })
//     }


//     module.exports.GetEleve = (req, res) => {
//         Eleve.find()
//             .then(note=>{
//                 res.send(note)
//             })
//             .catch (e =>{
//                 res.status(500).send({mes:e.mes || "erreur"})
//             });
//     };
    
