export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'portr_strapi_db'),
      user: env('DATABASE_USERNAME', 'auxilium'),
      password: env('DATABASE_PASSWORD', 'Auxilium@123'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
