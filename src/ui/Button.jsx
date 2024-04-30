import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-600 hover:text-stone-200 transition-colors duration-300 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300 disabled:cursor-not-allowed';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 hover:bg-stone-600 hover:text-stone-200 transition-colors duration-300 focus:bg-stone-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-300 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4',
  };

  if (!type) {
    type = 'primary';
  }

  if (to) {
    return (
      <Link
        to={to}
        className={styles[type]}
      >
        {' '}
        {children}{' '}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
