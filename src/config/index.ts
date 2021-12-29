
export default {
  SERVER: {
    port: process.env.PORT || 1337,
    host: 'localhost'
  },
  MAIL: {
    GMAIL_USER: process.env.GMAIL_AUTH_USER,
    GMAIL_PASS: process.env.GMAIL_AUTH_PASS,
    HOST: 'smtp.gmail.com',
    PORT: 587
  }
}
