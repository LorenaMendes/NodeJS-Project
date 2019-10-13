const Postagem = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
});

// Postagem.create({
// 	titulo: "UM TÍTULO QUALQUER",
// 	conteudo: "UM CONTEÚDO QUALQUER"
// })

const Usuario = sequelize.define('usuarios', {
	nome: {
		type: Sequelize.STRING
	},
	sobrenome: {
		type: Sequelize.STRING
	},
	idade: {
		type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	}
});

// Usuario.create({
// 	nome: "Lorena",
// 	sobrenome: "Mendes",
// 	idade: 21,
// 	email: "lorena@gmail.com"
// });

// Postagem.sync({force: true});
// Usuario.sync({force: true});

// sequelize.authenticate().then(function(){
// 	console.log("Successfuly connected!")
// }).catch(function(erro){
// 	console.log("Connection failed: " + erro)
// })