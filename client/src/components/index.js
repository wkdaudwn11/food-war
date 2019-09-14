import withSplitting from './withSplitting';

/** users */
export const SignIn = withSplitting(() => import('./users/SignIn'));
export const SignUp = withSplitting(() => import('./users/SignUp'));
