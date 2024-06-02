import { makeInstaller } from "@icgk-ui/utils";
import components from "./components";

const installer = makeInstaller(components);

export * from "@icgk-ui/components";

export default installer;