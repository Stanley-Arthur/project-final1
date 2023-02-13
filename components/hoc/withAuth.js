import React, { useEffect } from "react";
import Router from "next/router";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        Router.push("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithAuth.getInitialProps = async (ctx) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    }

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps };
  };

  return WithAuth;
};

export default withAuth;