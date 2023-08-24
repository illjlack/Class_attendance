const { authJwt } = require("../../middleware");

exports.isToken = (req, res) => {
  // 使用 authJwt.verifyToken 中间件验证令牌
  authJwt.verifyToken(req, res, (err) => {
    if (err) {
      // 如果令牌验证失败，直接返回
      return;
    }
    
    // 使用 authJwt.hasRole 中间件验证角色
    authJwt.hasRole("admin")(req, res, () => {
      // 用户已认证并具备所需角色，发送授权成功的响应
      return res.status(200).json({
        message: "Authorized!"
      });
    });
  });
};
