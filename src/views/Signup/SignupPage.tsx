import FormSignup from "components/forms/formSignup/FormSignup";
import ContentWrapper from "components/globalComponents/contentWrapper/ContentWrapper";
import React, { FC } from "react";

const SignupPage: FC = () => {
  return (
    <ContentWrapper>
      <FormSignup />
    </ContentWrapper>
  );
};

export default SignupPage;
