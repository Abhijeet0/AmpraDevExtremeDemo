import React from "react";
import { TextBoxV2 } from "../../components";

export const TextBoxV2Page = () => {
	return (
		<TextBoxV2
			placeholder="text input with prefix and suffix"
			prefix={<i class="dx-icon-search" />}
			suffix={<i class="dx-icon-money" />}
		/>
	);
};

export default TextBoxV2Page;
