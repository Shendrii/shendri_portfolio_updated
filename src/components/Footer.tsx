export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Shendri Kenneth Yamba. All rights reserved.
        </p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          Let&apos;s talk —{" "}
          <a
            href="mailto:shendrikenneth.yamba@gmail.com"
            className="font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
          >
            Email
          </a>{" "}
          <span aria-hidden="true">·</span>{" "}
          <a
            href="https://www.linkedin.com/in/shendriyamba"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
