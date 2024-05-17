import { type HTMLAttributes, forwardRef } from 'react';

import { Typography } from '..';
import type { AtomProps } from '../../types/atoms';

export interface Props
	extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>,
		AtomProps {}

export const CardTitle = forwardRef<HTMLParagraphElement, Props>(
	({ children, ...restProps }, ref) => {
		return (
			<Typography.Heading level={3} ref={ref} {...restProps}>
				{children}
			</Typography.Heading>
		);
	},
);
