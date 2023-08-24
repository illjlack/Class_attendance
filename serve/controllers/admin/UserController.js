const db = require("../../models");
const UserInfo = db.UserInfo;
const Op = db.Sequelize.Op;
const config = require("../../config/auth.config");
var jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const { login, password } = req.body;
    //console.log(req.body);
    if (!login || !password) {
        return res.status(400).json({ message: 'Login and password are required.' });
    }

    UserInfo.findOne({ where: { login } })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: '用户不存在' });
            }

            // 比较密码是否匹配
            if (user.password !== password) {
                return res.status(401).json({ message: '密码错误' });
            }

            // 判断用户是否为管理员
            if (user.role === 'admin') {
                // 登录成功，返回用户信息或其他响应
                const token = jwt.sign({ login: user.login }, config.secret, {
                    algorithm: config.algorithm,
                    allowInsecureKeySizes: config.allowInsecureKeySizes, 
                    expiresIn: config.expiresIn, 
                });

                return res.status(200).json({
                    message: 'Login successful.',
                    user: {
                        name: user.name,
                        login: user.login,
                        role: user.role,
                    },
                    token: token,
                });
            } else {
                return res.status(403).json({ message: '拒绝访问，不是管理员' });
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: '登录时发生错误' });
        });
};

exports.getAllUsers = (req, res) => {
    UserInfo.findAll()
      .then((users) => {
        res.status(200).json({
          success: true,
          data: users,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "An error occurred while fetching users.",
          error: error.message,
        });
      });
  };


  exports.updateUser = (req, res) => {
    const { id,name, login,password,role,status } = req.body;

    // 检查是否提供了 userId 和必要的数据
    if (!id || !name || !login) {
        return res.status(400).json({ message: '用户 ID、姓名和登录名是必填项。' });
    }

    UserInfo.findByPk(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: '用户未找到。' });
            }

            // 检查登录名是否与其他用户重复
            UserInfo.findOne({ where: { login, id: { [Op.ne]: id } } })
                .then(existingUser => {
                    if (existingUser) {
                        return res.status(400).json({ message: '登录名已存在，请选择其他登录名。' });
                    }

                    // 更新用户数据
                    user.name = name;
                    user.login = login;
                    user.password= password;
                    user.role=role;
                    user.status=status;
                    
                    // 保存更新后的用户数据到数据库
                    user.save()
                        .then(updatedUser => {
                            res.status(200).json({
                                message: '用户数据已成功更新。',
                            });
                        })
                        .catch(err => {
                            console.error(err);
                            res.status(500).json({ message: '在更新用户数据时发生错误。' });
                        });
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ message: '在检查登录名是否重复时发生错误。' });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: '在查找用户时发生错误。' });
        });
};
