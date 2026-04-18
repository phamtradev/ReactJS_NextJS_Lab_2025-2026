import clsx from 'clsx';

function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'h-11 w-full rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-rose-300 focus:ring-2 focus:ring-rose-200',
        className
      )}
      {...props}
    />
  );
}

export default Input;