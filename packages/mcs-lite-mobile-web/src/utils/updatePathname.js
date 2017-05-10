// @flow
import assocPath from 'ramda/src/assocPath';

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

const updatePathname: Func = pathname => assocPath(['pathname'], pathname);

export default updatePathname;
