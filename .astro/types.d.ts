declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"article-1.md": {
	id: "article-1.md";
  slug: "article-1";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-10.md": {
	id: "article-10.md";
  slug: "article-10";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-11.md": {
	id: "article-11.md";
  slug: "article-11";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-12.md": {
	id: "article-12.md";
  slug: "article-12";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-2.md": {
	id: "article-2.md";
  slug: "article-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-3.md": {
	id: "article-3.md";
  slug: "article-3";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-4.md": {
	id: "article-4.md";
  slug: "article-4";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-5.md": {
	id: "article-5.md";
  slug: "article-5";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-6.md": {
	id: "article-6.md";
  slug: "article-6";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-7.md": {
	id: "article-7.md";
  slug: "article-7";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-8.md": {
	id: "article-8.md";
  slug: "article-8";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"article-9.md": {
	id: "article-9.md";
  slug: "article-9";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"expertise": {
"awareness-raising.md": {
	id: "awareness-raising.md";
  slug: "awareness-raising";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"case-management.md": {
	id: "case-management.md";
  slug: "case-management";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"child-protection.md": {
	id: "child-protection.md";
  slug: "child-protection";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"gbv.md": {
	id: "gbv.md";
  slug: "gbv";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"general-protection.md": {
	id: "general-protection.md";
  slug: "general-protection";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"health.md": {
	id: "health.md";
  slug: "health";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"legal-assistance.md": {
	id: "legal-assistance.md";
  slug: "legal-assistance";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"livelihood.md": {
	id: "livelihood.md";
  slug: "livelihood";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"psea.md": {
	id: "psea.md";
  slug: "psea";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"pss.md": {
	id: "pss.md";
  slug: "pss";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
"wash.md": {
	id: "wash.md";
  slug: "wash";
  body: string;
  collection: "expertise";
  data: InferEntrySchema<"expertise">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"projects": {
"project-23": {
	id: "project-23";
  collection: "projects";
  data: InferEntrySchema<"projects">
};
"project-24": {
	id: "project-24";
  collection: "projects";
  data: InferEntrySchema<"projects">
};
};
"reports": {
"annual-report-2017": {
	id: "annual-report-2017";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"annual-report-2018": {
	id: "annual-report-2018";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"annual-report-2019": {
	id: "annual-report-2019";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"annual-report-2020": {
	id: "annual-report-2020";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"annual-report-2021": {
	id: "annual-report-2021";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"annual-report-2022": {
	id: "annual-report-2022";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"open-space-event": {
	id: "open-space-event";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-april": {
	id: "outreach-report-23-april";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-august": {
	id: "outreach-report-23-august";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-july": {
	id: "outreach-report-23-july";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-june": {
	id: "outreach-report-23-june";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-march": {
	id: "outreach-report-23-march";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-may": {
	id: "outreach-report-23-may";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-november": {
	id: "outreach-report-23-november";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-october": {
	id: "outreach-report-23-october";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"outreach-report-23-september": {
	id: "outreach-report-23-september";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"sixteen-days-of-activisim-2023": {
	id: "sixteen-days-of-activisim-2023";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
"unicef-juvenile-justice-quarter-three-narrative-progress-report": {
	id: "unicef-juvenile-justice-quarter-three-narrative-progress-report";
  collection: "reports";
  data: InferEntrySchema<"reports">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
