import { GraphQLScalarType, Kind } from "graphql";

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function validate(uuid: unknown): string | never {
  if (typeof uuid !== "string" || !regex.test(uuid)) {
    throw new TypeError(`${uuid} is not a valid UUID`);
  }
  return uuid;
}

export const UUIDScalar = new GraphQLScalarType({
  name: "UUID",
  description: "A simple UUID parser",
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral: (ast) => {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError("Input kind only support STRING");
    }

    return validate(ast.value);
  },
});
