export const metadata = {
  title: "About us",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <body>{children}</body>
      &copy; Next JS is great!
    </div>
  );
}
