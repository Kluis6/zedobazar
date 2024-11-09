export default function MobileMenu({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <div
      className={`bg-neutral-50 transition-all absolute left-0 h-dvh ease-in duration-200 z-40 ${
        open ? "" : "-translate-x-full "
      }`}
    >
      <div>{children}</div>
    </div>
  );
}
