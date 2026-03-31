export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Shendri Kenneth Yamba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
