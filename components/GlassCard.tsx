export interface GlassCardProps {
  className: string;
  content: JSX.Element | undefined;
}

const GlassCard = (input: GlassCardProps): JSX.Element => {
  const { className, content } = input;

  const defaultClass =
    "backdrop-blur-sm   " +
    " bg-slate-300 bg-opacity-40" +
    " text-blue-800 shadow-slate-100";

  // Replace the default with overwriteDefaultClass if it's
  // not empty(or whites space only) it wins the or
  // statement and is preserved.  Otherwise, we use the default
  const compositeClassName = `${defaultClass} ${className}`;
  return <div className={compositeClassName}>{content}</div>;
};
export default GlassCard;
