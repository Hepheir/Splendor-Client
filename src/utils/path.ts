export function staticFile(path: string): string {
    return process.env.PUBLIC_URL + path;
}
