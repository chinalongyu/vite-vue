import type { App, DefineComponent, Plugin, defineComponent } from "vue";
import { each } from 'lodash-es';

type SFCWithInstall<T extends DefineComponent<any, any, any>> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
    const installer = (app: App) => {
        return each(components, c => app.use(c))
    }

    return installer
}

export const withInstall = <T extends DefineComponent<any, any, any>>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = component.name;
        app.component(name, component)
    }

    return component as SFCWithInstall<T>
}

