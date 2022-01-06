export function PageTitle({ number, title }) {
  return (
    <h1 className="uppercase font-subheading tracking-[2.7px]">
      <span className="font-bold opacity-25">{number}</span> {title}
    </h1>
  );
}
