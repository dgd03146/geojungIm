import { Children, isValidElement } from 'react';

export const useSelect = () => {
	const getChildText = (children: React.ReactNode): string => {
		let childText = '';
		if (children) {
			Children.forEach(children, (child) => {
				if (isValidElement(child)) {
					childText += getChildText(child.props.children);
				} else if (typeof child === 'string' || typeof child === 'number') {
					childText += child;
				}
			});
		}
		return childText;
	};

	return { getChildText };
};
