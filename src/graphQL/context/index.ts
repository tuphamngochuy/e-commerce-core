import { Context } from 'src/graphQL/context/type';

let _context: Context;

export function getCurrentContext(): Context {
  return _context;
}

export function setCurrentContext(context: Context): void {
  _context = context;
}
