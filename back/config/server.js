module.exports = ({ env }) => ({
  host: env('0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e8504df9859ed33e6ab9c34c04f83e75'),
    },
  },
});
