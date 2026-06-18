// @ts-check
import { defineConfig } from "electro/config";
import mdx from "@electrojs/mdx";
import sitemap from "@electrojs/sitemap";

import cloudflare from "@electrojs/cloudflare";

// https://electro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
