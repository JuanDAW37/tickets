import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

/**
 * Método para leer un archivo JSON
 * @param path 
 * @returns 
 */
export const readJSON = (path) => require(path)