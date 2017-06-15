// @flow

type Func = string => Object => Object;

/**
 * For react-router <Link />
 * ref: https://github.com/ReactTraining/react-router/blob/master/docs/API.md#props-1
 *
 * // Function returning location descriptor.
 * <Link to={location => ({ ...location, query: { name: 'ryan' } })}>
 *   Hello
 * </Link>
 *
 * @author Michael Hsu
 */

export const updatePathname: Func = pathname => location => {
  const locale = location.query.locale;
  return { pathname, query: { ...location.query, locale } };
};

export const updateLocale: Func = locale => location => {
  const pathname = location.pathname;
  return { pathname, query: { ...location.query, locale } };
};
