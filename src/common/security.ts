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
    const password = await bcrypt.hash(rawPassword, salt);

    return {
      password,
      salt,
    };
  }
}

export default Security;
