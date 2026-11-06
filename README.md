# Life, Design, Games, Code

Astro + Pagefind + Sveltia CMS, hosted on GitHub Pages at https://siowyisheng.github.io/blog/.

## Writing a post

Open `/blog/admin/` on any device, sign in with a GitHub fine-grained personal access token
(Contents: read & write, this repo only), write, and press Publish. The commit to `master` triggers a deploy.
Tick **Draft** to save a post without showing it to readers.

Posts are plain markdown in `src/content/posts/` with `title`, `date`, `tags`, `draft` front matter.

## Develop

```sh
npm install
npm run dev      # drafts are visible in dev
npm run build    # builds the site and the search index into dist/
```

See `CONTEXT.md` for the project's vocabulary.
