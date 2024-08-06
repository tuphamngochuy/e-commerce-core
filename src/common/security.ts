import bcrypt from 'bcrypt';

class Security {
  static async createPassword({
    rawPassword,
    saltLength = 10,
  }: {
    rawPassword: string;
    saltLength?: number;
  }) {
    const salt = await bcrypt.genSalt(saltLength);

    return bcrypt.hash(rawPassword, salt);
  }
}

export default Security;
