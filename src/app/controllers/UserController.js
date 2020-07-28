import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json({ users });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) { }

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({ user });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) { }

  async delete(req, res) { }
}

export default new UserController();

// ela vai continuar processando em quanto estiver processando
// assíncrona roda em paralelo com o código principal
