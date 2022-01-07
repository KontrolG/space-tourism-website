export function PageTitle({ number, title }) {
  return (
    <h1 className="uppercase font-subheading tracking-[0.1688em] md:text-[1.25rem]">
      <span className="font-bold opacity-25">{number}</span> {title}
    </h1>
  );
}
