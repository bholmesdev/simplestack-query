import { defineConfig } from "astro/config";
import simpleStackQuery from "@simplestack/query";

export default defineConfig({
	integrations: [simpleStackQuery()],
});
