import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VerifyPage = () => {
	const params = useParams();
	useEffect(() => {
		const verify = async () => {
			try {
				if (params) console.log("verified");
			} catch (error) {
				console.log(error);
			}
		};
		verify();
	}, [params]);
	return <div>VerifyPage</div>;
};

export default VerifyPage;
