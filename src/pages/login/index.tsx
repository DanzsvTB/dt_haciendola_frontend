import { AuthPage } from '@refinedev/antd';

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title=""
      formProps={
        {
          // initialValues: { email: "demo@refine.dev", password: "demodemo" },
        }
      }
    />
  );
};
