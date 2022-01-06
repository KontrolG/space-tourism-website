/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from "next/link";

const Link = ({
  children = null,
  className = null,
  title,
  style = {},
  onClick,
  "data-testid": dataTestId,
  ...nextLinkProps
}) => (
  <NextLink {...nextLinkProps}>
    <a
      className={className}
      style={style}
      title={title}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </a>
  </NextLink>
);

export { Link };
