export namespace Website {

    export function log(message: string): void {
        console.log(message);
    }

    export function err(
        message: string,
        error: Error = undefined,
    ): void {
        if (error) {
            console.error(error.stack);
        }
        console.error(message);
    }

}