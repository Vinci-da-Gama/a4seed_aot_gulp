declare module 'postcss-assets' {

    interface IOptions {
        loadPaths?: string[];
        basePath?: string;
        baseUrl?: string;
        relative?: boolean;
        cachebuster?: boolean | Function;
    }

    interface IAssets {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const assets: IAssets;
    export = assets;

}