export abstract class HttpAdapter {
    abstract get<T>(url: string, options?: any): Promise<T>;
}
