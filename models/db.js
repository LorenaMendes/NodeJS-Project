const Sequelize = require('sequelize')

// Conexão com o MySQL
	const sequelize = new Sequelize('postapp', 'root', 'Minhasenh@00', {
		host: "localhost",
		dialect: 'mysql'
	})

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}