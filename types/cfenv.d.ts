declare module "cfenv" {

    export interface Options {
        vcapFile?: string;
        vcap?: VCAP;
        name?: string;
        protocol?: string;
    }
    export type Services = {
        [serviceName: string]: Service[];
    };
    export interface VCAP {
        application: App;
        services: Services;
    }
    export interface Service {
        name: string;
        credentials: {
            [k: string]: string;
        };
    }
    export interface App {
        name: string;
        host: string;
        uris: string[];
    }
    /**
      * Discover application information from $VCAP_APPLICATION / $VCAP_SERVICES.
      *
      * @param options Overrides for local usage outside of Cloud Foundry.
      */
    export function getAppEnv(options?: Options): AppEnv;
    export class AppEnv {
        /**
         * Does the application think its running locally, or is it running within Cloud Foundry (false).
         */
        isLocal: boolean;
        /**
         * All information provided to application about itself within this Cloud Foundry instance.
         */
        app: App;
        /**
         * The collection of service instances, grouped by service type, currently bound to application.
         */
        services: Services;
        /**
         * Name of applicaition within Cloud Foundry development space.
         */
        name: string;
        /**
         * Port for application to listen for incoming traffic.
         */
        port: number;
        /**
         * Host address for application to bind to for incoming traffic.
         */
        bind: string;
        /**
         * List of hostnames currently routing traffic to application.
         */
        urls: string[];
        /**
         * One of the hostnames currently routing traffic to application.
         */
        url: string;
        constructor(options?: Options);
        private getVcapFromFile;
        /**
          * Used by JSON.stringify() to display AppEnv in JSON format.
          */
        toJSON(): any;
        getServices(): {
            [name: string]: Service;
        };
        getService(spec: RegExp | string): Service | null;
        getServiceURL(spec: RegExp | string, replacements?: {
            [key: string]: any;
        }): string;
        getServiceCreds(spec: RegExp | string): any;
    }
    export function getApp(appEnv: AppEnv, options: Options): App;
    export function getServices(appEnv: AppEnv, options: Options): Services;
    export function getPort(appEnv: AppEnv): number;
    export function getName(appEnv: AppEnv, options: Options): string;
    export function getBind(appEnv: AppEnv): string;
    export function getURLs(appEnv: AppEnv, options: Options): string[];

}
