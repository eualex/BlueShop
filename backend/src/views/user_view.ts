import User from '../models/User';

export default {
  render(user: User, token?: string, admin?: boolean) {
    return {
      name: user.name,
      email: user.email,
      token,
      admin
    }
  }
}