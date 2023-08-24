module.exports = {
    secret: "zheshiyigeyouqudedongxi", // 密钥，用于生成和验证 JWT
    algorithm: 'HS256',
    allowInsecureKeySizes: true,
    expiresIn: "7d" // JWT 过期时间，例如 "1h" 表示 1 小时,"7d"表示7天
  };