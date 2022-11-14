import React from "react";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import setAuthentication from "./setAutheticantion";
import { store } from "shared/common/store";
import render from "./render";
import RequiredAuth from "shared/components/RequiredAuth";
import { faker } from "@faker-js/faker";

const renderRequiredAuth = (children: React.ReactElement) => {
	const user_data = {
		full_name: faker.name.fullName()
	};
	setAuthentication({
		store,
		actionType: SIGNIN_TYPE,
		isAuthenticated: true,
		user_data,
	});

	return render(<RequiredAuth>{children}</RequiredAuth>);	
};

export default renderRequiredAuth;