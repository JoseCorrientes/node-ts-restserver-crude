import { envs } from "./config/envs";
import { routes } from "./presentation/routes";
import { ServerApp } from "./presentation/serverApp";





const main = ()=>{
    
    const server  = new ServerApp({
        port: envs.port,
        routes: routes.routes
    })
    server.start()

}




(()=>{
    main()
})()
