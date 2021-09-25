module.exports = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'developer',
  password: '12345678',
  database: 'web_developement',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
      migrationsDir: 'src/migrations',
  },
};