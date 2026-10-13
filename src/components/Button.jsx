import { Link } from "react-router-dom";

export default function Button({ to, href, variant = "solid", children, ...rest }) {
  const cls = "btn btn-" + variant;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
